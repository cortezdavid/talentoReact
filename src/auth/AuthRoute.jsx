import { Navigate } from 'react-router-dom';

const AuthRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default AuthRoute