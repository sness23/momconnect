# Feature Spec: Shared Platform (Accounts, Identity, Cross-Site Features)

> The invisible infrastructure that makes five sites feel like one ecosystem.

## Overview

The Shared Platform is the "Google Account" layer — the single identity, authentication, messaging, notifications, and trust system that connects all five MomConnect sites. A user never interacts with "the shared platform" directly; they experience it as seamless continuity across Market, Safe Space, Launch, Village, and Restore.

## The Google Analogy

```
Google Account          →  MomConnect Account
Google Profile          →  MomConnect Profile
Google SSO              →  MomConnect SSO
Google Pay              →  MomConnect Wallet
Gmail (messaging)       →  MomConnect Messages
Google Notifications    →  MomConnect Notifications
Google Reviews          →  MomConnect Trust Score
```

## Core Features

### F1: Single Sign-On (SSO)
- **One account, all sites** — register once, access Market, Village, Launch, Restore
- **Safe Space exception** — accessible without an account (anonymous mode)
- **Registration options:**
  - Email + password
  - Google sign-in
  - Apple sign-in
  - Phone number (SMS verification)
- **Two-factor authentication** — optional but encouraged
- **Session management** — stay logged in across sites, manage active sessions
- **Safe Space PIN** — optional separate PIN/password for Safe Space (extra security layer)

### F2: Unified Profile
A single profile that presents differently on each site:

**Core profile data (shared):**
- Display name
- Profile photo
- Location (city/neighborhood level)
- Bio
- Kids' ages and stages (optional — some moms may not want to share)
- Member since date
- Trust score

**Site-specific profile views:**
| Site | What's Shown | What's Hidden |
|------|-------------|---------------|
| Market | Seller rating, listings, reviews | Personal bio details |
| Safe Space | NOTHING (anonymous by default) | Everything |
| Launch | Business info, skills, mentor status | Kids' details |
| Village | Full profile, interests, kids' ages | Business details |
| Restore | Minimal (name, photo) | Everything else |

**Privacy controls:**
- Per-site visibility toggles (show/hide each field per site)
- Anonymous mode for Safe Space (completely disconnected from main profile)
- "Invisible" mode — browse without appearing in "moms near you"
- Block list — blocks carry across all sites

### F3: Trust & Reputation System
A cross-platform trust score built from activity across all sites:

**Trust signals:**
- Identity verification (real name, phone number, address) — verified badge
- Market: Seller ratings and reviews
- Village: Event attendance reliability, community contributions
- Launch: Mentor ratings, collaboration feedback
- Account age and activity consistency

**Trust score display:**
- Simple visual (not a number) — think green/yellow/new member
- Verified badge for identity-verified members
- "Trusted by X moms" social proof
- Never displayed on Safe Space

**Trust score rules:**
- Cannot be gamed (weighted algorithm, not simple average)
- One bad review doesn't tank you (patterns matter more than incidents)
- New members aren't penalized — they're "new" not "untrusted"
- Trust is earned, not bought

### F4: Messaging System
- **Cross-site messaging** — message any MomConnect member regardless of which site you met on
- **Context-aware** — messages initiated from Market include the listing; from Village, the event
- **Message types:**
  - Direct messages (1:1)
  - Group messages (for event planning, collaborations)
  - Listing inquiries (Market-specific)
- **Safety features:**
  - Report and block
  - No unsolicited messages from strangers (must connect first, or message through a listing/event)
  - AI-assisted content moderation (flag harassment, spam)
  - Image scanning (prevent inappropriate content)
- **Not a social media inbox** — this is functional messaging, not a feed. No stories, no status updates.

### F5: Notification Center
- **Unified notifications** across all sites
- **Categorized:** Market (sales, messages), Village (events, groups), Launch (mentors, courses), Restore (daily practice reminders)
- **Granular controls:** Turn off notifications per site, per type
- **Safe Space:** NO notifications by default. Opt-in only, with disguised content.
- **Delivery:** Push (mobile), email digest (optional), in-app badge
- **Smart batching:** Don't ping someone 15 times — batch non-urgent notifications

### F6: MomConnect Home (Optional Hub)
- **Cross-site dashboard** — a single "home" page showing:
  - New messages
  - Upcoming events (Village)
  - New listings from moms you follow (Market)
  - Course progress (Launch)
  - Daily practice reminder (Restore)
  - Activity from your connections across all sites
- **Optional** — some moms will go directly to their preferred site
- **Chronological feed** — no algorithm, no engagement optimization
- **Entry point:** `momconnect.com` (the hub), with links to all five sites

### F7: MomConnect Wallet (Phase 2)
- **Unified payment method** — add a card once, use across Market and Launch
- **Earnings dashboard** — see Market sales and Launch course income in one place
- **Payouts** — single payout for all platform earnings
- **Subscription management** — manage premium subscriptions across sites

## Data Architecture Principles

### What's Shared
- Account credentials
- Profile data (with per-site visibility controls)
- Trust scores
- Messages
- Notifications
- Payment methods
- Block list

### What's NOT Shared
- Safe Space data (completely siloed, encrypted separately)
- Restore journal entries (private, encrypted)
- Browsing activity on any site (no cross-site tracking)
- Specific activity details (Village doesn't know what you bought on Market)

### Privacy Rules
1. **Safe Space is a vault.** No data flows in or out without explicit user action.
2. **No behavioral tracking across sites.** We don't build ad profiles.
3. **Users own their data.** Full export and deletion available.
4. **Minimum viable data.** Each site only accesses the profile data it needs.
5. **GDPR/CCPA compliant** from day one — even if initially US-only.

## MVP vs. Full Version

### MVP
- Email/password registration
- Basic profile (name, photo, location, bio)
- SSO across Market + Village (first two sites)
- Direct messaging
- Basic notifications

### Phase 2
- Google/Apple sign-in
- Trust score system
- Per-site profile visibility controls
- Unified notification center
- MomConnect Home dashboard
- Two-factor authentication

### Phase 3
- MomConnect Wallet
- Advanced trust algorithm
- Data export and account deletion tools
- API for third-party integrations
- Safe Space anonymous access layer

## Technical Considerations (Preview — Full Architecture in doc 11)
- **Auth:** OAuth 2.0 / OpenID Connect for SSO across subdomains
- **Database:** Shared user database with per-site data in separate schemas/databases
- **Encryption:** Safe Space and Restore journals use end-to-end encryption (client-side keys)
- **Hosting:** Each site can be deployed independently but shares the auth/user service
- **Subdomain strategy:** `market.momconnect.com`, `village.momconnect.com`, etc.
