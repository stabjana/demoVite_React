const Button = ({ onClick, type = "button", text, variant = "primary" }) => {
    return (
        <button className={`btn ${variant}`} type={type} onClick={onClick}>
            {text}
        </button>
    );
}; // button has specifications 

export default Button;
