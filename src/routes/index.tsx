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
    desc: "From discovery to launch — roadmaps, specs, and the boring spreadsheets that turn priorities into products worth shipping.",
    to: "/case-studies" as const,
    linkLabel: "Sample Case",
    tags: ["Strategy", "Product Discovery", "Roadmap"],
  },
  {
    no: "02",
    title: "Business Analysis & Deck",
    desc: "I make sense of the numbers, find the story, and map out what’s next. ",
    to: "/deck-samples" as const,
    linkLabel: "Sample Work",
    tags: ["Pitch", "Story-telling", "Data Analysis"],
  },
  {
    no: "03",
    title: "UX Audit",
    desc: "Untangling confusing journeys, dead ends, and navigation headaches to give better user experience.",
    to: "/ux-audit" as const,
    linkLabel: "Sample Analysis",
    tags: ["Heuristics", "Flows", "User Experience"],
  },
];

// ✏️ Add a new entry here for each role — the section below renders automatically.
const experience = [
  {
    period: "2025 - Now",
    location: "Australia",
    role: "UX Analyst",
    company: "UX Researcher firm",
    points: [
      "Own activation and retention for the core workspace product.",
      "Rebuilt the onboarding funnel with design and growth engineering.",
    ],
  },
  {
    period: "2023 — 2025",
    location: "Indonesia",
    role: "Junior Business Analyst",
    company: "Digital Bank",
    points: [
      "Enhanced and built payment product for internal team",
      "Reduced transaction friction through smarter payment flow",
      "Managing relationship with stakeholders while increasing transaction number through multiple business ideation backed by data",
    ],
  },
  {
    period: "2021 — 2023",
    location: "Indonesia",
    role: "Junior Growth Product Owner",
    company: "Digital App for Logistic",
    points: [
      "Built the loyalty program for retail customers",
      "Analyzed and led the improvement ideation for engagement funnel",
      "Created the promotional scheme and delivery for retail customers based on data insights",
    ],
  },
];

// ✏️ Add a new AI side project here — the section below renders automatically.
const personalProjects = [
  {
    emoji: "🤖",
    title: "Spending Tracker",
    note: "An AI assistant that reads your bank statement - and track your outcomes",
    tag: "WIP",
  },
  {
    emoji: "💸",
    title: "Fair Share",
    note: "Because friendship shouldn't end over a dinner bill.",
    tag: "Completed",
  },
  {
    emoji: "📚",
    title: "Second Brain Bot",
    note: "A retrieval assistant over my product notes, specs and retros.",
    tag: "WIP - Vision",
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-rule bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            🐈hiKatrina<span className="text-accent-bold"></span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#work" className="hover:text-accent-bold transition-colors">Work</a>
            <a href="#experience" className="hover:text-accent-bold transition-colors">Experience</a>
            <a href="#personal" className="hover:text-accent-bold transition-colors">AI projects</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-ink px-4 py-1.5 text-xs font-medium transition-colors hover:bg-accent-lemon hover:text-ink"
          >
            Contact me
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
              <em className="squiggle italic text-accent-bold">problems</em>
              <br />
              into clear <em className="squiggle italic text-accent-bold">product solutions</em>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Part product manager, part business analyst, part UX observer, part adventurer. I connect the dots, 
              challenge assumptions, build products that work — and <i>feel good</i>.
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
          </div>
        </div>
      </section>

      {/* Disciplines strip */}
      <div className="border-y border-rule py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 font-display text-2xl font-light md:px-10 md:text-4xl">
          <span>Product Strategies</span>
          <span className="text-accent-bold">✦</span>
          <span className="italic">Business Decks</span>
          <span className="text-accent-bold">✦</span>
          <span>UX Audits</span>
          <span className="text-accent-bold">✦</span>
          <span className="italic">AI project</span>
        </div>
      </div>


      {/* Services / Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-32">
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              What I do
            </p>
            <h2 className="font-display text-4xl font-light md:text-6xl">Expertise</h2>
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
              Work <em className="italic text-accent-bold">experiences</em>
            </h2>
          </div>

          <div className="divide-y divide-rule border-y border-rule">
            {experience.map((e) => (
              <article key={e.role + e.period} className="grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <p className="text-sm text-muted-foreground md:col-span-3">{e.period}</p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
                  <p className="text-sm text-muted-foreground md:col-span-3">{e.location}</p>
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
          Got a product, a business,
          <br />
          or a flow that <em className="italic text-accent-bold">isn't quite right</em>?
        </h2>
        <a
          href="mailto:katrinaapuspita@gmail.com"
          className="mt-10 inline-flex items-center gap-3 border-b-2 border-ink pb-1 font-display text-2xl transition-colors hover:text-accent-bold hover:border-accent-bold md:text-4xl"
        >
          Get in touch!
          <span aria-hidden>📩</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} — Built with care.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">LinkedIn</a>
            {/*<a href="#" className="hover:text-ink">Instagram</a>*/}
          </div>
        </div>
      </footer>
    </div>
  );
}
