// Heading fonts selectable in Site settings. Every face is imported in Base.astro, but browsers
// only download the one the page actually uses. `scale` evens out how wide each font sets, so a
// swap doesn't push the hero title off the screen; it's relative to Pirata One.
// Keep the names in sync with the display_font options in .pages.yml.
export const displayFonts = {
  'Pirata One': { family: "'Pirata One', Georgia, serif", scale: 1 },
  UnifrakturMaguntia: { family: "'UnifrakturMaguntia', Georgia, serif", scale: 0.86 },
  'Metal Mania': { family: "'Metal Mania', Georgia, serif", scale: 0.94 },
  'New Rocker': { family: "'New Rocker', Georgia, serif", scale: 0.82 },
  Creepster: { family: "'Creepster', Georgia, serif", scale: 0.92 },
  'Special Elite': { family: "'Special Elite', 'Courier New', monospace", scale: 0.7 },
  'Bebas Neue': { family: "'Bebas Neue', Impact, sans-serif", scale: 1.05 },
  Anton: { family: "'Anton', Impact, sans-serif", scale: 0.9 },
} as const;

export function displayFont(name: string | undefined) {
  return displayFonts[name as keyof typeof displayFonts] ?? displayFonts['Pirata One'];
}
