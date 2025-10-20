const highlights = [
  "Buen clima laboral",
  "Vínculos positivos",
  "Oportunidad de crecimiento",
];

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/80 px-6 py-2 rounded-full mb-4 shadow-sm">
            <h2 className="text-sm font-black text-accent-foreground uppercase tracking-wide">
              Quiénes Somos
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Tu socio en telecomunicaciones
          </h3>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Somos un agente oficial de Telecom Personal dedicado a la venta de
            teléfonos celulares, accesorios y soluciones digitales pensadas para
            cada necesidad. Con presencia física y un canal online, acompañamos
            a personas y empresas con asesoramiento profesional y un equipo que
            impulsa relaciones humanas positivas y crecimiento constante.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {highlights.map((title) => (
            <div
              key={title}
              className="bg-card/90 border border-border/60 flex min-h-[140px] items-center justify-center rounded-2xl p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <h4 className="text-lg font-semibold text-foreground">{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
