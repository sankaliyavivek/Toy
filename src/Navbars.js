import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserLogin } from './App'
import Jay from './Navi'

function Navbars() {

  var { logname, setlogname, logout, setlogout } = useContext(UserLogin)

  function logoutinnavbar() {
    alert("are you sure...")
    setlogout(false)
    setlogname("")
  }

  return (
    <div className='main' style={{ backgroundColor: "white" }}>

      <div className='nv'>

        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container nav1">
            <Link className='navbar-brand' to={'/'}>ToyStore</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse row " id="navbarNavAltMarkup">
              <div className="navbar-nav col-xl-8">
                <Link to='/catalog' className="nav-link">Catalog</Link>
                <Link to='/delivery' className="nav-link">Delivery</Link>
                <Link to='/about' className="nav-link" >About</Link>
                <Link to='/contacts' className="nav-link">Contacts</Link>

                {
                  logout ?
                    (
                      <Link onClick={logoutinnavbar} className="nav-link">logout</Link>
                    ) : 
                    (
                      <>
                        <Link to={"/vivek"} className="nav-link">Registrastion</Link>
                        <Link to='/log' className="nav-link">LogIn</Link>
                      </>
                    )
                }
                <Link className="nav-link">{logname}</Link>

              </div>

              <div className='col-xl-4 end'><Jay></Jay></div>

            </div>

          </div>
        </nav>
      </div>


    </div>
  )
}

export default Navbars

