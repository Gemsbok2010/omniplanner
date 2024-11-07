import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { ExternalLink } from "react-external-link";
import { useSelector } from "react-redux";
import axios from "axios";

const Campaign = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.userInfo.value);
  ReactSession.setStoreType("sessionStorage");

  let id = pathname.split("/")[2];

  const [userInfo, setUserInfo] = useState({});
  const [expiryDate, setExpiryDate] = useState("");

  const [discount, setDiscount] = useState([]);
  const [gratuity, setGratuity] = useState([]);
  const [loyalty, setLoyalty] = useState([]);
  const [prize, setPrize] = useState(false);
  const [noOffer, setNoOffer] = useState(false);

  const [sales, setSales] = useState([]);
  const [revenues, setRevenues] = useState([]);
  const [aquisitions, setAquisitions] = useState([]);
  const [brandings, setBrandings] = useState([]);
  const [conversions, setConversions] = useState([]);
  const [loyaltypoints, setLoyaltypoints] = useState([]);
  const [reengagements, setReengagements] = useState([]);
  const [secRevenues, setSecRevenues] = useState([]);
  const [market, setMarket] = useState([]);
  const [toMarket, setToMarket] = useState([]);

  const [secSales, setSecSales] = useState([]);
  const [secaquisitions, setSecaquisitions] = useState([]);
  const [secReengagements, setSecReengagements] = useState([]);
  const [secloyaltypoints, setSecloyaltypoints] = useState([]);
  const [secconversions, setSecConversions] = useState([]);

  // =========== POPULATE SESSION DATA ==============
  useEffect(() => {
    if (!ReactSession.get("market")) {
      setMarket([]);
    } else {
      setMarket(ReactSession.get("market"));
    }
    if (!ReactSession.get("loyaltypoints")) {
      setLoyaltypoints([]);
    } else {
      setLoyaltypoints(ReactSession.get("loyaltypoints"));
    }
    if (!ReactSession.get("toMarket")) {
      setToMarket([]);
    } else {
      setToMarket(ReactSession.get("toMarket"));
    }
    // SECONDARY
    if (!ReactSession.get("secRevenues")) {
      setSecRevenues([]);
    } else {
      setSecRevenues(ReactSession.get("secRevenues"));
    }
    if (!ReactSession.get("secSales")) {
      setSecSales([]);
    } else {
      setSecSales(ReactSession.get("secSales"));
    }
    if (!ReactSession.get("secaquisitions")) {
      setSecaquisitions([]);
    } else {
      setSecaquisitions(ReactSession.get("secaquisitions"));
    }

    if (!ReactSession.get("secReengagements")) {
      setSecReengagements([]);
    } else {
      setSecReengagements(ReactSession.get("secReengagements"));
    }
    if (!ReactSession.get("secloyaltypoints")) {
      setSecloyaltypoints([]);
    } else {
      setSecloyaltypoints(ReactSession.get("secloyaltypoints"));
    }
    if (!ReactSession.get("secconversions")) {
      setSecConversions([]);
    } else {
      setSecConversions(ReactSession.get("secconversions"));
    }

    setExpiryDate(ReactSession.get("expiryDate"));
  }, []);

  // ========= GOOGLE & FACEBOOK SIGN UP DATA ===========
  useEffect(() => {
    // ============ PROFILE DATA ===========
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "api/listings/getCampaign/" +
          pathname.split("/")[2]
      )
      .then((response) => {
        if (response.status === 200) {
          setUserInfo(response.data);
          setDiscount(response.data.discount);
          setGratuity(response.data.gratuity);
          setLoyalty(response.data.loyalty);
          setPrize(response.data.prizeOffers);
          setNoOffer(response.data.noOffer);
          setToMarket(response.data.toMarket);
          setMarket(response.data.market);

          if (response.data.revenues.length !== 0) {
            setRevenues(response.data.revenues);
          }
          if (response.data.sales.length !== 0) {
            setSales(response.data.sales);
          }
          if (response.data.conversions.length !== 0) {
            setConversions(response.data.conversions);
          }
          if (response.data.reengagements.length !== 0) {
            setReengagements(response.data.reengagements);
          }
          if (response.data.aquisitions.length !== 0) {
            setAquisitions(response.data.aquisitions);
          }
          if (response.data.loyaltypoints.length !== 0) {
            setLoyaltypoints(response.data.loyaltypoints);
          }
          if (response.data.brandings.length !== 0) {
            setBrandings(response.data.brandings);
          }

          if (response.data.secRevenues.length !== 0) {
            setSecRevenues(response.data.secRevenues);
          }
          if (response.data.secSales.length !== 0) {
            setSecSales(response.data.secSales);
          }
          if (response.data.secconversions.length !== 0) {
            setSecConversions(response.data.secconversions);
          }
          if (response.data.secReengagements.length !== 0) {
            setSecReengagements(response.data.secReengagements);
          }
          if (response.data.secaquisitions.length !== 0) {
            setSecaquisitions(response.data.secaquisitions);
          }
          if (response.data.secloyaltypoints.length !== 0) {
            setSecloyaltypoints(response.data.secloyaltypoints);
          }
        }
      });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Campaign | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <LoggedInNavbar />
        <div className="wrap">
          <div className="Q1title">
            <div id="msform"></div>
          </div>

          <div className="top-container">
            <div className="ad-description">
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
                      src="/images/rx-light.png"
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
                    <div style={{ textAlign: "center", marginBottom: "16px" }}>
                      <button
                        style={{
                          backgroundColor: "white",
                          outline: "none",
                          border: "2px solid #817eff",
                          color: "#817eff",
                          borderRadius: "22px",

                          height: "45px",
                          fontWeight: "600",
                          fontSize: "16px",
                          padding: "5px 15px",
                          fontFamily: "verdana",
                        }}
                      >
                        {userInfo.category}
                      </button>
                    </div>
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
                      {userInfo.campaignName}
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
                      Estimated Planning period pre-launch: {userInfo.planDays}{" "}
                      days
                    </p>
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "verdana",
                        marginTop: "16px",
                        padding: "0 60px",
                      }}
                    >
                      Estimated Duration run-time: {userInfo.noDays} days
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
                      {" "}
                      <span>Estimated Budget: </span>
                      {userInfo.budget}
                    </h4>
                  </div>
                  {/* CONTENT RESOURCE 1 */}
                  <h4
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      color: "#777",
                      marginTop: "25px",
                    }}
                  >
                    DESCRIPTION
                  </h4>

                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px 15px 25px",
                    }}
                  >
                    {userInfo.description !== "" ? (
                      <>
                        <div
                          style={{
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: "400",
                                color: "black",
                                lineHeight: "20px",
                                fontFamily: "verdana",
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              {userInfo.description}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <h4
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        color: "#777",
                        marginTop: "25px",
                      }}
                    >
                      RATIONALE
                    </h4>
                    {userInfo.rationale !== "" ? (
                      <>
                        <div
                          style={{
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: "400",
                                color: "black",
                                lineHeight: "20px",
                                fontFamily: "verdana",
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              {userInfo.rationale}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <h4
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        color: "#777",
                        marginTop: "25px",
                      }}
                    >
                      BENCHMARK EXAMPLES
                    </h4>
                    {userInfo.rationale !== "" ? (
                      <>
                        <div
                          style={{
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            <p
                              style={{
                                fontSize: "15px",
                                fontWeight: "400",
                                color: "black",
                                lineHeight: "20px",
                                fontFamily: "verdana",
                                whiteSpace: "pre-wrap",
                              }}
                            >
                              {userInfo.examples}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <h4
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        color: "#777",
                        marginTop: "25px",
                      }}
                    >
                      MARKETS
                    </h4>
                    <div
                      style={{
                        color: "#777",
                        padding: "15px 10px 5px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            marginTop: "30px",
                          }}
                        >
                          POS Markets
                        </p>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "50% 50% ",
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            {market.slice(0, 7).map((markt) => {
                              return (
                                <p key={markt.id}>
                                  <img
                                    src="/images/check.png"
                                    alt=""
                                    style={{
                                      width: "18px",
                                      margin: "0px 6px",
                                    }}
                                  />
                                  {markt}
                                </p>
                              );
                            })}
                          </div>
                          <div>
                            {market.slice(8, 15).map((markt) => {
                              return (
                                <p key={markt.id}>
                                  <img
                                    src="/images/check.png"
                                    alt=""
                                    style={{
                                      width: "18px",
                                      margin: "0px 6px",
                                    }}
                                  />
                                  {markt}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        color: "#777",
                        padding: "15px 10px 5px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            marginTop: "30px",
                          }}
                        >
                          Push To Markets
                        </p>

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "50% 50% ",
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            {toMarket.slice(0, 7).map((off) => {
                              return (
                                <p key={off.id}>
                                  <img
                                    src="/images/check.png"
                                    alt=""
                                    style={{
                                      width: "18px",
                                      margin: "0px 6px",
                                    }}
                                  />
                                  {off}
                                </p>
                              );
                            })}
                          </div>
                          <div>
                            {toMarket.slice(8, 15).map((off) => {
                              return (
                                <p key={off.id}>
                                  <img
                                    src="/images/check.png"
                                    alt=""
                                    style={{
                                      width: "18px",
                                      margin: "0px 6px",
                                    }}
                                  />
                                  {off}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h4
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        color: "#777",
                        marginTop: "25px",
                      }}
                    >
                      OFFERS
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#777",
                        padding: "15px 10px 5px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            marginTop: "30px",
                          }}
                        >
                          Discount Offers
                        </p>
                        {discount.map((disc) => {
                          return (
                            <p key={disc.id}>
                              {" "}
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                              {disc}
                            </p>
                          );
                        })}

                        {gratuity.length !== 0 ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Gratuity Offers
                          </p>
                        ) : (
                          ""
                        )}

                        {gratuity.map((disc) => {
                          return (
                            <p key={disc.id}>
                              {" "}
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                              {disc}
                            </p>
                          );
                        })}

                        {loyalty.length !== 0 ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Loyalty Offers
                          </p>
                        ) : (
                          ""
                        )}

                        {loyalty.map((disc) => {
                          return (
                            <p key={disc.id}>
                              {" "}
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                              {disc}
                            </p>
                          );
                        })}

                        {prize === false ? (
                          ""
                        ) : (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Prize Offers
                          </p>
                        )}

                        {noOffer === false ? (
                          ""
                        ) : (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            No Offers
                          </p>
                        )}
                      </div>
                    </div>
                    <hr />
                    <h4
                      style={{
                        fontSize: "18px",
                        textAlign: "center",
                        color: "#777",
                        marginTop: "25px",
                      }}
                    >
                      CAMPAIGN OBJECTIVES
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#777",
                        padding: "15px 10px 5px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            marginTop: "30px",
                          }}
                        >
                          Primary Objective
                        </p>
                        {brandings.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Branding
                          </p>
                        )}

                        {brandings.map((brand) => {
                          return (
                            <p
                              key={brand.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {brand}
                            </p>
                          );
                        })}

                        {revenues.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Revenues
                          </p>
                        )}
                        {revenues.map((rev) => {
                          return (
                            <p
                              key={rev.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {rev}
                            </p>
                          );
                        })}

                        {aquisitions.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Acquisition
                          </p>
                        )}
                        {aquisitions.map((aqu) => {
                          return (
                            <p
                              key={aqu.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {aqu}
                            </p>
                          );
                        })}

                        {sales.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Sales
                          </p>
                        )}
                        {sales.map((vendre) => {
                          return (
                            <p
                              key={vendre.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {vendre}
                            </p>
                          );
                        })}

                        {conversions.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Conversions
                          </p>
                        )}
                        {conversions.map((conv) => {
                          return (
                            <p key={conv.id}>
                              {" "}
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#817EFF",
                                  borderRadius: "7px",
                                  textAlign: "center",
                                  border: "none",
                                  height: "28px",
                                  lineHeight: "28px",
                                  fontWeight: "500",
                                  marginBottom: "8px",
                                  width: "230px",
                                }}
                              />
                              {conv}
                            </p>
                          );
                        })}

                        {reengagements.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Conversions
                          </p>
                        )}
                        {reengagements.map((reeng) => {
                          return (
                            <p key={reeng.id}>
                              {" "}
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#817EFF",
                                  borderRadius: "7px",
                                  textAlign: "center",
                                  border: "none",
                                  height: "28px",
                                  lineHeight: "28px",
                                  fontWeight: "500",
                                  marginBottom: "8px",
                                  width: "230px",
                                }}
                              />
                              {reeng}
                            </p>
                          );
                        })}
                        {loyaltypoints.length !== 0 && (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Conversions
                          </p>
                        )}
                        {loyaltypoints.map((loy) => {
                          return (
                            <p key={loy.id}>
                              {" "}
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  color: "#fff",
                                  backgroundColor: "#817EFF",
                                  borderRadius: "7px",
                                  textAlign: "center",
                                  border: "none",
                                  height: "28px",
                                  lineHeight: "28px",
                                  fontWeight: "500",
                                  marginBottom: "8px",
                                  width: "230px",
                                }}
                              />
                              {loy}
                            </p>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#777",
                        padding: "15px 10px 5px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            marginTop: "30px",
                          }}
                        >
                          Secondary Objectives
                        </p>

                        {userInfo.secRevenue === true ? (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Revenue
                          </p>
                        ) : (
                          ""
                        )}
                        {secRevenues.map((secR) => {
                          return (
                            <div
                              key={secR.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {secR}
                            </div>
                          );
                        })}
                        {userInfo.secSale === true ? (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Sales
                          </p>
                        ) : (
                          ""
                        )}
                        {secSales.map((secS) => {
                          return (
                            <div
                              key={secS.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {secS}
                            </div>
                          );
                        })}
                        {userInfo.secAqui === true ? (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "25px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Acquisition
                          </p>
                        ) : (
                          ""
                        )}
                        {secaquisitions.map((secAq) => {
                          return (
                            <div
                              key={secAq.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {secAq}
                            </div>
                          );
                        })}
                        {userInfo.secreeng === true ? (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "25px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Reengagement
                          </p>
                        ) : (
                          ""
                        )}
                        {secReengagements.map((secReeng) => {
                          return (
                            <div
                              key={secReeng.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {secReeng}
                            </div>
                          );
                        })}
                        {userInfo.secloyalty === true ? (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "25px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Loyalty Points
                          </p>
                        ) : (
                          ""
                        )}
                        {secloyaltypoints.map((secLoy) => {
                          return (
                            <div
                              key={secLoy.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {secLoy}
                            </div>
                          );
                        })}
                        {userInfo.secconv === true ? (
                          <p
                            style={{
                              fontSize: "15px",
                              marginTop: "25px",
                            }}
                          >
                            <img
                              src="/images/check.png"
                              alt=""
                              style={{
                                width: "18px",
                                margin: "0px 6px",
                              }}
                            />
                            Conversions
                          </p>
                        ) : (
                          ""
                        )}
                        {secconversions.map((secConv) => {
                          return (
                            <div
                              key={secConv.id}
                              style={{
                                color: "#fff",
                                backgroundColor: "#817EFF",
                                borderRadius: "7px",
                                textAlign: "center",
                                border: "none",
                                height: "28px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                marginBottom: "8px",
                                width: "230px",
                              }}
                            >
                              {secConv}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* JOIN CAMPUS TOP */}
                  <div style={{ color: "white", backgroundColor: "#23004C" }}>
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
                        PLATFORMS AND CHANNELS
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            userInfo.mobweb === false ||
                            userInfo.mobileApp === false
                              ? "center"
                              : "space-around",
                          padding: "15px 10px",
                        }}
                      >
                        {userInfo.mobileApp === true ? (
                          <>
                            <div
                              className="ad-banner"
                              style={{
                                backgroundColor: "#23004C",
                                width: "20%",
                                padding: "5px 10px",
                              }}
                            ></div>
                            <div
                              style={{
                                textAlign: "left",
                                width: "30%",
                              }}
                            >
                              <div
                                style={{
                                  color: "white",
                                  fontFamily: "verdana",
                                  textAlign: "left",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  marginBottom: "15px",
                                  width: "53px",
                                  borderBottom: "1px solid white",
                                  paddingBottom: "6px",
                                }}
                              >
                                Mobile
                              </div>

                              <div style={{ marginTop: "11px" }}>
                                Splash Screen
                              </div>
                              <div style={{ marginTop: "11px" }}>
                                Dedicated Tile
                              </div>
                              <div style={{ marginTop: "11px" }}>
                                Destination Recommendation
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        )}

                        {userInfo.mobweb === true ? (
                          <>
                            <div
                              className="mobweb-banner"
                              style={{
                                backgroundColor: "#23004C",
                                width: "20%",
                              }}
                            ></div>
                            <div
                              style={{
                                textAlign: "left",
                                width: "30%",
                              }}
                            >
                              <div
                                style={{
                                  color: "white",
                                  fontFamily: "verdana",
                                  textAlign: "left",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  marginBottom: "15px",
                                  width: "92px",
                                  borderBottom: "1px solid white",
                                  paddingBottom: "6px",
                                }}
                              >
                                Mobile Web
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* DESKTOP*/}
                      {userInfo.desktop === true ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            padding: "15px 10px",
                          }}
                        >
                          <div
                            className="web-banner"
                            style={{
                              backgroundColor: "#20094d",
                              width: "48%",
                              padding: "20px 10px",
                            }}
                          ></div>
                          <div
                            style={{
                              textAlign: "left",
                              backgroundColor: "#20094d",
                              width: "48%",
                              padding: "0px 10px",
                            }}
                          >
                            <div
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                fontWeight: "600",
                                marginBottom: "15px",
                                width: "174px",
                                borderBottom: "1px solid white",
                                paddingBottom: "6px",
                              }}
                            >
                              RX.com Web Desktop
                            </div>

                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              Campaign landing page
                            </p>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              Dedicated Tile
                            </p>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              Hero Banner
                            </p>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              Loading Screen
                            </p>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              Destination Recommendation
                            </p>
                            <p
                              style={{
                                color: "white",
                                fontFamily: "verdana",
                                textAlign: "left",
                                fontSize: "14px",
                                marginBottom: "10px",
                              }}
                            >
                              Offers Page
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
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
                        SOCIAL MEDIA
                      </h4>
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {userInfo.twitter === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/x.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}

                        {userInfo.instagram === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/ig.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}

                        {userInfo.facebook === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/facebook.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}

                        {userInfo.tiktok === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/tiktok.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}

                        {userInfo.linkedin === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/linkedin.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}
                        {userInfo.threads === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/threads.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}
                        {userInfo.youtube === true ? (
                          <span>
                            <img
                              src="/images/youtube.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}
                        {userInfo.wechat === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/wechat.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}
                        {userInfo.weibo === true ? (
                          <span>
                            {" "}
                            <img
                              src="/images/weibo.png"
                              alt=""
                              style={{ width: "25px", margin: "0px 6px" }}
                            />
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    textAlign: "center",
                    margin: "10px auto",
                  }}
                >
                  This brief is created by{" "}
                  {user.firstName + " " + user.lastName} ({user.email}).
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "#777",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                ></div>
                {/* SOCIAL MEDIA */}
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
                      href="https://www.facebook.com/RiyadhAir"
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
                      href="https://x.com/RiyadhAir"
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
                      href="https://www.instagram.com/riyadhair"
                    >
                      <img
                        src="/images/ig.png"
                        alt=""
                        style={{ width: "22px", margin: "0px 6px" }}
                      />
                    </ExternalLink>
                  </div>
                  <div className="footerCopyright">
                    <ExternalLink
                      target="_blank"
                      href="https://www.tiktok.com/@riyadhair"
                    >
                      <img
                        src="/images/tiktok.png"
                        alt=""
                        style={{ width: "22px", margin: "0px 6px" }}
                      />
                    </ExternalLink>
                  </div>
                  <div className="footerCopyright">
                    <ExternalLink
                      target="_blank"
                      href="https://www.linkedin.com/company/riyadhair"
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
                      href="https://www.youtube.com/@riyadhair"
                    >
                      <img
                        src="/images/YouTube.png"
                        alt=""
                        style={{ width: "22px", margin: "0px 6px" }}
                      />
                    </ExternalLink>
                  </div>
                  <div className="footerCopyright">
                    <ExternalLink
                      target="_blank"
                      href="https://www.threads.net/@riyadhair"
                    >
                      <img
                        src="/images/threads.png"
                        alt=""
                        style={{ width: "22px", margin: "0px 6px" }}
                      />
                    </ExternalLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form id="formThree">
            <div className="bottomBtn">
              <button className="btn-next" type="submit">
                Create Brief
              </button>
            </div>
          </form>
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
          @media screen and (max-width: 768px) {
            .wrap {
              padding: 0;
            }
          }

          .ad-banner {
            height: 250px;
            width: 100%;
            position: relative;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            margin-top: 0px;
            background: url("/images/mobile.png") no-repeat center center;
            background-size: contain;
            background-position: 0px -25px;
          }

          .mobweb-banner {
            height: 250px;
            width: 100%;
            position: relative;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            margin-top: 0px;
            background: url("/images/mobweb.png") no-repeat center center;
            background-size: contain;
            background-position: 0px -25px;
          }

          .web-banner {
            height: 250px;
            width: 100%;
            position: relative;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            margin-top: 0px;
            background: url("/images/web.png") no-repeat center center;
            background-size: contain;
            background-position: 0px -25px;
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

          #msform {
            width: 100%;
            margin: 30px auto 0px;
            text-align: center;
            position: relative;
          }

          #progressbar {
            margin-bottom: 30px;
            overflow: hidden;
            counter-reset: step;
          }
          #progressbar li {
            list-style-type: none;
            color: white;
            text-transform: uppercase;
            font-size: 11px;
            width: 100px;
            float: left;
            position: relative;
          }
          #progressbar li:before {
            content: counter(step);
            counter-increment: step;
            width: 40px;
            line-height: 40px;
            display: block;
            font-size: 16px;
            color: #333;
            background: white;
            border-radius: 3px;
            margin: 0 auto 5px auto;
          }

          #progressbar li:after {
            content: "";
            width: 100%;
            height: 2px;
            background: white;
            position: absolute;
            left: -50%;
            top: 9px;
            z-index: -1; /*put it behind the numbers*/
          }
          #progressbar li:first-child:after {
            content: none;
          }
          #progressbar li a {
            color: white;
          }

          #progressbar li.active:before,
          #progressbar li.active:after {
            background: #817eff;
            color: white;
          }

          @media screen and (max-width: 768px) {
            .wrap .Q1title {
              width: 100%;
              padding: 0px 0px 0px 0px;
            }
            #progressbar li {
              list-style-type: none;
              color: white;
              font-size: 10px;
              width: 80px;
              float: left;
              position: relative;
            }
            #progressbar li:before {
              width: 25px;
              line-height: 25px;
              font-size: 12px;
              color: #333;
              margin: 0 auto 5px auto;
            }
          }

          /* ============== EDM ============== */
          .top-container {
            display: flex;
            /* justify-content: center; */
            /* flex-direction: column; */
            height: 100%;
            width: 100%;
            display: block;
            padding-bottom: 60px;
            border-radius: 7px;
          }

          .ad-description {
            width: 460px;
            margin: 0px auto;
            background-color: white;
            position: relative;
            border: none;
            padding: 0px;
            display: flex;

            -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
            box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          }
          .ad-description h2 {
            font-size: 22px;
            color: #333;
            font-weight: 800;
          }
          .ad-description p {
            color: rgb(51, 51, 51);
            line-height: 20px;
            font-size: 15px;
            font-weight: 100;
            font-family: sans-serif;
            width: 100%;
          }

          .main {
            display: inline-block;
            width: 100%;
            border-radius: 7px;
            padding: 80px 20px 60px;
            background-color: #f6f6f6;
          }

          @media only screen and (min-width: 768px) {
            .top-container {
              display: flex;
              justify-content: center;
              flex-direction: row;
              padding-bottom: 60px;
              border-radius: 7px;
            }
            .ad-description {
              width: 970px;
            }

            .main {
              padding: 80px 50px 60px;
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
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Campaign;
