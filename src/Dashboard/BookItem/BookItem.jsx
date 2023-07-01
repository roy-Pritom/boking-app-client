import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const BookItem = () => {
    const { data: items = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/api/payments');
            return res.data
        }
    })

    return (
        <div className="bg-blue-400 p-20 w-full text-white">
         
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Status</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button className="btn  btn-accent cursor-not-allowed ">Paid</button>
                                </td>

                                <td>

                                 <Link to={`/details/${item.propertyId}`}>
                                 <button
                                        className='btn btn-warning'  >View Details</button>
                                 </Link>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookItem;