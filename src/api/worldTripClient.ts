import axios from 'axios';

export const worldTripClient = axios.create({
  baseURL: process.env.HEROKU_BASE_URL_SERVER || 'http://localhost:3333',
});
