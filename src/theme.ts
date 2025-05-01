import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// 1. カラーパレット
const colors = {
  primary: "#1A472A", // メインアクション（Wimbledon風グリーン）
  primaryHover: "#143C22", // ホバー時のダークグリーン
  secondary: "#00A699", // 補助手段（リンク等）
  background: "#FFFFFF", // 背景色
  surface: "#F5F5F5", // カード等の背景
  textPrimary: "#212121", // メインテキスト
  textSecondary: "#616161", // 補助テキスト
  error: "#D32F2F", // エラーメッセージ
  warning: "#F57C00", // 警告
  info: "#1976D2", // 情報
  success: "#388E3C", // 成功
};

// 2. タイポグラフィ設定
const fonts = {
  body: "var(--font-noto), sans-serif",
  heading: "var(--font-noto), sans-serif",
  mono: "Menlo, monospace",
};
const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "48px",
  "4xl": "64px",
};
const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};
const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
};

// 3. スペーシング
const space = {
  px: "1px",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
};

// 4. ボーダー・角丸
const radii = {
  none: "0",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
};
const borders = {
  thin: "1px solid",
  thick: "2px solid",
};

// 5. シャドウ
const shadows = {
  sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0px 10px 15px rgba(0, 0, 0, 0.15)",
};

// const config = {
//   enableColorScheme: true,
//   enableSystem: true,
// };

const format = (obj: Record<string, string | number>) => {
  const formatted = Object.entries(obj).map(([key, value]) => [key, { value }]);
  return Object.fromEntries(formatted);
};

const config = defineConfig({
  theme: {
    tokens: {
      colors: format(colors),
      fonts: format(fonts),
      fontSizes: format(fontSizes),
      fontWeights: format(fontWeights),
      lineHeights: format(lineHeights),
      spacing: format(space),
      radii: format(radii),
      borders: format(borders),
      shadows: format(shadows),
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
