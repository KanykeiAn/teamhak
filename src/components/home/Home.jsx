import React from "react";
import "../home/Home.css";
import Video from "../assets/homeimage/v.mp4";
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Home = () => {
  return (
    <>
      <Splide className="splide">
        <SplideSlide>
          <img
            src="https://vsthemes.org/uploads/posts/2021-09/1632784059_1167804.jpg"
            alt="Image 1"
            style={{
              maxWidth: "100%",
            }}
          />
        </SplideSlide>

        <SplideSlide>
          <img
            src="https://a-static.besthdwallpaper.com/dzyudzyutsu-kaysen-satoru-godzyo-oboi-1920x1080-77018_48.jpg"
            alt="Image 2"
            style={{
              maxWidth: "100%",
            }}
          />
        </SplideSlide>

        <SplideSlide>
          <img
            src="https://i.artfile.ru/1927x1085_861451_[www.ArtFile.ru].jpg"
            alt="Image 3"
            style={{
              maxWidth: "100%",
            }}
          />
        </SplideSlide>

        <SplideSlide>
          <img
            src="https://i.pinimg.com/originals/0d/17/d9/0d17d96f0e9521950729d4cff602f07a.jpg"
            alt="Image 4"
            style={{
              maxWidth: "100%",
            }}
          />
        </SplideSlide>
      </Splide>

      <Box
        sx={{
          flexWrap: { xs: "wrap", sm: "wrap" },
          width: "100%",
        }}
      >
        <div className="uuu">
          <img
            className="aaa"
            src="https://ranobelib.me/uploads/cover/baegjagga-dolyeonnim-eun-heugmabeobsa/cover/LWNspoBkk1Lv_250x350.jpg"
            alt="manga"
          />
          <img
            className="bbb"
            src="https://mangalib.me/uploads/cover/fairy-kings-daily-life/cover/cover_250x350.jpg"
            alt="manga"
          />
          <img
            className="ccc"
            src="https://ranobelib.me/uploads/cover/manadeshi-ni-uragirarete-shinda-ossan-yuusha-shijou-saikyou-no-maou-toshite-ikikaeru-novel/cover/OLO2meoRpG6m_250x350.jpg"
            alt="manga"
          />
        </div>
      </Box>

      <div className="ddd">
        <font size="4" color="black" face="Courier New">
          SINCE 2000
        </font>
      </div>

      <div className="eee">
        <font size="6" color="black" face="Courier New">
          Your senses. Set free.
        </font>
      </div>

      <Box
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        spacing={1}
      >
        <div className="fff">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </Box>
      <div className="ggg">
        <font className="h1" size="6" color="black" face="Courier New bold">
          Everything we’ve done has leds to this moment.
        </font>

        <font className="h2" size="4" color="black" face="Courier New">
          Visions. Decisions. Breakthroughs. Almost a century of them. And it’s
          led us all here: a moment to see, hear and feel the world like never
          before. So tune in, turn up and settle down – we’ve got stories to
          tell.
        </font>
      </div>

      <div className="iii">
        <img
          className="kkk"
          src="https://ranobelib.me/uploads/cover/drakonya-dusa-muzestvo/cover/W8dd6EuAaZix_250x350.jpg"
          alt="manga"
        />
        <img
          className="lll"
          src="https://mangalib.me/uploads/cover/mawang-ui-ttallo-taeeonassseubnida/cover/5h9bT68pSGo7_250x350.jpg"
          alt="manga"
        />
        <img
          className="mmm"
          src="https://ranobelib.me/uploads/cover/horizon-event-novel/cover/NCHPs010ZlKl_250x350.jpg"
          alt="manga"
        />
      </div>

      <div className="ppp">
        <img
          className="vvv"
          src="https://abrakadabra.fun/uploads/posts/2022-02/1645765952_26-abrakadabra-fun-p-fon-klinok-rassekayushchii-demonov-bez-per-38.jpg"
          alt="manga"
        />
        <img
          className="rrr"
          src="https://abrakadabra.fun/uploads/posts/2022-03/1646997176_2-abrakadabra-fun-p-zhivie-oboi-na-telefon-klinok-rassekayushc-2.jpg"
          alt="manga"
        />
      </div>

      <div className="php">
        <img
          className="aaa1"
          src="https://kg-portal.ru/img/81339/main.jpg"
          alt="manga"
        />

        <div className="bbb1">
          <font className="a1" size="4" color="black" face="Courier New">
            EXPERIENSE IN THIS AREA
          </font>

          <font className="a2" size="7" color="black" face="Courier New bold">
            The most fashionable manga.
          </font>

          <font className="a3" size="5" color="black" face="Courier New">
            One of the most popular and requested manga
          </font>
        </div>
      </div>

      <div className="jawa">
        <img
          className="bb1"
          src="https://kg-portal.ru/img/91017/main.jpg"
          alt="manga"
        />

        <div className="bb2">
          <font className="b1" size="6" color="black" face="Courier New bold">
            EXPERIENSE IN THIS AREA
          </font>

          <font className="b2" size="4" color="black" face="Courier New">
            One fine day, people with superpowers began to appear, in other
            words, quirks. So a society of superhumans arose, where almost every
            person had some kind of superpower. However, not everyone used it in
            the name of good - some people embarked on a criminal path. But,
            fortunately, there are also those who are ready to devote themselves
            to the fight against evil! They look like they stepped out of the
            pages of comics. Over time, these heroes received the official
            approval of the government, and since then they have been guarding
            the order! This is the story of a "quirkless" boy, Izuku Midoriya,
            meeting his idol, the legendary hero All Might, and turning this
            inconspicuous boy into the greatest hero in the world. ©
            Azbuka-Atticus
          </font>
        </div>
      </div>
    </>
  );
};
export default Home;
