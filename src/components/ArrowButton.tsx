import arrow_icon from '../assets/icons/right-arrow-icon.svg';

function ArrowButton() {
  return (
    <div className='arrowbutton'>
      <img className='arrowbutton__icon' src={arrow_icon} alt="arrow_icon" />
    </div>
  )
}
export default ArrowButton