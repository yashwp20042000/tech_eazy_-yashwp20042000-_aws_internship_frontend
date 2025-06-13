
export type DeliveryOrderStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface DeliveryOrder {
  id: string;
  vendorId: string;
  date: string;
  status: DeliveryOrderStatus;
  fileUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeliveryOrderFilter {
  vendorId?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  status?: DeliveryOrderStatus[];
}
