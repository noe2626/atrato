import { Link } from "react-router-dom";
import colorIcon from '../imgs/ColorIcon.png'
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-light nav-dash">
                <Link to={"/Dashboard"} className="navbar-brand  padding-nav" >
                    <img src={colorIcon} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <label className="padding-nav btn-dash">Dashboard</label>
                </Link>
            </nav>
        </>)



}

export default Navbar