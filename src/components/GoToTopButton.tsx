import ScrollIntoView from "react-scroll-into-view";
import Icon from "./Icon";
import chevron_icon from '../assets/icons/chevron_icon.svg';

type GoToTopButtonProps = {
  className?: string;
  ref?: React.RefCallback<HTMLElement>;
};

function GoToTopButton({ className, ref }: GoToTopButtonProps) {
  return (
    <ScrollIntoView selector='#topbody' scrollOptions={{ block: 'start' }} className={className} >
      <button ref={ref} type='button' className='gototop'>
        <Icon icon={chevron_icon} />
      </button>
    </ScrollIntoView>
  )
}
export default GoToTopButton