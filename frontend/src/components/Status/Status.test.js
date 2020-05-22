import React from 'react'
import {shallow} from 'enzyme'
import Status from './Status'

const fakeStatus = {
    statuses: [
        {
          id: 1,
          title:"Drink coffee"
        },
        {
          id: 2,
          title:"Test our app"
        },
        {
          id: 3,
          title:"Brush your teeth"
        }
    ]
  }

  const fakeID=[1,2,3]

  describe("Renders with statuses info", ()=>{
    it("Render with id 2 and title 'Test..' ", () => {
        const wrapper=shallow(<Status status={fakeStatus} item={fakeID[1]} />)
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text('p')).toBe("Test our app ");
        expect(wrapper.find('p').hasClass('status2'));
        
     });

    it("Render with id 1 and title 'Drink..' ", () => {
        const wrapper=shallow(<Status status={fakeStatus} item={fakeID[0]} />)
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text('p')).toBe("Drink coffee ");
        expect(wrapper.find('p').hasClass('status1'));
        
     });

    it("Render with id 3 and title 'Brush..' ", () => {
        const wrapper=shallow(<Status status={fakeStatus} item={fakeID[2]} />)
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text('p')).toBe("Brush your teeth ");
        expect(wrapper.find('p').hasClass('status3'));
        
     });
  })

  