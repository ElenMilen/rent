import { useState } from "react";
import "./description.scss";

const Description = ({description}) => {

    const [ more, setMore ] = useState(false);
    

    return(
        <div className ="description">
            <div> 
                <span>Description</span>
                {description.length > 70 ? 
                <p>
                    {more ? description : description.substring(0, 70)}
                    <span className = "showMore" onClick={() => setMore(prev => !prev)}>
                        ... Show {more ? 'less' : 'more'}
                    </span>
                </p> 
                : 
                <p>
                    {description}
                </p>
                }
            </div>
            <div className ='descContactInfo'>
                <div className ='personInfo'>
                    
                    <div className ='personPhoto'>

                    </div>
                    <div className ='personName'>
                        <span>Garry Allen</span>
                        <span className ='personRole'>Owner</span>
        
                    </div>
                </div>
                <div className ='contactIcons'>
                    <div className ='contactIconCall'>

                    </div>
                    <div className ='contactIconMessage'>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description;