import '../css/Project.css';
import naruhina from '../images/naruhina.jpg';

function Project() 
{
  return (
    <>
    <div className="project">
        <div className="pro-col1">
            <img id="pro-img" src={naruhina} alt="" />
        </div>
        <div className="pro-col2">
            <span className="pro-title">Fiskil</span>
            <span className="pro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span>
        </div>
    </div>
    <div className="project">
        <div className="pro-col1">
            <img id="pro-img" src={naruhina} alt="" />
        </div>
        <div className="pro-col2">
            <span className="pro-title">Fiskil</span>
            <span className="pro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span>
        </div>
    </div>
    <div className="project">
        <div className="pro-col1">
            <img id="pro-img" src={naruhina} alt="" />
        </div>
        <div className="pro-col2">
            <span className="pro-title">Fiskil</span>
            <span className="pro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span>
        </div>
    </div>
    </>
  )
}
export default Project