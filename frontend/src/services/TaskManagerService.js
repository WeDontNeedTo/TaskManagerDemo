import axios from 'axios'

const API_URL='http://localhost:8000';

export default class TaskManagerService{

    getUsers(){
        const url=`${API_URL}/api/users/`;
        return axios.get(url).then(res=>res.data);
    }

    getStatuses(){
        const url=`${API_URL}/api/statuses/`;
        return axios.get(url).then(res=>res.data);
    }

    getTasks(){
        const url=`${API_URL}/api/tasks/`;
        return axios.get(url).then(res=>res.data);
    }
}
