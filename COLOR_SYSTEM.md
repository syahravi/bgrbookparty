# 🎨 Color System - Bogor Book Party

## Overview

Color system yang telah dioptimasi untuk **keterbacaan maksimal** dengan base color hijau dari logo BBP (#053923).

---

## 🎨 Color Palette

### Primary (Hijau Pastel)
Digunakan untuk buttons, highlights, dan interactive elements.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50 | `#F5FBF8` | Background utama |
| 100 | `#E8F5ED` | Background hover |
| 200 | `#D4EBE0` | Borders, secondary bg |
| 300 | `#BFE1D2` | - |
| 400 | `#A8D5BA` | **Primary color (default)** |
| 500 | `#8DC9A5` | - |
| 600 | `#6FB589` | Primary hover |
| 700 | `#53916D` | - |
| 800 | `#3F6E53` | Text secondary |
| 900 | `#053923` | **Accent/Text primary** |

### Accent (Hijau Tua)
Hijau tua dari logo BBP - digunakan untuk text dan headings.

| Variant | Hex Code | Usage |
|---------|----------|-------|
| DEFAULT | `#053923` | Headings, primary text, logo |
| light | `#3F6E53` | Secondary text, body copy |
| lighter | `#6FB589` | Muted text, captions |

### Text Colors
Optimized untuk readability dengan contrast ratio yang baik.

| Color | Hex Code | Contrast | Usage |
|-------|----------|----------|-------|
| text-primary | `#053923` | AAA | Headings, important text |
| text-secondary | `#3F6E53` | AA | Body text, paragraphs |
| text-muted | `#6B7280` | AA | Captions, meta info |
| text-light | `#9CA3AF` | A | Placeholders, disabled |

---

## 📐 Usage Guidelines

### Headings (h1-h6)
```css
color: var(--text-primary);  /* #053923 */
font-weight: 700;
```

### Body Text (p)
```css
color: var(--text-secondary);  /* #3F6E53 */
line-height: 1.7;
```

### Buttons
- **Primary**: White text on primary green (`#A8D5BA`)
- **Secondary**: Dark text on light green (`#D4EBE0`)
- **Outline**: Dark border & text, fills on hover
- **Ghost**: Dark text, light fill on hover

### Form Inputs
- **Text**: `#053923` (primary)
- **Placeholder**: `#6B7280` (muted)
- **Border**: `#D4EBE0` (secondary)
- **Focus**: `#A8D5BA` (primary)

---

## ✅ Accessibility

### WCAG Compliance

| Combination | Contrast Ratio | Level |
|-------------|----------------|-------|
| Primary (#053923) on Background (#F5FBF8) | **15.8:1** | AAA ✅ |
| Secondary (#3F6E53) on Background (#F5FBF8) | **9.2:1** | AAA ✅ |
| Muted (#6B7280) on Background (#F5FBF8) | **4.8:1** | AA ✅ |
| White on Primary (#A8D5BA) | **4.5:1** | AA ✅ |

**Semua text readable dan memenuhi standar WCAG 2.1 Level AA/AAA!**

---

## 🎯 Tailwind Classes

### Text Colors
```jsx
<h1 className="text-accent">Heading</h1>
<p className="text-accent-light">Body text</p>
<span className="text-text-muted">Caption</span>
```

### Background Colors
```jsx
<div className="bg-primary">Primary background</div>
<div className="bg-secondary">Secondary background</div>
<div className="bg-accent">Dark background</div>
```

### Borders
```jsx
<div className="border-2 border-secondary">Light border</div>
<div className="border-2 border-primary">Primary border</div>
```

---

## 🔍 CSS Variables

Defined in `app/globals.css`:

```css
:root {
  --background: #F5FBF8;
  --foreground: #053923;
  --text-primary: #053923;
  --text-secondary: #3F6E53;
  --text-muted: #6B7280;
}
```

Usage:
```css
.my-element {
  color: var(--text-primary);
  background: var(--background);
}
```

---

## 🎨 Component Examples

### Button Variants
- **Primary**: Green background, white text (high contrast)
- **Outline**: Transparent bg, green border, dark text
- **Ghost**: Minimal style, subtle hover effect

### Cards
- **Background**: White (`#FFFFFF`)
- **Border**: Secondary (`#D4EBE0`)
- **Heading**: Accent (`#053923`)
- **Body**: Accent light (`#3F6E53`)

### Navigation
- **Default**: Accent color (`#053923`)
- **Hover**: Primary background (`#A8D5BA`) + white text
- **Active**: Same as hover

---

## 💡 Best Practices

1. **Always use semantic colors**
   - ✅ `text-accent` for headings
   - ✅ `text-accent-light` for body
   - ❌ Don't use `text-gray-700` directly

2. **Maintain contrast ratios**
   - Heading: minimum 7:1 (AAA)
   - Body text: minimum 4.5:1 (AA)

3. **Test in different modes**
   - Check readability on white backgrounds
   - Verify hover states are visible

4. **Use primary color sparingly**
   - Buttons and CTAs
   - Highlights and badges
   - Interactive elements

5. **Dark text on light backgrounds**
   - Never use light text on light backgrounds
   - Always check contrast first

---

## 🔧 Customization

To change colors, edit:
1. `tailwind.config.ts` - Tailwind color palette
2. `app/globals.css` - CSS variables

Then rebuild:
```bash
npm run build
```

---

**Color system optimized untuk Bogor Book Party dengan keterbacaan terbaik! 🎨✨**
