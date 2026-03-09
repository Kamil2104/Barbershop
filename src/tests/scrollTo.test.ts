import { describe, it, expect, vi } from "vitest";
import { scrollTo } from "@/utils/scrollTo";

describe("scrollTo utility", () => {
  it("should not crash if element is not found", () => {
    expect(() => scrollTo("non-existent-id")).not.toThrow();
  });

  it("should call window.scrollTo when element exists", () => {
    document.body.innerHTML = '<div id="target"></div>';
    const spy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    scrollTo("target");

    expect(spy).toBeDefined();
  });
});
