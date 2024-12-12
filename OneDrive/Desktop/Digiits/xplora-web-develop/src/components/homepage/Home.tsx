
import { avatars } from "@/data/Users"
import CircleScroll from "../shared/CircleScroll"
import EventSection from "../shared/EventSection"
import Hero from "./HeroSection"
import { Trendingevents, Xploraevents } from "@/data/Events"
import LoginHeader from "../shared/LoginHeader"

const Home = () => {

  return (
    <div className="">
      <LoginHeader />

      <Hero
        backgroundImage="src/assets/images/homePage/homePagebg.svg"
        title="Create Moments."
        titleHighlight="Find Events."
        subtitle="Discover and create unforgettable experiences around you." />
      <div className="px-20 flex flex-col gap-14">
        <CircleScroll
          highlightTitle="Around You"
          title="Happening"
          items={avatars}
        />

        <EventSection
          highlightText='Trending'
          title='Events'
          items={Trendingevents}
          viewAll="View All"

        />
        <EventSection
          highlightText='Xplora'
          title='Originals'
          items={Xploraevents}
          viewAll="View All"

        />

      </div>


    </div>
  )
}

export default Home