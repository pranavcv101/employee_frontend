import "./Button.css";

const Button = ({
  text,
  onClick,
  variant,
  type = "button",
  className,
  icon,
  disabled
}: {
  text?: string;
  onClick?: () => void;
  type?: any;
  variant?:string;
  className?: string;
  icon?:string;
  disabled?:boolean;
}) => {
  return (
        <button
        className={`button  button--${variant} ${className}`}
        onClick={onClick} type ={type}
        disabled={disabled}
        >
        {text}
        </button>
  );
};

export default Button;
