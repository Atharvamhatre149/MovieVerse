import  { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Coming = () => {

  const [endpoint,setEndpoint]=useState('movie');
  const [endpoint1,setEndpoint1]=useState('upcoming');

  const {data,loading}=useFetch(`/${endpoint}/${endpoint1}`); 
  const onTabChange=(tab)=>{
      setEndpoint(tab==='Movies'?'movie':'tv');
      setEndpoint1(tab==='Movies'? 'upcoming' : 'on_the_air');
  }

  return (

    <div className="carouselSection">
      <ContentWrapper>
          <span className='carouselTitle'>Up Coming</span>
          <SwitchTabs data={["Movies","Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default Coming;
