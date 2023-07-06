import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h1>Assignment</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default Header
