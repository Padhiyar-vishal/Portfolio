import '../css/Project.css';
import { projectData } from './data';

function Project() 
{
  return (
    <>
    {projectData.map((project, index) => {
        const { id, title, description, image,tags } = project;
        const isEven = index % 2 === 0;

        return (
            <div className="project" key={id}>
            {isEven ? (
              <>
                <div className="pro-col1">
                  <img id="pro-img" src={image} alt="" />
                </div>
                <div className="pro-col2">
                  <span className="pro-title">{title}</span>
                  <span className="pro-description">{description}</span>
                  <div className="project-tech">
                    {tags.map((tag) => {
                        return (
                            <div className="tag">
                                <span className="tag-text">{tag}</span>
                            </div>
                        )
                    })}
                  </div>
                  <div className="action">
                    <div className="action-icon-button">
                      {/* Your action button goes here */}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="pro-col2">
                  <span className="pro-title">{title}</span>
                  <span className="pro-description">{description}</span>
                  <div className="project-tech">
                    {tags.map((tag) => {
                        return (
                            <div className="tag">
                                <span className="tag-text">{tag}</span>
                            </div>
                        )
                    })}
                  </div>
                  <div className="action">
                    <div className="action-icon-button">
                      {/* Your action button goes here */}
                    </div>
                  </div>
                </div>
                <div className="pro-col1">
                  <img id="pro-img" src={image} alt="" />
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
export default Project
