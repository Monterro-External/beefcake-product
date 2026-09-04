---
id: BC-0015
title: Show which staff member changed a membership
type: feature
tier: S
product_area: settings-admin
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: backlog
owner: null
created: 2026-04-06
updated: 2026-04-06
signal_refs:
  - signals/support/tickets/SUP-10116.md
  - signals/support/tickets/SUP-10286.md
---

## Intent

An operator can see which member of staff made a change to a membership.

## Problem and evidence

Two operators, same tenant, three months apart. Both triggered by a specific incident where a plan was changed and nobody would admit to it.

> It would be useful to see which staff member did what. Someone changed a plan last week and nobody will admit to it. SUP-10116, 2026-04-06.

## Next steps

Ask engineering what already exists: there is an event log behind the product and this may be a surfacing question rather than a build. Also check whether this belongs to the internal-admin area instead.
