import { useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "../Button";
import Typography from "../Typography";
import Grid from "@mui/material/Unstable_Grid2";
import bs_template from "../../assets/img/main/bs_template.png";
import mpulse_tn1 from "../../assets/img/main/mpulse_thumbnail1.jpg";
import mgauge_tn1 from "../../assets/img/main/mgauge_thumbnail.png";
import lowcode from "../../assets/img/main/lowcode.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Zoom, Slide } from "react-awesome-reveal";

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickTop = () => {
    ref.current?.scrollIntoView();
  };

  const handleDeveloperPortalClick = () => {
    window.open(process.env.REACT_APP_DEVELOPER_PORTAL_URL, "_blank");
  };

  const handleMgaugeClick = () => {
    window.open(process.env.REACT_APP_MGAUGE_URL, "_blank");
  };

  const handleMpulseClick = () => {
    window.open(process.env.REACT_APP_MPULSE_URL, "_blank");
  };

  const handleLowcodeClick = () => {
    window.open(process.env.REACT_APP_MPULSE_URL, "_blank");
  };

  return (
    <div>
    <Box
      className="guidlines-section-main"
      component="section"
      sx={{
        bgcolor: "#000000",
        height: "100%",
        pb: 12,
      }}
    >
      <div className="btn-center btn-bum">
        <button className="btn-down pulse" onClick={handleClickTop}>
          <KeyboardArrowDownIcon />
        </button>

        <div ref={ref}></div>
      </div>
      
      
      <Container maxWidth="xl">
        <div className="guidlines-section">
          {/* Grid */}
          <div className="container-main">
          <Grid
            container
            spacing={7}
            columns={{ xs: 4, md: 12 }}
            justifyContent="center"
            style={{ height: "100%" }}
          >
            
            <Grid xs={6} md={6} className="left-column">
              <div className="box-grid text-white">
                <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
                  <Grid className="grid-1" md={6} xs={6}>
                    <Zoom triggerOnce={true}>
                      <div onClick={handleDeveloperPortalClick} className="cursor-pointer white-color">
                        <div className="grid-column">
                          <div className="box-grid-img">
                            <img
                              src={bs_template}
                              loading="lazy"
                              alt="backstage"
                            />
                          </div>
                          <div className="box-grid-content">
                            <h4>Backstage</h4>
                            <p>
                              Upgrade your development experience and accelerate
                              your product delivery with our Backstage-based
                              developer platform.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Zoom>
                  </Grid>

                  <Grid className="grid-2" sm={6} md={6} xs={6}>
                    <div className="white-color cursor-pointer" onClick={handleMgaugeClick}>
                      <Zoom triggerOnce={true}>
                        <div className="grid-column">
                          <div className="box-grid-img">
                            <img src={mgauge_tn1} loading="lazy" alt="mgauge" />
                          </div>
                          <div className="box-grid-content">
                            <h4>mGauge</h4>
                            <p>
                              mGauge is a consolidated reporting platform to
                              collate data from where developers are engaged to,
                              namely JIRA, Confluence, Maybank GitHub
                              Enterprise, and Tappy.{" "}
                            </p>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </Grid>

                  <Grid className="grid-3" sm={6} md={6} xs={6}>
                  <div className="white-color cursor-pointer" onClick={handleMpulseClick}>
                    <Zoom triggerOnce={true}>
                      <div className="grid-column">
                        <div className="box-grid-img">
                          <img src={mpulse_tn1} loading="lazy" alt="Mpulse" />
                        </div>
                        <div className="box-grid-content">
                          <h4>M-Pulse</h4>
                          <p>
                            M-Pulse is a survey enterprise solution designed to
                            assist organizations in gathering feedback and data
                            from employees, customers, and other stakeholders.{" "}
                          </p>
                        </div>
                      </div>
                    </Zoom>
                    </div>
                  </Grid>

                 

                  <Grid className="grid-4" sm={6} md={6} xs={6}>
                    <div className="white-color cursor-pointer" onClick={handleLowcodeClick}>
                    <Zoom triggerOnce={true}>
                      <div className="grid-column">
                        <div className="box-grid-img">
                          <img src={lowcode} loading="lazy" alt="Lowcode" />
                        </div>
                        <div className="box-grid-content">
                          <h4>Low Code</h4>
                          <p>
                            Need innovative consumer and business apps that
                            scale to millions of users? Develop them at top
                            speed with high-performance low-code.{" "}
                          </p>
                        </div>
                      </div>
                    </Zoom>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid xs={6} md={6} className="right-column">
              <div className="center-content">
                {/* Add your content */}
                <Slide direction="right" triggerOnce={true}>
                  <Typography
                    className="animate__animated animate__pulse developer-learn"
                    variant="h1"
                    component="h2"
                    sx={{
                      fontFamily: "Manjari, sans-serif",
                      fontSize: 40,
                      fontWeight: 600,
                      color: "#fff",
                      zIndex: 1, // Ensure the content is on top
                    }}
                  >
                    <span className="banner-text-grd"> Developer’s</span> Learn
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 16,
                      mb: 4,
                      color: "#fff",
                      width: "100%",
                      fontFamily: "Manjari, sans-serif",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                  <Button
                    variant="outlined"
                    className="btn-theme"
                    size="medium"
                    component="a"
                    key="developerPortal"
                    onClick={handleMgaugeClick}
                  >
                    More Guidelines
                  </Button>
                </Slide>
              </div>
            </Grid>
          </Grid>
          </div>
        </div>
      </Container>
    </Box>
    </div>
  );
}

export default HowItWorks;
