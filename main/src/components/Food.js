export default function Food() {
    return (
        <>
            <div className="food">
                <div className="food_name">급식</div>
                <div className="food_status">점심</div>
                <div className="food_li">
                    <ul className="food_list">
                        <li>수수밥</li>
                        <li>목살김치찌개</li>
                        <li>추러스고구마맛탕</li>
                        <li>가지무침</li>
                        <li>고추치킨마요(와사비)</li>
                        <li>오미자에이드</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .food {
                    background-color: white;
                    margin: 45px 30px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 20px;
                    align-items: center;
                    position: relative;
                    cursor: pointer;
                }

                .food_name {
                    font-weight: 700;
                    margin-top: 10px;
                }

                .food_status {
                    position: absolute;
                    top: 30px;
                    left: 15px;
                    font-size: 11px;
                    border: 1.4px solid black;
                    border-radius: 5px;
                    padding: 3px 6px;
                    color: blue;
                }

                .food_li {
                    margin-top: 10px;
                }

                .food_list {
                    list-style: none;
                    line-height: 35px;
                    font-weight: 600;
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </>
    );
}
