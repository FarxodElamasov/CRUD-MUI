import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./RekStyle.css"
import CaruCard from './CaruCard';
import RasmLink from './RasmLink';
import LongImg from './LongImg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';



export default function Reklama() {
    return (
        <>

            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={9}>
                    <RasmLink />
                </Grid>
            </Grid>

            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={9}>
                    <Typography gutterBottom variant="h5" component="div" marginTop="20px" marginBottom="15px" fontWeight="500">
                        TESLA Narxlari
                    </Typography>
                </Grid>
            </Grid>


            <Splide>
                <SplideSlide>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                    </Grid>
                </SplideSlide>
                <SplideSlide>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                        <Grid item xs={2}>
                            <CaruCard />
                        </Grid>
                    </Grid>
                </SplideSlide>
            </Splide>

            <Grid container spacing={-28} direction="row" justifyContent="end" alignItems="center">
                <Grid item xs={10}>
                    <LongImg />
                    {/* <img style={{marginTop: "20px", marginBottom: "20px", height: "100px", width: "100%"}} src="https://topdetal.ru/upload/iblock/9d8/9d86a9b6982ef91cbfcb1272459ad60e.jpg" alt="png" /> */}
                </Grid>
            </Grid>
        </>
    )
}
