import style from "./services.module.css"

export function Services() {
    return (
        <div className={style.service}>
            <h1>Our Services</h1>
            <div className={style.Services}>
                <div className={style.Service}>
                    <h2>Web Development</h2>

                    <p>
                    Every website should be built with two primary goals:
                    Firstly, it needs to work across all devices. Secondly,
                    it needs to be fast as possible.
                    </p>

                   <button className={style.button}> Read More</button>

                </div>
                <div className={style.Service}>
                    <h2>Web Development</h2>

                    <p>
                    Every website should be built with two primary goals:
                    Firstly, it needs to work across all devices. Secondly,
                    it needs to be fast as possible.
                    </p>

                   <button className={style.button}> Read More</button>

                </div>
                <div className={style.Service}>
                    <h2>Web Development</h2>

                    <p>
                    Every website should be built with two primary goals:
                    Firstly, it needs to work across all devices. Secondly,
                    it needs to be fast as possible.
                    </p>

                   <button className={style.button}> Read More</button>

                </div>
            </div>
        </div>
    )
}

