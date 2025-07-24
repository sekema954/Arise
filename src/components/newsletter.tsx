import { Title_font } from "../constants/fonts";
import CandleStickScene from "../animated_components/candlestick";

const Newsletter = () => {
  return (
    <div className="bg-[#3B3B3B] min-h-[600px] flex items-center justify-center mt-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
        
        {/* 3D Animation */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <CandleStickScene />
        </div>
        
        {/* Form Section */}
        <div className="flex flex-col justify-center gap-6">
          <header>
            <h1 style={{ ...Title_font }} className="text-3xl md:text-4xl font-bold text-white">
              Join Our Weekly Digest
            </h1>
            <p className="text-gray-300 mt-2">
              Get Exclusive Promotions & Updates Straight To Your Inbox
            </p>
          </header>

          <form className="flex w-full mt-4">
            <input 
              type="email" 
              placeholder="Enter your email here"
              className=" rounded-l-xl border h-[70px] px-6 flex-1 min-w-0"
            />
            <button 
              type="submit"
              className="bg-[#A259FF] hover:bg-[#9250e5] transition-all duration-300 h-[70px] rounded-r-xl px-6 text-white font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
