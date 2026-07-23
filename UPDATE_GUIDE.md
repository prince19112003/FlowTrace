# FlowTrace — Update Workflow Guide

## How It Works (100% Free, No Domain, No Database)

```
GitHub (free) → version.json → Your App → In-App Modal → User Downloads
```

---

## Step-by-Step: How to Release an Update

### 1. Build your new version
```bash
npm run build
```

### 2. Bump version in TWO places:

**`public/version.json`** — Update version + changelog:
```json
{
  "version": "1.2.0",
  "buildDate": "2026-07-23",
  "changelog": [
    "New feature: XYZ",
    "Fixed bug: ABC",
    "Improved performance in DSA section"
  ],
  "releaseUrl": "https://github.com/prince19112003/FlowTrace/releases/latest",
  "downloadUrl": "https://github.com/prince19112003/FlowTrace/archive/refs/heads/main.zip"
}
```

**`src/shared/hooks/useUpdateChecker.ts`** — Bump `CURRENT_VERSION`:
```ts
const CURRENT_VERSION = '1.2.0';  // ← change this
```

### 3. Push to GitHub
```bash
git add .
git commit -m "release: v1.2.0 — New XYZ feature"
git push origin main
```

### 4. Users see update automatically ✅

When users open the app next time (with internet connection):
- App fetches `version.json` from GitHub Raw API (free)
- Detects new version → shows in-app update modal
- User clicks "Download & Update"
- ZIP downloads + instructions shown inside app

---

## How the In-App Modal Works

| Phase | What Happens |
|-------|-------------|
| **Idle** | Shows version diff, changelog, "Download & Update" button |
| **Downloading** | Animated spinning rings + % progress bar |
| **Done** | Green checkmark + 4-step instructions |

- Modal appears **on top of current page** (no navigation)
- Backdrop blur blocks the app behind
- User can dismiss → won't show again for THIS version
- Check is cached for **6 hours** to avoid API spam
- First check fires **4 seconds after splash** (non-blocking)

---

## GitHub Raw API URL Used

```
https://raw.githubusercontent.com/prince19112003/FlowTrace/main/public/version.json
```

This is **completely free** — GitHub serves raw files at no cost. Rate limit is 60 req/hr per IP which is more than enough.

---

## Important Notes

- ✅ No domain needed
- ✅ No server/database
- ✅ Works offline (skips check gracefully if no internet)
- ✅ Cached for 6h (not spammy)
- ✅ User can "Later" dismiss once per version
- ⚠️ Users must manually extract the ZIP and replace their folder
- 💡 Future: Could use GitHub Releases for versioned ZIPs instead of main branch zip
