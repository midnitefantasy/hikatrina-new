import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Katrina's Portfolio" },
      {
        name: "description",
        content:
          "Katrina's portfolio as a product manager specialized in product strategy, business deck reviews & templates, and UX audits",
      },
      { property: "og:title", content: "Katrina's Portfolio" },
      {
        property: "og:description",
        content:
          "Product management, business deck reviews, UX audits, and work experiences of Katrina",
      },
    ],
  }),
});

const services = [
  {
    no: "01",
    title: "Product Management",
    desc: "From discovery to launch — roadmaps, specs, and the boring spreadsheets that make great products ship.",
    to: "/case-studies" as const,
    linkLabel: "Sample Case",
    tags: ["Strategy", "Product Discovery", "Roadmap"],
  },
  {
    no: "02",
    title: "Business Analysis & Deck",
    desc: "Investor decks, sales decks, internal narratives. I rebuild the story, the structure, and the slide system.",
    to: "/deck-samples" as const,
    linkLabel: "Sample Work",
    tags: ["Pitch", "Narrative", "Data Analysis"],
  },
  {
    no: "03",
    title: "UX Audit",
    desc: "A heuristic teardown of your product with prioritised fixes — what to ship this sprint vs. this quarter.",
    to: "/ux-audit" as const,
    linkLabel: "Sample Analysis",
    tags: ["Heuristics", "Flows", "Prioritisation"],
  },
];

// ✏️ Add a new entry here for each role — the section below renders automatically.
const experience = [
  {
    period: "2023 — Now",
    role: "Senior Product Manager",
    company: "B2B SaaS platform",
    points: [
      "Own activation and retention for the core workspace product.",
      "Rebuilt the onboarding funnel with design and growth engineering.",
    ],
  },
  {
    period: "2020 — 2023",
    role: "Product Manager",
    company: "Marketplace startup",
    points: [
      "Led seller tooling from first spec to 12k monthly active sellers.",
      "Set up the discovery cadence the team still runs today.",
    ],
  },
  {
    period: "2018 — 2020",
    role: "Business Analyst",
    company: "Consulting",
    points: [
      "Client research, process mapping, and a lot of decks.",
      "Where the deck-review habit started.",
    ],
  },
];

// ✏️ Add a new AI side project here — the section below renders automatically.
const personalProjects = [
  {
    emoji: "🤖",
    title: "Deck Doctor",
    note: "An AI assistant that reads a pitch deck and rewrites the narrative flow.",
    tag: "LLM · Prototype",
  },
  {
    emoji: "🧭",
    title: "Audit Copilot",
    note: "Turns screen recordings into a scored list of usability findings.",
    tag: "Vision · WIP",
  },
  {
    emoji: "📚",
    title: "Second Brain Bot",
    note: "A retrieval assistant over my product notes, specs and retros.",
    tag: "RAG · Personal",
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-rule bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Folio<span className="text-accent-bold">.</span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#work" className="hover:text-accent-bold transition-colors">Work</a>
            <a href="#experience" className="hover:text-accent-bold transition-colors">Experience</a>
            <a href="#personal" className="hover:text-accent-bold transition-colors">AI projects</a>
            <a href="#contact" className="hover:text-accent-bold transition-colors">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-ink px-4 py-1.5 text-xs font-medium transition-colors hover:bg-accent-lemon hover:text-ink"
          >
            Say hi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:px-10 md:pt-28 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8 fade-up">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              HIKATRINA · 2026
            </p>
            <h1 className="font-display text-5xl font-light leading-[1.02] md:text-8xl">
              I turn{" "}
              <em className="squiggle italic text-accent-bold">problems</em>,
              <br />
              into clear <em className="squiggle italic text-accent-bold">product solutions</em>,
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Part product manager, part business analyst, part UX observer, part adventurer. I connect the dots, 
              challenge assumptions, make products work — that <it> feels good </it>.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="relative overflow-hidden rounded-sm border border-rule">
              <img
                src={portrait}
                alt="Portrait"
                width={896}
                height={1152}
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Currently: open to selected projects.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines strip */}
      <div className="border-y border-rule py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 font-display text-2xl font-light md:px-10 md:text-4xl">
          <span>Product</span>
          <span className="text-accent-bold">✦</span>
          <span className="italic">Decks</span>
          <span className="text-accent-bold">✦</span>
          <span>UX Audits</span>
          <span className="text-accent-bold">✦</span>
          <span className="italic">AI side projects</span>
        </div>
      </div>


      {/* Services / Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-32">
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              What I do
            </p>
            <h2 className="font-display text-4xl font-light md:text-6xl">Services</h2>
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">
            ({String(services.length).padStart(2, "0")})
          </span>
        </div>

        <div className="divide-y divide-rule border-y border-rule">
          {services.map((s) => (
            <article
              key={s.no}
              className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="text-sm text-muted-foreground md:col-span-1">{s.no}</div>
              <h3 className="font-display text-2xl font-normal md:col-span-4 md:text-4xl">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground md:col-span-5">
                {s.desc}{" "}
                <Link
                  to={s.to}
                  className="whitespace-nowrap font-medium text-ink underline decoration-accent-bold decoration-2 underline-offset-4 transition-colors hover:text-accent-bold"
                >
                  {s.linkLabel} →
                </Link>
              </p>

              <div className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                {s.tags.map((t, i) => {
                  const tagStyles = ["tag-lemon", "tag-lavender", "tag-aqua"];
                  return (
                    <span
                      key={t}
                      className={`rounded-full px-3 py-1 text-xs ${tagStyles[i % tagStyles.length]}`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work experience */}
      <section id="experience" className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-32">
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Track record
            </p>
            <h2 className="font-display text-4xl font-light md:text-6xl">
              Work <em className="italic text-accent-bold">experience</em>
            </h2>
          </div>

          <div className="divide-y divide-rule border-y border-rule">
            {experience.map((e) => (
              <article key={e.role + e.period} className="grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <p className="text-sm text-muted-foreground md:col-span-3">{e.period}</p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
                </div>
                <ul className="space-y-2 md:col-span-5">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="text-accent-bold">✦</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personal projects */}
      <section id="personal" className="border-t border-rule bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-32">
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Off the clock
            </p>
            <h2 className="font-display text-4xl font-light md:text-6xl">
              Personal <em className="italic text-accent-bold">AI projects</em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {personalProjects.map((h, i) => {
              const topBorders = [
                "border-t-4 border-t-accent-bold",
                "border-t-4 border-t-accent-lavender",
                "border-t-4 border-t-accent-aqua",
              ];
              return (
                <div
                  key={h.title}
                  className={`rounded-sm border border-rule bg-background p-8 shadow-[3px_3px_0_0_var(--rule)] transition-transform hover:-translate-y-1 ${topBorders[i % topBorders.length]}`}
                >
                  <div className="mb-6 text-4xl">{h.emoji}</div>
                  <h3 className="font-display text-2xl">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.note}</p>
                  <span className="mt-4 inline-block rounded-full px-3 py-1 text-xs tag-soft">
                    {h.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-32">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Contact
        </p>
        <h2 className="font-display text-4xl font-light leading-tight md:text-7xl">
          Got a product, a deck,
          <br />
          or a flow that <em className="italic text-accent-bold">isn't quite right</em>?
        </h2>
        <a
          href="mailto:hello@example.com"
          className="mt-10 inline-flex items-center gap-3 border-b-2 border-ink pb-1 font-display text-2xl transition-colors hover:text-accent-bold hover:border-accent-bold md:text-4xl"
        >
          hello@example.com
          <span aria-hidden>→</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} — Built with care.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">LinkedIn</a>
            <a href="#" className="hover:text-ink">Instagram</a>
            <a href="#" className="hover:text-ink">Read.cv</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
