import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireLogin = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
    // return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireLogin;
