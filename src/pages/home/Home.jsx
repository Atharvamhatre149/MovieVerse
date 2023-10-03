

import HeroBanner from "./heroBanner/HeroBanner"
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";
import './style.scss';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Upcoming/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  );
}

export default Home;