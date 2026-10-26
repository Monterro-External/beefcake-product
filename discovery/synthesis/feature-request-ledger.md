---
type: ledger
source: "#feature-requests"
covers: 2026-04-04 to 2026-09-28
messages_read: 74
last_sweep: 2026-10-26
method: /monterro-product-process:feature-request-ledger over signals/slack/feature-requests.md
---

# Feature-request ledger, #feature-requests

One row per distinct ask from the request channel. Counts are cumulative across sweeps. Reactions are never counted. Unnamed counts are the number the poster gave; "unstated" means the poster gave none. Two messages each carry two asks (2026-06-27 and 2026-08-16, Maria Ekholm) and are counted once in each cluster.

## Open asks

| Ask | Area | Named accounts | Unnamed | Messages | Posters | Claimed repeats | First seen | Last seen | Corroboration | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| Owners and site managers see report figures, revenue among them, per site without rebuilding them in a spreadsheet | reports | Voima Kuntosalit | 2 | 2 | 1 | 2 | 2026-05-03 | 2026-07-06 | none | watching |
| A key account's reports complete during the working day at their volume | reports | Nordic Fitness Group | 0 | 1 | 1 | 2 | 2026-06-18 | 2026-06-18 | `2026-09-14-support-tickets-2026-03-to-2026-09.md`, theme "Reports do not finish at size" | corroborated |
| A prospect knows, before signing, what happens to its members' existing mandates when it moves to us | payments | none | 2 | 1 | 1 | | 2026-09-16 | 2026-09-16 | `2026-02-17-sales-calls-h2-2025.md`, "### 1. Mandates decide more deals than features" | corroborated |
| Owners hear about a problem affecting their members from us before a member tells them | platform-foundations | none | 2 | 1 | 1 | | 2026-08-30 | 2026-08-30 | none | watching |
| A member can end their membership from the member app | member-app | none | 1 | 1 | 1 | | 2026-08-27 | 2026-08-27 | none | watching |
| Danish operators issue receipts and invoices that meet Danish VAT and layout expectations | payments | none | 2 | 2 | 1 | | 2026-06-27 | 2026-08-16 | none | watching |
| An operator charges a joining fee separately from the first month | subscriptions | none | 1 | 1 | 1 | | 2026-07-24 | 2026-07-24 | none | watching |
| Members are reminded before a class they booked | classes | none | 1 | 1 | 1 | | 2026-07-11 | 2026-07-11 | none | watching |
| Membership and payment figures reach the operator's accounting system without manual handling | reports | none | 1 | 1 | 1 | | 2026-07-02 | 2026-07-02 | none | watching |
| An owner sees who changed a membership and when | subscriptions | none | 1 | 1 | 1 | | 2026-06-20 | 2026-06-20 | none | watching |
| Members sign in with their national electronic identity | member-app | none | 1 | 1 | 1 | | 2026-06-16 | 2026-06-16 | none | watching |
| An operator sends one message to all its members from inside the product | platform-foundations | none | 1 | 1 | 1 | 2 | 2026-06-12 | 2026-06-12 | none | watching |
| An operator hands members a printed membership card carrying its own branding | members | none | 2 | 1 | 1 | | 2026-06-04 | 2026-06-04 | none | watching |
| Members see what they will be charged and when | member-app | none | 3 | 1 | 1 | | 2026-05-29 | 2026-05-29 | none | watching |
| Front-desk staff get a darker display option on the desk screen | members | none | 1 | 1 | 1 | 2 | 2026-05-17 | 2026-05-17 | none | watching |
| An owner sees which staff member sold each membership, to pay commission | reports | none | 1 | 1 | 1 | | 2026-05-12 | 2026-05-12 | none | watching |
| An operator sets how far ahead members can book for each class, separately from the site | classes | none | 1 | 1 | 1 | | 2026-05-09 | 2026-05-09 | none | watching |
| Owners receive reports on a set schedule without running them | reports | none | 1 | 1 | 1 | | 2026-04-05 | 2026-04-05 | none | watching |
| Front desk finds a member by phone number | members | none | 1 | 1 | 1 | | 2026-04-04 | 2026-04-04 | none | watching |
| Members can queue for a full personal-training slot as they can for a class | classes | none | 1 | 1 | 1 | | 2026-04-04 | 2026-04-04 | none | watching |

### Report figures per site

Owners and site managers want figures broken down by site; today they export and rebuild. One poster, so it stays watching despite two messages.

> Two mid-market owners this week asked for a per-site revenue view. Both export to Excel and build it themselves.

signals/slack/feature-requests.md · 2026-05-03 · Henrik Dahl

> Site managers keep asking for per-site views of reports that only aggregate. Voima have five people maintaining their own spreadsheets.

signals/slack/feature-requests.md · 2026-07-06 · Henrik Dahl

### Key-account reports complete in the working day

A key account cannot run its reports during the day. PDR-0010 (accepted) funds the report engine replacement for Q4, so this is decided in direction; no board issue exists yet.

> NFG report speed came up again. Petra runs the churn report in the evening because it does not finish during the day.

signals/slack/feature-requests.md · 2026-06-18 · Marte Bakken

### Mandates when switching to us

Prospects want to know what happens to their existing mandates before they move. The poster says this question decides the deal.

> Two prospects this week asked what happens to their existing mandates if they move to us. It is the question that decides the deal and our answer is a paragraph of prose.

signals/slack/feature-requests.md · 2026-09-16 · Camilla Roos

### Owners hear it from us first

Owners want to learn of problems affecting their members from Beefcake, before a member tells them. No feature named.

> A couple of owners have said versions of "I found out from a member, not from you". Worth someone in product thinking about.

signals/slack/feature-requests.md · 2026-08-30 · Henrik Dahl

### Ending a membership from the member app

A member wants to cancel in the app. CONTEXT.md lists "freeze or leave within what the operator allows" as in scope for the member surface, so this is not inside the non-goal; the poster calls the desk hand-off "as designed".

> Member asked to be able to cancel in the app. Passed to the desk instead, as designed.

signals/slack/feature-requests.md · 2026-08-27 · Aino Lehtinen

### Danish receipts and invoices

Danish prospects expect Danish VAT on receipts and a Danish invoice layout. Both messages also carry the MobilePay ask (closed, deferred). One poster.

> CopenFit-style prospect in Aarhus asked about MobilePay and Danish VAT on receipts. Same two questions every Danish conversation.

signals/slack/feature-requests.md · 2026-06-27 · Maria Ekholm

> Danish prospect went with a local system. Debrief in the folder. Short version: MobilePay and a Danish invoice layout.

signals/slack/feature-requests.md · 2026-08-16 · Maria Ekholm

### Joining fee charged separately

An operator wants the joining fee charged apart from the first month.

> Operator wants to charge a joining fee separately from the first month.

signals/slack/feature-requests.md · 2026-07-24 · Jonas Solberg

### Reminder before a booked class

Members reminded before a class. SMS is the customer's own suggestion, from their previous system.

> Request for an SMS reminder before a class. Their old system had it.

signals/slack/feature-requests.md · 2026-07-11 · Jonas Solberg

### Figures into the accounting system

A prospect wants figures to reach their accounting system; the answer given was CSV export.

> Prospect asked whether we integrate with their accounting system. Told them CSV.

signals/slack/feature-requests.md · 2026-07-02 · Maria Ekholm

### Who changed a membership

An owner wants to see who changed a membership and when.

> Owner asked for a "who changed this" log on memberships.

signals/slack/feature-requests.md · 2026-06-20 · Henrik Dahl

### National e-ID sign-in for members

A prospect wants members to sign in with BankID, their wording. Sign-in is part of the existing member surface, so not read as inside the member-app non-goal.

> Prospect asked for a Swedish BankID login for members. Logged.

signals/slack/feature-requests.md · 2026-06-16 · Erik Lundgren

### One message to all members

An operator wants to message all members from inside the product. The poster says "we have said no to this before"; no decision record or non-goal says so, which is why it is open.

> Request for a bulk email to members from inside the product. We have said no to this before.

signals/slack/feature-requests.md · 2026-06-12 · Marte Bakken

### Branded printed membership card

Two operators want a printable card with their logo.

> Two operators asked for a printable membership card with their logo.

signals/slack/feature-requests.md · 2026-06-04 · Oskar Lindell

### Upcoming charges visible to members

Members want to see what they pay and when. Receipts are in the member surface's scope; upcoming charges are not named there, so whether this sits inside PDR-0003 is a CPO call. Poster cites app reviews as a second source; not yet in a synthesis.

> Members are asking to see what they pay and when in the app. Coming from three tenants and the app reviews.

signals/slack/feature-requests.md · 2026-05-29 · Aino Lehtinen

### Darker desk screen

A darker display on the desk screen; second request per the poster.

> Request for a dark mode on the desk screen. Second one.

signals/slack/feature-requests.md · 2026-05-17 · Tove Ahlin

### Sales attribution per staff member

An owner wants to see who sold which membership, for commission.

> Owner wants to see which staff member sold which membership. Commission thing.

signals/slack/feature-requests.md · 2026-05-12 · Henrik Dahl

### Booking window per class

How far ahead members can book, set per class.

> Request: booking window setting per class rather than per site.

signals/slack/feature-requests.md · 2026-05-09 · Tove Ahlin

### Reports on a schedule

Reports delivered on a schedule, by email in the customer's words.

> Someone asked whether reports can be emailed on a schedule.

signals/slack/feature-requests.md · 2026-04-05 · Oskar Lindell

### Member search by phone number

Find a member by phone number.

> Customer would like the member search to work on phone numbers.

signals/slack/feature-requests.md · 2026-04-04 · Erik Lundgren

### Queue for personal-training slots

A waiting list for personal-training slots like the class waitlist. ICP excludes operators whose core need is personal training delivery; worth checking who asked.

> Ask for a waiting list for personal training slots, not just classes.

signals/slack/feature-requests.md · 2026-04-04 · Maria Ekholm

## Observations

Not asks. Pointed at `signal-triage` as possible defects.

- 2026-05-16, Oskar Lindell: "Support volume note: freeze end date complaints spiked at the start of March and have not gone away. Mostly long tail." In thread, Oskar Lindell: "That is the problem. Half are tagged billing." The tags are unreliable, so `support-dig` should search on wording, not the tag. Matches the 2026-09-14 synthesis theme "Freeze ends on the wrong date".
- 2026-05-21, Jonas Solberg: "Norwegian prospect asked, quote, "does it handle NOK properly, we heard there were issues". Where would they have heard that?" `signal-triage`: the NOK receipt defect is reaching prospects, a sales cost of the "Receipts say SEK in Norway" defect.
- 2026-06-12, Henrik Dahl: "Kallio (small FI account) files the most precise bug reports we get and thinks we ignore them. We mostly do." In thread, Oskar Lindell: "Fair. Eight of her last ten were closed with a template reply." `support-dig`: pull Kuntoklubi Kallio's closed tickets and re-read them as defect reports.
- 2026-07-11, Marte Bakken: "Kraft receipts are showing SEK for Norwegian members. Finance escalated. Ticket is in." `signal-triage`: same as the synthesis theme "Receipts say SEK in Norway"; no board issue found.
- 2026-07-15, Oskar Lindell: "Members getting a payment message every day is now a regular one. Several tenants. Nobody at the gyms can explain it to their members." In thread: "Enough that I have a stock reply for it." `signal-triage`: matches the synthesis theme "Payment retried every day"; the stock reply means ticket counts understate it.
- 2026-08-03, Aino Lehtinen: "App reviews are worth reading. Two-star reviews name the gym and describe our payment messages. Members think the gym is doing it." `signal-triage`: the daily payment message defect, seen from the member side.
- 2026-08-12, Marte Bakken: "Kraft asked for a date on the receipt currency thing. I did not have one to give and it was an uncomfortable call." `signal-triage`: the receipt currency defect has no committed date.
- 2026-08-21, Tove Ahlin: "The wrong week number in the schedule is back in the queue. I thought that was fixed months ago?" In thread, Ingrid Halvorsen: "It was. These are people repeating a workaround from their own handbook." `signal-triage`: check whether the defect is fixed for every tenant before treating it as a documentation problem; the 2026-09-14 synthesis has "Week number in the schedule" with 11 tenants.
- 2026-09-07, Oskar Lindell: "Norwegian tickets about the receipt currency are still coming. Kraft, Vestkyst and Grünerløkka." `signal-triage`: three Norwegian tenants, still live in September.
- 2026-09-12, Aino Lehtinen: "From the member feedback the desks forward: several members say they did not leave, they stopped paying. That is a different problem from churn as we describe it." `signal-triage`: involuntary churn misread as cancellation; Johan Wirén is pulling the failed-payment cohort.
- 2026-09-28, Tove Ahlin: "Freeze end dates: another handful this week, all long tail, all after the month end." `signal-triage`: freeze end-date defect still live; "after the month end" is a search hint for `support-dig`.

## Decisions made in the channel

- 2026-04-07, Johan Wirén, on Vipps: "Nothing new I can promise. It is in the payments pillar but not scheduled." In the decision records: PDR-0006 (2026-07-28) supersedes it with a named trigger.
- 2026-04-15, Malin Ohlsson, on corporate memberships: "Noted. Discovery on this starts when the payments work lands, not before." Not in the decision records in this form. PDR-0009 and PDR-0010 set the current position; the channel line is stale and will be quoted back.
- 2026-05-07, Malin Ohlsson, on on-premise: "That stays a no. It is a stated non-goal and it is not close." In the records: CONTEXT.md non-goal.
- 2026-06-12, Malin Ohlsson, on Kallio's bug reports: "That is a process problem and it is costing us our best input. Let us fix the routing." Flagged: only in the channel, no owner or record.
- 2026-07-02, Malin Ohlsson, on workout tracking: "No. It is an explicit non-goal in CONTEXT.md and it has not changed." In the records: CONTEXT.md non-goal.

## Closed

- Pay with Vipps in Norway (payments) · deferred · waits for Kraft Trening's abandoned sign-up count, PDR-0006: "Vipps starts when Kraft Trening's abandoned sign-up count arrives." · named: Kraft Trening, Bergen Styrke, Vestkyst Trening, Trening Grünerløkka; unnamed 1; 6 messages; 2 posters; claimed repeats 5; 2026-04-07 to 2026-09-03 · strongest: "Kraft asked about Vipps again on the QBR. Third time from them this year. Anything I can say beyond "not on the roadmap"?" signals/slack/feature-requests.md · 2026-04-07 · Jonas Solberg · claimed repeat: "Number five." signals/slack/feature-requests.md · 2026-09-03 · Marte Bakken
- Pay with MobilePay in Denmark (payments) · deferred · waits for Vipps, PDR-0006: "Denmark is sequenced behind it and treated as a market entry test with a kill criterion." · named: none; unnamed 3; 3 messages; 1 poster; claimed repeats 2; 2026-04-23 to 2026-08-16 · strongest and claimed repeat: "Danish prospect asked about MobilePay in the first five minutes and stopped listening after the answer. Second time this month." signals/slack/feature-requests.md · 2026-04-23 · Maria Ekholm
- Several people under one membership and one payer (subscriptions) · declined · PDR-0004: "No family or household memberships" and "No, reviewed annually or when the evidence changes." Re-examination referenced as BC-0019; no such issue on the board · named: Puls Träning; unnamed 9 + unstated; 5 messages; 2 posters; claimed repeats 9; 2026-04-11 to 2026-09-25 · strongest: "Puls Träning want a family price. Mother plus two teenagers, one payment. They say they get asked weekly." signals/slack/feature-requests.md · 2026-04-11 · Erik Lundgren · claimed repeat: "Family membership again. That is nine this quarter from my accounts alone." signals/slack/feature-requests.md · 2026-09-25 · Erik Lundgren
- An employer pays for its staff's memberships (subscriptions) · deferred · waits for the 2026-12-15 decision date, PDR-0010: "Corporate memberships stays in discovery until its December decision date." PDR-0009 also builds the Finnish shape before the Swedish block · named: Nordic Fitness Group; unnamed 3; 3 messages; 3 posters; claimed repeats 2; 2026-04-15 to 2026-08-25 · strongest: "Corporate memberships came up in a Swedish deal with 6 sites. They pay for staff at three local employers." signals/slack/feature-requests.md · 2026-08-25 · Erik Lundgren · claimed repeat: "NFG raised corporate memberships again on the call. Petra was clear that it goes on the renewal comparison sheet either way." signals/slack/feature-requests.md · 2026-04-15 · Marte Bakken
- An employer pays part of one member's membership (subscriptions) · deferred · waits for the 2026-12-15 decision date, PDR-0010: "Corporate memberships stays in discovery until its December decision date." PDR-0009 funds this shape as the first slice; the two records disagree on timing · named: none; unnamed 1; 1 message; 1 poster; 2026-06-03 · strongest: "Employer-paid memberships came up in a Finnish deal. Company pays part, member pays the rest, one membership." signals/slack/feature-requests.md · 2026-06-03 · Erik Lundgren
- Run the product on the customer's own servers (platform-foundations) · declined · CONTEXT.md non-goal: "No on-premise or single-tenant deployment. One platform, 340 tenants." · named: none; unnamed 1; 1 message; 1 poster; 2026-05-07 · strongest: "Prospect in Uppsala asked whether we can run on their own servers. Told them no. They said their IT policy requires it." signals/slack/feature-requests.md · 2026-05-07 · Erik Lundgren
- Members track workouts in the member app (member-app) · declined · CONTEXT.md non-goal: "No consumer fitness features. No workout tracking, no nutrition, no training programmes, no wearables." · named: none; unnamed 1; 1 message; 1 poster; claimed repeats 3; 2026-07-02 · strongest and claimed repeat: "Owner in Lund wants workout tracking in the member app. He has asked support three times as well." signals/slack/feature-requests.md · 2026-07-02 · Erik Lundgren

## Archive

None. Every row was seen within the last twelve months.

## Sweep log

- 2026-10-26 · first sweep, 2026-04-04 to 2026-09-28 · 74 messages read (54 top-level, 20 replies: 40 ask, 11 observation, 5 decision, 18 chatter) · 27 rows added, 0 updated · status changes: none (first sweep; 20 open, 7 closed)
