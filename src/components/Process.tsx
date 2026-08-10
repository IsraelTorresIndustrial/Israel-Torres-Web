import { portfolioData } from '../data';

export function Process() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-night py-24 text-white md:py-32">
      <div className="signal-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.1]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-acid">Método / 03</p>
            <h2 className="text-balance mt-5 max-w-[520px] text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-6xl">
              La innovación útil empieza con buenas preguntas.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[650px] text-lg leading-8 text-white/60 md:text-xl md:leading-9">
              Mi proceso no parte de la tecnología. Parte de entender qué necesita cambiar y para quién; luego busco la herramienta más simple que permita avanzar.
            </p>
          </div>
        </div>

        <div className="relative mt-20 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.process.map((item, index) => (
            <article key={item.step} className="group relative min-h-[300px] bg-night/85 p-7 backdrop-blur-sm md:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-acid">{item.step}</span>
                {index < portfolioData.process.length - 1 && <span className="font-mono text-lg text-white/20">→</span>}
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/52">{item.desc}</p>
              </div>
              <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-acid transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
