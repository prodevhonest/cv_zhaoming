'use client';

import "./GradientButton.scss";

export default function GradientButton(props: any) {
    return (<>
    <button 
        className={`btn wm-gradient-btn ${props.className}`} 
        style={{...(props.style ?? {})}}
        onClick={props.onClick}
    >
        { props.children }
    </button>
    </>)
}