import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { methods } from "@/lib/data";

export default function FiskemetoderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Metoder"
        title="Fiskemetoder"
        description="Det finns många sätt att fiska. Här är de vanligaste — och vilken som passar var. Klicka på en metod för att läsa mer."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="space-y-8">
          {methods.map((m, idx) => (
            <Link
              key={m.slug}
              href={`/fiskemetoder/${m.slug}`}
              className="block group"
            >
              <Card className="overflow-hidden pt-0 transition-all group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-md">
                <div className="grid md:grid-cols-2">
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-muted overflow-hidden ${
                      idx % 2 === 1 ? "md:order-last" : ""
                    }`}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {m.name}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">Säsong: {m.season}</Badge>
                      <Badge variant="outline">Vanlig fisk: {m.target}</Badge>
                    </div>
                    <p className="mt-4 text-base text-muted-foreground">
                      {m.shortText}
                    </p>
                    <p className="mt-4 text-sm font-medium text-primary">
                      Läs mer →
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
