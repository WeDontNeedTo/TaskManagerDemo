import React from 'react';
import './tablerow.css';


function Buttons(props){

    if(props.isClose)
    {
        console.log("closed");
        return(
            <td id="buttons"></td>
        )
    
    }

    if(props.isCancel)
    {
        console.log("cNCELed");
        return(
            <td id="buttons"></td>
        )
       
    }

    if(props.isDo)
    {
        console.log("did");
        return(
            <td id="buttons">
                <input type="button" id="btnClose" onClick={props.func3}  className="btn btn-danger btn-sm"  value="Закрыть"></input>
            </td>
        )
     
    }


    if( props.status==="Новая" )
    {
        return(
            <td id="buttons">
                <input type="button" id="btnDo" onClick={props.func1} className="btn btn-success btn-sm" value="Выполнить"/>
                <input type="button" id="btnCancel" onClick={props.func2}  className="btn btn-warning btn-sm"  value="Отменить"/>
            </td>
        )
        
    }

    else if( props.status==="Выполнена" ) 
    {
        return(
            <td id="buttons">
                <input type="button" id="btnClose" onClick={props.func3}  className="btn btn-danger btn-sm"  value="Закрыть"></input>
            </td>
        )
        
    }


    else
    {
        return(
            <td id="buttons"></td>
        )
    
    }

}

export default Buttons