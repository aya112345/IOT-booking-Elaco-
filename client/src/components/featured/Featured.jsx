import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/spaces/countByType?TYPES=Private office,Meeting room,Open space"
  );
console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/418274975_360918206645158_3944172039866927739_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y1wT4n88KJ8Ab6NKlJ_&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAvo3by_LKm8SfPHDEhCyOPoCcXs_8_aybBLyfvKbwWlA&oe=662636AF"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Private office</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/417699051_360918219978490_8511911135489813174_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GN9Fn4ngGl4Ab7kXAp2&_nc_ht=scontent.ftun1-2.fna&oh=00_AfCO24scPaTGdQT-1hT57w7OicNgQ6BbkavLjcuZqfjKoA&oe=662658D3"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Meeting room</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/418093701_360918456645133_6361436628973168022_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kq8PVxTo5AAAb7MvpJx&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAz23m_3WLBwtTNhws65R0nX-1QtRfDOVTQV69g2nCLFg&oe=6626357B"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Open space</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;




















// import "./Featured.css";
// import PrivateOffice1 from"./../../images/Private office.png";
// // import MeetingRoom from"./../../images/Meeting room.png";
// import MettingRoom2 from"./../../images/MettingRoom.png";
// // import PrivateOffice2 from"./../../images/PrivateOffice.png";

// import OpenSpace from"./../../images/OpenSpace.png";

// const Featured = () => {
//   return (
//     <div className="featured">
        
//       <div className="featuredItem">
//         <img
//           src={PrivateOffice1} 
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Private office</h1>
//           <h2>2 properties</h2>
//         </div>
//       </div>
      
//       <div className="featuredItem">
//         <img
//         src={OpenSpace}
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Open space</h1>
//           <h2>3 properties</h2>
//         </div>
//       </div>
//       <div className="featuredItem">
//         <img
//         src={MettingRoom2}
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Meeting room</h1>
//           <h2>3 properties</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;