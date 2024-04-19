// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { AuthContextProvider } from "./context/AuthContext";
// import { DarkModeContextProvider } from "./context/darkModeContext";

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <DarkModeContextProvider>
//         <App />
//       </DarkModeContextProvider>
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);