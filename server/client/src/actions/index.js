import axios from 'axios';
import { FETCH_USER } from './types';

async const fetchUser = () => {
    await axios.get('/auth/user');
};