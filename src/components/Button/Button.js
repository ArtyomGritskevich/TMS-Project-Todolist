import "./ButtonStyle.css";
import cn from "classnames";

const Button = ({ children, outlook, size, type, onClick }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={cn("button", outlook, size)}>{children}</button>
    );
};

export default Button;