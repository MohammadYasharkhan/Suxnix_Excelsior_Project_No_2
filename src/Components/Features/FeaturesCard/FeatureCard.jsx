import './FeatureCard.css';


function FeatureCard({icon, title, description , marginClass})
{
    return (
            <div className='col-md-6 col-sm-8'>
                <div className={`feature_card ${marginClass}`}>
                    <div className='feature_card_icon'>
                        <img src={icon} alt={title}  />
                    </div>
                    <h3 className='feature_card_title'>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
    );
}

export default FeatureCard;