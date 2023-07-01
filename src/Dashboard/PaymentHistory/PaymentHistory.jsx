import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
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
                        <th>TransactionId</th>
                        <th>Name</th>
                        <th>UserEmail</th>
                        <th>City</th>
              
                        <th>Details</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items?.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.transactionId}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                            
                     

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

export default PaymentHistory;