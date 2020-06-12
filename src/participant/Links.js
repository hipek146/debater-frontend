import React, { useState } from "react";
import goTop from "assets/images/goTop.png";
import { HashLink } from "react-router-hash-link";

export const Links = (props) => {
  const { links, edit, setEdit } = props;

  return edit ? (
    <LinksEdit {...props} />
  ) : (
    <div style={style.main}>
      <div style={style.leftWrapper}>
        <div style={style.left}>
          {links &&
            links.map((link, i) => (
              <a style={style.link} href={link.href} key={i}>
                {link.name}
              </a>
            ))}
        </div>
      </div>
      <div style={style.right}>
        <HashLink to="/">
          <img src={goTop} alt="w górę" onClick={() => window.scrollTo(0, 0)} />
        </HashLink>
      </div>
    </div>
  );
};

const LinksEdit = (props) => {
  const { setEdit } = props;
  const [links, setLinks] = useState(props.links);
  return (
    <>
      <div style={style.main}>
        <div style={style.leftWrapper}>
          <div style={style.left}>
            {links &&
              links.map((link, i) => (
                <div key={i}>
                  <input
                    value={link.name}
                    onChange={(event) => {
                      let array = links;
                      array[i].name = event.target.value;
                      setLinks([...array]);
                    }}
                  />
                  <input
                    value={link.href}
                    onChange={(event) => {
                      let array = links;
                      array[i].href = event.target.value;
                      setLinks([...array]);
                    }}
                  />
                  <div className="App-button">USUŃ</div>
                </div>
              ))}
            <div className="App-button">DODAJ LINK</div>
          </div>
        </div>
      </div>
      <div className="App-button" onClick={() => setEdit(false)}>
        COFNIJ
      </div>
      <div className="App-button">ZAPISZ INFORMACJE</div>
    </>
  );
};

const style = {
  main: {
    display: "flex",
    flexWrap: "wrap",
  },
  leftWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
  },
  link: {
    fontWeight: "600",
    fontSsize: "14px",
    lineHeight: "20px",

    color: "#1A3884",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    marginLeft: "auto",
  },
};
