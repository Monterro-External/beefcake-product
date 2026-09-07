# Tickets

Product Tickets follow `product-ticket-standard.md` and live in Linear, team
`Beefcake-product`. This folder holds the three tier templates the skills copy
from. When a repo runs with a file ticket home instead, the tickets sit here as
markdown with frontmatter mirroring the tracker fields exactly.

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

States of the `beefcake-product` Linear team, standard v1.3 section 5:

```
triage → backlog → todo → discovery → ready-for-handover → in-development → done
canceled: parked
```

Bounces are labels on a `discovery` ticket. `needs-more-info` is the grill's
bounce and always carries the specific failing checks in a `## Grill findings`
section, never a bare label. `back-to-discovery` is handover-triage's bounce and
always carries a `reason_code`: `insufficient-evidence`,
`solution-space-too-open`, `fails-context-consistency` or `too-big-slice-it`,
and the triage note that produced it. A ticket at `in-development` carries
`handover_route: grilling` or `wayfinder`, the route triage chose, and a link to
the engineering ticket.

Only `/product-grill-with-docs` moves a ticket from `discovery` to
`ready-for-handover`. Only handover-triage moves it on from there.

Completeness is enforced at grilling, not at intake. A ticket at `triage`,
`backlog`, `todo` or early `discovery` carries its fields, an intent, the
preserved signal and the next steps, and that is correct. The validator knows
this and only demands the full set of sections once a ticket has been grilled
(a bounce label) or has passed the gate.

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

Two warnings on BC-0023 are left in deliberately. That ticket was bounced by the
grill for, among other things, the words *robust* and *fast*, and the validator
flags the same two words in the same lines. Fixing them without fixing the
ticket would hide the example.
