import React from "react";

const Header = ({
  setTermSeacrh,
  setContractorFilter,
  setStatusFilter,
  tasks,
  users,
  statuses,
}) => {
  const onSearch = (event) => {
    setTermSeacrh(event.target.value);
  };
  const onFilterUser = (flag, value) => {
    setContractorFilter(flag, value);
  };

  const onFilterStatus = (flag, value) => {
    setStatusFilter(flag, value);
  };

  return (
    <thead>
      <tr>
        <th>№</th>
        <th>
          Название
          <form>
            <input
              autoFocus={true}
              className="form-search form-control"
              type="text"
              placeholder="Поиск по задачам.."
              onChange={onSearch}
            />
          </form>
        </th>

        <th>
          Исполнитель
          <form>
            <select
              className="form-control"
              onChange={(event) => onFilterUser("user", event.target.value)}
            >
              <option value={"all"}>Все</option>
              {users.map((i) => {
                return (
                  <option key={i.id} value={i.id}>
                    {i.last_name} {i.first_name}
                  </option>
                );
              })}
            </select>
          </form>
        </th>

        <th>
          Статус
          <form>
            <select
              onChange={(event) => onFilterStatus("status", event.target.value)}
              className="form-control"
            >
              <option value={"all"}>Все</option>
              {statuses.map((i) => {
                return (
                  <option key={i.id} value={i.id}>
                    {i.title}
                  </option>
                );
              })}
            </select>
          </form>
        </th>

        <th>Сменить статус задачи</th>
      </tr>
    </thead>
  );
};

export default Header;
