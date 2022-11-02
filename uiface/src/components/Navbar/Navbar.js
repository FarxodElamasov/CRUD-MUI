import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';





export default function Navbar() {

  return (
    <>
      <Typography component="div" sx={{ display: "flex", background: "#2DA55F", alignItems: "center", padding: "0 20px", color: "#fff" }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "14px", padding: 0 }}>
          21:20  Dushanba
        </Typography>
        <Button color="inherit" sx={{ fontSize: "12px" }}>O'zbekcha</Button>
      </Typography>

      <Grid container
        direction="row"
        justifyContent="center">
        <Grid item xs={10}>
          <Typography component="div" sx={{paddingTop: "30px"}}>
            <Typography component="div" sx={{display: "flex", alignItems: "center"}}>
              <Typography component="h6" sx={{fontWeight: 700, fontSize: "20px", paddingRight: "10px"}}>Olmaliq Savdo</Typography>

              <button style={{ background: "#2DA55F", color: "#fff", border: "none", paddingLeft: 40,
               paddingRight: 35,  paddingTop: 10,  paddingBottom: 10, borderRadius: "5px" }}>Katalog <KeyboardArrowDownIcon /></button>

            </Typography>
          </Typography>
        </Grid>

      </Grid>


    </>
  )
}
