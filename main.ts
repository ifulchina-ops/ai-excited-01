// ai-excited-01 entry: writes the image ./entry.png to the output directory.
//
// The image is a single original painting (a colossal humpback whale breaching
// through a sea of clouds above a tiny lighthouse) generated for this entry.
// This program does not draw or fetch anything: it reads the bundled PNG,
// checks it is a whole, in-limits PNG, and writes the exact same bytes out,
// so both grading runs produce identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;
const MAX_DIMENSION = 1024;

function readPngDimensions(bytes) {
  // A PNG's IHDR chunk starts at byte 8: 4-byte length, 4-byte "IHDR",
  // then width and height as 4-byte big-endian integers.
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  return { width, height };
}

function hasIendTrailer(bytes) {
  // A whole PNG ends with the 12-byte IEND chunk: length 0, type "IEND",
  // then its CRC. If the trailer is missing the file is truncated.
  const trailer = bytes.subarray(bytes.length - 12);
  return (
    trailer.readUInt32BE(0) === 0 &&
    trailer.subarray(4, 8).toString('latin1') === 'IEND'
  );
}

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, 'entry.png');
  const image = readFileSync(sourcePath);

  if (!image.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
    throw new Error('entry.png is not a PNG: bad signature');
  }
  if (image.length > MAX_BYTES) {
    throw new Error(`entry.png is ${image.length} bytes, over the ${MAX_BYTES} byte limit`);
  }
  const { width, height } = readPngDimensions(image);
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    throw new Error(`entry.png is ${width}x${height}, over the ${MAX_DIMENSION}x${MAX_DIMENSION} limit`);
  }
  if (!hasIendTrailer(image)) {
    throw new Error('entry.png is truncated: missing IEND trailer');
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, 'entry.png');
  writeFileSync(outputPath, image);

  console.log(`wrote ${outputPath}: ${image.length} bytes, ${width}x${height} PNG`);
}

main();
