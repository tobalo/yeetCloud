import axios from 'axios';
import { FETCH_USER } from './types';

const userCall = axios.create({
    proxy:{
        host: '127.0.0.1',
        port: 5000,
        auth: {
            username: null,
            password: null
        }
    }
});

export const fetchUser = () => async dispatch => {
    const res = await userCall.get('/auth/user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => {
//     return function (dispatch){
//         axios.get('/auth/google').then(res => dispatch({type: FETCH_USER, payload: res.data}));
//     };
// };
