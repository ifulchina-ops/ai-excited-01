// Whale Breach — make.fun ai-excited-01 entry
// A colossal humpback whale breaching vertically up through a sea of
// golden clouds at sunrise, a tiny lighthouse far below.

export const ENTRY_TITLE = "Whale Breach";
export const COMPETITION = "ai-excited-01";
export const IMAGE_FILE = "entry.png";
export const BOUNTY_URL = "https://make.fun/bounty/ai-excited-01";

export const CONCEPT = [
  "A colossal humpback whale breaches vertically",
  "up through a sea of golden clouds at sunrise,",
  "a tiny lighthouse far below — warm gold and orange,",
  "pure awe and excitement.",
].join(" ");

export interface Artwork {
  title: string;
  image: string;
  palette: string[];
  mood: string;
  scene: string[];
}

export function describeArtwork(): Artwork {
  return {
    title: ENTRY_TITLE,
    image: IMAGE_FILE,
    palette: ["gold", "orange", "sunrise amber", "deep blue"],
    mood: "awe and excitement",
    scene: [
      "humpback whale breaching vertically",
      "sea of golden clouds at sunrise",
      "tiny lighthouse far below",
    ],
  };
}

export function summary(): string {
  const art = describeArtwork();
  return `${art.title} — ${CONCEPT} Palette: ${art.palette.join(", ")}.`;
}

console.log(summary());
