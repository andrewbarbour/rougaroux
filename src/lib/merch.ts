import { getCollection } from 'astro:content';
import site from '../data/site.json';

export interface MerchSettings { intro?: string; button_text?: string; button_link?: string }

// Merch items in display order: by Position (lowest first; items without one go last), then name.
export async function getMerch() {
  const items = await getCollection('merch');
  return items.sort(
    (a, b) =>
      (a.data.order ?? Infinity) - (b.data.order ?? Infinity) || a.data.name.localeCompare(b.data.name),
  );
}

export const merchSettings: MerchSettings = (site as { merch?: MerchSettings }).merch ?? {};

// The section (and its menu link) only appears once there's something to show.
export async function hasMerch() {
  return (await getCollection('merch')).length > 0 || Boolean(merchSettings.button_text && merchSettings.button_link);
}
