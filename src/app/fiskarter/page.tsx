import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { species, type Species } from "@/lib/data";

function SpeciesCard({ s }: { s: Species }) {
  return (
    <Link href={`/fiskarter/${s.slug}`} className="block group">
      <Card className="overflow-hidden pt-0 h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary group-hover:shadow-md">
        <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden">
          <Image
            src={s.image}
            alt={s.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {s.name}
            </h3>
            <span className="text-xs italic text-muted-foreground">{s.latin}</span>
          </div>

          <dl className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-medium text-muted-foreground">Storlek</dt>
              <dd>{s.size}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Lever i</dt>
              <dd>{s.habitat}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Bästa metod</dt>
              <dd>{s.bestMethod}</dd>
            </div>
            <div>
              <dt className="font-medium text-muted-foreground">Bästa bete</dt>
              <dd>{s.bestBait}</dd>
            </div>
          </dl>

          <div className="mt-4 rounded-md bg-muted p-3">
            <Badge className="mb-2" variant="secondary">Tips</Badge>
            <p className="text-sm">{s.shortTip}</p>
          </div>
          <p className="mt-4 text-sm font-medium text-primary">Läs mer →</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function FiskarterPage() {
  const freshwater = species.filter((s) => s.category === "Sötvatten");
  const saltwater = species.filter((s) => s.category === "Saltvatten");

  return (
    <>
      <PageHeader
        eyebrow="Arter"
        title="Fiskarter"
        description="Lär känna de vanligaste fiskarterna i Sverige — och hur du fångar dem bäst. Klicka på en art för att läsa mer."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          🏞️ Sötvatten
        </h2>
        <p className="mt-2 text-muted-foreground">
          Fiskar i sjöar, åar och älvar.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {freshwater.map((s) => (
            <SpeciesCard key={s.slug} s={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 sm:pb-14">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          🌊 Saltvatten
        </h2>
        <p className="mt-2 text-muted-foreground">
          Fiskar längs Sveriges kuster.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {saltwater.map((s) => (
            <SpeciesCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
    </>
  );
}
