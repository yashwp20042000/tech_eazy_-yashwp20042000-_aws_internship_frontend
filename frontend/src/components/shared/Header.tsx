
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "../../hooks/useAuth";
import { APP_ROUTES } from "../../constants/routes";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold">
            Delivery System
          </Link>
          {user && (
            <nav className="hidden md:flex space-x-4">
              {user.role === 'vendor' && (
                <Link to={APP_ROUTES.VENDOR.UPLOAD} className="text-sm font-medium">
                  Upload Orders
                </Link>
              )}
              {user.role === 'admin' && (
                <Link to={APP_ROUTES.ADMIN.PARCELS} className="text-sm font-medium">
                  Admin Dashboard
                </Link>
              )}
            </nav>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm">{user.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to={APP_ROUTES.LOGIN}>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
