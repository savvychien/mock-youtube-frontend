import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean
}

export const Button: React.FC<IButton> = ({
  children,
  startContent,
  endContent,
  isLoading,
  ...rest
}) => {
  return (
    <button
      className="px-4 py-2 rounded text-sm hover:bg-gray-200 transition-all flex items-center gap-2 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      {...rest}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  )
}
