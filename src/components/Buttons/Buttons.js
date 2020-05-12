import React from 'react';
import '../tablerow.css';
import _ from 'lodash'


function Buttons(props){

//console.log(props.tasks.tasks);
   
   function doClick(btn, action){
        console.log(btn);
        console.log(props.tasks);
        
        let arr= _.cloneDeep(props.tasks);
       
        console.log(arr.tasks);
        arr.map(i=>{
            if(i.id===btn.id){
                return i.status=action
            }
        })
        console.log(arr);
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
                <input type="button" id="btnCloseDis"   className="btn btn-secondary btn-sm"  disabled value="Эту задачу изменить нельзя"></input>
            </td>
        )
    
    }

}

export default Buttons