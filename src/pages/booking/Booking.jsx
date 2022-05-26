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
  ContentLeft,
  ContentRight,
  Warning,
  Row,
  NotSelectbutton,
  Nextbutton,
  Backbutton,
  Numberofticket,
} from "./style";
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

const Booking = () => {
  const navigate = useNavigate();
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
          <Row>
            <ContentLeft>
              <Image src={pic1} width="100%" alt="" />
              Entry ticket 150 THB
            </ContentLeft>
            <ContentRight>
              Apr 2022
              <Row>
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
                        new Date(day.date).getDate() === selectedDate.getDate()
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
              <br />
              Select time
              <Row>
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
              <Row>
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
            </ContentRight>
          </Row>
        </Box2>
        <Warning>
          Coronavirus (COVID-19) may affect your travel plans. Learn more
        </Warning>
      </Box>
    </div>
  );
};

export default Booking;
