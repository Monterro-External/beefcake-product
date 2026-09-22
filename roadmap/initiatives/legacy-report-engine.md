---
initiative: Legacy report engine replacement
pillar: 2
owner: Elin Sandberg (engineering)
product_contact: Ingrid Halvorsen
decision_owner: Malin Ohlsson
door: two-way
appetite: engineering-led, one team, one quarter
status: next
gate_decision: 2026-09-22
outcome_metric: Every report a key account uses returns within 30 seconds at their own volume (KR2.3)
---

# Legacy report engine replacement

Engineering-led. Included in the roadmap because it consumes a team for a quarter
and because it is the only thing standing behind a key result.

## Why product cares

Reporting is where our two largest accounts experience us as not built for them.
Both work around it rather than reporting it, which is why it has sat for
quarters: our ticket queue says this is a minor problem and our two biggest
customers say it in renewal conversations.

The symptom, in the customers' words:

> "I start it and go and do something else." Petra Lindgren, Nordic Fitness Group.

> "If your product cannot report across eight sites, that is a problem for us at
> renewal." Bjørn Kraft, Kraft Trening.

There is also a data consequence we only noticed in August: our own churn cohort
analysis is missing our largest customer, because the export does not produce
their figures. We have been making decisions on a data set with a hole in it.

## Product's requirements, which are not a design

- Every report an operator can run returns at key-account volume, and the number
  is 30 seconds because that is roughly when a person switches to another task.
- A report that cannot complete says so, rather than returning a partial answer
  that looks complete.
- The exports produce a row for every tenant, or the export fails loudly.

How this is achieved is engineering's decision entirely.

## Appetite and sequencing

One team, one quarter, starting after the current payments work lands. Ahead of
corporate memberships in the queue, which is a real cost and was argued at the
gate: the reasoning is that reporting is a named key result and corporate
memberships is still in discovery.

## Kill criteria

Not applicable in the usual sense. If the measured timings show the problem is
narrower than believed, the scope shrinks to the reports that are actually slow
and the team goes back to the payments programme.
