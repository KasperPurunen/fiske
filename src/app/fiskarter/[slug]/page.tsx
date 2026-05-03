import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DetailHero } from "@/components/detail-hero";
import { findSpecies, species } from "@/lib/data";

export function generateStaticParams() {
  return species.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = findSpecies(slug);
  if (!s) return {};
  return {
    title: `${s.name} – Fiskehörnan`,
    description: s.shortTip,
  };
}

export default async function SpeciesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = findSpecies(slug);
  if (!s) notFound();

  const sameCategory = species.filter(
    (x) => x.category === s.category && x.slug !== slug,
  );

  return (
    <>
      <DetailHero
        backHref="/fiskarter"
        backLabel="Tillbaka till alla arter"
        eyebrow={s.category}
        title={s.name}
        subtitle={s.latin}
        image={s.image}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg leading-relaxed">{s.intro}</p>

        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold tracking-tight">Fakta</h2>
            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-muted-foreground">Storlek</dt>
                <dd className="mt-0.5">{s.size}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Lever i</dt>
                <dd className="mt-0.5">{s.habitat}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Bästa metod</dt>
                <dd className="mt-0.5">{s.bestMethod}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Bästa bete</dt>
                <dd className="mt-0.5">{s.bestBait}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">Så fångar du den</h2>
        <ul className="mt-4 space-y-2">
          {s.howToCatch.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-primary">🎣</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">Visste du att…</h2>
        <ul className="mt-4 space-y-2">
          {s.funFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1">💡</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-md bg-muted p-4">
          <Badge className="mb-2" variant="secondary">Snabbtips</Badge>
          <p>{s.shortTip}</p>
        </div>
      </article>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-2xl font-bold tracking-tight">
            Andra arter i {s.category.toLowerCase()}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sameCategory.map((x) => (
              <Link key={x.slug} href={`/fiskarter/${x.slug}`} className="group">
                <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-md">
                  <CardContent className="p-5">
                    <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {x.name}
                    </h3>
                    <p className="mt-1 text-xs italic text-muted-foreground">
                      {x.latin}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {x.shortTip}
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
