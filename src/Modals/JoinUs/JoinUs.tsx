'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import "./JoinUs.scss"
import Image from 'next/image';
import TextInput1 from '@/src/Components/TextInput1/TextInput1';
import GradientButton from '@/src/Components/GradientButton/GradientButton';

export default function JoinUs(props: any) {
    const {open, setOpen} = props;

    const handleClose = () => {
        setOpen(false);
    }

    return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 connect-us-modal">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 m-2"
              style={{maxWidth: 1024}}
            >
              <div className="modal-body px-8 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center">
                <button className='close-btn'>
                    <Image src="/images/icons/svg/close.svg" width={15} height={15} onClick={handleClose} alt="Close" />
                </button>

                <h1 className='purple-gradient-text mt-8 font-begex text-center'>JOIN OUR EXCLUSIVE COMMUNITY</h1>

                <p className='comment-gray mt-8 text-center w-full md:w-3/4'>
                    JOIN OUR MAILING LIST TO STAY IN THE LOOP WITH OUR NEWEST FEATURE RELEASES, PROMOS, NFT DROPS AND TIPS AND TRICK ON HOW TO NAVIGATE WORLD OF MALLS! 
                </p>

                <div className='flex justify-center items-center mt-8'>
                    <TextInput1 placeholder="Email" style={{width: 400, maxWidth: 'calc(100% - 200px)'}} />
                    <GradientButton className="ms-2">SIGN UP</GradientButton>
                </div>

                <div className='flex justify-center items-center mt-8'>
                    <Image src="/images/icons/svg/telegram.svg" className="me-8" width={60} height={60} alt="Telegram" />
                    <Image src="/images/icons/svg/twitter.svg" className="me-8" width={60} height={60} alt="Twitter" />
                    <Image src="/images/icons/svg/discord.svg" width={60} height={60} alt="Discord" />
                </div>

                <p className='text-center my-8 text-lightgray'>STAY IN THE LOOP!</p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
}