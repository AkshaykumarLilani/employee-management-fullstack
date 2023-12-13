import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Add, Logout } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/AuthReducer/actions';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddEmployeeModal from '../Components/AddEmployeeModal';

const columns = [
  { id: 'fist_name', label: 'First Name'},
  { id: 'last_name', label: 'Last Name' },
  { id: 'email', label: 'Email'},
  { id: 'department', label: 'Department' },
  {
    id: 'salary',
    label: 'Salary',
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'actions',
    label: 'Actions'
  }
];

function createData(first_name, last_name, email, department, salary) {
  const editButton = <Button variant="outlined"> Edit </Button>
  const deleteButton = <Button variant="outlined"> Delete </Button>
  const actions = <div className='d-flex gap-2'>
    {editButton}
    {deleteButton}
  </div>
  return { first_name, last_name, email, department, salary, actions };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

function DashboardPage() {
  const dispatch = useDispatch();

  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const handleOpen = () => setShowAddEmployeeModal(true);
  const handleClose = () => setShowAddEmployeeModal(false);

  const logout = () => dispatch(logoutAction());
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main className='d-flex justify-content-start align-items-start p-3' id='signup-page' style={{ height: "100svh" }}>
      <section className='d-flex flex-column gap-3'>
        <h1>Employees</h1>
        <div className='d-flex gap-3'>
          <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>
            Add Employee
          </Button>
          <Button variant="outlined" startIcon={<Logout />} onClick={logout}>
            Logout
          </Button>
        </div>
        <div className='my-2 shadow'>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            className='d-flex justify-content-center align-items-center'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </section>
      {
        showAddEmployeeModal ? <AddEmployeeModal handleClose={handleClose} open={showAddEmployeeModal} /> : null
      }
    </main>
  )
}

export default DashboardPage