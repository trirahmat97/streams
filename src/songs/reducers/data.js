import { combineReducers } from 'redux';
import { reducerCustomers, actionReducerCustomer } from './customer';
import { songReducers, selectedSongReducer } from './index';

export default combineReducers({
    customers: reducerCustomers,
    songs: songReducers,
    customer: actionReducerCustomer,
    selectedSong: selectedSongReducer
})
