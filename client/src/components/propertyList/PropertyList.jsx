import useFetch from "../../hooks/useFetch";
import "./PropertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/spaces/countByName");

  const images = [
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/337521824_179639658193673_6145315744467817463_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2QmS7TcdyPAAb6y2eVI&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBseEMaHXwZ0yDVRWiavtwontAQj3iQV-ARg9yHjr5Kyw&oe=66264435",
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/336482685_593631762427449_7207247261206900593_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rxz44KmwsKEAb6NysqB&_nc_ht=scontent.ftun1-2.fna&oh=00_AfD0-ZRomwazuqaY29BBNhQqRNufJ0cpq6uCcod5VV3sYg&oe=662663CA",
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/429803161_388676477202664_3547526669096613490_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uT71GKPt8TwAb6z0zYY&_nc_ht=scontent.ftun1-2.fna&oh=00_AfC5yeiMEumPIHqbV0gnDUhUVg0R1bCdmCf56Z-dvy60Nw&oe=662657DB",
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/376269689_294195849984061_175942797411327488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ypqFSXMLY5wAb40_Mb6&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBb1WDC_U_xPb1O9EdX4LvYnxfekvwR8ziDJAn0xvWvBg&oe=662662F9",
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/363402415_269099282493718_7304545927964327713_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oex_aQHCmc8Ab6VOLy9&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBR3xYCKzlx0LnSOs2u0RxqvlX0LEVWMA9whgF7spK2yw&oe=66265CC6",
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/366269617_277228035014176_2123656162444689914_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VXTZ_rDi9noAb7Hpz9D&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBehgTDw9F-JiR6lHuJs1AMnYGx_YSBlRAubzKrUOSmjA&oe=662653C9",
    "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/418274975_360918206645158_3944172039866927739_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y1wT4n88KJ8Ab6NKlJ_&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAvo3by_LKm8SfPHDEhCyOPoCcXs_8_aybBLyfvKbwWlA&oe=662636AF",

  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.name}</h1>
                  <h2>{data[i]?.count} {data[i]?.name}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;














// import "./PropertyList.css";
// import MettingRoom2 from"./../../images/MettingRoom.png";
// import PrivateOffice2 from"./../../images/PrivateOffice.png";
// import PrivateOffice1 from"./../../images/Private office.png";

// const PropertyList = () => {
//   return (
//     <div className="pList">
//       <div className="pListItem">
//         <img
//           src={PrivateOffice1}
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Open space</h1>
//           <h2>7 Tables</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src={PrivateOffice2}
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Private office</h1>
//           <h2>3 Seats</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src={MettingRoom2}
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Meeting room</h1>
//           <h2>2 Tables</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src={PrivateOffice2}
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Royal Table</h1>
//           <h2>Royal View + Climatisation</h2>
//         </div>
//       </div>
//       <div className="pListItem">
//         <img
//           src={PrivateOffice1}
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Normal Table</h1>
//           <h2>2331 hotels</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyList;