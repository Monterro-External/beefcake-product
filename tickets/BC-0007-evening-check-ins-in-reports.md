---
id: BC-0007
title: Evening check-ins counted on the wrong day in reports
type: bug
tier: S
product_area: reports
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: backlog
owner: null
created: 2026-08-04
updated: 2026-08-04
signal_refs:
  - signals/support/tickets/SUP-10407.md
---

## Intent

Late-evening check-ins appear under the following day in the access report.

## Problem and evidence

One Finnish operator, who is a careful reporter and noticed it without a member complaining. No other tenant has reported it.

> We are open until midnight. When I look at yesterday's check-ins, the ones from about nine in the evening onwards are filed under today. The event time itself looks right, it is the day that is wrong. SUP-10407, 2026-08-04.

## Next steps

Reporting defect, probably a rounding of the day boundary in the report. Ask reports team. Not urgent, one tenant, no member impact.
