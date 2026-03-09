import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Typography from "@/components/ui/Typography";

describe("Typography Component", () => {
  it("renders h1 variant with correct tag", () => {
    render(<Typography variant="h1">Hello World</Typography>);

    const element = screen.getByRole("heading", { level: 1 });

    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Hello World");
  });

  it("renders p-sm variant as a paragraph", () => {
    const { container } = render(
      <Typography variant="p-sm">Paragraph text</Typography>,
    );
    const p = container.querySelector("p");

    expect(p).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Typography variant="h1" className="custom-class">
        Text
      </Typography>,
    );
    expect(screen.getByText("Text")).toHaveClass("custom-class");
  });
});
