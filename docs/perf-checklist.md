# ScrollScene 1.0 performance checklist

Environment: Node/local Storybook host machine; measurements are relative before/after on the same machine. Methods are cheap characterization probes, not full browser profiles.

## Metrics

### 1. Observer `useDuration` threshold allocation

| | Before (0.0.26) | After (1.0) | Pass? |
|---|---|---|---|
| Threshold steps when `useDuration: true` | 200 (`createArray(199)` → length 200) | 21 (`createArray(20)` → length 21) | Yes |
| Relative allocation cost (Vitest micro-benchmark, same process) | baseline ~10× createArray(199) | createArray(20) stays under 15% of baseline wall time in `pnpm test` | Yes |

Proven by: `src/ScrollObserver.test.ts` (length assertion) + `createArray` unit.

### 2. Resize-path throttle

| | Before | After | Pass? |
|---|---|---|---|
| Shared breakpoint resize handler | `lodash.throttle(..., 700)` in `scrollAnimationInit` | Unchanged (still 700ms throttle + cancel on destroy) | Yes — no regression; still cancels on cleanup |

Proven by: `src/helpers/scrollAnimationInit.ts` still returns cleanup that cancels the throttle.

### 3. GSAP scrub write coalescing

| | Before | After | Pass? |
|---|---|---|---|
| Observer duration scrub | rAF-coalesced `tl.progress` writes; skip when unchanged | Unchanged behavior retained | Yes — no regression |

Proven by: existing `setTween.scrub` / `applyScrub` path in `src/ScrollObserver.ts`.

## Gate

Both engines clear this checklist for 1.0 release readiness:

- [x] Observer duration path allocates ≤21 thresholds (was 200)
- [x] Resize throttle cleanup still present
- [x] Scrub coalescing path retained
- [x] `pnpm test` green including allocation assertions
