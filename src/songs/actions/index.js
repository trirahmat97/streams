//Action creator
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

export const selectById = id => {
    return {
        type: 'GET_SONG_BYID',
        id: id
    }
}