import '../css/ExCard.css';
import { exCardData } from './data';

const ExCard = () => {

    return (
        exCardData?.map((item) => {
            const {id, title, date, logo, content} = item;

            return (

                <div className="ex-card" key={id}>
                    <div className="ex-card-row">
                        <div className="ex-col1">
                            <img id='ex-logo' src={logo} alt="" />
                        </div>
                        <div className="ex-col2">
                            <span className='ex-title'>{title}</span>
                            <div className="ex-sub-col">
                                {content?.map((item) => {
                                    return (
                                        <li key={item.id}><span className='ex-sub-text'>{item.text}</span></li>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="ex-col3">
                            <span className="ex-text">{date}</span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default ExCard
