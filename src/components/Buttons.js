import React from 'react';
import './tablerow.css';
import _ from 'lodash'


function Buttons(props){

   
   function doClick(btn, action){
        let i=props.tasks.tasks.indexOf(btn,0);
        let arr= _.cloneDeep(props.tasks);
        arr.tasks[i].status=action;
        props.do(arr)
     }


    if(props.item.status===1 )
    {
        return(
            <td id="buttons">
                <input type="button" id="btnDo" onClick={()=>doClick(props.item,2)}  className="btn btn-primary btn-sm" value="Выполнить"/>
                <input type="button" id="btnCancel"  onClick={()=>doClick(props.item,4)} className="btn btn-warning btn-sm"  value="Отменить"/>
            </td>
        )
        
    }

    else if( props.item.status===2 ) 
    {
        return(
            <td id="buttons">
                <input type="button" id="btnClose" onClick={()=>doClick(props.item,3)}   className="btn btn-success btn-sm"  value="Закрыть"></input>
            </td>
        )
        
    }


    else
    {
        return(
            <td id="buttons">
                <input type="button" id="btnClose"   className="btn btn-secondary btn-sm"  value="Эту задачу изменить нельзя"></input>
            </td>
        )
    
    }

}

export default Buttons