import "./GradientBorder.scss";

export default function GradientBorder (props: any) {
    return (
        <div className={`gradient-border p-4 ${props.background_type ?? 'default'} ${props.className ?? ''}`} 
            style={props.style}
        >
            {props.children}
        </div>
    )
}