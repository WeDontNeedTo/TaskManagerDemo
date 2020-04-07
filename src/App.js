import React from 'react';
import './index.css';
import Header from './components/Header';
import Buttons from './components/Buttons'
import Status from './components/Status'
import Users from './components/Users'
import tasks from './tasks.json';
import usersdata from './users.json';
import statusesdata from './statuses.json';
import _ from 'lodash'
  

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      tasks:tasks,
      users:usersdata,
      statuses:statusesdata,
    }
   
  }

 
  doClick(arr){
    this.setState({tasks:arr})
    let state = JSON.stringify(this.state.tasks)
    localStorage.setItem('tasks', state)
  } 



  componentDidMount(){
    if(localStorage.tasks){
      this.setState({tasks:JSON.parse(localStorage.getItem('tasks'))})
      console.log("Что то есть!")
    }
    else{
      console.log("Чего то нет!")
      const newTasks = _.cloneDeep(this.state.tasks)
      this.setState({tasks:newTasks})
    }
    
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
                    <tr key={item.id}>
                    <td>{item.id} </td>
                    <td id="title">{item.title}</td>
                    <Users users={this.state.users} item={item.contractor_id} />
                    <Status status = {this.state.statuses} item={item.status}/>
                    <Buttons tasks={this.state.tasks} item={item} do={this.doClick.bind(this)}/> 
            </tr>)
                })}
              </tbody>
        </table>
     </div>
    )     
  }
}

export default App
