import React from 'react';

function Status(props){
    return(
        //здесь я меняю массив с пропсов, если нашел соответствие  
        <td>
            {
                props.task.tasks.map(task => {
                    props.status.statuses.map(status => {
                        if (task.status === status.id) 
                        {
                            task.status=status.title
                            console.log(task.status)
                            return `${task.status}` 
                        }
                })
          })
          
        }
        </td>
    )
    
}

export default Status

