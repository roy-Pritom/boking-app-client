import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {  useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm ";
import { useQuery } from "@tanstack/react-query";



const Payment = () => {
    
   const {id,price}=useParams();
   console.log(price,id);

   const { data: item } = useQuery(['hotels', id], async () => {
    const res = await fetch(`http://localhost:3000/api/hotels/find/${id}`)
    return res.json()
})
console.log(item);

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
    

    return (
        <div className="w-full">
            <div className="h-20"></div>
            <h2 className="text-center font-bold text-5xl mb-28 mt-10">Payment</h2>
         
            <Elements stripe={stripePromise}>
            <CheckoutForm  id={id} price={price} item={item}></CheckoutForm>
                
            </Elements>
        </div>
    );
};

export default Payment;