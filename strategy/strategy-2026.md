# Strategy 2026

Owner: Malin Ohlsson (CPO). Agreed with the board 2026-01-28. Reviewed at the
start of each quarter, last on 2026-07-02.

The vision says where we are going. This says what we are doing about it in
2026, and what we are deliberately leaving undone.

## The situation, stated plainly

~90 MSEK ARR, ~18% growth, 340 operators, ~35% of ARR in ten chains. Three facts
shape everything below.

**One.** Payment volume through Beefcake Pay is now a material share of revenue
and grows faster than seat revenue. It is also the part of the product where a
defect costs a customer money directly.

**Two.** We win the long tail on being adequate and cheap enough, and Gymly is
cheaper. We keep the long tail because switching a gym's membership base is
painful, which is a moat made of other people's inconvenience and not one to be
proud of.

**Three.** We lose chains to Boxmaster on capability, and the capability gap is
narrow and specific: corporate memberships, reporting that survives volume, and
the confidence that comes from a vendor who has done it before. Nordic Fitness
Group, our largest account at ~22,000 members, renews on 2027-01-31 and has been
in conversation with Boxmaster since spring.

## Pillar 1: payments reliability is the moat and the revenue line

Owner: Johan Wirén (PM, Growth and payments).

Our failed-charge rate across the fleet is 4.3%, and higher at the two key
accounts (6.6% and 5.2%). Every failed charge starts a dunning sequence that the
member experiences as a series of messages, and cancellations spike two to three
weeks after dunning abandons. That path is the single largest source of churn we
have, and it is churn we cause rather than churn we lose to a competitor.

**What we do.** Treat the whole path from charge to abandoned as one product
surface owned by one team: failure codes the operator can act on, dunning the
operator can configure and understand, mandates that get repaired before they
fail, and a member experience during dunning that does not read like a debt
collector. Payment methods that reduce failure in a market (AvtaleGiro coverage,
then Vipps) are part of this pillar and not a separate one.

**What we do not do.** Chase payment methods for their own sake, build our own
PSP relationships per market, or add retry cleverness that the operator cannot
explain to a member.

**The trade.** This pillar consumes the capacity that the long tail would
otherwise get in the form of small conveniences. We accept a flatter stream of
small improvements for the segment that shouts loudest.

## Pillar 2: win chains without becoming a custom shop

Owner: Malin Ohlsson (CPO), because it is the pillar where the pressure to bend
comes from outside product.

Chains are 35% of ARR and the segment we lose. They ask for three things
repeatedly: corporate memberships (an employer pays for a set of members),
reporting that works at 22,000 members, and administrative control across sites.
Two of those are ordinary product work. Corporate memberships is a genuine gap
in the data model and the largest single piece of work in the year.

**What we do.** Build the chain capability as configuration available to every
tenant. A corporate membership is a plan shape, a payer relationship and a
reporting cut. Any operator with two members and an employer can use it.

**What we do not do.** Per-account builds, per-account contracts on product
behaviour, or a chain edition. Where an account demands something that cannot
generalise, the answer is no in writing, from the CPO, with the reasoning.

**The trade.** We will occasionally be slower than a competitor who says yes to
everything, and we may lose a deal for it. The alternative is a codebase where
every chain is a special case and no release is safe.

## Pillar 3: Norway and Denmark depth before wider expansion

Owner: Ingrid Halvorsen (PM, Operations and access).

Norway is 27% of ARR and our second market, and Vipps is missing. Denmark is one
operator, Fitness Nørrebro, plus a small pipeline, and we support neither
MobilePay nor Danish VAT reporting properly. Both markets are shallow in the
same way: we localised the interface and stopped there.

**What we do.** Finish Norway first, because the revenue is already there and
the gap is one payment method plus the operational details around it. Then run
Denmark as an explicit test with a kill criterion: either the Danish pipeline
converts at a rate that justifies the payment and tax work, or we stop selling
into Denmark and say so.

**What we do not do.** Enter a fifth market in 2026. Localise into a language
before the payment path in that market works.

**The trade.** Deferring a market for a year is a real cost and we are choosing
to pay it rather than run four half-markets.

## Explicit non-goals for 2026

- **No consumer fitness features.** No workout tracking, nutrition, programmes
  or wearables, in any pillar, at any tier, for any account.
- **No on-premise deployment**, including for a public-sector prospect.
- **No fifth market.**
- **No custom development for a single account.**

## What would change this strategy

- Nordic Fitness Group leaving. Losing 10% of ARR in one renewal turns pillar 2
  from a growth argument into a retention emergency and pulls capacity from
  pillar 3.
- A regulatory change to Nordic direct-debit schemes that makes pillar 1 an
  obligation rather than a choice.
- Gymly shipping corporate memberships first. Then the question is whether we
  are defending the mid or attacking the chains, and we cannot do both.
