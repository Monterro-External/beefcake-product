---
id: BC-0025
title: Operators can see and set their own dunning schedule
type: feature
tier: M
product_area: payments
door: two-way
gate_decision: 2026-08-11
outcome_metric: Share of failed charges recovered within the dunning sequence, and support conversations asking what the retry schedule is
experience_precedence: illustrative
status: ready-for-handover
owner: Johan Wirén
created: 2026-06-16
updated: 2026-08-24
signal_refs:
  - discovery/synthesis/2026-02-06-support-tickets-q4-2025.md
  - discovery/interviews/2026-01-22-front-desk-kraft-trening.md
  - discovery/interviews/2026-01-13-member-puls-traning.md
  - signals/csm/
---

## Intent

An operator can see what happens to a failed payment and change it.

## Problem and evidence

Dunning runs three attempts, three days apart, by default. The number of attempts
and the interval are tenant settings, and almost no operator has ever set them:
the default is effectively the policy for the whole book of business.

Nobody outside Beefcake can see what that policy is. Support cannot explain it on
the phone without looking at the configuration, front-desk staff invent an answer,
and the member receives a sequence nobody has described to them.

> "I know it tries three times. I do not know when. So I say 'in a few days'."
> Front desk, Kraft Trening, [interview 2026-01-22](../discovery/interviews/2026-01-22-front-desk-kraft-trening.md).

> "A date. Just tell me the date it will try again and I will tell them the date.
> That is the whole conversation." Same interview.

From the member's side the same sequence reads as something being decided about
them:

> "I got a message saying the payment failed, then another one, and I could not
> tell if I was supposed to do something."
> Member, Puls Träning, [interview 2026-01-13](../discovery/interviews/2026-01-13-member-puls-traning.md).

Twenty-nine support tickets in one quarter ask when a charge will be retried
([Q4 synthesis theme 2](../discovery/synthesis/2026-02-06-support-tickets-q4-2025.md)).
The date exists. It is not on the screen the desk uses.

One operator has an explicit policy of four attempts seven days apart, set by
their finance team years ago. They are the only tenant in the book with an
opinion on file, which is worth knowing before we assume operators do not care.

## Outcome and success criteria

Product outcome: an operator can answer a member's question about a failed
payment without contacting us, and can choose a schedule that suits their
members instead of inheriting ours.

Business outcome: recovery inside the dunning sequence rises, which serves KR1.1,
and involuntary churn falls, which serves KR1.2.

- **SC-1**: An operator can state their own retry schedule correctly, from the
  product, within 30 seconds. Tested with five operators.
- **SC-2**: Support conversations asking what the retry schedule is fall from 29
  a quarter to under 10.
- **SC-3**: No fall in the share of failed charges recovered within the sequence.
  This is the criterion that stops us shipping a settings page that makes the
  outcome worse.

## Scope

**In scope**
- A settings page showing the current dunning schedule in plain words, with the
  dates a charge failing today would be retried on.
- Changing the number of attempts and the interval, within limits.
- The next attempt date on the member's payment history, where the desk looks.

**Non-goals**
- Changing the default. Any change to a default is a fleet-wide change and it is
  its own decision with its own evidence.
- What the member is told, and when. Adjacent, larger, and separate.
- Per-member or per-plan schedules. One schedule per tenant.
- Choosing which failures are retried at all. Different problem.

**Appetite**: one team, four weeks.

**Assumptions and decided defaults**
- Limits on what an operator can choose: between 1 and 5 attempts, between 1 and
  14 days apart. Decided rather than asked, per principle 3. The upper bounds
  exist because a member should not be charged more times or over a longer period
  than they can reasonably keep track of.
- Existing tenants keep exactly what they have today, including the one tenant
  with an explicit policy.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | Owners only can change it; site managers and front desk can see it | It affects money leaving members' accounts across every site | Site-manager editing, rejected because the setting is per tenant and a site manager would be changing other sites' behaviour |
| PD-2 | Available to every tenant on every plan, not gated by tier | Payment reliability is the product, not an upsell | Gating it to the growth tier, rejected on the same grounds |
| PD-3 | Changing the schedule affects only charges that fail after the change | A member part way through a sequence should not have the rules changed on them | Retroactive application, rejected as unfair and unexplainable |
| PD-4 | Changes are recorded in the audit trail with who and when | It is a money setting and finance teams ask | No record |
| PD-5 | The preview shows dates, not intervals | Every piece of research says people want the date | "3 attempts, 3 days apart", which is what we say today and what nobody can act on |
| PD-6 | Localised into all five languages at release | Principle 5 | English first |
| PD-7 | Emit an event when the schedule changes, with the old and new values | It is the first thing we will want when a tenant's recovery rate moves | No analytics |

## Acceptance scenarios

- **AS-1 (happy path)**: Given an owner on the payment settings page, when they
  look at the dunning section, then they see the schedule stated as dates for a
  charge failing today, without changing anything.
- **AS-2 (change)**: Given an owner who sets 4 attempts 7 days apart, when they
  save, then charges failing after that moment follow the new schedule and the
  preview updates to match.
- **AS-3 (front desk)**: Given a front-desk user looking at a member with a failed
  charge, when they open the payment history, then they see the date of the next
  attempt.
- **AS-4 (error case)**: Given an owner who enters a schedule outside the allowed
  limits, when they save, then the change is refused with a message saying what
  the limits are and why, and the previous schedule remains in force.
- **AS-5 (regression, upset if broken)**: Given the tenant that has an explicit
  policy of 4 attempts 7 days apart, when this ships, then their schedule is
  unchanged and no charge of theirs is retried on a different day than it would
  have been.
- **AS-6 (regression)**: Given a tenant that has never set anything, when this
  ships, then their members' charges are retried exactly as before.

## Experience reference

Design file: dunning settings and the payment history row. Flows: view schedule,
change schedule, refusal at the limits. Precedence: **illustrative**. The prose
wins; the design shows the intent of the preview.

## Open questions

- Whether the limits should differ by market, since direct debit schemes differ
  in how soon a charge may be presented again. Owner: Johan Wirén. Needed by:
  spec. (1 of 3.)

## Ideas parked

- Suggesting a schedule based on what recovers best across the fleet. Interesting,
  and it needs evidence we do not have.
- Letting an operator pause dunning for one member. Asked for by two operators,
  larger than it sounds, and it belongs with the member-communication work.
- Showing the operator what the member receives at each step. Almost made the
  scope. Cut because the message content is changing separately and we would be
  designing against something in motion.
