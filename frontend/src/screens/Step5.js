import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { ExternalLink } from "react-external-link";
import { useSelector } from "react-redux";

const Step5 = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.value);
  ReactSession.setStoreType("sessionStorage");
  const [expiryDate, setExpiryDate] = useState("");

  const [loyalty, setLoyalty] = useState([]);
  const [gratuity, setGratuity] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [market, setMarket] = useState([]);
  const [offlineMarket, setOfflineMarket] = useState([]);
  const [sales, setSales] = useState([]);
  const [revenues, setRevenues] = useState([]);
  const [aquisitions, setAquisitions] = useState([]);
  const [conversions, setConversions] = useState([]);
  const [loyaltypoints, setLoyaltypoints] = useState([]);
  const [reengagements, setReengagements] = useState([]);
  const [secRevenues, setSecRevenues] = useState([]);
  const [secSales, setSecSales] = useState([]);
  const [secaquisitions, setSecaquisitions] = useState([]);
  const [secReengagements, setSecReengagements] = useState([]);
  const [secloyaltypoints, setSecloyaltypoints] = useState([]);
  const [secconversions, setSecConversions] = useState([]);
  const [mobChannels, setMobChannels] = useState([]);
  const [channels, setChannels] = useState([]);

  // =========== POPULATE SESSION DATA ==============
  useEffect(() => {
    if (!ReactSession.get("loyalty")) {
      setLoyalty([]);
    } else {
      setLoyalty(ReactSession.get("loyalty"));
    }
    if (!ReactSession.get("discount")) {
      setDiscount([]);
    } else {
      setDiscount(ReactSession.get("discount"));
    }
    if (!ReactSession.get("gratuity")) {
      setGratuity([]);
    } else {
      setGratuity(ReactSession.get("gratuity"));
    }
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
    if (!ReactSession.get("aquisitions")) {
      setAquisitions([]);
    } else {
      setAquisitions(ReactSession.get("aquisitions"));
    }
    if (!ReactSession.get("reengagements")) {
      setReengagements([]);
    } else {
      setReengagements(ReactSession.get("reengagements"));
    }
    if (!ReactSession.get("conversions")) {
      setConversions([]);
    } else {
      setConversions(ReactSession.get("conversions"));
    }
    if (!ReactSession.get("revenues")) {
      setRevenues([]);
    } else {
      setRevenues(ReactSession.get("revenues"));
    }
    if (!ReactSession.get("sales")) {
      setSales([]);
    } else {
      setSales(ReactSession.get("sales"));
    }
    if (!ReactSession.get("offlineMarket")) {
      setOfflineMarket([]);
    } else {
      setOfflineMarket(ReactSession.get("offlineMarket"));
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
    if (!ReactSession.get("mobChannels")) {
      setMobChannels([]);
    } else {
      setMobChannels(ReactSession.get("mobChannels"));
    }
    if (!ReactSession.get("channels")) {
      setChannels([]);
    } else {
      setChannels(ReactSession.get("channels"));
    }
    setExpiryDate(ReactSession.get("expiryDate"));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "api/briefs/step5?expiryDate=" +
        expiryDate,
      {
        method: "PUT",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          type: ReactSession.get("type"),
          campaignName: ReactSession.get("campaignName"),
          startDate: ReactSession.get("startDate"),
          endDate: ReactSession.get("endDate"),
          noDays: ReactSession.get("noDays"),
          expiryDate: expiryDate,
          description: ReactSession.get("description"),
          // OFFERS
          discountOffers: ReactSession.get("discountOffers"),
          discount: ReactSession.get("discount"),
          airfare: ReactSession.get("airfare"),
          ancillary: ReactSession.get("ancillary"),
          thirdParty: ReactSession.get("thirdParty"),
          stopoverDiscount: ReactSession.get("stopoverDiscount"),
          fpassDiscount: ReactSession.get("fpassDiscount"),
          gratuityOffers: ReactSession.get("gratuityOffers"),
          gratuity: ReactSession.get("gratuity"),
          compTkt: ReactSession.get("compTkt"),
          companion: ReactSession.get("companion"),
          compBag: ReactSession.get("compBag"),
          compSeat: ReactSession.get("compSeat"),
          compLounge: ReactSession.get("compLounge"),
          compPriority: ReactSession.get("compPriority"),
          compFast: ReactSession.get("compFast"),
          compTransfer: ReactSession.get("compTransfer"),
          compStopover: ReactSession.get("compStopover"),
          focChange: ReactSession.get("focChange"),
          loyaltyOffers: ReactSession.get("loyaltyOffers"),
          loyalty: ReactSession.get("loyalty"),
          extraPoints: ReactSession.get("extraPoints"),
          tierExt: ReactSession.get("tierExt"),
          statusPoints: ReactSession.get("statusPoints"),
          pointsVal: ReactSession.get("pointsVal"),
          lowerTier: ReactSession.get("lowerTier"),
          buyPoints: ReactSession.get("buyPoints"),
          mgmPoints: ReactSession.get("mgmPoints"),
          prizeOffers: ReactSession.get("prizeOffers"),
          noOffer: ReactSession.get("noOffer"),
          // ONLINE
          onlineMarkets: ReactSession.get("onlineMarkets"),
          market: ReactSession.get("market"),
          allmarkets: ReactSession.get("allmarkets"),
          jordan: ReactSession.get("jordan"),
          egypt: ReactSession.get("egypt"),
          uae: ReactSession.get("uae"),
          turkiye: ReactSession.get("turkiye"),
          india: ReactSession.get("india"),
          pakistan: ReactSession.get("pakistan"),
          bangladesh: ReactSession.get("bangladesh"),
          france: ReactSession.get("france"),
          germany: ReactSession.get("germany"),
          uk: ReactSession.get("uk"),
          ksa: ReactSession.get("ksa"),
          thailand: ReactSession.get("thailand"),
          // OFFLINE
          offlineMarkets: ReactSession.get("offlineMarkets"),
          offlineMarket: ReactSession.get("offlineMarket"),
          offallmarkets: ReactSession.get("offallmarkets"),
          offjordan: ReactSession.get("offjordan"),
          offegypt: ReactSession.get("offegypt"),
          offuae: ReactSession.get("offuae"),
          offturkiye: ReactSession.get("offturkiye"),
          offindia: ReactSession.get("offindia"),
          offpakistan: ReactSession.get("offpakistan"),
          offbangladesh: ReactSession.get("offbangladesh"),
          offfrance: ReactSession.get("offfrance"),
          offgermany: ReactSession.get("offgermany"),
          offuk: ReactSession.get("offuk"),
          offksa: ReactSession.get("offksa"),
          offthailand: ReactSession.get("offthailand"),
          // PRIMARY
          primary: ReactSession.get("primary"),
          revenues: ReactSession.get("revenues"),
          sales: ReactSession.get("sales"),
          aquisitions: ReactSession.get("aquisitions"),
          reengagements: ReactSession.get("reengagements"),
          conversion: ReactSession.get("conversions"),
          loyaltypoints: ReactSession.get("loyaltypoints"),
          //SECONDARY
          secRevenue: ReactSession.get("secRevenue"),
          secRevenues: secRevenues,
          secSale: ReactSession.get("secSale"),
          secSales: secSales,
          secAqui: ReactSession.get("secAqui"),
          secaquisitions: secaquisitions,
          secreeng: ReactSession.get("secreeng"),
          secReengagements: secReengagements,
          secloyalty: ReactSession.get("secloyalty"),
          secloyaltypoints: secloyaltypoints,
          secconv: ReactSession.get("secconv"),
          secconversions: secconversions,
          // PLATFORMS
          desktop: ReactSession.get("desktop"),
          channels: ReactSession.get("channels"),
          lpage: ReactSession.get("lpage"),
          dedicatedtile: ReactSession.get("dedicatedtile"),
          hero: ReactSession.get("hero"),
          loadscreen: ReactSession.get("loadscreen"),
          destination: ReactSession.get("destination"),
          offpage: ReactSession.get("offpage"),
          mobweb: ReactSession.get("mobweb"),
          mobileApp: ReactSession.get("mobileApp"),
          mobChannels: ReactSession.get("mobChannels"),
          splashscreen: ReactSession.get("splashscreen"),
          mobTile: ReactSession.get("mobTile"),
          mobDestination: ReactSession.get("mobDestination"),
          // CAMPAIGN REQUIREMENTS
          copybrief: ReactSession.get("copybrief"),
          mediaPlan: ReactSession.get("mediaPlan"),
          webapp: ReactSession.get("webapp"),
          budget: ReactSession.get("budget"),
          tnc: ReactSession.get("tnc"),
          terms: ReactSession.get("terms"),
          asset: ReactSession.get("asset"),
          creativeAssets: ReactSession.get("creativeAssets"),
          copy: ReactSession.get("copy"),
          translation: ReactSession.get("translation"),
          audience: ReactSession.get("audience"),
          targetAudience: ReactSession.get("targetAudience"),
          tracking: ReactSession.get("tracking"),
          analytics: ReactSession.get("analytics"),
          targetAnalytics: ReactSession.get("targetAnalytics"),
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.clear();
        navigate("/step6");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Review Step 5 | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <LoggedInNavbar />
        <div className="wrap">
          <div className="Q1title">
            <div
              id="msform"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul
                id="progressbar"
                style={{ display: "inline", paddingInlineStart: "0px" }}
              >
                <li>
                  <Link
                    style={{ fontWeight: "bold" }}
                    to={ReactSession.get("type") ? "/step1" : "#"}
                  >
                    Campaign Info
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("startDate")
                        ? "pointer"
                        : "default",
                    }}
                    to={"/step2"}
                  >
                    Description
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("description")
                        ? "pointer"
                        : "default",
                    }}
                    to={ReactSession.get("description") ? "/step3" : "#"}
                  >
                    Objectives
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("primary")
                        ? "pointer"
                        : "default",
                    }}
                    to={"/step4"}
                  >
                    Requirements
                  </Link>
                </li>
                <li className="active">
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    to="#"
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </div>
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
                    <p
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "verdana",
                      }}
                    >
                      Created By {ReactSession.get("firstName")}{" "}
                      {ReactSession.get("lastName")} (
                      {ReactSession.get("email")})
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
                      {ReactSession.get("campaignName")}
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
                      Campaign running from{" "}
                      <b>{ReactSession.get("startDate")}</b> to{" "}
                      <b>{ReactSession.get("endDate")} </b>(Total duration of{" "}
                      {ReactSession.get("noDays")} days)
                    </p>

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
                        {ReactSession.get("type")}
                      </button>
                    </div>
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
                    {ReactSession.get("description") !== "" ? (
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
                              {ReactSession.get("description")}
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
                        {ReactSession.get("discountOffers") === true ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Discount Offers
                          </p>
                        ) : (
                          ""
                        )}
                        {discount.map((disc) => {
                          return (
                            <p key={disc.id}>
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
                        {ReactSession.get("gratuityOffers") === true ? (
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
                        {gratuity.map((grat) => {
                          return (
                            <p key={grat.id}>
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                              {grat}
                            </p>
                          );
                        })}

                        {ReactSession.get("loyaltyOffers") === true ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "25px",
                            }}
                          >
                            Loyalty Offers
                          </p>
                        ) : (
                          ""
                        )}
                        {loyalty.map((loy) => {
                          return (
                            <p key={loy.id}>
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                              {loy}
                            </p>
                          );
                        })}
                        {ReactSession.get("prizeOffers") === true ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Prize Offers
                          </p>
                        ) : (
                          ""
                        )}
                        {ReactSession.get("noOffers") === true ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            No Offers
                          </p>
                        ) : (
                          ""
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
                      MARKETS
                    </h4>
                    <div
                      style={{
                        color: "#777",
                        padding: "15px 10px 5px",
                      }}
                    >
                      <div>
                        {ReactSession.get("onlineMarkets") === true ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Online Markets
                          </p>
                        ) : (
                          ""
                        )}

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
                        {ReactSession.get("offlineMarkets") === true ? (
                          <p
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Offline Markets
                          </p>
                        ) : (
                          ""
                        )}

                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "50% 50% ",
                            color: "#777",
                            padding: "15px 10px 5px",
                          }}
                        >
                          <div>
                            {offlineMarket.slice(0, 7).map((off) => {
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
                            {offlineMarket.slice(8, 15).map((off) => {
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

                        <p>
                          <img
                            src="/images/check.png"
                            alt=""
                            style={{
                              width: "18px",
                              margin: "0px 6px",
                            }}
                          />
                          {ReactSession.get("primary")}
                        </p>
                        {conversions.map((conv) => {
                          return (
                            <div
                              key={conv.id}
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
                              {conv}
                            </div>
                          );
                        })}
                        {loyaltypoints.map((loypt) => {
                          return (
                            <div
                              key={loypt.id}
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
                              {loypt}
                            </div>
                          );
                        })}
                        {reengagements.map((reeng) => {
                          return (
                            <div
                              key={reeng.id}
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
                              {reeng}
                            </div>
                          );
                        })}
                        {sales.map((sale) => {
                          return (
                            <div
                              key={sale.id}
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
                              {sale}
                            </div>
                          );
                        })}

                        {aquisitions.map((aq) => {
                          return (
                            <div
                              key={aq.id}
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
                              {aq}
                            </div>
                          );
                        })}
                        {revenues.map((rev) => {
                          return (
                            <div
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
                            </div>
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
                        {ReactSession.get("secRevenue") === true ? (
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
                        {ReactSession.get("secSale") === true ? (
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
                        {ReactSession.get("secAqui") === true ? (
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
                            Aquisition
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
                        {ReactSession.get("secreeng") === true ? (
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
                        {ReactSession.get("secloyalty") === true ? (
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
                        {ReactSession.get("secloyalty") === true ? (
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
                          justifyContent: "space-around",
                          padding: "15px 10px",
                        }}
                      >
                        {ReactSession.get("mobileApp") === true ? (
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
                              {mobChannels.map((mobile) => {
                                return (
                                  <div
                                    style={{ marginTop: "11px" }}
                                    key={mobile.id}
                                  >
                                    {mobile}
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                        {ReactSession.get("mobweb") === true ? (
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
                      {ReactSession.get("desktop") === true ? (
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
                            {channels.map((channel) => {
                              return (
                                <p
                                  style={{
                                    color: "white",
                                    fontFamily: "verdana",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    marginBottom: "10px",
                                  }}
                                  key={channel.id}
                                >
                                  {channel}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "10px 15px 25px",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                          color: "#777",
                          marginTop: "25px",
                        }}
                      >
                        CAMPAIGN REQUIREMENTS
                      </h4>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          color: "#777",
                          padding: "15px 10px 5px",
                        }}
                      >
                        <div>
                          <p>
                            Media Plan Required
                            {ReactSession.get("mediaPlan") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                          <p>Budget: {ReactSession.get("budget")} </p>
                          <p>
                            Creative Asset Required
                            {ReactSession.get("asset") === "New" ? (
                              <span
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                  borderRadius: "5px",
                                  padding: "3px 3px",
                                  fontSize: "14px",
                                  marginLeft: "4px",
                                }}
                              >
                                New
                              </span>
                            ) : (
                              <span
                                style={{
                                  backgroundColor: "green",
                                  color: "white",
                                  borderRadius: "5px",
                                  padding: "3px 3px",
                                  fontSize: "14px",
                                  marginLeft: "4px",
                                }}
                              >
                                Existing
                              </span>
                            )}
                          </p>
                          <p>
                            Translation Required
                            {ReactSession.get("translation") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                          <p>
                            Tracking Required
                            {ReactSession.get("tracking") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                        </div>
                        <div>
                          <p>
                            Web/ App touchpoints required
                            {ReactSession.get("webapp") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                          <p>
                            Terms & Conditions
                            {ReactSession.get("tnc") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                          <p>
                            Copy Required
                            {ReactSession.get("copy") === "New" ? (
                              <span
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                  borderRadius: "5px",
                                  padding: "3px 3px",
                                  fontSize: "14px",
                                  marginLeft: "4px",
                                }}
                              >
                                New
                              </span>
                            ) : (
                              <span
                                style={{
                                  backgroundColor: "green",
                                  color: "white",
                                  borderRadius: "5px",
                                  padding: "3px 3px",
                                  fontSize: "14px",
                                  marginLeft: "4px",
                                }}
                              >
                                Existing
                              </span>
                            )}
                          </p>
                          <p>
                            Target Audience Required
                            {ReactSession.get("audience") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                          <p>
                            Analytics Required
                            {ReactSession.get("analytics") === true ? (
                              <img
                                src="/images/check.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            ) : (
                              <img
                                src="/images/forbid.png"
                                alt=""
                                style={{
                                  width: "18px",
                                  margin: "0px 6px",
                                }}
                              />
                            )}
                          </p>
                        </div>
                      </div>

                      <br />
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

          <form id="formThree" onSubmit={onSubmit}>
            <div className="bottomBtn">
              <button className="btn-previous">
                <Link to="/step4">Go Back</Link>
              </button>
              <button className="btn-next" type="submit">
                Submit
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

export default Step5;
