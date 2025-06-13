
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../constants/routes";

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Delivery Management System</CardTitle>
        </CardHeader>
        <CardContent>
          {user ? (
            <div className="space-y-4">
              <p>Welcome back, {user.name}!</p>
              {user.role === 'vendor' && (
                <Button onClick={() => navigate(APP_ROUTES.VENDOR.UPLOAD)}>
                  Go to Upload Page
                </Button>
              )}
              {user.role === 'admin' && (
                <Button onClick={() => navigate(APP_ROUTES.ADMIN.PARCELS)}>
                  Go to Admin Dashboard
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p>Please login to access the system</p>
              <Button onClick={() => navigate(APP_ROUTES.LOGIN)}>
                Login
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
