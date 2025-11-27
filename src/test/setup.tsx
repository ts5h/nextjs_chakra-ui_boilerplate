import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// 各テスト後にクリーンアップ実行
afterEach(() => {
  cleanup();
});

// Next.jsのImageコンポーネントのモック
vi.mock("next/image", () => ({
  // biome-ignore lint/suspicious/noExplicitAny: Allow any for props
  default: (props: any) => {
    // biome-ignore lint/performance/noImgElement: Allow img element for testing
    return <img {...props} alt="" />;
  },
}));

// Next.js Routerのモック
vi.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: vi.fn(),
      pop: vi.fn(),
      reload: vi.fn(),
      back: vi.fn(),
      prefetch: vi.fn(),
      beforePopState: vi.fn(),
      events: {
        on: vi.fn(),
        off: vi.fn(),
        emit: vi.fn(),
      },
    };
  },
}));
