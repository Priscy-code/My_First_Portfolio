import HeroSection from './sections/HeroSection';
import CommunityBuilding from './sections/CommunityBuilding';
import JoinUs from './sections/JoinUs';
import Footer from '../layouts/Footer';

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <CommunityBuilding />
        <JoinUs />
        <Footer />
    </div>
  )
}

export default Homepage;