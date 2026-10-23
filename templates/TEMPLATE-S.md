---
id: BCPRO-XXXX
title: One line, what is wrong or missing, in the user's terms
type: bug            # bug or feature. Type says what it is, tier says how much ceremony
tier: S
product_area: payments
door: null
gate_decision: null
status: backlog
owner: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
signal_refs:
  - signals/support/tickets/SUP-XXXXX.md
---

<!--
S-tier, the change note, at standard v1.12. A defect, a copy change, a config
default, a small capability nobody would argue about: anything describable in
one sentence. Type and tier are independent: a bug is usually S, and a small
feature can be S too. It carries Intent, Problem and evidence, Behaviour and
Acceptance scenarios, and nothing else. Adding sections to an S-tier ticket is how ceremony creeps.

If you cannot write the intent in one sentence, or the fix needs a product
decision anyone would argue about, this is not an S. Re-tier it before writing.

`created` and `updated` exist because this store is files. In Linear the
tracker keeps both and neither is a ticket field. `door` and `gate_decision`
are stamped by the prioritisation gate, at any tier (standard v1.9); most
S-tier tickets never see it and leave them null.
-->

## Intent

One sentence. What is wrong or missing, for whom, stated as behaviour.

## Problem and evidence

The pain in the customer's words, who has it (segment and persona), and the
links. No source, no claim. The original signal text is preserved verbatim
below and is never edited into agreement.

> Verbatim from the signal, with its id and date. For a PM's own observation:
> the PM's words, name and date, and the screenshot attached.

### Reproduction

Numbered steps somebody else can follow to see the problem, including which
tenant, which member and which conditions matter. For a missing capability, the
steps that end where the user gets stuck. If it only happens at one tenant's volume, in one
country, or on one day of the month, say so here.

1.
2.
3.

## Behaviour

### Current behaviour

What happens today, observed and dated.

### Expected behaviour

What should happen instead, as a customer would describe it.

### Reference

Optional. When the PM has explored alternatives and one design won: a link or
the attached screenshots, and the precedence, `binding` or `illustrative`.
Delete this section if there is none. Precedence is stated here, in the prose:
the `experience_precedence` field was retired in v1.7. `binding` is earned: name what was validated, with whom and when, or call it `illustrative`, which is the honest default and fails nothing (standard v1.10). If the exploration
surfaced a decision anyone would argue about, this is an M, and the decision
belongs in Decisions made with the rejected variant as the alternative.

## Acceptance scenarios

Mandatory, and the whole point of the tier. Plain Given / When / Then,
declarative, no UI choreography. Three, always:

- **AS-1 (happy path):** Given ..., when ..., then ...
- **AS-2 (error case):** Given ..., when ..., then ...
- **AS-3 (regression):** Given ..., when ..., then ... continues to ...

AS-3 names the behaviour you would be most upset to see broken by this fix. Not
"do not break anything": the specific thing next to the defect that still has
to work. Engineering writes the Spec's `SHALL CONTINUE TO` line from it, and
all three feed automated acceptance testing.

## Proposed terms

Optional. Only for a domain term engineering's glossary lacks; delete the section
if there is none. One bullet per term: what it means in this ticket in one
sentence and, where a glossary term is close, why it is not that one. Never
redefine a term the glossary has; that is an open question (standard v1.14).

-
