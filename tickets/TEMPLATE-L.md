---
id: BCPRO-XXXX
title: One line, the initiative, in the customer's terms
type: initiative
tier: L
product_area: subscriptions
door: one-way
gate_decision: null
outcome_metric: The product outcome this targets, measurable
experience_precedence: none
status: backlog
owner: null
decision_owner: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
signal_refs:
  - discovery/synthesis/YYYY-MM-DD-....md
  - signals/sales/lost-deals/YYYY-MM-DD-....md
pre_mortem_ref: null
red_team_ref: null
---

<!--
L-tier, the full ticket. A one-way door (pricing, platform, contracts,
migrations) or a change spanning several capabilities. Everything in the M
template applies, plus the four additions at the bottom.

An L-tier ticket without a named decision owner is a discussion. The pre-mortem
and the red-team run before the gate rather than after it, and their outputs
are linked rather than summarised.
-->

## Intent

One sentence. One change, at initiative altitude.

## Problem and evidence

Who has the problem, what it costs, how they cope today, and why now. Every
claim carries a link. The original signal is preserved verbatim.

> Verbatim from the strongest signal, with its id and date.

Evidence:
- [Source](path) what it shows

## Outcome and success criteria

Product outcome, business outcome, and the OKR it serves.

- **SC-1**:
- **SC-2**:

## Scope

**In scope**:
-

**Non-goals**:
-

**Appetite**:

**Assumptions and decided defaults**:

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 |  |  |  |

At this tier the list is not optional: roles and permissions, plan or tier
gating, what happens to existing customer data, retention, audit logging,
localisation across the four markets, surfacing, failure messaging, analytics
events, and pricing or packaging implications.

## Acceptance scenarios

- **AS-1 (happy path)**:
- **AS-2 (error case)**:
- **AS-3 (regression)**:

## Experience reference

Prototype link, flows named, precedence declared in the field above.

## Migration and rollback intent

Stated as customer experience, never as a technical plan. What happens to the
customers who already have the old behaviour, what they see on the day, what
they have to do, and what we do if we have to reverse it. If reversing it is
impossible, say that here and explain what makes this a one-way door.

## Pre-mortem and red-team

- Pre-mortem: [link](../roadmap/pre-mortems/...). Run on DATE. The three risks
  carried into this ticket, each with the mitigation that changed the plan.
- Red-team: [link](../roadmap/pre-mortems/...). Run on DATE. What the strongest
  argument against doing this is, and why we are doing it anyway.

## Decision owner

Named person who decides if this stalls, plus the date by which they decide.
Set in the `decision_owner` field as well.

## Open questions

Maximum three, each with an owner and a needed-by date.

-

## Ideas parked

-
