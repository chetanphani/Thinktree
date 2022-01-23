import React from "react";
import "./contacts.scss";
const Contacts = () => {
  return (
    <>
      <div className="contactsMain">
        <div className="details">
          <div className="details_sub">
            <h1>CONTACT</h1>
            <p>
              sy No54,Forest Layout <br />
              Beside Shanti sadhana <br />
              New Banglore University <br />
              Kanchenhalli Hobli <br />
              Benagalure -560024 <br />
              +91 8727827272
            </p>

            <h2>
              EXCLUSIVELY MARKETED <br /> AND SOLD BY
            </h2>
            <span className="ceyone">ceyone</span>
          </div>
        </div>
        <div className="map">
          <h1>GOOGLE MAP</h1>
        </div>
        <div className="form">
          <form>
            <h2>Enquire</h2>
            <div>
              <input type="text" placeholder="Your Name"></input>
            </div>
            <br />
            <div>
              <input type="text" placeholder="Contact Number"></input>
            </div>
            <br />
            <div>
              <input type="text" placeholder="Email Address"></input>
            </div>
            <br />
            <div>
              <input type="text" placeholder="Message"></input>
            </div>
            <br />

            <button className="buttons">Schedule Tour</button>
          </form>
        </div>
      </div>
     <div className="copyRight">
          <h1>© KRS Park Royal<span> 2021,developed by </span>Ceyone</h1>
      </div>
    </>
  );
};

export default Contacts;
