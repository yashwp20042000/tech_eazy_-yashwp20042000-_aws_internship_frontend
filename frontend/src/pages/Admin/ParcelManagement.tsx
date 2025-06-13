
import { useState, useEffect } from 'react';
import { ParcelSummary, PincodeGroup } from '../../components/parcels';
import { getTodayParcels } from '../../api/parcel.api';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function ParcelManagement() {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const data = await getTodayParcels();
        setParcels(data);
      } finally {
        setLoading(false);
      }
    };
    fetchParcels();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Today's Parcel Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ParcelSummary parcels={parcels} loading={loading} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Parcels by Pincode</CardTitle>
        </CardHeader>
        <CardContent>
          <PincodeGroup parcels={parcels} loading={loading} />
        </CardContent>
      </Card>
    </div>
  );
}
