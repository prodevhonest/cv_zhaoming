'use client';

import ProgressBar from "@ramonak/react-progress-bar";

const MySkill = () => {
    return (
        <section className="my-skill w-100">
            <div className="m-auto lg:max-w-7xl">
                <h1 className="text-center w-full">My Skills</h1>
                <div className="grid grid-cols-2 gap-12 my-4">
                    <div>
                        <h5 className="mb-2 fw-bold">Rust/Anchor (Solana)</h5>
                        <ProgressBar completed={90} bgColor="#00bdbd" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">Solidity (Ethereum)</h5>
                        <ProgressBar completed={85} bgColor="#00bdbd" />
                    </div>

                    <div>
                        <h5 className="mb-2 fw-bold">NodeJs/Express/NestJs</h5>
                        <ProgressBar completed={92} bgColor="linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">React/NextJs</h5>
                        <ProgressBar completed={95} bgColor="linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">Laravel</h5>
                        <ProgressBar completed={85} bgColor="linear-gradient(to right, #fc67fa, #f4c4f3)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">VueJs</h5>
                        <ProgressBar completed={95} bgColor="linear-gradient(to right, #fc67fa, #f4c4f3)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">Asp.Net(C#)</h5>
                        <ProgressBar completed={60} bgColor="linear-gradient(to right, #F9D423, #FF4E50)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">Angular</h5>
                        <ProgressBar completed={65} bgColor="linear-gradient(to right, #F9D423, #FF4E50)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">TypeScript</h5>
                        <ProgressBar completed={85} bgColor="linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)" />
                    </div>
                    <div>
                        <h5 className="mb-2 fw-bold">TailWnd</h5>
                        <ProgressBar completed={95} bgColor="linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkill;