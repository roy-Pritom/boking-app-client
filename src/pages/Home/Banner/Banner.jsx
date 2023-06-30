import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            className='mb-10  '
        >
            <div className="carousel-slide relative">
                <img src="https://img.freepik.com/free-photo/one-person-standing-cliff-achieving-success-generated-by-ai_188544-11834.jpg?w=2000&t=st=1687857549~exp=1687858149~hmac=0537f9fe1c3f4aefbc902969026cb7598413aa542d690f2d67bb5c65c092fd65&w=1380" alt="Image 1" className='rounded-lg md:h-[700px] h-[300px]  ' />
                <div className="carousel-overlay  bg-blue-700 bg-opacity-70  ">
              <div className="md:mr-[400px]">
              <p className='text-white '><span className='md:text-5xl text-xl font-bold'>A Lifetime Of Discounts? Its Genius.</span><br />
              
              </p>
              <p className='md:mr-[160px] mt-2 text-white md:text-lg md:font-medium
              text-sm px-3'>Get rewarded for your travels-unlock instant savings of 10% or more with a free <br /><span className='md:mr-[498px]'> book.com account</span></p>
                 <Link to='/login'>
             <button className='btn btn-warning md:mr-[650px] mt-7'>Sign In / register</button>
             </Link>
              </div>

               
                </div>
            </div>
            <div className="carousel-slide relative">
                <img src="https://img.freepik.com/premium-photo/young-family-four-amalfi-coast-italy_109800-679.jpg?w=1060" alt="Image 1" className='rounded-lg md:h-[700px] h-[300px]  ' />
                <div className="carousel-overlay  bg-blue-700 bg-opacity-70  ">
              <div className="md:mr-[400px]">
              <p className='text-white '><span className='md:text-5xl text-xl font-bold'>A Lifetime Of Discounts? Its Genius.</span><br />
              
              </p>
              <p className='md:mr-[160px] mt-2 text-white md:text-lg md:font-medium
              text-sm px-3'>Get rewarded for your travels-unlock instant savings of 10% or more with a free <br /><span className='md:mr-[498px]'> book.com account</span></p>
         <Link to='/login'>
             <button className='btn btn-warning md:mr-[650px] mt-7'>Sign In / register</button>
             </Link>
              </div>

               
                </div>
            </div>
            <div className="carousel-slide relative">
                <img src="https://img.freepik.com/premium-photo/friends-toasting-drinks-boat-party_148364-45.jpg?w=1060" alt="Image 1" className='rounded-lg md:h-[700px] h-[300px]  ' />
                <div className="carousel-overlay  bg-blue-700 bg-opacity-70  ">
              <div className="md:mr-[400px]">
              <p className='text-white '><span className='md:text-5xl text-xl font-bold'>A Lifetime Of Discounts? Its Genius.</span><br />
              
              </p>
              <p className='md:mr-[160px] mt-2 text-white md:text-lg md:font-medium
              text-sm px-3'>Get rewarded for your travels-unlock instant savings of 10% or more with a free <br /><span className='md:mr-[498px]'> book.com account</span></p>
             <Link to='/login'>
             <button className='btn btn-warning md:mr-[650px] mt-7'>Sign In / register</button>
             </Link>
              </div>

               
                </div>
            </div>
           
        </Carousel>
    );
};

export default Banner;