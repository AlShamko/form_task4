import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Login} from './pages/loginPages/Login.tsx';
import {Register} from "./pages/registerPage/Register.tsx";
import {Dashboard} from "./pages/dashboard/Dashboard.tsx";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </Router>
    );
};


export default App;