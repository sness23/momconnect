# MomConnect Platform — Platform Overview

## The Google Model

The client's vision maps directly to the Google ecosystem model:

```
Google Account  ──>  MomConnect Account
├── Gmail        ──>  Market (marketplace)
├── Maps         ──>  Village (community/local)
├── YouTube      ──>  Restore (healing content)
├── Workspace    ──>  Launch (entrepreneur hub)
└── (no equiv)   ──>  Safe Space (DV resources)
```

**Key insight:** Each Google product is a separate website with its own URL, its own team, and its own purpose — but they all share one account, one identity, and data flows between them (e.g., a Calendar event can have a Maps link and a Drive attachment).

## Platform Architecture (Conceptual)

```
┌─────────────────────────────────────────────────────┐
│                  SHARED PLATFORM                     │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │ Accounts │  │ Profiles │  │ Trust & Reputation │  │
│  └──────────┘  └──────────┘  └───────────────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │
│  │ Messaging│  │ Notifs   │  │ Cross-site Feed   │  │
│  └──────────┘  └──────────┘  └───────────────────┘  │
└─────────┬───────────┬───────────┬──────────┬────────┘
          │           │           │          │
    ┌─────┴──┐  ┌─────┴──┐  ┌────┴───┐  ┌───┴────┐  ┌────────┐
    │ Market │  │ Safe   │  │ Launch │  │Village │  │Restore │
    │        │  │ Space  │  │        │  │        │  │        │
    │shop.   │  │safe.   │  │launch. │  │village.│  │restore.│
    │mom.com │  │mom.com │  │mom.com │  │mom.com │  │mom.com │
    └────────┘  └────────┘  └────────┘  └────────┘  └────────┘
```

## The Five Sites

### 1. Market (Marketplace)
**URL concept:** `market.momconnect.com`

A mom-focused marketplace for buying, selling, and trading.

**What makes it different from Etsy/Facebook Marketplace:**
- Built around local exchange (like Craigslist but safe and trusted)
- Trust scores from the shared platform (you can see her Village reputation)
- Categories designed for mom life: kids' clothes by size/age, baked goods, handmade crafts, business services
- No listing fees for small sellers (sustainability through transaction fees)
- Integration with Launch (turn your hobby into a business)

### 2. Safe Space (DV Resources & Support)
**URL concept:** `safe.momconnect.com`

A private, secure space for women in dangerous situations.

**Critical design considerations:**
- Must be accessible without the main MomConnect account (anonymity option)
- "Quick exit" button on every page (redirects to a benign site)
- No trace in browsing history if possible (or disguised as something else)
- AI co-planner that helps build an escape plan step by step
- Connects to real hotlines, real shelters, real legal resources — geo-located
- NOT a replacement for professional crisis services — an on-ramp to them

**Unique features:**
- AI safety planning assistant (conversational, not a form)
- Local resource finder (shelters, legal aid, counseling)
- Financial independence planning (connects to Launch when ready)
- Secure journaling (encrypted, deletable)

### 3. Launch (Entrepreneur Hub)
**URL concept:** `launch.momconnect.com`

Where moms build businesses and careers.

**What makes it different from LinkedIn/Coursera:**
- Designed for people with interrupted schedules (5-minute lessons, async mentorship)
- AI business ideation partner (not generic — trained on mom-entrepreneur patterns)
- Direct path to Market (list your product/service immediately)
- Mentor matching (experienced mom entrepreneurs paired with beginners)
- Workshop/course format created by real mom entrepreneurs
- Collaboration board (find a co-founder, find a designer, find an accountant)

### 4. Village (Community)
**URL concept:** `village.momconnect.com`

Local and global community for moms to connect.

**What makes it different from Facebook Groups/Peanut:**
- Structured event planning (not just chat threads that get lost)
- Location-aware: shows moms near you, events near you
- Travel mode: visiting a new city? Find moms and kid-friendly spots
- Moving mode: relocating? Start connecting before you arrive
- Interest matching beyond just "we both have toddlers"
- Safe — verified profiles, reporting, moderation

### 5. Restore (Healing & Wellness)
**URL concept:** `restore.momconnect.com`

Mental, spiritual, and emotional resources for moms.

**What makes it different from Calm/Headspace:**
- Content created by the client and other moms (not generic wellness)
- Specific to mom experiences (postpartum, overwhelm, identity loss, boundary-setting)
- Includes spiritual diversity (prayers, reiki, meditation — not one-size-fits-all)
- Recognizing abuse guides (educational, connects to Safe Space when needed)
- Audio library that moms return to repeatedly
- Community aspect: share what helped you, discuss in groups

## Cross-Site Connections

The real magic is how the sites connect:

| From → To | Connection |
|-----------|------------|
| Safe Space → Launch | "Ready to build financial independence? Here's Launch." |
| Village → Market | "Met a mom who makes amazing candles? Find her on Market." |
| Launch → Market | "Finished the business course? List your first product." |
| Restore → Village | "Feeling isolated? Find a mom meetup near you." |
| Market → Launch | "Selling well? Learn to scale your business." |
| Village → Restore | "Overwhelmed after a tough day? Try this 5-minute meditation." |

## Shared Platform Features

These features exist across all five sites:

1. **Single Sign-On (SSO)** — One account, one login
2. **Unified Profile** — Name, photo, bio, location, kids' ages (shared but customizable per site)
3. **Trust Score** — Built from activity across all sites (reviews, event attendance, community participation)
4. **Messaging** — Direct messages that work across all sites
5. **Notifications** — One notification center for all sites
6. **Cross-site Feed** — Optional "home" page showing activity across all sites you use
7. **Privacy Controls** — Granular: you might be public on Village but anonymous on Safe Space
