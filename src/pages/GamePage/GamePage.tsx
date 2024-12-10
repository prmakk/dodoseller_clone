import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Link as AnchorLink } from "react-scroll";
import { ChevronsRight, House } from "lucide-react";

import styles from "./GamePage.module.scss";
import { gamesCatalogue } from "../../data/data";
import Card from "../../components/Card/Card";

const GamePage: FC = () => {
    const { id } = useParams();
    const gameId = parseInt(id!, 10);
    const game = gamesCatalogue.find((game) => game.id === gameId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.game}>
            <div className={styles.game__history}>
                <Link to="/">
                    <House size={23} />
                </Link>
                <ChevronsRight color="rgb(121 121 121)" size={20} />
                <Link to={`/game/${gameId}`}>{game?.name}</Link>
            </div>
            <h1 className={styles.game__title}>{game?.name}</h1>
            <div className={styles.game__nav}>
                {game?.data?.map((dataItem) => (
                    <AnchorLink key={dataItem.name} to={dataItem.name} smooth>
                        {dataItem.name}
                    </AnchorLink>
                ))}
            </div>

            {game?.data?.map((dataItem, index) => (
                <div key={index}>
                    <h2 className={styles.title} id={dataItem.name}>
                        {dataItem.name}
                    </h2>
                    <div className={styles.game__grid} key={index}>
                        {dataItem.items.map((item) => (
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
                </div>
            ))}
        </div>
    );
};

export default GamePage;
