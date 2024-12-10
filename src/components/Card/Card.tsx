import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

interface IProps {
    gameId: number;
    id: number;
    image: string;
    price: number;
    description: string;
}

const Card: FC<IProps> = ({ gameId, id, image, price, description }) => {
    return (
        <Link to={`/game/${gameId}/${id}`} className={styles.card}>
            <img src={image} alt="logo" loading="lazy" />
            <p className={styles.card_title}>{price} ₽</p>
            <p className={styles.card_subtitle}>{description}</p>
        </Link>
    );
};

export default Card;
