import "./button.css"

const Button = ({children, color, size, Style}) => {
    color == null?  color = "transparent" : color
    size == null? size = "small" : size
    return (
        <button style={Style} className={"button-"+color+"-"+ size}>{children}</button>
        
    );
}

export default Button;