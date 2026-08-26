---
id: BC-0027
title: Site managers can see who is coming back from a freeze
type: feature
tier: M
product_area: members
door: two-way
gate_decision: 2026-07-21
outcome_metric: Share of members who train again within 14 days of a freeze ending
experience_precedence: illustrative
status: ready-for-grilling
owner: Aino Lehtinen
created: 2026-06-09
updated: 2026-08-12
handed_over: 2026-08-12
spec_ref: beefcake-platform docs/specs, to be written by engineering after grilling
signal_refs:
  - discovery/interviews/2025-11-06-site-manager-puls-traning.md
  - signals/sales/transcripts/puls-traning-fifth-site.md
  - discovery/opportunity-solution-tree.md
---

## Intent

A site manager can see which members are due back from a freeze in the coming
weeks.

## Problem and evidence

The moment a member comes back from a freeze is the moment they are kept or
lost, and the product has no concept of it. Site managers who have worked this
out keep the list themselves, on paper.

> "I keep notes on paper of who is coming back from a pause. When someone
> freezes, I write the name and the date on a note and stick it on the monitor,
> and the week before they come back I phone them."
> Nadia Ohlin, Puls Träning Kista,
> [interview 2025-11-06](../discovery/interviews/2025-11-06-site-manager-puls-traning.md).

> "Because that is when you keep them. If nobody phones, half of them do not come
> back and then they cancel two months later. If I phone, most of them come back."
> Same interview. Eleven notes were on her monitor on the day, and she has been
> doing this for four years.

She repeated it unprompted in front of her owner nine months later
([expansion call](../signals/sales/transcripts/puls-traning-fifth-site.md)), who
did not know she did it.

The member list can be filtered by frozen. It cannot be filtered by returning,
and a site manager would have to remember to look.

## Outcome and success criteria

Product outcome: more members train again after a freeze instead of drifting into
a cancellation two months later.

Business outcome: voluntary churn in the segment where freezes are most common.

- **SC-1**: Members who train within 14 days of a freeze ending rises from the
  current baseline. Baseline to be measured before release; it is not measured
  today, and measuring it is the first task.
- **SC-2**: A site manager can produce the list of members returning in the next
  14 days in under a minute, without exporting anything.
- **SC-3**: No site keeps a paper list six weeks after release. Checked by asking,
  because it is the honest test.

## Scope

**In scope**
- A view of members whose freeze ends in a chosen period, per site.
- The member's contact details and their history, from the same view.
- A record that somebody has contacted them, so two staff do not phone the same
  member.

**Non-goals**
- Contacting the member automatically. The value in Nadia's process is that a
  person phones. An automatic message is a different intervention with different
  evidence behind it, and there is none.
- Anything member-facing.
- Extending or changing the freeze itself.

**Appetite**: one team, two weeks. It is a view over data we already hold.

**Assumptions and decided defaults**
- Default period is the next 14 days, from the site manager's description of when
  she phones.
- Scoped to the site by default, because that is where the accountability is,
  with a way to see all sites for whoever wants it.

## Product decisions

| ID | Decision | Rationale | Rejected alternative |
|---|---|---|---|
| PD-1 | Site managers and front desk can see it; owners can see all sites | The people who phone are at the site | Owner-only, which puts the list in the hands of the person least likely to make the call |
| PD-2 | The contact record is a simple marker with who and when, not a note field | A note field becomes a private CRM nobody maintains | Free-text notes, which is what the paper is, and the paper works because it is thrown away |
| PD-3 | No plan or tier gating | Retention is not an upsell | Growth tier and above |
| PD-4 | Emit an event when the view is used and when a member is marked as contacted | SC-1 cannot be evaluated otherwise | No analytics |
| PD-5 | Available in all five languages at release | Principle 5 | English first |

## Acceptance scenarios

- **AS-1 (happy path)**: Given a site with members whose freezes end in the next
  fortnight, when the site manager opens the returning view, then those members
  are listed with the date they return and their contact details.
- **AS-2 (marking)**: Given a member in that list, when a staff member marks them
  as contacted, then every other staff member at that site sees who did it and
  when.
- **AS-3 (empty)**: Given a site with nobody returning in the period, when the
  view is opened, then it says so plainly rather than showing an empty table.
- **AS-4 (error case)**: Given a member whose freeze is cancelled or extended
  after appearing in the list, when the list is next opened, then they are gone
  from it or shown with the new date, and never shown with the old one.
- **AS-5 (regression, upset if broken)**: Given any existing member list, filter
  or export, when this ships, then it behaves exactly as it does today.

## Experience reference

Design file: returning members view and the contacted marker. Flows: open the
list, mark contacted, change the period. Precedence: **illustrative**.

## Open questions

- Whether "returning" should include members whose freeze ends beyond the chosen
  period but who have not trained for a long time. Owner: Aino Lehtinen. Needed
  by: spec. (1 of 3.)

## Ideas parked

- A prompt in the daily view rather than a separate list.
- Including members who have not checked in for six weeks, which is the harder
  and probably more valuable version of the same idea, and a different ticket.
