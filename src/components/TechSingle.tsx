type TechSingleProps = {
  children: string;
}

function TechSingle({ children }: TechSingleProps) {
  return (
    <div className="tech-container">
      <p className="tech-text">
        {children}
      </p>
    </div>
  )
}
export default TechSingle