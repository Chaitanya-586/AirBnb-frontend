import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";


import { AuthProvider } from "./context/AuthDataContext.jsx";
import { UserProvider } from "./context/userContext.jsx";
import ListingContext from "./Context/ListingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ListingContext>
          <UserProvider>
            <App />
          </UserProvider>
        </ListingContext>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
