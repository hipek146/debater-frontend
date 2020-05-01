import React, { useState, useEffect } from "react";
import "./Title.css";

export const Title = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const listener = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <div style={{ ...style.title, minHeight: windowHeight }}>
      <div style={{ ...style.filter, minHeight: windowHeight }}>
        <div className="Title-header">
          DEBATY OKSFORDZKIE
          <div className="Title-subheader">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mollis tortor felis, dictum tristique.
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  title: {
    width: "100%",

    background:
      'url("' + process.env.PUBLIC_URL + '/data/images/background.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundBlendMode: "darken",
  },
  filter: {
    width: "100%",
    height: "100%",

    boxSizing: "border-box",
    padding: "72px",
    paddingTop: "250px",

    background: "rgba(40, 40, 40, 0.48)",
  },
};
