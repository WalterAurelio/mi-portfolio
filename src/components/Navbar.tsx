function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#">aurelio gareca</a>
      <ul className="list">
        <li>
          <a className="list__anchor" href="#">sobre mí</a>
        </li>
        <li>
          <a className="list__anchor" href="#">tech stack</a>
        </li>
        <li>
          <a className="list__anchor" href="#">proyectos</a>
        </li>
        <li>
          <a className="list__anchor" href="#">contacto</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar