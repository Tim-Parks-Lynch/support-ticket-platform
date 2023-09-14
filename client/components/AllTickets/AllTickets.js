import React from "react";
import axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useQuery, useMutation } from "@tanstack/react-query";
import getAllTicketsHook from "../../hooks_and_helpers/getAllTicketsHook";

const gridStyles = {
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    color: "red",
    padding: "20px",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    marginBottom: "20px",
    "*": {
      marginRight: "5px",
    },
  },
  middleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    marginLeft: "320px",
  },
  link: {
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover": {
      color: "#fff",
      cursor: "pointer",
    },
  },
  webButton: {
    marginRight: "5px",
  },
};

export default function AllTickets() {
  const ticketQuery = useQuery({
    queryKey: ["tickets"],
    queryFn: getAllTicketsHook,
  });

  if (ticketQuery.isLoading) return <h1>Loading...</h1>;
  if (ticketQuery.isError) {
    return <pre>{JSON.stringify(ticketQuery.error)}</pre>;
  }

  if (ticketQuery.data) {
    const [data] = [ticketQuery.data];
    console.log(data);
    const columns = [
      { field: "id", headerName: "Ticket ID", flex: 0.3 },
      {
        field: "ticket_status",
        headerName: "Ticket Status",
        flex: 1,
        //   width: 300
      },
      {
        field: "ticket_contact_first_name",
        headerName: "First Name",
        flex: 1,
        // width: 300,
      },
      {
        field: "ticket_contact_last_name",
        headerName: "Last Name",
        flex: 1,
        // width: 300,
      },
      {
        field: "ticket_details",
        headerName: "Ticket Details",
        flex: 2,
      },
    ];

    const rows = data.map(
      ({
        ticket_id,
        ticket_status,
        ticket_contact_first_name,
        ticket_contact_last_name,
        ticket_details,
      }) => {
        return {
          id: ticket_id,
          ticket_status,
          ticket_contact_first_name,
          ticket_contact_last_name,
          ticket_details,
        };
      }
    );

    console.log(rows);
    // const columns = data.map((ticket, index) => {
    //   return [{ field: "col1", headerName: columnTitles[index] }];
    // });

    // const rows = [
    //   { id: 1, col1: "Hello", col2: "World" },
    //   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    //   { id: 3, col1: "MUI", col2: "is Amazing" },
    // ];

    // console.log(rows, columns);
    // console.log(columns, rows);

    return (
      <div
        style={{
          marginLeft: "320px",
          width: "100%",
          //   marginRight: "10px"
        }}
      >
        <DataGrid sx={gridStyles.wrapper} rows={rows} columns={columns} />
        {data.map((ticket) => {
          return (
            <div key={ticket.ticket_id}>
              <h1> Ticket Status: {ticket.ticket_status}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
