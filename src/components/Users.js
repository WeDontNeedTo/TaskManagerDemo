  
import React, { Component } from 'react'


class Users extends Component {
    //здесь я просто вывожу ФИО, если нашел соответствие, массив не меняется 
  render() {
    return (
      <td>
        {
          this.props.users.users.map(user => {
            if (this.props.item === user.id) {
                return ` ${user.last_name} ${user.first_name} `
            }
          })
        }
      </td>
    )
  }
}

export default Users