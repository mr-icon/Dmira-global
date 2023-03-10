import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

          {/* protected routes*/}
    return (
        auth?.user
            ? <Outlet />
            : <Navigate to="/register" state={{ from: location }} replace />
    )
}

export default RequireAuth;