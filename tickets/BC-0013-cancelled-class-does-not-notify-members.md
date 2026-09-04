---
id: BC-0013
title: Cancelling a class does not tell the members booked on it
type: bug
tier: S
product_area: classes
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: backlog
owner: null
created: 2026-05-06
updated: 2026-05-06
signal_refs:
  - signals/support/tickets/SUP-10188.md
  - signals/support/tickets/SUP-10200.md
---

## Intent

Members booked on a cancelled class are not notified.

## Problem and evidence

Two operators in a week, one Swedish and one Norwegian. Staff assumed a message goes out automatically and it does not, so members arrive at a class that is not running.

> We had to cancel the 18:00 spinning because the instructor was ill. I cancelled the class but the members were not told. Do they get a message automatically or do I have to do it? SUP-10188, 2026-05-06.

## Next steps

Confirm whether this is a defect or a missing capability. If a message was never sent, it is an S-tier feature rather than a bug. Either way it is small and it is the sort of thing that makes an operator look bad to their own members.
