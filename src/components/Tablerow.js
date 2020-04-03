import React from 'react';
import ReactDOM from 'react-dom';
import './tablerow.css';

export default class Tablerow extends React.Component{
constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
      }

handleClick(){
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
   render(){
       let btn1, btn2,btn3;
       if(this.props.row.status==="Новая" && this.state.isToggleOn){
           btn1=<input type="button" id="btnDo" className="btn btn-success" value="Выполнить"/>
           btn2=<input type="button" id="btnCancel" className="btn btn-warning"  value="Отменить"/>
       }
       else if(this.props.row.status==="Выполнена"  && this.state.isToggleOn) {
           btn3=<input type="button" id="btnClose" className="btn btn-danger"  value="Закрыть"></input>
       }

       else if((this.props.row.status==="Отменена" || this.props.row.status==="Закрыта" )  && this.state.isToggleOn) {
        btn3=<input type="button" id="btnClose" className="btn btn-danger"  disabled value="Нельзя изменить статус этой задачи"></input>
    }
       else{
         
       }
        return(
            <tr key={this.props.row.id}>
              <td>{this.props.row.id} </td>
              <td onClick={this.handleClick} id="title">  {this.props.row.title}</td>
              <td> {this.props.row.contractor_id}</td>
              <td> {this.props.row.status}</td>
              <td id="buttons"> {btn1} {btn2} {btn3}</td>
            </tr>
          )
    }
}