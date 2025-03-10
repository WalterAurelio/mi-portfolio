import gt_icon from '../assets/icons/gt-icon.svg';

function LiveDemoButton() {
  return (
    <button className='button'>
      <div className="icon-container">
        <img src={gt_icon} alt="gt-icon" />
      </div>
    </button>
  )
}
export default LiveDemoButton