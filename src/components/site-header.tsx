import Link from "next/link";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/fiskeutrustning", label: "Fiskeutrustning" },
  { href: "/fiskemetoder", label: "Fiskemetoder" },
  { href: "/fiskarter", label: "Fiskarter" },
  { href: "/fiskevatten", label: "Fiskevatten" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-2xl" aria-hidden>🎣</span>
          <span className="text-lg text-primary">Fiskehörnan</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer rounded-md p-2 hover:bg-accent" aria-label="Meny">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-popover p-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
