import React from 'react'
import "./Navbar.css"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';

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
          <Typography component="div" sx={{ paddingTop: "30px" }}>
            <Typography component="div" sx={{ display: "flex", alignItems: "center" }}>
              <Typography component="h6" sx={{ fontWeight: 700, fontSize: "20px", paddingRight: "10px" }}>Electric Cars</Typography>

              <button style={{
                background: "#f48e00", color: "#fff", border: "none", paddingLeft: 22,
                paddingRight: 35, paddingTop: 10, paddingBottom: 10, borderRadius: "5px"
              }}>
                <AddShoppingCartIcon />Katalog </button>
              <input placeholder="Matn kiriting" />
              <SearchSharpIcon sx={{
                background: "#f48e00",
                width: "42px",
                height: "43px",
                color: "white",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                cursor: "pointer"
              }} />
              <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center" }}>
                <FavoriteBorderSharpIcon sx={{
                  cursor: "pointer",
                  width: "42px",
                  height: "30px",
                  margin: "auto"
                }} />
                <Typography component="h6" sx={{ fontSize: "15px" }}>Sevimli</Typography>
              </Typography>
              <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center" }}>
                <MultipleStopIcon sx={{
                  cursor: "pointer",
                  width: "42px",
                  height: "30px",
                  margin: "auto"
                }} />
                <Typography component="h6" sx={{ fontSize: "15px" }}>Taqqoslash</Typography>
              </Typography>
              <Typography component="div" sx={{ marginLeft: "20px", alignItems: "center", textAlign: "center" }}>
                <ShoppingBagIcon sx={{
                  cursor: "pointer",
                  width: "42px",
                  height: "30px",
                  margin: "auto"
                }} />
                <Typography component="h6" sx={{ fontSize: "15px" }}>Savatcha</Typography>
              </Typography>
              <LogoutIcon sx={{
                background: "#f48e00",
                width: "42px",
                height: "43px",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "20px"
              }} />
            </Typography>
          </Typography>
        </Grid>

      </Grid>


    </>
  )
}
