---
id: BC-XXXX
title: One line, what is wrong or missing, in the user's terms
type: bug            # bug or feature. Type says what it is, tier says how much ceremony
tier: S
product_area: payments
door: two-way
gate_decision: null
outcome_metric: null
experience_precedence: none
status: draft
owner: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
signal_refs:
  - signals/support/tickets/SUP-XXXXX.md
---

<!--
S-tier, the change note. A defect, a copy change, a config default, a small
capability nobody would argue about: anything describable in one sentence.
Type and tier are independent: a bug is usually S, and a small feature can be
S too. It carries Intent and Problem and evidence, and nothing else. Adding
sections to an S-tier ticket is how ceremony creeps.

If you cannot write the intent in one sentence, or the fix needs a product
decision anyone would argue about, this is not an S. Re-tier it before writing.
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

### Current behaviour

What happens today, observed and dated.

### Expected behaviour

What should happen instead, as a customer would describe it.

### Regression clause

Mandatory, and the whole point of the tier. One line, in the form:

> When [X], the system shall continue to [Y].

Name the behaviour you would be most upset to see broken by this fix. Not "do
not break anything": the specific thing next to the defect that still has to
work.

### Reference

Optional. When the PM has explored alternatives and one design won: a link or
the attached screenshots, and the precedence, `binding` or `illustrative`.
Delete this section if there is none. If the exploration surfaced a decision
anyone would argue about, this is an M, and the decision belongs in Product
decisions with the rejected variant as the alternative.
