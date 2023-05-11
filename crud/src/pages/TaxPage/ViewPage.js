import React from "react";
import './ViewPage.css'

function ViewPage(){

    return( 
        
        <div className="view-page">
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
                <h4>BILLED TO</h4>
                <p>Client Name</p>
                <p>Address</p>
            </div>
            <div className="main-div">
                <div className="table-left">
                    <h2>Invoice</h2><br/>
                    <h4>INVOICE NUMBER:</h4>
                    <p></p>
                    <h4>DATE OF ISSUE:</h4>
                    <p></p>
                </div>
                <div className="table-right">
                    <table id="customers">
                        <tr>
                            <th>Description</th>
                            <th>Unit Cost</th>
                            <th>QTY/HR Rate</th>
                            <th>Amount</th>
                        </tr>
                        <tr>
                            <td>Jana</td>
                            <td>Jana</td>
                            <td>Jana</td>
                            <td>Jana</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="main-div">
                <div className="left-details">
                    <h4>TERMS:</h4>
                    <p>Please pay invoice by:</p>
                </div>
                <div className="right-details">
                    <h4>BANK ACCOUNT DETAILS:</h4>
                    <p>Account Holder:</p>
                    <p>Account Number:</p>
                    <p>ABA rtn:025689741</p>
                    <p>Wire rtn:056879451</p>
                </div>
            </div>
        </div>

    )
}
export default ViewPage