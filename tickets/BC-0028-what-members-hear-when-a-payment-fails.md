---
id: BC-0028
title: What a member hears when a payment fails
type: feature
tier: M
product_area: payments
door: two-way
gate_decision: 2026-08-04
outcome_metric: Share of members who cancel within 21 days of a dunning sequence being abandoned
experience_precedence: none
status: in-development
handover_route: wayfinder
owner: Johan Wirén
created: 2026-07-28
updated: 2026-08-24
handed_over: 2026-08-24
spec_ref: not yet. Wayfinder first, then a spec
signal_refs:
  - discovery/interviews/2026-01-13-member-puls-traning.md
  - discovery/interviews/2026-01-27-former-member-fitness-norrebro.md
  - signals/reviews/app-store-reviews.csv
  - signals/member-feedback/2026-06.md
  - discovery/usage-cohorts/2026-08-14-failed-payment-churn-cohort.md
---

## Intent

A member whose payment fails is told what happened, what happens next, and what
they can do about it.

## Problem and evidence

The messages a member receives when a charge fails were written separately, at
different times, by whoever shipped each one. Nobody has read them end to end as
a sequence, and the member experiences them as a sequence.

> "I got a message saying the payment failed, then another one, and I could not
> tell if I was supposed to do something, or if it would sort itself out, or if I
> was going to be locked out."
> Member, Puls Träning, [interview 2026-01-13](../discovery/interviews/2026-01-13-member-puls-traning.md).
> She had kept the messages, which is itself a finding: she treated them as
> something that might matter later.

> "The payment failed in October. I meant to fix it. Then there was a message,
> and another one, and by then it felt like a decision had been made."
> Former member, Fitness Nørrebro,
> [interview 2026-01-27](../discovery/interviews/2026-01-27-former-member-fitness-norrebro.md).

Members do not contact us, so this arrives as app reviews naming the gym, as
front-desk anecdote, and as churn. Two in five cancellations follow a failed
payment ([cohort](../discovery/usage-cohorts/2026-08-14-failed-payment-churn-cohort.md)).

Neither message tells the member what to do or what happens next. That is the
whole content of the problem, and we do not know what the right answer is.

## Outcome and success criteria

Product outcome: a member who can act, acts; a member who cannot, understands
what will happen and is not driven to give up.

Business outcome: KR1.2, cancellations within 21 days of an abandoned dunning
sequence, halved.

- **SC-1**: Recovery within the dunning sequence rises from the current baseline.
- **SC-2**: Cancellations within 21 days of an abandoned sequence fall from 38%
  to under 19%.
- **SC-3**: Members can say, when asked, what will happen next. Tested with
  members recruited through operators, five per market.

## Scope

**In scope**
- Every message a member receives between a charge failing and dunning being
  abandoned: what it says, when it arrives, and how many there are.
- What the member can do from the message, which today is nothing.

**Non-goals**
- The retry schedule itself, which is [BC-0025](BC-0025-dunning-schedule-in-tenant-settings.md).
- Any offer to change or pause the membership, which is
  [BC-0016](BC-0016-pause-instead-of-cancel.md) and a separate decision.
- Operator-facing surfaces.

**Appetite**: not set. That is deliberate: the shape of the answer decides the
size, and the wayfinder work is what produces the shape.

**Assumptions and decided defaults**
- The operator's name is on the message, not ours. The member's relationship is
  with the gym. Not negotiable.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | Messages carry the operator's identity, never Beefcake's | The member does not know we exist and should not learn it here | Co-branding |
| PD-2 | In the member's language, which is the tenant's locale | Principle 5 | English fallback |
| PD-3 | Nothing here requires a member to install the app | App adoption ranges from 28% to 61% and most of this population is in the lower half | An in-app-only flow |

## Acceptance scenarios

Thin, and knowingly so. What a member should be told is exactly the question the
wayfinder work has to answer, and writing scenarios now would be writing the
answer before doing the work.

- **AS-1 (happy path)**: Given a member whose charge has failed for a reason they
  can fix, when they receive the first message, then they can act on it without
  contacting the gym.
- **AS-2 (error case)**: Given a charge that failed for a reason the member
  cannot fix, then the member is not asked to do something that will not work.
- **AS-3 (regression, upset if broken)**: Given any member whose payment succeeds,
  when this ships, then they receive exactly the messages they receive today,
  which is none.

## Experience reference

None. Precedence: **none**. Nothing has been designed.

## Open questions

- Whether a member may be given any self-service ability during dunning, which
  crosses the member-surface decision of 2026-04-14. Owner: Malin Ohlsson.
  Needed by: before design starts, because it halves or doubles the solution
  space.
- How many messages is the right number, which is a question we have never asked
  a member. Owner: David Krag. Needed by: end of the wayfinder work.
- Whether the operator should be able to change the wording. Owner: Johan Wirén.
  Needed by: spec. (3 of 3.)

## Ideas parked

- One message that updates rather than a sequence that accumulates.
- A single link that takes the member straight to fixing the payment method.
- Saying nothing at all on the first failure, and only writing to the member when
  the second attempt fails.
- Letting the operator send the first message themselves, since the member trusts
  the gym and not us.
- Telling the member the date of the next attempt, which is the one thing every
  front-desk interview says they ask for.
