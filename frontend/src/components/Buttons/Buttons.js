/* eslint-disable array-callback-return */
import React from "react";
import _ from "lodash";

const Buttons = ({ item, tasks, doClick }) => {
  function handleClick(btn, action) {
    let arr = _.cloneDeep(tasks);

    arr.map((i) => {
      if (i.id === btn.id) {
        return (i.status = action);
      }
    });
    doClick(arr);
  }

  if (item.status === 1) {
    return (
      <td id="buttons">
        <input
          type="button"
          id="btnDo"
          onClick={() => handleClick(item, 2)}
          className="btn btn-primary btn-sm"
          value="Выполнить"
        />
        <input
          type="button"
          id="btnCancel"
          onClick={() => handleClick(item, 4)}
          className="btn btn-warning btn-sm"
          value="Отменить"
        />
      </td>
    );
  } else if (item.status === 2) {
    return (
      <td id="buttons">
        <input
          type="button"
          id="btnClose"
          onClick={() => handleClick(item, 3)}
          className="btn btn-success btn-sm"
          value="Закрыть"
        ></input>
      </td>
    );
  } else {
    return (
      <td id="buttons">
        <p className="unactive-status-p">Эта задача больше не активна</p>
      </td>
    );
  }
};

export default Buttons;
