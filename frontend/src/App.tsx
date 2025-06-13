
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { APP_ROUTES } from './constants/routes';
import { UserRole } from './constants/roles';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import TrackingPage from './pages/TrackingPage';
import UploadPage from './pages/Vendor/UploadPage';
import ParcelManagement from './pages/Admin/ParcelManagement';
import { Header } from './components/shared/Header';
import { NotFound } from './components/shared/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={APP_ROUTES.TRACKING} element={<TrackingPage />} />

          {/* Vendor Routes */}
          <Route
            path={APP_ROUTES.VENDOR.UPLOAD}
            element={
              <ProtectedRoute allowedRoles={[UserRole.VENDOR]}>
                <UploadPage />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path={APP_ROUTES.ADMIN.PARCELS}
            element={
              <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                <ParcelManagement />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
