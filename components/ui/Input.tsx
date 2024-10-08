import { InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<IInput> = (props) => {
  return <input className="border py-1 px-2 rounded-md w-full" {...props} />
}
