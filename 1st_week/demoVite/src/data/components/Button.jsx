const Button = ({ text, click, type = "button" }) => { // default props
    return <button type={type} onClick={click}>
        {text}</button>; // if not said specific it should be button
};

export default Button;