import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DataTable = ({ data, onDeleteData }) => {
  return (
    <Box style={{ overflowY: 'auto',overflowX: 'auto',  height: '400px' }}>
      <TableContainer component={Paper}>
        <Table style={{ direction: "rtl" }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right"><Typography sx={{ color: "rgba(138, 146, 166, 1)", fontFamily: "Rubik" }}>اسم المنتج</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ color: "rgba(138, 146, 166, 1)", fontFamily: "Rubik" }}>السعر</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ color: "rgba(138, 146, 166, 1)", fontFamily: "Rubik" }}>الوصف</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ color: "rgba(138, 146, 166, 1)", fontFamily: "Rubik" }}>الصور</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ color: "rgba(138, 146, 166, 1)", fontFamily: "Rubik" }}>الفئة الرئيسية</Typography></TableCell>
              <TableCell align="right"><Typography sx={{ color: "rgba(138, 146, 166, 1)", fontFamily: "Rubik" }}>الفئة الفرعية</Typography></TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.description}</TableCell>
                <TableCell align="right">
                  {/* <ul>
                    {product.photos.map((photo, index) => (
                      <li key={index}>
                        <img src={photo} alt={`Product ${index}`} style={{ width: '50px', height: '50px' }} />
                      </li>
                    ))}
                  </ul> */}
                </TableCell>
                <TableCell align="right">{product.category.main}</TableCell>
                <TableCell align="right">{product.category.sub}</TableCell>
                <TableCell>
                  <IconButton aria-label="delete" onClick={() =>onDeleteData(product.id)}>
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
