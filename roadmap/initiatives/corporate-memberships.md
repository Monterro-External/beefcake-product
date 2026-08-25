---
initiative: Corporate memberships
pillar: 2
owner: Malin Ohlsson
decision_owner: Malin Ohlsson
door: one-way
appetite: one quarter of one team to a first shippable slice, decision before 2026-12-15
status: first slice funded, wider initiative in discovery
gate_decision: 2026-08-25
outcome_metric: Share of key accounts and mid operators invoicing an employer through Beefcake rather than outside it
pre_mortem: ../pre-mortems/2026-08-11-corporate-memberships-pre-mortem.md
red_team: ../pre-mortems/2026-08-18-corporate-memberships-red-team.md
---

# Corporate memberships

An employer pays for its employees to train. Today a membership belongs to one
member and is paid by that member, so operators do it in a spreadsheet and
invoice outside the product.

## Why now

- Nordic Fitness Group's renewal is on 2027-01-31 and this is the top line of
  their comparison sheet, stated by their head of operations in two consecutive
  meetings.
- Two lost deals this year where we were otherwise winning
  ([Stockholm Strength Collective](../../signals/sales/lost-deals/stockholm-strength-collective.md),
  [Kuntokeskus Espoo](../../signals/sales/lost-deals/kuntokeskus-espoo.md)).
- Recurring from existing customers in three markets.

## Why it is a one-way door

It changes what a membership is. Today: one member, one payer, one price. After:
a membership can have two payers with different shares, and a relationship to an
entity that is not a member. Existing memberships have to keep working, reporting
has to keep summing, and the change cannot be quietly reversed once operators
have set up employers and invoiced against them.

It also touches pricing: whether we take our percentage on the employer's share
is a commercial decision, not an engineering one.

## The two shapes, which are not the same request

1. **Sweden and Norway: the employer buys a block.** One invoice, a list of
   employees, memberships that end when the employee comes off the list.
2. **Finland: the employer pays part of one membership.** One member, one card,
   one price, two payers, a tax-advantaged benefit.

The Swedish shape does not solve the Finnish deal. Anything scoped here covers
both or explicitly says which one it is.

## The minimum, in customers' words

> "The company pays, the employee is a member, and the membership does something
> sensible when the employee leaves the company. I do not care how."
> Petra Lindgren, Nordic Fitness Group.

> "One membership, two payers, and an invoice to the employer once a month with
> the list of people on it. Not a portal." Hanna Koskinen, Kuntokeskus Espoo.

Neither asked for an employer-facing product. Both explicitly said they do not
need one.

## Appetite

One quarter of one team to something an operator can use for one employer. Not a
platform for corporate wellness. If the first slice cannot be described in one
sentence by the end of discovery, the scope is wrong and the gate should refuse
it.

## Kill criteria

- If discovery shows the two shapes cannot share a data model without a
  compromise that makes both worse, we build the Finnish shape only and say so.
- If the renewal is lost before the decision date, this loses its main
  justification and is re-argued on segment evidence alone.
- If the first slice is not usable by an operator without our help, it does not
  ship.

## Decision date

**2026-12-15** for the initiative as a whole, committed to Nordic Fitness Group
on the renewal call. A no is delivered in writing before that date rather than by
silence.

**A first slice passed the gate on 2026-08-25** and is BC-0026: an employer as a
payer, an employee list, one invoice, Finnish shape first. It is deliberately
small enough to be reversed while adoption is small, and its own kill criterion
is that an operator must be able to set up an employer without us.
