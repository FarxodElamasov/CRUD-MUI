import { Button, Grid, ButtonGroup } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function About() {

  const [data, setData] = useState([]);

  const getAllData = () => {
    axios.get("http://localhost:3000/data")
      .then((res) => {
        setData(res.data)
      })
  }

  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("secces")
          setData(data.filter((el) => el.id !== id))
        }
      })
  }

  useEffect(() => {
    getAllData();
  }, [])

  return (
    <>
      <Grid container spacing={2} direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={8} >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, border: "20px", boxShadow: "1px 1px 15px gray" }} aria-label="simple table">
              <TableHead sx={{ border: "20px", boxShadow: "1px 1px 15px gray" }}>
                <TableRow>
                  <TableCell>Car Imgaes</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  console.log(row)
                  return (
                    <>
                      <TableRow
                        key={row.name}
                        sx={{ boxShadow: "1px 1px 15px gray", }}
                      >
                        <TableCell component="div" scope="row" >
                          <img src={row.img} width="100" alt="" />
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                          <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Link to={row.id ? `/about/edit/${row.id}` : null}>
                              <Button>Edit</Button>
                            </Link>
                            <Button onClick={() => deleteData(row.id)}>Delete</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    </>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}
