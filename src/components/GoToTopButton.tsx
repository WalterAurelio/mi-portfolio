import ScrollIntoView from "react-scroll-into-view";
import Icon from "./Icon";
import chevron_icon from '../assets/icons/chevron_icon.svg';

type GoToTopButtonProps = {
  className?: string;
};

function GoToTopButton({ className }: GoToTopButtonProps) {
  return (
    <ScrollIntoView selector='#navbar' scrollOptions={{ block: 'center' }} className={className} >
      <button type='button' className='gototop'>
        <Icon icon={chevron_icon} />
      </button>
    </ScrollIntoView>
  )
}
export default GoToTopButton