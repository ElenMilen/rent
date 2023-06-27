import "./price.scss";

const Price = ({price}) => {
    return(
        <div className="price">
            <div className = "rentPrice"> {price}/year </div>
            <div className ="rentNow"> Rent Now </div>
        </div>
    )
}
export default Price;