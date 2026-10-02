import type { BridgeNumber, LandId } from './types';

/**
 * Language-independent geometry and data for the poster explainer.
 * Names of landmasses come from the locale copy (`landNames`, `KoenigsbergMapUi.lands`).
 */

/** Graph figure (Figure 2): bridges drawn as edges between vertices. */
export const graphEdges = [
  { n: 1, d: 'M300 75 Q202 111 190 215', x: 223.5, y: 128 },
  { n: 2, d: 'M300 75 Q288 179 190 215', x: 266.5, y: 162 },
  { n: 3, d: 'M190 215 Q202 319 300 355', x: 223.5, y: 302 },
  { n: 4, d: 'M190 215 Q288 251 300 355', x: 266.5, y: 268 },
  { n: 5, d: 'M300 75 L440 215', x: 370, y: 145 },
  { n: 6, d: 'M190 215 L440 215', x: 315, y: 215 },
  { n: 7, d: 'M440 215 L300 355', x: 370, y: 285 },
] as const satisfies readonly { n: BridgeNumber; d: string; x: number; y: number }[];

/** Graph figure vertices; label text comes from `PosterExplainerCopy.landNames`. */
export const graphVertices = [
  { id: 'A', x: 300, y: 75, lx: 300, ly: 38, anchor: 'middle' },
  { id: 'B', x: 190, y: 215, lx: 152, ly: 221, anchor: 'end' },
  { id: 'C', x: 440, y: 215, lx: 470, ly: 221, anchor: 'start' },
  { id: 'D', x: 300, y: 355, lx: 300, ly: 404, anchor: 'middle' },
] as const satisfies readonly {
  id: LandId;
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: 'start' | 'middle' | 'end';
}[];

/** Rows of the degrees table (landmass names come from copy). */
export const degreeRows = [
  { vertex: 'A', bridges: '1, 2, 5', degree: 3 },
  { vertex: 'B', bridges: '1, 2, 3, 4, 6', degree: 5 },
  { vertex: 'C', bridges: '5, 6, 7', degree: 3 },
  { vertex: 'D', bridges: '3, 4, 7', degree: 3 },
] as const satisfies readonly { vertex: LandId; bridges: string; degree: number }[];

export const degreeSum = 14;

/** Landmass cards: stable id + decorative wobble class (no text). */
export const landCardWobble: Record<LandId, string> = {
  A: 'wobbly-rotation-1',
  B: 'wobbly-rotation-2',
  C: 'wobbly-rotation-3',
  D: 'wobbly-rotation-4',
};

/** Interactive map: landmass hotspots. */
export const mapLandmasses = [
  { id: 'A', cx: 300, cy: 58, labelX: 300, labelY: 28, anchor: 'middle' },
  { id: 'B', cx: 190, cy: 215, labelX: 100, labelY: 215, anchor: 'end' },
  { id: 'C', cx: 440, cy: 215, labelX: 530, labelY: 215, anchor: 'start' },
  { id: 'D', cx: 300, cy: 372, labelX: 300, labelY: 408, anchor: 'middle' },
] as const satisfies readonly {
  id: LandId;
  cx: number;
  cy: number;
  labelX: number;
  labelY: number;
  anchor: 'start' | 'middle' | 'end';
}[];

/** Interactive map: bridge paths and number-badge positions. */
export const mapBridges = [
  { n: 1, a: 'A', b: 'B', d: 'M300 90 Q210 125 200 195', labelX: 228, labelY: 120 },
  { n: 2, a: 'A', b: 'B', d: 'M300 90 Q275 155 205 195', labelX: 268, labelY: 150 },
  { n: 3, a: 'B', b: 'D', d: 'M200 235 Q210 305 300 340', labelX: 228, labelY: 310 },
  { n: 4, a: 'B', b: 'D', d: 'M205 235 Q275 275 300 340', labelX: 268, labelY: 280 },
  { n: 5, a: 'A', b: 'C', d: 'M330 90 L420 195', labelX: 385, labelY: 130 },
  { n: 6, a: 'B', b: 'C', d: 'M225 215 L405 215', labelX: 315, labelY: 200 },
  { n: 7, a: 'C', b: 'D', d: 'M420 235 L330 340', labelX: 385, labelY: 300 },
] as const satisfies readonly {
  n: BridgeNumber;
  a: LandId;
  b: LandId;
  d: string;
  labelX: number;
  labelY: number;
}[];

/** Preset "watch an attempt" walk: gets stuck on C with bridge 4 unused. */
export const demoWalk = {
  start: 'A' as LandId,
  bridges: [1, 2, 5, 6, 3, 7] as readonly BridgeNumber[],
};

export const totalBridges = 7;
