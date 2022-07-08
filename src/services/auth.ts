import axios from 'axios';
import {LoginResponse, LoginSchemas} from '../interfaces';

export const AuthenticateUser = ({email, password}: LoginSchemas) =>
  axios.post<LoginResponse>('https://reqres.in/api/login', {
    email,
    password,
  });
