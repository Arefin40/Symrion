import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import LoadingState from "@/components/LoadingState";

const PrivateRoute = ({ component }: { component: ReactNode }) => {
   const { isAuthenticating, user } = useAuth();
   const location = useLocation();

   if (isAuthenticating) return <LoadingState />;

   if (user) return component;

   return <Navigate to="/login" replace state={location?.pathname} />;
};
export default PrivateRoute;
