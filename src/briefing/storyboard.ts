export type SceneId =
  | "s01"
  | "s02"
  | "s03"
  | "s04"
  | "s05"
  | "s06"
  | "s07"
  | "s08"
  | "s09"
  | "s10"
  | "s11"
  | "s12"
  | "s13"
  | "s14"
  | "s15"
  | "s16"
  | "s17"
  | "s18"
  | "s19"
  | "s20"
  | "s21"
  | "s22"
  | "s23"
  | "s24"
  | "s25"
  | "s26"
  | "s27";

export type PartMeta = {
  id: number;
  label: string;
  title: string;
  mission: string;
  start: number;
};

export type SceneMeta = {
  id: SceneId;
  label: string;
  name: string;
  part: number;
  time: number;
};

/** Compressed from the 40-minute talk: ~1s on screen per 10s of briefing. */
export const TOTAL_DURATION = 248;

export const PARTS: PartMeta[] = [
  { id: 1, label: "OPENING", title: "你的下一步，會去哪裡？", mission: "INTRO", start: 0 },
  { id: 2, label: "MISSION 01", title: "我符合資格嗎？", mission: "MISSION 01", start: 24 },
  { id: 3, label: "MISSION 02", title: "我要怎麼報名？", mission: "MISSION 02", start: 78 },
  { id: 4, label: "MISSION 03", title: "當志願士兵，待遇多少？", mission: "MISSION 03", start: 120 },
  { id: 5, label: "MISSION 04", title: "想回家再研究？", mission: "MISSION 04", start: 174 },
  { id: 6, label: "MISSION 05", title: "報名前這 5 個地方不要踩雷", mission: "MISSION 05", start: 192 },
  { id: 7, label: "FINAL", title: "所以，你適合嗎？", mission: "FINAL", start: 222 },
];

export const SCENES: SceneMeta[] = [
  { id: "s01", label: "S01", name: "黑幕開場", part: 1, time: 0 },
  { id: "s02", label: "S02", name: "另一條路", part: 1, time: 12 },
  { id: "s03", label: "S03", name: "五個問題", part: 1, time: 18 },
  { id: "s04", label: "S04", name: "資格檢測", part: 2, time: 24 },
  { id: "s05", label: "S05", name: "現場互動", part: 2, time: 38 },
  { id: "s06", label: "S06", name: "刺青規範", part: 2, time: 46 },
  { id: "s07", label: "S07", name: "職務加嚴", part: 2, time: 58 },
  { id: "s08", label: "S08", name: "MISSION 01", part: 2, time: 70 },
  { id: "s09", label: "S09", name: "線上報名", part: 3, time: 78 },
  { id: "s10", label: "S10", name: "資料包", part: 3, time: 90 },
  { id: "s11", label: "S11", name: "未滿 18 歲", part: 3, time: 102 },
  { id: "s12", label: "S12", name: "地雷", part: 3, time: 110 },
  { id: "s13", label: "S13", name: "猜猜看", part: 4, time: 120 },
  { id: "s14", label: "S14", name: "揭曉", part: 4, time: 130 },
  { id: "s15", label: "S15", name: "RANK UP", part: 4, time: 142 },
  { id: "s16", label: "S16", name: "實領", part: 4, time: 154 },
  { id: "s17", label: "S17", name: "薪水之外", part: 4, time: 166 },
  { id: "s18", label: "S18", name: "諮詢", part: 5, time: 174 },
  { id: "s19", label: "S19", name: "QR", part: 5, time: 183 },
  { id: "s20", label: "S20", name: "資料確認", part: 6, time: 192 },
  { id: "s21", label: "S21", name: "體檢", part: 6, time: 198 },
  { id: "s22", label: "S22", name: "病史", part: 6, time: 204 },
  { id: "s23", label: "S23", name: "時程", part: 6, time: 210 },
  { id: "s24", label: "S24", name: "照片", part: 6, time: 216 },
  { id: "s25", label: "S25", name: "五關回顧", part: 7, time: 222 },
  { id: "s26", label: "S26", name: "先了解", part: 7, time: 228 },
  { id: "s27", label: "S27", name: "CTA", part: 7, time: 234 },
];

export const CHECKPOINTS = SCENES.map((scene) => ({
  id: scene.id,
  label: scene.label,
  name: scene.name,
  time: scene.time,
}));

export function sceneAt(id: SceneId) {
  const found = SCENES.find((scene) => scene.id === id);
  if (!found) throw new Error(`Unknown scene ${id}`);
  return found.time;
}

export function partAt(time: number) {
  return [...PARTS].reverse().find((part) => time + 0.05 >= part.start) ?? PARTS[0];
}

export function sceneMetaAt(time: number) {
  return [...SCENES].reverse().find((scene) => time + 0.05 >= scene.time) ?? SCENES[0];
}
