import React from "react";
import _ from "lodash";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "null", flag: "null", value1: "null" };

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleSubmitStatus = this.handleSubmitStatus.bind(this);
    this.searchTasks = this.searchTasks.bind(this);
  }

  searchTasks(flag, event) {
    console.log(event.target.value);
    this.setState({ flag: flag, value: event.target.value }, () => {
      this.props.filterTask(this.state.value, this.state.flag);
    });
  }

  handleChangeUser(flag, event) {
    this.setState({ value: event.target.value, flag: flag });
    console.log(this.state.value);
    console.log(this.state.flag);
  }

  handleSubmitUser(event) {
    this.props.filterUser(this.state.value, this.state.flag);
    event.preventDefault();
  }

  handleChangeStatus(flag, event) {
    this.setState({ value1: event.target.value, flag: flag });
  }

  handleSubmitStatus(event) {
    this.props.filterStatus(this.state.value1, this.state.flag);
    event.preventDefault();
  }

  render() {
    const title = "title";
    const user = "user";
    const status = "status";
    return (
      <thead>
        <tr>
          <th>№</th>
          <th>
            Название
            <form>
              <input
                type="text"
                placeholder="Поиск по задачам.."
                onChange={this.searchTasks.bind(this, title)}
              />
            </form>
          </th>

          <th>
            Исполнитель
            <form onSubmit={this.handleSubmitUser}>
              <select
                value={this.state.value}
                onChange={this.handleChangeUser.bind(this, user)}
              >
                <option value={"null"}>Все</option>
                {this.props.users.map((i) => {
                  return (
                    <option key={i.id} value={i.id}>
                      {i.last_name} {i.first_name}
                    </option>
                  );
                })}
              </select>
              <input type="submit" value="Применить фильтр" />
            </form>
          </th>

          <th>
            Статус
            <form onSubmit={this.handleSubmitStatus}>
              <select
                value={this.state.value1}
                onChange={this.handleChangeStatus.bind(this, status)}
              >
                <option value={"null"}>Все</option>
                {this.props.statuses.map((i) => {
                  return (
                    <option key={i.id} value={i.id}>
                      {i.title}
                    </option>
                  );
                })}
              </select>
              <input type="submit" value="Применить фильтр" />
            </form>
          </th>

          <th>Сменить статус задачи</th>
        </tr>
      </thead>
    );
  }
}

export default Header;
