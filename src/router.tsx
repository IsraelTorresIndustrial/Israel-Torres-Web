/**
 * Minimal history router (no dependency). Works with prerendered HTML:
 * the server passes `initialPath`, the client reads window.location.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';

export function normalizePath(path: string): string {
  let p = path.split('?')[0].split('#')[0] || '/';
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  if (p.endsWith('/index.html')) p = p.slice(0, -'/index.html'.length) || '/';
  return p || '/';
}

interface RouterValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterValue>({ path: '/', navigate: () => {} });

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    return false;
  }
  const el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (el) {
    el.scrollIntoView({ block: 'start' });
    return true;
  }
  return false;
}

export function RouterProvider({ initialPath, children }: { initialPath?: string; children: ReactNode }) {
  const [path, setPath] = useState(() =>
    normalizePath(initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/')),
  );

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.href);
    const next = normalizePath(url.pathname);
    const same = next === normalizePath(window.location.pathname);
    window.history.pushState({}, '', url.pathname + url.search + url.hash);

    if (same) {
      scrollToHash(url.hash);
      return;
    }

    const afterCommit = () => {
      if (scrollToHash(url.hash)) return;
      // Move focus to the new page heading so screen readers announce the change.
      const heading = document.querySelector<HTMLElement>('main h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    };
    const commit = () => {
      flushSync(() => setPath(next));
      afterCommit();
    };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduce) doc.startViewTransition(commit);
    else commit();
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/** Crawlable <a href> that navigates client-side for internal paths. */
export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate, path } = useRouter();
  const handle = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank' ||
      !to.startsWith('/')
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  const isCurrent = normalizePath(to) === path && !to.includes('#');
  return (
    <a href={to} onClick={handle} aria-current={isCurrent ? 'page' : undefined} {...rest}>
      {children}
    </a>
  );
}
