import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

const Preview = () => {
  const user = useSelector((state) => state.userInfo.value);
  const { pathname } = useLocation();
  const ticketId = pathname.split("/")[2];

  const [briefInfo, setBriefInfo] = useState({});

  useEffect(() => {
    // ============ PROFILE DATA ===========
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "api/briefs/profilePreview/" +
          ticketId
      )
      .then((response) => {
        if (response.status === 200) {
          setBriefInfo(response.data);
        }
      });
  }, []);

  const today = new Date();
  const year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[today.getMonth()];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Preview | Sanofi Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Sanofi" />
        </Helmet>
        <LoggedInNavbar />
        <div className="brief_details">
          <Link to="/dashboard">Back to my Dashboard</Link>
          <h2>Brief Preview</h2>
        </div>
        <div className="wrap">
          <div className="top-container">
            <div className="divider">
              <div className="personContent">
                <div className="threeItem">
                  <div>
                    <ExternalLink
                      href={
                        process.env.REACT_APP_BACKEND_URL +
                        `api/briefs/edit/${ticketId}`
                      }
                      target="_self"
                    >
                      Brief Type
                    </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      href={
                        process.env.REACT_APP_BACKEND_URL +
                        `api/briefs/brief/${ticketId}`
                      }
                      target="_self"
                    >
                      Content
                    </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      href={
                        process.env.REACT_APP_BACKEND_URL +
                        `api/briefs/preview/${ticketId}`
                      }
                      target="_self"
                    >
                      Preview Brief
                    </ExternalLink>
                  </div>
                </div>
              </div>
              <div className="main">
                <div
                  style={{ backgroundColor: "white", fontFamily: "verdana" }}
                >
                  <div style={{ margin: "5px 30px", textAlign: "center" }}>
                    <img
                      style={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        width: "120.88px",
                        position: "relative",
                      }}
                      src="/images/sanofi.png"
                      alt="logo"
                    />
                  </div>
                  {/* CONTENT 1 HERO */}
                  <div
                    style={{
                      color: "white",
                      backgroundColor: "#23004C",
                      padding: "20px 15px",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "verdana",
                      }}
                    >
                      {briefInfo.greeting === "Customise" &&
                        briefInfo.customise}
                      {briefInfo.greeting === "Dear Dr. Last Name" &&
                        `Dear Dr. ${user.lastName}`}
                      {briefInfo.greeting === "Dear First Name" &&
                        `Dear ${user.firstName}`}
                    </p>
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "verdana",
                        marginTop: "40px",
                      }}
                    >
                      {briefInfo.eyebrow}
                    </p>
                    <h4
                      style={{
                        fontSize: "30px",
                        fontFamily: "verdana",
                        fontWeight: "700",
                        textAlign: "center",
                        margin: "15px auto",
                        padding: "0 60px",
                      }}
                    >
                      {briefInfo.mainheading}
                    </h4>
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "verdana",
                        marginTop: "16px",
                        padding: "0 60px",
                      }}
                    >
                      {briefInfo.content}
                    </p>
                    {briefInfo.cta ? (
                      <div
                        style={{ textAlign: "center", marginBottom: "16px" }}
                      >
                        <button
                          style={{
                            backgroundColor: "white",
                            outline: "none",
                            border: "2px solid #817eff",
                            color: "#817eff",
                            borderRadius: "22px",
                            width: "200px",
                            height: "45px",
                            fontWeight: "600",
                            fontSize: "16px",
                            padding: "5px 15px",
                            cursor: "pointer",
                            fontFamily: "verdana",
                          }}
                        >
                          <ExternalLink
                            href={briefInfo.ctaUrl}
                            style={{
                              width: "100%",
                              height: "31px",
                              lineHeight: "31px",
                              display: "block",
                              color: " #817eff",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            {briefInfo.cta}
                          </ExternalLink>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    <figure style={{ padding: "0px 50px" }}>
                      <img
                        style={{
                          position: "relative",
                          maxWidth: "100%",
                          height: "auto",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          transform: "translate(-50%, 0%)",
                          top: "0",
                          left: "50%",
                        }}
                        src={briefInfo.heroFile}
                        alt=""
                      />
                    </figure>
                  </div>
                  {/* CONTENT RESOURCE 1 */}
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 15px 25px",
                    }}
                  >
                    {briefInfo.resource1Title !== "" ? (
                      <>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "40% 60%",
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            <figure>
                              <img
                                style={{
                                  position: "relative",
                                  width: "80%",
                                  height: "auto",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  transform: "translate(-50%, 0%)",
                                  top: "0%",
                                  left: "50%",
                                }}
                                src={briefInfo.resource1File}
                                alt=""
                              />
                            </figure>
                          </div>

                          <div>
                            <p
                              style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "black",
                                lineHeight: "25px",
                                fontFamily: "verdana",
                              }}
                            >
                              {briefInfo.resource1Title}
                            </p>

                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#777",
                                marginBottom: "15px",
                                fontFamily: "verdana",
                              }}
                            >
                              {briefInfo.content1}
                            </p>

                            {briefInfo.cta1 !== "" ? (
                              <button
                                style={{
                                  backgroundColor: "white",
                                  outline: "none",
                                  border: "2px solid #817eff",
                                  color: "#817eff",
                                  borderRadius: "22px",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                  padding: "5px 15px",
                                  cursor: "pointer",
                                  width: "180px",
                                  fontFamily: "verdana",
                                }}
                              >
                                <ExternalLink
                                  style={{
                                    width: "100%",
                                    height: "31px",
                                    lineHeight: "31px",
                                    display: "block",
                                    color: " #817eff",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                  }}
                                  href={briefInfo.ctaUrl1}
                                >
                                  {briefInfo.cta1}
                                </ExternalLink>
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    {/* CONTENT RESOURCE 2 */}
                    {briefInfo.resource2Title !== "" ? (
                      <>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "40% 60%",
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            <figure>
                              <img
                                style={{
                                  position: "relative",
                                  width: "80%",
                                  height: "auto",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  transform: "translate(-50%, 0%)",
                                  top: "0%",
                                  left: "50%",
                                }}
                                src={briefInfo.resource2File}
                                alt=""
                              />
                            </figure>
                          </div>

                          <div>
                            <p
                              style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "black",
                                lineHeight: "25px",
                                fontFamily: "verdana",
                              }}
                            >
                              {briefInfo.resource2Title}
                            </p>

                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#777",
                                marginBottom: "15px",
                                fontFamily: "verdana",
                              }}
                            >
                              {briefInfo.content2}
                            </p>

                            {briefInfo.cta2 !== "" ? (
                              <button
                                style={{
                                  backgroundColor: "white",
                                  outline: "none",
                                  border: "2px solid #817eff",
                                  color: "#817eff",
                                  borderRadius: "22px",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                  padding: "5px 15px",
                                  cursor: "pointer",
                                  width: "180px",
                                  fontFamily: "verdana",
                                }}
                              >
                                <ExternalLink
                                  style={{
                                    width: "100%",
                                    height: "31px",
                                    lineHeight: "31px",
                                    display: "block",
                                    color: " #817eff",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                  }}
                                  href={briefInfo.ctaUrl2}
                                >
                                  {briefInfo.cta2}
                                </ExternalLink>
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* JOIN CAMPUS TOP */}
                  <div style={{ color: "white", backgroundColor: "#23004C" }}>
                    {briefInfo.campusHeading !== "" ||
                    briefInfo.campus1Title !== "" ||
                    briefInfo.campus2Title !== "" ? (
                      <div
                        style={{
                          backgroundColor: "#23004C",
                          padding: "20px 15px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        >
                          {briefInfo.eyebrowCampus}
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            padding: "15px 10px",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#23004C",
                              width: "48%",
                              padding: "5px 10px",
                            }}
                          >
                            <figure>
                              <img
                                style={{
                                  position: "relative",
                                  maxWidth: "210px",
                                  height: "auto",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  transform: "translate(-50%, 0%)",
                                  top: "0",
                                  left: "50%",
                                }}
                                src={briefInfo.campusFile}
                                alt=""
                              />
                            </figure>
                          </div>
                          <div
                            style={{
                              backgroundColor: "#23004C",
                              width: "48%",
                              padding: "5px 10px",
                            }}
                          >
                            <h4
                              style={{
                                backgroundColor: "#23004C",
                                width: "100%",
                                fontSize: "18px",
                                fontWeight: "600",
                                fontFamily: "verdana",
                              }}
                            >
                              {briefInfo.campusHeading}
                            </h4>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                fontWeight: "200",
                                fontSize: "14px",
                              }}
                            >
                              {briefInfo.contentCampus}
                            </p>
                            <div style={{ textAlign: "center" }}>
                              {briefInfo.ctaCampus !== "" ? (
                                <button
                                  style={{
                                    backgroundColor: "white",
                                    outline: "none",
                                    border: "2px solid #817eff",
                                    color: "#817eff",
                                    borderRadius: "22px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    padding: "5px 15px",
                                    cursor: "pointer",
                                    width: "180px",
                                    fontFamily: "verdana",
                                  }}
                                >
                                  <ExternalLink
                                    style={{
                                      width: "100%",
                                      height: "31px",
                                      lineHeight: "31px",
                                      display: "block",
                                      color: " #817eff",
                                      fontWeight: "600",
                                      fontSize: "16px",
                                    }}
                                    href={briefInfo.ctaUrlCampus}
                                  >
                                    {briefInfo.ctaCampus}
                                  </ExternalLink>
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                        {/* JOIN CAMPUS BOTTOM*/}
                        <h4
                          style={{
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        >
                          {briefInfo.eyebrowCampus}
                        </h4>

                        {briefInfo.campus1Title !== "" ||
                        briefInfo.campus2Title !== "" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              padding: "15px 10px",
                            }}
                          >
                            {briefInfo.campus1Title !== "" ? (
                              <div
                                style={{
                                  backgroundColor: "#3c217b",
                                  width: "48%",
                                  padding: "20px 10px",
                                }}
                              >
                                <h4
                                  style={{
                                    backgroundColor: "#3c217b",
                                    width: "100%",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    fontFamily: "verdana",
                                  }}
                                >
                                  {" "}
                                  {briefInfo.campus1Title}
                                </h4>
                                <p
                                  style={{
                                    color: "white",
                                    fontFamily: "verdana",
                                  }}
                                >
                                  {briefInfo.campus1Content}
                                </p>
                                {briefInfo.ctaCampus1 !== "" ? (
                                  <button
                                    style={{
                                      backgroundColor: "white",
                                      outline: "none",
                                      border: "2px solid #817eff",
                                      color: "#817eff",
                                      borderRadius: "22px",
                                      fontWeight: "600",
                                      fontSize: "16px",
                                      padding: "5px 15px",
                                      cursor: "pointer",
                                      width: "180px",
                                      fontFamily: "verdana",
                                    }}
                                  >
                                    <ExternalLink
                                      style={{
                                        width: "100%",
                                        height: "31px",
                                        lineHeight: "31px",
                                        display: "block",
                                        color: " #817eff",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                      }}
                                      href={briefInfo.ctaUrlCampus1}
                                    >
                                      {briefInfo.ctaCampus1}
                                    </ExternalLink>
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                            {briefInfo.campus2Title !== "" ? (
                              <div
                                style={{
                                  backgroundColor: "#3c217b",
                                  width: "48%",
                                  padding: "20px 10px",
                                }}
                              >
                                <h4
                                  style={{
                                    backgroundColor: "#3c217b",
                                    width: "100%",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    fontFamily: "verdana",
                                  }}
                                >
                                  {" "}
                                  {briefInfo.campus2Title}
                                </h4>
                                <p
                                  style={{
                                    color: "white",
                                    fontFamily: "verdana",
                                  }}
                                >
                                  {briefInfo.campus2Content}
                                </p>
                                {briefInfo.ctaCampus2 !== "" ? (
                                  <button
                                    style={{
                                      backgroundColor: "white",
                                      outline: "none",
                                      border: "2px solid #817eff",
                                      color: "#817eff",
                                      borderRadius: "22px",
                                      fontWeight: "600",
                                      fontSize: "16px",
                                      padding: "5px 15px",
                                      cursor: "pointer",
                                      width: "180px",
                                      fontFamily: "verdana",
                                    }}
                                  >
                                    <ExternalLink
                                      style={{
                                        width: "100%",
                                        height: "31px",
                                        lineHeight: "31px",
                                        display: "block",
                                        color: " #817eff",
                                        fontWeight: "600",
                                        fontSize: "16px",
                                      }}
                                      href={briefInfo.ctaUrlCampus2}
                                    >
                                      {briefInfo.ctaCampus2}
                                    </ExternalLink>
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                    {/* STAY IN TOUCH */}

                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "10px 15px 25px",
                      }}
                    >
                      {briefInfo.contactRep === true ? (
                        <>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              color: "#777",
                              marginTop: "25px",
                            }}
                          >
                            GETTING IN TOUCH
                          </h4>

                          <h5
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              textAlign: "center",
                              color: "black",
                              marginTop: "16px",
                            }}
                          >
                            Speak to your Sanofi Representative
                          </h5>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "40% 60%",
                              color: "#777",
                              padding: "15px 10px 5px",
                            }}
                          >
                            <div>
                              <figure>
                                <img
                                  style={{
                                    position: "relative",
                                    maxWidth: "120px",
                                    height: "auto",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    transform: "translate(-50%, 0%)",
                                    top: "0%",
                                    left: "66%",
                                  }}
                                  src="/images/girl.png"
                                  alt=""
                                />
                              </figure>
                            </div>

                            <div>
                              <p
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "700",
                                  color: "black",
                                  marginBottom: "5px",
                                  fontFamily: "verdana",
                                }}
                              >
                                Libby
                              </p>
                              <p
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "700",
                                  color: "black",
                                  marginBottom: "5px",
                                  fontFamily: "verdana",
                                }}
                              >
                                Mason
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  color: "#777",
                                  marginBottom: "5px",
                                  fontFamily: "verdana",
                                }}
                              >
                                Immunisation Specialist Partner
                              </p>
                              <p
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  color: "black",
                                  marginBottom: "5px",
                                  fontFamily: "verdana",
                                }}
                              >
                                libby.mason@sanofi.com
                              </p>
                              <p
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  color: "black",
                                  marginBottom: "5px",
                                  fontFamily: "verdana",
                                }}
                              >
                                0472720100
                              </p>
                              <button
                                style={{
                                  backgroundColor: "white",
                                  outline: "none",
                                  border: "2px solid #817eff",
                                  color: "#817eff",
                                  borderRadius: "22px",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                  padding: "5px 15px",
                                  cursor: "pointer",
                                  width: "180px",
                                  fontFamily: "verdana",
                                }}
                              >
                                Contact us
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <br />

                      {briefInfo.contactUs === true ? (
                        <>
                          <h4
                            style={{
                              fontSize: "18px",
                              textAlign: "center",
                              color: "#777",
                              marginTop: "25px",
                            }}
                          >
                            GETTING IN TOUCH
                          </h4>
                          <div
                            style={{
                              margin: "0px 30px",
                              textAlign: "center",
                            }}
                          >
                            <img
                              style={{
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                width: "120.88px",
                                position: "relative",
                              }}
                              src="/images/sanofi.png"
                              alt="logo"
                            />
                          </div>
                          <p
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "#777",
                              marginBottom: "5px",
                              fontFamily: "verdana",
                              textAlign: "center",
                            }}
                          >
                            Building D, 12-24 Talavera Road
                          </p>
                          <p
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "#777",
                              marginBottom: "5px",
                              fontFamily: "verdana",
                              textAlign: "center",
                            }}
                          >
                            Macquarie Park NSW 2113
                          </p>
                          <p
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "black",
                              marginBottom: "5px",
                              fontFamily: "verdana",
                              textAlign: "center",
                            }}
                          >
                            {briefInfo.contactEmail}
                          </p>
                          {briefInfo.ctaContactUs !== "" ? (
                            <div
                              style={{
                                textAlign: "center",
                                marginTop: "20px",
                              }}
                            >
                              <button
                                style={{
                                  backgroundColor: "white",
                                  outline: "none",
                                  border: "2px solid #817eff",
                                  color: "#817eff",
                                  borderRadius: "22px",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                  padding: "5px 15px",
                                  cursor: "pointer",
                                  width: "180px",
                                  fontFamily: "verdana",
                                }}
                              >
                                <ExternalLink
                                  style={{
                                    width: "100%",
                                    height: "31px",
                                    lineHeight: "31px",
                                    display: "block",
                                    color: " #817eff",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                  }}
                                  href={briefInfo.ctaUrlContactUs}
                                >
                                  {briefInfo.ctaContactUs}
                                </ExternalLink>
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ margin: "0px 30px", textAlign: "center" }}>
                  <img
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      width: "120.88px",
                      position: "relative",
                    }}
                    src="/images/sanofi.png"
                    alt="logo"
                  />
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    textAlign: "center",
                    margin: "10px auto",
                  }}
                >
                  This email was sent by Sanofi to {user.email}.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    textAlign: "center",
                    margin: "10px auto",
                  }}
                >
                  {briefInfo.footerContent}
                </div>
                <div
                  style={{
                    display: "flex",

                    justifyContent: "space-evenly",
                    color: "#777",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  {briefInfo.ctafoot1 !== "" ? (
                    <div>
                      <ExternalLink
                        style={{ color: "#777" }}
                        href={briefInfo.ctaUrlFoot1}
                      >
                        {briefInfo.ctafoot1}
                      </ExternalLink>
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {briefInfo.ctafoot2 !== "" ? (
                    <div>
                      <ExternalLink
                        style={{ color: "#777" }}
                        href={briefInfo.ctaUrlFoot2}
                      >
                        {briefInfo.ctafoot2}
                      </ExternalLink>
                    </div>
                  ) : (
                    ""
                  )}{" "}
                  {briefInfo.ctafoot3 !== "" ? (
                    <div>
                      <ExternalLink
                        style={{ color: "#777" }}
                        href={briefInfo.ctaUrlFoot3}
                      >
                        {briefInfo.ctafoot3}
                      </ExternalLink>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    textAlign: "center",
                    margin: "10px auto",
                  }}
                >
                  © <span>{year}</span> Sanofi. All Rights Reserved.
                  sanofi-aventis australia pty ltd trading as Sanofi. ABN 31 008
                  558 807, Talavera Corporate Centre, Building D, 12-24 Talavera
                  Road, Macquarie Park NSW 2113, Australia. {briefInfo.matcode}{" "}
                  Date Prepared:{" "}
                  {briefInfo.date ? briefInfo.date : month + " " + year}
                </div>
                {/* SOCIAL MEDIA */}
                {briefInfo.socialmedia === true ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      outline: "none",
                      marginTop: "15px",
                    }}
                  >
                    <div className="footerCopyright">
                      <ExternalLink
                        target="_blank"
                        href="https://www.facebook.com/vaccinehub"
                      >
                        <img
                          src="/images/facebook.png"
                          alt=""
                          style={{ width: "22px", margin: "0px 6px" }}
                        />
                      </ExternalLink>
                    </div>
                    <div className="footerCopyright">
                      <ExternalLink
                        target="_blank"
                        href="https://www.twitter.com/sanofianz"
                      >
                        <img
                          src="/images/x.png"
                          alt=""
                          style={{ width: "22px", margin: "0px 6px" }}
                        />
                      </ExternalLink>
                    </div>
                    <div className="footerCopyright">
                      <ExternalLink
                        target="_blank"
                        href="https://www.linkedin.com/company/sanofi/mycompany"
                      >
                        <img
                          src="/images/linkedin.png"
                          alt=""
                          style={{ width: "22px", margin: "0px 6px" }}
                        />
                      </ExternalLink>
                    </div>
                    <div className="footerCopyright">
                      <ExternalLink
                        target="_blank"
                        href="https://www.youtube.com/user/sanofianz"
                      >
                        <img
                          src="/images/YouTube.png"
                          alt=""
                          style={{ width: "22px", margin: "0px 6px" }}
                        />
                      </ExternalLink>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* FOOTER LINKS */}
                {briefInfo.lpc === true ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      color: "#777",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <ExternalLink
                        style={{ color: "#777" }}
                        href={briefInfo.legal}
                      >
                        Legal
                      </ExternalLink>
                    </div>{" "}
                    |
                    <div>
                      <ExternalLink
                        style={{ color: "#777" }}
                        href={briefInfo.privacy}
                      >
                        Privacy Policy
                      </ExternalLink>
                    </div>{" "}
                    |
                    <div>
                      <ExternalLink
                        style={{ color: "#777" }}
                        href={briefInfo.contact}
                      >
                        Contact Us
                      </ExternalLink>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <Footer />
        </div>

        <style jsx="true">{`
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          .wrap {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 0;
            background-color: #3c217b;
          }

          .wrap .divider {
            display: grid;
            grid-template-columns: 30% 70%;
          }
          @media screen and (max-width: 768px) {
            .wrap {
              padding: 0;
            }
            .wrap .divider {
              display: block;
            }
          }

          /* ============== EDM ============== */
          .top-container {
            height: 100%;
            width: 100%;
            display: block;
            padding-bottom: 60px;
            padding-top: 60px;
          }

          .main {
            display: block;
            width: 470px;
            margin: 0 auto;
            padding: 80px 20px 60px;
            background-color: #f6f6f6;
          }

          @media only screen and (min-width: 768px) {
            .wrap .top-container {
              justify-content: center;
              flex-direction: row;
              padding-top: 60px;
              padding-bottom: 60px;
            }

            .main {
              padding: 80px 50px 60px;
              width: 950px;
              display: inline-block;
            }
          }
          @media only screen and (max-width: 768px) {
            .main div figure {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }
            .main div figure img {
              left: 50% !important;
            }
            .main button {
              font-size: 12px !important;
              width: 160px !important;
              height: 48px !important;
            }
          }

          /* ============= PERSONAL DETAILS ============== */

          .brief_details {
            margin: 15px auto 25px;
            padding: 10px 440px;
          }

          .brief_details h2 {
            color: #323232;
            font-weight: 500;
            font-size: 32px;
          }
          .brief_details a {
            color: #817eff;
            display: block;
            margin-bottom: 10px;
          }

          .brief_details a:hover {
            color: #817eff;
          }

          @media screen and (max-width: 768px) {
            .brief_details {
              margin: 25px auto;
              padding: 10px 100px;
              text-align: center;
            }
          }

          /* =========== LEFT RAIL ========== */
          .wrap .personContent {
            width: 350px;
            margin: 0 20px;
          }
          .wrap .personContent .threeItem:last-child {
            height: 135px;
          }
          .wrap .personContent .threeItem > div {
            padding: 10px 30px;
            width: 100%;
          }
          .wrap .personContent .threeItem > div:last-child {
            padding: 0px 30px;
            margin-top: 20px;
            border: 1px solid #fff;
            height: 38px;
            border-radius: 4px;
            line-height: 38px;
            text-align: center;
          }
          .wrap .personContent .threeItem > div:last-child:hover {
            border: 1px solid #817eff;
          }
          .wrap .personContent .threeItem > div a:hover {
            color: #817eff;
          }
          .wrap .personContent .threeItem > div a {
            color: #fff;
            font-weight: 800;
            font-size: 22px;
            font-family: sans-serif;
          }
          .wrap .personContent .threeItem > div:hover {
            cursor: pointer;
          }
          @media screen and (max-width: 768px) {
            .wrap .personContent {
              display: block;
              width: 420px;
              margin: 0 auto 30px;
              height: 200px;
            }
            .wrap .personContent .threeItem {
              margin: 0;
              width: 420px;
              margin-bottom: 20px;
              text-align: center;
            }
            .wrap .personContent .threeItem > div {
              width: 100%;
            }
          }

          /* ========== BOTTOM BUTTONS ============ */
          .bottomBtn {
            display: flex;
            display: -webkit-flex;
            width: 100%;
            justify-content: space-around;
          }
          .btn-previous,
          .btn-next {
            position: relative;
            background-color: #817eff;
            color: white;
            border: 1px solid #817eff;
            cursor: pointer;
            font-weight: 800;
            width: 150px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            margin: 0px auto 30px;
            box-shadow: none;
          }
          .btn-previous a,
          .btn-next a {
            color: white;
            font-weight: 800;
            width: 100%;
            height: 100%;
            font-family: sans-serif;
            position: relative;
            display: block;
          }
          .btn-previous:hover,
          .btn-next:hover,
          .btn-previous:active,
          .btn-next:active,
          .btn-previous:focus,
          .btn-next:focus {
            color: white;
            border: 1px solid #817eff;
            outline: none;
          }

          @media only screen and (min-width: 768px) {
            .btn-previous,
            .btn-next {
              width: 200px;
            }
          }

          /* ============== PROCESS BAR ON TOP ============== */
          .wrap .Q1title {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: auto;
            font-size: 16px;
            color: #484848;
            padding: 0px;
            text-align: center;
            margin: 0px auto;
          }

          .wrap .Q1title > ul {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
          }
          .wrap .Q1title > ul > li {
            list-style: none;
          }

          .stepNav {
            margin: 30px 20px;
            height: auto;
            padding-right: 20px;
            position: relative;
            z-index: 0;
          }

          .badge {
            display: block;
            font-size: 12px;
            width: 20px;
            height: 20px;
            line-height: 12px;
            background: #777;
            color: #fff;
            border-radius: 50%;
            margin-right: 5px;
          }
          .badge-highlight {
            display: block;
            font-size: 12px;
            width: 22px;
            border: 1px solid white;
            height: 22px;
            line-height: 20px;
            background: #817eff;
            color: #fff;
            border-radius: 50%;
            margin-right: 5px;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            font-weight: 700;
          }
          .stepNav.threeWide li {
            width: 33%;
          }
          .stepNav li {
            float: left;
            position: relative;
            z-index: 3;
          }

          .stepNav li:first-child {
            border-radius: 0px 0 0 0px;
          }

          .stepNav li:nth-child(2) {
            z-index: 2;
          }

          .stepNav li:nth-child(3) {
            z-index: 1;
          }

          .stepNav li:nth-child(4) {
            z-index: 0;
          }
          .stepNav.threeWide li {
            width: 33%;
          }
          .stepNav a,
          .stepNav a:visited {
            display: block;
            width: 100%;
            height: 43px;
            padding: 0 0 0 25px;
            color: #999;
            text-align: center;
            text-shadow: 0 1px 0 #fff;
            line-height: 43px;
            white-space: nowrap;
            border: none;
            text-decoration: none;
            border-right: 0;
            background-color: #ededed;
            position: relative;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
          .stepNav a {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }

          .stepNav a:before {
            content: "";
            width: 30px;
            height: 30px;
            background: #ededed;
            display: block;
            position: absolute;
            top: 6px;
            right: -16px;
            z-index: -1;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }

          .stepNav a.active {
            text-shadow: none;
            color: #fff;
            background: #817eff;
          }
          .stepNav a.active::before {
            border-right: 1px solid #817eff;
            border-bottom: 1px solid #817eff;
            background: #817eff;
          }

          @media screen and (max-width: 768px) {
            .wrap .Q1title {
              width: 100%;
              padding: 0px 0px 0px 0px;
            }
            .wrap .Q1title > ul {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
              padding-left: 10px;
            }
            .wrap .Q1title > ul > li {
              width: 100%;
              margin-bottom: 10px;
              list-style: none;
            }
            .wrap .Q1title > ul > li a {
              text-align: left !important;
            }
            .stepNav a {
              -webkit-box-pack: left;
              -ms-flex-pack: left;
              justify-content: left;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Preview;
