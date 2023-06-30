import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedHotels from "../FeaturedHotels/FeaturedHotels";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import SearchHotel from "../SearchHotel/SearchHotel";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="md:w-[1200px] md:mx-auto ">
           <div className="-my-40 mb-4">
            <SearchHotel></SearchHotel>
           </div>
           <FeaturedHotels></FeaturedHotels>
             <div className="mt-10">
                <h1 className="mb-5 text-3xl font-bold">Browse By Category</h1>
             <Category></Category>
             </div>
             <div className="mt-10">
             <h1 className="mb-5 text-3xl font-bold">Hotels</h1>
                <FeaturedItem></FeaturedItem>
             </div>
           </div>
        </div>
    );
};

export default Home;