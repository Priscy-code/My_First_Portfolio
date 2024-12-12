import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { EventCardProps } from "./interfaces";



const EventCard = ({ imageSrc, title, date, time, location, price }: EventCardProps) => {
    return (
        <div>
            <Card className="border-none m-auto w-[300px] flex flex-col gap-2">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-[200px] object-cover rounded-t-xl"
                />
                <CardHeader className="p-0">
                    <CardTitle className="p-0 text-lg font-sfpro font-bold text-gray-800 tracking-wide">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-row gap-3 text-xs text-gray-500 font-sfpro font-light tracking-wide">
                    <p className="flex flex-row gap-1"> <span><img  src="/src/assets/icons/clocksm.svg" alt="time" /></span>{date} <span>•</span></p>
                    <p>{time}</p>
                    <p className="flex flex-row gap-1"><span><img src="/src/assets/icons/locationsm.svg" alt="time" /></span>{location}</p>
                </CardContent>
                <CardFooter className="p-0">
                    <Button variant="outline" className="rounded-md w-24 p-3 font-sfpro font-bold text-[#9557FF] text-sm border-gray-300">
                        {price}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default EventCard;