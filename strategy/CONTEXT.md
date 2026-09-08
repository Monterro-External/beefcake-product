# CONTEXT.md

The reference every product ticket is checked against. If a ticket contradicts
this file, one of the two is wrong and we say which before the work starts.

Owner: Malin Ohlsson (CPO). Reviewed at the start of each quarter, last on
2026-07-02. The long versions of everything summarised here live next to this
file, and they are the source when the two disagree.

---

## What we sell, to whom

Beefcake AB (Stockholm, founded 2016, ~60 people, ~90 MSEK ARR, growing ~18% a
year) sells gym management software to about 340 gym operators in Sweden,
Norway, Finland and Denmark. Operators pay per site per month, plus a percentage
of every member payment we process through Beefcake Pay.

Three layers, and they are never the same party:

```
Beefcake (us)  →  tenant (a gym operator, our customer)  →  member (their customer)
```

The member feels the defect, the front desk absorbs the anger, the owner calls
us, and the tenant churns. Payment volume is a revenue line for us, so a payment
that fails is our problem twice over.

| Segment | Tenants | Shape | Share of ARR |
|---|---|---|---|
| Long tail | ~250 | Single site, a few hundred members | ~30% |
| Mid | ~80 | 2 to 5 sites, 1,000 to 3,500 members | ~35% |
| Key accounts | 10 | 6 to 15 sites, up to 22,000 members | ~35% |

Competition: **Gymly** (Nordic, cheaper, weaker payments, wins on price in the
long tail), **Boxmaster** (global, strong at chains, expensive, wins on
enterprise features), and spreadsheets at the smallest end.

## Vision

Every Nordic gym runs on Beefcake, and members never think about the software.

## Strategy 2026, three pillars

1. **Payments reliability is the moat and the revenue line.** Beefcake Pay is
   the reason an operator cannot casually switch and the reason our ARR grows
   without new logos. A failed charge is lost revenue for the operator, lost
   take rate for us, and the leading cause of a member cancelling.
2. **Win chains without becoming a custom shop.** Key accounts are 35% of ARR
   and the only segment where we lose to Boxmaster on capability. A chain's need
   becomes a tenant setting every tenant can use, or it does not ship.
3. **Norway and Denmark depth before wider expansion.** Norway is a real market
   with a missing payment method. Denmark is one customer and a hypothesis. Both
   are finished before anyone says the word Germany.

Full version: `strategy-2026.md`. Pillar owners: 1 Johan Wirén, 2 Malin Ohlsson,
3 Ingrid Halvorsen.

## OKRs, H2 2026

Headlines only, the full set with baselines is in `okrs-2026-h2.md`.

- **O1 Payments people trust.** Failed-charge rate from 4.3% to under 3.0%.
  Involuntary churn within 21 days of an abandoned dunning halved. Zero
  billing-correctness incidents reaching a member's receipt.
- **O2 The chains renew.** Nordic Fitness Group renewed by 2027-01-31. Key
  accounts at 100% logo retention. Every key-account report runs under 30
  seconds at their volume.
- **O3 We answer signals faster than they compound.** Median time from first
  support ticket to shipped fix from 34 days to under 14. Every S-tier ticket
  carries a regression clause. Signal backlog older than 30 days at zero.

## Product principles

Named rules, cited by name in decisions. Full set with costs and precedents in
`principles.md`.

1. **Configuration over customisation.** A chain's need becomes a tenant setting
   or it does not ship.
2. **The member's money is sacred.** Correctness before throughput in anything
   that charges, refunds or issues a receipt.
3. **Opinionated defaults over another toggle.** A wrong default is a fleet-wide
   incident, so we choose the default and defend it.
4. **The front desk is the real user.** Optimise for the person with a queue
   behind them before the owner reading a report.
5. **One product across four markets.** Locale and currency are data, never a
   branch of the product.
6. **Signals decide, individual voices do not.** Two independent sources or it
   stays a hypothesis.
7. **Numbers set in advance.** Every initiative carries its target and its kill
   criteria before it starts.

## Ideal customer profile

Multi-site operators with 800 to 6,000 members who take recurring payments
through us, run a class schedule, and have someone whose job includes reading a
report. Sweden and Norway first, Finland served, Denmark being tested.

Not ICP: studios under 150 members (Gymly's ground, and support cost exceeds
ARR), franchise groups wanting per-franchisee billing entities, operators
outside the Nordics, and anyone whose core need is personal training delivery
rather than membership operations. Full version: `icp.md`.

## Non-goals, stated so they stop coming back

- **No consumer fitness features.** No workout tracking, no nutrition, no
  training programmes, no wearables. We sell to operators. This is asked for
  roughly monthly and the answer does not change.
- **No on-premise or single-tenant deployment.** One platform, 340 tenants.
- **No custom development for a single account**, including a key account. The
  need becomes a setting or it is declined in writing.
- **No native member app beyond the current scope.** The member surface stays
  minimal: book, pay, freeze, receipts, access.
- **No new market outside the Nordics before Denmark is proven.**

## Product areas (the `product_area` taxonomy)

Every ticket carries exactly one. If a ticket needs two, it is two tickets.

| Value | Covers |
|---|---|
| `members` | Member records, search, profile, front-desk member workflows |
| `subscriptions` | Plans, sign-up, plan change and proration, freeze, cancellation, binding and notice |
| `payments` | Payment runs, charges, dunning, mandates, receipts, Beefcake Pay settlement |
| `classes` | Schedule, capacity, booking, waitlist, no-shows, instructors |
| `access` | Check-in, access rules, door hardware sync, allow-lists |
| `reports` | Reporting, exports, health and revenue figures |
| `settings-admin` | Sites, staff and roles, tenant settings, feature flags |
| `member-app` | The member-facing surface |
| `platform-foundations` | Multi-tenancy, localisation, currency, notifications, anything fleet-wide |
| `internal-admin` | The Beefcake-side admin surface our own staff use: tenant list, health, errors, impersonation, feature-flag console |

## Vocabulary

We use the platform's words, because support, engineering and the customer all
use them. The list below is the short version; engineering keeps the long one in
`docs/domain-glossary.md` in the platform repo, and it wins on any detail.

**Operator or tenant.** They are the same party and the word depends on where
you are writing. *Operator* is commercial register: who we sell to, what the
market looks like, what a customer is worth. *Tenant* is the product's word, and
anything a ticket, a spec or the code says about the party uses it. The glossary
is unambiguous: in code and in tickets they are the tenant. This file uses
*operator* when it talks about the business and *tenant* when it talks about the
product, and a ticket that copies the commercial register will fail the
vocabulary check.

**tenant** (a gym operator, our customer) · **site** (one physical gym) ·
**member** (the tenant's customer) · **plan** · **subscription** ·
**binding period** · **notice period** · **freeze** (Swedish *uppehåll*,
Norwegian *frys*) · **payment run** (monthly, goes out on the 25th, bills the
calendar month in arrears) · **charge** · **dunning** (3 attempts, 3 days apart
by default) · **abandoned** (dunning gave up, the event that becomes a
cancellation two to three weeks later) · **mandate** · **waitlist** ·
**access event** · **grace hours** (after a freeze, never after a cancellation) ·
**health score**.

Say *freeze*, never "pause the account". Say *abandoned*, never "given up on".
A **cancellation** is voluntary; a member lost after dunning abandoned is
**involuntary churn**, and the distinction is the whole point of pillar 1.

## What we already ship

So a ticket does not propose what exists. Members, subscriptions with proration,
freeze and cancellation, classes with waitlist and automatic promotion, monthly
payment runs with dunning and receipts, access control against two hardware
vendors, reports with CSV export, tenant settings and feature flags, a minimal
member app, and a Beefcake-side admin surface with health scores and read-only
impersonation.

Payment methods live today: Autogiro (SE), AvtaleGiro (NO), card (FI, DK).
**Vipps and MobilePay are not built.** Corporate and family memberships do not
exist: a membership belongs to exactly one member and is paid by that member.

## Where this file is silent

Silence is a gap in this document. It is never permission. If a ticket asserts something
CONTEXT.md does not cover, the grill flags it here and the flag comes to the CPO
as a documentation item.
