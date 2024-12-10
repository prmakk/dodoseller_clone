import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

import styles from "./HomePage.module.scss";
import { gamesCatalogue } from "../../data/data";
import { Link } from "react-router-dom";

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

            <div className={styles.catalogue}>
                <h3 className={styles.catalogue__title}>Каталог игр</h3>
                <div className={styles.catalogue__grid}>
                    {gamesCatalogue.map((game) => (
                        <Link
                            to={`/game/${game.id}`}
                            className={styles.catalogue__grid_game}
                            key={game.id}
                        >
                            <img src={game.image} alt="logo" />
                            <p className={styles.catalogue__grid_game_title}>
                                {game.name}
                            </p>
                            <p className={styles.catalogue__grid_game_subtitle}>
                                {game.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
