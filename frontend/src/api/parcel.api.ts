
import axios from 'axios';
import { Parcel, ParcelFilter } from '../types/parcel.types';
import { API_BASE_URL } from '../constants/routes';

export const getParcels = async (filters?: ParcelFilter): Promise<Parcel[]> => {
  const response = await axios.get(`${API_BASE_URL}/parcels`, { params: filters });
  return response.data;
};

export const getParcelByTrackingId = async (trackingId: string): Promise<Parcel> => {
  const response = await axios.get(`${API_BASE_URL}/parcels/track/${trackingId}`);
  return response.data;
};

export const getTodayParcels = async (): Promise<Parcel[]> => {
  const response = await axios.get(`${API_BASE_URL}/parcels/today`);
  return response.data;
};
