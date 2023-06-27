import "./home.scss";
import searchBar from "../../assets/images/searchBar.png";
import filter from "../../assets/images/IC_Filter.png";
import house1 from "../../assets/images/house1.png"
import { useState } from "react";
import data from "../../data";
import "../selectedImage/selectedImage.scss";
import { Link } from "react-router-dom";

const Home = () => {
    const menu = ['House','Apartment', 'Hotel', 'Villa', 'Cottage'];
    const [activeIndex,setActiveIndex] = useState(0);
    const [showFilter,setShowFilter] = useState(false);
    const [type,setType] = useState("");
    const [searchValue,setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return(
        <div className ="home">
            <div className="headBar">
                <div className = "searchBar">
                    <img src = {searchBar} />
                    <input type="text" placeholder="Search address, or near you" onChange={handleChange}/>
                </div>
                <div className ="filter" onClick={() => {setShowFilter(prev=>!prev); type == '' ? setType('House') : setType('')}}>
                    <img src = {filter} />
                </div>
            </div>
            <div className ="choices">
                {showFilter && menu.map((item,i)=>{
                    return(
                        <div className = {`menuItem ${i===activeIndex ? 'activeMenu' : ''}`} key={i} onClick={()=>{setActiveIndex(i);setType(item)}}>
                            {item}
                        </div>
                    )
                    })
                }
            </div>
               <h3> Near from you </h3> 
            <div className = "houseOption">
                {data
                .filter((item)=>{
                    return item.productTitle.toLowerCase().includes(searchValue.toLowerCase())
                })
                .filter((item)=>{
                    if(type == ''){
                        return item;
                    }else{
                        return item.type === type;
                    }
                }).map((item,i) => {
                    return (
                        <div className = "house" key={i}>
                            <Link to={`/selected/${item.id}`}>
                                <div className="houseImage" style={{backgroundImage: `url("${item.productImage}")`}}></div>
                            </Link>
                        </div>
                    )}
                )} 
            </div>
                <h3> Best for you </h3>
            <div className = "moreOptions">
                {data.map((item,i) => {
                    return (
                        <div className = "best" key={i}>
                            <div className="bestImage" style={{backgroundImage: `url("${item.productImage}")`}}></div>
                            <div className="bestInfo">
                                <div>
                                    {item.productTitle}
                                </div>
                                <div> 
                                    {item.productPrice} price
                                </div>
                                <div className ="details">
                                    
                                </div>
                            </div>
                        </div>
                    )}
                )} 
            </div>
            
        </div>
        
    )
}
export default Home;