import { combineReducers } from 'redux';

const data = [
    { id: 1, title: 'Musik asik', duration: '4:10' },
    { id: 2, title: 'Musik jawa', duration: '5:08' },
    { id: 3, title: 'Musik barat', duration: '3:90' },
    { id: 4, title: 'Musik lampung', duration: '3:20' }
];

export const songReducers = () => {
    return data;
};

export const selectedSongReducer = (state = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload
        case 'GET_SONG_BYID':
            const dataId = data.filter(d => d.id === action.id);
            return dataId[0];
        default:
            return state;
    }
}

// if (action.type === 'SONG_SELECTED') {
//     return action.payload;
// }
// return selectedSong;



// export default combineReducers({
//     songs: songReducers,
//     selectedSong: selectedSongReducer
// });