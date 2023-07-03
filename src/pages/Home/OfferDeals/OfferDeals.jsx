import { useSelector } from "react-redux";

const OfferDeals = () => {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <div className="flex items-center md:flex-row flex-col md:gap-10 gap-5">
            <div className="">
                <div className="card  md:h-[690px] bg-base-100 shadow-xl">
                   
                        <img src="https://themehut.co/html/geair/assets/img/images/offer_img01.jpg" alt="Shoes" className="rounded w-full md:h-[500px]" />
         
                    <div className="card-body ">
                        <h2 className="card-title">NewYork to Boston</h2>
                        <p>8 july 2023 - 14 july 2023</p>
                        <p>Economy from <br /><span className="font-bold">$320</span></p>
                      
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {
                    products?.allProducts?.products?.map(product => <div
                        key={product.id}
                        className="card  bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img src={product.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="text-lg font-medium">{product.flight}</h2>
                            <p>{product.date}</p>
                            <p>Economy from <br /><span className="font-bold">${product.price}</span></p>

                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default OfferDeals;