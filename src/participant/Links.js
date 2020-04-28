import React from "react";
import goTop from "assets/images/goTop.png";
import { HashLink } from "react-router-hash-link";

export const Links = (props) => {
  //const {teams} = props;

  const links = [
    {
      name: "PLIK 1",
      href: "http://www.google.pl",
    },
    {
      name: "PLIK 2",
      href: "http://www.google.pl",
    },
    {
      name: "PLIK 3",
      href: "http://www.google.pl",
    },
  ];

  return (
    <div style={style.main}>
      <div style={style.leftWrapper}>
        <div style={style.left}>
          {links.map((link, i) => (
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

const style = {
  main: {
    display: "flex",
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
  },
};
