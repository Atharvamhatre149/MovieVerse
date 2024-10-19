import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"; 
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import './style.scss';

const HeroBanner = () => {
    const [background,setBackground]=useState("");
    const [query,setQuery]=useState("");
    const navigate=useNavigate();
    const {url}=useSelector((state)=>state.home);
    const {data}=useFetch("/movie/upcoming");


    useEffect(()=>{
        
    if (url?.backdrop && data?.results) {
        const bg = url.backdrop + data.results[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    } 
            
},[url,data]);



    const searchQueryHandler=(e)=>{
        if(e.key==="Enter" && query.length>0){

            navigate(`/search/${query}`)
        }
    }
  return (
    <div className="heroBanner">
        <div className="backdrop-img">
            <Img src={background}/>
        </div>


        <div className="opacity-layer"></div>
        <ContentWrapper>
          
            <div className="heroBannerContent">
                <span className="title">Welcome.</span>
                <span className="subTitle">Countless Movies, TV shows and people to discover.  Explore now.</span>
                <div className="searchInput">
                    <input 
                        type="text"
                        placeholder="Search for a movie or TV show.... "
                        onKeyUp={searchQueryHandler}
                        onChange={(e)=>setQuery(e.target.value)}
                        />
                    <button onClick={()=>{
                        if(query.length>0){

                            navigate(`/search/${query}`)
                        }
                    }}>Search</button>
                </div>
            </div>
            
        </ContentWrapper>
      
    </div>
  )
}

export default HeroBanner;
