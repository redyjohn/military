export const OFFICIAL = {
  site: "https://rdrc.mnd.gov.tw",
  siteLabel: "國軍人才招募全球資訊網",
  phone: "0800-000-050",
  payYearNote: "114 年為例",
  private: 42150,
  pfc: 44000,
  specialist: 45850,
} as const;

export const QUESTIONS = [
  { num: "01", text: "我符合資格嗎？" },
  { num: "02", text: "我要怎麼報名？" },
  { num: "03", text: "服役期間有多少待遇？" },
  { num: "04", text: "我要去哪裡找完整資料？" },
  { num: "05", text: "報名前有哪些事情不能搞錯？" },
] as const;

export const PROFILE_STATS = [
  { id: "age", kicker: "AGE", title: "18–32 歲", body: "年滿 18 歲至 32 歲" },
  { id: "edu", kicker: "EDU", title: "高中職以上", body: "或教育部認可同等學力" },
  { id: "height", kicker: "HEIGHT", title: "150 cm 以上", body: "男性、女性均適用" },
  { id: "bmi", kicker: "BMI", title: "男 16.5–32", body: "女 17–26" },
] as const;

export const JOB_LIMITS = [
  { role: "一般條件", male: "150 cm", female: "150 cm" },
  { role: "憲兵", male: "160 cm", female: "155 cm" },
  { role: "儀隊", male: "176 cm+", female: "176 cm+" },
  { role: "戰甲／砲車駕駛", male: "160 cm+", female: "160 cm+" },
  { role: "國家安全局", male: "160 cm", female: "155 cm" },
] as const;

export const DOC_PACK = [
  { num: "01", title: "身分", body: "國民身分證正反面" },
  { num: "02", title: "學歷", body: "畢業證書或同等學力" },
  { num: "03", title: "照片", body: "近 3 個月證件照" },
  { num: "04", title: "體檢", body: "依身分別應繳表件" },
  { num: "05", title: "其他", body: "依身分所需文件" },
] as const;

export const DEDUCTIONS = ["保險", "退撫", "主副食", "健保"] as const;

export const PHOTO_MINES = [
  { bad: true, title: "生活照", hint: "不得使用" },
  { bad: true, title: "戴帽", hint: "須脫帽" },
  { bad: true, title: "深色鏡片", hint: "不得佩戴" },
  { bad: true, title: "背景不符", hint: "白或淺色底" },
  { bad: true, title: "尺寸不符", hint: "規格未達標" },
] as const;

export const MISSION_RECAP = [
  { num: "01", title: "甄選條件" },
  { num: "02", title: "報名方式" },
  { num: "03", title: "待遇" },
  { num: "04", title: "簡章取得" },
  { num: "05", title: "報名前注意事項" },
] as const;
