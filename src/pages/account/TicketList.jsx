import { Container, Table, Tooltip } from "@nextui-org/react";
import axios from "axios";
import moment from "moment";
import React from "react";
import styled from 'styled-components'
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useNavigate } from "react-router";

const StyledIcon = styled(FontAwesomeIcon)`
  transition: .3s;
  &:hover {
    color: #0072F5;
  }
`;

const TicketList = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(650);
  const { data } = useQuery(
    "user-ticket-list",
    () => {
      return axios.get("/profile/tickets").then((res) => res.data.data.tickets);
    },
    { initialData: [] }
  );

  const onTicketClick = (ticket_id) => {
    navigate(`/account/ticket/${ticket_id}`, { replace: true });
  }

  return (
    <Container css={{ pb: 100, pt: 50, maxWidth: isMobile? '100%':'80vw' }}>
      <Table striped aria-label="ticket-list" selectionMode="none">
        <Table.Header>
          <Table.Column></Table.Column>
          <Table.Column>Ticket ID</Table.Column>
          <Table.Column>Datetime</Table.Column>
          <Table.Column>Quantity</Table.Column>
        </Table.Header>
        <Table.Body>
          {data.map((ticket) => (
            <Table.Row key={ticket.ticket_id}>
              <Table.Cell>
                <Tooltip
                  content={`View ${ticket.ticket_id}`}
                  rounded
                  placement="top"
                >
                  <StyledIcon icon={faMagnifyingGlass} onClick={() => onTicketClick(ticket.ticket_id)} />
                </Tooltip>
              </Table.Cell>
              <Table.Cell>{ticket.ticket_id}</Table.Cell>
              <Table.Cell>
                {moment(ticket.datetime).format("DD MMM YYYY (HH:mm)")}
              </Table.Cell>
              <Table.Cell>{ticket.amount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TicketList;
