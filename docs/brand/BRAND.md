# Bliss Technology — Brand Guidelines

**Money, in motion.** Bliss Technology moves money across borders for people and businesses. It should feel as safe as a bank vault and as quick as a message. Every part of this system does both: **navy** says *you can trust this*, **mint** says *it's already moving*.

## Files in this folder

| Path | What |
| --- | --- |
| `logos/` | Outlined SVG logos (no fonts needed): lockups, corporate lockups, mark, mono mark, app icon |
| `fonts/` | Sora 600/700, Inter 400/500/600, JetBrains Mono 500 (woff2, SIL Open Font License) |
| `tokens.json` | Source of truth for colours (light + dark), type scale, spacing, radius, shadow |
| `tokens.css` | Ready-to-import CSS variables + `@font-face` rules; dark mode via `data-theme="dark"` or system setting |
| `components.css` | Reference styles for Button (`bl-btn`), Badge (`bl-badge`) and BalanceCard (`bl-card`) |

### Quick start

```html
<link rel="stylesheet" href="/brand/tokens.css">
<link rel="stylesheet" href="/brand/components.css">

<img src="/brand/logos/bliss-lockup.svg" alt="Bliss" height="32">
<button class="bl-btn bl-btn-primary">Send money</button>
<span class="bl-badge bl-badge-sent">Sent</span>
```

## The brand idea

Three feelings, in this order of priority:

1. **Trust.** We hold people's money. Nothing about Bliss is flashy, loose or uncertain: steady navy, plain numbers, honest fees shown up front.
2. **Speed.** Money arrives in seconds. The design shows that with a forward lean, quick motion and short sentences, not with neon or lightning bolts.
3. **Money, everywhere.** We work in 160+ countries and dozens of currencies. The system is calm, works in any language and any market, and avoids local clichés.

When two of these pull against each other, **trust wins**. A slower, clearer screen beats a fast, confusing one.

## The logo

![Bliss lockup](./logos/bliss-lockup.svg)

### The mark

The mark is a **B** made of two rounded blocks, one stacked on the other:

- **The upper block (navy) is the vault.** It stands for security, regulation and the people who look after your money.
- **The lower block (mint) is money in motion.** It's wider and sits underneath as the base, because money is what everything rests on.
- **The speed cut** is the thin gap between the blocks, 4 units on a 64-unit grid. It's the trail money leaves when it moves.
- **The forward lean:** the upper block starts 4 units to the right of the lower one. The mark steps forward, like a stack of cards being dealt or a coin sliding across a counter.

Read together, the blocks are a B, two stacked coins and a progress bar in motion. The mark is simple enough to hold up at 16px.

### Lockups

| Asset | Use |
| --- | --- |
| `bliss-lockup.svg` | **Primary.** Mark + "bliss". Product, app headers, most marketing. |
| `bliss-technology-lockup.svg` | Corporate: legal documents, investor material, partnerships, office signage. |
| `*-reversed.svg` | On navy or on photography darker than 50%. |
| `bliss-mark.svg` | Social avatars, favicons, and anywhere the name already appears nearby. |
| `bliss-app-icon.svg` | App stores and home screens: the reversed mark on a navy squircle. |
| `bliss-mark-mono.svg` | One-colour printing: embossing, card stamping, fax and receipts. |

The wordmark is set in **Sora SemiBold**, lowercase, with tracking −2%. Lowercase feels approachable; the geometric letterforms keep it precise. Always use the outlined SVGs and never re-type the logo.

### Clear space and size

- **Clear space:** keep space around the logo equal to the height of the mark's lower block (that's 20 of the mark's 44 units, a little under half its height) on every side.
- **Minimum size:** the mark at 16px on screen and 6mm in print. The primary lockup at 72px wide on screen and 20mm in print. Below that size, use the mark alone.

### Never

- Recolour the two blocks, swap their colours or make both mint. (Mono, with both blocks in one ink, is the only exception.)
- Close the speed cut, or put the blocks flush with each other. The forward lean *is* the motion.
- Rotate the mark, put it in italics, add a gradient or a drop shadow, or put it in a circle.
- Put the primary (navy) lockup on navy or on a busy photo. Use the reversed lockup.
- Write "Bliss Tech", "BLISS" or "BlissTechnology". In copy, it's **Bliss** on first and every later mention; the legal name **Bliss Technology** goes in footers and contracts.

## Colour

| Token | Light | Role |
| --- | --- | --- |
| `navy` | #0B1F3A | Trust. Brand fills, hero bands, the app icon. |
| `mint` | #00C389 | Money in motion. The primary action and progress. A fill only. |
| `mint-text` | #007A55 | Mint for text and icons (5:1 on white). |
| `surface` / `surface-raised` | #F6F8FB / #FFFFFF | Calm ground. |
| `mist` | #E6EEF8 | Relief tint for quiet panels. |
| `pending`, `danger` | amber, red | States only. They never decorate. |

**Proportion: 60 · 25 · 10 · 5.** 60% surfaces, 25% navy (text counts), 10% mint, 5% state colours. Mint is precious: if everything is mint, nothing is moving. Use **one mint primary action per screen**.

**Money states:** **sent/received = mint**, **pending = amber**, **failed = red**. Never use colour alone: every state also carries a word ("Sent", "Pending", "Failed") or an icon. Amber and red also differ from mint in lightness, so people with colour-blindness can still tell them apart.

**Dark theme:** in dark, `navy` stays the brand navy for logo fills and hero bands. Text uses `ink`, which turns near-white, and mint gets lighter (`#2EE6A6`) so it keeps its glow.

## Typography

- **Sora** (`--font-display`): headlines, the wordmark and **amounts**. It's geometric with open curves: modern, and it has a technical feel without coming across as cold.
- **Inter** (`--font-sans`): all interface text and reading. It stays neutral and legible at any size and supports almost every Latin and Cyrillic market.
- **JetBrains Mono** (`--font-mono`): reference numbers, IBANs and transaction IDs, so a customer can read them back to support without confusing 0/O or 1/l.

Rules for numbers (they're the product):
- Always use tabular figures (`font-variant-numeric: tabular-nums`) for amounts, so columns line up.
- Put the currency code next to the symbol whenever more than one currency is on screen: **$1,240.00 USD → €1,138.52 EUR**.
- Always show the fee and the rate before the confirm button, never after it.
- Format numbers in the user's locale (1,240.00 / 1.240,00 / 1 240,00).

## Shape, space and depth

- **Grid:** 4px base (`space-1`). The speed cut in the logo is the same 4-unit idea.
- **Radius:** `radius-md` (10px) for controls and `radius-lg` (16px) for cards, which echoes the rounded ends of the mark. Avoid sharp 0px corners (they feel cold) and full circles on large shapes (they feel toy-like).
- **Depth:** one soft shadow (`shadow-card`). Hierarchy comes from surface vs. raised and from hairlines, not from stacked shadows.

## Iconography

- Outline icons on a 24px grid with a **1.75px stroke**, round caps and joins, and 2px corner radii.
- Directional icons (send, transfer, arrows) **lean forward to the right, never left**. "Send" is an arrow going up and to the right, never a paper plane.
- Icons are `ink` by default, and `mint-text` only when they show a completed positive action.
- No emoji in product UI. Flags appear only next to currency codes, at 16 or 20px, with rounded corners.

## Graphic language

- **The speed band:** horizontal blocks cut by 4-unit gaps, staggered so each row starts a step further right, as if they were moving left to right. It's the core supporting graphic for hero areas, cards and slides. It's drawn from the mark's own geometry, so it always feels like Bliss.
- **The dot globe:** world maps are drawn as a grid of dots (on the 8px grid), with mint dots for markets where we operate. Use it for "global" moments, never photo-realistic globes.
- **Photography:** real people using money in real places (a market stall in Lagos, a studio in Lisbon, a family dinner in Manila). Natural light, no stock handshakes, no piles of cash, no coins raining down.

## Motion

Fast in, gentle settle. **160ms** for small UI, **240ms** for sheets and screens, eased with `cubic-bezier(0.2, 0.8, 0.2, 1)`. Elements enter from the left and move right, the same direction as the mark. Money confirmations get one calm fill animation (the mint block slides under the navy one), never confetti or a bounce. Respect reduced-motion settings.

## Components

- **Button:** the primary action is mint with navy text, once per screen. Secondary is outlined `ink`.
- **Badge:** the status of a payment, as a word plus colour.
- **Balance card:** the hero object. The amount in Sora, the currency code beside it, a mono account reference below.


## Brand Language

How Bliss sounds. The design shows that we're safe and fast; the words need to say the same thing.

### Positioning

**For** people and businesses who move money across borders, **Bliss** is the global money platform that makes international payments **as instant as a message and as safe as a bank**. Unlike traditional banks, we show the real rate and every fee before you send, and most transfers arrive in seconds.

**Promise:** *Your money arrives. On time, in full, with nothing hidden.*

### Taglines

- **Primary:** Money, in motion.
- **Trust-led:** Fast is easy. Safe is the work.
- **Global:** One account. Every border.
- **Product:** Sent in seconds. Seen to the cent.

### Voice: four traits

| We are | Which means | We're not |
| --- | --- | --- |
| **Assured** | We state facts plainly and back them up: rates, fees, times, regulators. | Boastful or salesy. No "revolutionary", no "best-in-class". |
| **Quick** | Short sentences and the verb first. Put the answer first and the detail after. | Abrupt or cold. Being quick still means being kind. |
| **Clear** | Everyday words with numbers that add up. If something needs a footnote, we rewrite it. | Jargon-heavy. We don't say "remittance corridor" or "FX spread" to customers. |
| **Human, everywhere** | Warm, respectful and easy to translate. We write for a reader in Dubai, Nairobi or São Paulo. | Slangy, full of idioms or US-centric. |

### Tone by moment

Our voice stays the same; our tone changes with the moment.

| Moment | Tone | Example |
| --- | --- | --- |
| Onboarding | Welcoming, brief | "Let's get you set up. It takes about 3 minutes." |
| Before sending | Precise, transparent | "You send $500.00 USD. Fee $2.40. Amara gets €458.31 EUR. Rate locked for 30 min." |
| Sent | Calm confidence | "Sent. Amara will have it in seconds." |
| Pending / delay | Honest, specific | "This one's taking longer. Her bank is reviewing it, which usually takes under 2 hours. We'll message you the moment it lands." |
| Failure | Accountable, with a way forward | "We couldn't send this. Your $500.00 is back in your account. Check the IBAN, or try a different account." |
| Security | Serious, direct | "We noticed a sign-in from a new device in Berlin. Wasn't you? Lock your account now." |

### Writing rules

1. **Lead with the outcome.** Write "Arrives in seconds", not "Our proprietary network enables rapid settlement".
2. **Numbers beat adjectives.** Write "Fee $2.40", not "low fees". Write "160+ countries", not "worldwide reach".
3. **Show the money in full.** Use the amount, the currency code and the recipient's name, and never round in a confirmation.
4. **Sentence case** everywhere, including buttons and headings. Buttons start with a verb: "Send money", "Add account", "Lock card".
5. **Use "you" and "we".** Say "We're checking this", not "Your transaction is being processed".
6. **Never blame the customer.** Say "That code didn't match", not "You entered an invalid code".
7. **No false urgency.** We never say "Act now!" about money. The only urgent messages are about security.
8. **Write for translation.** No idioms, puns or sports metaphors. Keep sentences under 20 words.

### Word list

| Say | Avoid |
| --- | --- |
| send, receive, move money | remit, disburse, transmit |
| fee | charge, commission, cost of service |
| rate | FX spread, mid-market margin |
| arrives in seconds | instant* (unless it's guaranteed) |
| protected, secured, regulated | 100% safe, risk-free, bulletproof |
| account | wallet (unless it really is a wallet product) |
| we couldn't | error, failure, invalid |
| Bliss | Bliss Tech, BLISS, the Bliss app |

### Boilerplate

**Short (25 words):** Bliss Technology moves money across borders for people and businesses in 160+ countries: fast, transparent and regulated in every market where we operate.

**Long (60 words):** Bliss Technology is a global fintech company that makes moving money as simple as sending a message. People and businesses use Bliss to send, receive and hold money in dozens of currencies, with the real exchange rate and every fee shown up front. Most transfers arrive in seconds. Bliss is regulated in every market where it operates.
