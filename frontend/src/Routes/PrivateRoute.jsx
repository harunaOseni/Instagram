import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>{!loading && !isAuthenticated ? <Navigate to="/login" /> : children}</>
  );
};

export default PrivateRoute;
