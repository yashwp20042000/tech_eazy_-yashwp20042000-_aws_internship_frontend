
import axios from 'axios';
import { Vendor } from '../types/vendor.types';
import { API_BASE_URL } from '../constants/routes';

export const getVendors = async (): Promise<Vendor[]> => {
  const response = await axios.get(`${API_BASE_URL}/vendors`);
  return response.data;
};
