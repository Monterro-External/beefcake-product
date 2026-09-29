---
type: prototype validation
prototype: Freeze and notice confirmation, front desk
rounds: 1
participants: 7 front-desk staff, 4 tenants, 3 markets
dates: 2026-08-24 to 2026-09-01
produced: 2026-09-03
by: Rebecka Nyström
verdict: proceed with changes
---

# Prototype test: the freeze and notice confirmation

## What we were testing

Two screens, redesigned from the front desk's side: the confirmation a staff
member sees when freezing a membership, and the one they see when a member gives
notice. Both currently state a date and nothing else, and the research says staff
tell members a date that turns out to be wrong.

The hypothesis: if the confirmation says the three things the staff member has to
say out loud, they will say them correctly without checking anything.

The three things:

1. When the member stops being charged.
2. When they get back in, in words as well as a date.
3. What it costs them, including whether a binding period moves.

## Method

Seven participants, in their own reception, on their own screen, with a
realistic member scenario read to them by a colleague. Unmoderated first
attempt, then questions. Two tenants in Sweden, one in Norway, one in Finland.
Recruited through their CSM, which biases towards cooperative operators.

Prototype was clickable, in Swedish and English, with the Norwegian and Finnish
participants using English.

## Findings

**F1. Six of seven said the return date correctly, against two of seven on the
current screen.** The sentence they read out was almost always the plain-language
one ("back on Wednesday 1 July"), not the date field above it. Two participants
never looked at the date field at all.

**F2. All seven missed the binding period line.** It is at the bottom, in
smaller text, and it is the thing that produces an argument six months later.
One participant, told afterwards what it meant, said "so it moves? I have been
telling people the opposite for a year".

**F3. The word *freeze* was not the problem. The month boundary was.** Four
participants asked, unprompted, some version of "and if she starts at the end of
the month?". Two said they avoid month-end freezes and tell members to start on
the first instead, which is a workaround for something they cannot explain.

**F4. The notice screen was worse than the freeze screen.** Three participants
gave a wrong last-training day, all three in the same direction: they assumed
the membership ends when the notice period ends rather than at the end of that
billing period. The current product does not say either.

**F5. Nobody wanted fewer clicks.** Every participant, asked what would help
most, said something about knowing what to say rather than about speed. This
contradicts the assumption we started with.

## What changes

- The plain-language sentence becomes the primary element on both screens, with
  the date field secondary.
- The binding-period consequence moves up and is written as a consequence
  ("the binding period moves to X") rather than as a field.
- The notice screen states the last training day explicitly, in the same
  sentence style.
- Copy is written by design and reviewed by two front-desk staff before it
  ships. Not by whoever builds the screen.

## What we are not doing

- Not reducing the number of steps. F5 says it is not the constraint.
- Not adding a preview calendar. Two participants asked for one; both were the
  most experienced people in the sample and neither needed it to answer
  correctly.

## What this test could not answer

- **F3 is not a design finding.** Four of seven participants believe month-end
  freezes behave oddly. A prototype cannot tell us whether they are right. That
  question goes to engineering with the tickets from the same period attached.
- Nothing about the member's side. The member never sees these screens.
- Whether the improvement survives training. Six weeks after a redesign is when
  the paper note by the till comes back.

## Raw material

Session recordings and notes with the design team. Two clips are worth watching
before anyone argues about F2, particularly the participant who has been telling
members the opposite of the truth for a year and was not remotely embarrassed
about it, because nothing in the product ever told her otherwise.
