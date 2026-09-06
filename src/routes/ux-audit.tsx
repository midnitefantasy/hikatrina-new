import { createFileRoute } from "@tanstack/react-router";
import { SubPageHeader } from "./case-studies";

export const Route = createFileRoute("/ux-audit")({
  component: UxAudit,
  head: () => ({
    meta: [
      { title: "Sample Analysis — UX Audit Thinking" },
      {
        name: "description",
        content:
          "How I run a UX audit: heuristics, flow mapping, severity scoring, and a prioritised fix list split by sprint and quarter.",
      },
      { property: "og:title", content: "Sample Analysis — UX Audit Thinking" },
      {
        property: "og:description",
        content: "A walkthrough of my UX audit method, from heuristics to a prioritised fix list.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  {
    no: "01",
    title: "Frame the job",
    body: "Before opening the product I write down the one job a user hires it for. Every finding later gets judged against that job, not against my taste.",
  },
  {
    no: "02",
    title: "Walk the flow cold",
    body: "First pass as a brand-new user, no docs, screen recording on. I note friction the moment I feel it — hesitation is data, and I lose it if I wait.",
  },
  {
    no: "03",
    title: "Heuristic sweep",
    body: "Second pass against Nielsen's ten plus my own list: system status, error recovery, effort per decision, and how much the UI asks users to remember.",
  },
  {
    no: "04",
    title: "Score severity honestly",
    body: "Each finding gets frequency × impact × workaround cost. This is what stops an audit from becoming a 90-item wishlist nobody acts on.",
  },
  {
    no: "05",
    title: "Split by horizon",
    body: "Ship this sprint (cheap, high impact), this quarter (structural), and park (interesting, not now). Teams need the cut line drawn for them.",
  },
];

const findings = [
  {
    issue: "Empty state offers no next action",
    severity: "High",
    fix: "Replace the illustration with one primary CTA and a 30-second sample import.",
  },
  {
    issue: "Errors surface after submit, not inline",
    severity: "High",
    fix: "Validate on blur; keep the submit button reachable without scrolling.",
  },
  {
    issue: "Settings uses 4 words for the same concept",
    severity: "Medium",
    fix: "Pick one term, update copy and docs in the same release.",
  },
];

function UxAudit() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      <SubPageHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Sample analysis
        </p>
        <h1 className="font-display text-4xl font-light md:text-6xl">
          How I audit an <em className="italic text-accent-bold">interface</em>
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          A teardown is only useful if the team knows what to do on Monday. Here's the
          method, end to end.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <section
              key={s.no}
              className="rounded-md border border-rule bg-background p-8 shadow-[3px_3px_0_0_var(--rule)]"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent-bold">
                Step {s.no}
              </span>
              <h2 className="mt-2 font-display text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>

        <h2 className="mt-20 font-display text-3xl font-light md:text-4xl">
          Sample <em className="italic text-accent-bold">findings</em>
        </h2>
        <div className="mt-8 divide-y divide-rule border-y border-rule">
          {findings.map((f) => (
            <div key={f.issue} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
              <p className="font-display text-lg md:col-span-5">{f.issue}</p>
              <div className="md:col-span-2">
                <span className="rounded-full px-3 py-1 text-xs tag-lemon">{f.severity}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">
                {f.fix}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
