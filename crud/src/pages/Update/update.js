import React, { useEffect, useState } from "react"; //useEffet-API Fetch & useState-to store fetched Data.
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormTextarea,
} from "@coreui/react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  // const [users, setUsers] = useState([])
  const [updated, setUpdated] = useState({
    id: "",
    ClientName: "",
    Address: "",
    InvoiceNumber: "",
    DateOfIssue: "",
    Description: "",
    UnitCost: "",
    Qty: "",
    Amount: "",
    AccountHolederName: "",
    AccountNumber: "",
  });
  const params = useParams();

  useEffect(() => {
    // loadData();
    Axios.get(`http://localhost:3003/users/${params?.id}`)
      .then((res) => {
        console.log(res?.data);
        setUpdated((pre) => ({
          ...pre,
          id: res?.data?.id,
          ClientName: res?.data?.ClientName,
          Address: res?.data?.Address,
          InvoiceNumber: res?.data?.InvoiceNumber,
          DateOfIssue: res?.data?.DateOfIssue,
          Description: res?.data?.Description,
          UnitCost: res?.data?.UnitCost,
          Qty: res?.data?.Qty,
          Amount: res?.data?.Amount,
          AccountHolederName: res?.data?.AccountHolederName,
          AccountNumber: res?.data?.AccountNumber,
        }));
      })
      .catch(() => {
        console.log("fails", params);
      });
  }, []);

  //update user
  const updateUser = () => {
    console.log(
      updated.id,
      updated.ClientName,
      updated.Address,
      updated.InvoiceNumber,
      updated.DateOfIssue,
      updated.Description,
      updated.UnitCost,
      updated.Qty,
      updated.Amount,
      updated.AccountHolederName,
      updated.AccountNumber
    );
    Axios.put(`http://localhost:3003/users/${updated.id}`, {
      id: updated.id,
      ClientName: updated.ClientName,
      Address: updated.Address,
      InvoiceNumber: updated.InvoiceNumber,
      DateOfIssue: updated.DateOfIssue,
      Description: updated.Description,
      UnitCost: updated.UnitCost,
      Qty: updated.Qty,
      Amount: updated.Amount,
      AccountHolederName: updated.AccountHolederName,
      AccountNumber: updated.AccountNumber,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {}, 500);
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
          disabled={true}
          className="form-input"
          value={updated?.id}
          onChange={(e) => setUpdated({ ...updated, id: e.target.value })}
        />
        <CFormInput
          type="text"
          label="Client Name"
          placeholder="Enter Name"
          //   text="Must be 8-20 characters long."
          className="form-input"
          value={updated?.ClientName}
          onChange={(e) =>
            setUpdated({ ...updated, ClientName: e.target.value })
          }
        />
        <CFormTextarea
          label="Address"
          rows={3}
          className="form-input"
          value={updated?.Address}
          onChange={(e) => setUpdated({ ...updated, Address: e.target.value })}
        ></CFormTextarea>
        <h4 className="form-h4">INVOICE DETAILS:</h4>

        <CFormInput
          type="text"
          label="Invoice Number"
          placeholder="Enter Invoice Number"
          className="form-input"
          value={updated?.InvoiceNumber}
          onChange={(e) =>
            setUpdated({ ...updated, InvoiceNumber: e.target.value })
          }
        />
        <CFormInput
          type="date"
          id=""
          label="Date of Issue"
          className="form-input"
          value={updated?.DateOfIssue}
          onChange={(e) =>
            setUpdated({ ...updated, DateOfIssue: e.target.value })
          }
        />
        <CFormInput
          type="text"
          label="Description"
          placeholder="Enter Product Description"
          className="form-input"
          value={updated?.Description}
          onChange={(e) =>
            setUpdated({ ...updated, Description: e.target.value })
          }
        />
        <CFormInput
          type="text"
          label="Unit Cost"
          placeholder="Enter Unit Cost"
          className="form-input"
          value={updated?.UnitCost}
          onChange={(e) => setUpdated({ ...updated, UnitCost: e.target.value })}
        />
        <CFormInput
          type="text"
          label="QTY/HR Rate"
          placeholder="Enter QTY/HR Rate"
          className="form-input"
          value={updated?.Qty}
          onChange={(e) => setUpdated({ ...updated, Qty: e.target.value })}
        />
        <CFormInput
          type="text"
          label="Amount"
          placeholder="Enter Amount Details"
          className="form-input"
          value={updated?.Amount}
          onChange={(e) => setUpdated({ ...updated, Amount: e.target.value })}
        />
        <h4 className="form-h4">BANK ACCOUNT DETAILS:</h4>
        <CFormInput
          type="text"
          label="Account Holder Name"
          placeholder="Enter Account Holder Name"
          className="form-input"
          value={updated?.AccountHolederName}
          onChange={(e) =>
            setUpdated({ ...updated, AccountHolederName: e.target.value })
          }
        />
        <CFormInput
          type="text"
          label="Account Number"
          placeholder="Enter Account Number"
          className="form-input"
          value={updated?.AccountNumber}
          onChange={(e) =>
            setUpdated({ ...updated, AccountNumber: e.target.value })
          }
        />
        <CButton onClick={updateUser} className="Addbtn">
          Update User
        </CButton>
      </CForm>
    </div>
  );
}
export default Update;
