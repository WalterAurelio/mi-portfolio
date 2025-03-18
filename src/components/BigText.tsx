import { PropsWithChildren } from "react"

function BigText({ children }: PropsWithChildren) {
  return (
    <h1 className='bigtext'>
      {children}
    </h1>
  )
}
export default BigText