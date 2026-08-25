---
id: BC-0026
title: An employer pays for its employees' memberships
type: initiative
tier: L
product_area: subscriptions
door: one-way
gate_decision: 2026-08-25
outcome_metric: Share of key accounts and mid operators invoicing an employer through Beefcake rather than outside it
experience_precedence: none
status: ready-for-handover
owner: Malin Ohlsson
decision_owner: Malin Ohlsson
created: 2026-07-21
updated: 2026-08-25
pre_mortem_ref: roadmap/pre-mortems/2026-08-11-corporate-memberships-pre-mortem.md
red_team_ref: roadmap/pre-mortems/2026-08-18-corporate-memberships-red-team.md
signal_refs:
  - signals/sales/lost-deals/stockholm-strength-collective.md
  - signals/sales/lost-deals/kuntokeskus-espoo.md
  - signals/sales/transcripts/nordic-fitness-group-renewal-deep-dive.md
  - signals/sales/transcripts/kuntokeskus-espoo-demo.md
  - signals/support/tickets/SUP-10077.md
  - signals/support/tickets/SUP-10297.md
---

## Intent

An employer can pay for its employees' memberships, and the membership does
something sensible when an employee leaves the employer.

## Problem and evidence

Operators sell memberships to employers today and do it outside our product: a
spreadsheet of names, members created by hand, and an invoice from the operator's
own finance system that nothing reconciles against.

> "Three of our corporate customers pay for their staff. About four hundred
> people between them. I keep the list in a spreadsheet, I create every member by
> hand, I send the invoice from our own finance system, and Mikael reconciles it
> by hand." Petra Lindgren, Nordic Fitness Group,
> [renewal deep dive](../signals/sales/transcripts/nordic-fitness-group-renewal-deep-dive.md), two days a month of finance time.

> "When someone leaves the employer, we find out on the next quarterly list. So
> for up to three months we are either training someone for free or charging an
> employer for someone who left." Same call.

It costs deals. Two this year in which we were otherwise winning, in two
countries, with two different shapes of the same need:

- **Sweden and Norway, a block.** An employer buys memberships for a list of
  employees and wants one invoice.
  [Stockholm Strength Collective](../signals/sales/lost-deals/stockholm-strength-collective.md),
  six sites, lost to Boxmaster.
- **Finland, a share.** An employer pays part of one membership as a
  tax-advantaged benefit and the employee pays the rest, on one membership.
  [Kuntokeskus Espoo](../signals/sales/lost-deals/kuntokeskus-espoo.md), lost to
  Boxmaster.

The two shapes are not the same request, and a solution for the first would not
have won the second. This is the single most important sentence in the ticket.

Also present in the support queue from existing customers in three markets
(SUP-10077, SUP-10297) and raised at Voima Kuntosalit as two employers turned
away this year, worth about 150 to 200 members.

## Outcome and success criteria

Product outcome: operators stop keeping employer memberships in a spreadsheet,
and stop turning employer business away.

Business outcome: closes the one capability gap named in every key-account
comparison, serving KR2.1 and KR2.2.

- **SC-1**: An operator can set up an employer, add employees and produce the
  first invoice without help from us. Measured with five operators, and it is
  also the kill criterion.
- **SC-2**: An employee leaving the employer's list is handled within a day of
  the operator being told, against up to three months today.
- **SC-3**: At least four operators, including one Finnish, are invoicing an
  employer through the product within a quarter of release.
- **SC-4**: No change to the monthly total charged to any member who is not part
  of an employer arrangement. Stated as a criterion because this touches billing
  for everyone.

## Scope

**In scope**
- An employer as a payer: a named organisation with billing details.
- A list of employees covered, maintained by the operator.
- Two arrangements: the employer pays the whole membership, or the employer pays
  a fixed share and the member pays the rest.
- One invoice per employer per period, itemised by employee.
- Removing an employee from the list, with the membership continuing on the
  member's own payment method or ending, as the operator chooses.

**Non-goals**
- **An employer-facing portal or login.** Both customers who described the need
  said explicitly that they do not need one, and it is the fastest way for this
  to double in size.
- **Reporting for the employer** on what their staff use. Same reasoning.
- Employers as a way for us to reach members directly.
- Percentage-based splits, tiered contributions, and anything requiring a
  contract to express. One arrangement per employer, one fixed share.
- Franchise or multi-entity billing. Different problem, explicitly out.
- Any change to how an ordinary membership is priced or charged.

**Appetite**: one quarter of one team to something an operator can use for one
employer. If the first usable slice cannot be described in one sentence, the
scope is wrong.

**Assumptions and decided defaults**
- The Finnish shape is built first, on the red team's recommendation: it is the
  harder one, it generalises, and the block invoice falls out of it more easily
  than the reverse.
- An employee is a member first. There is no membership that belongs to an
  employer.
- The operator maintains the employee list. We do not integrate with anyone's HR
  system, now or later.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | We take our percentage on the whole membership value, including the employer's share | It is the same membership and the same payment volume | Taking it only on the member's share, rejected because it makes an employer arrangement worth less to us than a normal one and invites gaming. Decided by the CPO on 2026-08-20, after the pre-mortem raised it as an unowned commercial question |
| PD-2 | Owners and finance roles can manage employers; site managers and front desk can see the arrangement on a member's profile and cannot change it | It is a billing relationship across sites | Front-desk editing |
| PD-3 | Removing an employee ends the employer's share at the end of the current period, never mid-period | Nobody is charged twice for the same period, and the operator can explain it | Immediate proration, rejected because it produces exactly the mid-period arithmetic that customers already find hard to trust |
| PD-4 | When an employee is removed, the default is that the membership continues at full price on the member's own payment method, and the operator can choose to end it instead | The member did not ask to leave the gym; they left a job | Ending the membership by default, rejected as churn we would be creating |
| PD-5 | The member sees only their own share on their receipt, plus a line naming the employer contribution | A receipt is a document a member gives to third parties | Showing the full price, rejected as misleading |
| PD-6 | Employer invoices are produced in the tenant's currency and language | Principle 5 | English invoices |
| PD-7 | Every change to an employer or its employee list is in the audit trail, with who and when | Finance teams reconcile against it and will ask | No record |
| PD-8 | Dunning on an employer invoice is the operator's business and produces no member-facing message | A member must never be chased for their employer's failure to pay | Treating the employer like a member, rejected outright |
| PD-9 | Emit events for employer created, employee added, employee removed and invoice issued | It is the only way we will know whether SC-3 is met | No analytics |
| PD-10 | No employer-facing surface of any kind in this slice | Non-goal, and the pre-mortem's fifth failure story | An employer login |

## Acceptance scenarios

- **AS-1 (happy path, Finnish shape)**: Given an operator with an employer set up
  and a fixed share of 30 EUR, when a covered employee's membership is charged,
  then the employee is charged the membership price less 30 EUR and the employer's
  invoice for the period includes 30 EUR for that employee.
- **AS-2 (happy path, block)**: Given an employer covering a membership in full,
  when the period is charged, then the employee is charged nothing and the
  employer's invoice includes the full price for that employee.
- **AS-3 (employee leaves)**: Given a covered employee removed from the list
  mid-period, when the next period is charged, then the employer is not charged
  for them, the member is charged the full price on their own payment method, and
  the member is told what changed before it happens.
- **AS-4 (error case)**: Given a covered employee with no payment method of their
  own, when they are removed from the employer's list, then the operator is told
  before anything is charged, and no failed charge is generated against the member.
- **AS-5 (error case)**: Given an employer whose invoice is unpaid, when the
  dunning period passes, then the operator is told and no covered member receives
  any message about it.
- **AS-6 (regression, upset if broken)**: Given any member with no employer
  arrangement, when a period is charged, then the amount, the timing and the
  receipt are exactly what they were before this shipped.
- **AS-7 (regression)**: Given a covered member who freezes their membership,
  when the freeze is in effect, then neither the member nor the employer is
  charged for that period, and the employer's invoice reflects it.

## Experience reference

None yet. Precedence: **none**. The flows are understood but nothing has been
designed, and the ticket is being handed over on the strength of the decisions
rather than the screens. Engineering should expect the experience to be settled
during the work rather than before it.

## Migration and rollback intent

Nothing changes for anyone until an operator sets up an employer. There is no
migration of existing memberships and no member sees a difference on the day this
ships.

If we have to reverse it: an operator with an active employer arrangement would
have to go back to a spreadsheet mid-quarter, and their employer would receive an
invoice from a different system than the previous one. That is why this is a
one-way door. Reversal is possible in the first weeks, while adoption is small,
and stops being possible once a full billing period has been invoiced through it.
The kill criterion in SC-1 exists to be tested before that point.

## Pre-mortem and red-team

- [Pre-mortem](../roadmap/pre-mortems/2026-08-11-corporate-memberships-pre-mortem.md),
  run 2026-08-11 with seven people. Its top failure story, building the Swedish
  shape and leaving Finland unserved, is why the scope names both shapes and why
  the Finnish one is first. Stories 3, 5 and 7 became PD-3, PD-10 and PD-1.
- [Red team](../roadmap/pre-mortems/2026-08-18-corporate-memberships-red-team.md),
  run 2026-08-19. Its strongest argument, that the evidence is one account dressed
  as a segment, is accepted as a description and rejected as a conclusion, in
  writing, by the decision owner. Its recommendation to ship the Finnish shape
  first was adopted.

## Decision owner

Malin Ohlsson (CPO). If this stalls, she decides whether it continues, and the
decision on the wider initiative is due on 2026-12-15, committed to Nordic
Fitness Group on the renewal call.

## Open questions

- Whether an employer can cover employees across more than one tenant. Nobody has
  asked for it and one prospect described a group structure that would need it.
  Owner: Malin Ohlsson. Needed by: spec.
- What the employer invoice must show to be usable by a Finnish accountant.
  Owner: Ingrid Halvorsen. Needed by: before the first invoice is issued. (2 of 3.)

## Ideas parked

- An employer-facing view of usage. Repeatedly proposed internally, repeatedly
  not asked for by any customer.
- Importing an employee list from a file. Likely the second thing every operator
  asks for, and deliberately not in the first slice.
- Percentage rather than fixed-amount contributions.
- Letting the employer pay through their own direct debit mandate rather than on
  invoice.
