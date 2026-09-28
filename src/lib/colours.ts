// Site colours from Site Style → Site colours. Each setting maps to a CSS variable that the
// layout writes on :root; the other shades (section banding, footer, divider lines) are derived
// from these in global.css. Keep the keys in sync with the colours fields in .pages.yml.
export const defaultColours = {
  accent: '#603cba',
  accent_text: '#ffffff',
  background: '#0e0c10',
  panel: '#16121a',
  text: '#ece4d6',
  text_secondary: '#c8c0cf',
  text_muted: '#a79fb0',
  link_hover: '#c9b8ff',
};

type ColourKey = keyof typeof defaultColours;

const cssVars: Record<ColourKey, string> = {
  accent: '--accent',
  accent_text: '--accent-ink',
  background: '--bg',
  panel: '--bg-raised',
  text: '--ink',
  text_secondary: '--ink-soft',
  text_muted: '--ink-muted',
  link_hover: '--link-hover',
};

const hex = (v: unknown) => {
  const s = typeof v === 'string' ? v.trim() : '';
  return /^#?[0-9a-f]{6}$/i.test(s) ? `#${s.replace('#', '').toLowerCase()}` : '';
};

// Blank or invalid values fall back to the default, as does everything when `useDefaults` is on.
export function siteColours(custom: Partial<Record<string, string>> = {}, useDefaults = false) {
  const keys = Object.keys(defaultColours) as ColourKey[];
  return Object.fromEntries(keys.map((k) => [k, (!useDefaults && hex(custom[k])) || defaultColours[k]])) as Record<ColourKey, string>;
}

// Reads the colours from style.json (Site Style in Pages CMS).
export function coloursFromSettings(style: object) {
  const s = style as { colours?: Record<string, string>; use_default_colours?: boolean };
  return siteColours(s.colours, s.use_default_colours === true);
}

export function coloursCss(colours: Record<ColourKey, string>) {
  return (Object.keys(cssVars) as ColourKey[]).map((k) => `${cssVars[k]}:${colours[k]}`).join(';');
}
