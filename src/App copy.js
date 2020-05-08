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
      tasks:tasks.tasks,
      users:usersdata,
      statuses:statusesdata,
      // searchFilter: '',
      // contractorFilter: '',
      // statusFilter:'',
      value:null
    }
   
  }

 
  doClick(arr){
    this.setState({tasks:arr}, ()=>{
      localStorage.setItem('tasks', JSON.stringify(arr))
    })

  } 

  filter(val,flag){
    //let newTasks=_.cloneDeep(tasks.tasks);
    console.log(val);
    this.setState({
      // searchFilter: null,
      // contractorFilter: null,
      // statusFilter:null,
      value:null,
      tasks:tasks.tasks //newTasks
    })

    console.log(val==='null');
    if(val==='null'|| val===''){
      this.setState({ 
        // searchFilter: null,
        // contractorFilter: null,
        // statusFilter:null,
        value:null,
        tasks:tasks.tasks //newTasks
      })
    }
    
    else{

      if(flag==='user'){
          this.setState({
            contractorFilter:flag,
            value:val,
            tasks:this.state.tasks.filter(i=>i.contractor_id==val ) //newTasks
          })

          
        }

      if(flag==='status'){
        this.setState({
          statusFilter:flag,
          value:val,
          tasks:this.state.tasks.filter(i=>i.status==val) //newTasks
        })
      }

      if(flag==='title'){
        this.setState({
          searchFilter:flag,
          value:val,
          tasks:this.state.tasks.filter(i=>(i.title.toLowerCase().includes(val.toLowerCase())))
                          //newTasks
        })
          // if(val===''){
          //   this.setState({
          //     searchFilter:null,
          //     value:null,
          //     tasks:tasks.tasks
          //   })
        }
      
        // this.setState({
        //   flag:flag,
        //   value:val
        // })
      
    } 
    //console.log(this.state.flag, this.state.value)
    
  }


  
  // showTable(value,arr){
  //   console.log(this.state.contractorFilter,this.state.statusFilter,this.state.searchFilter,value,arr)
  //   // console.log(a1==='user');
  //   // console.log(arr);

  //   let filtered=arr;
   

  //   if(this.state.contractorFilter==='user') filtered= this.state.tasks.filter(i=>i.contractor_id==value )
  //   if(this.state.statusFilter==='status') filtered=this.state.tasks.filter(i=>i.status==value )
  //   if(this.state.searchFilter==='title') filtered=this.state.tasks.filter(i=>(i.title.toLowerCase().includes(value.toLowerCase())))

  //   console.log(filtered)
  //   return filtered;

       // if(a1==null && a2==null){
       //   console.log("standard tasks")
       //   return this.state.tasks
       // }
       // else{
       //   console.log(a1);
       //   switch(a1){
       //     case 'user':
       //       console.log("filtered tasks user")
       //       console.log(this.state.tasks.filter(i=>i.contractor_id==a2 ))
       //       return this.state.tasks.filter(i=>i.contractor_id==a2 )
       //     case 'status':
       //       console.log("filtered tasks status")
       //       return this.state.tasks.filter(i=>i.status==a2 )
     //     case 'title':
       //       console.log("filtered tasks title")
       //       return this.state.tasks.filter(i=>(i.title.toLowerCase().includes(a2.toLowerCase())))
       //       default:break;
       //     }
          
       //   }
       
  // }

  clear(){
    localStorage.clear();
  }

  componentDidMount(){
    if(localStorage.tasks){
      this.setState({tasks:JSON.parse(localStorage.getItem('tasks'))})
      console.log("Что то есть!")
    }
    
  }

  render() {
   return(
      <div className="container-fluid">
        <table border="1">
          <caption>
            <button className="btn btn-outline-warning btn-sm" onClick={this.clear.bind(this)}>Сбросить localStorage</button>
          </caption>
            <Header filterUser={this.filter.bind(this)} filterStatus={this.filter.bind(this)} filterTask={this.filter.bind(this)} 
             tasks={this.state.tasks} users={this.state.users.users} statuses={this.state.statuses.statuses}/>
              <tbody>
                {this.state.tasks.map((item)=>{
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

//this.showTable(this.state.value,