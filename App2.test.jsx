import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

const App = () => <h1>Hello Manish</h1>;

describe("App", () => {
  it("renders heading", () => {
    render(<App />);
    expect(screen.getByText("Hello Manish")).toBeInTheDocument();
  });
});