# Beefcake product

This repo is what the product team owns: the strategy context every decision is
checked against, the personas, the signals, the discovery behind our choices,
the roadmap, and the Product Tickets that cross to engineering.

Engineering's repo is `beefcake-platform`. When the two repos disagree about how
the product behaves, the platform is right and this repo has a correction to
make.

## The one rule about altitude

A Product Ticket says **what problem, for whom, what outcome, and what we
decided**. It never says how the system is built. Engineering writes the Spec.

Two tests, both cheap:

- **Observability.** If the implementation could change without changing what a
  customer experiences, it does not belong in our ticket.
- **Plurality.** If a line admits exactly one way to satisfy it, it is a
  solution wearing the clothes of a need.

Implementation ideas are not deleted when they turn up. They move to **Ideas
parked**, where the thinking survives and is visibly non-binding.

## The flow

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
in the ticket. Contradicting CONTEXT.md without saying so gets a ticket bounced.
If we are changing our mind, that is a change to CONTEXT.md and it needs the CPO.

Skills that are not obvious from their names: `/idea-to-ticket` for a PM's own
idea, any type, any tier; `/advance-ticket` to move a ticket forward;
`/monterro:product-grill-with-docs` before handover.

### Grilling reads the engineering glossary

The glossary is `docs/domain-glossary.md` in `beefcake-platform`. Add it with
`claude --add-dir ../beefcake-platform` or `/add-dir` in session.

- Read only `docs/domain-glossary.md` from that repo. If the repo is not in the
  session, the vocabulary check is **skipped and failing**. A green grill
  without the glossary is not a green grill.
- A term the ticket needs that the glossary lacks is a glossary gap, flagged to
  engineering.

## Tickets

The standard lives in `tickets/README.md` and the three templates. Run
`npm run validate` before handover; it enforces the ids, frontmatter, tier
rules, S-tier acceptance scenarios, open-question cap, non-goals and vague adjectives.
What it cannot catch:

- **Evidence is linked, never pasted**, with one exception: the original signal
  text is preserved verbatim, because it is the only part of the ticket that
  nobody edited into agreement.
- **Every scenario set includes the error case and the case we would be most
  upset to see broken.**
- **A success criterion measures customer behaviour**, never shipping.
- **A claim with no source** gets the ticket bounced.

## Language

- **Product artefacts are written in English.** Engineering, sales and CS read
  them and we operate in four languages.
- **Signals stay in the language they arrived in.** Quote a Finnish support
  ticket in Finnish, with a translation in brackets when the wording carries the
  meaning. Translating a signal into agreement is how evidence gets laundered.
- **Use the platform's vocabulary** for anything the product does: freeze,
  notice period, dunning, abandoned, waitlist, grace hours. They are defined
  only in the platform repo's glossary; CONTEXT.md points there.
- **Currency and country matter.** SEK, NOK, DKK, EUR. Never write "kr" in a
  ticket, because three of our four markets use it and they are not the same
  amount.

## House style

- Name the person who decides. A decision with no name attached will be
  relitigated within a quarter.
- Numbers with their baseline and their source, or not at all.
- Do not use the word *just*. It is always hiding something.
