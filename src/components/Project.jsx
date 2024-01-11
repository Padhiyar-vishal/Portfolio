import '../css/Project.css';
import { projectData } from './data';

function Project() 
{
  return (
    <>
    {projectData.map((project) => {
        const { id, title, description, image } = project;
        return (
            <div className="project" key={id}>
                <div className="pro-col1">
                    <img id="pro-img" src={image} alt="" />
                </div>
                <div className="pro-col2">
                    <span className="pro-title">{title}</span>
                    <span className="pro-description">{description}</span>
                    <div className="project-tech">
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                        <div className="tag">
                            <span className="tag-text">React</span>
                        </div>
                    </div>
                    <div className="action">
                        <div className="action-icon-button">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    })}

    </>
  )
}
export default Project