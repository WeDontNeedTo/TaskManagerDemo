import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Tablerow from './components/Tablerow'
import * as serviceWorker from './serviceWorker';
import tasks from './tasks.json';
import usersdata from './users.json';
import statusesdata from './statuses.json';
  


export default class MyComponent extends React.Component {

  constructor(props){
    super(props);
    this.state={
      tasks:tasks,
      users:usersdata,
      statuses:statusesdata,
      items:[]
    }
  }

  componentDidMount(){
    let items=this.state.tasks;

    items.tasks.map((item)=>{
      this.state.users.users.map((i)=>{
        this.state.statuses.statuses.map((j)=>{
            
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
    })

    this.setState({
      tasks:items
     })

  }

  render() {
   return(
      <div className="container-fluid">
        <table border="1">
          <caption>Список задач</caption>
            <Header/>
                {this.state.tasks.tasks.map((item)=>{
                 return(
                  <Tablerow key={item.id} row={item}/>
                 )
               })}
        </table>
     </div>
    )     
  }
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
