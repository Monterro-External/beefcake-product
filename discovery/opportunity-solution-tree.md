---
type: opportunity solution tree
outcome: Reduce involuntary churn caused by payment failures
owner: Johan Wirén
started: 2026-07-06
updated: 2026-08-20
status: live, partially filled
---

# OST: involuntary churn caused by payment failures

The live tree. Opportunities come from research and are only added when two
independent sources support them; solutions are added freely and killed cheaply.
An opportunity with no evidence link is a guess and is marked as one.

## Outcome

**Halve the share of members who cancel within 21 days of a dunning sequence
being abandoned.** Baseline 38%, target under 19% by the end of the year
(KR1.2). Ladders to pillar 1: payments reliability as a moat and a revenue line.

Why this outcome and not "reduce churn": this is the churn we cause. It is
measurable, it is ours, and the member did not decide to leave.

## Opportunities

### O1. The member cannot tell what is happening or what to do
*Evidence: [member interview](interviews/2026-01-13-member-puls-traning.md),
[member interview](interviews/2026-01-27-former-member-fitness-norrebro.md),
[app reviews](../signals/reviews/app-store-reviews.csv) (7 reviews mentioning
payment messages), [support theme 2](synthesis/2026-02-06-support-tickets-q4-2025.md).*

The dunning messages say a payment failed. They do not say what happens next,
whether the member must act, or what happens if they do nothing. Members read the
sequence as escalating severity and some read it as a decision already made.

- **S1.1** Say what happens next and when, in every message. Cheap, testable.
- **S1.2** One message that updates, rather than a sequence that accumulates.
- **S1.3** A member-facing way to fix the payment method without phoning the gym.
  *(Note: touches the member surface, which is deliberately minimal. Needs a CPO
  call before it is explored further.)*

### O2. The front desk cannot explain a failed payment
*Evidence: [front desk interview](interviews/2026-01-22-front-desk-kraft-trening.md),
[front desk interview](interviews/2025-11-11-front-desk-gymmet-vasastan.md),
[support theme 2](synthesis/2026-02-06-support-tickets-q4-2025.md) (74 tickets).*

The desk sees that a charge failed and not why or when it will retry, so staff
invent an explanation. The invented explanation becomes what the member believes.

- **S2.1** Show the next retry date where the desk already looks. *"Just give me
  the date" is the most concrete request in the whole research round.*
- **S2.2** Translate failure codes into what the operator can do about them.
- **S2.3** Flag members whose mandate is missing or expired before the run, not
  after it.

### O3. There is no offer between "your payment failed" and "your membership ended"
*Evidence: [cohort analysis](usage-cohorts/2026-08-14-failed-payment-churn-cohort.md),
[former member interview](interviews/2026-01-27-former-member-fitness-norrebro.md),
[member feedback](../signals/member-feedback/) (several entries across the period).*

Members in temporary difficulty have two options: pay or stop. Freezing exists
and requires walking into the gym and asking a person, which is the wrong route
for exactly this population. Nobody has requested a solution here. The
opportunity only appears when the churn data and the desk anecdotes are put
together.

- **S3.1** Offer a freeze at the point the payment fails, rather than waiting for
  the member to know freezing exists.
- **S3.2** A cheaper plan offered at the same moment.
- **S3.3** Split or delay the payment for one period.
  *(One-way door: touches pricing and revenue recognition. If this is explored it
  goes to the gate as an L.)*

### O4. Some failures are ours, not the member's
*Evidence: [platform errors export](../signals/platform/errors.jsonl),
[owner interview](interviews/2026-01-20-owner-kuntoklubi-kallio.md) (30 unexplained
technical failures a year at one small tenant).*

A share of failed charges are technical rather than a bank decline. The operator
sees the same thing either way and so does the member.

- **S4.1** Retry technical failures differently from declines.
- **S4.2** Never send a member a message about a failure that was ours.
  *Not yet explored. This may be the highest-value line on the page and it is
  the one with the least evidence behind it.*

### O5. Members do not come back after a freeze
*Evidence: [site manager interview](interviews/2025-11-06-site-manager-puls-traning.md)
(eleven paper notes on a monitor), [expansion call](../signals/sales/transcripts/puls-traning-fifth-site.md).*

Adjacent to the outcome rather than inside it: this is voluntary churn following
a freeze. Kept on the tree because the same product moment serves both, and
because a site manager has built a manual process for it that works.

- **S5.1** A returning-from-freeze list the site can act on.

## Not on the tree, and why

- **Making dunning more persistent.** It would raise recovery and it is the
  opposite of what the member evidence says. Any solution that increases the
  number of messages a member receives needs to beat this evidence first.
- **Discounting to retain.** Not an opportunity, a lever, and one the operator
  owns rather than us.

## State of the tree

| | |
|---|---|
| Opportunities with two or more independent sources | O1, O2, O3, O5 |
| Opportunities with one source | O4 |
| Solutions explored beyond a sentence | S2.1 only |
| Validated | none |
| Killed | none, which after two months is itself a criticism of this tree |

Next: size O1 and O2 against S2.1, which is small enough to be an S-tier ticket
on its own, and decide whether O3 is a discovery track or a gate item.
