import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedHotels from "../FeaturedHotels/FeaturedHotels";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import LatestNews from "../LatestNews/LatestNews";
import OfferDeals from "../OfferDeals/OfferDeals";
import Refund from "../Refund/Refund";
import SearchHotel from "../SearchHotel/SearchHotel";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <div className="md:w-[1200px] md:mx-auto px-4 md:px-0 ">
           <div className=" mb-4">
            <SearchHotel></SearchHotel>
           </div>
           <div className="md:my-16 my-10">
            
           <Refund></Refund>
           </div>
            <div className="my-20">
            <FeaturedHotels></FeaturedHotels>
            </div>
             <div className="mt-10">
                <h1 className="mb-5 md:text-3xl text-2xl font-bold">Browse By Category</h1>
             <Category></Category>
             </div>
             <div className="mt-10">
             <h1 className="mb-5 md:text-3xl text-2xl font-bold">Properties</h1>
                <FeaturedItem></FeaturedItem>
             </div>
             <div className="mb-20">
               <h2 className="md:text-3xl text-xl text-center font-bold mb-10">Flight Offer Deals</h2>
               <OfferDeals></OfferDeals>
             </div>
             <div className="">
               <LatestNews></LatestNews>
             </div>
           </div>
        </div>
    );
};

export default Home;