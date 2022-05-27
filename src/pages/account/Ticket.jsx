import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import MS1 from "../../static/media/MS1.jpg";
import QR1 from "../../static/media/QR1.png";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Card,
  Col,
  Container,
  Grid,
  Image,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useParams } from "react-router";

const Ticket = () => {
  const isMobile = useMediaQuery(650);
  const params = useParams();
  const { data, isFetching, isFetched } = useQuery(
    "user-ticket-id",
    () => {
      return axios
        .get("/profile/ticketByID/"+params.id)
        .then((res) => res.data.data.ticket);
    },
    {
      initialData: {
        ticket_id: "",
        ticket_name: "Entry Ticket",
        amount: 1,
        pricePerTicket: 150,
        datetime: new Date(),
      },
    }
  );

  return (
    <Container
      css={{
        d: "flex",
        my: 50,
        maxWidth: isMobile ? "100%" : "80vw",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center"
      }}
    >
      <Grid xs={12} sm={6} md={3}>
        <Card hoverable clickable css={{ height: "min-content" }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              objectFit="cover"
              src={MS1}
              width="100%"
              height={300}
              alt="eiei"
            />
          </Card.Body>
          <Card.Footer justify="flex-start">
            <Row wrap="wrap" justify="space-between">
              <Text b>{data.ticket_name}</Text>
              <Row>
                <Col span={9}>
                  {isFetching && <Loading />}
                  {isFetched && (
                    <>
                      <FontAwesomeIcon icon={faCalendarAlt} size="1x" />{" "}
                      {moment(data.datetime).format("DD MMM YYYY")}
                      <FontAwesomeIcon icon={faClock} size="1x">
                        {" "}
                      </FontAwesomeIcon>{" "}
                      Time: {moment(data.datetime).format("HH:mm")}
                    </>
                  )}
                </Col>
                <Col>
                  <Image src={QR1} alt="" width={100} height={100} />
                </Col>
              </Row>
              <Row>
                <h6 style={{ color: "#E24E42" }}>
                  If you didn't receive the QR CODE or the entry ticket
                  acceptance code Please check your email again.
                </h6>
              </Row>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>

      {isMobile && <Spacer y={1} />}

      <Grid xs={12} sm={3} md={3}>
        <Container>
          <Text b h2 css={{ color: "#E24E42" }}>
            My Ticket
          </Text>
          <Spacer x={0} y={1} />
          {isFetching && <Loading />}
          {isFetched && (
            <>
              <Text>Category: {data.ticket_name}</Text>
              <Text>Date: {moment(data.datetime).format("DD MMM YYYY")}</Text>
              <Text>Time: {moment(data.datetime).format("HH:mm")}</Text>
              <Text>Quantity: {data.amount}</Text>
              <Spacer x={0} y={1} />
              <Text h5 css={{ color: "red" }}>
                *Please scan the QR code to enter the museum
              </Text>
              <Text h6 css={{ color: "#F7B733" }}>
                Thank you and enjoy your visit to the museum.
              </Text>
            </>
          )}
        </Container>
      </Grid>
    </Container>
  );
};

export default Ticket;
