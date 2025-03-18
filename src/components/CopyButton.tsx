import copiar_icon from '../assets/icons/copiar_icon.svg';
import check_icon from '../assets/icons/check_icon.svg';
import { useState } from 'react';

type CopyButtonProps = {
  className?: string;
};

function CopyButton({ className }: CopyButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const isClickedClass = isClicked && 'isClicked';

  const handleClick = () => {
    setIsClicked(true);
    const email = 'aurelio.gareca.94@hotmail.com';
    navigator.clipboard.writeText(email);
    setTimeout(() => setIsClicked(false), 2400);
  };

  return (
    <button disabled={isClicked} onClick={handleClick} className={`copybutton ${isClickedClass} ${className}`}>
      <img className='copybutton__icon copybutton__icon--copy' src={copiar_icon} alt='copy-icon' />
      <img className='copybutton__icon copybutton__icon--check' src={check_icon} alt='check-icon' />
      <p className='copybutton__text'>Copiado</p>
    </button>
  )
}
export default CopyButton