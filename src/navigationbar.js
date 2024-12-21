import '../src/navigationbar.css'
export default function Navigationbarnew()
{
    return <nav className="navbar navbar-expand-lg bgnav">
        
    <div className='container'>
    <a className="navbar-brand natext" href="#">YOGESHWARAN . B</a>
    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=" iconcolor navbar-toggler-icon "></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">

        <li className="nav-item active">
          <a className="nav-link tcw" href="#">Home <span class="sr-only">(current)</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link tcw" href="#">about</a>
        </li>

        <li className="nav-item">
          <a className="nav-link tcw" href="#">Project</a>
        </li>

        <li className="nav-item">
          <a className="nav-link tcw" href="#">Contact</a>
        </li>

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li> */}

        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#">Disable</a>
        </li> */}
        
      </ul>
    </div>
    </div>
  </nav>
  
}