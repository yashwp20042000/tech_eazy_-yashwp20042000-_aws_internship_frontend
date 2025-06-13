
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { TrackingForm } from '../../components/tracking/TrackingForm';
import { ParcelDetails } from '../../components/parcels/ParcelDetails';
import { getParcelByTrackingId } from '../../api/parcel.api';
import { Parcel } from '../../types/parcel.types';
import { Loading } from '../../components/shared/Loading';

export default function TrackingPage() {
  const [parcel, setParcel] = useState<Parcel | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (trackingId: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getParcelByTrackingId(trackingId);
      setParcel(data);
    } catch (err) {
      setError('Parcel not found. Please check your tracking number.');
      setParcel(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Track Your Parcel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <TrackingForm onTrack={handleTrack} loading={loading} />
          
          {loading && <Loading />}
          
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded">
              {error}
            </div>
          )}

          {parcel && <ParcelDetails parcel={parcel} />}
        </CardContent>
      </Card>
    </div>
  );
}
