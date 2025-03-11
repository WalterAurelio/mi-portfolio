import Tech from "./Tech";

type TechnologiesProps = {
  techArr: string[];
}

function Technologies({ techArr }: TechnologiesProps) {
  return (
    <div className="technologies">
      {
        techArr.map((tech, index) =>
          <Tech key={index} isSmall>{tech}</Tech>
        )
      }
    </div>
  )
}
export default Technologies