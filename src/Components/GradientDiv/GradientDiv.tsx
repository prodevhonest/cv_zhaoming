'use client';

import "./GradientDiv.scss"

const GradientDiv = (props: any) => {
    return <div className={`gradient-div ${props.className}`}>
        {props.children}
    </div>
}

export default GradientDiv;