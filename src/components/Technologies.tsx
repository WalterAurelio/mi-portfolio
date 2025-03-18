import Tech from "./Tech";

type TechnologiesProps = {
  techs: string[];
  small?: boolean;
};

function Technologies({ techs, small }: TechnologiesProps) {
  return (
    <div className='technologies'>
      {
        techs.map((tech, index) =>
          <Tech key={index} small={small}>{tech}</Tech>
        )
      }
    </div>
  )
}
export default Technologies