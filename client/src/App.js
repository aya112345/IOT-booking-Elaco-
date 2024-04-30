import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Table from "./pages/table/Table";
import Login from "./pages/login/Login";
import ReservationKey from './pages/reservationKey/ReservationKey';
import PaymentForm from "./pages/PaymentForm/PaymentForm";

const stripePromise = loadStripe('pk_test_51PB3LfEZsOcUZ4Mx3aLofDxa2edbIP3SMEHXaCKXxfwcy3xCyhvLTfrhFl7gAOCEKmuSKcgJi8AkZj9PoX5fdJRX00iS9MFqfh');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Spaces" element={<List />} />
        <Route path="/Spaces/:id" element={<Table />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ReservationKey" element={<ReservationKey />} />
        <Route
          path="/PaymentForm"
          element={
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./pages/home/Home";
// import List from "./pages/list/List";
// import Table from "./pages/table/Table";
// import Login from "./pages/login/Login";
// import ReservationKey from './pages/reservationKey/ReservationKey';

// import PaymentForm from "./pages/PaymentForm/PaymentForm";


// function App() {

//   return (
//     <BrowserRouter>
//      <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/Spaces" element={<List/>}/>
//       <Route path="/Spaces/:id" element={<Table/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/ReservationKey" element={<ReservationKey/>}/>

//       <Route path="/PaymentForm" element={<PaymentForm/>}/>

//      </Routes>
//   </BrowserRouter>
//   );
// }

// export default App;
