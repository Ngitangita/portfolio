
import style from './about.module.css'
export function Aboute() {
  return (
    <div className={style.Aboute}>
      <div className={style.img}>
      </div>

      <div className={style.abouteMe}>
        <h1>About Me</h1>
        <h2>Developer <span>& Designer</span></h2>
        <p>
          I am a front-end web developer. I can provide clean code and pixel perfect design. 
          I also make the website more & more interactive with web animations.I can provide clean code and 
          pixel perfect design. I also make the website more & more interactive with web animations.
          A responsive design makes your website accessible to all users, regardless of their device.
        </p>
        <button className={style.button}>Let's Talk</button>
      </div>
    </div>
  )
}
