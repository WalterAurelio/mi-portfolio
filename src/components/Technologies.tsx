import Tech from "./Tech";

type TechnologiesProps = {
  techs: string[];
};

function Technologies({ techs }: TechnologiesProps) {
  return (
    <div className='technologies'>
      {
        techs.map((tech, index) =>
          <Tech key={index}>{tech}</Tech>
        )
      }
    </div>
  )
}
export default Technologies