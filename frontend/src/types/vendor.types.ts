
export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  pincodes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface VendorFilter {
  pincode?: string;
  active?: boolean;
}
