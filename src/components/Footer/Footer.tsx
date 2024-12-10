import { FC } from "react";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.rights}>
                    <a href="https://dodoseller.com">dodoseller.com</a>
                    <span>, 2024</span>
                    <p>All rights belong to their copyright holders.</p>
                </div>

                <div className={styles.address}>
                    <p>© Roval Services Limited</p>
                    <p>
                        7/F, MW Tower, 111 Bonham Strand, Sheung Wan, Hong Kong
                    </p>
                </div>

                <div className={styles.links}>
                    <a
                        href="https://dodoseller.com/docs/agreement.pdf"
                        target="_blank"
                    >
                        Пользовательское <br /> соглашение
                    </a>

                    <a
                        href="https://dodoseller.com/docs/privacy.pdf"
                        target="_blank"
                    >
                        Политика
                        <br /> конфиденциальности
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
