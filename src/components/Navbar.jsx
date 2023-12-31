import '../css/Navbar.css'
import { NavItems } from './data'

function Navbar() {

    return (
        <div className="Header">
            <div className='h-container'>
                <h1>Portfolio</h1>
                <div className='Navigation'>
                    {NavItems.map((item) => {
                        const { id, title, url } = item;
                        return (
                            <li key={id} className='nav-item'> 
                                <a className="Navlink" href={url}>{title}</a>
                            </li>
                        )
                    })}
                    <button href="" type='button'>Download CV</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar