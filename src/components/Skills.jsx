import '../css/Skills.css';
import Tech from './Tech';

function Skills() {
  return (
    <div className="skills">
        <div className="skill-container">
            <div className="skill-row1">
                <div className="skill1-sub-row">
                    <div className="skill-tag">
                        <span className="skill-text">Skills</span>
                    </div>
                </div>
                <div className="skill1-sub-row">
                    <span className="skill-text2">The skills, tools and technologies I am really good at:</span>
                </div>
            </div>
            <div className="skill-row">
                <div className="skill2-sub-row">
                    <Tech />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Skills