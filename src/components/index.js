import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import tasks from './tasks.json';
import usersdata from './users.json';
import statusesdata from './statuses.json';

    var tasksID = [];
    var titles = [];
    var statusID = [];
    var statuses = [];
    var userID = [];
    var users = [];


    //получаем id задач
    const getID=(arr,data)=>{
      arr=data.tasks.map(function(task){
        arr.push(task.id)
        return task.id;
      } )
    }
    //получаем задачи
    const getTitle=(arr,data)=>{
      arr=data.tasks.map(function(title){
        arr.push(title.title)
        return title.title;
      } )
    }
    //получаем id статусов
    const getStatusID=(arr,data)=>{
      arr=data.tasks.map(function(status){
        arr.push(status.status)
        return status.status;
      } )
    }
     //получаем id юзеров
    const getUserID=(arr,data)=>{
      arr=data.tasks.map(function(user){
        arr.push(user.contractor_id)
        return user.contractor_id;
      } )
    }





export default class MyComponent extends React.Component {
  
  constructor(props){
    
    super(props);
    this.doClick=this.doClick.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      click:true,
      do:false,
      cancel:false,
      close:false,
      tasks:[],
      users:[],
      statuses:[],
    }
  }

  doClick(){
    console.log("yo");
  }
  handleClick(i){

    let btnDo = document.querySelector('#btnDo');
    let btnCancel = document.querySelector('#btnCancel');
    let btnClose = document.querySelector('#btnClose');

    console.log('--->','clicked');
  
    if(this.state.click ===true){
      document.getElementById(`name`+`${i}`).style.backgroundColor='lightgrey';
      document.getElementById(`status`+`${i}`).style.backgroundColor='lightgrey';
      console.log(document.getElementById(`status`+`${i}`).innerHTML); // ---> "Новая"

        if(document.getElementById(`status`+`${i}`).innerHTML !== "Новая"){
          console.log("New task!!!")
          btnDo.disabled = !btnDo.disabled;
          btnCancel.disabled = !btnCancel.disabled;
        }
      this.setState({click:false})
    }
    
    else{
      document.getElementById(`name`+`${i}`).style.backgroundColor='white';
      document.getElementById(`status`+`${i}`).style.backgroundColor='white';
      btnDo.disabled = !btnDo.disabled;
      btnCancel.disabled = !btnCancel.disabled;
      this.setState({click:true});

    }
  }
    
  
  render() {

  getID(tasksID,tasks);
  getTitle(titles,tasks);
  getStatusID(statusID,tasks);
  getUserID(userID, tasks);

  let name="name";
  let status="status";
 
    // сравниваем
    this.compare();

    const showTasksID = tasksID.map((item,i) =>
      <td key={item[i]}>{item} </td>)


    const showTitles = titles.map((item,i) =>
      <td key={item[i]} id={name+i} onClick={()=>this.handleClick(i)}>{item} </td>)


    const showUsers = users.map((item,i) =>
      <td key={item[i]}>{item} </td>)

    const showStatuses = statuses.map((item,i) =>
      <td key={item[i]} id={status+i} >{item} </td>)

    return(
      <div className="container-fluid">
        <table border="1">
        <caption>Список задач</caption>
          <Header/>
                <tr>
                    {showTasksID[0]}
                    {showTitles[0]}
                    {showUsers[0]}
                    {showStatuses[0]}
                    <td id="buttons" rowspan="8" align="center">
                        <input type="button" id="btnDo" className="btn btn-success" onClick={this.doClick}  disabled value="Выполнить" /> {/* !!!! не работает( */}
                        <input type="button" id="btnCancel" className="btn btn-warning"  disabled value="Отменить"/> 
                        <input type="button" id="btnClose" className="btn btn-danger"  disabled value="Закрыть"/> 
                        </td>
                </tr>
                <tr>
                    {showTasksID[1]}
                    {showTitles[1]}
                    {showUsers[1]}
                    {showStatuses[1]}
                </tr>
                <tr>
                    {showTasksID[2]}
                    {showTitles[2]}
                    {showUsers[2]}
                    {showStatuses[2] }
                </tr>
                <tr>
                    {showTasksID[3]}
                    {showTitles[3]}
                    {showUsers[3] }
                    {showStatuses[3] }
                </tr>
                <tr>
                    {showTasksID[4]}
                    {showTitles[4]}
                    {showUsers[4]}
                    {showStatuses[4]}
                </tr>
                <tr>
                    {showTasksID[5]}
                    {showTitles[5]}
                    {showUsers[5]}
                    {showStatuses[5]}
                </tr>
                <tr>
                    {showTasksID[6]}
                    {showTitles[6]}
                    {showUsers[6]}
                    {showStatuses[6]}
                </tr>
                <tr>
                    {showTasksID[7]}
                    {showTitles[7]}
                    {showUsers[7]}
                    {showStatuses[7]}
                </tr>
         
        </table>
     </div>
    )     
  }
// сравниваем по id название статуса
  compare() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 4; j++) {
        if (statusID[i] === (statusesdata.statuses[j].id)) {
          statuses.push(statusesdata.statuses[j].title);
        }
      }
    }
    // сравниваем по id ФИО юзера
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 3; j++) {
        if (userID[i] === (usersdata.users[j].id)) {
          users.push(usersdata.users[j].first_name + " " +
            usersdata.users[j].last_name);
        }
      }
    }
  }
}





ReactDOM.render(
  <React.StrictMode>
    <MyComponent/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


let tasksHtml = document.querySelectorAll('#name');


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
