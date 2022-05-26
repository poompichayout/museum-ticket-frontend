import TopBar from '../components/home/TopBar';
import BottomBar from '../components/home/BottomBar';
import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
		<TopBar />
		<Outlet />
		<BottomBar />
	</div>
  );
};

export default HomeLayout;
