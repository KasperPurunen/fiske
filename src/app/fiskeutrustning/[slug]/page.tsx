import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DetailHero } from "@/components/detail-hero";
import { findGear, gear } from "@/lib/data";

export function generateStaticParams() {
  return gear.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = findGear(slug);
  if (!g) return {};
  return {
    title: `${g.name} – Fiskehörnan`,
    description: g.shortText,
  };
}

export default async function GearDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = findGear(slug);
  if (!g) notFound();

  const others = gear.filter((x) => x.slug !== slug);

  return (
    <>
      <DetailHero
        backHref="/fiskeutrustning"
        backLabel="Tillbaka till all utrustning"
        eyebrow="Utrustning"
        title={g.name}
        image={g.image}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <Badge variant="secondary">{g.badge}</Badge>

        <p className="mt-6 text-lg leading-relaxed">{g.intro}</p>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">
          Vad du ska titta på
        </h2>
        <ul className="mt-4 space-y-2">
          {g.whatToLookFor.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-primary">→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Card className="mt-10 border-primary/40 bg-primary/5">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              💡 Nybörjartips
            </h2>
            <p className="mt-3">{g.beginnerPick}</p>
          </CardContent>
        </Card>
      </article>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-2xl font-bold tracking-tight">Annan utrustning</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((x) => (
              <Link
                key={x.slug}
                href={`/fiskeutrustning/${x.slug}`}
                className="group"
              >
                <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-md">
                  <CardContent className="p-5">
                    <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {x.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {x.shortText}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
