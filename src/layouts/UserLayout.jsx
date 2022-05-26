import TopBar from "../components/home/TopBar";
import BottomBar from "../components/home/BottomBar";
import React from "react";
import { Outlet } from "react-router";
import UserBar from "../components/home/UserBar";
import { Container } from "react-bootstrap";

const HomeLayout = () => {
  return (
    <div>
      <TopBar />
      <Container>
        <UserBar />
      </Container>
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default HomeLayout;
