import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getAPOD = () => {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
};

export const getNasaTech = () => {
  return axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`);
};

export const getAsteroid = (date) => {
  return axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${API_KEY}`,
  );
};

export const getImageSearch = (data) => {
  return axios.get(`https://images-api.nasa.gov/search?q=${data}`);
};

export const getAssets = () => {
  return axios.get(`https://images-api.nasa.gov/asset/${API_KEY}`);
};

export const getMetadata = () => {
  return axios.get(`https://images-api.nasa.gov/metadata/${API_KEY}`);
};

export const getCaptions = () => {
  return axios.get(`https://images-api.nasa.gov/captions/${API_KEY}`);
};
