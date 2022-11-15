import axios from 'axios';


const url = "http://127.0.0.1:3003/task";

export const getallTask = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
export const addTask = async (task, id) => {
    if(id ==='' || id === null || id === undefined){
        return await axios.post(url,task);
    }else{
        return await axios.put(`${url}/${id}`,task);
    }
}
export const deleteTask = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
export const UpdateUser = async (id) => {
        const data= await axios.get(`http://127.0.0.1:3003/task/${id}`);
        return data;
}

export const FilterUser = async (state) => {
    const data= await axios.get(`http://127.0.0.1:3003/task?t=1${(state.status === '' || state.status === undefined || state.status === null) ?'':'&status='+state.status}${(state.priority === '' || state.priority === undefined || state.priority === null) ?'':'&priority='+state.priority}${(state.assignto === '' || state.assignto === undefined || state.assignto === null) ?'':'&assignto='+state.assignto}${(state.end_date === '' || state.end_date === undefined || state.end_date === null) ?'':'&end_date='+state.end_date}`);
    return data;
}
