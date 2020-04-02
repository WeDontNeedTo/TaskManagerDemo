import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import tasks from './tasks.json';

    var tasksID = [];
    var titles = [];
    var statusID = [];
    var statuses = [];
    var userID = [];
    var users = [];



export default class MyComponent extends React.Component {
  render() {
    

    console.log(tasks);
    tasksID = tasks.tasks.map(function (task) {
      tasksID.push(task.id)
      return task.id;
  })
      console.log(tasksID);

      titles = tasks.tasks.map(function (title) {
        titles.push(title.title)
        return title.title;
    })
    console.log(titles);

    //получаем id статусов
    statusID = tasks.tasks.map(function (status) {
        statusID.push(status.status)
        return status.status;
    })
    console.log(statusID);

    //получаем id юзеров
    userID = tasks.tasks.map(function (user) {
        statusID.push(user.contractor_id)
        return user.contractor_id;
    })
    console.log(userID);

    const showTasksID = tasksID.map((item,i) =>
      <td key={item[i]}>{item} </td>)


    const showTitles = titles.map((item,i) =>
      <td key={item[i]}>{item} </td>)


    const showUsers = users.map((item,i) =>
      <td key={item[i]}>{item} </td>)

    return(
      <div>
        <table border="1">
        <caption>Список задач</caption>
                <tr>
                    <th>Задача</th>
                    <th>Название</th>
                    <th>Исполнитель</th>
                    <th>Статус</th>
                    <th>Сменить статус задачи</th>
                </tr>
                <tr>
                    {showTasksID[0]}
                    {showTitles[0]}
                    <td id="man1"></td>
                    <td id="status1"></td>
                    <td id="buttons" rowspan="8" align="center">
                        <input type="button" id="btnDo" class="btn btn-success"  disabled value="Выполнить"/> 
                        <input type="button" id="btnCancel" class="btn btn-warning"  disabled value="Отменить"/> 
                        <input type="button" id="btnClose" class="btn btn-danger"  disabled value="Закрыть"/> 
                        </td>
                </tr>
                <tr>
                    {showTasksID[1]}
                    {showTitles[1]}
                    <td id="man2"></td>
                    <td id="status2"></td>
                </tr>
                <tr>
                    {showTasksID[2]}
                    {showTitles[2]}
                    <td id="man3"></td>
                    <td id="status3"></td>
                </tr>
                <tr>
                    {showTasksID[3]}
                    {showTitles[3]}
                    <td id="man4"></td>
                    <td id="status4"></td>
                </tr>
                <tr>
                    {showTasksID[4]}
                    {showTitles[4]}
                    <td id="man5"></td>
                    <td id="status5"></td>
                </tr>
                <tr>
                    {showTasksID[5]}
                    {showTitles[5]}
                    <td id="man6"></td>
                    <td id="status6"></td>
                </tr>
                <tr>
                    {showTasksID[6]}
                    {showTitles[6]}
                    <td id="man7"></td>
                    <td id="status7"></td>
                </tr>
                <tr>
                    {showTasksID[7]}
                    {showTitles[7]}
                    <td id="man8"></td>
                    <td id="status8"></td>
                </tr>
         
        </table>
     </div>
    )     
  }
}



ReactDOM.render(
  <React.StrictMode>
    <MyComponent/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
