import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: "6px"
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,

}));


export default function LongImg() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', marginTop: "20px", marginBottom: "20px"}}>
            <ImageButton
                focusRipple
                key='Tesla Model 3'
                style={{
                    width: "100%",
                    height: "110px",
                }}
            >
                <ImageSrc style={{ backgroundImage: `url('https://topdetal.ru/upload/iblock/9d8/9d86a9b6982ef91cbfcb1272459ad60e.jpg')` }} />
                <Image>
                    <Typography
                        variant="subtitle1"
                        fontWeight="700"
                        fontSize="35px" 
                        marginLeft="430px" 
                        marginBottom="20px"             >
                        Elektric  Cars
                    </Typography>
                </Image>
            </ImageButton>
            <Typography
                        variant="subtitle1"
                        fontWeight="500"
                        fontSize="20px" 
                        marginLeft="250px" 
                        marginTop="20px"             >
                        Bizdan arzonini topsangiz pulingizni qaytaramiz !!!
                    </Typography>

        </Box>
    );
}
