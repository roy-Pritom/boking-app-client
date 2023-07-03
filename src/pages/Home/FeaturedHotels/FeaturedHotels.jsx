import useFetch from "../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";

const FeaturedHotels = () => {
  // console.log(data);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/cities')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])
  
    const { data } = useFetch(`http://localhost:3000/api/hotels/countByCity?cities=${items.map(item=>item.cityName)}`);
    // console.log(data);
  return (

    
    <>
    <div className="">
      <h2 className="md:text-4xl text-2xl my-10  font-bold">Your Great Destination</h2>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          items?.map((item,index)=><SwiperSlide
          key={item._id}
          
          >
            <div className="relative">
              <img
                src={item.image}
                alt=""
                className=" md:w-[450px] md:h-[350px] h-[170px] "
              />
              <div className="absolute md:bottom-2 md:ml-3 bottom-0 ml-1 text-white">
                <h1 className="font-bold md:text-4xl text-sm ">{item.cityName}</h1>
                <h2 className="md:font-bold font-medium text-xs">{
                      data[index]    
                  
                } properties</h2>
              </div>
            </div>
          </SwiperSlide>)
        }
        
      </Swiper>
    </>
  );
};

export default FeaturedHotels;