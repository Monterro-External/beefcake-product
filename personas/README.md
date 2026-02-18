# Personas

Ten personas in two groups, and the distinction matters more than it looks.

**Beefcake-side personas** (`bc-*`) describe our own colleagues. They are here so
that a ticket, a handover or a piece of research names who does the work and
what they need in order to do it. They are not research subjects and we do not
claim evidence for them beyond how the company actually runs.

**Customer-side personas** (`tenant-*`, `member-*`) describe the people who use
the product. Each one is built from the interviews in
`../discovery/interviews/` and cites them. A claim in a customer-side persona
without an interview reference behind it is a defect in the persona.

| File | Who | Layer |
|---|---|---|
| `bc-product-manager.md` | Product manager | Beefcake |
| `bc-product-designer.md` | Product designer | Beefcake |
| `bc-engineer.md` | Engineer | Beefcake |
| `bc-sales.md` | Account executive | Beefcake |
| `bc-customer-success-manager.md` | CSM | Beefcake |
| `bc-support-agent.md` | Support agent | Beefcake |
| `tenant-owner.md` | Owner, multi-site operator | Tenant |
| `tenant-site-manager.md` | Site manager | Tenant |
| `tenant-front-desk.md` | Front desk | Tenant |
| `member.md` | Member | Member |

## Rules of use

- **Name the persona in the ticket.** "Who has this problem" is a persona plus a
  segment, never "users".
- **The front desk outranks the owner in design decisions.** See product
  principle 4. The owner buys; the front desk uses the product forty hours a
  week.
- **A member is not our customer.** We serve members through the operator. Any
  ticket that proposes speaking to a member directly about anything other than
  their booking, their payment or their access is proposing a change of
  business model, and that goes to the CPO.
- Personas are refreshed when a research round contradicts one, not on a
  calendar. Each file records when it last changed and why.
