
import { FileUploadForm } from '../../components/delivery/FileUploadForm';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function UploadPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Delivery Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <FileUploadForm />
      </CardContent>
    </Card>
  );
}
