import axios from 'axios';
const baseURL = 'https://www.googleapis.com/youtube/v3';

const axiosInstance = axios.create({
    baseURL,
    params: {
        part: 'snippet',
        key: process.env.REACT_APP_API_KEY,
        maxResults: 50,

    },
    headers: {}
})

export const SearchYoutube = (searchText) => axiosInstance.get(`/search?q=${searchText}`);
export const SearchYoutubeNext = (searchText, token) => axiosInstance.get(`/search?pageToken=${token}&q=${searchText}`);
