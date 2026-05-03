import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { waterImages } from "@/lib/images";

type Water = {
  name: string;
  region: string;
  type: "Sjö" | "Å/Älv";
  image: string;
  knownFor: string[];
  text: string;
};

const waters: Water[] = [
  {
    name: "Vänern",
    region: "Värmland & Västra Götaland",
    type: "Sjö",
    image: waterImages.vanern,
    knownFor: ["Lax", "Öring", "Gädda", "Gös"],
    text:
      "Sveriges största sjö och en av Europas finaste insjöar för lax och öring. Trolling är populärt här — många världsrekord på insjölax har satts i Vänern.",
  },
  {
    name: "Vättern",
    region: "Småland, Östergötland, Västergötland",
    type: "Sjö",
    image: waterImages.vattern,
    knownFor: ["Röding", "Öring", "Sik", "Lax"],
    text:
      "Klart, djupt och kallt — Vättern är känt för sin röding. Vattnet är så rent att man nästan kan se botten många meter ner. Trolling och pimpel är vanligt här.",
  },
  {
    name: "Mälaren",
    region: "Stockholm, Södermanland, Uppland, Västmanland",
    type: "Sjö",
    image: waterImages.malaren,
    knownFor: ["Gös", "Gädda", "Abborre"],
    text:
      "Sveriges tredje största sjö och en favorit för gösfiske. Tusentals öar och vikar gör att det alltid finns nya platser att utforska — perfekt för båtfiske.",
  },
  {
    name: "Storsjön",
    region: "Jämtland",
    type: "Sjö",
    image: waterImages.storsjon,
    knownFor: ["Öring", "Röding", "Harr", "Sik"],
    text:
      "Stor och vacker sjö i Jämtland med fjällen som bakgrund. Här finns både öring och röding — och kanske även sjöodjuret Storsjöodjuret om man har tur (eller fantasi).",
  },
  {
    name: "Mörrumsån",
    region: "Blekinge",
    type: "Å/Älv",
    image: waterImages.morrumsan,
    knownFor: ["Lax", "Havsöring"],
    text:
      "En av Sveriges mest klassiska laxåar. Hit kommer flugfiskare från hela världen för att fånga storlax och havsöring under våren och hösten. Säsongen styrs av strikta regler.",
  },
];

export default function FiskevattenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vatten"
        title="Fiskevatten i Sverige"
        description="Några av landets bästa sjöar och åar — och vad de är kända för."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="space-y-8">
          {waters.map((w, idx) => (
            <Card key={w.name} className="overflow-hidden pt-0">
              <div className="grid lg:grid-cols-5">
                <div
                  className={`relative aspect-[16/10] lg:aspect-auto lg:col-span-3 lg:min-h-[320px] bg-muted ${
                    idx % 2 === 1 ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    src={w.image}
                    alt={w.name}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 sm:p-8 lg:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{w.type}</Badge>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {w.region}
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                    {w.name}
                  </h2>
                  <p className="mt-3 text-base text-muted-foreground">{w.text}</p>
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Känt för
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {w.knownFor.map((fish) => (
                        <Badge key={fish} variant="secondary">
                          🐟 {fish}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
