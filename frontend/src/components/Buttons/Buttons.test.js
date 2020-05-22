import React from 'react'
import {shallow} from 'enzyme'
import Buttons from './Buttons'

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

  const fakeID={status:1}

  describe("Renders buttons", () => {
    it("Renders do and cnl btns", () => {
      const mockClick=jest.fn()
      const wrapper = shallow(
        <Buttons tasks={fakeTasks.tasks} item={fakeID} do={mockClick} />
      );
      expect(wrapper.find("input").length).toBe(2);
      expect(wrapper.find("#btnDo"));
      expect(wrapper.find("#btnCancel"));
      wrapper.find("#btnDo").simulate('click')
      wrapper.find("#btnCancel").simulate('click')
      expect(mockClick).toHaveBeenCalledTimes(2);
    });
  });
 