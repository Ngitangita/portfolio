import style from './header.module.css'

export function Header() {
    return(
        <div className={style.header}>
            <div className={style.navbar}>
                <h4>Portfo<span>lio</span></h4> 
                <ul>
                    <li>Home  </li>
                    <li> About Us </li>
                    <li> Services </li>
                    <li> Skills </li>
                    <li>Contact Us </li>
                </ul>
                <button className={style.butt}>Subscribe</button>
            </div>
            <div id='Headers'>
                <p className={style.p1}>Hello, my name is</p>
                <h1>Tahmid <span>Ahmed</span></h1>
                <p className={style.p2}>I'am a Web Developer.</p>
                <label>
                    <input type="email" placeholder='Enter Your Email'/>
                    <button className={style.button}>Lets Start</button>
                </label>
            </div>
        </div>
    )
}