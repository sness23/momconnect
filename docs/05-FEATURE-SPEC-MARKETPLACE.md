# Feature Spec: Market (Marketplace)

> Where moms buy, sell, trade, and support each other's businesses.

## Overview

Market is a mom-focused marketplace for local and shipped goods and services. It combines the local trust of a neighborhood exchange with the reach of an online marketplace, powered by the MomConnect trust system.

## User Stories

### As a Seller
- I want to **list an item quickly** (photo + price + description, under 2 minutes)
- I want to **reach moms near me** for local pickup items (baked goods, clothes)
- I want to **ship items** to moms further away (crafts, handmade goods)
- I want to **offer services** (photography, tutoring, bookkeeping, childcare)
- I want to **see my sales dashboard** (what's selling, revenue, reviews)
- I want to **connect my Market shop to my Launch profile** so buyers see I'm a real entrepreneur
- I want to **get paid easily** (integrated payments, not "Venmo me")

### As a Buyer
- I want to **browse by category** (kids' clothes by size, baked goods, crafts, services)
- I want to **filter by location** (within 5/10/25 miles for local pickup)
- I want to **see seller trust scores** (from reviews across MomConnect)
- I want to **message a seller** before buying (questions, custom orders)
- I want to **pay securely** (not cash-in-a-parking-lot)
- I want to **leave a review** that helps other moms
- I want to **save favorites** and get alerts when similar items are listed

## Core Features

### F1: Listing Creation
- **Photo upload** — take a photo or upload from gallery (up to 8 photos)
- **AI-assisted description** — take a photo, AI suggests category, title, description, and price based on similar items
- **Categories:**
  - Kids' Clothing (filterable by size, age, gender, season)
  - Women's Clothing
  - Handmade & Crafts
  - Baked Goods & Food (requires local pickup, food safety notice)
  - Home & Baby Gear
  - Business Services (links to Launch profile)
  - Other
- **Pricing:** Set price, "make an offer," free, or trade
- **Fulfillment:** Local pickup, shipping, or both
- **Visibility:** My neighborhood, my city, my state, nationwide

### F2: Discovery & Search
- **Location-based feed** — default view shows items near you
- **Category browsing** — drill down by category and filters
- **Search** — keyword search with filters (price range, distance, condition)
- **Recommended for you** — based on past purchases, saved items, kids' ages
- **New from moms you follow** — see listings from moms you're connected with on Village

### F3: Trust & Safety
- **Seller trust score** — aggregated from Market reviews + MomConnect-wide reputation
- **Verified profile badge** — identity-verified through the shared platform
- **Purchase protection** — for shipped items, hold payment until buyer confirms receipt
- **Report & block** — flag suspicious listings or users
- **Public meetup spots** — suggest safe, public locations for local exchanges (police station parking lots, library lobbies)

### F4: Payments
- **Integrated checkout** — credit/debit card, Apple Pay, Google Pay
- **Seller payouts** — direct deposit to bank account (weekly or on-demand)
- **Transaction fee** — platform takes a small percentage (suggest 5%, lower than Etsy's 6.5%)
- **No listing fees** — free to list (differentiator from Etsy)
- **Invoicing for services** — sellers offering services can send invoices through the platform

### F5: Messaging
- **In-app messaging** — tied to a listing (keeps context)
- **Quick responses** — "Is this still available?" / "Yes!" templates
- **Meetup scheduling** — suggest a time and place for local pickup (integrates with safe meetup spots)
- **Cross-platform** — messages appear in the shared MomConnect message center

### F6: Seller Dashboard
- **Active listings** — manage, edit, mark as sold
- **Sales history** — past sales, revenue tracking
- **Reviews** — see and respond to reviews
- **Analytics** — views, favorites, conversion rate
- **Promote to Launch** — "Ready to turn this into a real business? Visit Launch."

## Categories Deep Dive

### Kids' Clothing (Unique Opportunity)
The client specifically mentioned this. Key features:
- **Size/age filter** — browse by clothing size OR by child's age
- **Bundle deals** — "All my 3T clothes for $25"
- **Seasonal collections** — "Winter coats, size 4-6"
- **Condition ratings** — New with tags / Like new / Good / Play clothes
- **Photo standards** — guide sellers to photograph flat-lay with size reference

### Baked Goods & Food (Unique Opportunity)
- **Local only** — no shipping for food items
- **Cottage food law notice** — inform sellers of their state's cottage food regulations
- **Order ahead** — buyers can place orders for future pickup
- **Recurring orders** — "I want a dozen cookies every Friday"
- **Allergen tags** — nut-free, gluten-free, dairy-free, etc.

## MVP vs. Full Version

### MVP (Launch with this)
- Listing creation (photo, description, price, category)
- Location-based browsing and search
- In-app messaging
- Basic profiles with reviews
- Local pickup coordination
- Simple payment integration (Stripe)

### Phase 2
- Shipping integration
- AI-assisted listing creation
- Seller dashboard with analytics
- Bundle deals
- Recurring orders for food
- Trust scores from cross-platform activity

### Phase 3
- Services marketplace
- Invoicing
- Promoted listings (paid feature)
- Integration with Launch (business tools)
- Seasonal/trending collections curated by the platform

## Revenue Model
- **Transaction fee:** 5% on completed sales (lower than competitors)
- **No listing fees** (differentiator)
- **Promoted listings:** Sellers pay to boost visibility (Phase 3)
- **Premium seller tools:** Advanced analytics, bulk listing tools (subscription)

## Key Metrics
- Number of active listings
- Number of completed transactions
- Seller retention (% who list again within 30 days)
- Buyer retention (% who purchase again within 30 days)
- Average transaction value
- Time from listing to sale
- Trust score distribution
