import { AdminLayout, HomeLayout } from "./layouts";
import {
  HomePage,
  SigninPage,
  SignupPage,
  DashboardPage,
  SchedulePage,
  StatisticsPage,
} from "./pages";

import { Navigate } from "react-router-dom";

const routes = (authenticate, admin) => [
  {
    path: "/admin",
    element:
      authenticate && admin ? <AdminLayout /> : <Navigate to="/signin" />,
    children: [
      { path: "/admin/", element: <DashboardPage /> },
      { path: "/admin/statistics", element: <StatisticsPage /> },
      { path: "/admin/schedule", element: <SchedulePage /> },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signin", element: <SigninPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
];

export default routes;
