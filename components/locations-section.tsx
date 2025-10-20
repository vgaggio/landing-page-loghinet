"use client";

import { useState } from "react";

import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";

export function LocationsSection() {
  const locations = [
    {
      name: "Córdoba",
      addresses: [
        "9 de Julio N°1",
        "Av Fuerza Aérea 1700",
        "Dinosaurio Mall PB - Local 5",
        "Av. Sabattini 3250 - Hiper Libertad - Local 40",
        "General Paz 98",
        "Mauricio Yadarola 1699",
        "Walmart Talleres - Local 2",
        "Ricardo Rojas 7571",
        "Paseo Rivera Indarte - Local 180",
      ],
    },
    {
      name: "Tucumán",
      addresses: [
        "Av Néstor Kirchner 3440 - Local 100",
        "Castelar esq Suipacha - Local 550",
        "Maipu 187",
      ],
    },
    {
      name: "Jujuy",
      addresses: ["Sixto Ovejero esq. Jujuy (Ledesma)", "Rogelio Lean 157"],
    },
    {
      name: "Catamarca",
      addresses: ["Rivadavia 501", "Salta 540"],
    },
    {
      name: "Salta",
      addresses: ["Hiper Libertad: Av. Tavella - Local 441", "Florida 304"],
    },
    {
      name: "La Rioja",
      addresses: ["San Nicolás de Bari 666"],
    },
  ];
  const [selectedLocation, setSelectedLocation] = useState<
    (typeof locations)[number] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = (location: (typeof locations)[number]) => {
    setSelectedLocation(location);
    setIsDialogOpen(true);
  };

  return (
    <section
      id="ubicaciones"
      className="py-24 bg-gradient-to-br from-background via-primary/10 to-secondary/10 text-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/2 w-72 h-72 -translate-x-1/2 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/80 px-6 py-2 rounded-full mb-4 shadow-sm">
            <MapPin size={20} className="text-accent-foreground" />
            <h2 className="text-sm font-black text-accent-foreground uppercase tracking-wide">
              Dónde Estamos
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 text-balance">
            Presencia donde nos necesites.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Contamos con oficinas y equipos técnicos en las siguientes
            provincias.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {locations.map((location, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleOpen(location)}
              className="bg-card/90 border border-border/60 rounded-2xl p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
            >
              <div className="text-2xl font-black">{location.name}</div>
              <span className="mt-2 block text-sm font-semibold text-muted-foreground">
                Ver direcciones
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:rr.hh@newsmart.com.ar"
            className="text-primary hover:underline font-bold text-lg"
          >
            rr.hh@newsmart.com.ar
          </a>
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setSelectedLocation(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedLocation ? `Locales en ${selectedLocation.name}` : ""}
            </DialogTitle>
            <DialogDescription>
              Elegí la sucursal que te quede más cómoda.
            </DialogDescription>
          </DialogHeader>
          {selectedLocation && (
            <ul className="space-y-3">
              {selectedLocation.addresses.map((address, idx) => (
                <li
                  key={idx}
                  className="rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-left text-sm text-muted-foreground shadow-sm"
                >
                  {address}
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
