import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.101:9999',
});

export default api;
