import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Hero.css'
import {FaLocationDot,} from 'react-icons/fa6'

function Hero() {

  return (
    <div className="hero">
        <div className="container2">
            <div className="column1">
                <p className='titleName'>Hi, I’m Vishal 👋 </p>
                
                <p className="text">
                    I am a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing)
                    exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though
                    I have been creating web applications for over 7 years, I still love it as if it was something new.
                </p>
                <div className="group">
                    <div className="location">
                       <FaLocationDot className='icon-location'/>
                        <p className='text3'>Vadodara,india</p>
                    </div>
                    <div className="hire">
                        <div className="icon-div"><i className='icon icon-available fa-icon' /></div>
                        <span className='post-available'>available for new post</span>
                    </div>
                </div>
                <div className="action">
                    <div className="links">
                    <FontAwesomeIcon className="fa-brands fa-github" />
                    </div>
                </div>
            </div>
            <div className="column2">
                <img className="image"/>
            </div>
        </div>
    </div>
  )
}
export default Hero