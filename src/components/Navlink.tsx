function Navlink({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`navlink ${className}`} {...props}>
      {children}
    </p>
  )
}
export default Navlink