import GradientDiv from "@/src/Components/GradientDiv/GradientDiv"
import { FaUsers } from "react-icons/fa"
import { FaDev } from "react-icons/fa6"
import { FcWebcam } from "react-icons/fc"

const renderExp = () => {
    return (
        <div className="w-1/2 experience me-8">
            <h1>Experience</h1>
            <div className="flex mt-8">
                <div className="w-2/5">
                    <h4>2022.08 ~ </h4>
                    <h4 className="text-amber">Senior Blockchain Developer</h4>
                </div>
                <div className="w-3/5">
                    <h4>DEYA TECH</h4>
                    <div className="my-3 flex">
                        <FaUsers size={30} color="var(--amber)" />
                        <GradientDiv className="ms-4">Programmer</GradientDiv>
                    </div>
                    <ul className="text-gray" style={{listStyle: 'unset'}}>
                        <li>
                            Led the launch of a new token on Solana, achieving over $500,000 in liquidity within the first month, implemented various DeFi protocols such as liquidity pools and automated market makers, and integrated it with the betting site.
                        </li>
                        <li>
                        	Led the launch of a new token on Solana blockchain, integrated it with E-Commerce / Game site, resulting in enhanced revenue by 28%.
                        </li>                        
                    </ul>
                </div>
            </div>

            <div className="flex mt-8">
                <div className="w-2/5">
                    <h4>2019.11 ~ 2022.05</h4>
                    <h4 className="text-amber">Junior Blockchain Programmer</h4>
                </div>
                <div className="w-3/5">
                    <h4>Dare Technology Co., Ltd</h4>
                    <div className="my-3 flex">
                        <FcWebcam size={30} color="var(--amber)" />
                        <GradientDiv className="ms-4">Programmer</GradientDiv>
                    </div>
                    <ul className="text-gray" style={{listStyle: 'unset'}}>
                        <li>Led the development of multiple smart contracts on Ethereum(Solidity) & Solana(Rust/Anchor) blockchain.</li>
                        <li>Led and maintain the development of the E-Commerce site using Laravel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const renderEducation = () => {
    return (
        <div className="w-1/2 education ms-8">
            <h1>Education</h1>
            <div className="flex mt-8">
                <div className="w-1/3">
                    <h4>2012.09 ~ 2019.07</h4>
                </div>
                <div className="w-2/3">
                    <h4>TsingHua University</h4>
                    <div className="my-3 text-amber">
                        Department of Computer Science and Information Engineering
                    </div>
                    <ul>
                        <li className="py-2 text-gray">2016.09 ~ 2019.07  MASTER OF COMPUTER SCIENCE</li>
                        <li className="py-2 text-gray">2012.09 ~ 2016.07  BACHELOR OF COMPUTER SCIENCE.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const ExpEducation = () => {
    return (
    <section className="exp-education">
        <div className="m-auto lg:max-w-7xl flex">
            { renderExp() }
            { renderEducation() }
        </div>
    </section>
    )
}

export default ExpEducation;