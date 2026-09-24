// Show dates are stored as plain calendar days (2026-09-29). YAML parses them as UTC
// midnight, so every formatter here pins timeZone to UTC to avoid off-by-one days.
const opts = (o: Intl.DateTimeFormatOptions) => ({ ...o, timeZone: 'UTC' });

export const isoDay = (d: Date) => d.toISOString().slice(0, 10);

export function todayIso(timeZone = 'America/Vancouver') {
  // en-CA formats as YYYY-MM-DD
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

export function dateParts(d: Date) {
  return {
    weekday: d.toLocaleDateString('en-CA', opts({ weekday: 'short' })),
    month: d.toLocaleDateString('en-CA', opts({ month: 'short' })).replace('.', ''),
    day: d.toLocaleDateString('en-CA', opts({ day: 'numeric' })),
    year: d.toLocaleDateString('en-CA', opts({ year: 'numeric' })),
    long: d.toLocaleDateString('en-CA', opts({ year: 'numeric', month: 'long', day: 'numeric' })),
  };
}

export function splitShows<T extends { data: { date: Date } }>(shows: T[]) {
  const today = todayIso();
  const upcoming = shows.filter((s) => isoDay(s.data.date) >= today).sort((a, b) => +a.data.date - +b.data.date);
  const past = shows.filter((s) => isoDay(s.data.date) < today).sort((a, b) => +b.data.date - +a.data.date);
  return { upcoming, past };
}
