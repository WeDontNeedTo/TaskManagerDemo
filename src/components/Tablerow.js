import React from 'react';
import ReactDOM from 'react-dom';
import './tablerow.css';



export default class Tablerow extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        isToggleOn: false,
        isDo:false,
        isCancel:false,
        isClose:false
    };

    this.handleClick = this.handleClick.bind(this);
    this.clickDo=this.clickDo.bind(this);
    this.clickCancel=this.clickCancel.bind(this);
    this.clickClose=this.clickClose.bind(this);
}

handleClick(){
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
}

clickDo(){
    this.setState({isDo:true});
    console.log("DO!")
}

clickCancel(){
    this.setState({isCancel:true});
    console.log("CNL!");
}

clickClose(){
    this.setState({isClose:true});
    console.log("CLS!");
}



render(){
    // Здесь будут кнопки
    let btn1, btn2,btn3;

    if( this.props.row.status==="Новая"  && this.state.isToggleOn)
    {
        btn1=<input type="button" id="btnDo" onClick={this.clickDo} className="btn btn-success" value="Выполнить"/>
        btn2=<input type="button" id="btnCancel" onClick={this.clickCancel}  className="btn btn-warning"  value="Отменить"/>
    }

    else if( this.props.row.status==="Выполнена"  && this.state.isToggleOn) 
    {
        btn3=<input type="button" id="btnClose" onClick={this.clickClose}  className="btn btn-danger"  value="Закрыть"></input>
    }

// После изменений эта проверка не работает, т.к. теряется this.props.row.status :С

    // else if((this.props.row.status==="Отменена" || this.props.row.status==="Закрыта" )  && this.state.isToggleOn) 
    // {
    //      btn3=<input type="button" id="btnClose" className="btn btn-danger"  disabled value="Нельзя изменить статус этой задачи"></input>
    // }

    else
    {
      // Ничего не делаем, балдеем)
    }

    const isDo=this.state.isDo;
    const isCancel=this.state.isCancel;
    const isClose=this.state.isClose;

    if(isDo)
    {
        console.log("did");
        btn1=null;
        btn2=null;
        btn3=<input type="button" id="btnClose" onClick={this.clickClose}  className="btn btn-danger"  value="Закрыть"></input>
    }

    if(isCancel)
    {
        console.log("cNCELed");
        btn1=null;
        btn2=null;
        btn3=null;
    }

    if(isClose)
    {
        console.log("closed");
        btn1=null;
        btn2=null;
        btn3=null;
    }


        return(
            <tr key={this.props.row.id}>
              <td>{this.props.row.id} </td>
              <td onClick={this.handleClick} id="title">{this.props.row.title}</td>
              <td> {this.props.row.contractor_id}</td>
              <Status isDo={isDo} isCancel={isCancel} isClose={isClose} default={this.props.row.status}/>
              <td id="buttons"> {btn1} {btn2} {btn3} </td>
            </tr>
          )
    }
}


function Done(props){
    return <td id="status"> Выполнена </td>
}

function Canceled(props){
    return <td id="status"> Отменена </td>
}

function Closed(props){
    return <td id="status"> Закрыта </td>
}


function Status(props){
    let isDo = props.isDo
    const isCancel=props.isCancel
    const isClose=props.isClose
    if(isClose)
    {
        return <Closed/>
    }
    else if(isCancel)
    {
        return <Canceled/>
    }
    else if(isDo)
    {
        return <Done/>;
    }
    else 
    {
        return <td id="status"> {props.default} </td>
    }
    
}
