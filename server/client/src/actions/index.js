import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/user', {
        proxy:{
            host: '127.0.0.1',
            port: 5000
        }
    });
    dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => {
//     return function (dispatch){
//         axios.get('/auth/google').then(res => dispatch({type: FETCH_USER, payload: res.data}));
//     };
// };
