import { PropsWithChildren } from "react"

function SectionSubtitle({ children }: PropsWithChildren) {
  return (
    <h3 className='sectionsubtitle'>
      {children}
    </h3>
  )
}
export default SectionSubtitle