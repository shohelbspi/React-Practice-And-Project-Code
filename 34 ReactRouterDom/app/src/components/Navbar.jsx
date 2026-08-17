import { Link, NavLink, useNavigate } from "react-router-dom"
function Navbar() {

  const navigate = useNavigate()

  const isLoggedIn = true

  function handleClick(){
    if(isLoggedIn){
      navigate('/about')
    }
  }

  return (
    <>
      <div className="bg-[lightseagreen] flex gap-6">

        {/* basic routing Use Link */}

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link> */}

        {/* basic routing use navlink */}
        <NavLink to="/" className={({ isActive }) => {
          return isActive ? 'text-[tomato]' : ''

        }}>Home</NavLink>

        <NavLink to="/about" className={({ isActive }) => {
          return isActive ? 'text-[tomato]' : ''

        }}>About</NavLink>

        <NavLink to="/contact" className={({ isActive }) => {
          return isActive ? 'text-[tomato]' : ''

        }}>Contact</NavLink>

        <NavLink to="/help" className={({ isActive }) => {
          return isActive ? 'text-[tomato]' : ''

        }}>Help</NavLink>

      </div>

        {/* programmatic routing */}
      <div>
        <button onClick={handleClick}>Go to about page</button>
      </div>

      
    </>
  )
}

export default Navbar
