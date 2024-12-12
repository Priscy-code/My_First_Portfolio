
import InputSearch from "./InputSearch";
import { HeroProps } from "./interfaces";



const Hero = ({ backgroundImage, title, titleHighlight, subtitle }: HeroProps) => {
    return (
        <div className={`bg-[url(${backgroundImage})] bg-cover bg-center h-[460px] container`}>
            <div className="absolute inset-0 bg-black bg-opacity-60  h-[460px]">
                <div className="w-full h-full flex flex-col justify-center items-center gap-4 mt-3">
                <h1 className="font-sfpro font-bold text-6xl text-white">
                    <span className="bg-gradient-to-r from-[#caabfe] via-purple to-purple bg-clip-text text-transparent">
                        {titleHighlight}
                    </span>
                    {title}
                </h1>
                <p className="tracking-wide font-sfpro font-light text-xl text-white">
                    {subtitle}
                </p>
                <div>
                    <InputSearch />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;