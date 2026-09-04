---
id: BC-0020
title: The desk can tell a member exactly what a freeze or a notice does
type: feature
tier: M
product_area: subscriptions
door: two-way
gate_decision: 2026-08-04
outcome_metric: Share of front-desk staff who state the return date and the binding consequence correctly, unprompted
experience_precedence: binding
status: discovery
owner: Ingrid Halvorsen
created: 2026-07-31
updated: 2026-08-21
signal_refs:
  - discovery/validation/2026-07-30-freeze-flow-prototype-test.md
  - discovery/synthesis/2026-02-06-support-tickets-q4-2025.md
  - discovery/interviews/2025-11-11-front-desk-gymmet-vasastan.md
  - discovery/interviews/2025-11-06-site-manager-puls-traning.md
---

## Intent

The freeze and notice confirmation screens say the three things a staff member
has to say out loud, so they say them correctly without checking anything.

## Problem and evidence

The front desk explains freezes and notice periods several times a week and gets
it wrong often enough that members find out later. The screens state a date and
nothing else, so staff work out the consequences themselves, and when they cannot
they invent an answer delivered with complete confidence.

Sixty-one support tickets in one quarter are staff asking us to confirm the rules
so they can repeat them
([Q4 synthesis theme 3](../discovery/synthesis/2026-02-06-support-tickets-q4-2025.md)).

> "She is going to Thailand. I put in the dates she said. She asked when the money
> stops and I said next month, which I think is right."
> Front desk, Gymmet Vasastan, [interview 2025-11-11](../discovery/interviews/2025-11-11-front-desk-gymmet-vasastan.md).
> It was not right for her case, and nobody found out for six weeks.

> "The notice period is where I get into trouble. They give notice on the 3rd and
> they think they stop paying at the end of the month, and they do not. I explain
> it about twice a week."
> Site manager, Puls Träning, [interview 2025-11-06](../discovery/interviews/2025-11-06-site-manager-puls-traning.md).

Tested with seven front-desk staff at four tenants in three markets
([prototype test](../discovery/validation/2026-07-30-freeze-flow-prototype-test.md)):
six of seven stated the return date correctly against two of seven today, and
all seven missed the binding-period consequence, which is the line that produces
an argument six months later.

## Outcome and success criteria

Product outcome: a member leaves the desk having been told the truth, and does
not come back six weeks later to argue about it.

Business outcome: fewer support conversations that exist only to confirm our own
rules (KR3.1 measures the wrong thing here; this one is measured directly).

- **SC-1**: In a repeat of the July test, at least six of seven participants
  state the return date correctly and at least five of seven state the binding
  consequence, unprompted, on their first attempt.
- **SC-2**: Support tickets whose content is a staff member asking us to confirm
  freeze or notice rules fall from 61 a quarter to under 25.
- **SC-3**: No increase in the time taken to complete a freeze at the desk.
  Measured because it is what we would otherwise trade away without noticing.

## Scope

**In scope**
- The confirmation step of a freeze, at the desk and in self-serve where a tenant
  has it enabled.
- The confirmation step of giving notice.
- The words on both, written by design and reviewed by two front-desk staff.

**Non-goals**
- Changing what a freeze or a notice period does. This is entirely about saying
  it, and any proposal to change the rules is a different ticket.
- Reducing the number of steps. The test says speed is not the constraint, and
  five of seven participants said so directly.
- A preview calendar. Two participants asked for one; both were the most
  experienced people in the sample and neither needed it to answer correctly.
- The member's view of their own freeze. Separate surface, separate decision.

**Appetite**: one team, three weeks. It is copy and layout on two screens. If it
grows past that, something has been misunderstood.

**Assumptions and decided defaults**
- The plain-language sentence is primary and the date field is secondary.
  Decided from the test, where two participants never looked at the date field.
- Wording is per market, translated by a native speaker in each, not by us.
- The binding-period consequence is shown even when the binding period does not
  move, stating that it does not. Silence reads as "no effect" only to people who
  already know the rules.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | Copy is owned by design and signed off by two front-desk staff before release | The people who have to say the sentence are the ones who can tell us whether it can be said | Copy written by whoever builds the screen, which is how the current screens got their wording |
| PD-2 | Same treatment on the self-serve member flow where a tenant has it enabled | A member who freezes themselves gets the same three facts, or the desk inherits the confusion | Desk only, cheaper, and it leaves self-serve tenants worse off than before |
| PD-3 | No role gating. Anyone who can perform the action sees the explanation | The explanation is part of the action | Showing consequences only to managers |
| PD-4 | Nothing new is written to the audit log. This changes what is displayed | No new customer data is created | Logging confirmations, which nobody asked for |
| PD-5 | Available in sv, nb, da, fi and en at release, not English first | Principle 5. A confirmation nobody can read is not a confirmation | Ship English and translate later |

## Acceptance scenarios

- **AS-1 (happy path)**: Given a member with an active membership and no binding
  period, when the desk freezes it for one month from a date they choose, then
  the confirmation states in one sentence when the charging stops, when the
  member can train again, and that no binding period is affected.
- **AS-2 (binding)**: Given a member with a binding period ending in four months,
  when the desk freezes for two months, then the confirmation states the new
  binding end date explicitly as a consequence of the freeze.
- **AS-3 (notice)**: Given a member who gives notice, when the desk confirms it,
  then the confirmation states the last day the member can train and the last
  payment they will be charged, both as dates.
- **AS-4 (error case)**: Given a member whose tenant does not allow a freeze of
  the requested length, when the desk tries, then the refusal says what the limit
  is and what the desk can offer instead, before the form has been filled in.
- **AS-5 (regression, upset if broken)**: Given any freeze or notice a tenant
  could create before this change, when it is created after it, then the dates
  and the money are exactly the same as they were. This changes what is said, not
  what happens.

## Experience reference

Prototype from the July test, flows: freeze confirmation, notice confirmation,
refusal state. Precedence: **binding** for the layout and the sentence structure,
because that is what was tested. The prose above wins on anything the prototype
does not cover, particularly the localisation decision.

## Open questions

- Which of the four languages gets the wording reviewed by a native front-desk
  speaker first. Owner: Rebecka Nyström. Needed by: start of build.
- Whether self-serve freeze tenants need a different sentence for the member.
  Owner: Aino Lehtinen. Needed by: end of the first week. (2 of 3.)

## Ideas parked

- A preview calendar showing the frozen period. Asked for by two participants,
  not needed by either.
- Sending the member a copy of what they were told. Attractive, and it touches
  member notifications, which is a different area with its own decisions.
- Showing the member's freeze history at the point of freezing, so the desk can
  see it is the fourth one this year.
