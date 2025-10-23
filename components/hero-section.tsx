
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-accent/10 to-primary/20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-72 w-72 -translate-y-1/2 rounded-full bg-secondary/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight text-balance">
            Bienvenido a Loghinet Soluciones S.R.L
          </h1>

          <div className="grid grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                Estamos en todo el País
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
              <div className="text-3xl md:text-4xl font-black text-accent-foreground mb-2">
                +20
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Años de Trayectoria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
