import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// ❌❌❌
// Do not use .env variables in production React Apps 
// they are visible to the user.  The only safe way to 
// store them is on the backend (e.g., Node server).
// ❌❌❌
const access = process.env.REACT_APP_UNSPLASH_ACCESS;
const secret = process.env.REACT_APP_UNSPLASH_SECRET;

class App extends React.Component {

    async onSearchSubmit(term) {
        console.log(access);
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers:{
                Authorization: `Client-ID ${access}`
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;
