import React, { useEffect } from "react";
import { CButton } from "@coreui/react";
import "./button.css";

function TableButton(props) {
  return (
    <div>
      <CButton
        className={`btn ${props.color == "danger" ? "dangerbtn" : ""}`}
        color={props?.color}
        onClick={() => {
          props?.updateTable(
            props?.id,
            props?.color == "primary" ? "edit" : "delete"
          );
        }}
      >
        {props?.color == "primary" ? "EDIT" : "DELETE"}
      </CButton>
    </div>
  );
}
export default TableButton;
