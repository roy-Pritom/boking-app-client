import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";


const PropertyDetails = () => {
    const {id}=useParams();
    const { data: item } = useQuery({
        queryKey: ['hotels',id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/api/hotels/find/${id}`);
            return res.data
        }
    })
    // const { item, loading} = useFetch(`http://localhost:3000/api/hotels/find/${id}`);


    console.log(item);
    return (
        <div>
            <div className="h-20"></div>
      <div>
         
         <div className="mx-20 mt-10">


           <div className="shadow-xl md:p-10 p-5 mb-10 ">
           <h1 className=" text-4xl mb-5 font-bold">{item?.name}</h1>
           
           <div className="">
             {item?.photos?.map((photo, i) => (
               <div  key={i}>
                 <img
           
                   src={photo}
                   alt=""
                   className="rounded-lg md:w-full md:h-[480px] w-[300px] mx-auto"
                 />
               </div>
             ))}
             <p className="mt-4 mb-3">{item?.desc}</p>
           </div>
           <div className="mb-2">
             <FontAwesomeIcon icon={faLocationDot} />
             <span>{item?.address}</span>
           </div>
           <span className="text-green-500 my-1 font-medium " >
             Excellent location – {item?.distance}m from center
           </span>
           <span className="text-green-500 font-medium">
             Book a stay over ${item?.cheapestPrice} at this property 
           </span>
     
   
  
               <h1 className="hotelTitle">{item?.title}</h1>
               

             </div>


         
   


           
         </div>
  
       </div>
            
        </div>
    );
};

export default PropertyDetails;