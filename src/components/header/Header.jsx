import  { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlInfo, SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
import logo from "../../assets/MovieVerse-logo.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      window.scrollTo(0,0);
    },[location]);

    useEffect(()=>{

      const controlNavbar= ()=>{
        // console.log(window.scrollY);

        if(window.scrollY>200){
            if(window.scrollY>lastScrollY && !mobileMenu)
            {
                setShow("hide");
                
            }
            else{
                setShow("show");
            }
            
        }
        else setShow("top");
        setLastScrollY(window.scrollY);
      }

      window.addEventListener("scroll",controlNavbar);

      return ()=>{
        window.removeEventListener("scroll",controlNavbar);
      }

    },[lastScrollY])


    const openSearch=()=>{
      setMobileMenu(false);
      let showSe= !showSearch
      setShowSearch(showSe);
    }

    const openMobileMenu=()=>{
        setMobileMenu(true);
        setShowSearch(false);
    }

    const searchQueryHandler=(e)=>{
      if(e.key==="Enter" && query.length>0){

          navigate(`/search/${query}`);
          setTimeout(()=>{
            setShowSearch(false);
          },1000);

      }
  }

  const navigationHandler = (type)=>{
      
        navigate(`/explore/${type}`);

        setMobileMenu(false);
      
  }

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper>
              <div className="logo" onClick={() =>{navigate("/");}}>
                  <img src={logo} className="logo-img" alt="logo" />
                  <p className="logotext"> MovieVerse </p>
              </div>
              <ul className="menuItems">
                <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
                <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
                <li className="menuItem">
                  <HiOutlineSearch onClick={openSearch}/>
                </li>
              </ul>

              <div className="mobileMenuItems">
              <HiOutlineSearch onClick={openSearch}/>
              {mobileMenu?<VscChromeClose onClick={()=> setMobileMenu(false)} />:<SlMenu onClick={openMobileMenu} />}
              
              
              </div>
          </ContentWrapper>

         {showSearch && <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                    <input 
                        type="text"
                        placeholder="Search for a movie or TV show.... "
                        onKeyUp={searchQueryHandler}
                        onChange={(e)=>setQuery(e.target.value)}
                        />
                    <VscChromeClose onClick={()=> setShowSearch(false)} />
                </div>
            </ContentWrapper>
          </div>}
        </header>
    );
};

export default Header;
