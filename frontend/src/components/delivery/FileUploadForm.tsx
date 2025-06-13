
import { useState } from 'react';
import { Button } from '../ui/button';
import { uploadDeliveryOrder } from '../../api/delivery.api';
import { useAuth } from '../../hooks/useAuth';

export const FileUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !user) return;

    setLoading(true);
    try {
      await uploadDeliveryOrder(file);
      setSuccess(true);
      setFile(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload Order'}
      </Button>
      {success && (
        <p className="text-green-600">File uploaded successfully!</p>
      )}
    </form>
  );
};
