---
id: BCPRO-XXXX
title: One line, the capability or change, in the customer's terms
type: feature
tier: M
product_area: subscriptions
door: null
gate_decision: null
status: backlog
owner: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
signal_refs:
  - discovery/synthesis/YYYY-MM-DD-....md
  - signals/csm/YYYY-MM-DD-....md
---

<!--
M-tier, the standard ticket, at standard v1.7. A new capability or a meaningful
change to one, reversible. Target: a reader who has never seen it understands
it in five minutes.

Altitude rule: this states the problem, the outcome, the product decisions and
the behaviour a customer would observe. It never states how the system is built.
An implementation idea worth keeping stays as a line that says in as many words
that it binds nobody.

v1.7 cut this template back. Measurable success criteria, the business outcome,
the Product decisions table and an Experience reference section are L-tier
content now; so is `outcome_metric`. Appetite and Ideas parked were retired at
every tier. If you are reaching for one of them, the ticket is an L.

`door` and `gate_decision` stay: standard v1.9 makes them gate fields at every
tier. The prioritisation gate fills them; leave them null until it runs.
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

## Outcome

What customers do differently once this ships, in prose. Never what we ship.
One line is enough at this tier; if it needs numbered criteria to be believed,
it is an L.

## Scope

**In scope**, as capability names:
-

**Non-goals**, what a reasonable reader would otherwise assume is included:
-

**Assumptions and decided defaults**: where a call was made instead of a
question asked, say so here. This is what keeps the open questions short.

## Decisions made

One bullet per decision a reader would otherwise relitigate: the decision, and
why. Work through the list that is genuinely product's and reliably forgotten:
roles and permissions, plan or tier gating, what happens to existing customer
data, retention, audit logging, localisation across the four markets, admin
versus front-desk versus member surfacing, what the customer is told when it
fails, and which analytics events to emit.

-

## Acceptance scenarios

Plain Given / When / Then, declarative, no UI choreography. Always including the
error case and the case we would be most upset to see broken.

- **AS-1 (happy path)**: Given ... when ... then ...
- **AS-2 (error case)**: Given ... when ... then ...
- **AS-3 (regression)**: Given ... when ... then ... continues to ...

**Reference**: optional, one line. Link to the prototype or design file with its
precedence stated beside it, `binding` or `illustrative`. Delete the line if
there is none: no reference is a valid state and says the solution space is
still open.

## Open questions

Genuinely deferrable unknowns, written plainly. Three or fewer by the time the
grill runs, which is a handover gate rather than a writing rule: a fourth means
this is still in discovery. Anything a reasonable default resolves moves to
Assumptions and decided defaults instead.

-
