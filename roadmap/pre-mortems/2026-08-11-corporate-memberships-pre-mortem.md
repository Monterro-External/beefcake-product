---
type: pre-mortem
subject: Corporate memberships
run: 2026-08-11
facilitator: Ingrid Halvorsen
participants: Malin Ohlsson, Johan Wirén, Aino Lehtinen, Rebecka Nyström, Elin Sandberg, Marte Bakken, Camilla Roos
method: /pre-mortem, 90 minutes, silent writing then clustering
---

# Pre-mortem: corporate memberships

**The premise put to the room:** it is 2027-09-01. Corporate memberships shipped
in the spring. It is a failure, and everyone agrees it is a failure. What
happened?

Twenty-three failure stories written silently, clustered into seven. Ranked by
the room's own vote on likelihood multiplied by damage.

## The seven

### 1. We built the Swedish shape and the Finnish market could not use it (11 votes)

An employer buying a block of memberships and an employer paying part of one
membership are different objects. We built the block, because that is what our
largest account described, and the Finnish operators who asked for the other
thing were told to wait. Two more Finnish deals lost.

**Mitigation, agreed:** discovery covers both shapes before scoping. The gate
refuses a scope that does not say explicitly which shapes are included.
*This changed the initiative: the two-shapes section exists because of this
story.*

### 2. It shipped and Nordic Fitness Group still left (9 votes)

We built the top line of their comparison sheet and lost the renewal anyway,
because the real reason was the accumulation of small failures: billing they
could not trust, reports that did not finish, and the sense that reported
problems went nowhere.

**Mitigation, agreed:** the renewal is not treated as a feature gap. The billing
correction and the report work are held to their own dates independently of this
initiative. *This is why reporting went ahead of corporate memberships in the
roadmap, decided a week later.*

### 3. Every employer wanted something slightly different (8 votes)

The first three employers each needed a different invoicing arrangement, and we
said yes three times. By autumn there were four code paths and the fourth
employer needed a fifth.

**Mitigation, agreed:** principle 1 applies with no exceptions here. The first
slice supports one arrangement, and a second arrangement is a new decision with
its own evidence, not a patch.

### 4. The membership stopped being one thing (7 votes)

A membership with two payers broke assumptions in reporting, in dunning and in
freezes, in ways nobody predicted. Revenue reports stopped summing. Dunning
chased the member for the employer's share.

**Mitigation, agreed:** this is engineering's to design and product's to state.
The acceptance scenarios name the interactions explicitly: what dunning does when
the employer's payment fails, what a freeze does to the employer's share, what
the reports show.

### 5. We built an employer portal nobody asked for (6 votes)

Scope grew from an invoice to a login, then to a dashboard showing employers how
much their staff train.

**Mitigation, agreed:** an employer-facing surface is an explicit non-goal of the
first slice. Both customers who described the need said they do not need one.

### 6. Nobody could use it without us (4 votes)

It shipped, and setting up an employer needed a CSM on a call. Six operators
adopted it in six months.

**Mitigation, agreed:** kill criterion. If an operator cannot set up an employer
alone, it does not ship.

### 7. We took our percentage on the employer's share and nobody had decided that (3 votes)

A commercial question was answered by whoever wrote the invoicing code, and a key
account noticed in their first invoice.

**Mitigation, agreed:** the pricing decision is made before build starts and is
recorded as a product decision on the ticket, by the CPO.

## What did not make the list

Nobody wrote a story where corporate memberships failed because it was not worth
building. The room's confidence in the demand is high, which is itself worth
noticing: this is a pre-mortem that assumed its own premise.

## Carried into the L-tier ticket

Stories 1, 3, 4, 5 and 7 become explicit non-goals, product decisions or
acceptance scenarios. Stories 2 and 6 become kill criteria. Nothing on this page
is allowed to stay as a shared understanding.
