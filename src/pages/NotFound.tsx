import { ArrowLink } from '../components/ui/primitives';
import { navItems } from '../content/site';

export function NotFound() {
  return (
    <div className="container-site pt-16 pb-28 md:pt-24 md:pb-36">
      <p className="label">Error 404</p>
      <h1 className="display mt-6 max-w-[14ch]">Esta página no existe.</h1>
      <p className="lead mt-6 max-w-[36ch] body-muted">Puede que el enlace haya cambiado. Estas secciones sí están disponibles:</p>
      <ul className="m-0 mt-10 max-w-xl list-none p-0">
        <li className="border-t border-rule">
          <ArrowLink to="/">Inicio</ArrowLink>
        </li>
        {navItems.map((n) => (
          <li key={n.href} className="border-t border-rule">
            <ArrowLink to={n.href}>{n.label}</ArrowLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
