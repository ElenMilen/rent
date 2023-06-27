import SelectedImage from "../selectedImage/SelectedImage";
import Description from "../description/Description";
import Gallery from "../gallery/Gallery";
import SelectedMap from "../selectedMap/SelectedMap";
import Price from "../price/Price";
import "./selectedHouse.scss";
import data from '../../data';
import { Link, useParams } from "react-router-dom";
import backButton from "../../assets/images/backButton.png";

const SelectedHouse = () => {
    const {id} = useParams();
    
    return(
        <div className ="selectedHouse">
            <Link to='rent'>
                <img className="backButton" src = {backButton} alt="back" />
            </Link>
            <SelectedImage productImage={data[id].productImage} productTitle={data[id].productTitle} productSubTitle={data[id].productSubTitle} productRoomInfo={data[id].productRoomInfo}/>
            <Description description={data[id].description}/>
            <Gallery />
            <SelectedMap />
            <Price price={data[id].price}/>        
        </div>
    )
}
export default SelectedHouse;