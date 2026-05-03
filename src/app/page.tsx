import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { heroImage } from "@/lib/images";

const featurePages = [
  {
    href: "/fiskeutrustning",
    emoji: "🎣",
    title: "Fiskeutrustning",
    text: "Spö, rullar, drag, krokar — vad du behöver för att komma igång.",
  },
  {
    href: "/fiskemetoder",
    emoji: "🪶",
    title: "Fiskemetoder",
    text: "Flugfiske, spinn, mete, pimpel och trolling — så funkar de.",
  },
  {
    href: "/fiskarter",
    emoji: "🐟",
    title: "Fiskarter",
    text: "Hur du känner igen fiskarna och vilka knep som funkar bäst.",
  },
  {
    href: "/fiskevatten",
    emoji: "🏞️",
    title: "Fiskevatten",
    text: "Sveriges bästa sjöar och åar — och vad de är kända för.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src={heroImage}
            alt="Person som metar vid vattnet"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-10 sm:pb-16 text-white">
              <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/90">
                Fiskehörnan
              </p>
              <h1 className="mt-2 max-w-3xl text-4xl sm:text-6xl font-bold tracking-tight">
                Allt om fiske — från krok till fångst.
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
                En guide för dig som är ny på fiske eller bara vill lära dig
                mer. Vi går igenom utrustning, metoder, fiskarter och de
                bästa fiskevattnen i Sverige.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Varför finns sidan?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Vi tycker att fiske är ett av det roligaste som finns — det är
            spännande, lugnt och du är ute i naturen. Sidan är gjord för att
            samla det vi själva har lärt oss, så att fler kan komma ut och
            prova. Här får du grunderna förklarade enkelt, utan svåra ord.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featurePages.map((page) => (
            <Link key={page.href} href={page.href} className="group">
              <Card className="h-full transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md">
                <CardContent className="p-6">
                  <div className="text-3xl" aria-hidden>
                    {page.emoji}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight group-hover:text-primary">
                    {page.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {page.text}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
