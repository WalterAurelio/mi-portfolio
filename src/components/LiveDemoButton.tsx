import chevron_icon from '../assets/icons/chevron_icon.svg';

type LiveDemoButtonProps = {
  demoURL: string;
}

function LiveDemoButton({ demoURL }: LiveDemoButtonProps) {
  return (
    <a href={demoURL} target='_blank' className='livedemobutton'>
      <img className='livedemobutton__icon' src={chevron_icon} alt="chevron-icon" />
    </a>
  )
}
export default LiveDemoButton