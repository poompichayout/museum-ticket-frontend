import React from 'react'
import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router-dom'

import { AdminLayout, HomeLayout, UserLayout } from "../layouts";
import {
  HomePage,
  SigninPage,
  SignupPage,
  SchedulePage,
  StatisticsPage,
  TicketListPage,
  TicketPage,
  BookingPage
} from "../pages";
import { RequireAdminAuth, RequireUserAuth } from './RequiredAuth';

const RouteProvider = () => {
  return (
	<Routes>
		<Route path="/" element={<HomeLayout />} >
			<Route path="/" element={<HomePage />} />
			<Route path="/booking" element={<BookingPage />} />
			<Route path="/signin" element={<SigninPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Route>

		<Route path="/account" element={<RequireUserAuth><UserLayout /></RequireUserAuth>} >
			<Route path="/account/" element={<TicketListPage />} />
			<Route path="/account/ticket/:id" element={<TicketPage />} />
		</Route>

		<Route path="/admin" element={<RequireAdminAuth><AdminLayout /></RequireAdminAuth>} >
			<Route path="/admin/" element={<Navigate to="/admin/statistics?range=1" />} />
			<Route path="/admin/statistics" element={<StatisticsPage />} />
			<Route path="/admin/schedule" element={<SchedulePage />} />
		</Route>
	</Routes>
  )
}

export default RouteProvider