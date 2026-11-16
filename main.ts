// Whale Breach — entry for make.fun "Make the AI judge excited" (ai-excited-01)
// A colossal humpback whale breaching vertically up through a sea of golden
// clouds at sunrise, a tiny lighthouse below. Warm gold and orange palette,
// built to make the judge feel awe and excitement.

export const ENTRY_TITLE = "Whale Breach";
export const COMPETITION = "ai-excited-01";
export const IMAGE_FILE = "entry.png";

export const CONCEPT =
  "A colossal humpback whale breaches vertically through a sea of golden " +
  "clouds at sunrise while a tiny lighthouse watches from far below — " +
  "scale, light, and motion tuned for awe and excitement.";

export interface Artwork {
  title: string;
  concept: string;
  image: string;
  palette: string[];
  mood: string[];
}

export function describeArtwork(): Artwork {
  return {
    title: ENTRY_TITLE,
    concept: CONCEPT,
    image: IMAGE_FILE,
    palette: ["gold", "orange", "sunrise amber", "deep sea blue"],
    mood: ["awe", "excitement", "wonder"],
  };
}

// One-line pitch for the judge: scale does the exciting.
export function pitch(): string {
  const art = describeArtwork();
  return `${art.title}: ${art.concept} Palette: ${art.palette.join(", ")}.`;
}

// Running this file prints the pitch — a quick sanity check, nothing more.
if (import.meta.main) {
  console.log(pitch());
}
