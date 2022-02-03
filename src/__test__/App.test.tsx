import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "../App";

test("App works", () => {
  const { container } = render(<App />);

  console.log("container");
  console.log(container);

  const buttons = container.querySelectorAll("button");
  expect(buttons[0].textContent).toBe("Start");

  const divs = container.querySelectorAll("div");
  console.log("divs[0]");
  console.log(divs[1]);
  expect(divs[1].textContent).toBe("Welcome To WordleJa");
});
