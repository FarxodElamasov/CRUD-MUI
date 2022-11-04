import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';


export default function Header() {
    return (
        <>
            <Splide>
                <SplideSlide>
                    <img style={{width: "100%", height: "500px", borderRadius: "20px"}} src="https://di-uploads-pod1.dealerinspire.com/rayskillmanford/uploads/2020/05/Ford-Mustang-Greenwood-IN-1.png" alt="Imag" />
                </SplideSlide>
                <SplideSlide>
                    <img style={{width: "100%", height: "500px", borderRadius: "20px"}} src="https://unreasonablegroup.com/articles/wp-content/uploads/2016/08/VivekWadhwa_FutureNow-2.jpg" alt="Imag" />
                </SplideSlide>
            </Splide>
        </>
    )
}
