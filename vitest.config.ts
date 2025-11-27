import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    // JSDOMを使用してブラウザ環境をシミュレート
    environment: "jsdom",
    // セットアップファイルの指定
    setupFiles: "./src/test/setup.tsx",
    // テストファイルのパターン
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    // 除外するファイル/フォルダ
    exclude: ["node_modules", "dist", ".next", "coverage"],
  },
  resolve: {
    alias: {
      // Next.jsの @ パスエイリアスを設定
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
