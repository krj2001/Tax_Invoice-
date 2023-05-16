import { useEffect, useState, useRef  } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ReactToPdf from "react-to-pdf";
import "./ViewInvoice.css";

function ViewInvoice() {
  const [invoices, setInvoices] = useState([]);
  const {id } = useParams();
  const pdfRef = useRef();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch("http://localhost:3003/users");
        // const response = await fetch(`http://localhost:3003/users/${id}`);
        if (response.ok) {
          const invoiceData = await response.json();
          setInvoices(invoiceData);
        } else {
          console.error("Failed to fetch invoices");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchInvoices();
  }, [id]);

  return (
    <ReactToPdf targetRef={pdfRef} filename="invoice.pdf">
  {({ toPdf }) => (
    <div className="view-page" ref={pdfRef}>
       <p>Invoice ID: {id}</p>
      {invoices.map((user) => (
        <div key={user.id}>
          <h1>Your Company Name</h1>
          <div className="main-div">
            <div className="left-div">
              <p>Building name</p>
              <p>123 your street</p>
              <p>City,State,Country</p>
              <p>Zipcode</p>
            </div>
            <div className="right-div">
              <p>9876543210</p>
              <p>your@email.com</p>
              <p>your@website</p>
            </div>
          </div>
          <div className="bill-sec">
            <h4>BILLED TO </h4>
            <p>
              Client Name: <b>{user.staticInputs.clientName}</b>
            </p>
            <p>
              Address: <b>{user.staticInputs.address}</b>
            </p>
          </div>
          <div className="main-div">
            <div className="table-left">
              <h2 className="invoice">Invoice</h2>
              <br />
              <h4>INVOICE NUMBER: {user.staticInputs.invoiceNumber}</h4>
              <p></p>
              <h4>DATE OF ISSUE: {user.staticInputs.dateOfIssue}</h4>
              <p></p>
            </div>

            <div className="table-right">
              <table id="customers">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Unit Cost</th>
                    <th>QTY/HR Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                {user.dynamicInputs.map((input, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{input.description}</td>
                      <td>{input.unitCost}</td>
                      <td>{input.quantity}</td>
                      <td>{input.amount}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div className="main-div">
            <div className="left-details">
              <h4>TERMS:</h4>
              <p>
                Please pay invoice by:<b>{user.staticInputs.dateOfIssue}</b>
              </p>
            </div>
            <div className="right-details">
              <h4>BANK ACCOUNT DETAILS:</h4>
              <p>
                Account Holder: <b>{user.staticInputs.accountHolderName}</b>
              </p>
              <p>
                Account Number: <b>{user.staticInputs.accountNumber}</b>
              </p>
              <p>ABA rtn:025689741</p>
              <p>Wire rtn:056879451</p>
            </div>
      
          </div>
          <button onClick={toPdf}>Print as PDF</button>
          <hr />
        </div>
      ))}
     

    </div>
     )}
     
     </ReactToPdf>
     
     
     
  );
}
export default ViewInvoice;


