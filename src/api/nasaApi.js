import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getAPOD = () => {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
};

export const getNasaTech = () => {
  return axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`);
};

export const getAsteroid = () => {
  return axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-07-27&end_date=2022-07-27&api_key=${API_KEY}`,
  );
};
