import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Step2 = () => {
  const navigate = useNavigate();
  ReactSession.setStoreType("sessionStorage");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  // ============== DISCOUNT OFFERS ===============

  const [discountOffers, setDiscountOffers] = useState(false);

  const [discount, setDiscount] = useState([]);
  const [airfare, setAirfare] = useState(false);
  const [ancillary, setAncillary] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);
  const [stopoverDiscount, setStopoverDiscount] = useState(false);
  const [fpassDiscount, setFpassDiscount] = useState(false);

  // ========== REMOVE DISCOUNT ===========
  const onRemoveDiscount = async (event) => {
    const { value } = event.target;
    const index = discount.indexOf(value);
    if (index !== -1) {
      discount.splice(index, 1);
    }
    setDiscount([...discount]);
  };

  // ========= ADD DISCOUNT ===========
  const onDiscountChange = async (event) => {
    const { value } = event.target;
    setDiscount([...discount, value]);
  };

  // ============== GRATUITY OFFERS ===============

  const [gratuityOffers, setGratuityOffers] = useState(false);
  const [gratuity, setGratuity] = useState([]);
  const [compTkt, setCompTkt] = useState(false);
  const [companion, setCompanion] = useState(false);
  const [compBag, setCompBag] = useState(false);
  const [compSeat, setCompSeat] = useState(false);
  const [compLounge, setCompLounge] = useState(false);
  const [compPriority, setCompPriority] = useState(false);
  const [compFast, setCompFast] = useState(false);
  const [compTransfer, setCompTransfer] = useState(false);
  const [compStopover, setCompStopover] = useState(false);
  const [focChange, setFocChange] = useState(false);

  // ========== REMOVE GRATUITY ===========
  const onRemoveGratuity = async (event) => {
    const { value } = event.target;
    const index = gratuity.indexOf(value);
    if (index !== -1) {
      gratuity.splice(index, 1);
    }
    setGratuity([...gratuity]);
  };

  // ========= ADD GRATUITY ===========
  const onGratuityChange = async (event) => {
    const { value } = event.target;
    setGratuity([...gratuity, value]);
  };

  // ============== LOYALTY OFFERS ===============

  const [loyaltyOffers, setLoyaltyOffers] = useState(false);
  const [loyalty, setLoyalty] = useState([]);
  const [extraPoints, setExtraPoints] = useState(false);
  const [tierExt, setTierExt] = useState(false);
  const [statusPoints, setStatusPoints] = useState(false);
  const [lowerTier, setLowerTier] = useState(false);
  const [pointsVal, setPointsValue] = useState(false);
  const [buyPoints, setBuyPoints] = useState(false);
  const [mgmPoints, setMGMPoints] = useState(false);

  // ========== REMOVE LOYALTY ===========
  const onRemoveLoyalty = async (event) => {
    const { value } = event.target;
    const index = loyalty.indexOf(value);
    if (index !== -1) {
      loyalty.splice(index, 1);
    }
    setLoyalty([...loyalty]);
  };

  // ========= ADD LOYALTY ===========
  const onLoyaltyChange = async (event) => {
    const { value } = event.target;
    setLoyalty([...loyalty, value]);
  };

  // ============== PRIZE OFFERS ===============

  const [prizeOffers, setPrizeOffers] = useState(false);

  // ============== NO OFFER ===============

  const [noOffer, setNoOffer] = useState(false);

  // ============== ONLINE MARKETS ===============
  const [onlineMarkets, setOnlineMarkets] = useState(false);

  const [market, setMarket] = useState([]);
  const [allmarkets, setAllMarkets] = useState(false);
  const [pakistan, setPakistan] = useState(false);
  const [india, setIndia] = useState(false);
  const [bangladesh, setBangladesh] = useState(false);
  const [uk, setUk] = useState(false);
  const [germany, setGermany] = useState(false);
  const [france, setFrance] = useState(false);
  const [uae, setUae] = useState(false);
  const [ksa, setKsa] = useState(false);
  const [spain, setSpain] = useState(false);
  const [turkiye, setTurkiye] = useState(false);
  const [jordan, setJordan] = useState(false);
  const [egypt, setEgypt] = useState(false);
  const [thailand, setThailand] = useState(false);

  // ========== REMOVE ONLINE MARKETS ===========
  const onRemoveMarket = async (event) => {
    const { value } = event.target;
    const index = market.indexOf(value);
    if (index !== -1) {
      market.splice(index, 1);
    }
    setMarket([...market]);
  };

  // ========= ADD ONLINE MARKETS ===========
  const onMarketChange = async (event) => {
    const { value } = event.target;
    setMarket([...market, value]);
  };

  const onAllMarkets = async () => {
    setMarket([
      "Jordan",
      "Saudia Arabia",
      "Egypt",
      "France",
      "Germany",
      "United Kingdom",
      "Turkiye",
      "United Arab Emirates",
      "Spain",
      "Thailand",
      "Bangladesh",
      "India",
      "Pakistan",
    ]);
    setKsa(true);
    setSpain(true);
    setJordan(true);
    setEgypt(true);
    setIndia(true);
    setPakistan(true);
    setBangladesh(true);
    setTurkiye(true);
    setFrance(true);
    setGermany(true);
    setUk(true);
    setUae(true);
    setThailand(true);
  };
  const onRemoveMarkets = async (event) => {
    setKsa(false);
    setSpain(false);
    setJordan(false);
    setEgypt(false);
    setIndia(false);
    setPakistan(false);
    setBangladesh(false);
    setTurkiye(false);
    setFrance(false);
    setGermany(false);
    setUk(false);
    setUae(false);
    setThailand(false);
    setMarket([]);
  };

  // ============== OFFLINE MARKETS ===============
  const [offlineMarkets, setOfflineMarkets] = useState(false);

  const [offlineMarket, setOfflineMarket] = useState([]);
  const [offallmarkets, setOffAllMarkets] = useState(false);
  const [offpakistan, setOffPakistan] = useState(false);
  const [offindia, setOffIndia] = useState(false);
  const [offbangladesh, setOffBangladesh] = useState(false);
  const [offuk, setOffUk] = useState(false);
  const [offgermany, setOffGermany] = useState(false);
  const [offfrance, setOffFrance] = useState(false);
  const [offuae, setOffUae] = useState(false);
  const [offksa, setOffKsa] = useState(false);
  const [offesp, setOffEsp] = useState(false);
  const [offturkiye, setOffTurkiye] = useState(false);
  const [offjordan, setOffJordan] = useState(false);
  const [offegypt, setOffEgypt] = useState(false);
  const [offthailand, setOffThailand] = useState(false);

  // ========== REMOVE OFFLINE MARKETS ===========
  const onRemoveOffMarket = async (event) => {
    const { value } = event.target;
    const index = offlineMarket.indexOf(value);
    if (index !== -1) {
      offlineMarket.splice(index, 1);
    }
    setOfflineMarket([...offlineMarket]);
  };

  // ========= ADD OFFLINE MARKETS ===========
  const onOffMarketChange = async (event) => {
    const { value } = event.target;
    setOfflineMarket([...offlineMarket, value]);
  };

  const onOffAllMarkets = async () => {
    setOfflineMarket([
      "Jordan",
      "Saudia Arabia",
      "Egypt",
      "France",
      "Germany",
      "United Kingdom",
      "Turkiye",
      "United Arab Emirates",
      "Thailand",
      "Bangladesh",
      "India",
      "Pakistan",
    ]);
    setOffKsa(true);
    setOffJordan(true);
    setOffEgypt(true);
    setOffIndia(true);
    setOffPakistan(true);
    setOffBangladesh(true);
    setOffTurkiye(true);
    setOffFrance(true);
    setOffGermany(true);
    setOffUk(true);
    setOffUae(true);
    setOffThailand(true);
  };
  const onRemoveOffMarkets = async (event) => {
    setOffKsa(false);
    setOffJordan(false);
    setOffEgypt(false);
    setOffIndia(false);
    setOffPakistan(false);
    setOffBangladesh(false);
    setOffTurkiye(false);
    setOffFrance(false);
    setOffGermany(false);
    setOffUk(false);
    setOffUae(false);
    setOffThailand(false);
    setOfflineMarket([]);
  };

  // ========= POPULATE SESSION DATA ==============
  useEffect(() => {
    if (!ReactSession.get("type")) {
      setType("");
    } else {
      setType(ReactSession.get("type"));
    }

    if (!ReactSession.get("description")) {
      setDescription("");
    } else {
      setDescription(ReactSession.get("description"));
    }
    // OFFERS

    if (!ReactSession.get("fpassDiscount")) {
      setFpassDiscount(false);
    } else {
      setFpassDiscount(ReactSession.get("fpassDiscount"));
    }
    if (!ReactSession.get("stopoverDiscount")) {
      setStopoverDiscount(false);
    } else {
      setStopoverDiscount(ReactSession.get("stopoverDiscount"));
    }
    if (!ReactSession.get("thirdParty")) {
      setThirdParty(false);
    } else {
      setThirdParty(ReactSession.get("thirdParty"));
    }
    if (!ReactSession.get("ancillary")) {
      setAncillary(false);
    } else {
      setAncillary(ReactSession.get("ancillary"));
    }
    if (!ReactSession.get("discountOffers")) {
      setDiscountOffers(false);
    } else {
      setDiscountOffers(ReactSession.get("discountOffers"));
    }
    if (!ReactSession.get("discount")) {
      setDiscount([]);
    } else {
      setDiscount(ReactSession.get("discount"));
    }
    if (!ReactSession.get("airfare")) {
      setAirfare(false);
    } else {
      setAirfare(ReactSession.get("airfare"));
    }

    if (!ReactSession.get("prizeOffers")) {
      setPrizeOffers(false);
    } else {
      setPrizeOffers(ReactSession.get("prizeOffers"));
    }
    if (!ReactSession.get("noOffer")) {
      setNoOffer(false);
    } else {
      setNoOffer(ReactSession.get("noOffer"));
    }
    if (!ReactSession.get("loyaltyOffers")) {
      setLoyaltyOffers(false);
    } else {
      setLoyaltyOffers(ReactSession.get("loyaltyOffers"));
    }
    if (!ReactSession.get("loyalty")) {
      setLoyalty([]);
    } else {
      setLoyalty(ReactSession.get("loyalty"));
    }
    if (!ReactSession.get("extraPoints")) {
      setExtraPoints(false);
    } else {
      setExtraPoints(ReactSession.get("extraPoints"));
    }
    if (!ReactSession.get("tierExt")) {
      setTierExt(false);
    } else {
      setTierExt(ReactSession.get("tierExt"));
    }
    if (!ReactSession.get("statusPoints")) {
      setStatusPoints(false);
    } else {
      setStatusPoints(ReactSession.get("statusPoints"));
    }
    if (!ReactSession.get("lowerTier")) {
      setLowerTier(false);
    } else {
      setLowerTier(ReactSession.get("lowerTier"));
    }
    if (!ReactSession.get("pointsVal")) {
      setPointsValue(false);
    } else {
      setPointsValue(ReactSession.get("pointsVal"));
    }
    if (!ReactSession.get("buyPoints")) {
      setBuyPoints(false);
    } else {
      setBuyPoints(ReactSession.get("buyPoints"));
    }
    if (!ReactSession.get("mgmPoints")) {
      setMGMPoints(false);
    } else {
      setMGMPoints(ReactSession.get("mgmPoints"));
    }
    if (!ReactSession.get("gratuityOffers")) {
      setGratuityOffers(false);
    } else {
      setGratuityOffers(ReactSession.get("gratuityOffers"));
    }
    if (!ReactSession.get("gratuity")) {
      setGratuity([]);
    } else {
      setGratuity(ReactSession.get("gratuity"));
    }
    if (!ReactSession.get("compTkt")) {
      setCompTkt(false);
    } else {
      setCompTkt(ReactSession.get("compTkt"));
    }
    if (!ReactSession.get("companion")) {
      setCompanion(false);
    } else {
      setCompanion(ReactSession.get("companion"));
    }
    if (!ReactSession.get("compBag")) {
      setCompBag(false);
    } else {
      setCompBag(ReactSession.get("compBag"));
    }
    if (!ReactSession.get("compSeat")) {
      setCompSeat(false);
    } else {
      setCompSeat(ReactSession.get("compSeat"));
    }
    if (!ReactSession.get("compLounge")) {
      setCompLounge(false);
    } else {
      setCompLounge(ReactSession.get("compLounge"));
    }
    if (!ReactSession.get("compPriority")) {
      setCompPriority(false);
    } else {
      setCompPriority(ReactSession.get("compPriority"));
    }
    if (!ReactSession.get("compFast")) {
      setCompFast(false);
    } else {
      setCompFast(ReactSession.get("compFast"));
    }
    if (!ReactSession.get("compTransfer")) {
      setCompTransfer(false);
    } else {
      setCompTransfer(ReactSession.get("compTransfer"));
    }
    if (!ReactSession.get("compStopover")) {
      setCompStopover(false);
    } else {
      setCompStopover(ReactSession.get("compStopover"));
    }
    if (!ReactSession.get("focChange")) {
      setFocChange(false);
    } else {
      setFocChange(ReactSession.get("focChange"));
    }

    // ONLINE
    if (!ReactSession.get("onlineMarkets")) {
      setOnlineMarkets(false);
    } else {
      setOnlineMarkets(ReactSession.get("onlineMarkets"));
    }
    if (!ReactSession.get("market")) {
      setMarket([]);
    } else {
      setMarket(ReactSession.get("market"));
    }
    if (!ReactSession.get("allmarkets")) {
      setAllMarkets(false);
    } else {
      setAllMarkets(ReactSession.get("allmarkets"));
    }
    if (!ReactSession.get("jordan")) {
      setJordan(false);
    } else {
      setJordan(ReactSession.get("jordan"));
    }
    if (!ReactSession.get("egypt")) {
      setEgypt(false);
    } else {
      setEgypt(ReactSession.get("egypt"));
    }
    if (!ReactSession.get("uae")) {
      setUae(false);
    } else {
      setUae(ReactSession.get("uae"));
    }
    if (!ReactSession.get("turkiye")) {
      setTurkiye(false);
    } else {
      setTurkiye(ReactSession.get("turkiye"));
    }
    if (!ReactSession.get("ksa")) {
      setKsa(false);
    } else {
      setKsa(ReactSession.get("ksa"));
    }
    if (!ReactSession.get("thailand")) {
      setThailand(false);
    } else {
      setThailand(ReactSession.get("thailand"));
    }
    if (!ReactSession.get("france")) {
      setFrance(false);
    } else {
      setFrance(ReactSession.get("france"));
    }
    if (!ReactSession.get("germany")) {
      setGermany(false);
    } else {
      setGermany(ReactSession.get("germany"));
    }
    if (!ReactSession.get("uk")) {
      setUk(false);
    } else {
      setUk(ReactSession.get("uk"));
    }
    if (!ReactSession.get("india")) {
      setIndia(false);
    } else {
      setIndia(ReactSession.get("india"));
    }
    if (!ReactSession.get("pakistan")) {
      setPakistan(false);
    } else {
      setPakistan(ReactSession.get("pakistan"));
    }
    if (!ReactSession.get("bangladesh")) {
      setBangladesh(false);
    } else {
      setBangladesh(ReactSession.get("bangladesh"));
    }

    // OFFLINE
    if (!ReactSession.get("offlineMarkets")) {
      setOfflineMarkets(false);
    } else {
      setOfflineMarkets(ReactSession.get("offlineMarkets"));
    }
    if (!ReactSession.get("offlineMarket")) {
      setOfflineMarket([]);
    } else {
      setOfflineMarket(ReactSession.get("offlineMarket"));
    }
    if (!ReactSession.get("offallmarkets")) {
      setOffAllMarkets(false);
    } else {
      setOffAllMarkets(ReactSession.get("offallmarkets"));
    }
    if (!ReactSession.get("offjordan")) {
      setOffJordan(false);
    } else {
      setOffJordan(ReactSession.get("offjordan"));
    }
    if (!ReactSession.get("offegypt")) {
      setOffEgypt(false);
    } else {
      setOffEgypt(ReactSession.get("offegypt"));
    }
    if (!ReactSession.get("offuae")) {
      setOffUae(false);
    } else {
      setOffUae(ReactSession.get("offuae"));
    }
    if (!ReactSession.get("offturkiye")) {
      setOffTurkiye(false);
    } else {
      setOffTurkiye(ReactSession.get("offturkiye"));
    }
    if (!ReactSession.get("offksa")) {
      setOffKsa(false);
    } else {
      setOffKsa(ReactSession.get("offksa"));
    }
    if (!ReactSession.get("offthailand")) {
      setOffThailand(false);
    } else {
      setOffThailand(ReactSession.get("offthailand"));
    }
    if (!ReactSession.get("offfrance")) {
      setOffFrance(false);
    } else {
      setOffFrance(ReactSession.get("offfrance"));
    }
    if (!ReactSession.get("offgermany")) {
      setOffGermany(false);
    } else {
      setOffGermany(ReactSession.get("offgermany"));
    }
    if (!ReactSession.get("offuk")) {
      setOffUk(false);
    } else {
      setOffUk(ReactSession.get("offuk"));
    }
    if (!ReactSession.get("offindia")) {
      setOffIndia(false);
    } else {
      setOffIndia(ReactSession.get("offindia"));
    }
    if (!ReactSession.get("offpakistan")) {
      setOffPakistan(false);
    } else {
      setOffPakistan(ReactSession.get("offpakistan"));
    }
    if (!ReactSession.get("offbangladesh")) {
      setOffBangladesh(false);
    } else {
      setOffBangladesh(ReactSession.get("offbangladesh"));
    }
  }, []);

  // =============== SUBMIT =================
  const onSubmit = (e) => {
    e.preventDefault();
    ReactSession.set("description", description);
    // OFFERS
    ReactSession.set("discountOffers", discountOffers);
    ReactSession.set("discount", discount);
    ReactSession.set("airfare", airfare);
    ReactSession.set("ancillary", ancillary);
    ReactSession.set("thirdParty", thirdParty);
    ReactSession.set("stopoverDiscount", stopoverDiscount);
    ReactSession.set("fpassDiscount", fpassDiscount);

    ReactSession.set("gratuityOffers", gratuityOffers);
    ReactSession.set("gratuity", gratuity);
    ReactSession.set("compTkt", compTkt);
    ReactSession.set("companion", companion);
    ReactSession.set("compBag", compBag);
    ReactSession.set("compSeat", compSeat);
    ReactSession.set("compLounge", compLounge);
    ReactSession.set("compPriority", compPriority);
    ReactSession.set("compFast", compFast);
    ReactSession.set("compTransfer", compTransfer);
    ReactSession.set("compStopover", compStopover);
    ReactSession.set("focChange", focChange);
    ReactSession.set("loyaltyOffers", loyaltyOffers);
    ReactSession.set("loyalty", loyalty);
    ReactSession.set("extraPoints", extraPoints);
    ReactSession.set("tierExt", tierExt);
    ReactSession.set("statusPoints", statusPoints);
    ReactSession.set("pointsVal", pointsVal);
    ReactSession.set("lowerTier", lowerTier);
    ReactSession.set("buyPoints", buyPoints);
    ReactSession.set("mgmPoints", mgmPoints);
    ReactSession.set("prizeOffers", prizeOffers);
    ReactSession.set("noOffer", noOffer);
    // ONLINE
    ReactSession.set("onlineMarkets", onlineMarkets);
    ReactSession.set("market", market);
    ReactSession.set("allmarkets", allmarkets);
    ReactSession.set("jordan", jordan);
    ReactSession.set("spain", spain);
    ReactSession.set("egypt", egypt);
    ReactSession.set("uae", uae);
    ReactSession.set("turkiye", turkiye);
    ReactSession.set("india", india);
    ReactSession.set("pakistan", pakistan);
    ReactSession.set("bangladesh", bangladesh);
    ReactSession.set("france", france);
    ReactSession.set("germany", germany);
    ReactSession.set("uk", uk);
    ReactSession.set("ksa", ksa);
    ReactSession.set("thailand", thailand);
    // OFFLINE
    ReactSession.set("offlineMarkets", offlineMarkets);
    ReactSession.set("offlineMarket", offlineMarket);
    ReactSession.set("offallmarkets", offallmarkets);
    ReactSession.set("offjordan", offjordan);
    ReactSession.set("offegypt", offegypt);
    ReactSession.set("offuae", offuae);
    ReactSession.set("offturkiye", offturkiye);
    ReactSession.set("offindia", offindia);
    ReactSession.set("offpakistan", offpakistan);
    ReactSession.set("offbangladesh", offbangladesh);
    ReactSession.set("offfrance", offfrance);
    ReactSession.set("offgermany", offgermany);
    ReactSession.set("offuk", offuk);
    ReactSession.set("offksa", offksa);
    ReactSession.set("offthailand", offthailand);
    navigate("/step3");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Step 2 | RX Omniplanner</title>
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
                    to={type ? "/step1" : "#"}
                  >
                    Campaign Info
                  </Link>
                </li>
                <li className="active">
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("startDate")
                        ? "pointer"
                        : "default",
                    }}
                    to={"#"}
                  >
                    Description
                  </Link>
                </li>
                <li>
                  {" "}
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
                  <h2>Description</h2>

                  <div className="form-group">
                    <span className="pencil"></span>
                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Keypoints on the Campaign"
                    />
                    <div className="workhistory">
                      <textarea
                        id="content"
                        autoComplete="off"
                        cols="90"
                        rows="9"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <hr />
                  <h2>Types of Offers</h2>
                  <div className="form-group">
                    <span className="pencil"></span>

                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Offers"
                    />
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="discount"
                            type="checkbox"
                            checked={discountOffers}
                            onChange={(e) => {
                              setDiscountOffers(e.target.checked);
                              setAirfare(false);
                              setThirdParty(false);
                              setAncillary(false);
                              setStopoverDiscount(false);
                              setFpassDiscount(false);
                              setDiscount([]);
                            }}
                          />
                          <label htmlFor="discount">Discount Offers</label>
                        </div>
                      </div>
                    </div>
                    {discountOffers === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="a"
                                  type="checkbox"
                                  checked={airfare ? true : false}
                                  name="discount"
                                  onChange={(event) => {
                                    !airfare
                                      ? onDiscountChange(event)
                                      : onRemoveDiscount(event);
                                  }}
                                  onClick={() => {
                                    setAirfare(!airfare);
                                  }}
                                  value="Airfare Discount"
                                />
                                <label htmlFor="a">Airfare Discount</label>
                                <input
                                  name="discount"
                                  id="discb"
                                  checked={ancillary ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !ancillary
                                      ? onDiscountChange(event)
                                      : onRemoveDiscount(event);
                                  }}
                                  onClick={() => {
                                    setAncillary(!ancillary);
                                  }}
                                  value="Ancillary Discount"
                                />
                                <label htmlFor="discb">
                                  Ancillary Discount
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="discc"
                                  type="checkbox"
                                  name="discount"
                                  checked={thirdParty ? true : false}
                                  onChange={(event) => {
                                    !thirdParty
                                      ? onDiscountChange(event)
                                      : onRemoveDiscount(event);
                                  }}
                                  onClick={() => {
                                    setThirdParty(!thirdParty);
                                  }}
                                  value="3rd Party Discount"
                                />
                                <label htmlFor="discc">
                                  3rd Party Discount
                                </label>
                                <input
                                  id="discd"
                                  type="checkbox"
                                  name="discount"
                                  checked={stopoverDiscount ? true : false}
                                  onChange={(event) => {
                                    !stopoverDiscount
                                      ? onDiscountChange(event)
                                      : onRemoveDiscount(event);
                                  }}
                                  onClick={() => {
                                    setStopoverDiscount(!stopoverDiscount);
                                  }}
                                  value="Stopover Discount"
                                />
                                <label htmlFor="discd">Stopover Discount</label>
                              </div>
                            </div>
                          </div>
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="disce"
                                  type="checkbox"
                                  checked={fpassDiscount ? true : false}
                                  name="discount"
                                  onChange={(event) => {
                                    !fpassDiscount
                                      ? onDiscountChange(event)
                                      : onRemoveDiscount(event);
                                  }}
                                  onClick={() => {
                                    setFpassDiscount(!fpassDiscount);
                                  }}
                                  value="Flight Pass Discount"
                                />
                                <label htmlFor="disce">
                                  Flight Pass Discount
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

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="gratuity"
                            type="checkbox"
                            checked={gratuityOffers}
                            onChange={(e) => {
                              setGratuityOffers(e.target.checked);
                              setCompBag(false);
                              setCompLounge(false);
                              setCompTkt(false);
                              setCompPriority(false);
                              setCompFast(false);
                              setCompanion(false);
                              setCompSeat(false);
                              setCompStopover(false);
                              setCompTransfer(false);
                              setFocChange(false);
                              setGratuity([]);
                            }}
                          />
                          <label htmlFor="gratuity">Gratuity Offers</label>
                        </div>
                      </div>
                    </div>

                    {gratuityOffers === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="grata"
                                  type="checkbox"
                                  checked={compTkt ? true : false}
                                  name="gratuity"
                                  onChange={(event) => {
                                    !compTkt
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompTkt(!compTkt);
                                  }}
                                  value="Complimentary Ticket"
                                />
                                <label htmlFor="grata">
                                  Complimentary Ticket
                                </label>
                                <input
                                  name="gratuity"
                                  id="gratb"
                                  checked={companion ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !companion
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompanion(!companion);
                                  }}
                                  value="Companion Ticket"
                                />
                                <label htmlFor="gratb">Companion Ticket</label>
                                <input
                                  id="gratc"
                                  type="checkbox"
                                  checked={compBag ? true : false}
                                  name="gratuity"
                                  onChange={(event) => {
                                    !compBag
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompBag(!compBag);
                                  }}
                                  value="Complimentary Baggage"
                                />
                                <label htmlFor="gratc">
                                  Complimentary Baggage
                                </label>
                                <input
                                  id="gratj"
                                  type="checkbox"
                                  checked={focChange ? true : false}
                                  name="gratuity"
                                  onChange={(event) => {
                                    !focChange
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setFocChange(!focChange);
                                  }}
                                  value="FOC Fare Change"
                                />
                                <label htmlFor="gratj">FOC Fare Change</label>
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="gratd"
                                  type="checkbox"
                                  name="gratuity"
                                  checked={compSeat ? true : false}
                                  onChange={(event) => {
                                    !compSeat
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompSeat(!compSeat);
                                  }}
                                  value="Complimentary Seat"
                                />
                                <label htmlFor="gratd">
                                  Complimentary Seat
                                </label>
                                <input
                                  id="grate"
                                  type="checkbox"
                                  name="gratuity"
                                  checked={compLounge ? true : false}
                                  onChange={(event) => {
                                    !compLounge
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompLounge(!compLounge);
                                  }}
                                  value="Complimentary Lounge Pass"
                                />
                                <label htmlFor="grate">
                                  Complimentary Lounge Pass
                                </label>
                                <input
                                  id="gratf"
                                  type="checkbox"
                                  name="gratuity"
                                  checked={compPriority ? true : false}
                                  onChange={(event) => {
                                    !compPriority
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompPriority(!compPriority);
                                  }}
                                  value="Complimentary Priority Pass"
                                />
                                <label htmlFor="gratf">
                                  Complimentary Priority Pass
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="gratg"
                                  type="checkbox"
                                  checked={compFast ? true : false}
                                  name="gratuity"
                                  onChange={(event) => {
                                    !compFast
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompFast(!compFast);
                                  }}
                                  value="Complimentary Fast Track"
                                />
                                <label htmlFor="gratg">
                                  Complimentary Fast Track
                                </label>
                                <input
                                  id="grath"
                                  type="checkbox"
                                  checked={compTransfer ? true : false}
                                  name="gratuity"
                                  onChange={(event) => {
                                    !compTransfer
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompTransfer(!compTransfer);
                                  }}
                                  value="Complimentary Transfer"
                                />
                                <label htmlFor="grath">
                                  Complimentary Transfer
                                </label>
                                <input
                                  id="grati"
                                  type="checkbox"
                                  checked={compStopover ? true : false}
                                  name="gratuity"
                                  onChange={(event) => {
                                    !compStopover
                                      ? onGratuityChange(event)
                                      : onRemoveGratuity(event);
                                  }}
                                  onClick={() => {
                                    setCompStopover(!compStopover);
                                  }}
                                  value="Complimentary Stopover"
                                />
                                <label htmlFor="grati">
                                  Complimentary Stopover
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

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="loyalty"
                            type="checkbox"
                            checked={loyaltyOffers}
                            onChange={(e) => {
                              setLoyaltyOffers(e.target.checked);
                              setLoyalty([]);
                              setMGMPoints(false);
                              setBuyPoints(false);
                              setPointsValue(false);
                              setLowerTier(false);
                              setStatusPoints(false);
                              setTierExt(false);
                              setExtraPoints(false);
                            }}
                          />
                          <label htmlFor="loyalty">Loyalty Offers</label>
                        </div>
                      </div>
                    </div>
                    {loyaltyOffers === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="loyala"
                                  type="checkbox"
                                  checked={extraPoints ? true : false}
                                  name="loyalty"
                                  onChange={(event) => {
                                    !extraPoints
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setExtraPoints(!extraPoints);
                                  }}
                                  value="Extra Points"
                                />
                                <label htmlFor="loyala">Extra Points</label>
                                <input
                                  name="loyalty"
                                  id="loyalb"
                                  checked={tierExt ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !tierExt
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setTierExt(!tierExt);
                                  }}
                                  value="Tier Extension"
                                />
                                <label htmlFor="loyalb">Tier Extension</label>
                                <input
                                  id="loyalc"
                                  type="checkbox"
                                  checked={statusPoints ? true : false}
                                  name="loyalty"
                                  onChange={(event) => {
                                    !statusPoints
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setStatusPoints(!statusPoints);
                                  }}
                                  value="Status Points"
                                />
                                <label htmlFor="loyalc">Status Points</label>
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="loyald"
                                  type="checkbox"
                                  name="loyalty"
                                  checked={lowerTier ? true : false}
                                  onChange={(event) => {
                                    !lowerTier
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setLowerTier(!lowerTier);
                                  }}
                                  value="Lower Tier Achievement"
                                />
                                <label htmlFor="loyald">
                                  Lower Tier Achievement
                                </label>
                                <input
                                  id="loyale"
                                  type="checkbox"
                                  name="loyalty"
                                  checked={pointsVal ? true : false}
                                  onChange={(event) => {
                                    !pointsVal
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setPointsValue(!pointsVal);
                                  }}
                                  value="Points Value Increase"
                                />
                                <label htmlFor="loyale">
                                  Points Value Increase
                                </label>
                                <input
                                  id="loyalf"
                                  type="checkbox"
                                  name="loyalty"
                                  checked={buyPoints ? true : false}
                                  onChange={(event) => {
                                    !buyPoints
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setBuyPoints(!buyPoints);
                                  }}
                                  value="Buy Points at a Discount"
                                />
                                <label htmlFor="loyalf">
                                  Buy Points at a Discount
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="loyalg"
                                  type="checkbox"
                                  checked={mgmPoints ? true : false}
                                  name="loyalty"
                                  onChange={(event) => {
                                    !mgmPoints
                                      ? onLoyaltyChange(event)
                                      : onRemoveLoyalty(event);
                                  }}
                                  onClick={() => {
                                    setMGMPoints(!mgmPoints);
                                  }}
                                  value="MGM Points"
                                />
                                <label htmlFor="loyalg">MGM Points</label>
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
                            id="prize"
                            type="checkbox"
                            checked={prizeOffers}
                            onChange={(e) => {
                              setPrizeOffers(e.target.checked);
                            }}
                          />
                          <label htmlFor="prize">Prize Offers</label>
                        </div>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="noOffer"
                            type="checkbox"
                            checked={noOffer}
                            onChange={(e) => {
                              setNoOffer(e.target.checked);
                            }}
                          />
                          <label htmlFor="noOffer">No Offer</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <h2>Target Markets</h2>

                  <div className="form-group">
                    <span className="pencil"></span>
                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Markets"
                    />

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="online_markets"
                            type="checkbox"
                            checked={onlineMarkets}
                            onChange={(e) => {
                              setOnlineMarkets(e.target.checked);
                              onRemoveMarkets();
                              setAllMarkets(false);
                            }}
                          />
                          <label htmlFor="online_markets">Online Markets</label>
                        </div>
                      </div>
                    </div>
                    {onlineMarkets === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                {allmarkets === true ? (
                                  <>
                                    <input
                                      id="mktm"
                                      type="checkbox"
                                      checked={allmarkets ? true : false}
                                      name="market"
                                      onChange={(event) => {
                                        !allmarkets
                                          ? onAllMarkets(event)
                                          : onRemoveMarkets(event);
                                      }}
                                      onClick={() => {
                                        setAllMarkets(!allmarkets);
                                      }}
                                      value="All Online Markets"
                                    />
                                    <label htmlFor="mktm">
                                      All Online Markets
                                    </label>
                                  </>
                                ) : (
                                  <>
                                    <input
                                      id="mktm"
                                      type="checkbox"
                                      checked={allmarkets ? true : false}
                                      name="market"
                                      onChange={(event) => {
                                        !allmarkets
                                          ? onAllMarkets(event)
                                          : onRemoveMarkets(event);
                                      }}
                                      onClick={() => {
                                        setAllMarkets(!allmarkets);
                                      }}
                                      value="All Online Markets"
                                    />
                                    <label htmlFor="mktm">
                                      All Online Markets
                                    </label>
                                  </>
                                )}

                                <input
                                  id="mkth"
                                  type="checkbox"
                                  checked={bangladesh ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !bangladesh
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setBangladesh(!bangladesh);
                                    setAllMarkets(false);
                                  }}
                                  value="Bangladesh"
                                />
                                <label htmlFor="mkth">
                                  Bangladesh{" "}
                                  <img
                                    src="/images/bangladesh.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>

                                <input
                                  id="mktd"
                                  type="checkbox"
                                  name="market"
                                  checked={egypt ? true : false}
                                  onChange={(event) => {
                                    !egypt
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setEgypt(!egypt);
                                    setAllMarkets(false);
                                  }}
                                  value="Egypt"
                                />
                                <label htmlFor="mktd">
                                  Egypt{" "}
                                  <img
                                    src="/images/egypt.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mkti"
                                  type="checkbox"
                                  checked={france ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !france
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setFrance(!france);
                                    setAllMarkets(false);
                                  }}
                                  value="France"
                                />
                                <label htmlFor="mkti">
                                  France{" "}
                                  <img
                                    src="/images/france.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mktj"
                                  type="checkbox"
                                  checked={germany ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !germany
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setGermany(!germany);
                                    setAllMarkets(false);
                                  }}
                                  value="Germany"
                                />
                                <label htmlFor="mktj">
                                  Germany{" "}
                                  <img
                                    src="/images/germany.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="mktg"
                                  type="checkbox"
                                  name="market"
                                  checked={india ? true : false}
                                  onChange={(event) => {
                                    !india
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setIndia(!india);
                                    setAllMarkets(false);
                                  }}
                                  value="India"
                                />
                                <label htmlFor="mktg">
                                  India{" "}
                                  <img
                                    src="/images/india.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mktb"
                                  type="checkbox"
                                  checked={jordan ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !jordan
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setJordan(!jordan);
                                    setAllMarkets(false);
                                  }}
                                  value="Jordan"
                                />
                                <label htmlFor="mktb">
                                  Jordan{" "}
                                  <img
                                    src="/images/jordan.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mktf"
                                  type="checkbox"
                                  name="market"
                                  checked={pakistan ? true : false}
                                  onChange={(event) => {
                                    !pakistan
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setPakistan(!pakistan);
                                    setAllMarkets(false);
                                  }}
                                  value="Pakistan"
                                />
                                <label htmlFor="mktf">
                                  Pakistan{" "}
                                  <img
                                    src="/images/pakistan.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  name="market"
                                  id="mkta"
                                  checked={ksa ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !ksa
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setKsa(!ksa);
                                    setAllMarkets(false);
                                  }}
                                  value="Saudi Arabia"
                                />
                                <label htmlFor="mkta">
                                  Saudi Arabia{" "}
                                  <img
                                    src="/images/saudi.png"
                                    width="27px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  name="market"
                                  id="mktes"
                                  checked={spain ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !spain
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setSpain(!spain);
                                    setAllMarkets(false);
                                  }}
                                  value="Spain"
                                />
                                <label htmlFor="mktes">
                                  Spain{" "}
                                  <img
                                    src="/images/spain.png"
                                    width="27px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="mktl"
                                  type="checkbox"
                                  checked={thailand ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !thailand
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setThailand(!thailand);
                                    setAllMarkets(false);
                                  }}
                                  value="Thailand"
                                />
                                <label htmlFor="mktl">
                                  Thailand{" "}
                                  <img
                                    src="/images/thailand.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mktc"
                                  type="checkbox"
                                  checked={turkiye ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !turkiye
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setTurkiye(!turkiye);
                                    setAllMarkets(false);
                                  }}
                                  value="Turkiye"
                                />
                                <label htmlFor="mktc">
                                  Turkiye{" "}
                                  <img
                                    src="/images/turkiye.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mktk"
                                  type="checkbox"
                                  checked={uk ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !uk
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setUk(!uk);
                                    setAllMarkets(false);
                                  }}
                                  value="United Kingdom"
                                />
                                <label htmlFor="mktk">
                                  United Kingdom{" "}
                                  <img
                                    src="/images/uk.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="mkte"
                                  type="checkbox"
                                  name="market"
                                  checked={uae ? true : false}
                                  onChange={(event) => {
                                    !uae
                                      ? onMarketChange(event)
                                      : onRemoveMarket(event);
                                  }}
                                  onClick={() => {
                                    setUae(!uae);
                                    setAllMarkets(false);
                                  }}
                                  value="United Arab Emirates"
                                />
                                <label htmlFor="mkte">
                                  United Arab Emirates
                                  <img
                                    src="/images/uae.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
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

                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          <input
                            id="offline_markets"
                            type="checkbox"
                            checked={offlineMarkets}
                            onChange={(e) => {
                              setOfflineMarkets(e.target.checked);
                              onRemoveOffMarkets();
                              setOffAllMarkets(false);
                            }}
                          />
                          <label htmlFor="offline_markets">
                            Offline Markets
                          </label>
                        </div>
                      </div>
                    </div>

                    {offlineMarkets === true ? (
                      <>
                        <div className="row discountBox">
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                {offallmarkets === true ? (
                                  <>
                                    <input
                                      id="off_mktm"
                                      type="checkbox"
                                      checked={offallmarkets ? true : false}
                                      name="market"
                                      onChange={(event) => {
                                        !offallmarkets
                                          ? onOffAllMarkets(event)
                                          : onRemoveOffMarkets(event);
                                      }}
                                      onClick={() => {
                                        setOffAllMarkets(!offallmarkets);
                                      }}
                                      value="All Offline Markets"
                                    />
                                    <label htmlFor="off_mktm">
                                      All Offline Markets
                                    </label>
                                  </>
                                ) : (
                                  <>
                                    <input
                                      id="off_mktm"
                                      type="checkbox"
                                      checked={offallmarkets ? true : false}
                                      name="market"
                                      onChange={(event) => {
                                        !offallmarkets
                                          ? onOffAllMarkets(event)
                                          : onRemoveOffMarkets(event);
                                      }}
                                      onClick={() => {
                                        setOffAllMarkets(!offallmarkets);
                                      }}
                                      value="All Offline Markets"
                                    />
                                    <label htmlFor="off_mktm">
                                      All Offline Markets
                                    </label>
                                  </>
                                )}

                                <input
                                  id="off_mkth"
                                  type="checkbox"
                                  checked={offbangladesh ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offbangladesh
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffBangladesh(!offbangladesh);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Bangladesh"
                                />

                                <label htmlFor="off_mkth">
                                  Bangladesh
                                  <img
                                    src="/images/bangladesh.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>

                                <input
                                  id="off_mktd"
                                  type="checkbox"
                                  name="market"
                                  checked={offegypt ? true : false}
                                  onChange={(event) => {
                                    !offegypt
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffEgypt(!offegypt);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Egypt"
                                />
                                <label htmlFor="off_mktd">
                                  Egypt
                                  <img
                                    src="/images/egypt.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mkti"
                                  type="checkbox"
                                  checked={offfrance ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offfrance
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffFrance(!offfrance);
                                    setOffAllMarkets(false);
                                  }}
                                  value="France"
                                />
                                <label htmlFor="off_mkti">
                                  France{" "}
                                  <img
                                    src="/images/france.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mktj"
                                  type="checkbox"
                                  checked={offgermany ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offgermany
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffGermany(!offgermany);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Germany"
                                />
                                <label htmlFor="off_mktj">
                                  Germany{" "}
                                  <img
                                    src="/images/germany.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="off_mktg"
                                  type="checkbox"
                                  name="market"
                                  checked={offindia ? true : false}
                                  onChange={(event) => {
                                    !offindia
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffIndia(!offindia);
                                    setOffAllMarkets(false);
                                  }}
                                  value="India"
                                />
                                <label htmlFor="off_mktg">
                                  India{" "}
                                  <img
                                    src="/images/india.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mktb"
                                  type="checkbox"
                                  checked={offjordan ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offjordan
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffJordan(!offjordan);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Jordan"
                                />
                                <label htmlFor="off_mktb">
                                  Jordan{" "}
                                  <img
                                    src="/images/jordan.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mktf"
                                  type="checkbox"
                                  name="market"
                                  checked={offpakistan ? true : false}
                                  onChange={(event) => {
                                    !offpakistan
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffPakistan(!offpakistan);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Pakistan"
                                />
                                <label htmlFor="off_mktf">
                                  Pakistan{" "}
                                  <img
                                    src="/images/pakistan.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  name="market"
                                  id="off_mkta"
                                  checked={offksa ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !offksa
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffKsa(!offksa);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Saudi Arabia"
                                />
                                <label htmlFor="off_mkta">
                                  Saudi Arabia{" "}
                                  <img
                                    src="/images/saudi.png"
                                    width="27px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  name="market"
                                  id="off_mktes"
                                  checked={offesp ? true : false}
                                  type="checkbox"
                                  onChange={(event) => {
                                    !offesp
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffEsp(!offesp);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Spain"
                                />
                                <label htmlFor="off_mktes">
                                  Spain{" "}
                                  <img
                                    src="/images/spain.png"
                                    width="27px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="grid">
                            <div className="row">
                              <div className="states_flex">
                                <input
                                  id="off_mktl"
                                  type="checkbox"
                                  checked={offthailand ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offthailand
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffThailand(!offthailand);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Thailand"
                                />
                                <label htmlFor="off_mktl">
                                  Thailand{" "}
                                  <img
                                    src="/images/thailand.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mktc"
                                  type="checkbox"
                                  checked={offturkiye ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offturkiye
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffTurkiye(!offturkiye);
                                    setOffAllMarkets(false);
                                  }}
                                  value="Turkiye"
                                />
                                <label htmlFor="off_mktc">
                                  Turkiye{" "}
                                  <img
                                    src="/images/turkiye.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mktk"
                                  type="checkbox"
                                  checked={offuk ? true : false}
                                  name="market"
                                  onChange={(event) => {
                                    !offuk
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffUk(!offuk);
                                    setOffAllMarkets(false);
                                  }}
                                  value="United Kingdom"
                                />
                                <label htmlFor="off_mktk">
                                  United Kingdom{" "}
                                  <img
                                    src="/images/uk.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
                                </label>
                                <input
                                  id="off_mkte"
                                  type="checkbox"
                                  name="market"
                                  checked={offuae ? true : false}
                                  onChange={(event) => {
                                    !offuae
                                      ? onOffMarketChange(event)
                                      : onRemoveOffMarket(event);
                                  }}
                                  onClick={() => {
                                    setOffUae(!offuae);
                                    setOffAllMarkets(false);
                                  }}
                                  value="United Arab Emirates"
                                />
                                <label htmlFor="off_mkte">
                                  United Arab Emirates{" "}
                                  <img
                                    src="/images/uae.png"
                                    width="26px"
                                    style={{ marginLeft: "4px" }}
                                    alt=""
                                  />
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
                  <Link to="/step1">Go Back</Link>
                </button>
                {description ? (
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
            font-weight: 500;
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
            border: 1px solid #dadada;
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

          .container1,
          .container2,
          .container3,
          .container4 {
            position: relative;
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

export default Step2;
