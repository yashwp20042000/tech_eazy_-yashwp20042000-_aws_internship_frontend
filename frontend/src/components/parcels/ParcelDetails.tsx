import { Parcel } from '../../types/parcel.types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type ParcelDetailsProps = {
  parcel: Parcel;
};

export const ParcelDetails = ({ parcel }: ParcelDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Parcel Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Tracking ID:</p>
          <p>{parcel.trackingId}</p>
        </div>
        <div>
          <p className="font-medium">Status:</p>
          <p>{parcel.status}</p>
        </div>
        <div>
          <p className="font-medium">Pincode:</p>
          <p>{parcel.pincode}</p>
        </div>
        <div>
          <p className="font-medium">Created At:</p>
          <p>{new Date(parcel.createdAt).toLocaleString()}</p>
        </div>
      </CardContent>
    </Card>
  );
};
