import React from "react";
import "../home/Home.css";
import Video from "../assets/homeimage/video1.mp4";
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Home = () => {
  return (
    <>
      {/* <div>
        <Box>
          <Grid
            sx={{
              alignItems: "space-around",
              flexWrap: "wrap",
              backgroundColor: "rgb(238,238,238)",
              width: "100%",
              // maxWidth: "100%",
              height: "0%",
            }}
          >
            <Grid item md={4}>
              <Splide
                options={{ rewind: true, zIndex: 2 }}
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <Container>
                    <img
                      src="https://www.ikea.com/ext/ingkadam/m/f95b5fd1e2b3b4/original/PH157405-crop002.jpg?f=xxl"
                      alt="Image 1"
                      style={{
                        maxWidth: "100vw",
                      }}
                    />
                  </Container>
                </SplideSlide>

                <SplideSlide>
                  <Container>
                    <img
                      src="https://www.ikea.com/ext/ingkadam/m/60c10e5d0cbb38bb/original/PH157836-crop004.jpg?f=xxl"
                      alt="Image 2"
                      style={{
                        maxWidth: "100vw",
                      }}
                    />
                  </Container>
                </SplideSlide>

                <SplideSlide>
                  <Container>
                    <img
                      src="https://www.ikea.com/ext/ingkadam/m/2518ca5862da7907/original/PH176567.jpg?f=xxl"
                      alt="Image 3"
                      style={{
                        maxWidth: "100vw",
                      }}
                    />
                  </Container>
                </SplideSlide>

                <SplideSlide>
                  <Container>
                    <img
                      src="https://www.ikea.com/ext/ingkadam/m/66233fac36591a37/original/PH159924-crop001.jpg?f=xxl"
                      alt="Image 4"
                      style={{
                        maxWidth: "100vw",
                      }}
                    />
                  </Container>
                </SplideSlide>
                <SplideSlide>
                  <Container>
                    <img
                      src="https://www.ikea.com/ext/ingkadam/m/6dc2f6f5c3e8d48d/original/PH156888-crop001.jpg?f=xxl"
                      alt="Image 5"
                      style={{
                        maxWidth: "100vw",
                      }}
                    />
                  </Container>
                </SplideSlide>
                <SplideSlide>
                  <Container>
                    <img
                      src="https://www.ikea.com/ext/ingkadam/m/48b4920fdbbf14a1/original/PH156264-crop001.jpg?f=xxl"
                      alt="Image 6"
                      style={{
                        maxWidth: "100vw",
                      }}
                    />
                  </Container>
                </SplideSlide>
              </Splide>
            </Grid>
          </Grid>
        </Box>
      </div> */}

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

      <Grid
        container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        spacing={1}
      >
        <div className="fff">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </Grid>

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
          src="https://ranobelib.me/uploads/cover/xiu-luo-wu-shen-novel/cover/5XBhGMZGR5In_250x350.jpg"
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
