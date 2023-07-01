import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const AllProperty = () => {
    const { type } = useParams()

    const { data, loading } = useFetch(`http://localhost:3000/api/hotels/byCity?city=${type}`);
    console.log(data);


    return (
        <div className="md:mx-20 mb-14 ">
            <div className="h-20"></div>
            <h2 className="text-4xl text-center text-blue-600 font-bold my-10 ">All {type}s</h2>
            {
                loading ?
                    'loading'
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            data?.map(item =>
                                <div
                                    key={item._id}
                                    className="card lg:card-side bg-blue-100 shadow-xl">
                                    <figure><img src={item?.photos} className="w-[350px] h-[250px]" alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title font-bold">{item?.name}</h2>
                                        <p className="text-sm">{item?.distance}m from center</p>
                                        <p className="text-sm">{item?.desc}</p>
                                        <p className="text-sm font-medium text-green-600">{item?.title}</p>
                                        <p >  <FontAwesomeIcon icon={faLocationDot} /><span className="ml-2 text-sm">{item?.city}, {item?.address}</span></p>
                                        <p className="text-yellow-600 font-medium text-sm">${item?.cheapestPrice}</p>
                                 
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }

        </div>
    );
};

export default AllProperty;