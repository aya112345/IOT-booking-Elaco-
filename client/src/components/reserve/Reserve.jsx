import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Reserve = ({ setOpen, spaceId }) => {
  const [selectedTables, setSelectedTables] = useState([]);
  const { data, loading, error } = useFetch(`/spaces/table/${spaceId}`);
  const { dates } = useContext(SearchContext);


  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedTables(
      checked
        ? [...selectedTables, value]
        : selectedTables.filter((item) => item !== value)
    );
  };
// console.log(selectedTables)
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedTables.map((tableId) => {
          const res = axios.put(`/tables/availability/${tableId}`, { dates: alldates });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (  <div className="reserve">
  <div className="rContainer">
    <FontAwesomeIcon
      icon={faCircleXmark}
      className="rClose"
      onClick={() => setOpen(false)}
    />
        <span>Select your place</span>
 
    {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.tableNumbers.map((tableNumber) => (
                <div className="room">
                  <label>{tableNumber.number}</label>
                  <input
                    type="checkbox"
                    value={tableNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(tableNumber)}
                  />
 </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;