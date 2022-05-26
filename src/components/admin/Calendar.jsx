import React from "react";
import { Card, Col, Table, Text } from "@nextui-org/react";
import { StyledBadge } from "../../components/admin/StyledBadge";
import moment from "moment";

import PropTypes from "prop-types";
import EditDayModal from "./EditDayModal";

const Calendar = ({ days, month, year, refetch }) => {
  const [visible, setVisible] = React.useState(false);
  const [clickedDate, setDate] = React.useState(new Date(year, month));
  const [defaultStatus, setStatus] = React.useState({
    status: "OPEN",
    time: undefined
  })
  const handler = (day, status) => {
    setDate(new Date(clickedDate.setDate(day)));
    setStatus({ ...status });
    setVisible(true);
  };

  return (
    <React.Fragment>
      <Table
        aria-label="calendar"
        color="primary"
        css={{
          height: "auto",
          minWidth: "100%",
          backgroundColor: "$background",
        }}
      >
        <Table.Header>
          <Table.Column>Sun</Table.Column>
          <Table.Column>Mon</Table.Column>
          <Table.Column>Tue</Table.Column>
          <Table.Column>Wed</Table.Column>
          <Table.Column>Thu</Table.Column>
          <Table.Column>Fri</Table.Column>
          <Table.Column>Sat</Table.Column>
        </Table.Header>
        <Table.Body>
          {days.map((week, index) => {
            return (
              <Table.Row key={index}>
                {week.map((day) => {
                  return (
                    <Table.Cell key={day.day}>
                      <Card
                        clickable={day.color !== "blur"}
                        css={{
                          backgroundColor:
                            day.color === "blur" ? "#ccc" : "auto",
                        }}
                        shadow={false}
                        onClick={() => handler(day.day, { status: day.status, time: day.time })}
                      >
                        <Text h6>{day.day}</Text>

                        <Card.Footer>
                          <Col
                            css={{
                              d: "grid",
                              gridTemplateColumns: "min-content",
                            }}
                          >
                            <StyledBadge
                              type={
                                day.status === "CLOSED" ? "paused" : "active"
                              }
                            >
                              {day.status}
                            </StyledBadge>
                            {day.time
                              ? day.time.map((t) => (
                                  <StyledBadge type="vacation" key={t}>
                                    {moment(new Date().setHours(t))
                                      .minute(0)
                                      .format("HH:mm")}
                                  </StyledBadge>
                                ))
                              : null}
                          </Col>
                        </Card.Footer>
                      </Card>
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <EditDayModal
        visible={visible}
        closeHandler={() => {
          setVisible(false);
        }}
        date={clickedDate}
        defaultStatus={defaultStatus}
        refetch={() => {
          refetch();
        }}
      />
    </React.Fragment>
  );
};

const days = [
  [
    {
      day: 1,
      dayInWeek: 0,
      status: "OPEN",
    },
    {
      day: 2,
      dayInWeek: 1,
      status: "OPEN",
    },
    {
      day: 3,
      dayInWeek: 2,
      status: "OPEN",
    },
    {
      day: 4,
      dayInWeek: 3,
      status: "OPEN",
    },
    {
      day: 5,
      dayInWeek: 4,
      status: "OPEN",
    },
    {
      day: 6,
      dayInWeek: 5,
      status: "OPEN",
    },
    {
      day: 7,
      dayInWeek: 6,
      status: "OPEN",
    },
  ],
  [
    {
      day: 8,
      dayInWeek: 0,
      status: "OPEN",
    },
    {
      day: 9,
      dayInWeek: 1,
      status: "OPEN",
    },
    {
      day: 10,
      dayInWeek: 2,
      status: "OPEN",
    },
    {
      day: 11,
      dayInWeek: 3,
      status: "CLOSED",
    },
    {
      day: 12,
      dayInWeek: 4,
      status: "OPEN",
    },
    {
      day: 13,
      dayInWeek: 5,
      status: "OPEN",
    },
    {
      day: 14,
      dayInWeek: 6,
      status: "OPEN",
    },
  ],
];

Calendar.propTypes = {
  days: PropTypes.array,
};

Calendar.defaultProps = {
  days,
};

export default Calendar;
