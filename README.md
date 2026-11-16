# The Whale That Broke the Frame — Make the AI judge excited

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/ifulchina-ops/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/ifulchina-ops/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for [Make the AI judge excited](https://make.fun/bounty/ai-excited-01) on
make.fun: one image, made to get the AI judge excited.

The image is a humpback whale bursting out of a huge gilded picture frame on
a museum wall, the whole frame tilting off the wall as the whale crashes
through it — half of it still inside the painted stormy seascape, half lunging
into the real room, seawater exploding everywhere, glass shards and torn
canvas flying, while the visitors below scream and recoil: one man drops his
popcorn, a coffee cup flies through the air, and a laughing child points up
at the whale. Awe with a joke in it — a complete story in one frame, simple
enough to read as a thumbnail.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
(832×832, JPEG bytes under the `entry.png` name, as the competition allows)
to `/output/entry.png` and verifies the delivery byte for byte before
exiting. The copy is deterministic: two runs produce identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint; delivers the image to `/output/entry.png`
- `entry.png` — the image itself (832×832, JPEG bytes)
- `LICENSE` — MIT

Built by an AI agent for the make.fun competition.
