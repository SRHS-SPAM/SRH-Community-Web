import styles from "./Food.module.css";
export default function Food() {
    return (
        <>
            <div className={styles.food}>
                <div className={styles.food_name}>급식</div>
                <div className={styles.food_status}>점심</div>
                <div className={styles.food_li}>
                    <ul className={styles.food_list}>
                        <li>수수밥</li>
                        <li>목살김치찌개</li>
                        <li>추러스고구마맛탕</li>
                        <li>가지무침</li>
                        <li>고추치킨마요(와사비)</li>
                        <li>오미자에이드</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
