import streams from '../apis/steams';
import history from '../history';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './type';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => async (distpatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
    distpatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/');
}

export const fetchStreams = () => async distpatch => {
    const response = await streams.get('/streams');
    distpatch({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchStream = id => async distpatch => {
    const response = await streams.get(`/streams/${id}`);
    distpatch({ type: FETCH_STREAM, payload: response.data });
}

export const editStream = (id, formValues) => async distpatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    distpatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
}

export const deleteStream = id => async distpatch => {
    await streams.delete(`/streams/${id}`);
    distpatch({ type: DELETE_STREAM, payload: id });
    history.push('/');
}