import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import { number } from "yup/lib/locale";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userList, setUserList] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "brand", headerName: "Brand" },
    {
      field: "category",
      headerName: "Category",
      // flex: 1,
      // cellClassName: "name-column--cell",
    },
    {
      field: "model_name",
      headerName: "ModelName",
      // type: "number",
      // headerAlign: "left",
      // align: "left",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "poorvika",
      headerName: "Poorvika",
      flex: 1,
    },
    {
      field: "amazon",
      headerName: "Amazon",
      flex: 1,
    },
    {
      field: "croma",
      headerName: "Croma",
      flex: 1,
    },
    {
      field: "reliance",
      headerName: "Reliance",
      flex: 1,
    },
    {
      field: "vijaysales",
      headerName: "Vijaysales",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      type: number,
      headerAlign: "left",
      align: "left",
    },
  ]

  useEffect(() => {
    fetch("https://pricedashboard.herokuapp.com/poorvika")
    .then((response) => response.json())
    .then((result) => setUserList(result))
    .catch((error) => console.log(error));
  }, []);

  return (
    <Box m="20px">
      <Header
        title="PRICE COMPARISON"
        // subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={userList}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
