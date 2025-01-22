'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import "./ProjectDetail.scss"
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { text2html } from "@/src/Utils/utils.js";

export default function ProjectDetail(props: any) {
    const {open, setOpen, title, skills, description, images, url} = props;

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10 modal project-detail">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 m-2"
                        style={{maxWidth: 800}}
                    >
                        <div className="modal-body px-8 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col items-center">
                            <button className='close-btn'>
                                <Image src="/images/icons/svg/close.svg" width={15} height={15} onClick={handleClose} alt="Close" />
                            </button>
                            
                            <h1 className='purple-gradient-text mt-8 font-begex text-center'>{title}</h1>

                            <div className='project-images mt-4'>
                                <Carousel showArrows={true} autoPlay={true}>
                                    { images.map((image: any, index: number) => (
                                        <div key={index}>
                                            <img src={image.url} />
                                            <p className="legend">{image.description}</p>
                                        </div>
                                    )) }
                                </Carousel>
                            </div>

                            {description && <div className='w-full project-description' dangerouslySetInnerHTML={{ __html: text2html(description)}} />}

                            {skills && <div className='skills w-full mt-2 px-2'>
                                <label style={{color: '#3c76ff'}}>Skills: </label>
                                <span className='ms-1'>{skills}</span>
                            </div>}

                            {url && <div className='w-full project-url mt-2 px-2'>
                                <label className='me-2' style={{color: '#3c76ff'}}>url:</label>
                                <a href={url} target='_blank'>{url}</a>
                            </div> }
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

