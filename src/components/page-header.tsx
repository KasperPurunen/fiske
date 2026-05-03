type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-muted to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
