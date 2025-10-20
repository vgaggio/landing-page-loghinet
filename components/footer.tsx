import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/loghinet",
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/loghinet/",
      icon: Instagram,
    },
    {
      label: "LinkedIn",
      href: "https://ar.linkedin.com/company/loghinet-soluciones-srl",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-background/95 to-secondary/20 text-foreground border-t border-border/80">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 text-center md:text-left">
            <Link href="#inicio" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Loghinet"
                width={160}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Conectamos personas y negocios con la tecnología de Telecom
              Personal.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-12 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/80 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border/80 pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} Loghinet Soluciones S.R.L. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
