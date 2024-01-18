import "../styles/pagesStyles/DonatePage.css";
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import donateHeaderImage from "../assets/donateus.jpg";
import qr from "../assets/upi.jpg";
import pes_qr from "../assets/pes_qr.jpeg";
import razorpayIcon from "../assets/razorpay.svg";

function DonatePage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <PageHeader title="Donate Us" image={donateHeaderImage} />

      <div className="payment-methods">
        <div className="upi">
          <h3>UPI</h3>
          <img src={qr}></img>
          <p>
            Pehchaan Ek Safar<br></br>9463737258@okbizaxis
          </p>
          <p>Bank charges: Rs. 0.0</p>
          <button onClick={toggleModal} className="btn-modal">
            Click Here
          </button>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <img src={pes_qr}></img>
                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bank">
          <h3>Bank Transfer</h3>
          <p>
            A/c Number: 38276019119<br></br>Name: Pehchaan Ek Safar<br></br>Bank
            Name: SBI<br></br>IFSC code: SBIN0013181
          </p>
          <p>Bank charges: Rs. 0.0</p>
          <button onClick={toggleModal} className="btn-modal">
            Click Here
          </button>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <img src={pes_qr}></img>
                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="upi">
          <h3>Razor Pay</h3>
          <img src={razorpayIcon} className="razorpay-icon"></img>
          <p>
            Pehchaan Ek Safar<br></br>9463737258@okbizaxis
          </p>
          <p>Bank charges: Rs. 0.0</p>
          <a href="https://razorpay.com/payment-button/pl_K9P2tcsWaKFJNo/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button">
            <button className="razor-btn">Click Here</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default DonatePage;
