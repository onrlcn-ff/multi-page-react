import React from "react";

function About() {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div
            className="col-md-4"
            style={{ padding: "40px", textAlign: "left" }}
          >
            <img
              src="https://picsum.photos/300/300"
              style={{ borderRadius: "10px" }}
              alt=""
            />
          </div>
          <div className="container col-md-4">
            <div className="row">
              <div className="col-md-4" style={{ padding: "40px" }}>
                <img
                  src="https://picsum.photos/100/100"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
              </div>
              <div className="col-md-4" style={{ padding: "40px" }}>
                <img
                  src="https://picsum.photos/100/100"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" style={{ padding: "40px" }}>
                <img
                  src="https://picsum.photos/100/100"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
              </div>
              <div className="col-md-4" style={{ padding: "40px" }}>
                <img
                  src="https://picsum.photos/100/100"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{ padding: "40px", textAlign: "left" }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              perspiciatis ipsum suscipit asperiores rerum. Hic minus inventore
              voluptatibus earum ex rem reprehenderit sit voluptatem a fugiat,
              nihil quod laudantium obcaecati assumenda nemo quo nulla aliquam
              odio error at accusamus repellat! Sint qui alias rem, quaerat
              tempore ut dolorum sit pariatur!
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
