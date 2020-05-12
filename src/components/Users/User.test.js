import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {shallow} from 'enzyme'

import Users from './Users'


//настройка рендера для реактовского теста
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

  // фейковые данные для проверки их корректности 
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
    // первый способ теста через jest+enzyme
    //
    const wrapper=shallow(<Users users={fakeUser} item={fakeID} />)
    expect(wrapper.find('td').length).toBe(1);
    expect(wrapper.find('td').text('td')).toBe(" Иванов Иван ");

    //второй способ теста через реактовские тесты
    //
    // act(() => {
    //   render(<Users users={fakeUser} item={fakeID} />, container);
    // });
    // expect(container.textContent).toBe(" Иванов Иван ");

    });