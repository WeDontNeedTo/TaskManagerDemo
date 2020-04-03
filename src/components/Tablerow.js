import React from 'react';
import ReactDOM from 'react-dom';
import tasks from '../tasks.json';
import usersdata from '../users.json';
import statusesdata from '../statuses.json';


export default class Tablerow extends React.Component{
    
    render(){
        return(
            <tr key={this.props.row.id}>
              <td>{this.props.row.id} </td>
              <td> {this.props.row.title}</td>
              <td> {this.props.row.contractor_id}</td>
              <td> {this.props.row.status}</td>
            </tr>
          )
    }
}