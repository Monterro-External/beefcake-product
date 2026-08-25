---
id: BC-0023
title: Danish receipts show VAT the way a Danish accountant expects
type: bug
tier: M
product_area: payments
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: needs-more-info
owner: Ingrid Halvorsen
created: 2026-08-05
updated: 2026-08-22
signal_refs:
  - signals/support/tickets/SUP-10391.md
  - signals/sales/lost-deals/aarhus-traeningscenter.md
---

## Intent

A receipt issued to a Danish member is usable by a Danish accountant without
being rebuilt.

## Problem and evidence

Our Danish customer's accountant rebuilds the receipts from the CSV export every
quarter. A Danish prospect raised the same point in a demo and it contributed to
losing them.

> "Momsen skal fremgå med sats og beløb, og fakturanummeret skal være fortløbende
> pr. år." Forwarded by the operator from their accountant, SUP-10391.

The requirement is a robust and well-understood part of Danish practice, and
making the receipt compliant would be a fast fix.

## Outcome and success criteria

Product outcome: the accountant stops rebuilding the file.

- **SC-1**: The receipt is compliant with Danish requirements.
- **SC-2**: The change is seamless for operators in the other three markets.

## Scope

**In scope**: the Danish receipt layout.

**Non-goals**: MobilePay, which is a separate decision; changing receipts in the
other three markets.

**Appetite**: two weeks.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | Applies to Danish tenants only | Only Denmark has this requirement | Changing every market's receipt |

## Acceptance scenarios

- **AS-1 (happy path)**: Given a Danish tenant, when a receipt is issued, then it
  shows the VAT rate and amount and a consecutive number.
- **AS-2 (error case)**: Given a receipt that cannot be numbered consecutively,
  then it is not issued and the operator is told.
- **AS-3 (regression)**: Receipts in Sweden, Norway and Finland continue to look
  exactly as they do today.

## Experience reference

None. Precedence: none.

## Grill findings

Bounced by `/product-grill-with-docs` on 2026-08-22. Failing checks:

1. **A claim with no source.** "The requirement is a robust and well-understood
   part of Danish practice" cites nothing. The only sources here are a customer
   relaying their accountant and a prospect in a sales call. Neither is a
   statement of Danish law and neither should be paraphrased as one.
2. **Vague adjectives without numbers**: *robust*, *fast*, *seamless*. All three
   are doing work in this ticket that a number should be doing.
3. **SC-1 is not measurable and not user-observable.** "Compliant with Danish
   requirements" is the thing to be determined, not the criterion. What does the
   accountant do differently?
4. **SC-2 is a non-goal wearing a success criterion's clothes.** Move it.
5. **Tier does not match size.** Two weeks of work, one market, one document,
   no product decision anyone would argue about. This is an S with a regression
   clause, and as an M it is carrying five sections that say nothing.
6. **Consistent with CONTEXT.md**: passed. Denmark is named as a market and
   receipts are named as a product area.

## Open questions

- What exactly Danish practice requires, confirmed by a Danish accountant rather
  than relayed. Owner: Ingrid Halvorsen. Needed by: 2026-09-05.

## Ideas parked

- Doing the same review for Finnish receipts before somebody tells us.
