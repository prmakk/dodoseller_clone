import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
    const [swiper, setSwiper] = useState<any>(null);

    return (
        <div className={styles.home}>
            <div className={styles.slider}>
                <div className={styles.slider__nav}>
                    <div
                        className={styles.slider__nav_item}
                        onClick={() => swiper.slidePrev()}
                    >
                        <ChevronLeft size={23} color="#000" />
                    </div>
                    <div
                        className={styles.slider__nav_item}
                        onClick={() => swiper.slideNext()}
                    >
                        <ChevronRight size={23} color="#000" />
                    </div>
                </div>
                <Swiper onSwiper={(s) => setSwiper(s)} loop>
                    <SwiperSlide>
                        <div className={styles.slider__image}>
                            <img src="slider_1.jpg" alt="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider__image}>
                            <img src="slider_1.jpg" alt="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider__image}>
                            <img src="slider_1.jpg" alt="image" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomePage;
