import React from 'react';
import { connect } from 'react-redux';
import { selectSong, selectById } from '../actions';

const SingleList = ({ songs, selectSong, selectById }) => {
    const renderLinstSongs = songs.map(song => {
        return (
            <div className="item" key={song.title}>
                <div className="right floated contnent">
                    <button
                        onClick={() => selectSong(song)}
                        className="ui button primary">Slect</button>
                    <button
                        onClick={() => selectById(song.id)}
                        className="ui button primary">Slect by id</button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        )
    });
    return (
        <div className="ui devided list">{renderLinstSongs}</div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong, selectById })(SingleList);
