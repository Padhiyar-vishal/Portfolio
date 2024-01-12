import '../css/work.css';
import Project from './Project';

function work() {

  return (
    <div className="work">
        <div className="work-container">
            <div className="skill-row1">
                <div className="skill1-sub-row">
                    <div className="skill-tag">
                        <span className="skill-text">Work</span>
                    </div>
                </div>
                <div className="skill1-sub-row">
                    <span className="skill-text2">Some of the noteworthy projects I have built:</span>
                </div>
            </div>
           <Project />
        </div>
    </div>
  )
}
export default work
