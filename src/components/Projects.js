const Projects = () => {
    return (
        <section id="projects" className="projects-container">
            <h2 className="projects-h2">My Projects</h2>

            <div className="project-cards">

                <div className="project-card">
                    <span className="card-title"> Decentralized Lottery </span>
                    <img src={"../img/defi-lottery.jpeg"} className="card-image" />
                    <p className="card-description">
                    Fullstack decentralized lottery application where users deposit a specified entrance fee (based in Ethereum) and once a particular time interval has passed, VRFCoordinator is immediately called and fetches a verifiably random number which we then use to choose a winner from all the entrants participating in the raffle (lottery). The winner is then transferred all the funds from the pool of entrants and the lottery is finally reset.
                    </p>

                    <a href="https://late-sunset-9799.on.fleek.co/" ><button className="card-site-button">Site</button></a>
                    <a href="https://github.com/masonrs2/frontend-raffle-dApp" target="_blank"><button className="card-code-button">Code</button></a>
                </div>

                <div className="project-card">
                    <span className="card-title"> Random Meme Generator</span>
                    <img src={"../img/meme-generator.jpeg"} className="card-image" />
                    <p className="card-description">
                    Built a dynamic web application that generates random memes along with text that a user is able to place on both the top and bottom of the meme image. The website generates the memes through an API call where the data of all the meme images are stored and then displayed to the user whenever called (generated).

                    </p>

                    <a href="https://divine-cake-2903.on.fleek.co/" target="_blank"><button  className="card-site-button">Site</button></a>

                    <a href="https://github.com/masonrs2/random-meme-generator" target="_blank"><button className="card-code-button">Code</button></a>
                </div>

                <div className="project-card">
                    <span className="card-title"> AAVE Flash Loan</span>
                    <img src={"../img/aave-flashloan.png"} className="card-image" />
                    <p className="card-description">
                        <span className="flashloan-description">
                        A Flash Loan which allows a borrower to borrow any available amount of assets without putting up any collateral, as long as the liquidity is returned to the protocol within one block transaction. (The purpose of the loan is to benefit through arbitraging exchange prices with a leveraged balance to increase profits, especially useful for individuals with low amounts of capital and unable to participate in the financial markets without the loan).
                    </span>
                    </p>

                    <button className="card-site-button">Site</button>
                    <a href="https://github.com/masonrs2/flashloan-hh" target="_blank"><button className="card-code-button">Code</button></a>
                </div>
                
            </div>

        </section>
    )
}

export default Projects