
import { useState, useEffect } from 'react';
import { DeliveryOrdersTable, OrderFilters } from '../../components/delivery';
import { getDeliveryOrders } from '../../api/delivery.api';
import { DeliveryOrder } from '../../types/delivery.types';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function DeliveryOrders() {
  const [orders, setOrders] = useState<DeliveryOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    vendorId: '',
    dateRange: { start: '', end: '' }
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await getDeliveryOrders(filters);
        setOrders(data);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [filters]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <OrderFilters onFilter={setFilters} />
        <DeliveryOrdersTable orders={orders} loading={loading} />
      </CardContent>
    </Card>
  );
}
