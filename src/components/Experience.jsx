import '../css/Experience.css';
import ExCard from './ExCard';

function Experience() {

  return (
    <div className="experience">
        <div className="ex-container">
            <div className="skill-row1">
                <div className="skill1-sub-row">
                    <div className="skill-tag">
                        <span className="skill-text">Experience</span>
                    </div>
                </div>
                <div className="skill1-sub-row">
                    <span className="skill-text2">Here is a quick summary of my most recent experiences:</span>
                </div>
            </div>
            <ExCard />
        </div>
    </div>
  )
}
export default Experience
