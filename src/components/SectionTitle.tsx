type SectionTitleProps = {
  invert?: true;
  children: string;
}

function SectionTitle({ invert, children }: SectionTitleProps) {
  return (
    <h4 className={`title ${ invert && 'invert' }`}>{children}</h4>
  )
}
export default SectionTitle