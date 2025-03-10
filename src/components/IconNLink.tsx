type IconNLinkProps = {
  icon: string;
  text: string;
}

function IconNLink({ icon, text }: IconNLinkProps) {
  return (
    <div className="iconlink-container">
      <div className="icon-container">
        <img src={icon} alt={`${text.toLowerCase()}-icon`} />
      </div>
      <a href="#" className="icon-text">{text}</a>
    </div>
  )
}
export default IconNLink