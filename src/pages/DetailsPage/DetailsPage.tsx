import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronsRight, House } from "lucide-react";

import styles from "./DetailsPage.module.scss";
import { gamesCatalogue } from "../../data/data";

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    cost: number;
}

const DetailsPage: FC = () => {
    const { id, productId } = useParams();
    const gameId = parseInt(id!, 10);
    const game = gamesCatalogue.find((game) => game.id === gameId);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const itemId = parseInt(productId!, 10);

        if (!game) {
            console.log("Игра не найдена");
        }

        let foundProduct: Product | undefined = undefined;
        for (const dataItem of game!.data) {
            foundProduct = dataItem.items.find((item) => item.id === itemId);
            if (foundProduct) break;
        }

        setProduct(foundProduct || null);
    }, [id, productId]);

    return (
        <div className={styles.details}>
            <div className={styles.details__history}>
                <Link to="/">
                    <House size={23} />
                </Link>
                <ChevronsRight color="rgb(121 121 121)" size={20} />
                <Link to={`/game/${gameId}`}>{game?.name}</Link>
            </div>

            <div className={styles.product}>
                <div className={styles.product__image}>
                    <img src={product?.image} alt="product" />
                </div>

                <div
                    className={styles.product__background}
                    style={{ backgroundImage: `url(${product?.image})` }}
                ></div>
            </div>

            <h3 className={styles.title}>{product?.name}</h3>

            {product?.description.split("\n").map((str, index) => (
                <p className={styles.subtitle} key={index}>
                    {str}
                </p>
            ))}

            <div className={styles.buy}>
                <div className={styles.buy__price}>
                    <p className={styles.buy__price_cost}>{product?.cost} ₽</p>
                </div>

                <Link to={"/"} className={styles.buy__button}>
                    Купить
                </Link>
            </div>
        </div>
    );
};

export default DetailsPage;
