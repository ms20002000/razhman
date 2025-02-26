import type React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-lg text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

