---
type: synthesis
source: support tickets
period: 2025-10-01 to 2025-12-31
tickets_read: 512
produced: 2026-02-06
by: Ingrid Halvorsen
method: /synthesize-support-tickets, then manual re-clustering of the two largest themes
---

# Support ticket synthesis, Q4 2025

512 tickets, all sources, all four markets. Clustered by what the customer was
trying to do rather than by tag, because the tags do not survive contact with
the data: 31% of tickets carry a tag that contradicts their content, and the
three most-used tags (`payment`, `question`, `membership`) cover 44% of the
queue between them.

Read this as a picture of Q4, and not as a backlog. Several themes below are
long-standing and were not new in Q4.

## Themes, by volume

| # | Theme | Tickets | Segments | Confidence |
|---|---|---|---|---|
| 1 | How-to questions the product could answer itself | 118 | All | High |
| 2 | Payment failed, operator cannot say why or what happens next | 74 | All, worst in long tail | High |
| 3 | Freeze and notice period rules, explaining them to members | 61 | Long tail and mid | High |
| 4 | Access hardware and cards | 52 | All | High |
| 5 | Reporting: which report, and getting it into Excel | 44 | Mid and key accounts | Medium |
| 6 | Feature requests, mostly small | 39 | All | High |
| 7 | Member app: logins and booking | 33 | Tenants with the app | Medium |
| 8 | Login and access for staff | 31 | All | High |
| 9 | Family and household pricing | 24 | Long tail | High |
| 10 | Everything else | 36 | | |

## The two that are worth acting on

### Theme 2: a failed payment is unexplainable at the desk

74 tickets, and it is the theme with the highest reply count per ticket, which
means it is also the most expensive to serve. The shape is always the same: a
member asks the front desk why a payment failed, the front desk can see *that*
it failed and not *why*, and invents an answer.

> "I say the payment did not go through and they should check their bank. I do
> not actually know if that is true." SUP-09442, front desk, single site.

Three sub-clusters:

- **What happens next is invisible.** 29 tickets ask when the system will try
  again. The date exists and is not on the screen the front desk uses.
- **Failure codes are shown raw.** 21 tickets quote a code back at us. The one
  that produces most of them means "the provider had a problem", which is not
  something an operator can act on.
- **Mandate state is unclear.** 14 tickets are about members with no valid
  mandate, discovered only when a charge fails.

**Recommendation.** This is not one ticket. The cheapest first move is the next
retry date where the desk already looks, and it would remove about a third of the
theme.

### Theme 3: freeze and notice rules

61 tickets, almost all from long tail and mid, almost all from front desk staff
rather than owners. Two thirds are the notice period being explained to a member
who expected to stop paying immediately. One third are freezes: what a freeze
costs, when it ends, and whether the binding period moves.

The tickets are not complaints about the rules. They are staff asking us to
confirm the rules so they can repeat them, which means the product is not saying
them clearly enough at the point of the transaction.

**Recommendation.** Design work on the freeze and notice confirmation screens,
starting from what the staff member has to say out loud. Carried into the
prototype test now scheduled for the summer.

## Themes we are deliberately not acting on

- **Theme 1, how-to questions.** Real, large, and the answer is documentation and
  in-product help rather than product change. Support are producing a set of
  short guides.
- **Theme 9, family pricing.** 24 tickets in the quarter, exclusively long tail,
  and consistent for at least two years. Noted for prioritisation, not
  recommended: the ARR at stake is small and the request is loudest in the
  segment furthest from the ICP.

## What this synthesis cannot tell you

- Nothing about key accounts is reliable here. They file few tickets relative to
  their size, and what they do file arrives through their head office in a
  summarised form. A theme that matters to 35% of ARR could be invisible in this
  data.
- Nothing about members. Members do not contact us.
- Tag-based counts anywhere in this document would be wrong. Every number above
  is from reading.

## Method

`/synthesize-support-tickets` over the quarter, then a manual pass over themes 2
and 3 because the automatic clustering split them by language. The full cluster
assignment is in the run output; ask Ingrid if you want it.
