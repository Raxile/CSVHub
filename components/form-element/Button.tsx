import React, { ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  // any props that come into the component
}

const Button = ({ children, className, disabled = false }: Props) => (
  <button
    className={`  flex justify-center items-center gap-1 active:opacity-95 hover:opacity-85 disabled:bg-[var(--disabled)] drop-shadow-md active:drop-shadow-sm   disabled:pointer-events-none ${className}  font-bold py-2 px-4 rounded`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
