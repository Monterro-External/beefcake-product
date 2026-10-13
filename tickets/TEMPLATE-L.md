---
id: BCPRO-XXXX
title: One line, the initiative, in the customer's terms
type: initiative
tier: L
product_area: subscriptions
door: one-way
gate_decision: null
outcome_metric: The product outcome this targets, measurable
decision_owner: null
status: backlog
owner: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
signal_refs:
  - discovery/synthesis/YYYY-MM-DD-....md
  - signals/sales/lost-deals/YYYY-MM-DD-....md
---

<!--
L-tier, the full ticket, at standard v1.7. A one-way door (pricing, platform,
contracts, migrations) or a change spanning several capabilities. Everything in
the M template applies, plus success criteria and the business outcome, the
Product decisions table with rejected alternatives, migration and rollback
intent, and an Experience reference section.

An L-tier ticket without a named decision owner is a discussion. The pre-mortem
and the red-team run before the gate rather than after it; v1.7 retired the
section that held their links, so they are evidence links in Problem and
evidence and their conclusions are assumptions or product decisions here.
Appetite and Ideas parked were retired at every tier.
-->

## Intent

One sentence. One change, at initiative altitude.

## Problem and evidence

Who has the problem, what it costs, how they cope today, and why now. Every
claim carries a link. The original signal is preserved verbatim.

> Verbatim from the strongest signal, with its id and date.

Evidence:
- [Source](path) what it shows
- [Pre-mortem](../roadmap/pre-mortems/...) and [red team](../roadmap/pre-mortems/...), with the date each was run

## Outcome and success criteria

Product outcome: what customers do differently. Business outcome: what that
ladders to, named against an OKR where one applies.

- **SC-1**: measurable, technology-agnostic, user-observable, with the bar as a
  number. A sample size is not a threshold.
- **SC-2**: as above. Baseline stated where one exists.

## Scope

**In scope**, as capability names:
-

**Non-goals**, what a reasonable reader would otherwise assume is included:
-

**Assumptions and decided defaults**: where a call was made instead of a
question asked, say so here. The pre-mortem's and the red team's adopted
recommendations land here or in Product decisions.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 |  |  |  |

At this tier the list is not optional: roles and permissions, plan or tier
gating, what happens to existing customer data, retention, audit logging,
localisation across the four markets, surfacing, failure messaging, analytics
events, and pricing or packaging implications.

## Migration and rollback intent

Stated as customer experience, never as a technical plan. What happens to the
customers who already have the old behaviour, what they see on the day, what
they have to do, and what we do if we have to reverse it. If reversing it is
impossible, say that here and explain what makes this a one-way door.

## Acceptance scenarios

- **AS-1 (happy path)**: Given ... when ... then ...
- **AS-2 (error case)**: Given ... when ... then ...
- **AS-3 (regression)**: Given ... when ... then ... continues to ...

## Experience reference

Prototype or design link, key flows named in prose, no embedded screenshots, and
the precedence stated here in the prose: `illustrative` (the prose wins),
`binding` (the prototype wins for the experience), or `none` (nothing has been
designed yet, which is a valid state and passes the gate). The
`experience_precedence` field was retired in v1.7. `binding` is earned: name what was validated, with whom and when, or call it `illustrative`, which is the honest default and fails nothing (standard v1.10).

## Open questions

Genuinely deferrable unknowns. Three or fewer by the time the grill runs, which
is a handover gate rather than a writing rule. Anything a reasonable default
resolves moves to Assumptions and decided defaults instead.

-

## Proposed terms

Optional. Only for a domain term engineering's glossary lacks; delete the section
if there is none. One bullet per term: what it means in this ticket in one
sentence and, where a glossary term is close, why it is not that one. Never
redefine a term the glossary has; that is an open question (standard v1.14).

-
