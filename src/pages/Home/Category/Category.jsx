
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import './Category.css'

const Category = () => {
  const { data, loading } = useFetch("http://localhost:3000/api/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
          {data &&
            images.map((img,i) => (
              <div className="pListItem shadow-lg p-2 hover:scale-110 " key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg rounded-lg mb-3"
                />
               <div className="flex  items-center justify-between">
               <div className="pListTitles">
                  <h1 className="font-bold">{data[i]?.type}s</h1>
                  <h2 className="font-medium text-sm">{data[i]?.count} {data[i]?.type}s</h2>
                </div>
              <Link to={`/apartments/${data[i]?.type}`}>
              <button className="btn btn-warning btn-xs">View all</button>
              </Link>
               </div>

              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;