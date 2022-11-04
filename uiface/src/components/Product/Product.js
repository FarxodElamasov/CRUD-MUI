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



export default function Product() {
  return (
    <>
      <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={9}>
          <Splide>
            <SplideSlide >
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
            </SplideSlide>

            <SplideSlide>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea>
                  <CardMedia
                    width="100%"
                    component="img"
                    height="140"
                    src='https://media.motorbox.com/image/tesla-esplode-il-caso-parcheggi-pieni-e-maxi-ritardi-nelle-consegne/6/1/8/618918/618918-16x9-lg.jpg'
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tesla Model 3
                    </Typography>
                    <Typography variant="h7" fontWeight="500" color="dark">
                      310 km/s , 14 soat,
                      gray solutions
                    </Typography>
                    <Typography style={{ marginTop: "10px" }} variant="h6" fontWeight="600" color="green">
                      $ 300 000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Stack direction="row" >
                    <Button variant="contained" style={{ marginLeft: "9.5px", marginTop: "-18px" }}><AddShoppingCartIcon />Add to Cart</Button>
                  </Stack>
                </CardActions>
              </Card>
            </SplideSlide>
          </Splide>
        </Grid>
      </Grid>



    </>
  )
}
