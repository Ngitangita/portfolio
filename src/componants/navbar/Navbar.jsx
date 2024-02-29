import './navbar.css'
export function Navbar() {
    

    return(
        <nav>
            <div className="navbar">
                <h4>Portfo<span>lio</span></h4> 
                <ul>
                    <li>Home  </li>
                    <li> About Us </li>
                    <li> Services </li>
                    <li> Skills </li>
                    <li>Contact Us </li>
                </ul>
                <button className='butt'>Subscribe</button>
            </div>
        </nav>
    )
}