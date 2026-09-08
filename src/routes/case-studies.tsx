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
    title: "Inbox Revamp",
    context: "In-app promotions were fragmented across multiple touchpoints, making marketing content easy to miss and difficult for users to revisit.",
    thinking: [
      "Identified fragmented promotional touchpoints and mapped how users currently discovered marketing content.",
      "Consolidated promotions and marketing assets into a single destination — the Inbox.",
      "Mapped the end-to-end journey from discovering a promotion → viewing its details → taking the intended action.",
      "Defined the Inbox structure and prioritization logic to balance marketing needs with user relevance.",
    ],
    outcome: "Created a centralized marketing surface that made promotions easier to discover and revisit, while giving the marketing team a more structured channel for in-app campaigns",
    tags: ["Engagement", "Marketing Product", "Mobile-App"],
  },
  {
    no: "02",
    title: "Building Loyalty Program",
    context: "High-value users had little incentive to stay loyal beyond the core product experience.",
    thinking: [
      "Identified the highest-value user segment by analyzing LTV and weekly transaction behavior",
      "Analyzed customer needs and motivations to understand what they find genuinely valuable",
      "Benchmarked competitor loyalty programs and identified mechanics that could be adapted to our product",
      "Designed user segmentation and differentiated incentives based on transaction behavior and value",
      "Mapped the end-to-end loyalty journey, from eligibility and earning rewards to redemption and continued engagement"
    ],
    outcome: "Launched a loyalty program designed around high-value user behavior, creating a new mechanism to increase repeat transactions and strengthen customer retention.",
    tags: ["Customer Experience", "Engagement", "Analysis"],
  },
   {
    no: "03",
    title: "Reducing Transaction Friction during High Traffic Volume",
      context: "Transaction success rates deteriorated during peak traffic, creating significant friction in the payment journey.",
  thinking: [
    "Identify where the friction was during high-traffic period.",
    "Worked with engineering and risk stakeholders to distinguish genuine security requirements from unnecessary friction.",
    "Segmented transactions based on risk and eligibility to identify where a lower-friction experience could be safely introduced.",
    "Designed a streamlined transaction flow for qualifying transactions while maintaining the required controls.",
    "Aligned product, engineering, and risk stakeholders on rollout criteria and guardrails."
  ],
  outcome: "Launched a streamlined transaction flow for eligible users, reducing unnecessary friction while maintaining appropriate security controls.",
  tags: ["Customer Experience", "Payments", "Risk & Compliance"]
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

              <div className="mt-6 text-lg">
                <p className="mb-3 text-s uppercase tracking-[0.5em] text-accent-bold">OUTCOME</p>
                <span className="squiggle">{p.outcome}</span>
              </div>

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
          🐈hiKatrina<span className="text-accent-bold">.</span>
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
