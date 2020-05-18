import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";
import Status from "./components/Status/Status";
import Users from "./components/Users/Users";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import tasks from "./utils/tasks.json";
import usersdata from "./utils/users.json";
import statusesdata from "./utils/statuses.json";
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks.tasks,
      users: usersdata,
      statuses: statusesdata,
      term: "",
      contractorFilter: "",
      statusFilter: "",
      valueUser: "",
      valueStatus: "",
    };
  }

  doClick(arr) {
    this.setState({ tasks: arr }, () => {
      localStorage.setItem("tasks", JSON.stringify(arr));
    });
  }

  search = (term, arr) => {
    if (term === "" || term == null) {
      return arr;
    }
    return arr.filter((i) =>
      i.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  setTermSeacrh = (term) => {
    this.setState({ term: term });
  };

  filter = (flagUser, flagStatus, valueUser, valueStatus, arr) => {
    if (flagStatus !== "" || flagUser !== "") {
      if (flagUser === "user") {
        arr = arr.filter((i) => i.contractor_id === +valueUser);
      }
      if (flagStatus === "status") {
        arr = arr.filter((i) => i.status === +valueStatus);
      }
    } else {
      return arr;
    }

    return arr;
  };

  setContractorFilter = (flagContractor, value) => {
    if (value === "all") {
      this.setState(() => {
        return { contractorFilter: "", valueUser: value };
      });
    } else {
      this.setState(() => {
        return { contractorFilter: flagContractor, valueUser: value };
      });
    }
  };

  setStatusFilter = (flagStatus, value) => {
    if (value === "all") {
      this.setState(() => {
        return { statusFilter: "", valueStatus: value };
      });
    } else {
      this.setState(() => {
        return { statusFilter: flagStatus, valueStatus: value };
      });
    }
  };

  addTask = (newItem) => {
    let newTasks = _.cloneDeep(this.state.tasks);
    newTasks.push(newItem);
    this.setState(
      () => {
        return { tasks: newTasks };
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      }
    );
  };

  clear() {
    localStorage.clear();
  }

  componentDidMount() {
    if (localStorage.tasks) {
      this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) });
    }
  }

  render() {
    const {
      term,
      contractorFilter,
      statusFilter,
      valueUser,
      valueStatus,
      tasks,
    } = this.state;
    const visibleTasks = this.filter(
      contractorFilter,
      statusFilter,
      valueUser,
      valueStatus,
      this.search(term, tasks)
    );

    return (
      <div className="container-fluid">
        <table border="1" className="main-table">
          <caption>
            <AddTaskForm addTask={this.addTask} />
            <button
              className="btn btn-warning btn-sm"
              onClick={this.clear.bind(this)}
            >
              Сбросить localStorage
            </button>
          </caption>
          <Header
            setTermSeacrh={this.setTermSeacrh}
            setContractorFilter={this.setContractorFilter}
            setStatusFilter={this.setStatusFilter}
            tasks={tasks}
            users={this.state.users.users}
            statuses={this.state.statuses.statuses}
          />
          <tbody>
            {visibleTasks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index} </td>
                  <td id="title">{item.title}</td>
                  <Users users={this.state.users} item={item.contractor_id} />
                  <Status status={this.state.statuses} item={item.status} />
                  <Buttons
                    tasks={tasks}
                    item={item}
                    doClick={this.doClick.bind(this)}
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
