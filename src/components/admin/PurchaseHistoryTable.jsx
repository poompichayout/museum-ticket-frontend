import React from "react";
import { Table } from "@nextui-org/react";
import moment from "moment";

const PurchaseHistoryTable = ({ isFetched, histories }) => {
  return (
    <Table
      aria-label="Purchase history table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      containerCss
      selectionMode="single"
    >
      <Table.Header>
        <Table.Column>Ticket ID</Table.Column>
        <Table.Column>DD/MM/YYYY</Table.Column>
        <Table.Column>Time</Table.Column>
      </Table.Header>
      <Table.Body>
        {histories.map((history) => {
          const date = moment(history.datetime);
          return (
            <Table.Row key={history.ticket_id}>
              <Table.Cell>{history.ticket_id}</Table.Cell>
              <Table.Cell>{date.format("DD/MM/YYYY")}</Table.Cell>
              <Table.Cell>{date.format("HH:mm")}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      {histories.length > 5 && (
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={5}
          onPageChange={(page) => console.log({ page })}
        />
      )}
    </Table>
  );
};

export default PurchaseHistoryTable;
