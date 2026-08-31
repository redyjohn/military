export type Checkpoint = {
  id: string;
  label: string;
  time: number;
};

export const SCENE_DURATION = 28;

export const CHECKPOINTS: Checkpoint[] = [
  { id: "hero", label: "HERO", time: 0 },
  { id: "title", label: "TITLE", time: 2.2 },
  { id: "copy", label: "COPY", time: 6.5 },
  { id: "brief", label: "BRIEF", time: 13 },
  { id: "cards", label: "CARDS", time: 17 },
  { id: "ready", label: "READY", time: 23 },
];

export const INTRO_CARDS = [
  { num: "01", title: "符合嗎？", body: "先檢查甄選條件。" },
  { num: "02", title: "怎麼報？", body: "了解報名流程。" },
  { num: "03", title: "待遇？", body: "看看服役期間待遇。" },
  { num: "04", title: "注意什麼？", body: "避開報名常見地雷。" },
];
