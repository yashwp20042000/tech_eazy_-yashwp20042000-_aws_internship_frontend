
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
      <Button onClick={() => navigate(APP_ROUTES.HOME)}>
        Go to Home
      </Button>
    </div>
  );
};
