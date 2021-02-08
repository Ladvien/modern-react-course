import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(song){
        return (
            <div>
                <h1>Details for:</h1>
                <p>
                    Song Title: {song.title}
                    <br/>
                    Duration: {song.duration}
                </p>
            </div>
        )
    } else {
        return <div>Select song</div>
    }
}
 
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)