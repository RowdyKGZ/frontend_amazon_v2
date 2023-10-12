import axios from 'axios';
import { errorCatch, getContentType } from './api.helper';
import { getAccesToken, removeFromStorage } from '@/services/auth/auth.helper';
import { config } from 'process';
import AuthService from '@/services/auth/auth.services';

export const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType(),
});

// set bearer headers
instance.interceptors.request.use(async config => {
  const accesToken = getAccesToken();

  if (config.headers && accesToken) {
    config.headers.Authorization = `Bearer ${accesToken}`;
  }

  return config;
});

// catch JWT
instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 ||
      errorCatch(error) === 'jwt expired' ||
      (errorCatch(error) === 'jwt must be provided' &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          removeFromStorage();
        }
      }
      throw error;
    }
  },
);
