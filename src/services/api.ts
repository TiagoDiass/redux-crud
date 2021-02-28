import axios from 'axios';

const api = axios.create({
  baseURL: 'https://patients-simple-api.herokuapp.com'
});

export default api;
