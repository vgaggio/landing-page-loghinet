const highlights = [
  "13 Provincias",
  "57.000 Clientes"
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
            Operadores logísticos de Telecom Personal S.A.
          </h3>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nos encargamos de efectuar la logística de última milla de los ip
            pre pago en todo el canal tradicional. Atendemos las siguientes
            provincias: Jujuy, Salta, Tucumán, Catamarca, La Rioja, Mendoza,
            Córdoba, Bs As, Río Negro, Neuquén, Chubut, Santa Cruz y Tierra del
            Fuego. Llegando a más de 57.000 comercios.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
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
