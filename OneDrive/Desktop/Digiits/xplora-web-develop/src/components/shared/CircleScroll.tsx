import Avatar from "../homepage/Avatar";
import { avatars } from "@/data/Users"; // Ensure this path is correct
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CirlceScrollProps {
    title: string;
    highlightTitle: string;
    items: { label: string; imageSrc: string }[];
}
const CircleScroll = ({ title, highlightTitle, items }: CirlceScrollProps) => {
    return (
        <div className="overflow-hidden px-14 py-8 mt-10 flex flex-col gap-8 justify-start items-start w-full mx-auto h-[232px] border-[0.3px] rounded-3xl border-gray-200">
            <h2 className="font-sfpro text-2xl font-bold">
                <span className="text-[#9557ff]">{title}</span> {highlightTitle}
            </h2>

            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="w-full max-w-[1272px]"
            >
                <CarouselContent className="flex flex-row gap-5">
                    {items.map((item, index) => (
                        <CarouselItem key={index} className=" lg:basis-auto">
                            <div className="p-1 font-sfpro font-medium text-base tracking-wide">
                                <Avatar
                                    imageSrc={item.imageSrc}
                                    label={item.label}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CircleScroll;
