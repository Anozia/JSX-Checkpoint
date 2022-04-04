import React from "react";

const Checkpoint = () => {
  <div>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red"> Kelechi </h1> <br />
      <img src="/imageInSrc.jpg" alt="img" />
      <br />
      <img src="/imageInPublic.jpg" alt="img" />
    </div>{" "}
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>{" "}
  </div>;
};

export default Checkpoint;
