import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import tasks from './tasks.json';
import usersdata from './users.json';
import statusesdata from './statuses.json';


function App() {
   

return (
    <tr>
        <th>Задача</th>
        <th>Название</th>
        <th>Исполнитель</th>
        <th>Статус</th>
        <th>Сменить статус задачи</th>
</tr>
  );
}

export default App;
