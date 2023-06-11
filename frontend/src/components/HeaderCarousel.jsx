import { A11y, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import './HeaderCarousel.css'
import {useState } from 'react'
import { AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { BsArrowRight} from 'react-icons/bs'
import Hero1 from '../assets/hero/hero-1.jpg'
import Hero2 from '../assets/hero/hero-2.jpg'
const HeaderCarousel = ()=> {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    return(
        <div className="custom_carousel">
        <div className="navigation-wrapper">
          <Swiper
            modules={[Navigation, A11y, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{ prevEl, nextEl }}
            className="_feature_slider"
            autoplay={{
              delay: 8000,
            }}
            loop={true}
            centeredSlides={false}
            centerInsufficientSlides={true}
            speed={1000}
            effect="fade"
          >
         
              <SwiperSlide className="item">
                <img className="slider_img" src={Hero1}/>
                <div className="content">
                  <h2>Fall - Winter Collection 2024</h2>
                  <p>Unveiling a New Era in Men's Fashion: Embrace Ethical Style and Sustainable Choices with Our Premier Eco-Friendly E-Commerce Destination</p>
                  <a href="#" className="custom_btn">
                  Shop Now <BsArrowRight style={{width: "20", height: "20"}} />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <img className="slider_img" src={Hero2}/>
                <div className="content">
                  <h2>Fall - Winter Collection 2024</h2>
                  <p>Elevate Your Wardrobe Responsibly: Unleashing the Finest Selection of Eco-Conscious Men's Fashion for a Sustainable Future</p>
                  <a href="#" className="custom_btn">
                  Shop Now <BsArrowRight style={{width: "20", height: "20"}} />
                  </a>
                </div>
              </SwiperSlide>
       
          </Swiper>
          <div
            className='arrow_l'
            ref={(node) => setPrevEl(node)}
          >
            <AiOutlineLeft style={{width: "50px", height: "50px"}}  />
          </div>
          <div
            className="arrow_r"
            ref={(node) => setNextEl(node)}
          >
            <AiOutlineRight style={{width: "50px", height: "50px"}} />
          </div>
        </div>
      </div>
    )

}

export default HeaderCarousel