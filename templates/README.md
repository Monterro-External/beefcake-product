# Ticket templates

Product Tickets follow `product-ticket-standard.md` and live in Linear, team
`Beefcake-product`, or in Jira, project `BCPRO` on monterro-demo. `npm run
tracker` says which one `.claude/monterro.json` points at, and `npm run tracker
-- jira` or `-- linear` switches; edit `.claude/monterro.linear.json` or
`.claude/monterro.jira.json`, never `monterro.json` itself. This folder holds the
three tier templates the skills write tickets from. Tickets themselves are never
files in this repo.

## Conventions

- **Id**: the tracker's own key, `BCPRO-123`. The title carries no prefix.
- **One product area per ticket.** Two areas means two tickets.
- **Templates**: `TEMPLATE-S.md`, `TEMPLATE-M.md`, `TEMPLATE-L.md`. The frontmatter
  maps to tracker fields and labels, the sections become the description, and the
  guidance comments are never copied.
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

Both bounces leave a ticket in `discovery` with the `needs-more-info` label.
The grill's bounce names the failing checks, each with its smallest fix, in a
verdict block in the conversation, addressed to the ticket owner; it never
writes them on the ticket, and the PM edits the ticket from that list.
handover-triage's bounce posts its verdict block as a comment on the ticket,
carrying `source: handover-triage` and one reason code:
`insufficient-evidence`, `solution-space-too-open`,
`fails-context-consistency` or `too-big-slice-it`. The grill removes the label
when the ticket passes again. A ticket at `in-development` carries
`handover_route: grilling` or `wayfinder`, the route triage chose, and
`spec_ref` once engineering has written the Spec.

Only `/monterro-product-process:product-grill-with-docs` moves a ticket from `discovery` to
`ready-for-handover`. Only handover-triage moves it on from there.

Completeness is enforced at grilling, not at intake. A ticket at `triage`,
`backlog`, `todo` or early `discovery` carries its fields, an intent, the
preserved signal and the next steps, and that is correct. The full set of
sections is demanded once a ticket has been grilled or has passed the gate.
