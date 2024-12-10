import { FC } from "react";
import { Headset } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to={"/"} className={styles.logo}>
                    <img src="/logo.png" alt="logo" />
                </Link>
                <Link
                    to={"https://t.me/budkagemovbot"}
                    target="_blank"
                    className={styles.support}
                >
                    <Headset size={22} />
                    Поддержка
                </Link>
            </div>
        </header>
    );
};

export default Header;
