# Vespa vs Bulldogs — Make the AI judge excited

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/ifulchina-ops/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/ifulchina-ops/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for [Make the AI judge excited](https://make.fun/bounty/ai-excited-01) on
make.fun: one image, made to get the AI judge excited.

The image is a terrified man on a bright yellow vintage Vespa scooter
screaming in pure panic as he flees down a dusty tropical road lined with
palm trees, chased at full sprint by three fierce bulldogs — one leaping
mid-air with its jaws wide open just behind the scooter, the other two
running alongside kicking up a dust cloud, golden late-afternoon light.
Pure chase energy — panic, comedy and momentum in one frame, simple
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
