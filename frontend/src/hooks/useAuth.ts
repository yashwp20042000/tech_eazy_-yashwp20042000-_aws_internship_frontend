
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login as apiLogin, logout as apiLogout } from '../api/auth.api';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, setUser } = context;

  const login = async (email: string, password: string) => {
    try {
      const { user, token } = await apiLogin({ email, password });
      localStorage.setItem('token', token);
      setUser(user);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = async () => {
    await apiLogout();
    localStorage.removeItem('token');
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    loading: false
  };
};