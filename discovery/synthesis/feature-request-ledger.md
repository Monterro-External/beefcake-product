---
type: ledger
source: "#feature-requests"
covers: 2026-05-22 to 2026-10-30
messages_read: 70
last_sweep: 2026-11-18
method: /monterro-product-process:feature-request-ledger over signals/slack/feature-requests.md
---

# Feature request ledger, #feature-requests

One row per distinct ask. Counts are cumulative across sweeps. Reactions are never counted. Claimed repeats are what a poster said, not corroboration. The board (Linear, BCPRO) returned no issues on 2026-11-18, so no row is `ticketed` yet.

## Open asks

| Ask | Area | Named accounts | Unnamed | Messages | Posters | Claimed repeats | First seen | Last seen | Corroboration | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| See report and revenue figures per site, not only aggregated | reports | 1: Voima Kuntosalit | 2 | 2 | 1 | | 2026-06-20 | 2026-08-23 | none: 1 named account, 1 poster | watching |
| A member ends their membership from the app | member-app | 0 | 1 | 1 | 1 | | 2026-10-14 | 2026-10-14 | none | watching |
| Danish members get receipts and invoices with Danish VAT and Danish layout | payments | 0 | 2 | 2 | 1 | | 2026-08-14 | 2026-10-03 | none | watching |
| Charge a joining fee separately from the first month | subscriptions | 0 | 1 | 1 | 1 | | 2026-09-10 | 2026-09-10 | none | watching |
| Members get a text message reminder before a booked class | classes | 0 | 1 | 1 | 1 | | 2026-08-28 | 2026-08-28 | none | watching |
| Get financial data into the operator's accounting system without manual export | reports | 0 | 1 | 1 | 1 | | 2026-08-19 | 2026-08-19 | none | watching |
| See who changed a membership and when | members | 0 | 1 | 1 | 1 | | 2026-08-07 | 2026-08-07 | none | watching |
| Members log in with Swedish BankID | member-app | 0 | 1 | 1 | 1 | | 2026-08-03 | 2026-08-03 | none | watching |
| Send an email to all members from inside the product | platform-foundations | 0 | 1 | 1 | 1 | | 2026-07-30 | 2026-07-30 | none | watching |
| Print a membership card carrying the operator's logo | members | 0 | 2 | 1 | 1 | | 2026-07-22 | 2026-07-22 | none | watching |
| Use the front-desk screen in a dark theme | platform-foundations | 0 | 1 | 1 | 1 | 2 | 2026-07-04 | 2026-07-04 | none | watching |
| See which staff member sold which membership | reports | 0 | 1 | 1 | 1 | | 2026-06-29 | 2026-06-29 | none | watching |
| Set how far ahead members can book per class, not per site | classes | 0 | 1 | 1 | 1 | | 2026-06-26 | 2026-06-26 | none | watching |
| Receive reports by email on a schedule | reports | 0 | 1 | 1 | 1 | | 2026-05-23 | 2026-05-23 | none | watching |
| Find a member by phone number | members | 0 | 1 | 1 | 1 | | 2026-05-22 | 2026-05-22 | none | watching |
| Members join a waiting list for personal training slots | classes | 0 | 1 | 1 | 1 | | 2026-05-22 | 2026-05-22 | none | watching |

### See report and revenue figures per site

Owners and site managers rebuild per-site figures by hand. PDR-0010 funds the report engine replacement but does not decide per-site views. Needs a second poster or account to corroborate.

> Two mid-market owners this week asked for a per-site revenue view. Both export to Excel and build it themselves.

signals/slack/feature-requests.md · 2026-06-20 · Henrik Dahl

> Site managers keep asking for per-site views of reports that only aggregate. Voima have five people maintaining their own spreadsheets.

signals/slack/feature-requests.md · 2026-08-23 · Henrik Dahl

### A member ends their membership from the app

Leaving within what the operator allows already ships (CONTEXT.md, PDR-0003). This tenant routes it to the desk. Likely a setting question rather than a gap; check before treating it as an ask.

> Member asked to be able to cancel in the app. Passed to the desk instead, as designed.

signals/slack/feature-requests.md · 2026-10-14 · Aino Lehtinen

### Danish receipts and invoices

Raised alongside MobilePay both times, and named in a lost deal. PDR-0006 sequences MobilePay, not receipt localisation, so this stays open. Poster says it comes up in every Danish conversation; that is a claim.

> CopenFit-style prospect in Aarhus asked about MobilePay and Danish VAT on receipts. Same two questions every Danish conversation.

signals/slack/feature-requests.md · 2026-08-14 · Maria Ekholm

> Danish prospect went with a local system. Debrief in the folder. Short version: MobilePay and a Danish invoice layout.

signals/slack/feature-requests.md · 2026-10-03 · Maria Ekholm

### Joining fee separate from the first month

> Operator wants to charge a joining fee separately from the first month.

signals/slack/feature-requests.md · 2026-09-10 · Jonas Solberg

### Text reminder before a class

> Request for an SMS reminder before a class. Their old system had it.

signals/slack/feature-requests.md · 2026-08-28 · Jonas Solberg

### Accounting system integration

Prospect, told CSV export is the answer today.

> Prospect asked whether we integrate with their accounting system. Told them CSV.

signals/slack/feature-requests.md · 2026-08-19 · Maria Ekholm

### Change history on memberships

> Owner asked for a "who changed this" log on memberships.

signals/slack/feature-requests.md · 2026-08-07 · Henrik Dahl

### BankID login for members

Prospect. Any member-app change needs a CPO decision (PDR-0003).

> Prospect asked for a Swedish BankID login for members. Logged.

signals/slack/feature-requests.md · 2026-08-03 · Erik Lundgren

### Email all members from the product

The poster says this was refused before; no non-goal or PDR records that refusal, so it stays open until written down.

> Request for a bulk email to members from inside the product. We have said no to this before.

signals/slack/feature-requests.md · 2026-07-30 · Marte Bakken

### Printable membership card with logo

> Two operators asked for a printable membership card with their logo.

signals/slack/feature-requests.md · 2026-07-22 · Oskar Lindell

### Dark theme on the front-desk screen

> Request for a dark mode on the desk screen. Second one.

signals/slack/feature-requests.md · 2026-07-04 · Tove Ahlin

### Sales attribution per staff member

> Owner wants to see which staff member sold which membership. Commission thing.

signals/slack/feature-requests.md · 2026-06-29 · Henrik Dahl

### Booking window per class

> Request: booking window setting per class rather than per site.

signals/slack/feature-requests.md · 2026-06-26 · Tove Ahlin

### Scheduled report emails

> Someone asked whether reports can be emailed on a schedule.

signals/slack/feature-requests.md · 2026-05-23 · Oskar Lindell

### Member search by phone number

> Customer would like the member search to work on phone numbers.

signals/slack/feature-requests.md · 2026-05-22 · Erik Lundgren

### Waiting list for personal training slots

ICP excludes operators whose core need is personal training delivery. That is not a non-goal, so it stays watching.

> Ask for a waiting list for personal training slots, not just classes.

signals/slack/feature-requests.md · 2026-05-22 · Maria Ekholm

## Observations

- 2026-07-03 · Oskar Lindell · "Support volume note: freeze end date complaints spiked at the start of March and have not gone away. Mostly long tail." For signal-triage: matches the synthesis theme "Month-end freeze ends early and charges" (2026-11-18-support-tickets-2026-05-17-to-2026-10-31.md). For support-dig: tags are unreliable, "Half are tagged billing" (Oskar Lindell, same thread); search ticket text, not tags.
- 2026-07-08 · Jonas Solberg · "Norwegian prospect asked, quote, "does it handle NOK properly, we heard there were issues". Where would they have heard that?" For signal-triage: the NOK receipt defect is already known to prospects; reputational reach of the receipt currency bug.
- 2026-07-30 · Henrik Dahl · "Kallio (small FI account) files the most precise bug reports we get and thinks we ignore them. We mostly do." Oskar Lindell: "Eight of her last ten were closed with a template reply." For support-dig: reopen Kuntoklubi Kallio's template-closed tickets as defect input.
- 2026-08-05 · Marte Bakken · "NFG report speed came up again. Petra runs the churn report in the evening because it does not finish during the day." For signal-triage: broken today at key-account volume; covered by PDR-0010 (report engine, KR2.3).
- 2026-08-28 · Marte Bakken · "Kraft receipts are showing SEK for Norwegian members. Finance escalated. Ticket is in." Johan Wirén: "Seen it. It is with the payments team." For signal-triage: billing-correctness defect reaching receipts (O1); find the ticket id.
- 2026-09-01 · Oskar Lindell · "Members getting a payment message every day is now a regular one. Several tenants. Nobody at the gyms can explain it to their members." Follow-up: "Enough that I have a stock reply for it." For signal-triage: matches the July and August synthesis themes on daily failed-payment messages. For support-dig: search for the stock reply text.
- 2026-09-20 · Aino Lehtinen · "App reviews are worth reading. Two-star reviews name the gym and describe our payment messages. Members think the gym is doing it." For signal-triage: same daily payment message defect, seen from the reviews channel.
- 2026-09-29 · Marte Bakken · "Kraft asked for a date on the receipt currency thing. I did not have one to give and it was an uncomfortable call." For signal-triage: the receipt currency defect has no committed date.
- 2026-10-08 · Tove Ahlin · "The wrong week number in the schedule is back in the queue. I thought that was fixed months ago?" Ingrid Halvorsen: "It was. These are people repeating a workaround from their own handbook." For support-dig: not a regression; a help-content or comms fix.
- 2026-10-17 · Henrik Dahl · "A couple of owners have said versions of "I found out from a member, not from you". Worth someone in product thinking about." For signal-triage: operators learn of incidents from members; check against incident comms.
- 2026-10-25 · Oskar Lindell · "Norwegian tickets about the receipt currency are still coming. Kraft, Vestkyst and Grünerløkka." For signal-triage: the receipt currency defect now spans three named tenants.
- 2026-10-30 · Aino Lehtinen · "From the member feedback the desks forward: several members say they did not leave, they stopped paying. That is a different problem from churn as we describe it." For signal-triage: involuntary churn; Johan Wirén is pulling the failed-payment cohort (discovery/usage-cohorts).

## Decisions made in the channel

- 2026-05-25 · Johan Wirén · Vipps: "Nothing new I can promise. It is in the payments pillar but not scheduled." In the decision records: PDR-0006 (accepted 2026-07-28) now gives the trigger.
- 2026-06-02 · Malin Ohlsson · Corporate memberships: "Noted. Discovery on this starts when the payments work lands, not before." **Differs from the decision records**: PDR-0010 keeps corporate memberships in discovery until its December decision date, and PDR-0009 funds a first slice. The channel answer is stale and will be relitigated.
- 2026-06-24 · Malin Ohlsson · Self-hosting: "That stays a no. It is a stated non-goal and it is not close." In the decision records: CONTEXT.md non-goal.
- 2026-07-30 · Malin Ohlsson · Kallio bug routing: "That is a process problem and it is costing us our best input. Let us fix the routing." **Only in the channel.** No owner or record.
- 2026-08-19 · Malin Ohlsson · Workout tracking: "No. It is an explicit non-goal in CONTEXT.md and it has not changed." In the decision records: CONTEXT.md non-goal.

## Closed

- **Members pay with Vipps** · payments · deferred · waits for Kraft Trening's abandoned sign-up count, PDR-0006: "Vipps starts when Kraft Trening's abandoned sign-up count arrives." · named 4 (Kraft Trening, Bergen Styrke, Vestkyst Trening, Trening Grünerløkka), unnamed 1, messages 6, posters 2, claimed repeats 5, 2026-05-25 to 2026-10-21 · "Kraft asked about Vipps again on the QBR. Third time from them this year. Anything I can say beyond "not on the roadmap"?" (signals/slack/feature-requests.md · 2026-05-25 · Jonas Solberg) · claimed repeats: "Number five." (signals/slack/feature-requests.md · 2026-10-21 · Marte Bakken)
- **Members pay with MobilePay** · payments · deferred · waits for Vipps, PDR-0006: "Denmark is sequenced behind it and treated as a market entry test with a kill criterion." · named 0, unnamed 3, messages 3, posters 1, claimed repeats 2, 2026-06-10 to 2026-10-03 · "Danish prospect asked about MobilePay in the first five minutes and stopped listening after the answer. Second time this month." (signals/slack/feature-requests.md · 2026-06-10 · Maria Ekholm)
- **An employer pays for, or towards, members' memberships** · subscriptions · deferred · waits for the 2026-12-15 decision date, PDR-0010: "Corporate memberships stays in discovery until its December decision date." First slice, Finnish shape, funded by PDR-0009 · named 1 (Nordic Fitness Group), unnamed 4, messages 4, posters 3, claimed repeats 2, 2026-06-02 to 2026-10-12. Shapes in the channel: Finnish part-payment (2026-07-21), Swedish staff block (2026-10-12), two unspecified · "NFG raised corporate memberships again on the call. Petra was clear that it goes on the renewal comparison sheet either way." (signals/slack/feature-requests.md · 2026-06-02 · Marte Bakken)
- **Several family members under one payer** · subscriptions · declined · PDR-0004: "No family or household memberships" and "No, reviewed annually or when the evidence changes." Re-examination open as BC-0019 per PDR-0009, not found on the board · named 1 (Puls Träning), unnamed 8 plus unquantified long-tail tickets, messages 4, posters 2, 2026-05-29 to 2026-09-10 · "Puls Träning want a family price. Mother plus two teenagers, one payment. They say they get asked weekly." (signals/slack/feature-requests.md · 2026-05-29 · Erik Lundgren)
- **Run Beefcake on the operator's own servers** · platform-foundations · declined · CONTEXT.md non-goal: "No on-premise or single-tenant deployment." · named 0, unnamed 1, messages 1, posters 1, 2026-06-24 · "Prospect in Uppsala asked whether we can run on their own servers. Told them no. They said their IT policy requires it." (signals/slack/feature-requests.md · 2026-06-24 · Erik Lundgren)
- **Members see what they will pay, and when, in the app** · member-app · declined · CONTEXT.md non-goal: "No native member app beyond the current scope." An exception needs a CPO decision (PDR-0003) · named 0, unnamed 3, messages 1, posters 1, 2026-07-16 · "Members are asking to see what they pay and when in the app. Coming from three tenants and the app reviews." (signals/slack/feature-requests.md · 2026-07-16 · Aino Lehtinen)
- **Members track workouts in the app** · member-app · declined · CONTEXT.md non-goal: "No consumer fitness features. No workout tracking" · named 0, unnamed 1, messages 1, posters 1, claimed repeats 3, 2026-08-19 · "Owner in Lund wants workout tracking in the member app. He has asked support three times as well." (signals/slack/feature-requests.md · 2026-08-19 · Erik Lundgren)

## Archive

None.

## Sweep log

- 2026-11-18 · period 2026-05-17 to 2026-10-31 · messages read 70 (50 top-level, 20 replies; 36 ask, 12 observation, 5 decision, 17 chatter; 2 messages carry two asks, so 38 ask rows) · rows added 23 · rows updated 0 · status changes: first sweep, all new: Vipps none to deferred; MobilePay none to deferred; employer-paid memberships none to deferred; family memberships none to declined; self-hosting none to declined; payments visible in app none to declined; workout tracking none to declined; 16 asks none to watching.
