  
import React, { Component } from 'react'


class Users extends Component {
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