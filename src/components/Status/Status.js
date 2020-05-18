/* eslint-disable array-callback-return */
import React from "react";

const Status = ({ item, status }) => {
  function newColor(num) {
    //функция для смены текста задачи
    let style;
    switch (num) {
      case 2:
        style = { color: "#38c33b", fontWeight: "bold" };
        break;
      case 3:
        style = { color: "#696969", fontWeight: "bold" };
        break;
      case 4:
        style = { color: "#FFA500", fontWeight: "bold" };
        break;
      default:
        break;
    }
    return style;
  }

  const st = newColor(item);

  return (
    <td align="center">
      {status.statuses.map((status) => {
        if (item === status.id) {
          return (
            <p key={status.id} style={st} className={`status${item}`}>
              {status.title}
            </p>
          );
        }
      })}
    </td>
  );
};

export default Status;
