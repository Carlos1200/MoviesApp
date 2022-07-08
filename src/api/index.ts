import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'de6fcc5278fd50c646698854d3739257',
    language: 'en-US',
  },
});

export default movieDB;
