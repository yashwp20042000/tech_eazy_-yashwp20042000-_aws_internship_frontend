
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Parcel } from "../../types/parcel.types";
import { formatDate } from "../../utils/formatters";

type PincodeGroupProps = {
  parcels: Parcel[];
  loading: boolean;
};

export const PincodeGroup = ({ parcels, loading }: PincodeGroupProps) => {
  if (loading) return <div>Loading parcel data...</div>;
  if (parcels.length === 0) return <div>No parcels found for this pincode</div>;

  // Group parcels by pincode
  const groupedParcels = parcels.reduce((acc, parcel) => {
    if (!acc[parcel.pincode]) {
      acc[parcel.pincode] = [];
    }
    acc[parcel.pincode].push(parcel);
    return acc;
  }, {} as Record<string, Parcel[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedParcels).map(([pincode, pincodeParcels]) => (
        <div key={pincode} className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <h3 className="font-medium">Pincode: {pincode} ({pincodeParcels.length} parcels)</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tracking ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pincodeParcels.map((parcel) => (
                <TableRow key={parcel.id}>
                  <TableCell className="font-medium">{parcel.trackingId}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs ${
                      parcel.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      parcel.status === 'in_transit' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {parcel.status.replace('_', ' ')}
                    </span>
                  </TableCell>
                  <TableCell>{parcel.vendorId}</TableCell>
                  <TableCell>{formatDate(parcel.createdAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};
