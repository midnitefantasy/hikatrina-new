import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudies,
  head: () => ({
    meta: [
      { title: "Sample Case Studies — Product Management" },
      {
        name: "description",
        content:
          "Product management case studies: the context, the reasoning behind each decision, and the outcome that shipped.",
      },
      { property: "og:title", content: "Sample Case Studies — Product Management" },
      {
        property: "og:description",
        content: "Context, product thinking, and outcomes from shipped product work.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

// ✏️ Add a new entry here for each case study — the page renders automatically.
const projects = [
  {
    no: "01",
    title: "Onboarding Revamp",
    context: "Activation was stuck at 38% for a B2B SaaS tool.",
    thinking: [
      "Mapped the first-run funnel and found the drop-off was a permissions wall, not a value problem.",
      "Reordered the aha-moment before setup, cut 6 steps to 3.",
    ],
    outcome: "Activation ↑ to 54% in 6 weeks.",
    tags: ["Activation", "Funnel", "B2B SaaS"],
  },
  {
    no: "02",
    title: "Deck System for Seed Raise",
    context: "Founder had 40 slides and no story.",
    thinking: [
      "Reframed the narrative from features to a market-shift argument.",
      "Built a 12-slide template the team now reuses for every update.",
    ],
    outcome: "Closed a $1.8M seed round.",
    tags: ["Narrative", "Fundraising", "Templates"],
  },
];

const tagStyles = ["tag-lemon", "tag-lavender", "tag-aqua"];

function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      <SubPageHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Case studies
        </p>
        <h1 className="font-display text-4xl font-light md:text-6xl">
          Product <em className="italic text-accent-bold">thinking</em>
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Not just what shipped — the reasoning behind it.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.no}
              className="group relative rounded-md border border-rule bg-background p-8 shadow-[4px_4px_0_0_var(--rule)] transition-shadow hover:shadow-[6px_6px_0_0_var(--accent-soft)] md:p-10"
            >
              <span className="absolute -top-3 right-6 rounded-full bg-ink px-3 py-1 text-xs font-medium text-accent-lemon">
                {p.no}
              </span>
              <h2 className="font-display text-2xl md:text-3xl">{p.title}</h2>
              <p className="mt-3 text-sm italic text-muted-foreground">{p.context}</p>

              <div className="mt-6 border-l-2 border-dashed border-accent-bold/50 pl-5">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent-bold">
                  How I thought about it
                </p>
                <ul className="space-y-2">
                  {p.thinking.map((t) => (
                    <li key={t} className="flex gap-2 text-sm leading-relaxed">
                      <span aria-hidden className="text-accent-bold">✦</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 font-display text-lg">
                <span className="squiggle">{p.outcome}</span>
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs ${tagStyles[i % tagStyles.length]}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export function SubPageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Folio<span className="text-accent-bold">.</span>
        </Link>
        <Link
          to="/"
          className="rounded-full border border-ink px-4 py-1.5 text-xs font-medium transition-colors hover:bg-accent-lemon hover:text-ink"
        >
          ← Back home
        </Link>
      </div>
    </header>
  );
}
