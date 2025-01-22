'use client';

import React, { useState } from 'react';
import "./OneProject.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const OneProject = (props: any) => {
    const {title, skills, images} = props;
    const [openDetail, setOpenDetail] = useState(false);

    const handleClick = () => {
        setOpenDetail(true);
    }

    return (<>
        <div className='one-project' onClick={handleClick}>
            <div className='text-center mb-2 fs-120 title'>{ `${title}` }</div>
            <img src={images[0].url} alt={title} className='main-image' />
            <div className='text-center my-2'>( {skills} )</div>
        </div>

        <ProjectDetail 
            open={openDetail} 
            setOpen={setOpenDetail} 
            {...props}
        />
    </>);
}

export default OneProject;