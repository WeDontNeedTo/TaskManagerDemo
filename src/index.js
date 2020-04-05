import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Tablerow from './components/Tablerow'
import * as serviceWorker from './serviceWorker';
import tasks from './tasks.json';
import usersdata from './users.json';
import statusesdata from './statuses.json';
import _ from 'lodash'
  


export default class MyComponent extends React.Component {

  constructor(props){
    super(props);
    this.state={
      tasks:tasks,
      users:usersdata,
      statuses:statusesdata
    }
  }

  componentDidMount(){

    const newTasks = _.cloneDeep(this.state.tasks)

    newTasks.tasks.map((item)=>{
      toCompare(this.state.users.users,this.state.statuses.statuses,item)
    })
    console.log(newTasks);
    this.setState({tasks:newTasks})
  }

  render() {

   return(
      <div className="container-fluid">
        <table border="1">
          <caption>Список задач</caption>
            <Header/>
              <tbody>
                {this.state.tasks.tasks.map((item)=>{
                  return(
                    <Tablerow 
                      key={item.id} 
                      row={item}
                    />
                  )
                })}
              </tbody>
        </table>
     </div>
    )     
  }
}


const toCompare=(arr1,arr2,item)=>{

  arr1.map(i=>{
    arr2.map(j=>{
      if (item.contractor_id === i.id )
           {
                item.contractor_id=`${i.last_name} ${i.first_name}`;
                console.log(item.contractor_id);
           }
      if (item.status === j.id ) 
           {
                item.status=j.title;
                console.log(item.status);
           }  
    })
  })
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
