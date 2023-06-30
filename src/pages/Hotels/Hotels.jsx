
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import Hotel from "./Hotel";
// import '../Hotels/j.css'

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  // console.log(dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading,reFetch } = useFetch(
    `http://localhost:3000/api/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  );
// console.log(data);
  const handleClick = () => {
    reFetch();
  };

  return (
    <div className="mb-16 md:w-[1200px] md:mx-auto">
        <div className="h-16">

        </div>
        <h2 className="my-14 text-4xl font-bold text-center ">Hotels in {destination}</h2>
    
      <div className="listContainer mt-6 flex justify-center ">
        <div className="listWrapper w-full flex gap-5">
          <div className="listSearch bg-[#003580] text-white px-5 py-3 rounded-lg sticky top-3 flex-1 h-max ">
            <h1 className="text-xl font-semibold text-gray-400 mb-3">Search</h1>
            <div className="flex flex-col gap-1 mb-3">
              <label>Destination</label>
              <input className=" text-black" defaultValue={destination} readOnly type="text" />
            </div>
            <div className="lsItem flex flex-col gap-1 mb-3">
              <label className="text-xs ">Check-in Date</label>
              <span className=" text-black bg-white flex items-center p-1" onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem flex flex-col gap-1 mb-3 ">
              <label className="text-xs">Options</label>
              <div className="lsOptions p-3">
                <div className="lsOptionItem flex justify-between mb-3 text-white text-xs">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput w-12  text-black"
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-3 text-white text-xs">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className=" w-12  text-black"
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-3 text-white text-xs">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-12  text-black"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-3 text-white text-xs">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput w-12  text-black"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem flex justify-between mb-3 text-white text-xs">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-12  text-black"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-warning w-full" onClick={handleClick}>Search</button>
          </div>
          <div className="listResult flex-[3]">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Hotel item={item} d={dates} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;