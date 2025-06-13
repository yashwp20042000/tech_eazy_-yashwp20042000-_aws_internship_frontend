
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Parcel } from "../../types/parcel.types";

type ParcelSummaryProps = {
  parcels: Parcel[];
  loading: boolean;
};

export const ParcelSummary = ({ parcels, loading }: ParcelSummaryProps) => {
  if (loading) return <div>Loading parcel data...</div>;
  if (parcels.length === 0) return <div>No parcels found</div>;

  const statusCounts = parcels.reduce((acc, parcel) => {
    acc[parcel.status] = (acc[parcel.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parcel Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total Parcels</p>
          <p className="text-2xl font-bold">{parcels.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Delivered</p>
          <p className="text-2xl font-bold">{statusCounts['delivered'] || 0}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-600">In Transit</p>
          <p className="text-2xl font-bold">{statusCounts['in_transit'] || 0}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-red-600">Pending</p>
          <p className="text-2xl font-bold">{statusCounts['pending'] || 0}</p>
        </div>
      </CardContent>
    </Card>
  );
};
