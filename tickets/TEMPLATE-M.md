---
id: BCPRO-XXXX
title: One line, the capability or change, in the customer's terms
type: feature
tier: M
product_area: subscriptions
door: two-way
gate_decision: null
outcome_metric: The product outcome this targets, measurable
experience_precedence: none
status: backlog
owner: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
signal_refs:
  - discovery/synthesis/YYYY-MM-DD-....md
  - signals/csm/YYYY-MM-DD-....md
---

<!--
M-tier, the standard ticket. A new capability or a meaningful change to one,
reversible. Target: a reader who has never seen it understands it in five
minutes.

Altitude rule: this states the problem, the outcome, the product decisions and
the behaviour a customer would observe. It never states how the system is built.
Implementation thinking goes to Ideas parked, where it survives and is visibly
non-binding.
-->

## Intent

One sentence. One change. If it cannot be one sentence, split the ticket.

## Problem and evidence

Who has the problem (segment and persona), what it costs them, and how they
cope today. Every claim carries a link. The original signal is preserved
verbatim.

> Verbatim from the strongest signal, with its id and date.

Evidence:
- [Source](path) what it shows
- [Source](path) what it shows

## Outcome and success criteria

Product outcome: what customers do differently. Never what we ship.
Business outcome: what that ladders to, named against an OKR where one applies.

- **SC-1**: measurable, technology-agnostic, user-observable.
- **SC-2**: as above. Baseline stated where one exists.

## Scope

**In scope**, as capability names:
-

**Non-goals**, what a reasonable reader would otherwise assume is included:
-

**Appetite**: how much this is worth as a design constraint, never an estimate.

**Assumptions and decided defaults**: where a call was made instead of a
question asked, say so here. This is what keeps the open questions short.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 |  |  |  |

Work through the list that is genuinely product's and reliably forgotten: roles
and permissions, plan or tier gating, what happens to existing customer data,
retention, audit logging, localisation across the four markets, admin versus
front-desk versus member surfacing, what the customer is told when it fails, and
which analytics events to emit.

## Acceptance scenarios

Plain Given / When / Then, declarative, no UI choreography. Always including the
error case and the case we would be most upset to see broken.

- **AS-1 (happy path)**: Given ... when ... then ...
- **AS-2 (error case)**: Given ... when ... then ...
- **AS-3 (regression)**: Given ... when ... then ... continues to ...

## Experience reference

Link to the prototype or design file, key flows named in prose, no embedded
screenshots. Declare precedence in the field above: `illustrative` (the prose
wins), `binding` (the prototype wins for the experience), or `none`.

## Open questions

Maximum three, each with an owner and a needed-by date. More than three means
this is still in discovery.

- Question. Owner: name. Needed by: date.

## Ideas parked

Non-binding. Solution and implementation ideas that came up, kept so the
thinking survives without committing engineering to it.

-
