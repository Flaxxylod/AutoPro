import "./button.css"

const Button = ({children, color, size}) => {
    color == null?  color = "transparent" : color
    size == null? size = "small" : size
    return (
        <button className={"button-"+color+"-"+ size}>{children}</button>
        
    );
}

export default Button;