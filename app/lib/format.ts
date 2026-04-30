// Hospitable returns amenity codes like "ac", "bed_linens", "wireless_internet".
// This converts them to human-readable labels.

const SPECIAL: Record<string, string> = {
  ac: "Air conditioning",
  tv: "TV",
  wireless_internet: "Wi-Fi",
  ethernet_connection: "Ethernet",
  laptop_friendly_workspace: "Laptop-friendly workspace",
  patio_or_belcony: "Patio or balcony",
  pack_n_play_travel_crib: "Pack 'n play / travel crib",
  carbon_monoxide_detector: "Carbon monoxide detector",
  smoke_detector: "Smoke detector",
  fire_extinguisher: "Fire extinguisher",
  first_aid_kit: "First aid kit",
  cleaning_before_checkout: "Cleaning before checkout",
  extra_pillows_and_blankets: "Extra pillows and blankets",
  free_parking: "Free parking",
  hot_water_kettle: "Hot water kettle",
  keurig_coffee_machine: "Keurig coffee machine",
  pets_allowed: "Pets allowed",
  long_term_stays_allowed: "Long-term stays allowed",
  self_check_in: "Self check-in",
  smart_lock: "Smart lock",
  fireplace_guards: "Fireplace guards",
  room_darkening_shades: "Room-darkening shades",
  wardrobe_or_closet: "Wardrobe or closet",
  dishes_and_silverware: "Dishes and silverware",
  outdoor_seating: "Outdoor seating",
  private_entrance: "Private entrance",
  paid_parking_off_premises: "Paid parking off premises",
};

export function formatAmenity(code: string): string {
  if (SPECIAL[code]) return SPECIAL[code];
  // Auto: replace underscores with spaces, title-case first word only
  const words = code.split("_");
  return words
    .map((w, i) => (i === 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

// Splits a long description on paragraph breaks (\n\n) for proper rendering.
export function paragraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}
