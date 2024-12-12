import { SeatingCardProps } from "./interfaces";




const SeatingCard = ({ title, seatsLeft, price, iconSrc }: SeatingCardProps) => {
    return (
        <div className="flex flex-row w-[287px] h-[82px] bg-[#3C483E]/20 rounded-xl p-3 gap-2">
            {/* Icon */}
            <div className="flex items-center h-full">
                <img src={iconSrc} alt={`${title} Icon`} />
            </div>

            {/* Text Information */}
            <div className="h-full flex flex-col justify-center tracking-wider gap-1">
                <h3 className="text-base font-sfpro tracking-wider">{title}</h3>
                <p className="flex justify-center items-center gap-2 font-sfpro font-light text-[#C8C8C8] text-xs">
                    {seatsLeft} Seats Left
                    <span className="font-bold text-[#C8C8C8]">&middot;</span>
                    <span className="font-sfpro text-sm font-bold text-[#13A037]">
                        GH₵ {price}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SeatingCard;
