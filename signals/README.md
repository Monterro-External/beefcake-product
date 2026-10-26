# Signals

Everything customers tell us, in the form it arrived in. This is the input to
triage: read it, find the pattern, and only then write a ticket.

Period: **2026-03-30 to 2026-09-30**.

## Sources

| Source | Path | Volume | What it is |
|---|---|---|---|
| Support tickets | `support/tickets.jsonl`, `support/tickets/` | 454 | Every conversation the support team had. JSONL for grepping, one markdown file per ticket for reading |
| NPS | `nps/responses.csv`, `nps/verbatims.md` | 137 responses | Two relationship survey waves, sent to owners and site managers |
| CSM notes | `csm/` | 73 notes | Written straight after the call, in the CS team's shorthand |
| Sales calls | `sales/transcripts/` | 15 | Prospect demos and renewal calls, auto-transcribed and lightly cleaned |
| Lost deals | `sales/lost-deals/` | 6 | Debriefs written within a week of losing |
| Escalations | `escalations/` | 2 | Key-account email threads that went past the CSM |
| App reviews | `reviews/app-store-reviews.csv` | 82 | Member app reviews. The gym is named; the complaint is usually about us |
| Member feedback | `member-feedback/` | 49 items | What members said at the desk, written down and forwarded |
| Slack | `slack/feature-requests.md` | 74 messages | Sales and CS posting on behalf of customers |
| Platform exports | `platform/` | 6 files | Written by the platform, see below |

## Reading this well

- **Volume is a signal. Tags are not.** The support tag list has grown by
  accretion, several tags mean the same thing, and the person filing picks
  whichever is first in the list. Counting by tag will mislead you.
- **Silence is a signal too.** Key accounts have workarounds instead of tickets,
  which means anything measured by ticket volume under-weights 35% of ARR.
  Members almost never contact us at all: they tell the front desk, review the
  app, or stop paying.
- **Two independent sources or it stays a hypothesis.** Product principle 6. One
  loud account is an anecdote however often it repeats itself.
- **Signals stay in the language they arrived in.** Translate when you quote,
  and keep the original.

## Platform exports

Written by the engineering side, not by anyone here:

```bash
cd ../../beefcake-platform
npm run export:signals -- --out ../beefcake-product/signals/platform/
```

| File | Contains |
|---|---|
| `events.jsonl` | Product usage per tenant: adoption, booking and sign-up funnels. Large, and not tracked in git |
| `errors.jsonl` | Errors rolled up by tenant and module |
| `payment-runs.csv` | Per tenant per month: attempted, failed, failure codes |
| `churn.csv` | Cancellations per tenant per week, with days since the last failed payment |
| `tenant-health.csv` | The inputs behind each tenant's health score |
| `access-sync.csv` | Sync lag per site |

The column names are a contract. If one changes, something here breaks quietly.

## The CS shorthand

CSM notes are written for the writer, not for us. The abbreviations that recur:

| Short | Means |
|---|---|
| `hs` | Health score, and its band: green, amber, red |
| `px` | Payments, anything from mandate to receipt |
| `RN` | Renewal |
| `TT` | Support ticket |
| `esc` | Escalation |
| `wl` | Waitlist |
| `rpt` | Report |
| `f/u` | Follow up |
| `AP` | Action point, always the last line of a note |
| `QBR` | Quarterly business review |
| `att` / `d` | Attempts, days, as in "4 att / 7 d" for a dunning setup |
| `seg` | Segment |
| `NFG`, `KT` | Nordic Fitness Group, Kraft Trening |
| Initials | The person at the account: PL, MR, EN, BK, RS, JM, MS, KA, LF, MK, JH, PW |

## What is missing, and known to be

- No Danish coverage worth the name. One former member and one operator.
- Nothing from operators who have already left us. Sales runs exit calls and
  does not write them up in a form anyone can read.
- No instructors, who are the group most affected by class and waitlist
  behaviour and the group nobody has ever interviewed.
