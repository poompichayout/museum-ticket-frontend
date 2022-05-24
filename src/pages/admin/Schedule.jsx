import React, { useMemo, useState } from "react";
import {
  Text,
  Container,
  Grid,
  Row,
  Col,
  Button,
  Spacer,
} from "@nextui-org/react";
import Calendar from "../../components/admin/Calendar";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import axios from "axios";

const Schedule = () => {
  const [now, setDate] = useState(new Date());

  const fetchDates = () => {
    return axios
      .get(`/admin/schedule/${now.getFullYear()}/${now.getMonth() + 1}`)
      .then((res) => res.data);
  };
  const { isFetched, data } = useQuery("dates", fetchDates);

  const createDayInMonth = () => {
    var date = new Date(now.getFullYear(), now.getMonth(), 1);
    var days = [];
    while (date.getMonth() === now.getMonth()) {
      const day = new Date(date);
      days.push({
        color: "normal",
        dayInWeek: day.getDay(),
        day: day.getDate(),
        status: day.getDay() === 0 || day.getDay() === 6 ? "CLOSED" : "OPEN",
      });
      date.setDate(date.getDate() + 1);
    }
    let lastDay = days[days.length - 1].dayInWeek;
    for (let i = lastDay + 1, count = 1; i < 7; i++, count++) {
      days.push({
        color: "blur",
        dayInWeek: i,
        day: count,
        status: i === 0 || i === 6 ? "CLOSED" : "OPEN",
      });
    }

    date = new Date(now.getFullYear(), now.getMonth(), 1);
    let firstDay = days[0].dayInWeek;
    for (
      let i = firstDay - 1,
        count = new Date(date.setDate(date.getDate() - 1)).getDate();
      i >= 0;
      i--, count--
    ) {
      days.unshift({
        color: "blur",
        dayInWeek: i,
        day: count,
        status: i === 0 || i === 6 ? "CLOSED" : "OPEN",
      });
    }

    if (isFetched) {
      for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < data.data.date.length; j++) {
          const JDate = new Date(data.data.date[j].close_date);
          if (
            JDate.getUTCDate() === days[i].day &&
            JDate.getUTCDay() === days[i].dayInWeek
          ) {
            if (days[i].time) {
              days[i].time.push(JDate.getUTCHours());
            } else {
              days[i] = {
                ...days[i],
                status: "CLOSED",
                time: [JDate.getUTCHours()],
              };
            }
          }
        }
      }
    }

    var arrays = [],
      size = 7;
    while (days.length > 0) arrays.push(days.splice(0, size));
    return arrays;
  };

  const increaseMonth = () => {
    setDate((prev) => {
      return new Date(prev.setMonth(prev.getMonth() + 1));
    });
  };

  const decreaseMonth = () => {
    setDate((prev) => {
      return new Date(prev.setMonth(prev.getMonth() - 1));
    });
  };

  const array = useMemo(() => {
    return createDayInMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [increaseMonth, decreaseMonth, createDayInMonth]);

  return (
    <Container fluid>
      <Text h2>Schedule</Text>
      <Container fluid gap={0} css={{ mt: 50, mb: 50 }}>
        <Grid.Container css={{ mb: 20 }}>
          <Row>
            <Col
              xs={8}
              css={{
                d: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                size="xs"
                color="gradient"
                rounded
                bordered
                icon={<FontAwesomeIcon icon={faAngleLeft} />}
                onPress={decreaseMonth}
              />
              <Spacer />
              <Text h4>{moment(now).format("MMMM YYYY")}</Text>
              <Spacer />
              <Button
                size="xs"
                color="gradient"
                rounded
                bordered
                icon={<FontAwesomeIcon icon={faAngleRight} />}
                onPress={increaseMonth}
              />
            </Col>
          </Row>
        </Grid.Container>
        <Calendar days={array} month={now.getMonth()} year={now.getFullYear()} />
      </Container>
    </Container>
  );
};

export default Schedule;
