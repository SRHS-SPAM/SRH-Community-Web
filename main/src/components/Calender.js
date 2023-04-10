export default function Calender() {
    return (
        <>
            <div className="calender">
                <div className="month_year">March 2022</div>
                <div className="day">
                    <div className="row">
                        <li>SUN</li>
                        <li className="op">28</li>
                        <li>5</li>
                        <li>12</li>
                        <li>19</li>
                        <li>26</li>
                    </div>
                    <div className="row">
                        <li>MON</li>
                        <li className="op">29</li>
                        <li>6</li>
                        <li>13</li>
                        <li>20</li>
                        <li>27</li>
                    </div>
                    <div className="row">
                        <li>TUE</li>
                        <li className="op">30</li>
                        <li>7</li>
                        <li>14</li>
                        <li>21</li>
                        <li>28</li>
                    </div>
                    <div className="row">
                        <li>WED</li>
                        <li>1</li>
                        <li>8</li>
                        <li>15</li>
                        <li>22</li>
                        <li>29</li>
                    </div>
                    <div className="row">
                        <li>THU</li>
                        <li>2</li>
                        <li>9</li>
                        <li>16</li>
                        <li>23</li>
                        <li>30</li>
                    </div>
                    <div className="row">
                        <li>FRI</li>
                        <li>3</li>
                        <li>10</li>
                        <li>17</li>
                        <li className="today">24</li>
                        <li>31</li>
                    </div>
                    <div className="row">
                        <li>SAT</li>
                        <li>4</li>
                        <li>11</li>
                        <li>18</li>
                        <li>25</li>
                        <li className="op">1</li>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .calender {
                    background-color: black;
                    margin: 45px 45px 45px 20px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .month_year {
                    color: white;
                    font-size: 14px;
                    margin-top: 20px;
                    font-weight: 200;
                }

                .day {
                    width: 250px;
                    margin-top: 10px;
                    height: 200px;
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                }

                .row {
                    display: grid;
                    grid-template-rows: repeat(6, 1fr);
                    list-style: none;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 10px;
                }

                .row li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                .op {
                    opacity: 0.4;
                }

                .row li:first-child {
                    font-weight: 700;
                }

                .today {
                    background-color: #286246;
                    padding: 10px;
                    border-radius: 20px;
                    border: 1px solid #03190f;
                }
            `}</style>
        </>
    );
}
