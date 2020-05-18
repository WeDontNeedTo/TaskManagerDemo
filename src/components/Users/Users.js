/* eslint-disable array-callback-return */
import React from "react";

const Users = ({ users, item }) => {
  return (
    <td>
      {users.users.map((user) => {
        if (item === user.id) {
          return ` ${user.last_name} ${user.first_name} `;
        }
      })}
    </td>
  );
};

export default Users;
