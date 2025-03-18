import email_img from '../assets/imgs/original/email_img.png';

function Email() {
  return (
    <div className={`email`}>
      <img className='email__img' src={email_img} alt="mi-email" />
    </div>
  )
}
export default Email