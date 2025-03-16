type PointerProps = {
  icon: string;
  variant?: 'md' | 'sm';
};

function Pointer({ icon, variant }: PointerProps) {
  const variantClass = variant && `pointer--${variant}`;

  return (
    <div className={`pointer ${variantClass}`}>
      <img className='pointer__icon' src={icon} alt='icon' />
    </div>
  )
}
export default Pointer