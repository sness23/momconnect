# Feature Spec: Village (Community)

> Where moms find their people — locally and globally.

## Overview

Village is the social heart of MomConnect. It's where moms connect with other moms near them, organize events and playdates, and build the kind of "it takes a village" support network that modern life has eroded. Unlike Facebook Groups or Peanut, Village is structured around *doing things together*, not just chatting.

## User Stories

### As a local mom
- I want to **find moms near me** with kids the same age
- I want to **organize a playdate** without 47 text messages
- I want to **discover local events** (story time, mom meetups, kids' activities)
- I want to **create an event** and invite moms in my area
- I want to **find my "mom squad"** — 3-5 moms I can really count on

### As a traveling mom
- I want to **find kid-friendly spots** in a city I'm visiting
- I want to **connect with local moms** before I arrive
- I want to **find playdates for my kids** while on vacation

### As a relocating mom
- I want to **explore my new neighborhood** before I move
- I want to **connect with moms in my new area** ahead of time
- I want to **find schools, pediatricians, and activities** recommended by real moms
- I want to **arrive with friends already made**

### As any mom
- I want to **join interest groups** beyond just parenting (book clubs, fitness, crafts, faith)
- I want to **share recommendations** (best pediatrician, best pizza, best park)
- I want to **ask the village** (questions that only local moms can answer)

## Core Features

### F1: Mom Discovery & Matching
- **Profile-based matching** — kids' ages, interests, neighborhood, parenting style
- **"Moms near me" map** — see moms in your area (approximate location, not exact)
- **Compatibility indicators** — "Your kids are the same age" / "You both love hiking"
- **Connection requests** — not automatic matching. You choose who to reach out to.
- **Ice-breaker prompts** — "Ask her about the hiking trail she recommended"

### F2: Events & Playdates
- **Create an event** — date, time, location, age range, capacity
  - Playdate at the park
  - Mom's night out
  - Group activity (library story time, museum visit)
  - Recurring events (weekly park meetup)
- **RSVP system** — going / maybe / not going, with waitlist for full events
- **Event discovery** — browse events near you by date, type, kid age range
- **Auto-suggestions:** "3 moms near you have free Saturday mornings. Start a weekly park meetup?"
- **Post-event:** "How was it?" — quick rating helps improve future suggestions

### F3: Local Groups
- **Neighborhood groups** — auto-created based on location (zip code or neighborhood)
- **Interest groups** — user-created: book club, running group, faith group, homeschool co-op
- **Age-stage groups** — newborn moms, toddler moms, school-age moms, teen moms
- **Group features:** Discussion board, shared calendar, photo sharing, resource sharing
- **Moderation:** Group admins + platform-level moderation for safety

### F4: Local Recommendations ("The Village Knows")
- **Ask a question:** "Best pediatrician near downtown?" / "Where do you take a 3-year-old on a rainy day?"
- **Recommendation database:** Searchable, categorized, location-based
  - Pediatricians & doctors
  - Schools & daycares
  - Activities & classes
  - Restaurants (kid-friendly)
  - Parks & playgrounds
  - Services (babysitters, cleaners, tutors)
- **Mom-verified ratings** — not Yelp reviews, mom reviews (Does it have a changing table? Is the parking lot safe? Can you breastfeed comfortably?)
- **Save & share lists** — "My favorite parks in Austin"

### F5: Travel & Relocation Mode
- **Travel mode:** Set a destination and date range
  - See moms in that area open to meetups with visitors
  - Kid-friendly activity recommendations
  - "Visiting Austin next week — anyone want to meet at Zilker Park?"
- **Relocation mode:** Set a future home location
  - Start connecting with moms months before the move
  - Get school and neighborhood recommendations
  - Join local groups early
  - "Moving to Portland in August — tell me everything"

### F6: Village Feed
- **Neighborhood feed** — posts from moms near you
- **Group feeds** — posts from your groups
- **Event feed** — upcoming events you might like
- **Not algorithmic** — chronological within each feed, no engagement optimization
- **Post types:** Text, photo, question, recommendation, event, poll

## Safety & Moderation

- **Verified profiles** — real identity verification (shared platform feature)
- **Report & block** — immediate removal of reported content pending review
- **No men** — platform is for mothers and women (policy to discuss with client)
- **Location privacy** — approximate location only; exact address never shared except for specific events
- **Child photo policy** — clear guidelines on sharing children's photos; respect other parents' preferences
- **Background checks** — consider optional background check verification for event organizers (Phase 3)

## Connection to Other Sites

- **→ Market:** "One of the moms in your group just listed homemade jam. Check it out."
- **→ Launch:** "3 entrepreneurs in your neighborhood — join the local business meetup."
- **→ Restore:** "Feeling overwhelmed? Your Village is here, and so is Restore."
- **→ Safe Space:** Subtle, private connections for moms who need help (never public)

## MVP vs. Full Version

### MVP
- Mom discovery by location and kids' ages
- Event/playdate creation and RSVP
- Neighborhood groups (auto-created by zip code)
- Basic messaging
- Local feed (chronological posts)

### Phase 2
- Interest groups (user-created)
- Local recommendations database
- Travel mode
- Enhanced matching (interests, parenting style)
- Photo sharing in groups

### Phase 3
- Relocation mode
- Village Knows (Q&A recommendation engine)
- Recurring events and group calendars
- Background check verification option
- Integration with local event APIs (library events, community centers)

## Revenue Model
- **Free:** All core features (discovery, events, groups, feed)
- **Premium ($4.99/month):** Travel mode, relocation mode, advanced matching, promoted events
- **Local business partnerships:** Local businesses can sponsor events or appear in recommendations (clearly labeled)

## Key Metrics
- Monthly active moms
- Events created per week
- Event attendance rate (RSVPs → actual attendees)
- Connections made (message exchanges after matching)
- Recommendation contributions
- Group activity (posts per group per week)
- Retention (% returning within 7 days)
