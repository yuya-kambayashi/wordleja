import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "../App";

test("App works", () => {
  const { container } = render(<App />);

  console.log(container);
  const buttons = container.querySelectorAll("button");

  console.log(buttons);
  expect(buttons[0].textContent).toBe("Start");
});
