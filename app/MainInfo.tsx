import Image from "next/image";

const MainInfo = () => {

    const my_contacts = [
        { label: 'D.O.B', value: '18-11-1994'},
        { label: 'ADDRESS', value: 'No. 88, Tingchao South Road, Huinan Town, Pudong New Area, Shanghai'},
        { label: 'E-MAIL', value: 'zhaomingdev@outlook.com'},
        { label: 'SKYPE', value: 'live:.cid.d37a1b4ceb1093df'},
        { label: 'TELEGRAM', value: '@dancingball'},
    ]

    return (
    <div className="main-info w-full">
        <div className="main-info-2 w-full h-full">
            <div className="m-auto lg:max-w-7xl flex">
                <div className="name-avatar flex flex-col">
                    <Image src='/images/avatar/myavatar.jpg' width={200} height={200}  alt='' />
                    <div className="mt-4 name">Zhao Ming</div>
                    <div className="mt-4 basic-skill">Seasoned Blockchain Programmer</div>
                </div>

                <div className="flex-1" style={{marginLeft:100}}>
                    <div className="career-goal">
                        <h2 className="font-yanoneKaff">Career Goal</h2>
                        <p className="fs-110" style={{color: '#eee'}}>
                            Your values are unique to you and essentially serve as your moral compass. 
                            Values are anything that’s important to you: loyalty, honesty, authenticity, relationships. 
                            If you align your goals with your values, they can be great motivators as you build the life you want to live.
                        </p>
                    </div>

                    <ul className="my-contacts">
                        {my_contacts.map((contact: any, index: number) => (
                            <li className="p-1" key={index}>
                                <ul className="one-contact">
                                    <li className="label">{ contact.label }</li>
                                    <li className="value">{ contact.value }</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainInfo;