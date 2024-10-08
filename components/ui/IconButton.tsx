import React from "react";

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean
}

export const IconButton: React.FC<IIconButton> = ({
  children,
  isLoading,
  ...rest
}) => {
  return (
    <button
      className="p-2 rounded text-sm hover:bg-gray-200 transition-all flex items-center gap-2 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      {...rest}
    >
      {children}
    </button>
  )
}
