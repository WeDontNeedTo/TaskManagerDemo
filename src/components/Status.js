import React from 'react';


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

export default Status