type PointerProps = {
  className?: string;
  icon: string;
};

function Pointer({ className, icon }: PointerProps) {
  return (
    <div className={`pointer ${className}`}>
      <img className='pointer__icon' src={icon} alt='icon' />
    </div>
  )
}
export default Pointer