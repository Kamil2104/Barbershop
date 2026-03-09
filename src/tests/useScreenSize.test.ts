import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import useSceenSize from "@/hooks/useScreenSize";

describe("useServicesItemsLimit", () => {
  beforeEach(() => {
    window.innerWidth = 1200;
  });

  it("should return lg for desktop (width > 1024)", () => {
    const { result } = renderHook(() => useSceenSize());

    expect(result.current).toBe("lg");
  });

  it("should return md for tablet (width >= 768 & width < 1024)", () => {
    const { result } = renderHook(() => useSceenSize());

    act(() => {
      window.innerWidth = 1000;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe("md");
  });

  it("should return sm for mobile (width < 768)", () => {
    const { result } = renderHook(() => useSceenSize());

    act(() => {
      window.innerWidth = 700;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe("sm");
  });
});
