interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ children, ...rest }) => {
  return (
    <div 
      className="relative p-4 rounded-lg border hover:shadow-lg transition-shadow" 
      {...rest}
    >
      {children}
    </div>
  )
}
