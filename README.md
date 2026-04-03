<p align="center">
  <img src="https://img.shields.io/badge/Made%20by-Moms%20💜-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/For-Moms%20🌸-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-In%20Progress%20🚧-orange?style=for-the-badge" />
</p>

<h1 align="center">✨ MomConnect ✨</h1>

<h3 align="center">
  One account. One identity. Five connected spaces. 💛<br/>
  <em>The everything platform actually built for us.</em>
</h3>

<p align="center">
  🛍️ Sell your stuff &nbsp;·&nbsp; 🏘️ Find your village &nbsp;·&nbsp; 🚀 Start your business &nbsp;·&nbsp; 🧘 Heal your soul &nbsp;·&nbsp; 🛡️ Stay safe
</p>

<p align="center">
  <a href="https://sness.net">🌐 sness.net</a>
</p>

---

## 💜 What is MomConnect?

We're tired of being scattered across 47 different apps just to live our lives. Marketplace here, mom group there, wellness app over there, none of them talk to each other, and **none of them were built for us.**

MomConnect is **five beautifully connected websites** that actually get it — whether you're selling handmade baby clothes at 2am, looking for a mom friend who gets it, building a business around nap schedules, healing from stuff nobody talks about, or finding safety when you need it most.

**One login. All of it. Finally.** 🎉

---

## 🗺️ The Five Spaces

### 🛍️ MARKET — `market.sness.net`
> *Your shop is open, babe.*

Sell your crafts, baked goods, kids' clothes, and services to moms who actually want them. Think Etsy meets local mom group — but with **lower fees (5%)**, AI that writes your listing descriptions from a photo 📸, trust scores so you know who you're buying from, and safe local meetup coordination.

**✨ Features:** AI-powered listings · Local + online selling · Stripe payments · Seller dashboard · Mom-to-mom messaging · Trust scores

---

### 🏘️ VILLAGE — `village.sness.net`
> *Find your people. For real this time.*

No algorithms deciding what you see. Just real moms near you, organized by your kids' ages, your interests, your neighborhood. Plan playdates 🎈, find that pediatrician everyone loves, join a book club, or just find someone who gets the 3pm witching hour.

**✨ Features:** Mom matching · Playdates & events · Neighborhood groups · Local recommendations · Travel mode 🧳 · Relocation mode · Chronological feed (no algorithms!)

---

### 🚀 LAUNCH — `launch.sness.net`
> *Your business doesn't need to wait until the kids are older.*

Got an idea? An AI business partner helps you figure out if it's viable. Learn in **5-15 minute micro-lessons** designed for interrupted schedules (because LOL at uninterrupted anything). Get matched with a mentor who's been there. Find grants. Collaborate with other mom entrepreneurs. Go from idea → first sale → thriving business.

**✨ Features:** AI business ideation 🤖 · Micro-courses · Mentor matching · Grant finder 💰 · Collaboration board · Job & gig board · Direct path to Market

---

### 🧘 RESTORE — `restore.sness.net`
> *Not "good vibes only." Real healing for real life.*

This isn't generic wellness content from someone who's never been through it. Guided meditations, affirmations, breathwork, prayers, reiki, journaling — organized by how you're actually feeling right now: *"I'm overwhelmed" · "I can't sleep" · "I feel like a bad mom" · "I'm healing from trauma"*

No toxic positivity. Just honest, diverse, real. 🕯️

**✨ Features:** "Right Now" mood picker · Daily practice builder · Guided healing series · Journaling (encrypted 🔒) · Community sharing circles · Founder's Corner with live Q&As · Multi-tradition spiritual content

---

### 🛡️ SAFE SPACE — `safe.sness.net`
> *You're not alone. And you don't need an account to be here.*

Private, secure resources for women in unsafe situations. Instant access to hotlines, shelters, legal aid, and an AI-powered safety planning assistant — all with **quick-exit buttons, no push notifications, end-to-end encryption, and anonymous access.**

Your safety is non-negotiable. 💪

**✨ Features:** Quick exit button (every page) ⚡ · Anonymous access · Encrypted evidence journal · AI safety planning · Shelter & legal aid finder · Safety check-ins · Technology safety guides · Bridge to independence

> 📞 **National DV Hotline: 1-800-799-7233** · Text START to 88788

---

## 🔗 Everything Connects

The magic is how it all works together ✨

| Feature | What it means for you |
|---|---|
| 🔐 **Single Sign-On** | One account across all five sites |
| 👤 **Unified Profile** | Your info follows you (but you control visibility per site) |
| ⭐ **Trust Score** | Your reputation builds across Market, Village, and Launch |
| 💬 **Cross-Site Messaging** | Message any mom from any space |
| 🔔 **Notification Center** | Everything in one place, with granular controls |
| 🏠 **Home Dashboard** | Your personalized hub at sness.net |
| 🚫 **Universal Block List** | Block once, blocked everywhere |

---

## 🏗️ Tech Stack

```
📦 Turborepo Monorepo
├── 🖥️  Next.js + React + Tailwind CSS
├── 🔑  NextAuth.js (SSO across subdomains)
├── 🗄️  PostgreSQL + Prisma ORM
├── 💳  Stripe & Stripe Connect
├── 🤖  OpenAI API (GPT-4)
├── 🌐  Nginx reverse proxy
└── 🚀  EC2 + pm2
```

---

## 📂 Project Structure

```
momconnect/
├── 📱 apps/
│   ├── home/        🏠 Main dashboard (sness.net)
│   ├── market/      🛍️ Marketplace
│   ├── village/     🏘️ Community
│   ├── launch/      🚀 Entrepreneurship
│   ├── restore/     🧘 Healing & wellness
│   └── safe/        🛡️ Safe Space
├── 📦 packages/
│   └── shared/      🔗 Shared components, auth, types
├── 🗄️ prisma/        Database schema
├── 🌐 nginx/         Reverse proxy config
└── 📚 docs/          Design docs & specs
```

---

## 🚀 Getting Started

```bash
# Clone it
git clone https://github.com/sness23/m.git
cd m

# Install dependencies
npm install

# Set up your environment
cp .env.example .env
# Edit .env with your database URL, API keys, etc.

# Push the database schema
npm run db:push

# Run everything 🎉
npm run dev

# Or run a specific app
npm run dev:village    # 🏘️
npm run dev:market     # 🛍️
npm run dev:launch     # 🚀
npm run dev:restore    # 🧘
npm run dev:safe       # 🛡️
```

---

## 🗓️ Build Roadmap

We're building this one space at a time, because Rome wasn't built in a day and neither is a platform that actually serves moms. 😤

| Phase | Space | Why this order |
|---|---|---|
| 0️⃣ | 🔐 Foundation | Auth, infrastructure, landing page |
| 1️⃣ | 🏘️ Village | Community first — people are the platform |
| 2️⃣ | 🧘 Restore | Healing content drives engagement & differentiates us |
| 3️⃣ | 🛍️ Market | Monetization begins — moms selling to moms |
| 4️⃣ | 🚀 Launch | Empowering mom entrepreneurs |
| 5️⃣ | 🛡️ Safe Space | Most sensitive — needs legal & security review |
| 6️⃣ | ✨ Polish | Cross-site magic, growth, and vibes |

---

## 💡 Why This Exists

Because moms deserve a platform that:

- 🙋‍♀️ Was **actually designed for our lives** (interrupted schedules, 2am scrolling, one-handed phone use)
- 🤝 Treats us as **whole people** — not just consumers, not just caregivers
- 🔒 Takes our **privacy and safety** dead seriously
- 🌍 Represents **all of us** — every race, culture, background, tradition, tax bracket
- 💪 Helps us **build wealth**, not just spend money
- 🚫 Doesn't sell our data or manipulate us with algorithms
- 💜 Gets that motherhood is **beautiful AND brutal** — no toxic positivity allowed

---

<p align="center">
  <strong>Built with 💜 by moms, for moms.</strong><br/>
  <em>Because we deserve better than "there's an app for that" × 47.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/💜-MomConnect-blueviolet?style=for-the-badge" />
</p>
