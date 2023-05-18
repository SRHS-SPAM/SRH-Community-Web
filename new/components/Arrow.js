import Link from "next/link";

export default function Arrow({ location }) {
    return (
        <>
            <Link href={location}>
                <div className="arrow">
                    <div className="one" />
                    <div className="two" />
                    <div className="three" />
                </div>
            </Link>
            <style jsx>{`
                .arrow {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    top: 4px;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    scale: 0.8;
                    cursor: pointer;
                    z-index: 100;
                }

                .one {
                    position: absolute;
                    width: 40px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #286246;
                    rotate: -45deg;
                    top: 34px;
                    left: 0;
                }

                .two {
                    position: absolute;
                    width: 74px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #286246;
                }

                .three {
                    position: absolute;
                    width: 40px;
                    height: 10px;
                    border-radius: 5px;
                    background-color: #286246;
                    rotate: 45deg;
                    bottom: 34px;
                    left: 0;
                }
            `}</style>
        </>
    );
}
