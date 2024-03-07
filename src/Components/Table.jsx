import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataTable = () => {
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,city:"hhh"},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,city:"hhh"},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,city:"hhh" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,city:"hhh" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,city:"hhh"},
  ];

  return (
    <Box mt={15}   style={{overflowY: 'auto', maxHeight: '500px'}}>
    <TableContainer component={Paper} >
      <Table style={{width:"60%" ,direction:"rtl", height:"500px",marginLeft:"6%"}}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right"> <Typography  sx={{color:"rgba(138, 146, 166, 1)",fontFamily:"Rubik"}}> أسم العامل</Typography></TableCell>
            <TableCell align="right"> <Typography  sx={{color:"rgba(138, 146, 166, 1)",fontFamily:"Rubik"}}>  البريد</Typography></TableCell>
            <TableCell align="right"> <Typography  sx={{color:"rgba(138, 146, 166, 1)",fontFamily:"Rubik"}}> المهنة </Typography></TableCell>
            <TableCell align="right"> <Typography  sx={{color:"rgba(138, 146, 166, 1)",fontFamily:"Rubik"}}> المحافظة </Typography></TableCell>
            <TableCell align="right"> <Typography  sx={{color:"rgba(138, 146, 166, 1)",fontFamily:"Rubik"}}>  المدينة</Typography></TableCell>

     
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
             
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{`${row.firstName || ''} ${row.lastName || ''}`}</TableCell>
              <TableCell>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default DataTable;
