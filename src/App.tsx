import { lazy, Suspense, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { RouterProvider, useRouter } from './router';
import { matchRoute, type Route } from './routes';
import { applyRouteMeta, routeMeta } from './seo/routeMeta';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectCase } from './pages/ProjectCase';
import { CredentialsPage } from './pages/CredentialsPage';
import { ArticlePage, ArticlesPage } from './pages/ArticlesPages';
import { NotFound } from './pages/NotFound';

const DesignSystem = import.meta.env.DEV ? lazy(() => import('./dev/DesignSystem')) : null;

function Page({ route }: { route: Route }) {
  switch (route.name) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'experience':
      return <ExperiencePage />;
    case 'projects':
      return <ProjectsPage />;
    case 'project':
      return <ProjectCase slug={route.slug} />;
    case 'credentials':
      return <CredentialsPage />;
    case 'articles':
      return <ArticlesPage />;
    case 'article':
      return <ArticlePage slug={route.slug} />;
    case 'design':
      return DesignSystem ? (
        <Suspense fallback={null}>
          <DesignSystem />
        </Suspense>
      ) : (
        <NotFound />
      );
    default:
      return <NotFound />;
  }
}

/** Progressive reveal: content is visible without JS; only below-the-fold blocks animate. */
function useReveal(path: string) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])'));
    const fold = window.innerHeight * 0.92;
    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < fold) n.setAttribute('data-revealed', 'now');
    });
    document.documentElement.classList.add('js-motion');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-revealed', 'in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    nodes.filter((n) => !n.hasAttribute('data-revealed')).forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [path]);
}

function Shell() {
  const { path } = useRouter();
  const route = matchRoute(path);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      // Prerendered <head> is already correct on first load, except for unknown URLs
      // that arrive through the SPA fallback with the home <head>.
      if (route.name !== 'notfound') return;
    }
    applyRouteMeta(routeMeta(route, path));
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

  useReveal(path);

  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Page route={route} />
      </main>
      <Footer variant={route.name === 'home' ? 'full' : 'compact'} />
    </>
  );
}

export default function App({ initialPath }: { initialPath?: string }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <Shell />
    </RouterProvider>
  );
}
