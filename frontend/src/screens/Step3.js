import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Step3 = () => {
  const navigate = useNavigate();
  ReactSession.setStoreType("sessionStorage");
  const [primary, setPrimary] = useState("");

  // ========= POPULATE SESSION DATA ==============
  useEffect(() => {
    // PRIMARY
    if (!ReactSession.get("primary")) {
      setPrimary("");
    } else {
      setPrimary(ReactSession.get("primary"));
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
    if (!ReactSession.get("loyaltypoints")) {
      setLoyaltypoints([]);
    } else {
      setLoyaltypoints(ReactSession.get("loyaltypoints"));
    }
    if (!ReactSession.get("conversions")) {
      setConversions([]);
    } else {
      setConversions(ReactSession.get("conversions"));
    }

    // SECONDARY
    if (!ReactSession.get("secRevenues")) {
      setSecRevenues([]);
    } else {
      setSecRevenues(ReactSession.get("secRevenues"));
    }
    if (!ReactSession.get("secRevenue")) {
      setSecRevenue(false);
    } else {
      setSecRevenue(ReactSession.get("secRevenue"));
    }
    if (!ReactSession.get("secSale")) {
      setSecSale(false);
    } else {
      setSecSale(ReactSession.get("secSale"));
    }
    if (!ReactSession.get("secSales")) {
      setSecSales([]);
    } else {
      setSecSales(ReactSession.get("secSales"));
    }
    if (!ReactSession.get("secAqui")) {
      setSecAqui(false);
    } else {
      setSecAqui(ReactSession.get("secAqui"));
    }
    if (!ReactSession.get("secaquisitions")) {
      setSecaquisitions([]);
    } else {
      setSecaquisitions(ReactSession.get("secaquisitions"));
    }
    if (!ReactSession.get("secreeng")) {
      setSecreeng(false);
    } else {
      setSecreeng(ReactSession.get("secreeng"));
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
    if (!ReactSession.get("secloyalty")) {
      setSecloyalty(false);
    } else {
      setSecloyalty(ReactSession.get("secloyalty"));
    }
    if (!ReactSession.get("secconv")) {
      setSecConv(false);
    } else {
      setSecConv(ReactSession.get("secconv"));
    }
    if (!ReactSession.get("secconversions")) {
      setSecConversions([]);
    } else {
      setSecConversions(ReactSession.get("secconversions"));
    }

    // DESKTOP
    if (!ReactSession.get("desktop")) {
      setDesktop(false);
    } else {
      setDesktop(ReactSession.get("desktop"));
    }
    if (!ReactSession.get("channels")) {
      setChannels([]);
    } else {
      setChannels(ReactSession.get("channels"));
    }
    if (!ReactSession.get("lpage")) {
      setLpage(false);
    } else {
      setLpage(ReactSession.get("lpage"));
    }
    if (!ReactSession.get("dedicatedtile")) {
      setDedicatedtile(false);
    } else {
      setDedicatedtile(ReactSession.get("dedicatedtile"));
    }
    if (!ReactSession.get("hero")) {
      setHero(false);
    } else {
      setHero(ReactSession.get("hero"));
    }
    if (!ReactSession.get("loadscreen")) {
      setLoadscreen(false);
    } else {
      setLoadscreen(ReactSession.get("loadscreen"));
    }
    if (!ReactSession.get("destination")) {
      setDestination(false);
    } else {
      setDestination(ReactSession.get("destination"));
    }
    if (!ReactSession.get("offpage")) {
      setOffpage(false);
    } else {
      setOffpage(ReactSession.get("offpage"));
    }

    // MOBILE WEB
    if (!ReactSession.get("mobweb")) {
      setMobweb(false);
    } else {
      setMobweb(ReactSession.get("mobweb"));
    }
    // MOBILE APP
    if (!ReactSession.get("mobileApp")) {
      setMobileApp(false);
    } else {
      setMobileApp(ReactSession.get("mobileApp"));
    }
    if (!ReactSession.get("mobChannels")) {
      setMobChannels([]);
    } else {
      setMobChannels(ReactSession.get("mobChannels"));
    }
    if (!ReactSession.get("splashscreen")) {
      setSplashscreen(false);
    } else {
      setSplashscreen(ReactSession.get("splashscreen"));
    }
    if (!ReactSession.get("mobTile")) {
      setMobTile(false);
    } else {
      setMobTile(ReactSession.get("mobTile"));
    }
    if (!ReactSession.get("mobDestination")) {
      setMobDestination(false);
    } else {
      setMobDestination(ReactSession.get("mobDestination"));
    }
  }, []);

  // =============== SUBMIT =================
  const onSubmit = (e) => {
    e.preventDefault();
    // PRIMARY
    ReactSession.set("primary", primary);
    ReactSession.set("revenues", revenues);
    ReactSession.set("sales", sales);
    ReactSession.set("aquisitions", aquisitions);
    ReactSession.set("reengagements", reengagements);
    ReactSession.set("loyaltypoints", loyaltypoints);
    ReactSession.set("conversions", conversions);
    // SECONDARY
    ReactSession.set("secRevenues", secRevenues);
    ReactSession.set("secRevenue", secRevenue);
    ReactSession.set("secSale", secSale);
    ReactSession.set("secSales", secSales);
    ReactSession.set("secAqui", secAqui);
    ReactSession.set("secaquisitions", secaquisitions);
    ReactSession.set("secreeng", secreeng);
    ReactSession.set("secReengagements", secReengagements);
    ReactSession.set("secloyaltypoints", secloyaltypoints);
    ReactSession.set("secloyalty", secloyalty);
    ReactSession.set("secconv", secconv);
    ReactSession.set("secconversions", secconversions);
    // DESKTOP
    ReactSession.set("desktop", desktop);
    ReactSession.set("channels", channels);
    ReactSession.set("lpage", lpage);
    ReactSession.set("dedicatedtile", dedicatedtile);
    ReactSession.set("hero", hero);
    ReactSession.set("loadscreen", loadscreen);
    ReactSession.set("destination", destination);
    ReactSession.set("offpage", offpage);
    //MOBILE
    ReactSession.set("mobweb", mobweb);
    ReactSession.set("mobileApp", mobileApp);
    ReactSession.set("mobChannels", mobChannels);
    ReactSession.set("splashscreen", splashscreen);
    ReactSession.set("mobTile", mobTile);
    ReactSession.set("mobDestination", mobDestination);
    navigate("/step4");
  };

  // REVENUE
  const [revenues, setRevenues] = useState([]);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const onDropRevenue = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (revenues.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setRevenues([...revenues, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setRevenues([...revenues]);
    }
  };

  const deleteRevenue = (e, id) => {
    e.preventDefault();
    revenues.splice(id, 1);
    setRevenues([...revenues]);
  };

  // SALES
  const [sales, setSales] = useState([]);

  const onDropSales = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (sales.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSales([...sales, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSales([...sales]);
    }
  };

  const deleteSale = (e, id) => {
    e.preventDefault();
    sales.splice(id, 1);
    setSales([...sales]);
  };

  // AQUISITION
  const [aquisitions, setAquisitions] = useState([]);

  const onDropAqui = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (aquisitions.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setAquisitions([...aquisitions, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setAquisitions([...aquisitions]);
    }
  };

  const deleteAqui = (e, id) => {
    e.preventDefault();
    aquisitions.splice(id, 1);
    setAquisitions([...aquisitions]);
  };

  // REENGAGEMENT
  const [reengagements, setReengagements] = useState([]);

  const onDropReeng = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (reengagements.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setReengagements([...reengagements, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setReengagements([...reengagements]);
    }
  };

  const deleteReeng = (e, id) => {
    e.preventDefault();
    reengagements.splice(id, 1);
    setReengagements([...reengagements]);
  };

  // LOYALTY POINTS
  const [loyaltypoints, setLoyaltypoints] = useState([]);

  const onDropLoyalty = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (loyaltypoints.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setLoyaltypoints([...loyaltypoints, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setLoyaltypoints([...loyaltypoints]);
    }
  };

  const deleteLoyalty = (e, id) => {
    e.preventDefault();
    loyaltypoints.splice(id, 1);
    setLoyaltypoints([...loyaltypoints]);
  };

  // CONVERSIONS
  const [conversions, setConversions] = useState([]);

  const onDropConversion = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (conversions.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setConversions([...conversions, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setConversions([...conversions]);
    }
  };

  const deleteConversion = (e, id) => {
    e.preventDefault();
    conversions.splice(id, 1);
    setConversions([...conversions]);
  };

  // SECONDARY REVENUE
  const [secRevenue, setSecRevenue] = useState(false);
  const [secRevenues, setSecRevenues] = useState([]);

  const onDropSecRev = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (secRevenues.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSecRevenues([...secRevenues, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSecRevenues([...secRevenues]);
    }
  };

  const deleteSecRev = (e, id) => {
    e.preventDefault();
    secRevenues.splice(id, 1);
    setSecRevenues([...secRevenues]);
  };

  // SECONDARY SALES
  const [secSale, setSecSale] = useState(false);
  const [secSales, setSecSales] = useState([]);

  const onDropSecSale = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (secSales.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSecSales([...secSales, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSecSales([...secSales]);
    }
  };

  const deleteSecSale = (e, id) => {
    e.preventDefault();
    secSales.splice(id, 1);
    setSecSales([...secSales]);
  };

  // SECONDARY AQUISITION
  const [secAqui, setSecAqui] = useState(false);
  const [secaquisitions, setSecaquisitions] = useState([]);

  const onDropSecAqui = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (secaquisitions.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSecaquisitions([...secaquisitions, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSecaquisitions([...secaquisitions]);
    }
  };

  const deleteSecAqui = (e, id) => {
    e.preventDefault();
    secaquisitions.splice(id, 1);
    setSecaquisitions([...secaquisitions]);
  };

  // SECONDARY REENGAGEMENT
  const [secreeng, setSecreeng] = useState(false);
  const [secReengagements, setSecReengagements] = useState([]);

  const onDropSecReeng = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (secReengagements.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSecReengagements([...secReengagements, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSecReengagements([...secReengagements]);
    }
  };

  const deleteSecReeng = (e, id) => {
    e.preventDefault();
    secReengagements.splice(id, 1);
    setSecReengagements([...secReengagements]);
  };

  // SECONDARY LOYALTY POINTS
  const [secloyalty, setSecloyalty] = useState(false);
  const [secloyaltypoints, setSecloyaltypoints] = useState([]);

  const onDropSecLoyalty = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (secloyaltypoints.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSecloyaltypoints([...secloyaltypoints, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSecloyaltypoints([...secloyaltypoints]);
    }
  };

  const deleteSecLoyalty = (e, id) => {
    e.preventDefault();
    secloyaltypoints.splice(id, 1);
    setSecloyaltypoints([...secloyaltypoints]);
  };

  // SECONDARY CONVERSIONS
  const [secconv, setSecConv] = useState(false);
  const [secconversions, setSecConversions] = useState([]);

  const onDropSecConversion = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (secconversions.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setSecConversions([...secconversions, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setSecConversions([...secconversions]);
    }
  };

  const deleteSecConversion = (e, id) => {
    e.preventDefault();
    secconversions.splice(id, 1);
    setSecConversions([...secconversions]);
  };

  // PLATFORMS
  const [desktop, setDesktop] = useState(false);
  const [channels, setChannels] = useState([]);
  const [lpage, setLpage] = useState(false);
  const [dedicatedtile, setDedicatedtile] = useState(false);
  const [hero, setHero] = useState(false);
  const [loadscreen, setLoadscreen] = useState(false);
  const [destination, setDestination] = useState(false);
  const [offpage, setOffpage] = useState(false);

  // ========== REMOVE CHANNELS ===========
  const onRemoveChannel = async (event) => {
    const { value } = event.target;
    const index = channels.indexOf(value);
    if (index !== -1) {
      channels.splice(index, 1);
    }
    setChannels([...channels]);
  };

  // ========= ADD CHANNELS ===========
  const onChannelChange = async (event) => {
    const { value } = event.target;
    setChannels([...channels, value]);
  };

  const [mobweb, setMobweb] = useState(false);

  const [mobileApp, setMobileApp] = useState(false);
  const [mobChannels, setMobChannels] = useState([]);
  const [splashscreen, setSplashscreen] = useState(false);
  const [mobTile, setMobTile] = useState(false);
  const [mobDestination, setMobDestination] = useState(false);

  // ========== REMOVE MOBILE APP CHANNELS ===========
  const onRemoveMobApp = async (event) => {
    const { value } = event.target;
    const index = mobChannels.indexOf(value);
    if (index !== -1) {
      mobChannels.splice(index, 1);
    }
    setMobChannels([...mobChannels]);
  };

  // ========= ADD MOBILE APP CHANNELS ===========
  const onMobAppChange = async (event) => {
    const { value } = event.target;
    setMobChannels([...mobChannels, value]);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Step 3 | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="objectives" content="Riyadh Air" />
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
                    to={ReactSession.get("startDate") ? "/step2" : "#"}
                  >
                    Description
                  </Link>
                </li>
                <li className="active">
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
                  {" "}
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("primary")
                        ? "pointer"
                        : "default",
                    }}
                    to={ReactSession.get("primary") ? "/step4" : "#"}
                  >
                    Requirements
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor:
                        ReactSession.get("analytics") !== ""
                          ? "pointer"
                          : "default",
                    }}
                    to={ReactSession.get("analytics") !== "" ? "/step5" : "#"}
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <form id="formTwo" onSubmit={onSubmit}>
            <div className="personContent">
              <section className="questionCard container-fluid">
                <div className="container-fluid regCon">
                  <h2>Campaign Objectives</h2>
                  <div className="form-group">
                    <span className="pencil"></span>
                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Primary Objective"
                    />
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="revenue"
                            type="radio"
                            name="objective"
                            value="Revenue"
                            checked={primary === "Revenue" ? true : false}
                            onChange={(e) => {
                              setPrimary(e.target.value);
                              setSales([]);
                              setAquisitions([]);
                              setReengagements([]);
                              setLoyaltypoints([]);
                              setConversions([]);
                            }}
                          />
                          <label htmlFor="revenue">Revenue</label>
                        </div>
                      </div>
                    </div>

                    {primary === "Revenue" ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropRevenue}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {revenues.map((revenue, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteRevenue(e, index);
                                        }}
                                      />
                                      {revenue}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Flight Sales Revenue");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Flight Sales Revenue
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Ancillary Revenue");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Ancillary Revenue
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(
                                      e,
                                      "3rd Party Product Revenue"
                                    );
                                  }}
                                >
                                  <p style={{ backgroundColor: "#ffc54e" }}>
                                    3rd Party Product Revenue
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sales"
                            type="radio"
                            value="Sales"
                            name="objective"
                            checked={primary === "Sales" ? true : false}
                            onChange={(e) => {
                              setPrimary(e.target.value);
                              setRevenues([]);
                              setAquisitions([]);
                              setReengagements([]);
                              setLoyaltypoints([]);
                              setConversions([]);
                            }}
                          />
                          <label htmlFor="sales">Sales</label>
                        </div>
                      </div>
                    </div>

                    {primary === "Sales" ? (
                      <>
                        <div className="row discountBox dropInBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSales}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {sales.map((sale, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteSale(e, index);
                                        }}
                                      />
                                      {sale}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Tickets Sold");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Tickets Sold
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Ancillaries Sold");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Ancillaries Sold
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "3rd Party Product Sold");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#ffc54e" }}>
                                    3rd Party Product Sold
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="aquisition"
                            type="radio"
                            name="objective"
                            value="Aquisition"
                            checked={primary === "Aquisition" ? true : false}
                            onChange={(e) => {
                              setPrimary(e.target.value);
                              setSales([]);
                              setRevenues([]);
                              setReengagements([]);
                              setLoyaltypoints([]);
                              setConversions([]);
                            }}
                          />
                          <label htmlFor="aquisition">Aquisition</label>
                        </div>
                      </div>
                    </div>
                    {primary === "Aquisition" ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropAqui}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {aquisitions.map((aquisition, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteAqui(e, index);
                                        }}
                                      />
                                      {aquisition}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "New Subscribers");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    New Subscribers
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "New Loyalty Members");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    New Loyalty Members
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "New Mobile App Downloads");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#ffc54e" }}>
                                    New Mobile App Downloads
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="reengagement"
                            type="radio"
                            name="objective"
                            value="Reengagement"
                            checked={primary === "Reengagement" ? true : false}
                            onChange={(e) => {
                              setPrimary(e.target.value);
                              setSales([]);
                              setRevenues([]);
                              setAquisitions([]);
                              setLoyaltypoints([]);
                              setConversions([]);
                            }}
                          />
                          <label htmlFor="reengagement">Reengagement</label>
                        </div>
                      </div>
                    </div>
                    {primary === "Reengagement" ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropReeng}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {reengagements.map((reengagement, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteReeng(e, index);
                                        }}
                                      />
                                      {reengagement}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Subscribers re-engaged");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Subscribers re-engaged
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(
                                      e,
                                      "Loyalty Members re-engaged"
                                    );
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Loyalty Members re-engaged
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="loyalty_points"
                            type="radio"
                            name="objective"
                            value="Loyalty Points"
                            checked={
                              primary === "Loyalty Points" ? true : false
                            }
                            onChange={(e) => {
                              setPrimary(e.target.value);
                              setRevenues([]);
                              setSales([]);
                              setReengagements([]);
                              setAquisitions([]);
                              setConversions([]);
                            }}
                          />
                          <label htmlFor="loyalty_points">Loyalty Points</label>
                        </div>
                      </div>
                    </div>

                    {primary === "Loyalty Points" ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropLoyalty}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {loyaltypoints.map((loyaltypoint, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteLoyalty(e, index);
                                        }}
                                      />
                                      {loyaltypoint}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Points purchased");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Points purchased
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Points spent");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Points spent
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="conversion"
                            type="radio"
                            name="objective"
                            value="Conversion"
                            checked={primary === "Conversion" ? true : false}
                            onChange={(e) => {
                              setPrimary(e.target.value);
                              setRevenues([]);
                              setSales([]);
                              setAquisitions([]);
                              setReengagements([]);
                              setLoyaltypoints([]);
                            }}
                          />
                          <label htmlFor="conversion">Conversion</label>
                        </div>
                      </div>
                    </div>
                    {primary === "Conversion" ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropConversion}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {conversions.map((conversion, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteConversion(e, index);
                                        }}
                                      />
                                      {conversion}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Conversion rate");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Conversion rate
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Conversion rate increase");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Conversion rate increase
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <span className="pencil"></span>
                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Secondary Objectives"
                    />

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sec_rev"
                            type="checkbox"
                            checked={secRevenue}
                            onChange={(e) => {
                              setSecRevenue(e.target.checked);
                            }}
                          />
                          <label htmlFor="sec_rev">Revenue</label>
                        </div>
                      </div>
                    </div>

                    {secRevenue === true ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSecRev}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {secRevenues.map((secrevenue, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteSecRev(e, index);
                                        }}
                                      />
                                      {secrevenue}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Flight Sales Revenue");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Flight Sales Revenue
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Ancillary Revenue");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Ancillary Revenue
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(
                                      e,
                                      "3rd Party Product Revenue"
                                    );
                                  }}
                                >
                                  <p style={{ backgroundColor: "#ffc54e" }}>
                                    3rd Party Product Revenue
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sec_sales"
                            type="checkbox"
                            checked={secSale}
                            onChange={(e) => {
                              setSecSale(e.target.checked);
                            }}
                          />
                          <label htmlFor="sec_sales">Sales</label>
                        </div>
                      </div>
                    </div>
                    {secSale === true ? (
                      <>
                        <div className="row discountBox dropInBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSecSale}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {secSales.map((secsale, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteSecSale(e, index);
                                        }}
                                      />
                                      {secsale}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Tickets Sold");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Tickets Sold
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Ancillaries Sold");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Ancillaries Sold
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "3rd Party Product Sold");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#ffc54e" }}>
                                    3rd Party Product Sold
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sec_aquisition"
                            type="checkbox"
                            checked={secAqui}
                            onChange={(e) => {
                              setSecAqui(e.target.checked);
                            }}
                          />
                          <label htmlFor="sec_aquisition">Aquisition</label>
                        </div>
                      </div>
                    </div>
                    {secAqui === true ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSecAqui}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {secaquisitions.map((secaquisition, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteSecAqui(e, index);
                                        }}
                                      />
                                      {secaquisition}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "New Subscribers");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    New Subscribers
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "New Loyalty Members");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    New Loyalty Members
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "New Mobile App Downloads");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#ffc54e" }}>
                                    New Mobile App Downloads
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sec_reeng"
                            type="checkbox"
                            checked={secreeng}
                            onChange={(e) => {
                              setSecreeng(e.target.checked);
                            }}
                          />
                          <label htmlFor="sec_reeng">Reengagement</label>
                        </div>
                      </div>
                    </div>
                    {secreeng === true ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSecReeng}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {secReengagements.map(
                                  (secreengagement, index) => {
                                    return (
                                      <div
                                        style={{
                                          borderRadius: "7px",
                                          border: "none",
                                          textAlign: "center",
                                          marginBottom: "8px",
                                          height: "28px",
                                          lineHeight: "28px",
                                          position: "relative",
                                          color: "white",
                                          backgroundColor: "#817eff",
                                        }}
                                        key={index}
                                      >
                                        <img
                                          src="/images/cross-white.png"
                                          alt=""
                                          style={{
                                            width: "12px",
                                            cursor: "pointer",
                                            left: "0",
                                            position: "absolute",
                                            transform: "translate(9px, 7px)",
                                            textAlign: "left",
                                          }}
                                          onClick={(e) => {
                                            deleteSecReeng(e, index);
                                          }}
                                        />
                                        {secreengagement}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Subscribers re-engaged");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Subscribers re-engaged
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(
                                      e,
                                      "Loyalty Members re-engaged"
                                    );
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Loyalty Members re-engaged
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sec_loy"
                            type="checkbox"
                            checked={secloyalty}
                            onChange={(e) => {
                              setSecloyalty(e.target.checked);
                            }}
                          />
                          <label htmlFor="sec_loy">Loyalty Points</label>
                        </div>
                      </div>
                    </div>

                    {secloyalty === true ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSecLoyalty}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {secloyaltypoints.map(
                                  (secloyaltypoint, index) => {
                                    return (
                                      <div
                                        style={{
                                          borderRadius: "7px",
                                          border: "none",
                                          textAlign: "center",
                                          marginBottom: "8px",
                                          height: "28px",
                                          lineHeight: "28px",
                                          position: "relative",
                                          color: "white",
                                          backgroundColor: "#817eff",
                                        }}
                                        key={index}
                                      >
                                        <img
                                          src="/images/cross-white.png"
                                          alt=""
                                          style={{
                                            width: "12px",
                                            cursor: "pointer",
                                            left: "0",
                                            position: "absolute",
                                            transform: "translate(9px, 7px)",
                                            textAlign: "left",
                                          }}
                                          onClick={(e) => {
                                            deleteSecLoyalty(e, index);
                                          }}
                                        />
                                        {secloyaltypoint}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Points purchased");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Points purchased
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Points spent");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Points spent
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="sec_conversion"
                            type="checkbox"
                            checked={secconv}
                            onChange={(e) => {
                              setSecConv(e.target.checked);
                            }}
                          />
                          <label htmlFor="sec_conversion">Conversions</label>
                        </div>
                      </div>
                    </div>
                    {secconv === true ? (
                      <>
                        <div className="row dropInBox discountBox">
                          <div className="grid">
                            <div className="row">
                              <div
                                onDrop={onDropSecConversion}
                                onDragOver={handleDragOver}
                                style={{
                                  border: "1px solid #dadada",
                                  height: "200px",
                                  width: "240px",
                                  borderRadius: "7px",
                                  padding: "4px 5px",
                                }}
                              >
                                {secconversions.map((secconversion, index) => {
                                  return (
                                    <div
                                      style={{
                                        borderRadius: "7px",
                                        border: "none",
                                        textAlign: "center",
                                        marginBottom: "8px",
                                        height: "28px",
                                        lineHeight: "28px",
                                        position: "relative",
                                        color: "white",
                                        backgroundColor: "#817eff",
                                      }}
                                      key={index}
                                    >
                                      <img
                                        src="/images/cross-white.png"
                                        alt=""
                                        style={{
                                          width: "12px",
                                          cursor: "pointer",
                                          left: "0",
                                          position: "absolute",
                                          transform: "translate(9px, 7px)",
                                          textAlign: "left",
                                        }}
                                        onClick={(e) => {
                                          deleteSecConversion(e, index);
                                        }}
                                      />
                                      {secconversion}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <div className="widget">
                                  <p
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Conversion rate");
                                    }}
                                    style={{ backgroundColor: "deeppink" }}
                                  >
                                    Conversion rate
                                  </p>
                                </div>
                                <div
                                  className="widget"
                                  draggable="true"
                                  onDragStart={(e) => {
                                    handleOnDrag(e, "Conversion rate increase");
                                  }}
                                >
                                  <p style={{ backgroundColor: "#54c8e8" }}>
                                    Conversion rate increase
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  {secconv === true ? "" : <hr />}
                  <h2>Choose your Platforms</h2>
                  <div className="form-group">
                    <span className="pencil"></span>
                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Platforms or Channels"
                    />

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="desktop"
                            type="checkbox"
                            checked={desktop}
                            onChange={(e) => {
                              setDesktop(e.target.checked);
                              setLoadscreen(false);
                              setLpage(false);
                              setDedicatedtile(false);
                              setHero(false);
                              setOffpage(false);
                              setDestination(false);
                            }}
                          />
                          <label htmlFor="desktop">RX.com Desktop</label>
                        </div>
                      </div>
                    </div>
                    {desktop === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="lpage"
                                  type="checkbox"
                                  checked={lpage ? true : false}
                                  onChange={(event) => {
                                    !lpage
                                      ? onChannelChange(event)
                                      : onRemoveChannel(event);
                                  }}
                                  onClick={() => {
                                    setLpage(!lpage);
                                  }}
                                  value="Campaign landing page"
                                />
                                <label htmlFor="lpage">
                                  Campaign landing page
                                </label>

                                <input
                                  id="ded_tile"
                                  type="checkbox"
                                  checked={dedicatedtile ? true : false}
                                  onChange={(event) => {
                                    !dedicatedtile
                                      ? onChannelChange(event)
                                      : onRemoveChannel(event);
                                  }}
                                  onClick={() => {
                                    setDedicatedtile(!dedicatedtile);
                                  }}
                                  value="Dedicated Tile"
                                />
                                <label htmlFor="ded_tile">Dedicated Tile</label>

                                <input
                                  id="hero"
                                  type="checkbox"
                                  checked={hero ? true : false}
                                  onChange={(event) => {
                                    !hero
                                      ? onChannelChange(event)
                                      : onRemoveChannel(event);
                                  }}
                                  onClick={() => {
                                    setHero(!hero);
                                  }}
                                  value="Hero Banner"
                                />
                                <label htmlFor="hero">Hero Banner</label>
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="load_sc"
                                  type="checkbox"
                                  checked={loadscreen ? true : false}
                                  onChange={(event) => {
                                    !loadscreen
                                      ? onChannelChange(event)
                                      : onRemoveChannel(event);
                                  }}
                                  onClick={() => {
                                    setLoadscreen(!loadscreen);
                                  }}
                                  value="Loading Screen"
                                />
                                <label htmlFor="load_sc">Loading Screen</label>

                                <input
                                  id="bestemming"
                                  type="checkbox"
                                  checked={destination ? true : false}
                                  onChange={(event) => {
                                    !destination
                                      ? onChannelChange(event)
                                      : onRemoveChannel(event);
                                  }}
                                  onClick={() => {
                                    setDestination(!destination);
                                  }}
                                  value="Destination Recommendation"
                                />
                                <label htmlFor="bestemming">
                                  Destination Recommendation
                                </label>

                                <input
                                  id="offpage"
                                  type="checkbox"
                                  checked={offpage ? true : false}
                                  onChange={(event) => {
                                    !offpage
                                      ? onChannelChange(event)
                                      : onRemoveChannel(event);
                                  }}
                                  onClick={() => {
                                    setOffpage(!offpage);
                                  }}
                                  value="Offers Page"
                                />
                                <label htmlFor="offpage">Offers Page</label>
                              </div>
                            </div>
                          </div>
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex"></div>
                            </div>
                          </div>
                        </div>

                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="mob_web"
                            type="checkbox"
                            checked={mobweb}
                            onChange={(e) => {
                              setMobweb(e.target.checked);
                            }}
                          />
                          <label htmlFor="mob_web">Mobile Web</label>
                        </div>
                      </div>
                    </div>

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="mob_app"
                            type="checkbox"
                            checked={mobileApp}
                            onChange={(e) => {
                              setMobileApp(e.target.checked);
                              setMobDestination(false);
                              setSplashscreen(false);
                              setMobTile(false);
                            }}
                          />
                          <label htmlFor="mob_app">Mobile App</label>
                        </div>
                      </div>
                    </div>
                    {mobileApp === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="splash"
                                  type="checkbox"
                                  checked={splashscreen ? true : false}
                                  onChange={(event) => {
                                    !splashscreen
                                      ? onMobAppChange(event)
                                      : onRemoveMobApp(event);
                                  }}
                                  onClick={() => {
                                    setSplashscreen(!splashscreen);
                                  }}
                                  value="Splash Screen"
                                />
                                <label htmlFor="splash">Splash Screen</label>

                                <input
                                  id="mob_tile"
                                  type="checkbox"
                                  checked={mobTile ? true : false}
                                  onChange={(event) => {
                                    !mobTile
                                      ? onMobAppChange(event)
                                      : onRemoveMobApp(event);
                                  }}
                                  onClick={() => {
                                    setMobTile(!mobTile);
                                  }}
                                  value="Dedicated Tile"
                                />
                                <label htmlFor="mob_tile">Dedicated Tile</label>

                                <input
                                  id="mob_destination"
                                  type="checkbox"
                                  checked={mobDestination ? true : false}
                                  onChange={(event) => {
                                    !mobDestination
                                      ? onMobAppChange(event)
                                      : onRemoveMobApp(event);
                                  }}
                                  onClick={() => {
                                    setMobDestination(!mobDestination);
                                  }}
                                  value="Destination Recommendation"
                                />
                                <label htmlFor="mob_destination">
                                  Destination Recommendation
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <br />
                        <hr />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </section>
            </div>
            <div className="personContent">
              <section
                className="buttonCard"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button type="button" className="btn-vori">
                  <Link to="/step2">Go Back</Link>
                </button>
                {revenues.length !== 0 ||
                sales.length !== 0 ||
                aquisitions.length !== 0 ||
                reengagements.length !== 0 ||
                loyaltypoints.length !== 0 ||
                conversions.length !== 0 ? (
                  <button type="submit" className="btn-vori">
                    Next
                  </button>
                ) : (
                  <button type="button" disabled className="btn-vori">
                    Next
                  </button>
                )}
              </section>
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

          /* ========== NEXT BUTTON ==========*/
          .wrap .buttonCard {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background-color: #3c217b;
            width: 80%;
            margin: 30px auto 30px;
            text-align: center;
          }

          .btn-vori {
            position: relative;
            background-color: #817eff;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: 800;
            width: 200px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
          }

          .btn-vori:disabled {
            background-color: #ddd;
            color: #888;
            cursor: default;
            border: #ddd;
          }

          .btn-vori a {
            color: white;
            font-weight: 800;
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
          }
          @media only screen and (min-width: 768px) {
            .btn-vori {
              width: 200px;
            }
          }

          @media screen and (max-width: 768px) {
            .wrap .buttonCard {
              width: 410px;
              margin: 25px auto;
            }
            input[type="submit"] {
              width: 100%;
            }
          }

          /* ============== CHECKBOX BUTTONS TOP =========== */

          .discountBox {
            display: flex;
            justify-content: space-between;
            background-color: transparent;
            width: 100%;
            position: relative;
          }

          .dropInBox {
            display: flex;
            justify-content: space-evenly;
            background-color: transparent;
            width: 70%;
            position: relative;
          }

          .widget {
            text-align: center;
            border-radius: 7px;
            border: none;
            outline: none;
          }
          .widget p {
            height: 28px;
            line-height: 28px;
            color: #fff;
            border-radius: 7px;
            font-weight: 500;
            border: none;
            outline: none;
            margin-bottom: 8px;
          }

          .states_flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: block;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            margin: 1px 0px 0px 80px;
            height: 100%;
            width: 200px;
          }

          .discountBox .checkboxes {
            background-color: #14a248;
            cursor: pointer;
            color: white;
            border: 1px solid #14a248;
            position: relative;
            width: 250px;
            font-size: 16px;
            text-align: center;
            height: 40px;
            margin-top: 18px;
            border-radius: 4px;
            transform: translateX(19%);
            outline: none;
          }

          .discountBox .checkboxes:focus,
          .checkboxes:active {
            outline: none;
          }

          .discountBox input::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input::-moz-placeholder {
            /* Firefox 19+ */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input :-ms-input-placeholder {
            /* IE 10+ */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input:-moz-placeholder {
            /* Firefox 18- */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input[type="checkbox"] {
            opacity: 0;
            float: left;
          }

          .discountBox input[type="checkbox"] + label {
            margin: 0 0 0 20px;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            font-family: sans-serif;
            font-weight: 200;
            float: left;
            margin: 0px;
            width: 100%;
            color: #2b2b2b;
            font-weight: 600;
          }
          .discountBox input[type="checkbox"] + label::before {
            content: " ";
            position: relative;
            left: -45px;
            top: 19px;
            width: 20px;
            height: 20px;
            display: block;
            background: white;
            border-radius: 4px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }
          .discountBox input[type="checkbox"] + label::after {
            content: " ";
            position: absolute;
            left: -50px;
            top: 15px;
            width: 30px;
            height: 30px;
            display: block;
            z-index: 1;
            background: url("./../../images/check.png");
            background-repeat: no-repeat;
            background-size: 15px;
            background-position: center;
            -webkit-transition: all 0.2s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          .discountBox input[type="checkbox"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          @keyframes myframes {
            from {
              opacity: 1;
              transform: translateY(-40%);
            }
            to {
              opacity: 1;
              transform: translateY(0%);
            }
          }

          /* ============== CHECKBOX BUTTON BOTTOM =========== */

          .full_field input[type="checkbox"] {
            visibility: hidden;
          }
          .full_field input[type="checkbox"] + label {
            height: 52px;
            position: relative;
            cursor: pointer;
            font-size: 16px;
            font-family: sans-serif;
            float: left;
            width: 260px;
            margin-left: 60px;
            color: #2b2b2b;
            font-weight: 600;
            transform: translateY(10px);
          }
          .full_field input[type="checkbox"] + label::before {
            content: " ";
            position: relative;
            left: -55px;
            top: 22px;
            width: 32px;
            height: 32px;
            display: block;
            background: white;
            border-radius: 4px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .full_field input[type="checkbox"] + label::after {
            content: " ";
            position: absolute;
            left: -53px;
            top: 26px;
            width: 29px;
            height: 29px;
            display: block;
            z-index: 1;
            background: url("./../../images/check.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            -webkit-transition: all 0.2s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          .full_field input[type="checkbox"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          /* ============== RADIO BUTTON =========== */

          input[type="radio"] {
            visibility: hidden;
          }
          input[type="radio"] + label {
            height: 52px;
            position: relative;
            cursor: pointer;
            font-size: 16px;
            font-family: sans-serif;
            font-weight: 500;
            float: left;
            width: 210px;
            margin-left: 60px;
            color: #2b2b2b;
            font-weight: 600;
            transform: translateY(10px);
          }
          input[type="radio"] + label::before {
            content: " ";
            position: relative;
            left: -55px;
            top: 22px;
            width: 32px;
            height: 32px;
            display: block;
            background: white;
            border-radius: 4px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }

          input[type="radio"] + label::after {
            content: " ";
            position: absolute;
            left: -53px;
            top: 26px;
            width: 29px;
            height: 29px;
            display: block;
            z-index: 1;
            background: url("./../../images/check.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            -webkit-transition: all 0.2s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          input[type="radio"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          /* ============== CONTENT SECTION (HERO) =========== */

          .wrap .full_field .row {
            position: relative;
            top: 8%;
            width: 100%;
            left: 3%;
          }

          .wrap .full_field .col-form-label {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-top: calc(0.375rem + 1px);
            padding-bottom: calc(0.375rem + 1px);
            padding-right: 0;
            padding-left: 15px;
            font-family: sans-serif;
          }

          .wrap .full_field .column {
            width: 725px;
            margin-left: 45px;
          }

          .wrap .full_field input[type="email"],
          .wrap .full_field input[type="text"] {
            height: 42px;
            border-radius: 0px;
            text-decoration: none;
            outline: none !important;
            background: none;
            border: 2px solid #dadada;
            padding: 12px 15px;
            font-weight: 500;
            width: 100%;
            font-size: 14px;
            color: #2b2b2b;
            font-family: sans-serif;
          }

          /* ============== QUESTION CARD CONTENT =========== */

          .wrap .personContent {
            width: 90%;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }

          .wrap .questionCard {
            width: 80%;
            padding: 30px 20px;
            margin: 20px auto 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 7px;
            background: #fff;
          }
          .wrap .questionCard h2 {
            font-weight: 800;
            font-size: 28px;
            width: 650px;
            margin-top: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
            color: #2b2b2b;
          }
          .wrap .questionCard h3 {
            background-color: #817eff;
            color: white;
            font-size: 23px;
            font-weight: 800;
            text-align: center;
            line-height: 45px;
            height: 45px;
          }

          .form-group .workhistory textarea,
          .form-group .workhistory iframe {
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-size: 16px;
            line-height: 1.5;
            color: #2b2b2b;
            font-weight: 500;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ebebeb;
            border-radius: 0px;
            outline: 0;
          }

          .form-group .honour-awards textarea {
            display: block;
            width: 100%;
            height: 200px;
            padding: 0.375rem 0.75rem;
            font-size: 16px;
            line-height: 1.5;
            color: #2b2b2b;
            font-weight: 500;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ebebeb;
            border-radius: 0px;
            outline: 0;
          }

          input[type="text"] {
            height: 42px;
            text-decoration: none;
            outline: none;
            background: none;
            border: none;
            border-bottom: 2px solid #dadada;
            font-weight: 500;
            width: 295px;
            font-size: 14px;
            color: #2b2b2b;
            font-family: sans-serif;
            font-weight: 800;
          }

          .pencil {
            background-image: url("./../../images/pencil.png");
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-size: 26px;
          }

          .form-group span {
            height: 27px;
            width: 27px;
            display: inline-block;
          }

          .questionCard .form-group h2 {
            font-size: 20px;
            margin-bottom: 0px;
            margin-top: 30px;
          }

          .questionCard .form-group #description {
            font-size: 20px;
            margin-bottom: 0px;
            margin-top: 20px;
            border: none;
            color: #2b2b2b;
            font-weight: 800;
          }
          #content {
            white-space: pre-wrap;
          }

          .regCon {
            width: 90% !important;
            padding: 20px 0;
          }

          @media screen and (max-width: 768px) {
            .wrap .questionCard {
              margin: 0 auto;
              width: 440px;
            }
            .wrap .personContent {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
            }
            .wrap .questionCard h2 {
              font-weight: 800;
              font-size: 22px;
            }
          }

          .btn-vori:active,
          .btn-vori:focus {
            color: white;
            border: 1px solid #817eff;
            outline: none;
            border: none;
          }

          @media screen and (max-width: 768px) {
            .wrap .questionCard {
              margin: 0;
              width: 450px;
              margin: 0px auto;
              display: block;
            }
            input[type="text"] {
              width: 170px;
              font-size: 13px;
            }

            #description {
              width: 265px;
            }

            form .btn-save {
              width: 450px;
              margin: 25px;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Step3;
