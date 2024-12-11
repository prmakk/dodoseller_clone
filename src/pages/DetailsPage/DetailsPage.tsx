import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronsRight, House } from "lucide-react";

import styles from "./DetailsPage.module.scss";
import { gamesCatalogue } from "../../data/data";
import Card from "../../components/Card/Card";

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
    const [category, setCategory] = useState<string>("");

    const handleToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        handleToTop();
    }, []);

    useEffect(() => {
        const itemId = parseInt(productId!, 10);

        if (!game) {
            console.log("Игра не найдена");
        }

        let foundProduct: Product | undefined = undefined;
        let foundCategory: string = "";

        for (const dataItem of game!.data) {
            foundProduct = dataItem.items.find((item) => item.id === itemId);
            if (foundProduct) {
                foundCategory = dataItem.name;
                break;
            }
        }

        setProduct(foundProduct || null);
        setCategory(foundCategory);
    }, [id, productId]);

    return (
        <div className={styles.details}>
            <div className={styles.details__history}>
                <Link to="/">
                    <House size={23} />
                </Link>
                <ChevronsRight color="rgb(121 121 121)" size={20} />
                <Link to={`/game/${gameId}`}>{game?.name}</Link>
                <ChevronsRight color="rgb(121 121 121)" size={20} />
                <Link to={`/game/${gameId}`}>{category}</Link>
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

            <div className={styles.like}>
                <h3 className={styles.like__title}>Вам может понравиться</h3>

                {game?.data
                    ?.filter((dataItem) => dataItem.name === category)
                    .map((dataItem, index) => (
                        <div
                            className={styles.like__grid}
                            key={index}
                            onClick={handleToTop}
                        >
                            {dataItem.items
                                .filter(
                                    (item) =>
                                        item.id !== parseInt(productId!, 10)
                                )
                                .map((item) => (
                                    <Card
                                        key={item.id}
                                        gameId={gameId}
                                        id={item.id}
                                        image={item.image}
                                        price={item.cost}
                                        description={item.name}
                                    />
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DetailsPage;
