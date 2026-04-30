# Chasing Homestays — Website

Next.js 14 + Tailwind website with per-property Hospitable booking widgets.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

---

## 📁 Project Structure

```
app/
  data/
    properties.ts             ⭐ EDIT THIS to add/remove properties
  layout.tsx                  Root layout
  page.tsx                    Home page
  globals.css
  homeowners/page.tsx         For homeowners
  contact/page.tsx            Contact form
  properties/
    page.tsx                  Listing of all properties
    [slug]/page.tsx           Per-property page (auto-generated from data)
  components/
    Nav.tsx
    Footer.tsx
    HospitableWidget.tsx      Per-property iframe embed
    PropertyCard.tsx
  api/
    listings/route.ts         Stub for Phase 2 (Hospitable API)
```

---

## 🏠 Adding / Editing Properties

**The only file you need to edit is `app/data/properties.ts`.**

Each entry in the `properties` array auto-creates a page at `/properties/[slug]`.

### To add a new property:

1. Open `app/data/properties.ts`
2. Copy one of the existing entries (the chunks between `{` and `},`)
3. Paste it before the closing `];` at the bottom
4. Edit the values
5. Save — the new page appears automatically at `/properties/your-slug`

### Getting a property's `widgetUrl`:

1. In Hospitable: **Direct → Open your widget in edit mode**
2. Find the property in the list
3. **Copy widget code** — it's an iframe HTML snippet
4. From the iframe, copy just the **`src`** URL — looks like:
   ```
   https://booking.hospitable.com/widget/WIDGET-ID/PROPERTY-ID
   ```
5. Paste it as the `widgetUrl` value for that property in `properties.ts`

That's it. Calendar and pricing now sync automatically from Hospitable.

---

## 🔌 Phase 2: Custom API (Optional, Future)

When you want to move beyond iframe embeds and pull listings dynamically:

1. Get an API token: Hospitable → **Apps → Public API**
2. Create `.env.local` from `.env.example`
3. Add: `HOSPITABLE_API_TOKEN=your_token`
4. The stub at `app/api/listings/route.ts` is ready to use
5. Verify the endpoint URL against [developer.hospitable.com](https://developer.hospitable.com)

**Important:** API token uses `HOSPITABLE_API_TOKEN` (no `NEXT_PUBLIC_` prefix). It must stay server-side.

---

## 🚢 Deploy to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub
3. **Add New → Project → Import** your repo
4. Click **Deploy** (no env vars needed for Phase 1)
5. Site is live in ~1 minute

To connect a custom domain: Project **Settings → Domains → Add**.

---

## 🎨 Customization Tips

- **Colors:** edit the `theme.extend.colors` block in `tailwind.config.ts`
- **Fonts:** swap the Google Fonts in `app/layout.tsx`
- **Property card photos:** when you have real photos, swap the `gradient` field in `properties.ts` for an `image` field, and update `PropertyCard.tsx` to render an `<Image>` instead of the gradient div
- **Contact form:** wire the form in `app/contact/page.tsx` to a service like Formspree or Resend
