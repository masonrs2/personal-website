const Navbar = () => {
    return (
        <section id="home" className="navbar-container"> 
            <div className="navbar-content">
                <span className="navbar-title">Mason Sepulveda</span>
            
                    <ul className="navbar-list">
                        <li className="nav-list-items">
                            <a href="#home">Home</a></li>
                        <li className="nav-list-items">
                            <a href="#about">About</a>
                        </li>
                        <li className="nav-list-items">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="nav-list-items">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
            </div>

            <hr/>

        </section>
    )
}

export default Navbar