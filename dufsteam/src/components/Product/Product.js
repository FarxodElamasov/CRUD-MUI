import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid } from '@mui/material';
import axios from 'axios';
import Modal2 from "../Modal/Modal"


export default function Product() {

  const [data, setData] = useState([])

  const getData = () => {

    axios.get("http://localhost:3000/data")
      .then(res => {
        setData(res.data);
        console.log(res);
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      {data.map((elem) => {
        return (
          <>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={elem.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {elem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {elem.price}$
                      {elem.discription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Modal2 name={elem.name} image={elem.img} description={elem.discription} />
                </CardActions>
              </Card>
            </Grid>
          </>
        )
      })}
    </Grid>
  )
}