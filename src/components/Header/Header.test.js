import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const fakeUser = {
  users: [
    {
      id: 1,
      first_name: "Иван",
      last_name: "Иванов",
    },
  ],
};
const fakeStatus = {
  statuses: [
    {
      id: 1,
      title: "Drink coffee",
    },
    {
      id: 2,
      title: "Test our app",
    },
    {
      id: 3,
      title: "Brush your teeth",
    },
  ],
};

const fakeTasks = {
  tasks: [
    {
      id: 1,
      title: "Нарисовать прототипы",
      contractor_id: 1,
      status: 3,
    },
    {
      id: 2,
      title: "Сделать кликабельный прототип",
      contractor_id: 1,
      status: 2,
    },
    {
      id: 3,
      title: "Нарисовать дизайн",
      contractor_id: 1,
      status: 1,
    },
  ],
};


describe("Renders header", () => {
  it("Renders all inputs", () => {
      const mockFilterFn=jest.fn()
      const wrapper=shallow(
      <Header 
        filterUser={mockFilterFn}
        filterStatus={mockFilterFn}
        filterTask={mockFilterFn}
        tasks={fakeTasks.tasks}
        users={fakeUser.users}
        statuses={fakeStatus.statuses}
      />)
      expect(wrapper.find('input').length).toBe(3)
      expect(wrapper.find('option').length).toBe(6)
  });
});
