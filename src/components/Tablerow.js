import React from 'react';
import ReactDOM from 'react-dom';
import './tablerow.css';
import Buttons from './Buttons'
import Status from './Status'

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

    const { isDo, isCancel, isClose}=this.state;

    return(
            <tr key={this.props.row.id}>
              <td>{this.props.row.id} </td>
              <td onClick={this.handleClick} id="title">{this.props.row.title}</td>
              <td> {this.props.row.contractor_id}</td>
              <Status isDo={isDo} isCancel={isCancel} isClose={isClose} default={this.props.row.status}/>
              <Buttons status={this.props.row.status} toggle={this.state.isToggleOn} 
                func1={this.clickDo} func2={this.clickCancel} func3={this.clickClose} 
                isDo={isDo} isCancel={isCancel} isClose={isClose}
              /> 
              {/* <td><Search1 value ={this.props.row.title}/></td> */}
            </tr>
          )
    }
}



// function Search1(props) {
   
//     let result = props.value.toLowerCase();
//     const input = <input id="search" type="text" className="form-control" value="сделать"/>
    
//     return (
//         <form>
//             {input}
//             <button id="search-submit" type="submit" className="btn btn-outline-info">Искать</button>
//         </form>
//       );
//     }




     

    