import { useSelector } from "react-redux"
import { Routes, Route, Navigate } from "react-router"
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import PageNotFound from "../Pages/PageNotFound";
import DashboardPage from "../Pages/DashboardPage";
import axios from "axios";

const AllRoutes = () => {
    const token = useSelector(store => store.employeeAuthReducer.token);

    const isAuthenticated = !token !== true;

    let routes = null;
    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
    if (isAuthenticated) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        routes = (
            <>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<Navigate to={`/dashboard`} />} />
            </>
        )
    } else {
        routes = (
            <>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to={`/login`} />} />
            </>
        )
    }

    return (
        <>
            <Routes>
                {routes}
                <Route path="/page-not-found" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to={'/page-not-found'} />} />
            </Routes>
        </>
    )
}

export default AllRoutes;