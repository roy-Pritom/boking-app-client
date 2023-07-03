import { useContext,  useState } from "react";
import {
    faBed,
    faCalendarDays,

    faPerson,
    faPlane,

  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../Provider/searchContext";
import useFetch from "../../../hooks/useFetch";

const SearchHotel = ({type}) => {

  
    const { data} = useFetch('http://localhost:3000/api/cities');

    const {dispatch}=useContext(SearchContext)
    const [destination, setDestination] = useState("NewYork");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate=useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

    return (
        <div className="header  mb-10 rounded-lg md:h-[300px] h-[350px] ">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList md:mb-[50px] mb-[100px]">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            {/* <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div> */}
          </div>
          {type !== "list" && (
            <>
            
 
              <div className="headerSearch md:bg-gray-500 flex md:flex-row flex-col items-center justify-around gap-6 md:gap-0 md:border-4 md:border-[#febb02] ">
                <div className="headerSearchItem ">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
           
                         <select onChange={(e) => setDestination(e.target.value)} className="input input-bordered w-full text-black" placeholder="Where are you going?">
                           {
                            data?.map(item=>
                              <option
                              key={item._id}
                              >{item.cityName}</option>
                              
                              )
                           }

                    
                                </select>

                </div>
            



                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span 
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText text-black  bg-white md:bg-none p-2 rounded-lg   "
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date "
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText  bg-white md:bg-none p-2 rounded-lg  "
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem flex justify-center">
                  <button className="btn btn-warning" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
};

export default SearchHotel;