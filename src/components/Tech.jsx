import '../css/Tech.css';
import { techData } from './data';

const Tech = () => (
    techData.map((item) => {
        const {id, title, icon} = item
        return (
            <div className="tech" key={id}>
                <img src={icon} className="tech-icon" />
                <span className="tech-text">{title}</span>
            </div>
        )
    }
)
)
export default Tech