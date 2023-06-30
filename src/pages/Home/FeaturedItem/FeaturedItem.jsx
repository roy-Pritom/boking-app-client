import useFetch from "../../../hooks/useFetch";

const FeaturedItem = () => {
    const { data, loading} = useFetch("http://localhost:3000/api/hotels?featured=true");

    return (
        <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {data.map((item) => (
              <div className="fpItem" key={item._id}>
                <img
                  src={item.photos[0]} 
                  alt=""
                  className="h-[250px] rounded-lg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default FeaturedItem;
