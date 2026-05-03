import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { gear } from "@/lib/data";

const checklist = [
  "Fiskekort för platsen där du fiskar",
  "Avbitartång för att få loss krokar",
  "En liten väska eller låda för dragen",
  "Linklippare eller sax",
  "Mått eller våg om du vill se hur stor fångsten är",
  "Solglasögon — du ser fisken bättre i vattnet",
];

export default function FiskeutrustningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utrustning"
        title="Fiskeutrustning"
        description="Här går vi igenom det viktigaste du behöver för att börja fiska — och varför. Klicka på en grej för att läsa mer."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gear.map((item) => (
            <Link
              key={item.slug}
              href={`/fiskeutrustning/${item.slug}`}
              className="block group"
            >
              <Card className="overflow-hidden pt-0 h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-md">
                <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h2>
                    <Badge variant="secondary">{item.badge}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.shortText}
                  </p>
                  <p className="mt-3 text-sm font-medium text-primary">
                    Läs mer →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border bg-muted/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight">Bra att ha med</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Småsaker som gör fiskedagen smidigare.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
