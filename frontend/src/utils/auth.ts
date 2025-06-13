
export const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

export const getUserRole = (): string | null => {
  const token = getAuthToken();
  if (!token) return null;
  
  // In a real app, decode JWT to get role
  return localStorage.getItem('role');
};
