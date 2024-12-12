const HeroText = () => {
    return (
      <div className="flex flex-col bg-red justify-center items-center text-center mx-auto relative">

        <h1 className="hidden sm:block text-[240px] font-black leading-[14rem] font-steelfish">
          <span className="text-pink font-steelfish">XPLORA</span>
          <span className="font-steelfish block">COMING</span>
        </h1>

        <h1 className=" sm:hidden text-pink text-[100px] font-black leading-[100px] font-steelfish">
          <span className="text-white font-steelfish">XPLORA</span>
          <span className="font-steelfish block">COMING</span>
        </h1>

        <div className="hidden sm:block absolute top-1/2 transform -translate-y-1/2">
          <div className="bg-white w-28 h-28 rounded-full flex justify-center items-center">
            <span className="text-pink font-steelfish text-7xl font-bold">IS</span>
          </div>
        </div>

        <div className=" sm:hidden absolute top-1/2 transform -translate-y-1/2">
          <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
            <span className="text-pink font-steelfish text-4xl font-bold">IS</span>
          </div>
        </div>

      </div>
    );
  };
  
  export default HeroText;
  