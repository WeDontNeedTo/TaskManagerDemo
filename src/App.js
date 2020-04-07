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
      isDo:false,
      isCancel:false,
      isClose:false
    }

    this.clickDo=this.clickDo.bind(this);
    this.clickCancel=this.clickCancel.bind(this);
    this.clickClose=this.clickClose.bind(this);
   
  }

 
clickDo(){
    this.setState({isDo:true});
    console.log("DO!")
}

clickCancel(){
    this.setState({isCancel:true});
    console.log("CNL!");
}

clickClose(){
    this.setState({isClose:true});
    console.log("CLS!");
}


  componentDidMount(){
    
    const newTasks = _.cloneDeep(this.state.tasks)
    this.setState({tasks:newTasks})
  }
    

  render() {
    const { isDo, isCancel, isClose}=this.state;

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

                    {/* в юзеры я пробую передать item c мапа тасок, который рендерится здесь выше,
                        значения выводятся, все имена и фамилии на месте - см. Users.js
                     */}

                    <Users users={this.state.users} item={item.contractor_id} />

                    {/* в статусы я передаю стейты и обрабатываю там по-другому
                      значения "как бы есть", т.к. рендер кнопок зависит от статусов
                      но в таблице их нет - см Status.js
                     */}
                    <Status status = {this.state.statuses} task={this.state.tasks}/>
                    <Buttons status={item.status} 
                      func1={this.clickDo} func2={this.clickCancel} func3={this.clickClose} 
                      isDo={isDo} isCancel={isCancel} isClose={isClose}/> 
            </tr>)
                })}
              </tbody>
        </table>
     </div>
    )     
  }
}

export default App