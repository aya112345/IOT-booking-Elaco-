import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair ,faPerson,faCalendarDays,  faWifi,faMugHot ,faCookieBite,faCouch,
  faCircleInfo,} from '@fortawesome/free-solid-svg-icons'
import "./Header.css";

import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

import { AuthContext } from "../../context/AuthContext";
const Header= ({ type }) => {
  
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    table: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });

    navigate("/spaces", { state: { destination, dates, options } });
  };

    return (
      <div className="header">
         <div className={ type === "list" ? "headerContainer listMode" : "headerContainer" } >
        <div className="headerList">
          <div className="headerListItem active">
          <FontAwesomeIcon icon={faChair} />
            
            <span>Stays</span>
          </div>

          <div className="headerListItem">
          <FontAwesomeIcon icon={faWifi} />
           
            <span>wifi access</span>
          </div>

          <div className="headerListItem">
          <FontAwesomeIcon icon={faMugHot} />
          
            <span>Drinks</span>
          </div>
        
          <div className="headerListItem">
          <FontAwesomeIcon icon={faCookieBite} />
            <span>buy snacs</span>
          </div>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faCircleInfo} />
            <span>Informations</span>
          </div>
        </div>
        {type !== "list" && (
          <>
        <h1 className="headerTitle">
        Welcome to Elaco CoWorking Your Productive Space Awaits!
            </h1>

            <p className="headerDescreption">
            Reserve Your Seat Now and Dive into a World of Creativity and Collaboration.<br />
            Enjoy a productive and collaborative work environment.
            </p>

            
            {!user && <button className="headerBtn">Sign in / Register</button>}

            <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCouch} className="headerIcon"/>
              <input
                  type="text"
                  placeholder="Where do you want to reserve?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
           <span   onClick={() => setOpenDate(!openDate)} className="headerSearchText"> 
           {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                </span>
                
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
           
              </div>

              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
              <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                // >{`${options.adult} adult · ${options.children} children · ${options.table} table`}</span>      
                >{`${options.adult} person ·  ${options.table} table`}</span>      

                {openOptions && (       
                <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button  disabled={options.adult <= 1}className="optionCounterButton" onClick={() => handleOption("adult", "d")}>  - </button>
                        <button className="optionCounterNumber" >  {options.adult}</button>
                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>  + </button>
                      </div>
                    </div>

                    {/* <div className="optionItem">
                      <span className="optionText">children</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton"  disabled={options.children <= 0} onClick={() => handleOption("children", "d")} >  - </button>
                        <button className="optionCounterNumber" >  {options.children} </button>
                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>  + </button>
                      </div>
                    </div> */}

                    <div className="optionItem">
                      <span className="optionText">table</span>
                      <div className="optionCounter">
                        <button  disabled={options.table <= 1}className="optionCounterButton" onClick={() => handleOption("table", "d")}>  - </button>
                        <button className="optionCounterNumber" >  {options.table}</button>
                        <button className="optionCounterButton" onClick={() => handleOption("table", "i")}>  + </button>
                      </div>
                    </div>


                </div>
                   )}
                 </div> 
              <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>search</button>
              </div> 

              </div>

              </>
        )}
        </div>
      </div>
    );
  };
  
  export default Header;