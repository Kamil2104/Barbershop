import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { useHeaderVisibility } from "@/hooks/useHeaderVisibility";

describe("useHeaderVisibility", () => {
  it("should be visible by default", () => {
    const { result } = renderHook(() => useHeaderVisibility());
    expect(result.current).toBe(true);
  });

  it("should hide the header when scrolling down past threshold", () => {
    const { result } = renderHook(() => useHeaderVisibility(50));

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    act(() => {
      window.scrollY = 150;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(false);
  });

  it("should show the header when scrolling up", () => {
    const { result } = renderHook(() => useHeaderVisibility(50));

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event("scroll"));
    });

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(true);
  });
});
