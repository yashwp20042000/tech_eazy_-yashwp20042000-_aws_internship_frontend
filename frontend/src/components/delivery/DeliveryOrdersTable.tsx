
import { DeliveryOrder } from '../../types/delivery.types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

type DeliveryOrdersTableProps = {
  orders: DeliveryOrder[];
  loading: boolean;
};

export const DeliveryOrdersTable = ({ orders, loading }: DeliveryOrdersTableProps) => {
  if (loading) return <div>Loading orders...</div>;
  if (orders.length === 0) return <div>No orders found</div>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Vendor</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>File</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.vendorId}</TableCell>
            <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>
              <a href={order.fileUrl} target="_blank" rel="noopener noreferrer">
                View File
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
