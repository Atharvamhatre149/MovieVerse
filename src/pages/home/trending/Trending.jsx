import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {

  const [endpoint,setEndpoint]=useState('movie')

  const {data,loading}=useFetch(`/${endpoint}/now_playing`); 
  const onTabChange=(tab)=>[
      setEndpoint(tab==='Movies'?'movie':'tv')
  ]
  
  return (

    <div className="carouselSection">
      <ContentWrapper>
          <span className='carouselTitle'>Trending</span>
          <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default Trending;
