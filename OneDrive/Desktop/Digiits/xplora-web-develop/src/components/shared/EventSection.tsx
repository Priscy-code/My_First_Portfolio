import EventCard from "../homepage/EventCard";
import { EventCardProps, EventSectionHeaderProps } from "../homepage/interfaces";



const EventSection = ({ title, highlightText, items, viewAll }: EventSectionHeaderProps) => {



    return (
        <div>

            <div className=" px-11 flex flex-col gap-8 justify-start items-start  mx-auto ">
                <div className="flex w-full flex-row justify-between items-center tracking-wide">
                    <h2 className="font-sfpro text-2xl font-bold"><span className="text-[#9557ff]">{highlightText}  </span>{title}</h2>

                    <p className="text-base text-gray-400 cursor-pointer">
                        {viewAll}
                    </p>

                </div>
                <div className="flex flex-row gap-7">
                    {items.map((item: EventCardProps, index: number) => (
                        <EventCard
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            date={item.date}
                            time={item.time}
                            location={item.location}
                            price={item.price}
                            viewAll={item.viewAll}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default EventSection