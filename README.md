# Beefcake product

Everything the product team owns: the strategy we work against, the people we
build for, the signals we get from customers, the discovery behind our
decisions, the roadmap, and the tickets we hand to engineering.

Engineering's repo is `beefcake-platform`. This one has no code in it beyond two
small scripts.

## Where to start

You should be able to work here after twenty minutes of reading:

1. **`strategy/CONTEXT.md`** (10 minutes). What we sell, to whom, the three
   strategy pillars, this half's OKRs, the product principles, the non-goals,
   and the product-area taxonomy every ticket uses. Everything else in
   `strategy/` is the long version of a section in it.
2. **`CLAUDE.md`** (5 minutes). How work flows from a signal to a handover,
   what belongs in a ticket and what does not, and the conventions.
3. **`personas/README.md`** (5 minutes). Ten personas in three layers. The
   distinction between the operator who buys and the front desk who uses is the
   one that decides the most arguments.

Then pick whatever you are here for:

| If you are | Read |
|---|---|
| Triaging incoming signals | `signals/README.md`, then `tickets/README.md` |
| Writing or finishing a ticket | `tickets/README.md` and the template for the tier |
| Starting discovery | `discovery/interviews/README.md` and the OST |
| Arguing about priority | `roadmap/now-next-later.md` and `strategy/decisions/` |
| Wondering why we said no to something | `strategy/principles.md` and the non-goals in CONTEXT.md |

## How product works here

One flow, six steps, one artifact that crosses to engineering.

```
Signals → triage → discovery → prioritisation gate → ticket → grilling → handover
```

**Signals** arrive from ten sources and most of them are noise. Triage turns
each one into a typed, tiered ticket embryo or closes it. **Discovery** earns
the evidence a ticket links to. The **prioritisation gate** decides door,
appetite and kill criteria, and it is where something becomes committed work.
**Authoring** completes the ticket to the standard, and **grilling** checks it
against `strategy/CONTEXT.md` before it goes anywhere near engineering. A ticket
that fails grilling comes back with the specific failing checks attached.

The three artifacts, so nobody writes the wrong one:

| Artifact | Owner | Answers |
|---|---|---|
| Product Ticket | Us | What problem, for whom, what outcome, what we decided and why |
| Spec | Engineering | What the system shall observably do, formally |
| Engineering tickets | Engineering | The broken-down work |

Prose is never copied between them. Links and ids are.

## Who does what

| | |
|---|---|
| Malin Ohlsson | CPO. Owns CONTEXT.md, the principles, and the answer when a key account asks for something we do not build |
| Johan Wirén | PM, Growth and payments. Pillar 1 |
| Ingrid Halvorsen | PM, Operations and access. Pillar 3, based in Oslo |
| Aino Lehtinen | PM, Member experience. Based in Helsinki |
| Rebecka Nyström, David Krag | Product designers |
| Henrik Dahl, Marte Bakken | Customer success |
| Camilla Roos, Jonas Solberg | Sales |
| Oskar Lindell | Support lead |
| Elin Sandberg | Engineering |

## Working in this repo

Node 20.11 or newer. There is nothing to run except the checks.

```bash
npm install
npm run validate       # every ticket against the ticket standard
npm run typecheck
```

`npm run validate` is the mechanical half of the readiness gate: fields, the
sections each tier requires, the S-tier acceptance scenarios, the three-question
limit, leftover placeholders and the adjectives we do not accept without a
number. It says nothing about whether the thinking is any good.

## Conventions worth knowing before your first commit

- Product artefacts are in English. Signals stay in the language they arrived
  in, quoted verbatim.
- Evidence is linked, never pasted, except the original signal text.
- Every claim about a customer traces to something in `signals/` or
  `discovery/`. A claim with no source is an opinion and gets marked as one.
- If you change what the company believes, change `strategy/CONTEXT.md` and say
  who decided.
