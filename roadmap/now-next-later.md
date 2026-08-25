---
updated: 2026-08-25
owner: Malin Ohlsson
reviewed: monthly, and at every gate
---

# Now, next, later

What we are doing, what is queued, and what is deliberately waiting. Anything not
on this page is not committed, whatever anyone has been told.

Reviewed monthly. The date at the top is the last time it changed, not the last
time somebody looked at it.

## Now

| | Owner | Why it is now | Ends when |
|---|---|---|---|
| [Payments reliability programme](initiatives/payments-reliability-programme.md) | Johan Wirén | Pillar 1, two key results, and the largest source of churn we cause | Standing, held to KR1.1 and KR1.2 |
| Front desk: freeze and notice confirmation | Rebecka Nyström, one team | Validated with seven front-desk staff in July, small, and it stops staff telling members things that are not true | Shipped, target end of Q3 |
| [Corporate memberships, first slice](initiatives/corporate-memberships.md) | Malin Ohlsson | One-way door, renewal-critical. The first slice passed the gate on 2026-08-25, Finnish shape first | Handed to engineering as BC-0026. Wider decision on 2026-12-15 |

## Next

| | Owner | Waiting on |
|---|---|---|
| [Legacy report engine replacement](initiatives/legacy-report-engine.md) | Elin Sandberg | The current payments work landing. Gate passed 2026-08-11 |
| [Norway payments, Vipps](initiatives/norway-payments-vipps.md) | Ingrid Halvorsen | Kraft Trening's abandoned sign-up count, which is the evidence the gate asked for. Gate passed 2026-07-28 |
| Danish invoice layout | Ingrid Halvorsen | Nothing. Two weeks of work, unconditional, and it keeps slipping because it belongs to nobody's quarter |

## Later

| | Why not now |
|---|---|
| [Denmark, MobilePay and market entry](initiatives/denmark-readiness.md) | Sequenced behind Norway deliberately. Same area of work, and Norway already has the revenue |
| Returning-from-freeze list | On the tree as S5.1. Real, small, and waiting for the freeze work to land so it is designed once |
| Family and household memberships | Answered with a no in May and reopened on 2026-08-25, because the decision that closed it said it would be if corporate memberships was built. Narrow brief, two questions |
| Member self-service during dunning | Blocked on a CPO decision about the member surface, not on capacity |

## Not doing

Stated here because they are asked for often enough that silence gets read as
"maybe":

- Workout tracking, nutrition, training programmes. Non-goal in CONTEXT.md.
- On-premise or single-tenant deployment. Non-goal.
- An employer-facing portal. Nobody who asked for corporate memberships asked
  for this, and two customers explicitly said they do not need it.
- A fifth market.

## The tension on this page

Nordic Fitness Group's renewal is on 2027-01-31 and their top ask is corporate
memberships, which sits in discovery with a December decision date. Meanwhile the
capacity that could build it is on payments reliability, which serves the pillar
and two key results but does not appear on their comparison sheet.

That is a deliberate choice and it is the most likely thing on this page to be
wrong. Stated so that if we lose the renewal, nobody has to reconstruct what we
were thinking: we believed the account's real risk was accumulated small failures
rather than one missing capability, and we chose to fix the accumulation.
