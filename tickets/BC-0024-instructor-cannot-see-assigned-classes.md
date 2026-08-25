---
id: BC-0024
title: An instructor assigned to a class cannot see it
type: bug
tier: S
product_area: classes
door: two-way
gate_decision: 2026-08-11
outcome_metric: Support conversations about staff who cannot see their own schedule
experience_precedence: none
status: ready-for-handover
owner: Aino Lehtinen
created: 2026-05-06
updated: 2026-08-20
signal_refs:
  - signals/support/tickets/SUP-10140.md
  - signals/support/tickets/SUP-10188.md
  - signals/support/tickets/SUP-10200.md
---

## Intent

An instructor assigned to a class sees that class when they sign in.

## Problem and evidence

Staff assigned to classes as instructors cannot see their own schedule unless
they also hold a site manager role. Site managers work around it by printing the
week and leaving it in the studio.

Three operators in three markets over four months. The tickets are worded as
questions about permissions rather than as a defect, which is why this sat in the
queue: each one reads as an operator who has configured something wrongly.

> "Our new instructor is assigned to four classes but says she cannot see them
> when she logs in. Is that a role thing? She has the same access as the others
> as far as I can tell." SUP-10140, 2026-04-15.

The operator was right: she had configured nothing wrongly.

### Reproduction

1. At any tenant, create a staff user with the front desk role.
2. Assign that user as the instructor on a class in the coming week.
3. Sign in as that user and open the schedule.
4. The class is not listed, at any site, on any day.

Reproduced at three tenants, on two access roles, in both the week view and the
day view. Does not depend on site, market or class type.

### Current behaviour

The schedule shows classes a user has permission to administer. Being the
instructor on a class is not one of those permissions, so the person teaching the
class is the one person who cannot see it.

### Expected behaviour

A staff member always sees the classes they are assigned to teach, whatever their
role, including the time, the site, the room and how many members are booked.
They do not gain any ability to change them.

### Regression clause

When a staff member holds a role that lets them administer the schedule, the
system shall continue to show them every class at the sites they administer,
including those they are not teaching.
