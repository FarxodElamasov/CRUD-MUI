import * as React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';


export default function Product() {
  const [data, setData] = React.useState([])

  const getAllData = () => {
    axios.get(" http://localhost:3000/data")
      .then(list => {
        setData(list.data)
      })
  }
  React.useEffect(() => {
    getAllData()
  }, [])


  return (
    <>
      <Splide>
        <SplideSlide>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            {data.slice(0, 5).map((item) => {
              return (
                <>
                  <Grid item xs={2}>
                    <Card >
                      <CardActionArea>
                        <CardMedia
                          width="100%"
                          component="img"
                          height="140"
                          src={item.img}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="h7" fontWeight="500" color="dark">
                          {item.description}
                          </Typography>
                          <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                            ${item.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Stack direction="row" >
                          <Button  style={{ marginLeft: "9.5px", marginTop: "-18px", bacground:"#f48e00", color: "white" }}><AddShoppingCartIcon />Add to Cart</Button>
                        </Stack>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              )
            })}
          </Grid>
        </SplideSlide>
        <SplideSlide>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            {data.slice(5, 0).map((item) => {
              return (
                <>
                  <Grid item xs={2}>
                    <Card >
                      <CardActionArea>
                        <CardMedia
                          width="100%"
                          component="img"
                          height="140"
                          src={item.img}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="h7" fontWeight="500" color="dark">
                          {item.description}
                          </Typography>
                          <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                            ${item.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Stack direction="row" >
                          <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px", background: "#f48e00", color: "white" }}><AddShoppingCartIcon />Add to Cart</Button>
                        </Stack>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              )
            })}
          </Grid>
        </SplideSlide>
      </Splide>
    </>
  )
}
