---
type: usage cohort
outcome: reduce involuntary churn caused by payment failures
data: signals/platform/churn.csv, payment-runs.csv, tenant-health.csv, events.jsonl
window: 2025-09-30 to 2026-09-30
produced: 2026-09-18
by: Johan Wirén
reviewed_by: Malin Ohlsson
status: findings agreed, one gap outstanding
---

# Members who cancel after a failed payment

Run after the round B member interviews, and after Henrik and Nadia at Puls
Träning independently described the same population from the desk: members who
do not decide to leave, they stop paying.

## Question

Of the members who leave, how many had a failed payment first, how long after,
and does it differ by segment?

## Data

The platform churn export for the twelve months to 2026-09-30, cross-referenced
with the payment run export. Two columns matter and they are not the same thing:

- `payment_driven`: the cancellation was **recorded** with the reason
  `payment_failure`, which happens when dunning gave up and the membership was
  ended by the system.
- `with_prior_failed_payment`: the member had **at least one failed payment**
  before cancelling, whatever reason was recorded.

## Findings

**1. Two in five cancellations follow a failed payment. One in five is
recorded as one.**

| | Cancellations | Recorded as payment failure | Had a failed payment first |
|---|---|---|---|
| All | 2,679 | 526 (19.6%) | 1,102 (41.1%) |
| Long tail | 341 | 92 (27.0%) | 173 (50.7%) |
| Mid | 968 | 171 (17.7%) | 356 (36.8%) |
| Key account | 1,370 | 263 (19.2%) | 573 (41.8%) |

The gap between the two right-hand columns is the finding: 576 cancellations
a year are members who hit a payment problem and then left for a reason we
recorded as something else, or as nothing at all. It is worst in the
long tail, at 50.7%.

**2. The median gap is about six weeks, and a quarter go inside 19 days.**

Median days between the last failed payment and the cancellation: 43. The
lower quartile is 19. So the window in which anything could be done is
short, and it opens the day a charge fails rather than the day someone gives
notice.

**3. The tenants with the highest failed-charge rate are the tenants with the
highest churn.**

From `tenant-health.csv`: the three tenants with a failed-payment rate above 6%
have a 90-day churn rate averaging 4.8%. The six below 5% average
4.2%. Twelve tenants is not a sample worth a regression, and the
direction is consistent with everything else here.

**4. Our biggest customer is missing, and they are most of the data.**

Nordic Fitness Group's row in `churn.csv` is empty. Not zero: blank. The export
does not produce their figures, so every number above excludes
23,000 members and the account with the highest failed-charge rate in the
book.

`events.jsonl` counts the same cancellations from the other side, and it is what
makes the size of the hole legible: 6,081 cancellations in this period against
the 2,679 in `churn.csv`. Every tenant that does report agrees with the
event log, and the entire difference, 3,402 cancellations, is
Nordic Fitness Group. So the export is missing 56% of every cancellation there was,
and every ratio above describes the eleven tenants that are left.

I raised this with engineering on 2026-09-07 and it is a defect on their
side.

Everything in this document is therefore a floor, and by more than a blank row
looks like.

## What this does not show

- **Why.** The data says a failed payment precedes the leaving. It does not say
  the failed payment caused it, and for some of these members the failed payment
  and the leaving are both symptoms of something else, usually money.
- **What the member experienced.** The interviews say the dunning sequence reads
  as a decision being made for them. That is three conversations, not a finding.
- **Whether a different offer would have kept them.** Nobody has been offered
  anything. There is no product moment between "your payment failed" and "your
  membership has ended".

## What it changes

This is now the evidence base for the outcome in
`../opportunity-solution-tree.md`. Two things follow directly:

1. The addressable population is 576 members a year across eleven
   tenants, weighted to the long tail. At an average membership of about
   400 SEK a month, and assuming half of them are reachable, the annual
   value is in the region of 1.4 MSEK of tenant revenue and therefore
   a meaningful share of our take rate. That estimate is soft and should be
   treated as an order of magnitude.
2. Anything we do has to happen inside the first 19 days for a quarter of
   the population, which rules out anything that depends on a monthly report
   being read.

## Open

- Rerun once Nordic Fitness Group appears in the export. This is not a
  correction at the margin: the population it would add is larger than the one
  measured here, and every number can only move upwards.
- Split `with_prior_failed_payment` by how many failed attempts the member saw.
  The interviews suggest the number of messages matters, and the export does not
  carry it.
