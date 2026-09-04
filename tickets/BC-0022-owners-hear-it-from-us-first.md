---
id: BC-0022
title: Owners hear about a problem affecting their members from us, not from a member
type: feature
tier: M
product_area: reports
door: null
gate_decision: null
outcome_metric: null
experience_precedence: none
status: discovery
labels:
  - needs-more-info
owner: Ingrid Halvorsen
created: 2026-07-02
updated: 2026-08-13
signal_refs:
  - discovery/interviews/2025-11-13-owner-vestkyst-trening.md
  - signals/nps/verbatims.md
  - signals/csm/
---

## Intent

An owner learns that something has gone wrong for their members before one of
those members tells them.

## Problem and evidence

Owners describe the same experience: they find out about a problem when a member
shows them a phone at the front desk. It is the moment they stop trusting the
supplier, and it is more damaging than the underlying problem.

> "The worst thing that happened last year was a member showing me her phone at
> the desk. Something about her payment. I had not seen anything. I did not know
> what to say to her, in my own gym."
> Kristin Aasen, [interview 2025-11-13](../discovery/interviews/2025-11-13-owner-vestkyst-trening.md).

> "After that I asked what else I do not know. That is not a good question to
> start asking about a supplier." Same interview.

Henrik has heard versions of this from several owners and raised it in the
requests channel.

## Outcome and success criteria

Product outcome: owners find out first.

- **SC-1**: Fewer owners say they found out from a member.

## Scope

**In scope**: telling operators about problems that affect their members.

**Non-goals**: incident communication from Beefcake to operators about our own
outages, which is a support process and not a product.

**Appetite**: not set.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | Operator-facing only. Nothing here reaches a member | The member's relationship is with the gym | Telling members directly |

## Acceptance scenarios

- **AS-1 (happy path)**: Given something has gone wrong for a group of members,
  when it is detected, then the operator is told.
- **AS-2 (error case)**: Given nothing has gone wrong, then the operator is not
  told anything.
- **AS-3 (regression)**: Existing reports continue to work unchanged.

## Experience reference

None yet. Precedence: none.

## Grill findings

Bounced by `/product-grill-with-docs` on 2026-08-13. Failing checks, verbatim
from the run:

1. **Success criteria are not measurable.** "Fewer owners say they found out from
   a member" has no baseline, no instrument and no target. We do not currently
   ask owners this question anywhere, so there is nothing to compare against.
2. **Every claim carries a link, and one does not.** "Henrik has heard versions
   of this from several owners" cites no note. Either the CSM notes say it, in
   which case link them, or it is a recollection and should be marked as one.
3. **Non-goals are trivial.** One non-goal, and it excludes something nobody
   proposed. A reader would still assume this covers payment failures, access
   problems, class cancellations and export failures, and cannot tell which.
4. **The intent is not one change.** "Something has gone wrong" spans at least
   four unrelated product areas. As written this is a programme, not a ticket.
5. **Acceptance scenarios are placeholders.** AS-1 restates the intent. AS-2 is
   not an error case, it is the absence of the happy path.
6. **Consistent with CONTEXT.md**: no contradiction found. The vocabulary check
   passed.

Not a rejection of the problem, which is real and well evidenced by two owner
sources. The ticket is trying to solve four problems at once.

## Open questions

- Which single class of problem is worth doing first, if any. Owner: Ingrid
  Halvorsen. Needed by: 2026-09-15.

## Ideas parked

- A weekly digest to the owner. Kristin would not read it: her whole routine is
  ten minutes on a Monday, and she says she does not look at what she has.
- Surfacing it in the existing Monday view instead of adding a channel.
