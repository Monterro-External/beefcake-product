---
id: BC-0016
title: Members in temporary difficulty have something to accept other than leaving
type: feature
tier: M
product_area: subscriptions
door: null
gate_decision: null
outcome_metric: Share of members who cancel within 21 days of a dunning sequence being abandoned
experience_precedence: none
status: in-discovery
owner: Johan Wirén
created: 2026-08-06
updated: 2026-08-20
signal_refs:
  - discovery/usage-cohorts/2026-08-14-failed-payment-churn-cohort.md
  - discovery/interviews/2026-01-27-former-member-fitness-norrebro.md
  - signals/member-feedback/2026-06.md
  - signals/slack/feature-requests.md
---

## Intent

A member whose payment has failed is offered a way to stay that is not paying in
full today.

## Problem and evidence

Nobody asked for this. It appears only when the churn data and the desk anecdotes
are put next to each other, which is why it took two years to notice.

Two in five cancellations follow a failed payment, and half of them in the long
tail. Only one in five is recorded as payment-driven, so the rest leave with a
reason recorded as something else or nothing at all
([cohort](../discovery/usage-cohorts/2026-08-14-failed-payment-churn-cohort.md)).
The median gap between the last failed payment and the cancellation is 34 days;
a quarter go within 18.

Freezing exists. It requires walking into the gym during opening hours and asking
a person, which is the wrong route for exactly the members who need it.

> "I did not leave. I stopped paying. There is a difference, I think, from your
> side." Former member, Fitness Nørrebro, [interview 2026-01-27](../discovery/interviews/2026-01-27-former-member-fitness-norrebro.md).

> "Member told me she had a bad month and just let the payments fail rather than
> come in and talk about it. She said cancelling felt final and paying felt
> impossible, so she did nothing." Front desk, forwarded 2026-06, MF-317.

Both are members, and neither contacted us. Members never do.

## Discovery state

| | |
|---|---|
| Population sized | Yes, roughly 590 members a year across eleven tenants, and that excludes our largest account |
| Problem validated | Three member conversations, two desk sources, one cohort. Enough |
| Solution shape | Open. Three candidates on the tree (S3.1 freeze at the point of failure, S3.2 a cheaper plan, S3.3 split or delay one payment) and none explored |
| Blocking question | Whether anything here can be offered without expanding the member surface, which is a CPO decision from 2026-04-14 |

## Next steps

1. Decide whether the offer is made by the operator to the member, or by us to
   the member. This changes everything downstream and it is a CPO question, not a
   discovery question. Owner: Malin Ohlsson.
2. Test the three candidates with five operators. Operators, not members: they
   have to be willing to make the offer, and one of the three costs them money.
3. Rerun the cohort once Nordic Fitness Group appears in the churn export.

Not ready for the gate. The problem is validated and the solution space is wide
open, which is exactly what in-discovery is for.
