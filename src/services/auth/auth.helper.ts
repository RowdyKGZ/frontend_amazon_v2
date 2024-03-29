import { IAuthResponse, ITokens } from '@/store/user/user.interface';
import Cookies from 'js-cookie';

export const getAccesToken = () => {
  const accessToken = Cookies.get('accessToken');
  return accessToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set('refreshToken', data.refreshToken);
};

export const removeFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  localStorage.removeItem('user');
};

export const saveStorage = (data: IAuthResponse) => {
  saveStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
