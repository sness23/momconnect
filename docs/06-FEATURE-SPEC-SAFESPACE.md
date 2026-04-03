# Feature Spec: Safe Space (DV Resources & Support)

> A private, secure space for women in dangerous situations to find resources, make plans, and begin healing.

## Overview

Safe Space is the most sensitive and important part of the MomConnect platform. It connects women experiencing domestic violence to resources, provides AI-assisted safety planning, and creates a bridge to independence. **Every design decision must prioritize user safety above all else.**

## Critical Safety Requirements

These are non-negotiable and must be present from day one:

### S1: Quick Exit
- **Panic button** visible on every page — one tap redirects to a benign website (Google, weather, news)
- **Keyboard shortcut** (Escape key on desktop) for instant exit
- **Browser history** — provide instructions for clearing history, or use techniques that minimize history traces
- **App disguise option** — if native app, allow icon/name to appear as something innocuous (e.g., "Daily Planner")

### S2: No Digital Trail
- **No push notifications** by default from Safe Space (abuser may see phone notifications)
- **Opt-in notifications** only, with disguised content ("Your daily tip is ready" not "DV resource update")
- **No email receipts** unless explicitly requested
- **Session data** — option to not save any session data locally
- **Incognito guidance** — prompt user to use private/incognito browsing if detected as regular browsing

### S3: Anonymous Access
- Safe Space **must be usable without a MomConnect account**
- Optional anonymous mode — no login required for resources and hotline connections
- If logged in, Safe Space activity is **never visible** on the cross-platform feed or profile
- **Separate PIN/password** option for Safe Space (in case abuser knows the MomConnect password)

### S4: Data Security
- **End-to-end encryption** for all Safe Space data (journals, plans, messages)
- **Remote wipe** — ability to delete all Safe Space data remotely (if phone is taken)
- **No data sharing** between Safe Space and other MomConnect sites (except explicit opt-in)
- **Server-side encryption at rest** for all stored data
- **Audit log** — but only accessible to the user, not platform admins

## User Stories

### As a woman in an unsafe situation
- I want to **access resources quickly and secretly** without my partner knowing
- I want to **find local shelters, hotlines, and legal aid** near me
- I want to **talk to an AI that helps me make a safety plan** step by step
- I want to **store evidence securely** (photos of injuries, screenshots of threats) that my partner can't find
- I want to **know I'm not alone** and that there is a way out
- I want to **plan my financial independence** so I can leave safely

### As a woman who has left
- I want to **find ongoing support** (counseling, support groups, legal help)
- I want to **connect to entrepreneurship resources** when I'm ready (bridge to Launch)
- I want to **help other women** by sharing my story (optional, anonymous)

### As a concerned friend/family member
- I want to **find resources to help someone I care about**
- I want to **understand warning signs** of abuse
- I want to **know what to say and not say** to someone in a DV situation

## Core Features

### F1: Resource Finder
- **Geo-located resources** — enter a zip code (not GPS, to avoid location tracking fears) to find:
  - DV shelters with availability
  - Legal aid organizations
  - Counseling services
  - Support groups
  - Financial assistance programs
- **National hotlines** — prominently displayed:
  - National DV Hotline: 1-800-799-7233
  - Crisis Text Line: Text HOME to 741741
  - National Sexual Assault Hotline: 1-800-656-4673
- **Filter by:** Type of help, language, accepts children, pet-friendly shelters
- **Direct connection** — tap to call or text hotlines directly from the app

### F2: AI Safety Planning Assistant
- **Conversational interface** — not a form. The AI asks questions one at a time in a supportive, non-judgmental way.
- **Personalized safety plan** covering:
  - Emergency escape route (where to go, what to bring)
  - Important documents to gather (ID, birth certificates, financial records)
  - Emergency bag preparation
  - Safe communication methods
  - Financial preparation (separate account, emergency fund)
  - Children's safety considerations
  - Pet safety (many women stay because of pets)
  - Technology safety (checking for tracking apps, shared accounts)
- **AI boundaries — the AI must NEVER:**
  - Advise confronting the abuser
  - Minimize the danger ("it might not be that bad")
  - Suggest couples counseling (inappropriate for DV)
  - Make promises about outcomes
  - Replace professional crisis counseling
- **AI must ALWAYS:**
  - Validate the user's experience
  - Emphasize that abuse is never the victim's fault
  - Offer to connect to a human (hotline) at any point
  - Be clear about its limitations as an AI
  - Default to safety over convenience

### F3: Secure Evidence Journal
- **Encrypted photo storage** — photograph injuries, damaged property, threatening messages
- **Timestamped entries** — automatic date/time stamps (useful for legal proceedings)
- **Text journal** — document incidents with date, time, what happened, witnesses
- **Hidden storage** — evidence is encrypted and stored server-side, not on the local device
- **Export for legal** — generate a PDF report for lawyers or law enforcement (user-initiated only)
- **Auto-delete option** — set evidence to auto-delete if not accessed within X days (safety feature if abuser gains access to account)

### F4: Safety Check-In
- **Scheduled check-ins** — "Check on me at 3pm. If I don't respond, text [trusted contact]"
- **Trusted contacts** — designate 1-3 people who can be alerted
- **Discreet alerts** — if the user misses a check-in, the trusted contact receives a pre-written message
- **Customizable** — user writes the alert message themselves

### F5: Educational Content
- **Recognizing abuse** — types of abuse (physical, emotional, financial, digital)
- **Safety planning guides** — written and audio versions
- **Legal rights** — state-by-state guide to protection orders, custody basics
- **Financial independence** — basics of separating finances, opening accounts
- **Technology safety** — how to check for spyware, secure your accounts, use a safe device
- **For friends & family** — how to support someone in a DV situation
- **Boundary-setting guides** — (bridges to Restore content)

### F6: Bridge to Independence
- **When the user is ready**, gentle connections to:
  - **Launch** — entrepreneurship and career resources
  - **Market** — start selling, earn income
  - **Village** — find community and support
  - **Restore** — healing and wellness resources
- **Never pushed** — these connections are always opt-in, never automatic
- **"I'm ready" moment** — let the user self-identify when they want to explore other resources

## Content Partnerships (Critical)

Safe Space should NOT create its own DV expertise. It should partner with:
- **National Domestic Violence Hotline** (thehotline.org)
- **National Network to End Domestic Violence** (NNEDV) — especially their Safety Net project on technology safety
- **Local DV organizations** — for resource directories
- **Legal aid societies** — for legal information
- **Licensed counselors** — for any advice-adjacent content review

All content should be reviewed by DV professionals before publication.

## MVP vs. Full Version

### MVP (Launch with this)
- Resource finder (hotlines + shelter directory)
- Quick exit button
- Anonymous access (no account required)
- Basic safety planning guide (static content, not AI)
- Educational content on recognizing abuse
- Links to national hotlines

### Phase 2
- AI safety planning assistant
- Secure evidence journal
- Safety check-in feature
- Technology safety tools
- Legal rights guide (state-by-state)

### Phase 3
- Bridge to independence (connections to Launch, Market, Village)
- Support groups (moderated, anonymous)
- Story sharing (anonymous)
- Friend/family resources
- Multilingual support

## Legal Considerations

- **Mandatory reporting:** In some states, certain professionals are mandatory reporters of abuse. The platform must be clear about its obligations and limitations.
- **Liability:** The AI safety planner must include clear disclaimers. Legal review is essential.
- **VAWA compliance:** Ensure compliance with the Violence Against Women Act provisions on confidentiality.
- **Data subpoena risk:** If law enforcement subpoenas platform data, what is disclosed? End-to-end encryption protects users but has legal implications.
- **Terms of service:** Must be clear that Safe Space is a resource connector, not a crisis service.

## Key Metrics
- Number of resource lookups
- Hotline connections made
- Safety plans created
- Check-ins set up
- Evidence entries stored
- Time on site (careful — longer isn't always better here; efficiency matters)
- Bridge to independence clicks (users moving to other MomConnect sites)

## Ethical Guidelines

1. **We are not a crisis service.** We connect to crisis services.
2. **We do not replace professionals.** We make professionals more accessible.
3. **We never blame the victim.** Language review on all content.
4. **We prioritize safety over engagement.** We don't want "high engagement" on Safe Space — we want effective, efficient help.
5. **We earn trust through privacy.** If we ever break trust on data privacy, the platform is done.
