import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';





export default function Navbar() {

  return (
    <>
      <Typography component="div" sx={{ display: "flex", background: "#f48e00", alignItems: "center", padding: "0 20px", color: "#fff" }}>
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

              <button style={{ background: "#f48e00", color: "#fff", border: "none", paddingLeft: 22,
               paddingRight: 35,  paddingTop: 10,  paddingBottom: 10, borderRadius: "5px" }}><AddShoppingCartIcon />Katalog </button>

            </Typography>
          </Typography>
        </Grid>

      </Grid>


    </>
  )
}
