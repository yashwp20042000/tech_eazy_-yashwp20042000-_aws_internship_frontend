
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const APP_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADMIN: {
    PARCELS: '/admin/parcels',
  },
  VENDOR: {
    UPLOAD: '/vendor/upload',
  },
  TRACKING: '/tracking',
};
