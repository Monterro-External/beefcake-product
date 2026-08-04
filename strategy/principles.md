# Product principles

Owner: Malin Ohlsson (CPO). Agreed 2026-02-11 after two sessions with the PMs,
design, engineering leadership and the CSM lead. Revisited when strategy changes.

A principle is a standing decision rule. It takes a side on a trade-off where
both sides are defensible, states the cost we accept, and ends an argument we
would otherwise have every quarter. Each one below names a real decision at
Beefcake that it would have settled faster. Cite them by name.

---

### 1. Configuration over customisation

**We choose a tenant setting available to all 340 operators over an
account-specific behaviour, even when the account is a key account and the
request is reasonable.**

The cost we accept: settings accumulate, our largest customers occasionally hear
no, and a competitor who says yes may win a deal we should have won.

The decision it would have made: the per-site invoice numbering built for Nordic
Fitness Group in 2024, still behind an undocumented flag, still the reason two
receipt bugs have shipped since. Under this principle it would have been a
tenant setting with a default, or it would have been declined.

Corollary: a setting needs a default we are willing to defend, and the default
is a product decision and never a leftover.

### 2. The member's money is sacred

**We choose correctness in anything that charges, refunds or issues a receipt
over shipping speed on that path, even when the fix is small and the release is
today.**

The cost we accept: the payments area moves slower than the rest of the product,
carries more tests, and blocks releases other teams are ready for.

The decision it would have made: the proration change shipped on a Thursday in
2025 that charged 71 members twice, found by the members and not by us. Under
this principle it goes out at the start of a week, behind a per-tenant flag,
with a reconciliation report run before anyone goes home.

Boundary: this is about money leaving a member's account. A slow report is
annoying, a wrong charge is a breach of trust that takes a year to repair.

### 3. Opinionated defaults over another toggle

**We choose changing the default for everyone over adding a setting, even when a
customer asks for "just a toggle".**

The cost we accept: some operators are told the product works a certain way, and
occasionally one churns over it.

The decision it would have made: the dunning configuration, which now has three
settings that interact and which support cannot explain over the phone without
opening the code. Under this principle, the second request would have produced a
better default rather than a second setting.

Consequence we take seriously: most tenants never override anything, so a wrong
default is a fleet-wide incident rather than a preference. Changing one is an
initiative rather than a config change.

### 4. The front desk is the real user

**We choose the experience of the person with a queue behind them over the
experience of the owner reading a report, even when the owner signs the
contract.**

The cost we accept: owner-facing polish lags, and buyers see a plainer demo than
competitors show.

The decision it would have made: the 2025 member-profile redesign, which put
lifetime value above the freeze and check-in actions because the owner persona
was in the room and the front desk was not. It went back for rework after four
weeks of complaints.

### 5. One product across four markets

**We choose a single behaviour parameterised by locale and currency over
market-specific code paths, even when the market-specific version would ship
this month.**

The cost we accept: a market's specific need waits until it can be expressed as
data, which sometimes means a customer waits a quarter.

The decision it would have made: the Norwegian receipt layout, added as a branch
in 2025 "just for Norway", which is where the currency formatting later went
wrong for exactly one country. Under this principle the layout is data and the
formatting has one implementation.

### 6. Signals decide, individual voices do not

**We choose acting on a pattern confirmed by two independent sources over acting
on the loudest single request, even when the single request comes from our
largest account or our CEO.**

The cost we accept: we are slower to respond to a genuinely novel need seen by
one person first, and someone senior occasionally has to be told that their
anecdote is an anecdote.

The decision it would have made: the "members want workout tracking" push of
2025, which came from one owner who mentioned it in three consecutive meetings
and which reached the roadmap without a single supporting signal. Under this
principle it never leaves the triage queue, and it stays out because it also
violates a stated non-goal.

Corollary, and the harder half: a pattern that no single customer has articulated
still counts if two independent sources show it. Combining a churn cohort with
member feedback is evidence. Waiting for someone to file it as a request is not.

### 7. Numbers set in advance

**We choose a pre-committed target and kill criteria over judging the result
afterwards, even when we are confident and the feature is obviously good.**

The cost we accept: work we like gets killed by its own numbers, and we lose the
comfort of explaining afterwards why the number was the wrong number.

The decision it would have made: the member app, launched in 2024 as a
"strategic bet" with no target, now at 31% to 61% adoption depending on the
tenant and still without an agreed definition of success. Under this principle
it would have had a target, a decision date and a named decider before the first
release.

---

## Pressure test

| # | Opposite is rational? | Cost stated? | Settles a real past disagreement? | X-over-Y form? |
|---|---|---|---|---|
| 1 Configuration over customisation | Yes, a services-led vendor genuinely chooses the opposite | Yes | Yes, per-site invoice numbering | Yes |
| 2 The member's money is sacred | Yes, a growth-stage vendor may accept billing risk for speed | Yes | Yes, the 2025 proration incident | Yes |
| 3 Opinionated defaults | Yes, configurability is a real strategy | Yes | Yes, dunning settings | Yes |
| 4 The front desk is the real user | Yes, buyer-led design is defensible in a sales-led market | Yes | Yes, member-profile redesign | Yes |
| 5 One product across four markets | Yes, market-specific products win locally | Yes | Yes, the Norwegian receipt branch | Yes |
| 6 Signals decide | Yes, founder-taste product development is a real model | Yes | Yes, workout tracking | Yes |
| 7 Numbers set in advance | Yes, judgment-led evaluation works at low volume | Yes | Yes, the member app | Yes |

**Conflicts.** Principles 1 and 4 collide when a chain asks for something that
helps their head office and burdens the front desk: 4 wins, and 1 decides the
shape of what we build instead. Principles 3 and 1 look similar and are not the
same rule: 1 is about who a behaviour is for, 3 is about whether a behaviour
should be chosen for the customer at all. When 6 and 2 collide, which happens
when one customer reports a money defect that nobody else has seen, 2 wins: a
single credible report of a wrong charge is investigated immediately.

**Coverage.** 1 and 3 end the two configuration arguments. 2 and 7 end the
speed-versus-safety argument in the two places it recurs. 4 ends the persona
argument. 5 ends the market argument. 6 ends the roadmap-by-anecdote argument,
which is the most frequent of the seven.

## How to use them

Cite the principle by name when making the call. "Per configuration over
customisation, this becomes a setting or we decline it" is a shorter meeting than
the alternative. When a decision contradicts a principle, one of the two changes
in writing. A principle that is overridden repeatedly is a principle written for
the side we do not actually choose, and it gets rewritten.
