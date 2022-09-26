const Header = () => {

    return (
        <div className="profile">
            <img src={"../img/image0.jpg"} className="profile-image" alt="Avatar" />
            
            <div className="profile-name-title-and-social"> 
                <h1 className="profile-name">Hi, I'm Mason Sepulveda</h1>
                <p className="profile-title">Full Stack Engineer & Blockchain Developer</p>
                <a href="mailto:masonsepulveda@gmail.com?subject = Feedback&body = Message"><button className="profile-button">Get in Touch</button></a>

                <div className="social-media">
                    <a href="https://github.com/masonrs2" target="_blank">
                        <img src={"../img/github-64px.png"}
                        href="" className="github-icon"/> 
                    </a>

                    <a href="https://twitter.com/mxsonrr" target="_blank">
                        <img src={"../img/twitter-icon.png"} className="twitter-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mason-sepulveda/" target="_blank">
                        <img src={"../img/linkedin-100px.png"} className="linkedin-icon" />
                    </a>

                    <a href="https://www.facebook.com/mason.sepulveda5/" target="_blank">
                        <img src={"../img/facebook-100px.png"} className="facebook-icon" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Header