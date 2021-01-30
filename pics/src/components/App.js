import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {images: [] };

    userList = function({id, name}) {
        return <li key={id}>{name}</li>
    }

    onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        console.log(res.data);
        this.setState({images: res.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} /> 
            </div>
        )
    }
}

export default App;
