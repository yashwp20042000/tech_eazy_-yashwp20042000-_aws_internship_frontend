
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { getParcelByTrackingId } from '../../api/parcel.api';

type TrackingFormProps = {
  onTrack: (trackingId: string) => Promise<void>;
  loading: boolean;
};

export const TrackingForm = ({ onTrack, loading }: TrackingFormProps) => {
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    await onTrack(trackingId);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="trackingId">Tracking Number</Label>
        <Input
          id="trackingId"
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter your tracking number"
          required
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Tracking...' : 'Track Parcel'}
      </Button>
    </form>
  );
};
