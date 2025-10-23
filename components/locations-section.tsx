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

interface Supervisor {
  name: string;
  phone: string;
  area?: string;
}

interface Location {
  name: string;
  supervisors: Supervisor[];
}

export function LocationsSection() {
  const locations: Location[] = [
    {
      name: "Córdoba",
      supervisors: [{ name: "Nelson Moreno", phone: "351 379 0039" }],
    },
    {
      name: "Tucumán",
      supervisors: [{ name: "Jordán Herrera", phone: "381 574 2774" }],
    },
    {
      name: "Jujuy",
      supervisors: [{ name: "Matías Vargas", phone: "388 682 9333" }],
    },
    {
      name: "Catamarca",
      supervisors: [{ name: "Guillermo Rodríguez", phone: "351 323 7969" }],
    },
    {
      name: "Salta",
      supervisors: [{ name: "Matías Castillo", phone: "387 458 3958" }],
    },
    {
      name: "La Rioja",
      supervisors: [{ name: "Guillermo Rodríguez", phone: "351 323 7969" }],
    },
    {
      name: "Mendoza",
      supervisors: [{ name: "Gabriel Viscaino", phone: "261 632 7130" }],
    },
    {
      name: "Buenos Aires",
      supervisors: [
        {
          name: "Javier Rodríguez",
          phone: "332 961 4828",
          area: "AMBA Norte",
        },
        {
          name: "Luciano Peralta",
          phone: "236 438 8890",
          area: "Buenos Aires Centro",
        },
        {
          name: "Ignacio Villafañe",
          phone: "291 643 7073",
          area: "Costa Atlántica",
        },
      ],
    },
    {
      name: "Río Negro",
      supervisors: [{ name: "Carlos Ganin", phone: "298 459 3480" }],
    },
    {
      name: "Neuquén",
      supervisors: [{ name: "Carlos Ganin", phone: "298 459 3480" }],
    },
    {
      name: "Chubut",
      supervisors: [{ name: "Juan Cruz Oviedo", phone: "291 511 5410" }],
    },
    {
      name: "Santa Cruz",
      supervisors: [{ name: "Juan Cruz Oviedo", phone: "291 511 5410" }],
    },
    {
      name: "Tierra del Fuego",
      supervisors: [{ name: "Juan Cruz Oviedo", phone: "291 511 5410" }],
    },
  ];
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = (location: Location) => {
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
            ¿Tenes un comercio y necesitas contactarnos?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Contamos con oficinas y equipos técnicos en las siguientes
            provincias.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {locations.map((location, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleOpen(location)}
              className="basis-[calc(50%-0.5rem)] md:basis-[calc(33.333%-0.666rem)] bg-card/90 border border-border/60 rounded-2xl p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
            >
              <div className="text-2xl font-black">{location.name}</div>
              <span className="mt-2 block text-sm font-semibold text-muted-foreground">
                Ver supervisores del Área
              </span>
            </button>
          ))}
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
              {selectedLocation
                ? `Supervisores en ${selectedLocation.name}`
                : ""}
            </DialogTitle>
            <DialogDescription>
              Elegí contactarte con el asesor correspondiente
            </DialogDescription>
          </DialogHeader>
          {selectedLocation && (
            <ul className="space-y-3">
              {selectedLocation.supervisors.map((supervisor, idx) => (
                <li
                  key={idx}
                  className="flex flex-col rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-left text-sm text-muted-foreground shadow-sm"
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-card-foreground">
                      {supervisor.name}
                    </span>
                    <span className="text-right">{supervisor.phone}</span>
                  </div>
                  {"area" in supervisor && (
                    <span className="text-xs mt-1">{supervisor.area}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
