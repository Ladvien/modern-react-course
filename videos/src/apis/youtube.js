import axios from 'axios';

const KEY = 'AIzaSyCOctqQP2Zyw6PdMm-tQwMBUK320Ij2xM8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

