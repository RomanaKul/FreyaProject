import { Box, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { theme } from "../../theme";
import ModalWindow from "./ModalWindow";
import { useState, useEffect } from "react";
import { DeleteButton } from "../Components/DeleteButton";
import { EditButton } from "../Components/EditButton";

const CustomFooter = ({ rows, setRows }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: 2,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    }}
  >
    <ModalWindow rows={rows} setRows={setRows} />
  </Box>
);

export default function Table() {
  const [rows, setRows] = useState(() => {
    const localValue = localStorage.getItem("rows");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  const deleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const columns = [
    {
      field: "id",
      width: 70,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <div style={{ fontWeight: "bold" }}>№</div>,
      renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: "command",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <div style={{ fontWeight: "bold" }}>Команда</div>,
    },
    {
      field: "comment",
      width: 740,
      headerAlign: "center",
      renderHeader: () => <div style={{ fontWeight: "bold" }}>Коментар</div>,
    },
    {
      field: "edit",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderHeader: () => <div style={{ fontWeight: "bold" }}>Редагувати</div>,
      renderCell: () => <EditButton onClick={() => console.log("Hello")} />,
    },
    {
      field: "delete",
      width: 120,
      headerAlign: "center",
      align: "center",

      renderHeader: () => <div style={{ fontWeight: "bold" }}>Видалити</div>,

      renderCell: (params) => (
        <DeleteButton onClick={() => deleteRow(params.row.id)} />
      ),
    },
  ];

  return (
    <>
      <Box>
        <Typography marginBottom={3}>
          Нижче подана таблиця команд, які ми тренуємо з Фрейєю.
        </Typography>
        <DataGrid
          columns={columns}
          rows={rows}
          components={{
            Footer: () => <CustomFooter rows={rows} setRows={setRows} />,
          }}
          sx={{
            fontSize: 18,
            ["& .MuiDataGrid-columnHeaders"]: {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.primary,
            },

            [`& .${gridClasses.row}`]: {
              bgcolor: theme.palette.primary.light,
              color: theme.palette.text.white,
              "&:hover": {
                bgcolor: theme.palette.primary.light,
              },
            },

            [`& .${gridClasses.row}.even`]: {
              backgroundColor: theme.palette.primary.main,
            },

            "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
              py: "20px",
            },
          }}
          rowSelection={false}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          getRowHeight={() => "auto"}
          hideFooterPagination
        />
      </Box>
    </>
  );
}
