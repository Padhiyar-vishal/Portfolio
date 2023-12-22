import '../css/About.css';
import { checklistData1, checklistData2, aboutTextData } from './data';
import naruhina from '../images/naruhina.jpg';

function About() {
    return (
        <div className='About'>
            <div className="container3">
                <div className="about-row1">
                    <div className="div-tag">
                        <span className='tag'>About me</span>
                    </div>
                </div>
                <div className="row2">
                    <div className="about-column">
                        <div className="picture-container">
                            <img id='img2' src={naruhina} alt="" />
                            <div id='bg-img'></div>
                        </div>
                    </div>
                    <div className="about-column">
                        <h1>Curious about me? Here you have it:</h1>
                        {aboutTextData.map((item) => {
                            return (
                                <p className='about-text' key={item.id}>
                                    {item.text}
                                </p>
                            )
                        })}
                        <div className="checklist">
                            <div className="checklist-column">
                                {checklistData1.map((item) => {
                                    return (
                                            <li key={item.id}>
                                                <span className="about-text">{item.title}</span>
                                            </li>
                                        )
                                    }
                                )}
                            </div>
                            <div className="checklist-column">
                                {checklistData2.map((item) => {
                                    return (
                                            <li key={item.id}>
                                                <span className="about-text">{item.title}</span>
                                            </li>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                        <p className="about-text">
                            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About