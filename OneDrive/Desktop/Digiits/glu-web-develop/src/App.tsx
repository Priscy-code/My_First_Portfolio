import Waitlist from './components/pages/Waitlist';
import './App.css';
import Homepage from './components/pages/Homepage';
import Feed from './components/pages/Feed';
import Recommendations from './components/pages/Recommendations';
import { ActiveCommunityProvider } from './features/communities/components/ActiveCommunity';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManageCommunities from './components/pages/ManageCommunities';
import MyCommunities from './components/pages/MyCommunities';
import CreateNewCommunity from './components/pages/CreateNewCommunity';
import Forums from './components/pages/Forums';
import ViewTopic from './components/pages/ViewTopic';
import Events from './components/pages/Events';
import ViewEvent from './components/pages/ViewEvent';
import JobBoard from './components/pages/JobBoard';
import PropertyListing from './components/pages/PropertyListing';

const App = () => {
  return (
    <>
      <Router>
          <ActiveCommunityProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/waitlist' element={<Waitlist /> } />
              <Route path='/feed' element={<Feed /> } />
              <Route path='/recommendations' element={<Recommendations /> } />
              <Route path='/manage-communities' element={<ManageCommunities />} />
              <Route path='/my-communities' element={<MyCommunities />} />
              <Route path='/create-new-community' element={<CreateNewCommunity />} />
              <Route path='/forums' element={<Forums />} />
              <Route path='/view-topic/:topicId' element={<ViewTopic />} />
              <Route path='/events' element={<Events />} />
              <Route path='/events/:eventId' element={<ViewEvent />} />
              <Route path='/jobs' element={<JobBoard />} />
              <Route path='/property' element={<PropertyListing/>}/>
            </Routes>
        </ActiveCommunityProvider>
      </Router>
    </>
  );
};

export default App;