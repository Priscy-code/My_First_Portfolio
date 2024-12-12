
import { Trendingevents, Xploraevents } from "@/data/Events"

import { interestItems } from "@/data/Interests"
import LoginHeader from "./components/shared/LoginHeader"
import HeroSection from "./components/eventspage/HeroSection"
import CircleScroll from "./components/shared/CircleScroll"
import EventSection from "./components/shared/EventSection"

const EventsPage = () => {
    return (

        <div>
            <LoginHeader />
            <HeroSection />
            <div className="px-20 flex flex-col gap-8">
                <CircleScroll
                    highlightTitle="By Interest"
                    items={interestItems}
                    title="Explore" />

                <EventSection
                    items={Xploraevents}


                />
                <EventSection
                    items={Trendingevents}
                />

            </div>

        </div>
    )
}

export default EventsPage