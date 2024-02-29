import './header.css'

export function Header() {
    return(
        <div className="header">
            <div className='header_div'>
                <p className='p1'>Hello, my name is</p>
                <h1>Tahmid <span>Ahmed</span></h1>
                <p className='p2'>I'am a Web Developer.</p>
                <label>
                    <input type="email" placeholder='Enter Your Email'/>
                    <button className='button'>Lets Start</button>
                </label>
            </div>
        </div>
    )
}