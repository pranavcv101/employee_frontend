import "./BigButton.css";

const BigButton = ({
  text,
  onClick,
  variant,
  type = "button",
  className,
  icon
}: {
  text?: string;
  onClick?: () => void;
  type?: any;
  variant?:string;
  className?: string;
  icon?:string
}) => {
  return (
        <button
        className={`button  button--${variant} ${className}`}
        onClick={onClick} type ={type}
        >
        <div className="button-icon-bk">
        <img src={icon} />
        </div>
        <div className="button-text-bk">
        {text}
        </div>
        </button>
  );
};

export default BigButton;
