import { Box, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { theme } from "../../theme";
import ModalWindow from "./Modal";

const columns = [
  {
    field: "id",
    width: 70,
    headerAlign: "center",
    align: "center",
    renderHeader: () => <div style={{ fontWeight: "bold" }}>№</div>,
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
  },
  {
    field: "delete",
    width: 120,
    headerAlign: "center",
    align: "center",

    renderHeader: () => <div style={{ fontWeight: "bold" }}>Видалити</div>,
  },
];

const rows = [
  {
    id: "1",
    command: "Сидіти",
    comment:
      'Потрібно закріпити, що команда скасовується лише після слова "Добре".',
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: "2",
    command: "Лежати",
    comment:
      'Інколи ще плутає з командою "Сидіти". Швидко розриває команду, не дочекавшись "Добре".',
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: "3",
    command: "Дай лапу",
    comment: "Виконує добре. Навчити міняти лапу.",
    edit: "Edit",
    delete: "Delete",
  },
];

const CustomFooter = () => (
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
    <ModalWindow />
  </Box>
);

export default function Table() {
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
            Footer: CustomFooter,
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
