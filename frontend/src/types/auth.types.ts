
export interface User {
  id: string;
  email: string;
  role: string;
  name: string;
  vendorId?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
