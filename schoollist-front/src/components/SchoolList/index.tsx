import { useQuery } from "@apollo/client";
import { GridColDef } from "@mui/x-data-grid";
import { IStudent } from "../../pages/SchoolListPage";
import { getStudentsQuery } from "../../services/student";
import { DataGridStyled, SchoolListContainer } from "./styles";

const columns: GridColDef[] = [
  {
    field: "cpf",
    headerName: "CPF",
    headerClassName: "datagrid-header",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    minWidth: 150,
  },
  {
    field: "name",
    headerName: "Nome",
    headerClassName: "datagrid-header",
    headerAlign: "center",
    align: "center",
    flex: 0.3,
    minWidth: 100,
  },
  {
    field: "email",
    headerName: "Email",
    headerClassName: "datagrid-header",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    minWidth: 150,
  },
];

export const SchoolList = ({ cpf, name, email }: IStudent) => {
  const { data, loading, error } = useQuery(getStudentsQuery, {
    variables: {
      cpf,
      name,
      email,
    },
  });

  return (
    <SchoolListContainer>
      <DataGridStyled
        rows={loading || error ? [] : data.students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableSelectionOnClick={true}
        disableExtendRowFullWidth={true}
        loading={loading}
        error={error}
      />
    </SchoolListContainer>
  );
};
