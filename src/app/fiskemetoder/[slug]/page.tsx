import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DetailHero } from "@/components/detail-hero";
import { findMethod, methods } from "@/lib/data";

export function generateStaticParams() {
  return methods.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = findMethod(slug);
  if (!m) return {};
  return {
    title: `${m.name} – Fiskehörnan`,
    description: m.shortText,
  };
}

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const method = findMethod(slug);
  if (!method) notFound();

  const otherMethods = methods.filter((m) => m.slug !== slug);

  return (
    <>
      <DetailHero
        backHref="/fiskemetoder"
        backLabel="Tillbaka till alla metoder"
        eyebrow="Fiskemetod"
        title={method.name}
        image={method.image}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Säsong: {method.season}</Badge>
          <Badge variant="outline">Vanlig fisk: {method.target}</Badge>
        </div>

        <p className="mt-6 text-lg leading-relaxed">{method.intro}</p>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">Så funkar det</h2>
        <ol className="mt-4 space-y-3">
          {method.howItWorks.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">När och var</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {method.whenWhere}
        </p>

        <h2 className="mt-10 text-2xl font-bold tracking-tight">
          Tips för nybörjare
        </h2>
        <ul className="mt-4 space-y-2">
          {method.beginnerTips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-primary">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </article>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-2xl font-bold tracking-tight">Andra metoder</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherMethods.map((m) => (
              <Link key={m.slug} href={`/fiskemetoder/${m.slug}`} className="group">
                <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-md">
                  <CardContent className="p-5">
                    <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {m.shortText}
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
