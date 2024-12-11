import { FC, useEffect, useState } from "react";
import { CreditCard } from "lucide-react";

import styles from "./PayPage.module.scss";
import { useParams } from "react-router-dom";
import { gamesCatalogue } from "../../data/data";

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    cost: number;
}

const PayPage: FC = () => {
    const { id, productId } = useParams();
    const gameId = parseInt(id!, 10);
    const game = gamesCatalogue.find((game) => game.id === gameId);

    const [product, setProduct] = useState<Product | null>(null);
    const [activeBtn, setActiveBtn] = useState<string>("button1");
    const [input, setInput] = useState<string>("");
    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);

    const handleButton = (button: string) => {
        setActiveBtn(button);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (input.trim().length > 0 && input.includes("@")) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [input]);

    useEffect(() => {
        const itemId = parseInt(productId!, 10);

        if (!game) {
            console.log("Игра не найдена");
        }

        let foundProduct: Product | undefined = undefined;

        for (const dataItem of game!.data) {
            foundProduct = dataItem.items.find((item) => item.id === itemId);
            if (foundProduct) {
                break;
            }
        }

        setProduct(foundProduct || null);
    }, [id, productId]);

    return (
        <div className={styles.pay}>
            <h3 className={styles.pay__title}>
                К оплате <span>{product?.cost}</span> ₽
            </h3>

            <div className={styles.pay__method}>
                <h3 className={styles.pay__method_title}>Способ оплаты</h3>

                <div className={styles.pay__method_buttons}>
                    <button
                        className={activeBtn === "button1" ? styles.active : ""}
                        onClick={() => handleButton("button1")}
                    >
                        <CreditCard />
                        Карта (RU)
                    </button>
                    <button
                        className={activeBtn === "button2" ? styles.active : ""}
                        onClick={() => handleButton("button2")}
                    >
                        <img src="/sbp.png" alt="bank" />
                        СБП
                    </button>
                </div>
            </div>

            <div className={styles.pay__email}>
                <h3 className={styles.pay__email_title}>Email</h3>

                <input
                    className={styles.pay__email_input}
                    type="email"
                    placeholder="example@mail.ru"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <p className={styles.pay__email_subtitle}>
                    Указывайте почту, к которой у Вас есть доступ.
                    <br />
                    На неё мы отправим информацию по Вашему заказу
                </p>
            </div>

            <button
                className={styles.pay__submit}
                onClick={() =>
                    window.open("https://t.me/budkagemov_bot", "_blank")
                }
                disabled={isBtnDisabled}
            >
                Оплатить
            </button>
        </div>
    );
};

export default PayPage;
