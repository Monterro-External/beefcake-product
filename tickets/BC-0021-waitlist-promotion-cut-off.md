---
id: BC-0021
title: Members are not promoted from a waitlist minutes before a class starts
type: feature
tier: S
product_area: classes
door: two-way
gate_decision: 2026-08-18
outcome_metric: No-show rate among members promoted from a waitlist
experience_precedence: none
status: grilling
owner: Aino Lehtinen
created: 2026-08-12
updated: 2026-08-24
signal_refs:
  - signals/sales/transcripts/malmo-motion-demo.md
  - signals/member-feedback/2026-05.md
  - signals/reviews/app-store-reviews.csv
---

## Intent

A tenant can stop the waitlist promoting members into a class that is about to
start.

## Problem and evidence

A place opens ten minutes before a class and the next member on the waitlist is
promoted and emailed. They are at work. They do not come, and the place is now
occupied by somebody who cannot use it.

> "Member complained that she was told she got a place ten minutes before the
> class started. She was at work. Second time this month for her."
> Front desk, forwarded 2026-05, MF-309.

> "It promotes people ten minutes before a class and then they do not come."
> Site manager, Malmö Motion, [demo call](../signals/sales/transcripts/malmo-motion-demo.md).
> Said about their current system, and true of ours.

One app review says the same from the member's side. Three independent sources,
two of them outside our own book of business.

### Reproduction

1. A class with a full roster and at least one member on the waitlist.
2. A booked member cancels within a few minutes of the start time.
3. The promotion runs.
4. The waitlisted member is promoted and notified, with no time to attend.

### Current behaviour

Promotion happens whenever a place opens, up to the moment the class starts.
There is no setting.

### Expected behaviour

A tenant can set how long before a class starts promotions stop. After that
point a place that opens stays open, and the roster shows it as a free place
rather than as a member who is not coming.

Default: 60 minutes. Chosen rather than asked for, per principle 3.

### Regression clause

When a place opens outside the cut-off window, the system shall continue to
promote the next member on the waitlist and release any clashing booking they
hold, exactly as it does today.
