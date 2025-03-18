interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  invertAlignment?: boolean;
}

function Section({ className, invertAlignment, children, ...props }: SectionProps) {
  const alignmentClass = invertAlignment && 'invertAlignment';
  
  return (
    <section className={`sectioncomponent ${alignmentClass} ${className}`} {...props}>
      {children}
    </section>
  )
}
export default Section