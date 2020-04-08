import React from 'react';
import _ from 'lodash'


class Header extends React.Component {
   constructor(props){
     super(props);
     this.state={value:1, flag:false, value1:1}
    
     this.handleChangeUser=this.handleChangeUser.bind(this);
     this.handleSubmitUser=this.handleSubmitUser.bind(this);
     this.handleChangeStatus=this.handleChangeStatus.bind(this);
     this.handleSubmitStatus=this.handleSubmitStatus.bind(this);

    }



   handleChangeUser(event){
     this.setState({value: event.target.value})
   }

   handleSubmitUser(event){ 
    this.props.filterUser(+this.state.value);
    event.preventDefault();
   }


   handleChangeStatus(event){
    this.setState({value1: event.target.value})
  }

  handleSubmitStatus(event){ 
   this.props.filterUser(+this.state.value1);
   event.preventDefault();
  }
  


   render(){
    return (
      <thead>
          <tr>
              <th>№</th>
              <th>Название
              <form>
                 <input type="text" placeholder="Поиск по задачам.."/>
              </form>
               
              </th>

              <th>Исполнитель
              <form  onSubmit={this.handleSubmitUser}>
                <select value={this.state.value} onChange={this.handleChangeUser}>
                    {
                      this.props.users.map(i=>{
                        return <option key={i.id} value={i.id}>{i.last_name} {i.first_name}</option>
                      })
                    }
                  </select>
                  <input type="submit" value="Применить фильтр" />
                
              </form>
              </th>

              <th>Статус
              <form onSubmit={this.handleSubmitStatus}>
                  <select value={this.state.value1} onChange={this.handleChangeStatus}>
                    {
                        this.props.statuses.map(i=>{
                          return <option  key={i.id} value={i.id}>{i.title}</option>
                        })
                      }
                    </select>
                    <input type="submit" value="Применить фильтр" />
              </form>
              </th>

              <th>Сменить статус задачи</th>
          </tr>
    </thead>
      );
   }

}

export default Header;
