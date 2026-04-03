# MomConnect Platform — Technical Architecture

## Infrastructure Overview

```
                         sness.net (EC2 Instance)
                                │
                            nginx reverse proxy
                                │
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────┴──────┐  ┌────┴────┐  ┌───────┴──────┐
        │ Shared API   │  │ Auth    │  │ Static/CDN   │
        │ :3000        │  │ :3001   │  │              │
        └──────────────┘  └─────────┘  └──────────────┘
                │
    ┌───────┬───┴────┬──────────┬──────────┐
    │       │        │          │          │
 Market  Village  Launch    Restore   Safe Space
 :3010   :3020   :3030     :3040     :3050
```

All services run under **pm2** on a single EC2 instance. Each site is a separate process.

## Domain Strategy

```
sness.net                    → MomConnect Home (hub/landing)
market.sness.net             → Market (marketplace)
village.sness.net            → Village (community)
launch.sness.net             → Launch (entrepreneur hub)
restore.sness.net            → Restore (healing & wellness)
safe.sness.net               → Safe Space (DV resources)
api.sness.net                → Shared API
auth.sness.net               → Auth service (SSO)
```

When the client gets her own domain (e.g., `momconnect.com`), we just update nginx configs. The code doesn't change.

## Tech Stack

### Why This Stack
- **Next.js** — React framework with server-side rendering, API routes, great for SEO and fast page loads. Each site is its own Next.js app.
- **PostgreSQL** — Relational database. Proven, reliable, handles the complex relationships between users, listings, events, messages.
- **Prisma** — Database ORM. Type-safe, great migrations, works perfectly with Next.js.
- **Node.js** — Runtime for everything. One language across the whole platform.
- **nginx** — Reverse proxy routing subdomains to the right pm2 process.
- **pm2** — Process manager you already use. Handles restarts, logs, clustering.

### Stack Summary

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | Next.js (React) | SSR, file-based routing, API routes built in |
| Styling | Tailwind CSS | Fast to build, consistent design system |
| Backend API | Next.js API routes + shared API service | Co-located with frontend, shared service for cross-site logic |
| Auth | NextAuth.js (Auth.js) | Built for Next.js, supports email/Google/Apple, session management |
| Database | PostgreSQL | Relational, proven, free |
| ORM | Prisma | Type-safe, migrations, works with Postgres |
| File storage | S3 (or local disk initially) | Product photos, audio content, evidence journal |
| AI | OpenAI API (GPT-4) | Safety planner, business ideation, listing assistant |
| Search | PostgreSQL full-text (→ Meilisearch later) | Start simple, upgrade when needed |
| Email | Resend or AWS SES | Transactional emails, notifications |
| Payments | Stripe | Marketplace payments with Stripe Connect |
| Process manager | pm2 | Already in use on your EC2 |
| Reverse proxy | nginx | Subdomain routing, SSL termination |
| SSL | Let's Encrypt (certbot) | Free SSL for all subdomains |

## Database Architecture

One PostgreSQL instance, multiple schemas to keep data organized:

```
PostgreSQL
├── shared          ← Users, auth, profiles, messages, trust scores
├── market          ← Listings, orders, reviews, seller data
├── village         ← Events, groups, locations, recommendations
├── launch          ← Courses, mentors, collaborations, jobs
├── restore         ← Content library, playlists, journals, streaks
└── safespace       ← Resources, safety plans, evidence (ENCRYPTED)
```

### Shared Schema (Core Tables)

```sql
-- Users & Auth
users
  id, email, password_hash, phone, created_at, updated_at, email_verified

profiles
  id, user_id, display_name, photo_url, bio, city, state, zip,
  kids_info (jsonb), created_at, updated_at

-- Trust & Reputation
trust_scores
  id, user_id, overall_score, market_score, village_score,
  launch_score, last_calculated

-- Messaging
conversations
  id, created_at, updated_at

conversation_participants
  id, conversation_id, user_id, joined_at

messages
  id, conversation_id, sender_id, body, context_type,
  context_id, created_at, read_at

-- Notifications
notifications
  id, user_id, site, type, title, body, link, read, created_at

-- Privacy & Blocking
blocks
  id, blocker_id, blocked_id, created_at

privacy_settings
  id, user_id, site, field, visibility (public/connections/hidden)
```

### Market Schema

```sql
listings
  id, seller_id, title, description, price, condition,
  category, subcategory, fulfillment_type (local/ship/both),
  location_city, location_state, location_zip, location_lat,
  location_lng, status (active/sold/removed), created_at

listing_images
  id, listing_id, image_url, sort_order

orders
  id, listing_id, buyer_id, seller_id, price, status,
  stripe_payment_id, fulfillment_type, created_at

reviews
  id, order_id, reviewer_id, reviewee_id, rating, body, created_at

favorites
  id, user_id, listing_id, created_at
```

### Village Schema

```sql
events
  id, creator_id, title, description, location_name,
  location_address, location_lat, location_lng,
  starts_at, ends_at, kid_age_min, kid_age_max,
  capacity, category, recurring_rule, created_at

rsvps
  id, event_id, user_id, status (going/maybe/waitlist), created_at

groups
  id, name, description, type (neighborhood/interest/age_stage),
  location_zip, privacy (public/private), created_at

group_members
  id, group_id, user_id, role (member/admin), joined_at

posts
  id, group_id, author_id, body, post_type
  (text/photo/question/recommendation/poll), created_at

recommendations
  id, author_id, place_name, place_address, category,
  body, rating, kid_friendly_notes, location_zip, created_at
```

### Launch Schema

```sql
courses
  id, creator_id, title, description, category, difficulty,
  estimated_minutes, status (draft/published), created_at

lessons
  id, course_id, title, content_type (video/text/worksheet),
  content_url, body, sort_order, estimated_minutes

user_progress
  id, user_id, course_id, lesson_id, completed, completed_at

mentor_profiles
  id, user_id, bio, expertise (text[]), industries (text[]),
  available_slots_per_month, rating, created_at

mentor_matches
  id, mentor_id, mentee_id, status (active/completed/cancelled),
  started_at

collab_posts
  id, author_id, title, description, type (need/offer),
  category, status (open/filled/closed), created_at

job_posts
  id, poster_id, title, description, type (parttime/freelance/project),
  remote, pay_range, created_at
```

### Restore Schema

```sql
content
  id, creator_id, title, description, type
  (affirmation/meditation/prayer/reiki/breathing/audio_guide/written_guide/video),
  duration_seconds, audio_url, video_url, body,
  moment_tags (text[]), topic_tags (text[]), practice_tags (text[]),
  is_premium, created_at

playlists
  id, user_id, name, created_at

playlist_items
  id, playlist_id, content_id, sort_order

favorites
  id, user_id, content_id, created_at

journal_entries
  id, user_id, encrypted_body, entry_type (prompted/gratitude/free),
  prompt_id, created_at
  -- encrypted_body is encrypted client-side before storage

daily_practice
  id, user_id, date, completed, content_id

streaks
  id, user_id, current_streak, longest_streak, last_practice_date

series
  id, title, description, topic, num_days, created_at

series_days
  id, series_id, day_number, content_id, journal_prompt
```

### Safe Space Schema

**All data in this schema is encrypted at rest. Evidence journal entries are encrypted client-side.**

```sql
-- Resource directory (public, not user-specific)
resources
  id, name, type (shelter/hotline/legal/counseling/financial),
  phone, website, address, city, state, zip, lat, lng,
  languages (text[]), accepts_children, pet_friendly,
  notes, verified, last_verified_at

-- Safety plans (encrypted, user-specific)
safety_plans
  id, user_id (nullable — anonymous users get a session token),
  encrypted_plan_data, created_at, updated_at

-- Evidence journal (encrypted client-side)
evidence_entries
  id, user_id, encrypted_data, entry_type (photo/text/screenshot),
  created_at

-- Check-ins
checkins
  id, user_id, scheduled_at, response_deadline_minutes,
  trusted_contact_name, trusted_contact_phone,
  alert_message_encrypted, status (pending/responded/alerted),
  created_at

-- AI conversation logs (encrypted, deletable)
ai_conversations
  id, user_id, encrypted_messages, created_at, updated_at
```

## Project Structure

```
~/github/sness23/m/
├── docs/                    ← All documentation (you are here)
├── packages/
│   └── shared/              ← Shared code used by all sites
│       ├── lib/
│       │   ├── db.ts        ← Prisma client, shared queries
│       │   ├── auth.ts      ← Auth utilities
│       │   ├── trust.ts     ← Trust score calculation
│       │   └── messaging.ts ← Cross-site messaging
│       ├── components/
│       │   ├── Header.tsx    ← Shared navigation/account menu
│       │   ├── MessageInbox.tsx
│       │   └── ProfileCard.tsx
│       └── types/
│           └── index.ts     ← Shared TypeScript types
├── apps/
│   ├── home/                ← sness.net — hub/landing page
│   │   └── (Next.js app)
│   ├── market/              ← market.sness.net
│   │   └── (Next.js app)
│   ├── village/             ← village.sness.net
│   │   └── (Next.js app)
│   ├── launch/              ← launch.sness.net
│   │   └── (Next.js app)
│   ├── restore/             ← restore.sness.net
│   │   └── (Next.js app)
│   └── safe/                ← safe.sness.net
│       └── (Next.js app)
├── prisma/
│   ├── schema.prisma        ← Database schema
│   └── migrations/          ← Migration history
├── nginx/
│   └── momconnect.conf      ← nginx subdomain routing config
├── ecosystem.config.js      ← pm2 configuration for all apps
├── package.json             ← Monorepo root (npm workspaces)
└── turbo.json               ← Turborepo config for builds
```

### Monorepo with npm Workspaces + Turborepo

All six apps + shared package live in one repo. Turborepo handles building/developing in parallel.

```json
// package.json (root)
{
  "workspaces": ["apps/*", "packages/*"],
  "devDependencies": {
    "turbo": "latest"
  }
}
```

```js
// ecosystem.config.js (pm2)
module.exports = {
  apps: [
    { name: 'home',    script: 'npm', args: 'start', cwd: './apps/home',    env: { PORT: 3000 } },
    { name: 'market',  script: 'npm', args: 'start', cwd: './apps/market',  env: { PORT: 3010 } },
    { name: 'village', script: 'npm', args: 'start', cwd: './apps/village', env: { PORT: 3020 } },
    { name: 'launch',  script: 'npm', args: 'start', cwd: './apps/launch',  env: { PORT: 3030 } },
    { name: 'restore', script: 'npm', args: 'start', cwd: './apps/restore', env: { PORT: 3040 } },
    { name: 'safe',    script: 'npm', args: 'start', cwd: './apps/safe',    env: { PORT: 3050 } },
  ]
};
```

## nginx Configuration

```nginx
# SSL wildcard cert for *.sness.net via Let's Encrypt
# certbot certonly --dns-... -d "*.sness.net" -d "sness.net"

# Hub / Landing
server {
    listen 443 ssl;
    server_name sness.net;
    location / { proxy_pass http://localhost:3000; }
}

# Market
server {
    listen 443 ssl;
    server_name market.sness.net;
    location / { proxy_pass http://localhost:3010; }
}

# Village
server {
    listen 443 ssl;
    server_name village.sness.net;
    location / { proxy_pass http://localhost:3020; }
}

# Launch
server {
    listen 443 ssl;
    server_name launch.sness.net;
    location / { proxy_pass http://localhost:3030; }
}

# Restore
server {
    listen 443 ssl;
    server_name restore.sness.net;
    location / { proxy_pass http://localhost:3040; }
}

# Safe Space
server {
    listen 443 ssl;
    server_name safe.sness.net;
    location / { proxy_pass http://localhost:3050; }
}
```

## Authentication (SSO Across Subdomains)

**How it works:** NextAuth.js with a shared cookie domain.

```
1. User signs up / logs in on any site (e.g., village.sness.net)
2. NextAuth creates a session cookie with domain=".sness.net"
3. Cookie is automatically sent to ALL subdomains (market, launch, etc.)
4. Each app reads the same session — user is logged in everywhere
```

**Key config:**
```ts
// packages/shared/lib/auth.ts
export const authOptions = {
  providers: [
    EmailProvider({ ... }),       // Email/password
    GoogleProvider({ ... }),      // Google sign-in
    AppleProvider({ ... }),       // Apple sign-in
  ],
  session: { strategy: "jwt" },
  cookies: {
    sessionToken: {
      name: "momconnect-session",
      options: {
        domain: ".sness.net",    // Shared across all subdomains
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      },
    },
  },
  adapter: PrismaAdapter(prisma), // Shared user database
};
```

**Safe Space exception:** Safe Space accepts the shared cookie (if present) but also works without it. Anonymous users get a temporary session stored only in their browser.

## AI Integration

Three AI-powered features, all using the OpenAI API:

### 1. Safe Space — Safety Planning Assistant
```
Model: GPT-4
System prompt: Carefully crafted, trauma-informed, with strict guardrails
  - Never advise confrontation
  - Always offer human hotline connection
  - Never minimize danger
  - Clear "I'm an AI" disclosure
Input: User's conversational messages
Output: Step-by-step safety planning guidance
Storage: Encrypted conversation logs (user-deletable)
```

### 2. Launch — Business Ideation Partner
```
Model: GPT-4
System prompt: Mom-entrepreneur-focused business advisor
Input: User's business ideas, questions, context
Output: Market analysis, first steps, business model suggestions
Storage: Conversation history (for continuity)
```

### 3. Market — Listing Assistant
```
Model: GPT-4 Vision
Input: Product photo
Output: Suggested title, description, category, price range
Storage: None (ephemeral)
```

**Cost control:** AI features are rate-limited per user (e.g., 20 AI conversations/month free, more with premium). Use GPT-3.5-turbo for simpler tasks (listing descriptions) and GPT-4 for complex tasks (safety planning).

## Payments (Market)

**Stripe Connect** for marketplace payments:

```
1. Seller creates a Stripe Connect account (onboarding flow)
2. Buyer pays through Stripe Checkout
3. Stripe holds funds
4. On delivery confirmation → Stripe releases funds to seller minus platform fee (5%)
5. For local pickup → buyer confirms pickup in app → funds released
```

This handles:
- Payment processing
- Seller payouts (direct to bank)
- Platform fee collection
- Dispute/refund handling
- Tax reporting (1099s for sellers)

## File Storage

### Phase 1 (Start here)
- Local disk on EC2 (`/data/uploads/`)
- Served through nginx (`static.sness.net`)
- Organized: `/data/uploads/{market|restore|safe|profiles}/`

### Phase 2 (When disk fills up)
- Migrate to AWS S3
- CloudFront CDN for fast delivery
- Same URLs, just change the backend

### File types:
| Site | Files | Size Estimate |
|------|-------|---------------|
| Market | Product photos (up to 8 per listing) | ~2MB per listing |
| Restore | Audio files (affirmations, meditations) | ~5-50MB per file |
| Restore | Video content | ~50-500MB per file |
| Safe Space | Evidence photos (encrypted) | ~2MB per entry |
| Profiles | Profile photos | ~500KB each |

## Security Considerations

### All Sites
- HTTPS everywhere (Let's Encrypt wildcard cert)
- CSRF protection (built into NextAuth)
- Rate limiting on all API endpoints
- Input sanitization (prevent XSS, SQL injection — Prisma handles SQL)
- Helmet.js security headers

### Safe Space (Extra Security)
- Database column encryption for sensitive fields (using pgcrypto or application-level)
- Client-side encryption for evidence journal (key derived from user's PIN, never sent to server)
- No server-side logs of Safe Space page views
- Separate database connection with restricted permissions
- Regular security audits (once platform is live)

### Passwords & Auth
- bcrypt password hashing
- JWT session tokens (short-lived, rotated)
- Rate limiting on login attempts
- Account lockout after failed attempts

## Scaling Path

The architecture is designed to start simple and scale:

| Stage | Users | Infrastructure |
|-------|-------|---------------|
| **Now** | 0-1,000 | Single EC2, PostgreSQL, local disk |
| **Growing** | 1,000-10,000 | Bigger EC2, S3 for files, RDS for Postgres |
| **Scaling** | 10,000-100,000 | Multiple EC2s behind ALB, Redis for sessions, CDN |
| **Big** | 100,000+ | Container orchestration (ECS/K8s), microservices, dedicated DB per schema |

For now, a single EC2 instance handles everything. The monorepo + pm2 approach means we can split services to separate machines later without rewriting code — just change the nginx routing.

## Development Workflow

```
Local development:
  npm run dev          ← Starts all 6 apps in parallel (Turborepo)
  npm run dev:market   ← Start just Market
  npm run dev:village  ← Start just Village

Database:
  npx prisma migrate dev    ← Apply migrations
  npx prisma studio         ← Visual database browser

Deployment (to EC2):
  git push                  ← Push to repo
  ssh ec2 "cd m && git pull && npm run build && pm2 restart all"
  (or set up a simple deploy script / GitHub Actions later)

Testing:
  npm run test              ← Run all tests
  npm run test:market       ← Test just Market
```

## Third-Party Services

| Service | Purpose | Cost |
|---------|---------|------|
| OpenAI API | AI features (safety planner, business ideation, listing assistant) | ~$0.01-0.10 per conversation |
| Stripe | Payments (Market) | 2.9% + $0.30 per transaction |
| Stripe Connect | Seller payouts | Included with Stripe |
| AWS SES or Resend | Transactional email | ~$0.10 per 1,000 emails |
| Let's Encrypt | SSL certificates | Free |
| PostgreSQL | Database | Free (self-hosted on EC2) |

## What We Don't Need Yet

Things that are often over-engineered at the start:

- **Redis** — PostgreSQL handles sessions and caching fine at this scale
- **Elasticsearch** — PostgreSQL full-text search is good enough to start
- **Kubernetes** — pm2 does the job
- **Microservices** — monorepo with shared code is simpler and faster to develop
- **CDN** — nginx serves static files fine for now
- **CI/CD pipeline** — manual deploy is fine until there's a team
- **Mobile apps** — responsive web first, native apps if demand warrants it
