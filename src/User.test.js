import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Users from './components/Users'

let container = null
beforeEach(() => {
    container = document.createElement("tr");
    document.body.appendChild(container);
  });

afterEach(() => {
    
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  const fakeUser = {
    users: [
        {
          id: 1,
          first_name: "Иван",
          last_name: "Иванов"
        }
    ]
  }

  const fakeID=1

  it("Renders with user's info", () => {
    act(() => {
      render(<Users users={fakeUser} item={fakeID} />, container);
    });
    expect(container.textContent).toBe(" Иванов Иван ");
    });