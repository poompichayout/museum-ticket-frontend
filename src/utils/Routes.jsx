import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

import { AdminLayout, HomeLayout, UserLayout } from "../layouts";
import { RequireAdminAuth, RequireUserAuth } from "./RequiredAuth";
const StatisticsPage = React.lazy(() => import("../pages/admin/Statistics"));
const SchedulePage = React.lazy(() => import("../pages/admin/Schedule"));
const HomePage = React.lazy(() => import("../pages/home/index"));
const SigninPage = React.lazy(() => import("../pages/signin/index"));
const SignupPage = React.lazy(() => import("../pages/signup/index"));
const TicketListPage = React.lazy(() => import("../pages/account/TicketList"));
const TicketPage = React.lazy(() => import("../pages/account/Ticket"));
const BookingPage = React.lazy(() => import("../pages/booking/Booking"));
const PayoutPage = React.lazy(() => import("../pages/payout/Payout"));

const RouteProvider = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Navigate to="/booking/1" />} />
          <Route path="/booking/1" element={<BookingPage />} />
          <Route path="/booking/2" element={<PayoutPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route
          path="/account"
          element={
            <RequireUserAuth>
              <UserLayout />
            </RequireUserAuth>
          }
        >
          <Route path="/account/" element={<TicketListPage />} />
          <Route path="/account/ticket/:id" element={<TicketPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <RequireAdminAuth>
              <AdminLayout />
            </RequireAdminAuth>
          }
        >
          <Route
            path="/admin/"
            element={<Navigate to="/admin/statistics?range=1" />}
          />
          <Route path="/admin/statistics" element={<StatisticsPage />} />
          <Route path="/admin/schedule" element={<SchedulePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteProvider;
