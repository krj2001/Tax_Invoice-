
import TaxInvoiceForm from "./TaxInvoiceForm";
import ViewInvoice from "./ViewInvoice";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div>
      {/* <TaxInvoiceForm/>
      <ViewInvoice/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaxInvoiceForm />} />
          <Route path="/view" element={<ViewInvoice />} />
          <Route path="/view/:id" element={<ViewInvoice />} />
        </Routes>
      </BrowserRouter>
   
    </div>

  );
};

export default App;
