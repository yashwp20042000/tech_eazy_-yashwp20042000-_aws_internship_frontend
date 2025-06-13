
import axios from 'axios';
import { LoginPayload, AuthResponse } from '../types/auth.types';
import { API_BASE_URL } from '../constants/routes';

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await axios.post(`${API_BASE_URL}/auth/logout`);
};

export const refreshToken = async (): Promise<AuthResponse> => {
  const response = await axios.post(`${API_BASE_URL}/auth/refresh`);
  return response.data;
};
