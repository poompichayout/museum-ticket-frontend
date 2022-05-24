import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Text, Container, Row, Col, Spacer, Grid } from "@nextui-org/react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HoverableLink from "../../components/admin/HoverableLink";
import axios from "axios";
import StatisticCard from "../../components/admin/StatisticCard";
import PurchaseHistoryTable from "../../components/admin/PurchaseHistoryTable";
const days = [1, 7, 28];

const Statistics = () => {
  const [params] = useSearchParams();
  const isMobile = useMediaQuery(960);

  const fetchStatistic = () => {
    return axios
      .get(`/admin/statistics?range=${params.get("range")}`)
      .then((res) => res.data.data);
  };

  const fetchHistory = () => {
    return axios
      .get(`/admin/purchase-history?range=${params.get("range")}&limit=5`)
      .then((res) => res.data.data.tickets);
  };

  const {
    refetch: refetchStat,
    isFetching,
    data: statistics,
  } = useQuery("statistics", fetchStatistic, {
    initialData: { ticketSold: 0, totalIncome: 0 },
  });
  const {
    refetch: refetchHistories,
    isFetched,
    data: histories,
  } = useQuery("histories", fetchHistory, {
    initialData: [],
  });

  useEffect(() => {
    refetchStat();
    refetchHistories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.get("range")]);

  return (
    <Container fluid>
      <Text h2>Statistics</Text>
      <Container fluid gap={0}>
        <Row>
          {days.map((day) => (
            <React.Fragment key={day}>
              <Col span={isMobile ? 12 / days.length : 2}>
                <Link to={`/admin/statistics?range=${day}`}>
                  <HoverableLink
                    as="span"
                    active={params.get("range") === day.toString()}
                  >
                    {params.get("range") === day.toString() && (
                      <FontAwesomeIcon icon={faCaretRight} />
                    )}{" "}
                    {day} day ago
                  </HoverableLink>
                </Link>
              </Col>
              <Spacer x={1} y={0} />
            </React.Fragment>
          ))}
        </Row>
      </Container>
      <Grid.Container css={{ mt: 50, d: "flex", flexWrap: "nowrap" }}>
        <StatisticCard isLoading={isFetching} data={statistics} />
      </Grid.Container>
      <Grid.Container css={{ mt: 50 }}>
        <Grid xs={12}>
          <Text h3>Purchase History</Text>
        </Grid>
      </Grid.Container>
      <Container fluid gap={0} css={{ mt: 20 }}>
        <PurchaseHistoryTable isFetched={isFetched} histories={histories} />
      </Container>
    </Container>
  );
};

export default Statistics;
