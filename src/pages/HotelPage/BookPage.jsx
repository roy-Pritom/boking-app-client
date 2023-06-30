

import { useContext, useState } from "react";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../Provider/searchContext";

const BookPage = () => {
  const {id,price}=useParams();
  console.log(price);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data} = useFetch(`http://localhost:3000/api/hotels/room/${id}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  // const navigate = useNavigate();

  // const handleClick = async () => {
  //   try {
  //     await Promise.all(
  //       selectedRooms.map((roomId) => {
  //         const res = axios.put(`http://localhost:3000/api/rooms/availability/${roomId}`, {
  //           dates: alldates,
  //         });
  //         return res.data;
  //       })
  //     );
  //     // setOpen(false);
  //     navigate("/");
  //   } catch (err) {console.log(err);}
  // };
  return (
    <div className="mb-10">
      <div className="h-20"></div>
      <h2 className="text-5xl font-bold text-center my-10">Book Now</h2>

<p className="font-semibold text-blue-800 text-3xl text-center">Select your rooms:</p>
      <div className="flex justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        
        {data.map((item) => (
          <div className="flex md:gap-72 gap-10 mb-5 mt-5 bg-pink-100 p-10 rounded-lg" key={item._id}>
            <div className="">
              <div className="font-bold text-xl">{item.title}</div>
              <div className="font-medium my-1">{item.desc}</div>
              <div className="font-medium my-1">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="text-yellow-600 font-semibold">${item.price}</div>
            </div>
            <div className="">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
</div>

      </div>
       <div className="flex justify-center">
      <Link to={`/payment/${id}/${price}`}>
      <button className="btn btn-warning md:w-[71%] w-[254px]">
          Reserve Now!
        </button>
      </Link>
       </div>
    </div>
  );
};

export default BookPage;