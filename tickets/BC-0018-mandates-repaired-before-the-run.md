---
id: BC-0018
title: Operators can repair missing mandates before the payment run, not after
type: feature
tier: M
product_area: payments
door: null
gate_decision: null
outcome_metric: Failed-charge rate attributable to a missing or cancelled mandate
experience_precedence: none
status: discovery
owner: Johan Wirén
created: 2026-07-14
updated: 2026-08-18
signal_refs:
  - discovery/synthesis/2026-02-06-support-tickets-q4-2025.md
  - discovery/opportunity-solution-tree.md
  - signals/csm/
---

## Intent

An operator can find and fix members without a valid payment mandate before the
run charges them, rather than discovering it in the failure list afterwards.

## Problem and evidence

A charge cannot succeed without a mandate. Today the absence of one is discovered
when the charge fails, which is after the month is lost and after the member has
received a message telling them a payment failed.

The July release made the list visible. Every operator who has looked found more
names on it than they expected, which is the finding: the list was always that
long, it was simply invisible.

> "We have about twenty members with no mandate at all according to the payments
> screen. How did that happen and what do we do about it?" Support cluster,
> [Q4 synthesis theme 2](../discovery/synthesis/2026-02-06-support-tickets-q4-2025.md),
> 14 tickets.

## Discovery state

The list exists. What does not exist is anything an operator can do from it.
Three candidates, none tested:

- The operator sends the member a link that sets up the mandate.
- The desk starts the setup while the member is standing there.
- The product simply excludes those members from the run and says so, which
  removes the failure but not the missing money.

## Next steps

1. Find out what proportion of failed charges are missing-mandate rather than
   declined. The platform export carries the failure codes; nobody has counted.
   Owner: Johan Wirén, needed before the gate.
2. Ask five operators what they actually do today with the list. Two are known to
   phone the members.
3. Check with the payment providers what a mandate setup link can look like in
   each market. This may make the answer different per country, which would be a
   principle 5 problem and should be surfaced early.
