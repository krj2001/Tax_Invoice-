import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const TaxInvoiceForm = () => {
  const [dynamicInputs, setDynamicInputs] = useState([
    { description: "", unitCost: "", quantity: "", amount: "" },
  ]);

  const [staticInputs, setStaticInputs] = useState({
    id: "",
    clientName: "",
    address: "",
    invoiceNumber: "",
    dateOfIssue: "",
    accountHolderName: "",
    accountNumber: "",
  });

  const navigate = useNavigate();

  const handleStaticInputChange = (e) => {
    const { name, value } = e.target;
    setStaticInputs({ ...staticInputs, [name]: value });
  };

  const handleDynamicInputChange = (index, e) => {
    const { name, value } = e.target;
    const newDynamicInputs = [...dynamicInputs];
    newDynamicInputs[index][name] = value;
    setDynamicInputs(newDynamicInputs);
  };

  const handleAddDynamicInput = () => {
    const newDynamicInputs = [
      ...dynamicInputs,
      { description: "", unitCost: "", quantity: "", amount: "" },
    ];
    setDynamicInputs(newDynamicInputs);
  };

  const handleRemoveDynamicInput = (index) => {
    const newDynamicInputs = [...dynamicInputs];
    newDynamicInputs.splice(index, 1);
    setDynamicInputs(newDynamicInputs);
  };

  const handleSubmit = async () => {
    const invoiceData = {
      staticInputs,
      dynamicInputs,
    };

    // Call the backend API to save the invoice data
    try {
      const response = await fetch("http://localhost:3003/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { id } = responseData;


        navigate(`/view/${id}`);
      } else {
        console.error("Failed to save invoice");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <h2>TAX INVOICE</h2>

      <div className="form">
        <h3>BILL DETAILS</h3>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            placeholder="Enter Id"
            value={staticInputs.id}
            onChange={handleStaticInputChange}
          />
        </div>
        <div>
          <label>Client Name:</label>
          <input
            type="text"
            name="clientName"
            placeholder="Enter Client Name"
            value={staticInputs.clientName}
            onChange={handleStaticInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={staticInputs.address}
            onChange={handleStaticInputChange}
          />
        </div>
        <h3>INVOICE DETAILS</h3>
        <div>
          <label>Invoice Number:</label>
          <input
            type="text"
            name="invoiceNumber"
            placeholder="Enter Invoice Number"
            value={staticInputs.invoiceNumber}
            onChange={handleStaticInputChange}
          />
        </div>
        <div>
          <label>Date of Issue:</label>
          <input
            type="date"
            name="dateOfIssue"
            placeholder="Enter Issue Date"
            value={staticInputs.dateOfIssue}
            onChange={handleStaticInputChange}
          />
        </div>
        <h3>BANK DETAILS</h3>
        <div>
          <label>Account Holder Name:</label>
          <input
            type="text"
            name="accountHolderName"
            placeholder="Enter Account Holders Name"
            value={staticInputs.accountHolderName}
            onChange={handleStaticInputChange}
          />
        </div>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            placeholder="Enter Account Number"
            value={staticInputs.accountNumber}
            onChange={handleStaticInputChange}
          />
        </div>

        <h3>PRODUCT DETAILS</h3>
        {dynamicInputs.map((input, index) => (
          <div key={index}>
            <div className="main-div">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={input.description}
                onChange={(e) => handleDynamicInputChange(index, e)}
              />
              <input
                type="text"
                name="unitCost"
                placeholder="Unit Cost"
                value={input.unitCost}
                onChange={(e) => handleDynamicInputChange(index, e)}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={input.quantity}
                onChange={(e) => handleDynamicInputChange(index, e)}
              />
              <input
                type="text"
                name="amount"
                placeholder="Amount"
                value={input.amount}
                onChange={(e) => handleDynamicInputChange(index, e)}
              />
              <button
                onClick={() => handleRemoveDynamicInput(index)}
                className="btn-rem"
              >
                Remove
              </button>

              <button onClick={handleAddDynamicInput} className="btn">
                Add Input
              </button>
            </div>
          </div>
        ))}

        <button onClick={handleSubmit} className="btn-submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TaxInvoiceForm;
