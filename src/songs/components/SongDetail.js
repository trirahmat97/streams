import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectSong }) => {
    return (
        <div>
            {selectSong &&
                <div>
                    <h3>Detail for:</h3>
                    <p>
                        Title: {selectSong.title}
                        <br />
                        Duration: {selectSong.duration}
                    </p>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return { selectSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);