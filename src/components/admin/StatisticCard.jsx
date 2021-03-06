import React from "react";
import { Grid, Card, Text, Loading, Spacer } from "@nextui-org/react";

const StatisticCard = ({ data, isLoading }) => {
  return (
    <>
      <Grid xs={6}>
        <Card css={{ backgroundColor: "#363449"}}>
          <Text color="white">Number of total visitor</Text>
          {isLoading ? <Loading size="sm" type="points-opacity" /> : <Text h4 color="white">{data?.ticketSold}</Text>}
        </Card>
      </Grid>
      <Spacer y={1} />
      <Grid xs={6}>
        <Card css={{ backgroundColor: "#363449"}}>
          <Text color="white">Total income</Text>
          {isLoading ? <Loading size="sm" type="points-opacity" /> : <Text h4 color="white">{data?.totalIncome}</Text>}
        </Card>
      </Grid>
    </>
  );
};

export default StatisticCard;
