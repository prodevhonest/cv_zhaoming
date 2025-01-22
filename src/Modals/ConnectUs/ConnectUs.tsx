'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import "./ConnectUs.scss"
import Image from 'next/image';


export default function ConnectUs(props: any) {
    const {open, setOpen} = props;

    const handleClose = () => {
        setOpen(false);
    }

    return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 connect-us-modal">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 m-2"
            >
              <div className="modal-body px-8 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center">
                <button className='close-btn'>
                    <Image src="/images/icons/svg/close.svg" width={15} height={15} onClick={handleClose} alt="Close" />
                </button>

                <Image src="/images/logos/logo.png" width={100} height={100} alt='World Malls' />
                <h1 className='purple-gradient-text mt-4 font-begex'>CONNECT US</h1>

                <div className='flex items-center mt-4 w-full'>
                    <div className='flex-1 left-bar'></div>
                    <div className='mx-2' style={{color: 'rgb(99,4,182)'}}>OR</div>
                    <div className='flex-1 right-bar'></div>
                </div>

                <ul className='mt-4 w-full'>
                    <li className='flex items-center'>
                        <Image src="/images/icons/png/purple_circle.png" width={35} height={35} alt='' />
                        <span className='ms-2'>COMPANY NAME</span>
                    </li>
                    <li className='flex items-center'>
                        <Image src="/images/icons/png/purple_circle.png" width={35} height={35} alt='' />
                        <span className='ms-2'>COMPANY NAME</span>
                    </li>
                    <li className='flex items-center'>
                        <Image src="/images/icons/png/purple_circle.png" width={35} height={35} alt='' />
                        <span className='ms-2'>COMPANY NAME</span>
                    </li>
                </ul>

                <div className='more-wallet-options mb-4'>MORE WALLET OPTIONS</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
}