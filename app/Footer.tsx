import Image from "next/image";

const Footer = () => {
    const contacts = [
        {
            icon: 'maps-pin-black-icon.svg',
            label: 'Location',
            value: 'No. 88, Tingchao South Road, Huinan Town, Pudong New Area, Shanghai'
        },
        {
            icon: 'envelope-icon.svg',
            label: 'Email',
            value: 'zhaomingdev@outlook.com'
        },
        {
            icon: 'skype-color-icon.svg',
            label: 'Skype',
            value: 'live:.cid.d37a1b4ceb1093df'
        },
        {
            icon: 'telegram-icon.svg',
            label: 'Telegram',
            value: '@dancingball'
        },
    ];

    const renderContacts = () => {
        return (<div className="my-contacts flex py-8">
            {contacts.map((contact: any, index: number) => (
                <div className="one-contact flex-1 flex flex-col justify-center items-center" key={index}>
                    <div className="contact-icon flex justify-center items-center">
                        <Image 
                            src={`/images/icons/svg/${contact.icon}`} 
                            width={20} 
                            height={20} 
                            alt='' 
                        />
                    </div>
                    <div className="mt-1"><label>{ contact.label }</label></div>
                    <div className="value">{ contact.value }</div>
                </div>
            ))}
        </div>)
    }

    return <div className="footer w-full">
        <div className="w-full lg:max-w-7xl m-auto">
            { renderContacts() }
        </div>
    </div>
}

export default Footer;