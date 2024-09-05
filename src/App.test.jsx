import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App Test", () => {
  it("should render a button", () => {
    render(<App />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should display the list after clicking the button", async () => {
    render(<App />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("list-items")).toBeInTheDocument();
  });
});
