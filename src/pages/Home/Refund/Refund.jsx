import { FaPhoneAlt,FaPlane,FaCommentDollar} from "react-icons/fa";


const Refund = () => {
    return (
        // <div data-aos="zoom-in"></div>
        <div className="flex md:flex-row flex-col  items-center md:gap-14 gap-10 ">
            <div  className="flex items-center gap-5 shadow-2xl py-6 px-10 rounded-lg hover:scale-110">
                <div className="">
                <FaPhoneAlt className="w-10 h-10 text-blue-500"></FaPhoneAlt>
                </div>
                <div className="">
                    <p className="md:text-2xl text-base font-medium">We are now available
                    </p>
                    <p className="text-gray-800 text-xs md:text-base">Call +1 555 666 888 for contact <br />with us</p>
                </div>
            </div>
            <div className="flex items-center gap-5 shadow-2xl py-6 px-10 rounded-lg hover:scale-110">
                <div className="">
                <FaPlane className="w-10 h-10 text-blue-500"></FaPlane>
                </div>
                <div className="">
                    <p className="md:text-2xl text-base font-medium">International Flight</p>
                    <p className="text-gray-800 text-xs md:text-base">Call +1 555 666 888 for booking <br /> assistance </p>
                </div>
            </div>
            <div className="flex items-center gap-5 shadow-2xl py-6 px-10 rounded-lg hover:scale-110">
                <div className="">
                <FaCommentDollar className="w-10 h-10 text-blue-500"></FaCommentDollar>
                </div>
                <div className="">
                    <p className="md:text-2xl text-base font-medium">Check Refund
                    </p>
                    <p className="text-gray-800 text-xs md:text-base">Call +1 555 666 888 for check <br /> refund status

</p>
                </div>
            </div>


        </div>
    );
};

export default Refund;