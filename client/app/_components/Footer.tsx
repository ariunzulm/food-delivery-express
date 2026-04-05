import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { NomNomLogo } from "./NomNomLogo";

export default function Footer() {
  return (
    <footer className="relativeoverflow-hidden pt-15">
      <div className="bg-red-500 h-23 w-full flex items-center justify-between overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="whitespace-nowrap text-2xl font-bold tracking-tight text-white"
          >
            FAST DELIVERY &nbsp;
          </div>
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-zinc-800">
          <div className="flex flex-col gap-5">
            <NomNomLogo />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              From our kitchen to your door — fast, warm, and made with care.
            </p>
            <p className="text-xs text-zinc-600 mt-auto">
              © {new Date().getFullYear()} Swift Delivery. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest text-red-400 uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:nomnom@delivery.com"
                className="group flex items-start gap-3 text-sm"
              >
                <div className="mt-0.5 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-red-500/10 group-hover:border group-hover:border-red-500/30 transition-all">
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">Email us</p>
                  <p className="text-muted-foreground group-hover:text-red-400 transition-colors">
                    nomnom@delivery.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">Call us</p>
                  <p className="text-muted-foreground">(976) 9989-7788</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">Delivery zone</p>
                  <p className="text-muted-foreground">
                    Ulaanbaatar & surroundings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest text-red-500 uppercase">
              Menu
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                { label: "Appetizers", href: "/" },
                { label: "Desserts", href: "/" },
                { label: "Salads", href: "/" },
                { label: "Side Dishes", href: "/" },
                { label: "Pizzas", href: "/" },
                { label: "Brunch", href: "/" },
                { label: "Main Dishes", href: "/" },
                { label: "Beverages", href: "/" },
                { label: "Fish & Seafood", href: "/" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-zinc-400 hover:text-red-300 transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>Delivering happiness across Ulaanbaatar 🇲🇳</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
