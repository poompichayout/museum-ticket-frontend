import React from 'react'
import { Route, Routes } from 'react-router'

import { AdminLayout, HomeLayout } from "../layouts";
import {
  HomePage,
  SigninPage,
  SignupPage,
  DashboardPage,
  SchedulePage,
  StatisticsPage,
} from "../pages";
import { RequireAuth } from './RequiredAuth';

const RouteProvider = () => {
  return (
	<Routes>
		<Route path="/" element={<HomeLayout />} >
			<Route path="/" element={<HomePage />} />
			<Route path="/signin" element={<SigninPage />} />
			<Route path="/signup" element={<SignupPage />} />
		</Route>

		<Route path="/admin" element={<RequireAuth><AdminLayout /></RequireAuth>} >
			<Route path="/admin/" element={<DashboardPage />} />
			<Route path="/admin/statistics" element={<StatisticsPage />} />
			<Route path="/admin/schedule" element={<SchedulePage />} />
		</Route>
	</Routes>
  )
}

export default RouteProvider