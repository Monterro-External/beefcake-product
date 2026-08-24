---
id: BC-0001
title: Week number in the schedule header is wrong again
type: bug
tier: S
product_area: classes
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: draft
owner: null
created: 2026-03-13
updated: 2026-03-13
signal_refs:
  - signals/support/tickets/SUP-10053.md
---

## Intent

The weekly schedule header shows a week number that does not match the calendar.

## Problem and evidence

Reported by a single-site operator in Sweden. Staff say they have stopped reading the number. Possibly the same defect that was corrected earlier this year; needs checking against the fix rather than assumed.

> The week numbers in the schedule are wrong again. It says week 34 above a week that is week 35. We were told this was fixed in the spring. SUP-10053, 2026-03-13.

## Next steps

Confirm against the correction that shipped in May. If it is the same defect returning, this is a regression and changes tier. If it is operators repeating a workaround from their own handbook, close and tell support what to reply.
