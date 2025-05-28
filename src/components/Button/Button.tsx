import './Button.css'

const Button = ({text,onClick,variant = "primary" , type , className}: {text?:string , onClick?:()=>void,variant?:string ,type?:any , className?:string}) => {
    return <button className={`button  button--${variant} ${className}`} onClick={onClick}>{text}</button>
}

export default Button;


// import React from 'react';
// import './Button.css';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ 
//   variant = 'primary', 
//   children, 
//   className = '',
//   ...props 
// }) => {
//   return (
//     <button 
//       className={`button button--${variant} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button; 