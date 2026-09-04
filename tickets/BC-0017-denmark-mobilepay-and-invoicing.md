---
id: BC-0017
title: Danish operators can take payment and issue receipts the Danish way
type: feature
tier: M
product_area: payments
door: null
gate_decision: null
outcome_metric: Danish pipeline conversion, and whether our Danish customer stops rebuilding their receipts by hand
experience_precedence: none
status: discovery
owner: Ingrid Halvorsen
created: 2026-04-08
updated: 2026-08-12
signal_refs:
  - discovery/market/denmark-market-scan.md
  - signals/sales/lost-deals/aarhus-traeningscenter.md
  - signals/support/tickets/SUP-10103.md
  - signals/support/tickets/SUP-10391.md
---

## Intent

A Danish operator can offer MobilePay and hand their members a receipt a Danish
accountant accepts.

## Problem and evidence

Two separate needs that have been discussed as one for a year, which is why
neither has happened.

**The receipt.** Danish receipts must show the VAT rate and amount, and invoice
numbers must run consecutively per calendar year. Our only Danish customer's
accountant rebuilds this from the CSV export every quarter and has asked about it
every quarter for two years.

**MobilePay.** Used by around 95% of Danish adults. Every Danish sales
conversation opens with it; two ended on the answer.

> "MobilePay er ikke til forhandling. Og vores revisor skal kunne bruge
> fakturaerne uden at bygge dem om." (MobilePay is not negotiable. And our
> accountant has to be able to use the invoices without rebuilding them.)
> Aarhus Træningscenter, [lost deal](../signals/sales/lost-deals/aarhus-traeningscenter.md), 2026-07.

## Discovery state

The [market scan](../discovery/market/denmark-market-scan.md) has done the
thinking. Its recommendation is the reason this ticket is still in discovery
rather than at the gate: the two halves have different answers.

- **The receipt work is unconditional.** We have a Danish customer either way,
  and it is about two weeks. It should not be waiting for a market decision.
- **MobilePay is a market-entry bet** and belongs to the Denmark readiness
  initiative, sequenced behind Norway.

## Next steps

1. Split this ticket. The receipt half is an S and should be at the gate now.
2. Leave the MobilePay half here until the Norway work has produced evidence
   about whether a local payment method changes sign-up completion.
3. Get the Danish requirements confirmed by an actual Danish accountant rather
   than by a customer relaying their accountant. Owner: Ingrid Halvorsen.

The split is the action. This ticket has been one ticket for four months and that
is the reason nothing has moved.
