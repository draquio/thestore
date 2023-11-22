import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./context/filters.jsx";
import { CardProvider } from "./context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </CardProvider>
);
