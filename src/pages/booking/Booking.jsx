import React, { useState } from "react";
import {
  Title,
  Box,
  Box2,
  Payouttitle,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Bookingtitile,
  Warning,
  NotSelectbutton,
  Nextbutton,
  Backbutton,
  Numberofticket,
} from "./style";
import { Container, Grid, Row, Text } from "@nextui-org/react";
import pic1 from "../../static/media/ticketpage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowCircleLeft,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";
import { Image, Loading } from "@nextui-org/react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Booking = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(650);
  const [selectedDate, setDate] = useState(new Date());
  const [selectedTime, setTime] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const { data, isFetching } = useQuery(
    "booking-dates",
    () => {
      return axios
        .get("/booking/date-status?range=14")
        .then((res) => res.data.data);
    },
    { initialData: { available_date: [] } }
  );

  const increaseTicket = () => {
    if (ticketCount >= 10) return;
    setTicketCount((prev) => prev + 1);
  };

  const decreaseTicket = () => {
    if (ticketCount <= 1) return;
    setTicketCount((prev) => prev - 1);
  };

  return (
    <div style={{ margin: "100px auto" }}>
      <Title>Book Ticket</Title>
      <Box>
        <Box2>
          <Payouttitle>
            <Bookingtitile>Booking</Bookingtitile>
            Payout
          </Payouttitle>
          <Container
            css={{
              mt: 20,
              d: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Grid
              xs={12}
              sm={4}
              md={3}
              css={{
                d: "flex",
                flexDirection: "column",
              }}
            >
              <Image src={pic1} width={isMobile ? "200px" : "75%"} alt="" />
              <Text css={{ textAlign: "center" }}>Entry ticket 150 THB</Text>
            </Grid>

            <Grid
              xs={12}
              sm={8}
              md={9}
              css={{
                mt: 20,
                d: "flex",
                flexDirection: "column",
              }}
            >
              <Row
                css={{
                  d: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Text b h4 css={{ textAlign: "center" }}>
                  Apr 2022
                </Text>
                <Row justify="center">
                  <Icon1>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
                  </Icon1>
                  {isFetching ? (
                    <Loading />
                  ) : (
                    data.available_date.slice(0, 10).map((day) => (
                      <NotSelectbutton
                        key={day.date}
                        active={
                          new Date(day.date).getDate() ===
                          selectedDate.getDate()
                        }
                        onClick={() => {
                          setDate(new Date(day.date));
                          setTime("");
                        }}
                        disabled={
                          moment(day.date).weekday() === 0 ||
                          moment(day.date).weekday() === 6
                        }
                      >
                        {moment(day.date).format("ddd")}
                        <br />
                        {moment(day.date).format("DD")}
                      </NotSelectbutton>
                    ))
                  )}
                  <Icon1>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
                  </Icon1>
                </Row>
              </Row>

              <Row
                css={{
                  d: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <br />
                <Text>Select time</Text>
                <Row justify="center">
                  <Icon2>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
                  </Icon2>
                  {isFetching ? (
                    <Loading />
                  ) : (
                    data.available_date
                      .filter(
                        (day) =>
                          new Date(day.date).getUTCDate() ===
                          selectedDate.getDate()
                      )[0]
                      .time.map((e) => (
                        <NotSelectbutton
                          key={e.hour}
                          active={e.hour === selectedTime}
                          disabled={e.status === "CLOSED"}
                          onClick={() => {
                            setTime(e.hour);
                          }}
                          status={e.status}
                        >
                          {e.hour}
                        </NotSelectbutton>
                      ))
                  )}
                  <Icon2>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
                  </Icon2>
                </Row>
              </Row>
              <Row justify={isMobile ? "center" : "flex-end"}>
                <Icon3>
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    size="2x"
                    onClick={decreaseTicket}
                  />
                </Icon3>
                <Numberofticket>{ticketCount}</Numberofticket>
                <Icon4>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    size="2x"
                    onClick={increaseTicket}
                  />
                </Icon4>
                <Backbutton>Back</Backbutton>
                <Nextbutton
                  disabled={selectedTime === ""}
                  onClick={() => {
                    navigate("/booking/2", {
                      state: { selectedDate, selectedTime, ticketCount },
                    });
                  }}
                >
                  Next
                </Nextbutton>
              </Row>
            </Grid>
          </Container>
        </Box2>
        <Warning>
          Coronavirus (COVID-19) may affect your travel plans. Learn more
        </Warning>
      </Box>
    </div>
  );
};

export default Booking;
