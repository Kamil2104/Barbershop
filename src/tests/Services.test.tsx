import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Services from "@/components/Services";

describe("Services Component", () => {
  it("renders section title", () => {
    render(<Services />);
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
  });

  it("displays category headers", () => {
    render(<Services />);
    expect(screen.getByText("Haircut")).toBeInTheDocument();
    expect(screen.getByText("Beard Trim")).toBeInTheDocument();
    expect(screen.getByText("Full Grooming")).toBeInTheDocument();
  });

  it("toggles 'Show More' functionality", () => {
    render(<Services />);

    const showMoreButtons = screen.getAllByText(/Show More/i);

    fireEvent.click(showMoreButtons[0]);

    expect(screen.getAllByText(/Show Less/i)).toHaveLength(1);
  });
});
