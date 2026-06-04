import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { STORAGE_KEY } from "@/pages/Auth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const granted = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "true";

  if (!granted) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;