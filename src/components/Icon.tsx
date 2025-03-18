type IconProps = {
  icon: string;
};

function Icon({ icon }: IconProps) {
  return (
    <img className='iconcomponent' src={icon} alt='icon' />
  )
}
export default Icon