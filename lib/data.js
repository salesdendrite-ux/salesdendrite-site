export const C = {
  navy: "#0B1D3A", navyMid: "#0F2847", card: "#0D2240", cardHover: "#112A4D",
  blue: "#2D7FF9", teal: "#00C9A7", red: "#EF4343", amber: "#F59E0B",
  purple: "#8B5CF6", slate: "#94A3B8", slateLight: "#CBD5E1", white: "#FFFFFF", border: "#1E3A5F"
};
export const FH = "'Outfit',sans-serif";
export const FB = "'DM Sans',sans-serif";
export const FM = "'JetBrains Mono',monospace";
export const ENGC = { Hot: C.red, Warm: C.amber, Cold: C.blue, New: C.slate };

export const MODULES = [
  { slug: "stakeholder-directory", emoji: "👥", title: "Stakeholder Directory", color: C.teal, colorName: "signal",
    short: "Full org hierarchy with engagement scoring, relationship graph, and multi-format upload.",
    long: "The org chart your CRM doesn't have. Upload PDFs, screenshots, slide decks, or spreadsheets — SalesDendrite reconstructs the full reporting hierarchy with engagement scoring and a live relationship graph.",
    features: [
      { title: "Multi-format ingestion", body: "PDF, PNG, PPTX, CSV, or freeform text — the parser handles all of them and resolves duplicates across sources." },
      { title: "Engagement scoring", body: "Every stakeholder gets a 0-100 score derived from meeting cadence, email replies, and webinar attendance — surfaced as Hot / Warm / Cold / New." },
      { title: "Relationship graph", body: "Click any node to see reports, peers, and dotted-line allies. Filter by department, engagement, or buying-committee role." },
      { title: "Org diff", body: "Re-upload after a reorg and the system highlights every promotion, departure, and new hire — never lose a champion to a quiet move again." },
    ],
  },
  { slug: "public-intelligence", emoji: "📊", title: "Public Intelligence", color: C.teal, colorName: "signal",
    short: "Financial analysis, clinical pipeline, regulatory milestones, and news — all AI-summarised.",
    long: "Every public signal your account is sending — revenue trends, pipeline assets, regulatory milestones, earnings call language — distilled into a working narrative your reps can actually use.",
    features: [
      { title: "Financial timeline", body: "7-year revenue, margin, and headcount trends with anomaly callouts when the story diverges from sector peers." },
      { title: "Pipeline tracker", body: "For pharma and biotech: every asset, every phase, every PDUFA date — synced to FDA and EMA feeds." },
      { title: "Regulatory radar", body: "Watch lists for FDA, EMA, MHRA, PMDA filings — pinged to the AI when a milestone shifts your account's priorities." },
      { title: "AI narrative", body: "Not a dashboard — a paragraph. \"Here is the financial story of this account right now.\" Reps cite it on every call." },
    ],
  },
  { slug: "intel-hub", emoji: "🔍", title: "Intel Hub", color: C.teal, colorName: "signal",
    short: "Meeting notes, strategic initiatives, competitive intel, and relationship mapping.",
    long: "A structured memory of everything your team has learned about the account — meetings, initiatives, competitive moves, internal politics — all queryable by the AI on every interaction.",
    features: [
      { title: "Meeting timeline", body: "Every meeting, with attendees, decisions, action items, and quotes — searchable and linked back to the stakeholder directory." },
      { title: "Strategic initiatives", body: "The projects, programs, and bets the account is making. Each one tagged to budget owners and timelines." },
      { title: "Competitive intel", body: "Who else is in the account, what they've pitched, what the response was. Cited automatically by the AI when relevant." },
      { title: "Relationship map", body: "Who knows whom, who likes whom, who blocks whom — the political layer your CRM will never have." },
    ],
  },
  { slug: "ai-workspace", emoji: "🤖", title: "AI Workspace", color: C.teal, colorName: "signal",
    short: "Claude-powered conversational partner with full account context on every turn.",
    long: "A persistent, account-grounded AI partner. Every question you ask is answered with the org chart, financials, intel, and capability library in scope — no copy-paste, no context loss.",
    features: [
      { title: "Always-on context", body: "The AI sees the full account state — directory, intel, capabilities, history — without re-prompting. You ask. It answers." },
      { title: "Multi-turn memory", body: "Conversations persist per account. Pick up where you left off three weeks ago without restating who anyone is." },
      { title: "Follow-up suggestions", body: "Each answer ends with three sharper questions the AI thinks are worth asking. The interrogation accelerates over time." },
      { title: "Cite-back", body: "Every claim is grounded in a data point in the account — financial line, meeting note, org node. Click to verify." },
    ],
  },
  { slug: "buying-committee", emoji: "🎯", title: "Buying Committee", color: C.teal, colorName: "signal",
    short: "Map Champion, Decision Maker, Blocker. See coverage gaps instantly.",
    long: "The committee is the deal. Map it across six roles — Champion, Decision Maker, Economic Buyer, Technical Buyer, Influencer, Blocker — and see exactly where coverage is missing.",
    features: [
      { title: "6-role coverage", body: "Drag stakeholders into slots and watch the coverage panel light up. Red roles = silent killers." },
      { title: "Path-to-influence", body: "For every uncovered role, the AI proposes who on your committee can warm-introduce you." },
      { title: "Risk scoring", body: "A committee with no Champion is a 22% deal. A committee with a confirmed Blocker and no Mitigator is a stalled deal. We score it." },
      { title: "Movement tracking", body: "Snapshot the committee weekly. Watch as roles fill, as confidence climbs, as the deal becomes a deal." },
    ],
  },
  { slug: "target-stakeholders", emoji: "🎯", title: "Target Stakeholders", color: C.teal, colorName: "signal",
    short: "AI conversion strategies, gap analysis, path-to-influence, and action checklists.",
    long: "Pick the people that move the deal and the AI builds the conversion plan: why they matter, what's missing, the outreach angle, and the next five actions in order.",
    features: [
      { title: "Why-target rationale", body: "A two-sentence case for why this person is worth the cycles — referencing org position, engagement, and capability fit." },
      { title: "Gap analysis", body: "Red / yellow / green indicators across relationship strength, capability fit, committee role, and recent engagement." },
      { title: "Outreach angle", body: "The opening line, the proof point, the ask — drafted in your tone of voice from prior outbound that worked." },
      { title: "Action checklist", body: "Five concrete next steps with owners. Check them off as the relationship moves." },
    ],
  },
  { slug: "capability-intelligence", emoji: "⚡", title: "Capability Intelligence", color: C.teal, colorName: "signal",
    short: "Service library, case studies, auto-enrichment, and opportunity matching.",
    long: "Your services, products, and case studies as structured data the AI can match against any account. The \"what could we sell here?\" question, answered automatically.",
    features: [
      { title: "Capability library", body: "Every service, product, and offering with structured metadata — buyer persona, problem solved, proof points, pricing range." },
      { title: "Auto-enrichment", body: "Drop in a one-line description and the AI fills out the rest from your historical decks, case studies, and proposals." },
      { title: "Opportunity matching", body: "For each account, the AI ranks every capability by fit — surfacing the cross-sells nobody on your team thought to look for." },
      { title: "Case-study retrieval", body: "Search \"comparable to this stakeholder at a pharma company\" and the right case study comes back, cited and ready to send." },
    ],
  },
  { slug: "settings", emoji: "⚙️", title: "Settings & RBAC", color: C.teal, colorName: "signal",
    short: "Multi-user auth, CRM connectors (Salesforce, HubSpot, Veeva), brand templates.",
    long: "Enterprise plumbing: SSO, role-based access, CRM connectors, brand templates, and audit logs — so the platform deploys cleanly into the stack you already own.",
    features: [
      { title: "SSO + RBAC", body: "SAML, OIDC, granular role permissions. Per-account access, per-role action limits." },
      { title: "CRM connectors", body: "Two-way sync with Salesforce, HubSpot, Veeva. Stakeholders, activities, opportunities — kept honest in both directions." },
      { title: "Brand templates", body: "Email signatures, deck themes, footer disclaimers — once configured, the AI respects them on every draft." },
      { title: "Audit logs", body: "Who saw what, who exported what, who deleted what — every action logged with retention controls." },
    ],
  },
];
