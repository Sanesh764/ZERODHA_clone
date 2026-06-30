import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero image");

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src");
    // Agar exact path check karna ho:
    // expect(heroImage.getAttribute("src")).toContain("homeHero.png");
  });
});