import axios from 'axios';

export const worldTripClient = axios.create({
  baseURL: 'http://localhost:3333',
});
