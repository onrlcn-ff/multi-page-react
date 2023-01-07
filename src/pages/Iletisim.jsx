import React from "react";

function Iletisim() {
  return (
    <div>
      <hr />
      <h2 style={{ padding: "20px" }}>Lorem ipsum dolor sit amet.</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ borderRadius: "15px" }}>
            <img
              src="https://picsum.photos/600/300"
              style={{ borderRadius: "35px", padding: "20px" }}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <img
              src="https://picsum.photos/600/300"
              style={{ borderRadius: "35px", padding: "20px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
