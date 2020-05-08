import React from "react";
import "./index.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Status from "./components/Status";
import Users from "./components/Users";
import tasks from "./tasks.json";
import usersdata from "./users.json";
import statusesdata from "./statuses.json";
import _ from "lodash";

let filtered = [];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks.tasks,
      users: usersdata,
      statuses: statusesdata,
      flag: null,
      value: null,
    };
  }

  doClick(arr) {
    this.setState({ tasks: arr }, () => {
      localStorage.setItem("tasks", JSON.stringify(arr));
    });
  }

  filter(val, flag) {
    console.log(val);
    this.setState({
      flag: null,
      value: null,
    });

    console.log(val === "null");
    if (val === "null") {
      this.setState({
        flag: null,
        value: null,
      });
    } else {
      this.setState({
        flag: flag,
        value: val,
      });
    }

    console.log(this.state.flag, this.state.value);
  }

  showTable(flag, value, arr) {
    console.log(flag, value, arr);

    filtered = _.cloneDeep(arr);
    console.log(filtered);

    if (flag === "user")
      {filtered = filtered.filter((i) => i.contractor_id == value);}
    if (flag === "status") 
      {filtered = filtered.filter((i) => i.status == value);}
    if (flag === "title")
      {filtered = filtered.filter((i) =>
        i.title.toLowerCase().includes(value.toLowerCase())
      );}

    console.log(filtered);
    return filtered;

    // if(flag==null && value==null){
    //   console.log("standard tasks")
    //   return this.state.tasks
    // }
    // else{
    //   console.log(flag);
    //   switch(flag){
    //     case 'user':
    //       console.log("filtered tasks user")
    //       console.log(this.state.tasks.filter(i=>i.contractor_id==value ))
    //       return this.state.tasks.filter(i=>i.contractor_id==value )
    //     case 'status':
    //       console.log("filtered tasks status")
    //       return this.state.tasks.filter(i=>i.status==value )
    //     case 'title':
    //       console.log("filtered tasks title")
    //       return this.state.tasks.filter(i=>(i.title.toLowerCase().includes(value.toLowerCase())))
    //       default:break;
    //     }

    //   }
  }

  clear() {
    localStorage.clear();
  }

  componentDidMount() {
    if (localStorage.tasks) {
      this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) });
      console.log("Что то есть!");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <table border="1">
          <caption>
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={this.clear.bind(this)}
            >
              Сбросить localStorage
            </button>
          </caption>
          <Header
            filterUser={this.filter.bind(this)}
            filterStatus={this.filter.bind(this)}
            filterTask={this.filter.bind(this)}
            tasks={this.state.tasks}
            users={this.state.users.users}
            statuses={this.state.statuses.statuses}
          />
          <tbody>
            {this.showTable(
              this.state.flag,
              this.state.value,
              this.state.tasks
            ).map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id} </td>
                  <td id="title">{item.title}</td>
                  <Users users={this.state.users} item={item.contractor_id} />
                  <Status status={this.state.statuses} item={item.status} />
                  <Buttons
                    tasks={this.state.tasks}
                    item={item}
                    do={this.doClick.bind(this)}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
