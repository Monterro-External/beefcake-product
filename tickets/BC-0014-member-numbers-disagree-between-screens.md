---
id: BC-0014
title: Member count differs between the dashboard and the member list
type: bug
tier: S
product_area: reports
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: draft
owner: null
created: 2026-03-02
updated: 2026-03-02
signal_refs:
  - signals/support/tickets/SUP-10019.md
  - signals/support/tickets/SUP-10055.md
---

## Intent

Two screens show different member counts for the same tenant.

## Problem and evidence

Two operators, about forty members apart in one case. Probably a definition difference between active and not-yet-cancelled, which would make it a copy problem rather than a counting one.

> The member count on the dashboard says one number and the member list says another, about forty apart. Which one do I believe? SUP-10019, 2026-03-02.

## Next steps

Find out which definition each screen uses. If they are both right, the fix is what the labels say, and it is still worth doing: an owner who stops trusting one number stops trusting all of them.
