import useFetch from "../../../hooks/useFetch";
import './l.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { FaBuilding, FaHotel,FaLaptopHouse } from "react-icons/fa";


const FeaturedItem = () => {

  const [tab, setTab] = useState('Hotel');
  const { data, loading } = useFetch(`http://localhost:3000/api/hotels/byCity?city=${tab}`);

  const handleTab = (tabName) => {
    setTab(tabName)
    // console.log(tab);


  }

  return (
    <div className="mb-20">

      <Tabs>
        <TabList className='font-bold p-5 text-2xl  '>
          <Tab onClick={() => handleTab('Hotel')}><span className={`flex items-center  gap-2 text-xs md:text-base
${tab === 'Hotel' ? '  bg-yellow-400 md:p-4 p-2 rounded-md ' : ''}`}><span className=" "><FaHotel></FaHotel></span> Hotels</span></Tab>

          <Tab onClick={() => handleTab('Apartment')}><span className={`flex items-center gap-2 text-xs  md:text-base
${tab === 'Apartment' ? '  bg-yellow-400 md:p-4 p-2 rounded-md' : ''}`}><span className=" ">
              <FaBuilding></FaBuilding></span>Apartments</span></Tab>
              
          <Tab onClick={() => handleTab('Resort')}><span className={`flex items-center text-xs  gap-2  md:text-base
${tab === 'Resort' ? ' bg-yellow-400 md:p-4 p-2 rounded-md' : ''}`}><span className=" "><FaHotel></FaHotel></span> Resorts</span></Tab>
          <Tab onClick={() => handleTab('Villa')}><span className={`flex items-center text-xs  gap-2  md:text-base
${tab === 'Villa' ? '  bg-yellow-400 md:p-4 p-2 rounded-md' : ''}`}><span className=" "><FaHotel></FaHotel></span>Villas</span></Tab>
          <Tab onClick={() => handleTab('Cabin')}><span className={`flex items-center text-xs   md:text-base gap-2 
${tab === 'Cabin' ? ' bg-yellow-400 md:p-4 p-2 rounded-md' : ''}`}><span className=" "><FaLaptopHouse></FaLaptopHouse></span>Cabins</span></Tab>
        </TabList>

        <TabPanel >

          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data.map((item) => (
                <div className="flex flex-col gap-3 flex-1" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="h-[250px] rounded-lg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity"><FontAwesomeIcon icon={faLocationDot} className="mr-2" />{item.city}</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel >
          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data.map((item) => (
                <div className="flex flex-col gap-3 flex-1" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="h-[250px] rounded-lg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity"><FontAwesomeIcon icon={faLocationDot} className="mr-2" />{item.city}</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel >

          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data.map((item) => (
                <div className="flex flex-col gap-3 flex-1" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="h-[250px] rounded-lg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity"><FontAwesomeIcon icon={faLocationDot} className="mr-2" />{item.city}</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>

          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data.map((item) => (
                <div className="flex flex-col gap-3 flex-1" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="h-[250px] rounded-lg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity"><FontAwesomeIcon icon={faLocationDot} className="mr-2" />{item.city}</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel >

          {loading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data.map((item) => (
                <div className="flex flex-col gap-3 flex-1" key={item._id}>
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="h-[250px] rounded-lg"
                  />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity"><FontAwesomeIcon icon={faLocationDot} className="mr-2" />{item.city}</span>
                  <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                  {item.rating && <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </TabPanel>



      </Tabs>





    </div>
  );
};

export default FeaturedItem;
