/**
 * DEV-ONLY living style guide at /diseno (excluded from production builds).
 * The article sample below documents the template itself; it is not published content.
 */
import { PageHeader } from '../components/layout/PageHeader';
import { ArrowLink, Schematic, SectionHead, TagList } from '../components/ui/primitives';
import { ArticleView } from '../pages/ArticlesPages';
import { ArticleIndex } from '../components/sections/ArticleBlocks';
import type { Article } from '../content/articles';

const swatches = [
  ['paper', 'Papel — fondo base'],
  ['paper-2', 'Papel 2 — bandas alternas'],
  ['surface', 'Superficie — láminas de esquema'],
  ['ink', 'Tinta — texto principal'],
  ['ink-2', 'Tinta 2 — texto secundario'],
  ['ink-3', 'Tinta 3 — metadatos'],
  ['rule', 'Regla — líneas finas'],
  ['accent', 'Trazo — acento cobalto'],
];

const templateDemo: Article = {
  slug: 'plantilla',
  title: 'Plantilla editorial de artículos',
  dek: 'Muestra interna de cómo se verá un artículo publicado: medida de lectura, jerarquía y componentes de apoyo.',
  date: '2026-10-22',
  readingMinutes: 3,
  topics: ['Sistema de diseño'],
  body: [
    { type: 'p', text: 'Este texto describe la plantilla y no es contenido publicado. El cuerpo usa Newsreader con una medida de unos 68 caracteres para sostener lecturas largas sin fatiga.' },
    { type: 'h2', text: 'Subtítulos en grotesca' },
    { type: 'p', text: 'Los subtítulos cambian a Schibsted Grotesk para separar estructura de lectura. Los enlaces usan el color de trazo con subrayado fino.' },
    { type: 'quote', text: 'Las citas destacadas usan cursiva y una regla cobalto a la izquierda.', cite: 'Nota de diseño' },
    { type: 'list', items: ['Listas con sangría corta', 'Interlineado amplio', 'Sin viñetas decorativas'] },
    { type: 'table', caption: 'Tabla de ejemplo', head: ['Elemento', 'Fuente', 'Uso'], rows: [['Cuerpo', 'Newsreader', 'Lectura'], ['Títulos', 'Schibsted Grotesk', 'Estructura'], ['Metadatos', 'JetBrains Mono', 'Fechas, índices']] },
    { type: 'callout', text: 'Los destacados sirven para una idea clave por sección, nunca para decorar.' },
  ],
};

export default function DesignSystem() {
  return (
    <>
      <PageHeader crumbs={[{ label: 'Sistema de diseño' }]} title="Plano editorial" lead="Tokens y componentes del sitio. Página de desarrollo, no se publica." />
      <div className="container-site grid gap-24 pb-24">
        <section>
          <SectionHead label="Color" title="Paleta" />
          <ul className="m-0 mt-10 grid list-none grid-cols-2 gap-4 p-0 md:grid-cols-4">
            {swatches.map(([token, desc]) => (
              <li key={token}>
                <div className="h-20 border border-rule" style={{ background: `var(--${token})` }} />
                <p className="label label-strong mt-2">--{token}</p>
                <p className="small body-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <SectionHead label="Tipografía" title="Escala" />
          <div className="mt-10 grid gap-6">
            <p className="display-name">Aa Display</p>
            <p className="display">Display de página</p>
            <p className="h-section">Título de sección</p>
            <p className="h-sub">Subtítulo</p>
            <p className="lead">Lead editorial en Newsreader.</p>
            <p>Cuerpo 17px en Schibsted Grotesk.</p>
            <p className="label">Etiqueta mono 13px</p>
          </div>
        </section>
        <section>
          <SectionHead label="Acciones" title="Botones y enlaces" />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a className="btn btn-primary" href="#">Primario</a>
            <a className="btn btn-ghost" href="#">Secundario</a>
            <ArrowLink to="/proyectos">Enlace con flecha</ArrowLink>
            <a className="link" href="#">Enlace en texto</a>
          </div>
          <div className="mt-8">
            <TagList tags={['RAG', 'Applied AI', 'Product Discovery']} />
          </div>
        </section>
        <section>
          <SectionHead label="Firma" title="Esquema" />
          <div className="mt-10">
            <Schematic steps={[{ name: 'Problema' }, { name: 'Estructura' }, { name: 'Prototipo', core: true }, { name: 'Validación' }]} />
          </div>
        </section>
        <section>
          <SectionHead label="Ideas" title="Vista previa de artículos" />
          <div className="mt-10">
            <ArticleIndex items={[templateDemo]} />
          </div>
        </section>
      </div>
      <ArticleView article={templateDemo} />
    </>
  );
}
