interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  invertAlignment?: boolean;
  ref?: React.RefCallback<HTMLElement>;
}

function Section({ className, invertAlignment, children, ref, ...props }: SectionProps) {
  const alignmentClass = invertAlignment && 'invertAlignment';
  
  return (
    <section ref={ref} className={`sectioncomponent ${alignmentClass} ${className}`} {...props}>
      {children}
    </section>
  )
}
export default Section