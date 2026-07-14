# Tickets

Product Tickets, one file each, following `product-ticket-standard.md`. The
tracker is the artifact in principle. Until we sync to Linear, the file is the
ticket and its frontmatter mirrors the tracker fields exactly.

## Conventions

- **Id**: `BC-0001`, allocated in sequence, never reused. The filename is
  `BC-0001-short-slug.md`.
- **One product area per ticket.** Two areas means two tickets.
- **Templates**: `TEMPLATE-S.md`, `TEMPLATE-M.md`, `TEMPLATE-L.md`. Copy the one
  that matches the tier and delete the guidance comment.
- **Tier before writing.** S is a change note, M is a standard ticket, L is a
  one-way door or a multi-capability change. A ticket that outgrew its tier is
  split or upgraded, never padded.
- **Evidence is linked, never pasted.** Discovery outputs live in `discovery/`
  and signals in `signals/`. The one exception is the original signal text,
  preserved verbatim, because it is the only part nobody edited into agreement.
- **No implementation detail.** Modules, schemas, endpoints, file names and
  step-by-step plans belong in engineering's Spec. Anything that trips the
  prohibition list moves to Ideas parked rather than being deleted.

## Statuses

```
draft → in-discovery → grilling → (needs-more-info ⇄ grilling) → ready-for-handover
        → [handover-triage] → ready-for-grilling | ready-for-wayfinder | back-to-discovery
```

`needs-more-info` always carries the specific failing checks from the grill, not
a bare status change. `back-to-discovery` always carries a reason code:
`insufficient-evidence`, `solution-space-too-open`, `fails-context-consistency`
or `too-big-slice-it`.

## Checking a ticket

```bash
npm run validate                 # every ticket
npm run validate -- BC-0007      # one ticket
npm run validate -- --strict     # warnings count as failures
```

The validator checks the frontmatter against the standard, the required sections
for the tier, the S-tier regression clause, the three-open-question limit,
unresolved placeholders, and the vague adjectives the readiness gate rejects. It
does not judge whether the content is any good. That is what grilling is for.
