import "./Table.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

import Reserve from "../../components/reserve/Reserve";


const Table = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  
  const { data, loading, error } = useFetch(`/spaces/find/${id}`);
  const { dates ,options} = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

 
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const day =  dates && dates[0] ? dayDifference(dates[0].endDate, dates[0].startDate) : 0;
const days = day + 1
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };





  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
      <div className="spaceContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
                  <div className="sliderWrapper">
                <img src={data.photos[slideNumber]}  alt=""  className="sliderImg" />
                </div> 
            {/* <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div> */}
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="spaceWrapper">
          {/* <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="spaceTitle">{data.name}</h1> */}

          <div className="spaceAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Section :{data.section}</span>
           </div>
          <span className="spaceDistance">
            Excellent location {data.section}
          </span>
          <span className="spacePriceHighlight">
            Book a stay over {data.cheapestPrice}TND at this Table and get a free Wifi pass
          </span>
          <div className="spaceImages">
              {data.photos?.map((photo, i) => (
                <div className="spaceImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt="table"
                    className="spaceImg"
                  />
                </div>
              ))}
            </div>
          <div className="spaceDetails">
            <div className="spaceDetailsTexts">
              <h1 className="spaceTitle">{data.title}</h1>
              <p className="spaceDesc">{data.desc}.
              </p>
            </div>
            <div className="spaceDetailsPrice">
            <h1>Perfect for a {days}-night Concentration</h1>
              <span>
                Located in the real heart of Borj Cedria, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
              <b>${days * data.cheapestPrice * options.table}</b> ({days}{" "} day(s))  
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
)}
{openModal && <Reserve setOpen={setOpenModal} spaceId={id}/>}
</div>
);
};

export default Table;;