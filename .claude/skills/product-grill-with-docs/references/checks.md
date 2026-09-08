# Readiness checks

Section 7 of `product-ticket-standard.md`, restated as pass/fail rules. Numbers are stable; skills and evals refer to them. Applies-to column: S means the check runs for S-tier tickets; all others run for M and L only.

| # | Check | Passes when | Applies |
|---|---|---|---|
| 1 | Intent | One sentence, describing one change. Two verbs joined by "and" is usually two changes | S M L |
| 2 | Evidence | Every claim in Problem and evidence has a link or an attachment. The original signal is present verbatim, with source, author and date. "Link needed" or a named-but-unlinked source fails | S M L |
| 3 | Success criteria | Each is measurable, says nothing about technology, and describes something a user could observe | M L |
| 4 | Non-goals | Populated, and at least one names something a reasonable reader would otherwise assume is in scope | M L |
| 5 | No implementation | Nothing from the prohibition list (modules, services, schemas, endpoints, frameworks, file names, implementation steps, estimates, resourcing) outside Ideas parked | S M L |
| 6 | Scenarios | Every acceptance scenario set includes an error case and a regression (upset-if-broken) case | M L |
| 7 | No vague adjectives | In Behaviour, Outcome and success criteria, and Acceptance scenarios: none of fast, scalable, secure, intuitive, robust, seamless, or their kin, without a number beside it. Problem and evidence is exempt; it describes pain in the customer's words, and "slow" there describes the pain rather than specifying the fix | S M L |
| 8 | Placeholders and open questions | No unresolved placeholder or template hint text. Three or fewer open questions, each with an owner and a needed-by date | M L |
| 9 | Experience precedence | Declared as illustrative, binding or none. Missing fails; none passes | M L |
| 10 | Tier | Content matches tier: S has Intent, Problem and evidence, Behaviour with current, expected and a regression clause in the form "when X, the system shall continue to Y", and nothing more. M has all eight sections. L has M plus decision owner and Commitment. A mismatch is fixed by splitting or upgrading, never by padding | S M L |
| 11 | Consistency | No contradiction with CONTEXT.md capabilities, principles or non-goals, and no contradiction with an accepted PDR in the ticket's product area. Silence does not fail; it is noted | S M L |
| 12 | Vocabulary | Every domain term appears in the engineering glossary with the meaning the ticket uses. A term the glossary lacks does not fail; it is noted. Glossary unreachable: skipped, and skipped counts as failing | S M L |

Two notes on judgment:

- Check 5 is about binding language. "The Tenants table" is a product surface, allowed. "The tenants endpoint" is implementation, moved to Ideas parked.
- Check 11 reads CONTEXT.md's "Where this file is silent" section before noting a silence: one CONTEXT.md already admits is not news.
