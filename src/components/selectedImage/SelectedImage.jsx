import "./selectedImage.scss";
import bedroomImage from "../../assets/images/IC_Bedroom.png";
import bathroomImage from "../../assets/images/IC_Bathroom.png";

const SelectedImage = ({productImage, productTitle, productSubTitle, productRoomInfo}) => {
    return(
    
    <div className ="selectedImage" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 32.29%, rgba(0, 0, 0, 0.6) 76.04%),url('${productImage}')`}}>
            <span className ="title">
                {productTitle}
            </span>
            <span className = 'description'>
                {productSubTitle}
            </span>
            <div className ="details">
                <div className = "bedroom">
                    <div className = "bedroomPicture">
                        <img src={bedroomImage} alt={bedroomImage} />
                    </div>
                    <div className = "bedroomText"> 
                         {productRoomInfo.bedroom} Bedroom 
                    </div>
                </div>
                <div className = "bathroom">
                    <div className = "bathroomPicture">
                        <img src={bathroomImage} alt={bathroomImage} />
                    </div>
                    <div className = "bathroomText">
                        {productRoomInfo.bathroom} Bathroom
                    </div>
                </div>
            </div>
            <div className="back"></div>
        </div>
    )
}
export default SelectedImage;