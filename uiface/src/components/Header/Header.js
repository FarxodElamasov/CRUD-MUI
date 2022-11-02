import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';


export default function Header() {
    return (
        <>
            <Splide>
                <SplideSlide>
                    <img style={{width: "100%", height: "500px"}} src="https://avatars.mds.yandex.net/i?id=2a00000179efe3364c0f8edefe48ea775ece-3738935-images-thumbs&n=13" alt="Imag" />
                </SplideSlide>
                <SplideSlide>
                    <img style={{width: "100%", height: "500px"}} src="https://miro.medium.com/max/1200/1*6vBPvwDslnrpyry2CWTwKQ.jpeg" alt="Imag" />
                </SplideSlide>
            </Splide>
        </>
    )
}
