import OneProduct from "@/src/Components/OneProject/OneProject";

const MyProject = () => {
    const myProjects = [
        {
            title: 'Betting Site',
            skills: 'Rust / Anchor, MERN',
            images: [
                {url: '/images/my_projects/luckychip/homepage.jpg', description: 'Home Page'},
                {url: '/images/my_projects/luckychip/luckydice.jpg', description: 'Lucky Dice'},
                {url: '/images/my_projects/luckychip/luckyflip.jpg', description: 'Lucky Flip'},
                {url: '/images/my_projects/luckychip/luckylotter.jpg', description: 'Lucky Lotter'},
            ],
            description: "Betting Site integrated with token on Solana Blockchain",
            url: "https://luckychip.io/"
        },
        {
            title: 'Crypto Water',
            skills: 'Rust / Anchor, NextJs',
            images: [
                {url: '/images/my_projects/cryptowater/home.jpg', description: 'Home Page'},
                {url: '/images/my_projects/cryptowater/products.jpg', description: 'Product List'},
                {url: '/images/my_projects/cryptowater/market.jpg', description: 'Market'},
                {url: '/images/my_projects/cryptowater/product_detail.jpg', description: 'Product Detail'},
                {url: '/images/my_projects/cryptowater/games.jpg', description: 'Games'},
                {url: '/images/my_projects/cryptowater/game.jpg', description: 'Game Launch'},
            ],
            description: "E-Commerce Site integrated with tokens on Solana Blockchain",
            url: "https://cryptowater.com"
        },
        {
            title: 'E-Commerce Site',
            skills: 'Laravel',
            images: [
                {url: '/images/my_projects/paiaki/homepage.jpg', description: 'Home Page'},
                {url: '/images/my_projects/paiaki/product_detail.jpg', description: 'Product Detail'},
                {url: '/images/my_projects/paiaki/signup.jpg', description: 'Sign Up'},
                {url: '/images/my_projects/paiaki/blogs.jpg', description: 'Blogs'},
                {url: '/images/my_projects/paiaki/career.jpg', description: 'Careers'},
            ],
            description: "Paiaki is the largest modern online classified ads site in Angola.",
            url: "https://paiaki.com/"
        },
        {
            title: 'Sports Betting',
            skills: 'C# / Vue',
            images: [
                {url: '/images/my_projects/sports betting/homepage.jpg', description: 'Home Page'},
                {url: '/images/my_projects/sports betting/sports.jpg', description: 'Home Page'},
                {url: '/images/my_projects/sports betting/match_detail.jpg', description: 'Home Page'},
                {url: '/images/my_projects/sports betting/match_betting.jpg', description: 'Home Page'},
                {url: '/images/my_projects/sports betting/user_profile.jpg', description: 'User Profile'},
            ],
            description: "Sports Betting site",
            url: "https://sportbook.com"
        },
        {
            title: '青少年心理成长家校互动数智化平台',
            skills: 'vue',
            images: [
                {url: '/images/my_projects/school_statistics/homepage.png', description: 'Home Page'},
            ],
            description: "Student statistics are presented in a chart format.",
        },
        {
            title: 'AstroTalk',
            skills: 'MERN',
            images: [
                {url: '/images/my_projects/astrotalk/homepage.jpg', description: 'Home Page'},
                {url: '/images/my_projects/astrotalk/advisor_detail.jpg', description: 'Advisor Detail'},
                {url: '/images/my_projects/astrotalk/chatroom.jpg', description: 'Chat Room'},
            ],
            description: "Clients can have a chat with advisors based on websocket.",
        },
        {
            title: 'Icands',
            skills: 'WordPress',
            images: [
                {url: '/images/my_projects/icands/main.jpg', description: 'Home Page'},
                {url: '/images/my_projects/icands/av_control.jpg', description: 'AV Control System'},
                {url: '/images/my_projects/icands/audio_solution.jpg', description: 'Audio Solution'},
                {url: '/images/my_projects/icands/video_solution.jpg', description: 'Video Solution'},
                {url: '/images/my_projects/icands/security_solution.jpg', description: 'Security Solution'},
            ],
            description: "Introduction Site of Industrial Communication & Sound Company.",
            url: "https://icands.com"
        },
    ];

    return (
        <section className="w-full my-projects">
            <div className="m-auto lg:max-w-7xl">
                <h1 className="text-center w-full">My Projects</h1>
                <div className="grid grid-cols-4 gap-8 mt-4">
                    { myProjects.map((project: any, index) => (
                        <OneProduct 
                            {...project}
                            key={index} />
                    )) }                    
                </div>
            </div>
        </section>
    )
}

export default MyProject;