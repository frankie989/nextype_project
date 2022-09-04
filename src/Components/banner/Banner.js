import React from 'react';
import s from './Banner.module.css'
import ad from '../../assets/Rectangle.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from "swiper";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//Import swiper text slide
import "swiper/css/free-mode";
import "swiper/css/scrollbar";



const data = [
    {
        picture: ad,
        review: "В нашем блоге на сайте nextype.ru вышла новая статья, в которой мы собрали ссылки на самые полезные статьи и материалы, необходимые при запуске нового сайта. Рассказываем обо всем по порядку: от выбора хостинга перед созданием сайта до выбора стратегии продвижения после запуска.",
        heshteg: "#некстайп #веб_студия #новыйсайт #запусксайта",
    },
    {
        picture: ad,
        review: "В нашем блоге на сайте nextype.ru вышла новая статья, в которой мы собрали ссылки на самые полезные статьи и материалы, необходимые при запуске нового сайта. Рассказываем обо всем по порядку: от выбора хостинга перед созданием сайта до выбора стратегии продвижения после запуска.",
        heshteg: "#некстайп #веб_студия #новыйсайт #запусксайта",
    },
    {
        picture: ad,
        review: "В нашем блоге на сайте nextype.ru вышла новая статья, в которой мы собрали ссылки на самые полезные статьи и материалы, необходимые при запуске нового сайта. Рассказываем обо всем по порядку: от выбора хостинга перед созданием сайта до выбора стратегии продвижения после запуска.",
        heshteg: "#некстайп #веб_студия #новыйсайт #запусксайта",
    },
    {
        picture: ad,
        review: "В нашем блоге на сайте nextype.ru вышла новая статья, в которой мы собрали ссылки на самые полезные статьи и материалы, необходимые при запуске нового сайта. Рассказываем обо всем по порядку: от выбора хостинга перед созданием сайта до выбора стратегии продвижения после запуска.",
        heshteg: "#некстайп #веб_студия #новыйсайт #запусксайта",
    },
    {
        picture: ad,
        review: "В нашем блоге на сайте nextype.ru вышла новая статья, в которой мы собрали ссылки на самые полезные статьи и материалы, необходимые при запуске нового сайта. Рассказываем обо всем по порядку: от выбора хостинга перед созданием сайта до выбора стратегии продвижения после запуска.",
        heshteg: "#некстайп #веб_студия #новыйсайт #запусксайта",
    },

]

const Banner = (props) => {
    const screenWidth = window.screen.width
    console.log(screenWidth)
    if (screenWidth > 415) {
        return (
            <section className={s.container} id='banner'>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    breakpoints={{
                        1920: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1712: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1350: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        820: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                    }}
                >
                    {
                        data.map(({ picture, review, heshteg }, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className={s.banner}>
                                        <img src={ad} alt=""/>
                                        <div className={s.item}>
                                            <p className={s.text}>
                                                {review}
                                            </p>
                                            <p className={s.heshtegs}>{heshteg}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </section>
        );
    } else {
        return (
            <section className={s.container} id='banner'>
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={30}
                    breakpoints={{
                       414: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                    }}
                >
                    {
                        data.map(({ picture, review, heshteg }, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className={s.banner}>
                                        <img src={ad} alt=""/>
                                        <div className={s.item}>
                                            <p className={s.text}>
                                                {review}
                                            </p>
                                            <p className={s.heshtegs}>{heshteg}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </section>
        )
    }


}

export default Banner;