import { Link } from "react-router-dom";
import "../Hotels/j.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
const Hotel = ({ item}) => {
  
  return (
    <div className=" md:flex justify-between gap-5 mb-5 rounded-md p-3 shadow-lg">
      <img src={item.photos[0]} alt="" className="w-52 h-52 object-cover" />
      <div className="flex flex-col gap-3 flex-[2]">
        <h1 className="text-xl font-bold text-[#0071c2]">{item.name}</h1>
        <span className="text-xs">{item.distance}m from center</span>
        {/* <span className="siTaxiOp">Free airport taxi</span> */}
        <span className="text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">{item.desc}</span>
        <span className="text-xs text-green-700 font-bold">Free cancellation </span>
        <span className="text-xs text-green-700">
          You can cancel later, so lock in this great price today!
        </span>
          <span><FontAwesomeIcon icon={faLocationDot} /><span className="ml-2">{item.city}</span></span>
      </div>
      <div className="">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="flex flex-col gap-1 text-right">
          <span className="text-2xl">${item.cheapestPrice}</span>
          <span className="text-xs ">Includes taxes and fees</span>
          <Link to={`/hotel/${item._id}`}>
          <button className="btn btn-warning font-bold mt-3">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;