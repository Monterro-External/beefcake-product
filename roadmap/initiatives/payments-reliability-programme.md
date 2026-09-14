---
initiative: Payments reliability programme
pillar: 1
owner: Johan Wirén
decision_owner: Malin Ohlsson
door: two-way
appetite: continuous, two teams for the year
status: in flight
gate_decision: 2026-06-30
outcome_metric: Failed-charge rate, and involuntary churn within 21 days of an abandoned dunning
---

# Payments reliability programme

Not a project with an end date. The standing commitment behind pillar 1: the path
from charge to abandoned is one product surface with one owner, and it is held to
a number.

## Why

Payment volume through Beefcake Pay is a revenue line, and a failed charge costs
three parties at once. It is also the largest single source of churn we cause:
41% of cancellations follow a failed payment, and half in the long tail
([cohort](../../discovery/usage-cohorts/2026-09-03-failed-payment-churn-cohort.md)).

## What is in it

- Everything the operator sees about a charge: state, reason, what happens next.
- Dunning: how often, how many times, and what the member receives.
- Mandates: getting them, repairing them, knowing when they are missing.
- Receipts, and anything a member hands to a third party.
- Payment methods where the market's default reduces failure at sign-up. Vipps is
  managed as its own initiative and reports into this one.

## What is not in it

- Pricing and packaging.
- Anything about what the operator charges their member. That is the operator's
  business.
- Refunds initiated by us. We do not send money outwards and that is a deliberate
  platform position.

## Success

- KR1.1 failed-charge rate from 4.3% to under 3.0%.
- KR1.2 cancellations within 21 days of an abandoned dunning halved, 38% to 19%.
- KR1.3 zero billing-correctness incidents reaching a member's receipt.

## Kill criteria

A programme cannot be killed, so the honest version is: if by the end of Q3 the
failed-charge rate has not moved at all, the assumption that this is
addressable by product is wrong, and the money goes to the payment providers
and the mandate estate instead of to our own surfaces.

## Open

- The correction approach for members historically overcharged is a product
  decision and it is with the CPO.
- Whether member-facing self-service during dunning crosses the line we hold
  about the member surface. Unresolved, and it blocks one branch of the tree.
