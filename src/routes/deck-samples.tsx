import { createFileRoute } from "@tanstack/react-router";
import { SubPageHeader } from "./case-studies";

export const Route = createFileRoute("/deck-samples")({
  component: DeckSamples,
  head: () => ({
    meta: [
      { title: "Sample Work — Deck Review & Templates" },
      {
        name: "description",
        content:
          "A selection of presentation decks: investor, sales, and internal narratives, with the story structure behind each title page.",
      },
      { property: "og:title", content: "Sample Work — Deck Review & Templates" },
      {
        property: "og:description",
        content: "Deck title pages and the narrative structure behind each one.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

// ✏️ Add a new deck here — the list renders automatically.
//
// To embed a Google Slides deck:
//   1. In Google Slides: File → Share → "Anyone with the link" (viewer),
//      then File → Publish to web → Embed → copy the URL.
//      It looks like:
//      https://docs.google.com/presentation/d/<ID>/embed?start=false&loop=false
//   2. Paste it into `embedUrl`. Leave it as null and a placeholder card
//      with an "open deck" link shows instead.
const decks: Array<{
  no: string;
  title: string;
  type: string;
  desc: string;
  embedUrl: string | null;
  linkUrl: string | null;
}> = [
  {
    no: "01",
    title: "Seed Round — Market Shift Narrative",
    type: "Investor deck",
    desc: "12 slides built around one argument: the market moved, and this team is the only one positioned for it. Rebuilt from a 40-slide feature tour.",
    embedUrl: null, // ← paste your Google Slides embed URL here
    linkUrl: null, // ← optional: link to the full deck
  },
  {
    no: "02",
    title: "Enterprise Sales Playbook Deck",
    type: "Sales deck",
    desc: "A modular deck system — swap 3 slides per vertical instead of rebuilding. Reduced pre-call prep from 2 hours to 20 minutes.",
    embedUrl: null,
    linkUrl: null,
  },
  {
    no: "03",
    title: "Quarterly Business Review Template",
    type: "Internal narrative",
    desc: "A repeatable QBR structure: what we said, what happened, what we learned, what changes. Now used across four product teams.",
    embedUrl: null,
    linkUrl: null,
  },
  {
    no: "04",
    title: "Product Launch Story",
    type: "Go-to-market",
    desc: "A launch narrative that opens on the customer's bad Tuesday, not the feature list. Used for press, sales, and the all-hands.",
    embedUrl: null,
    linkUrl: null,
  },
];

function DeckSamples() {
  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      <SubPageHeader />
      <main className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Sample work
        </p>
        <h1 className="font-display text-4xl font-light md:text-6xl">
          Deck review &amp; <em className="italic text-accent-bold">templates</em>
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Title pages and the story each deck was built to carry — flip through
          the decks right here.
        </p>

        <div className="mt-14 space-y-16 md:space-y-24">
          {decks.map((d) => (
            <article key={d.no} className="grid gap-6 md:grid-cols-12 md:gap-10">
              {/* Deck preview */}
              <div className="md:col-span-7">
                {d.embedUrl ? (
                  <div className="overflow-hidden rounded-2xl border border-rule shadow-[6px_6px_0_0_var(--accent-soft)]">
                    <div className="aspect-[16/9] w-full">
                      <iframe
                        src={d.embedUrl}
                        title={`${d.title} — deck preview`}
                        className="h-full w-full"
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-rule bg-muted/40 text-center">
                    <span className="font-display text-2xl italic text-muted-foreground">
                      Deck preview coming soon
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Google Slides embed goes here
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <div className="text-sm text-muted-foreground">{d.no}</div>
                <h2 className="mt-2 font-display text-2xl md:text-3xl">{d.title}</h2>
                <span className="mt-3 inline-block rounded-full px-3 py-1 text-xs tag-soft">
                  {d.type}
                </span>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {d.desc}
                </p>
                {d.linkUrl && (
                  <a
                    href={d.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-accent-bold underline decoration-wavy underline-offset-4 hover:opacity-80"
                  >
                    Open full deck ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
