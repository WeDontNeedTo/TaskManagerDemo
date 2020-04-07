import React from 'react';

function Status(props){

    function newColor(num){
        //функция для смены текста задачи
        let style
        switch (num) {
            case 2:
                style={color:'#008000'};
                break
            case 3:
                style={color:'#696969'};
            break
            case 4:
                style={color:'#FFA500'};
                break
           default:
               break;
        }
        return style
    }
    

const st=newColor(props.item)

    return(
        <td align="center">
            {
                props.status.statuses.map(status=>{
                    if(props.item===status.id){
                        return <p key={status.id} style={st}>{status.title} </p>
                    }
                })
            }
        </td>
    )
    
}

export default Status

