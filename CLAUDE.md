# Beefcake product

This repo is what the product team owns: the strategy context every decision is
checked against, the personas, the signals we receive, the discovery behind our
choices, the roadmap, and the Product Tickets that cross to engineering.

Engineering's repo is `beefcake-platform`. It holds the code, the seed data, the
ADRs and the runbooks. When the two repos disagree about how the product
behaves, the platform is right and this repo has a correction to make.

## The one rule about altitude

A Product Ticket says **what problem, for whom, what outcome, and what we
decided**. It never says how the system is built. Engineering writes the Spec
from it, with the formal requirements, and they are better at that than we are.

Two tests, both cheap:

- **Observability.** If the implementation could change without changing what a
  customer experiences, it does not belong in our ticket.
- **Plurality.** If a line admits exactly one way to satisfy it, it is a
  solution wearing the clothes of a need.

Implementation ideas are not deleted when they turn up. They move to **Ideas
parked**, where the thinking survives and is visibly non-binding.

## The flow

```
Signals → signal-triage → Discovery → Prioritisation gate → Product Ticket
        → grilling against CONTEXT.md → handover to engineering
```

| Step | What happens | Where it lands |
|---|---|---|
| Signals | Support, NPS, CSM notes, sales calls, lost deals, escalations, app reviews, member feedback, the Slack request channel, and the platform exports | `signals/` |
| Triage | Each signal becomes a typed, tiered, deduplicated ticket embryo, or is closed | `triage` to `backlog` or `todo` |
| Discovery | Interviews, synthesis, cohorts, market work, prototypes and validation | `discovery/` |
| Gate | Door, appetite and kill criteria decided. Sets `door` and `gate_decision` | `roadmap/`, ticket fields |
| Authoring | The ticket is completed to the standard | `discovery` |
| Grilling | The readiness gate is enforced against `strategy/CONTEXT.md`. A pass moves the ticket to `ready-for-handover`; a bounce stays in `discovery` with the `needs-more-info` label and the failing checks | `discovery` to `ready-for-handover` |
| Handover | Engineering routes by the ticket's shape into the `beefcake-platform` team | `in-development`, or back to `discovery` with the `back-to-discovery` label and a reason code |

`strategy/CONTEXT.md` is the reference the grill checks against. It is short on
purpose. Where it is silent about something a ticket asserts, that silence is a
gap in CONTEXT.md and gets flagged to the CPO. It is not automatically a defect
in the ticket.

### Grilling reads the engineering glossary

The glossary is `docs/domain-glossary.md` in `beefcake-platform`. Add it with `claude --add-dir ../beefcake-platform` or `/add-dir` in session.

- Read only `docs/domain-glossary.md` from that repo. If the repo is not in the session, the vocabulary check is **skipped and failing**. A green grill without the glossary is not a green grill.
- A term the ticket needs that the glossary lacks is a glossary gap, flagged to engineering.

## Skills, by step

| Step | Skill |
|---|---|
| Strategy context | `/product-vision`, `/product-strategy`, `/plan-okrs`, `/draft-product-principles` |
| Signal intake | `signal-triage`, and for batches `/synthesize-support-tickets`, `/synthesize-sales-calls`, `/synthesize-feedback`, `/synthesize-research` |
| A PM's own idea, any type, any tier | `/idea-to-ticket` |
| Discovery | `/define-icp`, `/create-personas`, `/opportunity-solution-tree`, `/analyze-usage-cohorts`, `/market-scan`, `/competitor-benchmark` |
| Ideation and validation | `/brainstorm-ideas`, `/solution-tournament`, `/prototype-and-design`, `/validate-value`, `/quick-validate` |
| Priority | `/prioritization-gate`, `/pre-mortem`, `/red-team` |
| Moving a ticket forward | `/advance-ticket` |
| Before handover | `/monterro:product-grill-with-docs` |

## Repo layout

```
strategy/     CONTEXT.md first, then vision, strategy, OKRs, principles, ICP
personas/     Ten personas. Customer-side ones cite the interviews behind them
signals/      The raw material, by source. See signals/README.md for the sources
discovery/    interviews, synthesis, usage-cohorts, market, validation, and the OST
roadmap/      now-next-later, initiatives, decisions, pre-mortems
tickets/      The three Product Ticket templates. Tickets themselves live in Linear
releases/     Release notes for what has shipped
scripts/      Ticket validation against the standard
```

## Ticket conventions

- **Ids** are `BCPRO-nnnn`, allocated in sequence, never reused. Filename is
  `BCPRO-nnnn-short-slug.md` and the id in the frontmatter must match it.
- **Frontmatter mirrors the tracker fields exactly**: `id`, `type`, `tier`,
  `product_area`, `door`, `gate_decision`, `outcome_metric`,
  `experience_precedence`, `status`, `signal_refs`, `owner`.
- **Tier before writing, and tier is independent of type.** S: change note, mandatory regression clause, nothing else. M: standard ticket. L: one-way door or cross-capability change, requires linked pre-mortem, red-team, and named decision owner. See templates in `tickets/`.
- **One `product_area` per ticket**, from the taxonomy in CONTEXT.md.
- **Evidence is linked, never pasted**, with one exception: the original signal
  text is preserved verbatim, because it is the only part of the ticket that
  nobody edited into agreement.
- **Three open questions maximum.** A fourth means the ticket is still in
  discovery and should say so in its status.
- **Every scenario set includes the error case and the case we would be most
  upset to see broken.**

Check a ticket before you hand it over:

```bash
npm run validate                 # every ticket
npm run validate -- BCPRO-0007   # one
npm run validate -- --strict     # warnings fail too
```

## Language

- **Product artefacts are written in English.** Strategy, tickets, personas,
  discovery and roadmap, all of them, because engineering, sales and CS read
  them and we operate in four languages.
- **Signals stay in the language they arrived in.** A support ticket written in
  Finnish is quoted in Finnish, with a translation in brackets when the wording
  carries the meaning. Translating a signal into agreement is how evidence gets
  laundered.
- **Use the platform's vocabulary** for anything the product does: freeze,
  notice period, dunning, abandoned, waitlist, grace hours. The short list is in
  CONTEXT.md; the long version is `docs/domain-glossary.md` in the platform
  repo, it wins on any detail, and grilling checks against it.
- **Currency and country matter.** SEK, NOK, DKK, EUR. Never write "kr" in a
  ticket, because three of our four markets use it and they are not the same
  amount.

## House style

- Name the person who decides. A decision with no name attached will be relitigated within a quarter.
- Numbers with their baseline and their source, or not at all.
- Do not use the word *just*. It is always hiding something.

## Things that will get a ticket bounced

1. A claim with no source.
2. A success criterion that is not measurable, or that measures shipping rather
   than customer behaviour.
3. Non-goals left empty.
4. Implementation detail anywhere outside Ideas parked.
5. An S-tier ticket without its regression clause.
6. A vague adjective without a number: fast, scalable, secure, intuitive,
   robust, seamless.
7. Contradicting CONTEXT.md without saying so. If we are changing our mind,
   that is a change to CONTEXT.md and it needs the CPO.
