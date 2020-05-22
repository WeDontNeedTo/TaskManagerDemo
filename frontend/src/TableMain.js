import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";
import Status from "./components/Status/Status";
import Users from "./components/Users/Users";
import Spinner from "./components/Spinner/Spinner";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import _ from "lodash";
import TaskManagerService from "./services/TaskManagerService";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadingTrue, loadingFalse } from "./utils-redux/actions";

//добавялем наше API для работы с сервером
const API = new TaskManagerService();

class TableMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      users: [],
      statuses: [],
      term: "",
      contractorFilter: "",
      statusFilter: "",
      valueUser: "",
      valueStatus: "",
    };
  }

  //добавляем в стейт флаг загрузки
  static mapStateToProps = (state) => {
    return {
      loading: state,
    };
  };

  //добавляем action-creators
  static mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        loadingTrue,
        loadingFalse,
      },
      dispatch
    );
  };

  // сохраняем в local storage
  doClick(arr) {
    this.setState({ tasks: arr }, () => {
      localStorage.setItem("tasks", JSON.stringify(arr));
    });
  }

  // поиск по задачам
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

  //фильтры
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

  //фильтр по рабочим
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
  //фильтр по статусам
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

  //добавляем новую задачу
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

  //сбросить local storage
  clear() {
    localStorage.clear();
  }

  async componentDidMount() {
    // получаем данные с сервера
    await API.getUsers().then((res) => {
      this.setState(() => {
        return { users: res.data };
      });
    });

    await API.getStatuses().then((res) => {
      this.setState(() => {
        return { statuses: res.data };
      });
    });
    await API.getTasks().then((res) => {
      this.setState(() => {
        return { tasks: res.data };
      });
    });

    // снимаем флаг, что данные грузятся
    this.props.loadingFalse();

    // проверяем есть ли local storage
    // если да - то возьмем данные оттуда
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

    if (this.props.loading) {
      return (
        <div className="container-fluid">
          <Spinner />
        </div>
      );
    }

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
            users={this.state.users}
            statuses={this.state.statuses}
          />
          <tbody>
            {visibleTasks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1} </td>
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

export default connect(
  TableMain.mapStateToProps,
  TableMain.mapDispatchToProps
)(TableMain);
