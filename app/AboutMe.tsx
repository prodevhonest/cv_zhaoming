import Image from "next/image";

const AboutMe = () => {
    return (
    <section className="about-me m-auto lg:max-w-7xl">
        <h1 className="text-center">About Me</h1>
        <div className="flex align-items-center mt-4">
            <Image src='/images/others/ab1.jpg' width={500} height={300} alt="" />
            <div className="me-description">
                <div>
                    <h4 className="text-amber">Who am I</h4>
                    <ul className="mt-4 ps-4" style={{listStyle: "unset"}}>
                        <li className="mb-1">Highly skilled and innovative software developer with a focus on Blockchain and expertise in Web3 development.</li>
                        <li className="mb-1">Proficient in Solana(Rust & Anchor), Ethereum(Solidity) and a wide range of web development technologies including python/javascript based web development frameworks.</li>
                        <li className="mb-1">Seeking a challenging role where I can leverage my programming skills to develop cutting-edge Blockchain solutions and contribute to dynamic projects.</li>
                    </ul>
                </div>

                <div style={{marginTop: 30}}>
                    <h4 className="text-amber">My Past Works</h4>
                    <div className="my-past-works">
                        <div>
                            <h4 className="text-amber">8</h4>
                            <div className="text-lightblue">Web3</div>
                        </div>
                        <div>
                            <h4 className="text-amber">3</h4>
                            <div className="text-lightblue">Solana</div>
                        </div>
                        <div>
                            <h4 className="text-amber">1</h4>
                            <div className="text-lightblue">Ethereum</div>
                        </div>
                        <div>
                            <h4 className="text-amber">2</h4>
                            <div className="text-lightblue">Laravel</div>
                        </div>
                        <div>
                            <h4 className="text-amber">2</h4>
                            <div className="text-lightblue">Others</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutMe;