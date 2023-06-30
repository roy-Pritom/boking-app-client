
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";

import { Link, useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../Provider/searchContext";




const HotelPage = () => {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];

//   const [openModal, setOpenModal] = useState(false);
 


  const { data, loading} = useFetch(`http://localhost:3000/api/hotels/find/${id}`);

  const {options } = useContext(SearchContext);
 

  console.log(options);

//   const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
//   function dayDifference(date1, date2) {
//     const timeDiff = Math.abs(date2.getTime() - date1.getTime());
//     const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
//     return diffDays;
//   }

  const days = 8;
//   console.log(dayDifference(dates[0], dates[0]));




//   const handleClick = () => {
//     if (user) {
//       navigate('/book')
//     } else {
//       navigate("/login");
//     }
//   };
  return (
    <div>
        <div className="h-20">

        </div>
  
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
         
          <div className="hotelWrapper mx-20 mt-10">
            {/* <button className="">Reserve or Book Now!</button> */}
            <div className="flex gap-5">
            <div className="shadow-xl p-5 mb-10">
            <h1 className="hotelTitle text-4xl mb-5 font-bold">{data.name}</h1>
            
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div  key={i}>
                  <img
            
                    src={photo}
                    alt=""
                    className="rounded-lg md:w-[500px] w-[300px]"
                  />
                </div>
              ))}
              <p className="my-1">{data.desc}</p>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="text-green-500 my-1 font-medium " >
              Excellent location – {data.distance}m from center
            </span>
            <span className="text-green-500 font-medium">
              Book a stay over ${data.cheapestPrice} at this property 
            </span>
      
    
   
                <h1 className="hotelTitle">{data.title}</h1>
                
 
              </div>


              <div className="sticky top-3  h-max  bg-[#ebf3ff] flex-1 p-5 flex flex-col gap-5">
                <h1 className="text-xl">Perfect for a {days}-night stay!</h1>
                <span className="text-sm">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2 className="font-normal">
                  <b>${days * data.cheapestPrice}</b> ({days}{" "}
                  nights)
                </h2>
               <Link to={`/book/${id}/${days * data.cheapestPrice}`}>
               <button className="btn btn-warning">Reserve or Book Now!</button>
               </Link>
              </div>
              </div>


            
          </div>
   
        </div>
      )}
      {/* {openModal && <BookPage setOpen={setOpenModal} hotelId={id}/>} */}
    </div>
  );
};

export default HotelPage;