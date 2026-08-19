---
type: red team
subject: Corporate memberships
run: 2026-08-18
red_team: Johan Wirén (lead), Marte Bakken, Elin Sandberg
brief: Argue that Beefcake should not build corporate memberships at all. Strongest case, no hedging.
method: /red-team, written case, 45 minutes of challenge, then the owner's response
---

# Red team: the case against corporate memberships

Commissioned by Malin Ohlsson a week after the pre-mortem, on the grounds that
the pre-mortem assumed the thing was worth building and nobody had argued the
other side.

## The case against

### 1. The demand is one account and two lost deals, dressed as a segment

Strip out Nordic Fitness Group and what remains is two lost deals, three support
tickets and a handful of CSM mentions across eighteen months. Principle 6 says
two independent sources. This clears that bar and only just, and the loudest
source is the account whose renewal is being used to justify the timing. That is
the definition of a roadmap bought by a deal.

### 2. We are choosing the request over the pattern

The evidence base for the payments work is 41% of cancellations following a
failed payment, 74 support tickets in one quarter, three member interviews and an
app-review cluster. The evidence base for corporate memberships is that important
people ask for it. If both cannot be done, the first is better evidenced by an
order of magnitude.

### 3. It is the largest one-way door on the roadmap and the least reversible

Every other initiative can be undone. This one changes what a membership is, and
once operators have invoiced employers against it, unwinding it means telling
customers their commercial arrangements no longer work.

### 4. It does not defend the moat

Our moat is that leaving means moving thousands of payment mandates. Corporate
memberships adds a capability a competitor already has; it does not deepen
anything that makes us hard to leave. Payments reliability does.

### 5. The renewal argument is weaker than it looks

Petra Lindgren said "we are staying" and that the evaluation is running anyway.
Their stated reasons for staying are staff familiarity and mandate migration,
neither of which is a feature. There is a real possibility that we spend a
quarter on a comparison-sheet line and the renewal was never actually at risk
over it, while the things that did put it at risk went unfixed.

### 6. Finland makes it two products, and nobody has costed the second

The pre-mortem's top failure story is that the two shapes are different. The
response was "cover both in discovery", which is a plan to find out how expensive
it is, not an answer. If the honest answer is two data models, this is not one
quarter of one team.

## The strongest counter-argument, stated fairly

Chains are 35% of ARR and the only segment we lose on capability rather than on
price. If we are not prepared to close a specific, repeatedly named capability
gap in our most valuable segment, then pillar 2 is not a strategy, it is a
sentence in a document. At some point "we do not build for one account" becomes
"we do not build for our best customers".

## What the red team would do instead

1. Fix the billing correctness and the reporting for key accounts, both of which
   are named in the renewal conversation and neither of which is a new capability.
2. Take the December decision date and use it properly: run discovery, produce
   the two-shapes answer, and let the decision be a real one rather than a
   scheduled yes.
3. If the answer is yes, ship the Finnish shape first. It is the harder one, it
   is the one that generalises, and the Swedish block invoice falls out of it more
   easily than the reverse.

## Owner's response

*Malin Ohlsson, 2026-08-19.*

Points 2, 3 and 5 are accepted and change the plan: reporting goes ahead of this
in the queue, which was decided at the roadmap review the day before this session
for the same reasons.

Point 1 is accepted as a description of the evidence and rejected as a
conclusion. A gap that costs us deals in the segment holding 35% of ARR does not
need long-tail volume behind it to be real.

Point 6 is the one I have no answer to, and it is the question discovery must
close. If it comes back as two data models, the December decision is a no, and I
would rather find that out in discovery than in the second month of a build.

Point 4 I disagree with. The moat argument cuts the other way: an employer
relationship with two hundred members attached is harder to move than two hundred
individual mandates.

The decision date stands at 2026-12-15, and the red team's third recommendation,
Finnish shape first, goes into discovery as the leading hypothesis.
