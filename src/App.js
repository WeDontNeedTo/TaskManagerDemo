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
      flag:null,
      value:null
    }
   
  }

 
  doClick(arr){
    this.setState({tasks:arr}, ()=>{
      localStorage.setItem('tasks', JSON.stringify(arr))
    })

  } 

  filter(val,flag){
    console.log(val);
    this.setState({
      flag:null,
      value:null
    })
    console.log(val==='null');
    if(val==='null'){
      this.setState({
        flag:null,
        value:null
      })
    }
    else{
      if(typeof(val)==="string"){
        this.setState({
          flag:flag,
          value:+val
        })
      }
      else{
        this.setState({
          flag:flag,
          value:val
        })
      }
      
    }
 

    
    console.log(this.state.flag, this.state.value)
    
  }


  
  showTable(a1,a2){
    console.log(this.state.flag, this.state.value)
      if(a1==null && a2==null){
        console.log("standard tasks")
        return this.state.tasks
      }
      else{
        console.log(a1);
        switch(a1){
          case 'user':
            console.log("filtered tasks user")
            let mas=_.cloneDeep(this.state.tasks);
            mas.tasks = mas.tasks.filter(i=>i.contractor_id===a2 )
            console.log(mas);
            return mas
          case 'status':
            console.log("filtered tasks status")
            let arr=_.cloneDeep(this.state.tasks);
            arr.tasks = arr.tasks.filter(i=>i.status===a2 )
            console.log(arr);
            return arr
          case 'title':
             console.log("filtered tasks title")
            //  let s=_.cloneDeep(this.state.tasks);
            //  s.tasks = s.tasks.filter((i,index)=> i.title===a2[index].title )
             console.log(a2);
             return a2

            default:break;

        }
       
      }
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
            <Header filterUser={this.filter.bind(this)} filterStatus={this.filter.bind(this)} filterTask={this.filter.bind(this)} tasks={this.state.tasks} users={this.state.users.users} statuses={this.state.statuses.statuses}/>
              <tbody>
                {this.showTable(this.state.flag,this.state.value).tasks.map((item)=>{
                  return(
                    <tr key={item.id}>
                    <td>{item.id} </td>
                    <td id="title">{item.title}</td>
                    <Users users={this.state.users} item={item.contractor_id} />
                    <Status status = {this.state.statuses} item={item.status}/>
                    <Buttons tasks={this.state.tasks}  item={item} do={this.doClick.bind(this)}/> 
            </tr>)
                })}
              </tbody>
        </table>
     </div>
    )     
  }
}

export default App


    // if(flag) {
    //   this.setState({tasks:tasks})
    //   this.setState({tasks:mas});
    // }
    // else{
    //   this.setState({tasks:tasks})
    // }

    // let mas= _.cloneDeep(this.props.tasks);
    //   mas.tasks=mas.tasks.filter(i=>{
    //     console.log(i.contractor_id);
    //     console.log(+this.state.value)
    //     console.log(i.contractor_id=== +this.state.value);
    //     return i.contractor_id=== +this.state.value;
    //   })
    // console.log(mas.tasks);
    