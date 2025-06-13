
export type ParcelStatus = 'created' | 'in_transit' | 'delivered' | 'returned';

export interface Parcel {
  id: string;
  trackingId: string;
  vendorId: string;
  pincode: string;
  status: ParcelStatus;
  deliveryOrderId: string;
  createdAt: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
}

export interface ParcelFilter {
  dateRange?: {
    start: string;
    end: string;
  };
  vendorId?: string;
  pincode?: string;
  status?: ParcelStatus[];
}
