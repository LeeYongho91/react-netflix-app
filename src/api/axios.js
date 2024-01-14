import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '974eeb589b0d460ef73ff6ddab2c99a6',
    language: 'ko-KR',
  },
});

export default instance;
