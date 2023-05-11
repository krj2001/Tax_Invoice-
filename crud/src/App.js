import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./pages/Table/Table";
import Update from "./pages/Update/update";
import UserRegistration from "./pages/UserRegistration/registration";
import Navigation from "./pages/Navigation/navigation";
import ViewPage from "./pages/TaxPage/ViewPage";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/table" element={<Table />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/viewpage" element={<ViewPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
