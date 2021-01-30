import axios from 'axios';


// ❌❌❌
// Do not use .env variables in production React Apps 
// they are visible to the user.  The only safe way to 
// store them is on the backend (e.g., Node server).
// ❌❌❌
const access = process.env.REACT_APP_UNSPLASH_ACCESS;
const secret = process.env.REACT_APP_UNSPLASH_SECRET;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${access}`
    }
});