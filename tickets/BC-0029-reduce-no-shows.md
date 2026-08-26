---
id: BC-0029
title: Reduce no-shows on popular classes
type: feature
tier: M
product_area: classes
door: two-way
gate_decision: 2026-07-14
outcome_metric: No-show rate on classes at 90% capacity or above
experience_precedence: none
status: back-to-discovery
reason_code: solution-space-too-open
owner: Aino Lehtinen
created: 2026-06-30
updated: 2026-08-06
bounced: 2026-08-06
bounced_by: handover-triage
signal_refs:
  - signals/csm/
  - signals/member-feedback/2026-04.md
---

## Intent

Fewer members book a popular class and then do not turn up.

## Problem and evidence

Site managers report no-shows as their most persistent frustration on full
classes: the room is short of people while members who wanted a place were turned
away.

> "Our evening classes say full but there are empty places in the room. Not one
> or two, five or six." Site manager, reported through CSM notes in the spring.

Fill rate across the fleet runs between 70% and 88%, and site managers say the
number they see on the floor is lower than the number on the screen.

## Outcome and success criteria

Product outcome: a booked place is used or released in time for somebody else.

- **SC-1**: No-show rate on classes at or above 90% capacity falls.

## Scope

**In scope**: reducing no-shows on classes.

**Non-goals**: charging members a fee, which several operators have asked for and
which is a commercial decision for them.

**Appetite**: one team, two weeks.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | No no-show fees | Not our decision to make on the operator's behalf | Fees, which two operators asked for |

## Acceptance scenarios

- **AS-1 (happy path)**: Given a member who cannot attend, when they cancel in
  time, then the place goes to somebody on the waitlist.
- **AS-2 (error case)**: Given a member who does not attend and did not cancel,
  then the class records a no-show.
- **AS-3 (regression)**: Existing booking and cancellation continue to work
  unchanged.

## Experience reference

None. Precedence: none.

## Handover triage outcome

Bounced to discovery on 2026-08-06. Reason code: **solution-space-too-open**.

From the triage note:

> The problem is real and it is not understood. A no-show has at least four
> distinct causes and this ticket does not say which one it is addressing:
> members who forget, members who cannot cancel easily, members who were promoted
> from the waitlist too late to attend, and members who hold a fallback booking
> on a clashing class and never intended to use one of them.
>
> Each of those has a different solution and two of them are not in the classes
> area at all. An M-tier ticket with a two-week appetite claims that the shape of
> the answer is known. Nothing here supports that claim, and the decisions table
> contains one row that rules something out rather than deciding anything.
>
> The evidence is also thinner than it looks: CSM notes reporting what site
> managers say, and one forwarded member comment. No measurement of the actual
> no-show rate, which the product records and nobody has looked at.

Route back to discovery with two specific asks:

1. Measure the no-show rate and break it down by whether the member came from the
   waitlist, held a clashing booking, or booked normally. The data exists and
   nobody has looked at it.
2. Come back with the cause that dominates. If it is one, this may be an S with a
   regression clause. If it is three, it is an initiative and should be argued as
   one.

## Open questions

- Which cause dominates. Owner: Aino Lehtinen. Needed by: 2026-09-30. (1 of 3.)

## Ideas parked

- A reminder before the class.
- Cancelling from the reminder itself.
- A cut-off after which the waitlist stops promoting, which became its own ticket
  ([BC-0021](BC-0021-waitlist-promotion-cut-off.md)) and may account for part of
  this on its own.
- Showing site managers who repeatedly does not turn up.
