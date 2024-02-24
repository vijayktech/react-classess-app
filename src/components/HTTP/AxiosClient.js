import axios from "axios";


const AxiosClient = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`
});



export default AxiosClient;