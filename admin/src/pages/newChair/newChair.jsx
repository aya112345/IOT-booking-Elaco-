import "./newChair.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { chairInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewChair = () => {
  const [info, setInfo] = useState({});
  const [spaceId, setSpaceId] = useState(undefined);
  // const [tables, setTables] = useState([]);
  const [tables, setTables] = useState();

  const { data, loading, error } = useFetch("/tables");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const tableNumbers = tables.split(",").map((table) => ({ number: table }));
    try {
      await axios.post(`/tables/${spaceId}`, { ...info, tableNumbers });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Table</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {chairInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Tables</label>
                <textarea
                  onChange={(e) => setTables(e.target.value)}
                  placeholder="give comma between Chairs numbers."
                />
              </div>
              <div className="formInput">
                <label>Choose a space</label>
                <select
                  id="spaceId"
                  onChange={(e) => setSpaceId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((space) => (
                        <option key={space._id} value={space._id}>{space.name}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChair;