import Image from "next/image";
import Link from "next/link";

type DetailHeroProps = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
};

export function DetailHero({
  backHref,
  backLabel,
  eyebrow,
  title,
  subtitle,
  image,
}: DetailHeroProps) {
  return (
    <section className="relative">
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 pb-8 sm:pb-12 text-white">
            <Link
              href={backHref}
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
            >
              ← {backLabel}
            </Link>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/90">
              {eyebrow}
            </p>
            <h1 className="mt-1 text-4xl sm:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-base text-white/80 italic">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
