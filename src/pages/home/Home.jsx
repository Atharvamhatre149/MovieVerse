

import HeroBanner from "./heroBanner/HeroBanner"
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Coming from "./coming/Coming";
import './style.scss';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Coming/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  );
}

export default Home;