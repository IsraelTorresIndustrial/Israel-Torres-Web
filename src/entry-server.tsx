import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { matchRoute, staticPaths } from './routes';
import { routeMeta } from './seo/routeMeta';

export { staticPaths };

/** Renders one route to static HTML plus the head values for that route. */
export function render(path: string) {
  const html = renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
  );
  return { html, meta: routeMeta(matchRoute(path), path) };
}
