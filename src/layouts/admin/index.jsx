import { Grid, Container } from "@nextui-org/react";
import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import gradient from "../../static/media/theming-gradient.png";

const Wrapper = styled.div`
  background-image: url("${gradient}");
  background-repeat: repeat-y;
  height: 100vh;
  background-position: right;
  background-size: cover;
`;

const AdminLayout = () => {
  const isMobile = useMediaQuery(960);
  return (
    <Wrapper>
      <Header />
      <Container gap={isMobile ? 0 : 2}>
        <Grid.Container>
          <Grid xs={0} sm={2}>
            <Sidebar />
          </Grid>
          <Grid xs={12} sm={10}>
            <Outlet />
          </Grid>
        </Grid.Container>
      </Container>
    </Wrapper>
  );
};

export default AdminLayout;
