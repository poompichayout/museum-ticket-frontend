import { Grid, Container } from "@nextui-org/react";
import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const AdminLayout = () => {
  const isMobile = useMediaQuery(960);
  return (
    <div>
      <Header />
      <Container gap={isMobile? 0:2}>
        <Grid.Container>
          <Grid xs={0} sm={2}>
            <Sidebar />
          </Grid>
          <Grid xs={12} sm={10}>
            <Outlet />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default AdminLayout;
