import React, { useEffect, useState } from "react"; //useEffet-API Fetch & useState-to store fetched Data.
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormTextarea,
} from "@coreui/react";
import Axios from "axios";
import "./registration.css";

function Registration() {
  const [users, setUsers] = useState([]); //empty array for storing json values.
  const [id, setId] = useState("");
  const [ClientName, setClientName] = useState("");
  const [Address, setAddress] = useState("");
  const [InvoiceNumber, setInvoiceNumber] = useState("");
  const [DateOfIssue, setDateOfIssue] = useState("");
  const [Description, setDescription] = useState("");
  const [UnitCost, setUnitCost] = useState("");
  const [Qty, setQty] = useState("");
  const [Amount, setAmount] = useState("");
  const [AccountHolederName, setAccountHolederName] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  // Get User From API
  const loadData = async () => {
    const response = await Axios.get("http://localhost:3003/users");
    console.log(response.data);
    setUsers(response.data);
  };

  // ADD user
  const AddUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3003/users", {
      id,
      ClientName,
      Address,
      InvoiceNumber,
      DateOfIssue,
      Description,
      UnitCost,
      Qty,
      Amount,
      AccountHolederName,
      AccountNumber,
    })
      .then(() => {
        setId("");
        setClientName("");
        setAddress("");
        setInvoiceNumber("");
        setDateOfIssue("");
        setDescription("");
        setUnitCost("");
        setQty("");
        setAmount("");
        setAccountHolederName("");
        setAccountNumber("");
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      loadData();
    }, 500);
    // console.log(id, Name);
  };

  return (
    <div className="form-page">
      <CForm className="form-contents">
        <h4 className="form-h4">BILL DETAILS:</h4>
        <CFormInput
          type="text"
          label="Id"
          placeholder="Enter Id"
          //   text="Must be 8-20 characters long."
          className="form-input"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <CFormInput
          type="text"
          label="Client Name"
          placeholder="Enter Name"
          //   text="Must be 8-20 characters long."
          className="form-input"
          value={ClientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <CFormTextarea
          label="Address"
          rows={3}
          className="form-input"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        ></CFormTextarea>
        <h4 className="form-h4">INVOICE DETAILS:</h4>

        <CFormInput
          type="text"
          label="Invoice Number"
          placeholder="Enter Invoice Number"
          className="form-input"
          value={InvoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        <CFormInput
          type="date"
          id=""
          label="Date of Issue"
          className="form-input"
          value={DateOfIssue}
          onChange={(e) => setDateOfIssue(e.target.value)}
        />
        <CFormInput
          type="text"
          label="Description"
          placeholder="Enter Product Description"
          className="form-input"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <CFormInput
          type="text"
          label="Unit Cost"
          placeholder="Enter Unit Cost"
          className="form-input"
          value={UnitCost}
          onChange={(e) => setUnitCost(e.target.value)}
        />
        <CFormInput
          type="text"
          label="QTY/HR Rate"
          placeholder="Enter QTY/HR Rate"
          className="form-input"
          value={Qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <CFormInput
          type="text"
          label="Amount"
          placeholder="Enter Amount Details"
          className="form-input"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <h4 className="form-h4">BANK ACCOUNT DETAILS:</h4>
        <CFormInput
          type="text"
          label="Account Holder Name"
          placeholder="Enter Account Holder Name"
          className="form-input"
          value={AccountHolederName}
          onChange={(e) => setAccountHolederName(e.target.value)}
        />
        <CFormInput
          type="text"
          label="Account Number"
          placeholder="Enter Account Number"
          className="form-input"
          value={AccountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <CButton onClick={AddUser} className="Addbtn">
          Add Details
        </CButton>
      </CForm>
    </div>
  );
}
export default Registration;
