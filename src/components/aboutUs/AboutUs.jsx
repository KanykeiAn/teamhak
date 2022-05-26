import React from "react";
import "../aboutUs/AboutUs.css";
import Video from "../assets/homeimage/vid.mp4";
const AboutUs = () => {
  return (
    <>
      <div className="zz">
        <font className="a1" size="5" color="black" face="Courier New">
          HISTORY OF BANG & OLUFSEN
        </font>

        <font className="b1" size="7" color="black" face="Courier New bold">
          Legendary quality since 1995
        </font>

        <font className="c1" size="4" color="black" face="Courier New">
          Since 1995, Bang & Olufsen has been creating iconic teen comics and
          manga to the highest standards of quality and design.
        </font>
      </div>

      <div className="b1b">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className="boss">
        <div className="c1c">
          <img
            className="e1e"
            src="https://mangalib.me/uploads/cover/abimussang/cover/SymP4waEXKIo_250x350.jpg"
            alt=""
          />
          <img
            className="f1f"
            src="https://mangalib.me/uploads/cover/demons-and-strangers/cover/5oaPtVfXpApi_250x350.jpg"
            alt=""
          />
          <img
            className="g1g"
            src="https://mangalib.me/uploads/cover/lingxu-youji/cover/6VBLQmirsoBr_250x350.jpg"
            alt=""
          />
        </div>

        <div className="d1d">
          <img
            className="h1h"
            src="https://mangalib.me/uploads/cover/little-empress/cover/vtWPG0YXp3Xd_250x350.jpg"
            alt=""
          />
          <img
            className="i1i"
            src="https://mangalib.me/uploads/cover/qinaide-baba-emo-kua/cover/ue4cA96P1bNt_250x350.jpg"
            alt=""
          />
          <img
            className="k1k"
            src="https://mangalib.me/uploads/cover/mawang-ui-ttallo-taeeonassseubnida/cover/5h9bT68pSGo7_250x350.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="a2a">
        <img
          className="img2"
          src="https://i.ytimg.com/vi/mr2B4tAn9tk/maxresdefault.jpg"
          alt=".."
        />
        <div className="e2e">
          <font className="c2c" size="5" color="black" face="Courier New bold">
            Legendary quality since 1995
          </font>

          <font className="b2b" size="4" color="black" face="Courier New">
            After the deaths of his parents and sister, reclusive high school
            student Cha Hyun-soo is left all alone and forced to move into a
            small apartment in the shabby Green Home complex. Seeing no reason
            to live on, the guy decides to commit suicide, but suddenly some
            people begin to turn into aggressive monsters. Hyun-soo will have to
            overcome himself and get to know his new neighbors better in order
            to jointly confront an unexpected threat.
          </font>
        </div>
      </div>

      <div className="a3a">
        <img
          className="img3"
          src="https://ixbt.online/live/topics/preview/00/02/26/42/448651ecf8.jpg"
          alt=".."
        />
        <div className="e3e">
          <font className="c3c" size="5" color="black" face="Courier New bold">
            Legendary quality since 1995
          </font>

          <font className="b3b" size="4" color="black" face="Courier New">
            After the deaths of his parents and sister, reclusive high school
            student Cha Hyun-soo is left all alone and forced to move into a
            small apartment in the shabby Green Home complex. Seeing no reason
            to live on, the guy decides to commit suicide, but suddenly some
            people begin to turn into aggressive monsters. Hyun-soo will have to
            overcome himself and get to know his new neighbors better in order
            to jointly confront an unexpected threat.
          </font>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
