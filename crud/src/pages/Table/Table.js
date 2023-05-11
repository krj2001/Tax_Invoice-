import React, { useEffect, useState } from "react"; //useEffet-API Fetch & useState-to store fetched Data.
import { useNavigate } from "react-router-dom";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
} from "@coreui/react";
import Axios from "axios";
import "./Table.css";
import TableButton from "../button/button";

function Table() {
  const [users, setUsers] = useState([]); //empty array for storing json values.
  const navigate = useNavigate();

  // Get User From API
  const loadData = async () => {
    const response = await Axios.get("http://localhost:3003/users");
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // deleteUser
  const deleteUser = (id) => {
    console.log(id);
    alert("Sure want to delete");
    Axios.delete(`http://localhost:3003/users/${id}`);
    setTimeout(() => {
      loadData();
    }, 500);
  };

  const updateUser = (id) => {
    navigate(`/update/${id}`);
  };
  const updateTable = (id, type) => {
    console.log("Jana")
    if (type == "delete") deleteUser(id);
    else updateUser(id);
  };

  return (
    <div>
      <h2>REGISTRATION DETAILS</h2>
      <CTable className="table">
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Client Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address</CTableHeaderCell>
            <CTableHeaderCell scope="col">Invoice Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date Of Issue</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
            <CTableHeaderCell scope="col">Unit Cost</CTableHeaderCell>
            <CTableHeaderCell scope="col">Qty</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col">Account Holder Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Account Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {users.map((e) => (
            <CTableRow color="light">
              <CTableHeaderCell scope="row">{e.id}</CTableHeaderCell>
              <CTableDataCell>{e.ClientName}</CTableDataCell>
              <CTableDataCell>{e.Address}</CTableDataCell>
              <CTableDataCell>{e.InvoiceNumber}</CTableDataCell>
              <CTableDataCell>{e.DateOfIssue}</CTableDataCell>
              <CTableDataCell>{e.Description}</CTableDataCell>
              <CTableDataCell>{e.UnitCost}</CTableDataCell>
              <CTableDataCell>{e.Qty}</CTableDataCell>
              <CTableDataCell>{e.Amount}</CTableDataCell>
              <CTableDataCell>{e.AccountHolederName}</CTableDataCell>
              <CTableDataCell>{e.AccountNumber}</CTableDataCell>
              <CTableDataCell>
                {/* <CButton className="editbtn" onClick={() => {
                    updateUser(e.id);
                  }}>Edit</CButton> */}
                
               <div className="maindiv">
               <div className="editbtn">
               <TableButton
                  color={"primary"}
                  updateTable={updateTable}
                  id={e.id}
                />
               </div>

                <div className="delbtn">
                <TableButton
                  color={"danger"}
                  updateTable={updateTable}
                  id={e.id}
                />

                </div>
                </div>
                

                {/* <CButton
                  color="danger"
                  onClick={() => {
                    deleteUser(e.id);
                  }} */}
                {/* > */}
                  {/* Delete
                </CButton> */}
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}

export default Table;
