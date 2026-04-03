# MomConnect Platform — Project Plan

## Approach

Build one site at a time, each one usable and valuable on its own, with the shared platform growing underneath. Every phase ends with something real that the client can show people and get feedback on.

## Phase 0: Foundation

> Set up the monorepo, shared infrastructure, auth, and a landing page.

### Deliverables
- [ ] Monorepo structure (`apps/`, `packages/shared/`, `prisma/`)
- [ ] Turborepo + npm workspaces configured
- [ ] PostgreSQL database with shared schema (users, profiles, messages)
- [ ] NextAuth.js SSO working across subdomains
- [ ] Shared UI components (Header, ProfileCard, Footer)
- [ ] Tailwind CSS design system (colors, fonts, spacing — client to provide brand direction)
- [ ] nginx config for subdomains on EC2
- [ ] pm2 ecosystem config
- [ ] Let's Encrypt wildcard SSL for *.sness.net
- [ ] Landing page at sness.net ("Coming soon" + email signup)
- [ ] Basic user registration and login (email/password)
- [ ] Basic profile creation (name, photo, bio, location)

### Why This First
Everything else depends on accounts, auth, and the shared infrastructure. Building this first means every subsequent site plugs in immediately.

### Decisions Needed Before Starting
- [ ] Brand direction from client (name, colors, fonts, mood — even rough ideas help)
- [ ] Confirm sness.net subdomains as the starting point

---

## Phase 1: Village (Community)

> The first real site. Community is the best starting point because it creates the user base that all other sites need.

### Why Village First
- Lowest technical complexity (no payments, no AI, no encryption)
- Creates the core user base — moms who sign up to find other moms
- Generates the trust and relationships that make Market and Launch work later
- Easy to test locally (the client can invite moms she knows)
- High engagement — events and playdates give people a reason to come back

### Deliverables
- [ ] Village app at village.sness.net
- [ ] Mom discovery: browse moms near you, filter by kids' ages and interests
- [ ] Profile enhancements: kids' ages, interests, neighborhood
- [ ] Event/playdate creation: title, date, time, location, age range, capacity
- [ ] RSVP system: going / maybe / not going
- [ ] Event discovery: browse upcoming events near you
- [ ] Neighborhood groups: auto-created by zip code
- [ ] Group posts: text and photo posts within groups
- [ ] Direct messaging between moms (shared messaging system)
- [ ] Basic notifications (new message, event RSVP, group post)
- [ ] Mobile-responsive design (works great on phones)

### Launch Criteria
- Client and 10-20 moms she knows are using it
- At least 3 events have been created and attended
- Feedback collected and top issues fixed

---

## Phase 2: Restore (Healing & Wellness)

> The client's personal content is a key differentiator. Get it in front of users while the community is growing.

### Why Restore Second
- The client is personally creating this content — she's motivated and ready
- Low technical complexity (content library + audio player)
- Deepens engagement — moms who found Village now have a reason to come back daily
- Builds emotional connection to the platform (this is what makes MomConnect feel different)
- No payments needed for MVP (free content)

### Deliverables
- [ ] Restore app at restore.sness.net
- [ ] Content library: browse by moment ("I need this right now"), topic, and practice type
- [ ] Audio player: play affirmations, meditations, prayers, guides
- [ ] "Right Now" quick access: tap your mood → get matched content
- [ ] Content upload system (admin): upload audio, add tags, categorize
- [ ] Favorites: save content you want to come back to
- [ ] Recently played: quick access to what you listened to before
- [ ] Daily practice reminder (optional push notification or email)
- [ ] Founder's Corner: dedicated section for the client's personal content
- [ ] Basic streak tracking ("You've shown up 5 days in a row")

### Content Needed from Client
- 10 affirmations (1-3 min each, various themes)
- 5 guided meditations (5-10 min each)
- 5 audio guides (10-20 min on core topics)
- 3 prayers or spiritual pieces
- Written descriptions for each piece

### Launch Criteria
- 20+ content pieces in the library
- Client has recorded and uploaded her initial content
- Village users are discovering Restore through cross-site links
- At least 50 listens in the first week

---

## Phase 3: Market (Marketplace)

> Now that there's a community, give them a way to trade and sell.

### Why Market Third
- Requires the trust system that Village built (verified moms, reputation)
- Community creates both buyers and sellers (the chicken-and-egg problem is solved)
- Payments add complexity — better to have the platform stable first
- This is where revenue starts (transaction fees)

### Deliverables
- [ ] Market app at market.sness.net
- [ ] Listing creation: photo upload, title, description, price, category, condition
- [ ] AI listing assistant: photo → suggested title, description, price (OpenAI Vision)
- [ ] Categories: Kids' Clothing (by size), Handmade & Crafts, Baked Goods, Women's Clothing, Home & Baby Gear, Services
- [ ] Location-based browsing: items near you
- [ ] Search with filters: category, price range, distance, condition
- [ ] Seller profiles: linked to MomConnect profile, shows trust score
- [ ] In-app messaging for buyer/seller communication (reuses shared messaging)
- [ ] Stripe Connect integration: seller onboarding, buyer checkout, platform fee (5%)
- [ ] Purchase protection for shipped items (hold funds until delivery confirmed)
- [ ] Local pickup coordination (suggest safe meetup spots)
- [ ] Reviews and ratings after purchase
- [ ] Seller dashboard: active listings, sales history, earnings
- [ ] Favorites and saved searches

### Launch Criteria
- Stripe Connect working and tested with real transactions
- 50+ listings from community members
- At least 10 completed transactions
- Seller payouts working

---

## Phase 4: Launch (Entrepreneur Hub)

> Moms who are selling on Market are ready to level up. Give them the tools.

### Why Launch Fourth
- Market sellers are the natural first users ("You're selling well — learn to scale")
- AI business tools build on the OpenAI integration from Market's listing assistant
- Courses and mentorship need a user base to be valuable
- Revenue opportunity #2 (premium subscriptions)

### Deliverables
- [ ] Launch app at launch.sness.net
- [ ] AI Business Ideation Partner: conversational interface for exploring business ideas
- [ ] Micro-courses: 3-5 initial courses (Starting Your Business, Pricing, Marketing)
- [ ] Course player: video + text + worksheet per lesson, progress tracking
- [ ] Collaboration board: post what you need / what you offer
- [ ] Resource library: grant links, templates, local SBA/SCORE resources
- [ ] Direct link to create a Market listing from Launch
- [ ] Basic mentor profiles (self-service, no matching algorithm yet)
- [ ] Premium subscription ($9.99/month) for full course access and AI tools

### Launch Criteria
- 3-5 courses published and complete
- AI ideation partner tested with 20+ users
- At least 5 collaboration board posts
- Premium subscription flow working

---

## Phase 5: Safe Space (Domestic Violence Resources)

> The most important and most sensitive site. Built last because it requires the most care, partnerships, and security.

### Why Safe Space Last
- Requires the highest security standards (encryption, anonymity, no data leaks)
- Needs partnerships with DV organizations before launch (credibility and safety)
- Legal review is essential before going live
- The other four sites need to be stable — Safe Space users may bridge to them
- AI safety planner needs the most careful prompt engineering and testing
- Getting this wrong has real-world safety consequences — take the time to do it right

### Pre-Development Requirements
- [ ] **Legal consultation** — liability review, mandatory reporting obligations, terms of service
- [ ] **DV organization partnership** — at least one established org to review content and validate approach
- [ ] **Security audit** of existing platform — Safe Space shouldn't launch on infrastructure with known vulnerabilities
- [ ] **Content review** — all educational content reviewed by DV professionals
- [ ] **AI safety testing** — extensive testing of the safety planning assistant with DV professionals

### Deliverables
- [ ] Safe Space app at safe.sness.net
- [ ] Anonymous access (no account required)
- [ ] Quick exit button on every page
- [ ] Resource finder: shelters, hotlines, legal aid, counseling — geo-located by zip code
- [ ] National hotline directory (prominently displayed, tap to call)
- [ ] Educational content: recognizing abuse, types of abuse, safety planning guides
- [ ] Technology safety guide: checking for spyware, securing accounts
- [ ] Separate PIN/password option for Safe Space
- [ ] No notifications by default, no cross-site visibility
- [ ] Encrypted evidence journal (client-side encryption)
- [ ] AI safety planning assistant (with strict guardrails, human hotline handoff)
- [ ] Safety check-in system (scheduled check-ins, trusted contact alerts)
- [ ] Bridge to independence: gentle, opt-in links to Launch, Market, Village, Restore
- [ ] Legal rights guide (state-by-state basics on protection orders, custody)
- [ ] For friends & family: how to help someone in a DV situation

### Launch Criteria
- DV organization has reviewed and approved the approach
- Legal review complete
- AI safety planner tested by DV professionals (not just developers)
- Security audit passed
- Quick exit and anonymity features thoroughly tested
- At least 3 staff/volunteers from DV orgs have used it and given feedback

---

## Phase 6: Platform Polish & Growth

> All five sites are live. Now connect them, polish them, and grow.

### Deliverables
- [ ] MomConnect Home dashboard (cross-site feed at sness.net)
- [ ] Trust score algorithm (aggregated from all sites)
- [ ] Cross-site discovery ("Moms you know on Village are selling on Market")
- [ ] Unified notification center
- [ ] Google and Apple sign-in
- [ ] Two-factor authentication
- [ ] MomConnect Wallet (unified payments across sites)
- [ ] Mobile optimization pass (PWA or consider native app)
- [ ] Client's own domain (momconnect.com or chosen name) — migrate from sness.net
- [ ] Onboarding flow for new users (which sites interest you?)
- [ ] Admin dashboard for the client (user stats, content management, moderation)

---

## Ongoing Work (All Phases)

These happen continuously, not in a single phase:

### Content (Restore)
- Client records new content regularly
- Guest creators onboarded (Phase 2+)
- Guided series developed (7-day programs)

### Community Management (Village)
- Moderation policies and tools
- Community guidelines
- Event quality and attendance tracking

### Safe Space Maintenance
- Resource directory kept up to date (shelters open/close, hotlines change)
- AI safety planner refined based on professional feedback
- Ongoing DV org partnership

### Technical
- Database backups (daily, automated)
- Server monitoring (pm2 + simple uptime checks)
- Security patches and dependency updates
- Performance monitoring

---

## Order Summary

```
Phase 0: Foundation          ← Infrastructure, auth, landing page
Phase 1: Village             ← Community (the user base)
Phase 2: Restore             ← Healing content (engagement + differentiation)
Phase 3: Market              ← Marketplace (revenue starts)
Phase 4: Launch              ← Entrepreneur hub (revenue #2)
Phase 5: Safe Space          ← DV resources (most sensitive, most care)
Phase 6: Polish & Growth     ← Connect everything, scale
```

## Risk Register

| Risk | Impact | Mitigation |
|------|--------|------------|
| Client doesn't have brand/name ready | Delays everything visually | Start with minimal design, rebrand later. sness.net is fine for dev/testing. |
| Safe Space liability | Legal/safety crisis | Legal review before launch. Partner with DV orgs. Clear disclaimers. |
| No users (cold start) | Platform feels empty | Client personally invites first 20-50 moms. Start hyperlocal (one city/neighborhood). |
| AI says something harmful (Safe Space) | Real-world safety risk | Extensive prompt engineering, DV professional review, human handoff always available, conservative guardrails. |
| Scope creep | Nothing ships | Each phase has a clear MVP. Ship it, get feedback, iterate. Resist adding features before the phase ships. |
| Single EC2 goes down | All sites offline | Daily backups. pm2 auto-restart. Move to multi-instance when revenue justifies it. |
| Stripe/payment issues | Revenue blocked, sellers frustrated | Test thoroughly before Market launch. Stripe has good support. Keep manual payout option as fallback. |
| Content creation bottleneck | Restore feels empty | Client starts recording now (Phase 0). Even 10 pieces is enough to launch. Quality > quantity. |

## What the Client Should Do Now

While we build Phase 0 and Phase 1:

1. **Choose a name** (or confirm MomConnect as the working name)
2. **Brand direction** — even a Pinterest mood board of colors/vibes she likes
3. **Start recording Restore content** — affirmations and meditations, even rough recordings on her phone
4. **Invite her first 20 moms** — friends, family, local moms who would try Village
5. **Research DV organizations** — start conversations with local DV shelters or the National DV Hotline about potential partnership
6. **Answer the open questions** in [QUESTIONS.md](13-QUESTIONS.md)
