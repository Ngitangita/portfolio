import style from './footer.module.css'

export function Footer() {
    return (
        <div className={style.Footer}>
            <h3> Tahmid Ahmed</h3>
            <p>
                For more HTML, CSS, and coding tutorial
                - please click on the link below to subscribe to my channel:
            </p>

            <div className={style.dots}>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
            </div>

            <span>CopyRight By Tahmid Ahmed</span>
        </div>
    )
}
