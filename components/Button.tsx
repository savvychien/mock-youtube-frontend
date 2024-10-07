import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  startContent,
  endContent,
  ...rest
}) => {
  return (
    <button
      className="px-4 py-2 rounded hover:bg-gray-200 transition-all flex items-center gap-2 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      {...rest}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  )
}
