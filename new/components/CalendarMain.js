import styles from "./CalendarMain.module.css";

export default function CalendarMain() {
    return (
        <>
            <div className={styles.calender_0}>
                <div className={styles.month_year}>March 2022</div>
                <div className={styles.day}>
                    <div className={styles.row}>
                        <li>SUN</li>
                        <li className={styles.op}>28</li>
                        <li>5</li>
                        <li>12</li>
                        <li>19</li>
                        <li>26</li>
                    </div>
                    <div className={styles.row}>
                        <li>MON</li>
                        <li className={styles.op}>29</li>
                        <li>6</li>
                        <li>13</li>
                        <li>20</li>
                        <li>27</li>
                    </div>
                    <div className={styles.row}>
                        <li>TUE</li>
                        <li className={styles.op}>30</li>
                        <li>7</li>
                        <li>14</li>
                        <li>21</li>
                        <li>28</li>
                    </div>
                    <div className={styles.row}>
                        <li>WED</li>
                        <li>1</li>
                        <li>8</li>
                        <li>15</li>
                        <li>22</li>
                        <li>29</li>
                    </div>
                    <div className={styles.row}>
                        <li>THU</li>
                        <li>2</li>
                        <li>9</li>
                        <li>16</li>
                        <li>23</li>
                        <li>30</li>
                    </div>
                    <div className={styles.row}>
                        <li>FRI</li>
                        <li>3</li>
                        <li>10</li>
                        <li>17</li>
                        <li className={styles.today}>24</li>
                        <li>31</li>
                    </div>
                    <div className={styles.row}>
                        <li>SAT</li>
                        <li>4</li>
                        <li>11</li>
                        <li>18</li>
                        <li>25</li>
                        <li className={styles.op}>1</li>
                    </div>
                </div>
            </div>
        </>
    );
}
