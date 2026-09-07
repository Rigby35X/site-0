---
name: "Barkhaus Platform"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D9D9D9"
    shade-3: "#B4B3B3"
    shade-4: "#828181"
    shade-5: "#504F4E"
    shade-6: "#1E1D1C"
    shade-7: "#060403"
    white: "#FFFFFF"
  dorado:
    shade-1: "#EFEEED"
    shade-2: "#DFDDDC"
    shade-3: "#8F8987"
    shade-4: "#5F5754"
    shade-5: "#4C4543"
    shade-6: "#262221"
    shade-7: "#1C1A19"
  vanilla:
    shade-1: "#FAF7F5"
    shade-2: "#F5F0EC"
    shade-3: "#DDCBBE"
    shade-4: "#CFB5A3"
    shade-5: "#A59082"
    shade-6: "#524841"
    shade-7: "#3E3630"
  tide:
    shade-1: "#F8F7F6"
    shade-2: "#F1F0EE"
    shade-3: "#D0CDC6"
    shade-4: "#BDB8AE"
    shade-5: "#97938B"
    shade-6: "#4B4945"
    shade-7: "#383734"
  cararra:
    shade-1: "#FCFCFC"
    shade-2: "#FAFAFA"
    shade-3: "#EFEEED"
    shade-4: "#E9E8E6"
    shade-5: "#BAB9B8"
    shade-6: "#5D5C5C"
    shade-7: "#454545"
  spicy-mix:
    shade-1: "#F2EDEB"
    shade-2: "#E5DBD8"
    shade-3: "#A68378"
    shade-4: "#804E3F"
    shade-5: "#663E32"
    shade-6: "#331F19"
    shade-7: "#261712"

typography:
  heading:
    fontFamily: "Noto Serif"
    fontWeight: 500
  body:
    fontFamily: "Poppins"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "sleek"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "chromatic1-shade-1"
    backgroundHex: "#EFEEED"
    foregroundHex: "#EFEEED"
    textHex: "#060403"
    accentHex: "#5F5754"
    borderValue: "#06040326"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-2"
    backgroundHex: "#D9D9D9"
    foregroundHex: "#D9D9D9"
    textHex: "#060403"
    accentHex: "#5F5754"
    borderValue: "#06040326"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic2-shade-4"
    backgroundHex: "#CFB5A3"
    foregroundHex: "#CFB5A3"
    textHex: "#060403"
    accentHex: "#060403"
    borderValue: "#06040326"
    useLogoVariant: light
    cssClass: "scheme-3"
  - name: "Scheme 4"
    background: "chromatic3-shade-4"
    backgroundHex: "#BDB8AE"
    foregroundHex: "#BDB8AE"
    textHex: "#060403"
    accentHex: "#060403"
    borderValue: "#06040326"
    useLogoVariant: light
    cssClass: "scheme-4"
  - name: "Scheme 5"
    background: "chromatic5-shade-3"
    backgroundHex: "#A68378"
    foregroundHex: "#A68378"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-5"
  - name: "Scheme 6"
    background: "chromatic2-shade-1"
    backgroundHex: "#FAF7F5"
    foregroundHex: "#FAF7F5"
    textHex: "#060403"
    accentHex: "#5F5754"
    borderValue: "#06040326"
    useLogoVariant: light
    cssClass: "scheme-6"
  - name: "Scheme 7"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#060403"
    accentHex: "#5F5754"
    borderValue: "#06040326"
    useLogoVariant: light
    cssClass: "scheme-7"
  - name: "Scheme 8"
    background: "neutral-shade-7"
    backgroundHex: "#060403"
    foregroundHex: "#060403"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-8"
---

# Barkhaus Platform — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 5 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Dorado** — primary shade: `#5F5754`
- **Vanilla** — primary shade: `#CFB5A3`
- **Tide** — primary shade: `#BDB8AE`
- **Cararra** — primary shade: `#E9E8E6`
- **Spicy Mix** — primary shade: `#804E3F`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Noto Serif** at weight 500. Body text uses **Poppins** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **sleek** with button radius 6px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Dorado Lightest (#EFEEED) | #060403 | #5F5754 | light | `.scheme-1` |
| Scheme 2 | Neutral Lighter (#D9D9D9) | #060403 | #5F5754 | light | `.scheme-2` |
| Scheme 3 | Vanilla (#CFB5A3) | #060403 | #060403 | light | `.scheme-3` |
| Scheme 4 | Tide (#BDB8AE) | #060403 | #060403 | light | `.scheme-4` |
| Scheme 5 | Spicy Mix Light (#A68378) | #ffffff | #ffffff | dark | `.scheme-5` |
| Scheme 6 | Vanilla Lightest (#FAF7F5) | #060403 | #5F5754 | light | `.scheme-6` |
| Scheme 7 | Neutral White (#FFFFFF) | #060403 | #5F5754 | light | `.scheme-7` |
| Scheme 8 | Neutral Darkest (#060403) | #ffffff | #ffffff | dark | `.scheme-8` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.png` or `logo-dark.png`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
