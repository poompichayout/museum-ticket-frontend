import AdminLayout from "./layouts/admin";
import AdminDashboard from "./pages/admin/Dashboard";
import Schedule from "./pages/admin/Schedule";
import Statistics from "./pages/admin/Statistics";

import HomeLayout from "./layouts/home";
import Home from "./pages/home";
import Signin from './pages/signin';
import SignUp from './pages/signup';

import { Navigate } from 'react-router-dom';

const routes = (authenticate, admin) => [
  {
    path: "/admin",
    element: authenticate && admin ? <AdminLayout />:<Navigate to="/signin" />,
    children: [
      { path: "/admin/", element: <AdminDashboard /> },
      { path: "/admin/statistics", element: <Statistics /> },
      { path: "/admin/schedule", element: <Schedule /> },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
];

export default routes;
