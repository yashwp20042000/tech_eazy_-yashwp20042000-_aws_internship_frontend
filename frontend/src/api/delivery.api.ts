
import axios from 'axios';
import { DeliveryOrder, DeliveryOrderFilter } from '../types/delivery.types';
import { API_BASE_URL } from '../constants/routes';

export const getDeliveryOrders = async (filters?: DeliveryOrderFilter): Promise<DeliveryOrder[]> => {
  const response = await axios.get(`${API_BASE_URL}/delivery-orders`, { params: filters });
  return response.data;
};

export const uploadDeliveryOrder = async (file: File): Promise<DeliveryOrder> => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await axios.post(`${API_BASE_URL}/delivery-orders/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};
