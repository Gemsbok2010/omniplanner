import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";

const CampaignAbout = () => {
  const navigate = useNavigate();
  ReactSession.setStoreType("sessionStorage");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [rationale, setRationale] = useState("");
  const [examples, setExamples] = useState("");
  const [campaignName, setCampaignName] = useState("");

  // ============== POS MARKETS ===============

  const [market, setMarket] = useState([]);
  const [allmarkets, setAllMarkets] = useState(false);
  const [pakistan, setPakistan] = useState(false);
  const [india, setIndia] = useState(false);
  const [bangladesh, setBangladesh] = useState(false);
  const [china, setChina] = useState(false);
  const [japan, setJapan] = useState(false);
  const [korea, setKorea] = useState(false);
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

  // ========== REMOVE MARKETS ===========
  const onRemoveMarket = async (event) => {
    const { value } = event.target;
    const index = market.indexOf(value);
    if (index !== -1) {
      market.splice(index, 1);
    }
    setMarket([...market]);
  };

  // ========= ADD MARKETS ===========
  const onMarketChange = async (event) => {
    const { value } = event.target;
    setMarket([...market, value]);
  };

  const onAllMarkets = async () => {
    setMarket([
      "Jordan",
      "Saudi Arabia",
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
      "China",
      "South Korea",
      "Japan",
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
    setChina(true);
    setJapan(true);
    setKorea(true);
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
    setChina(false);
    setJapan(false);
    setKorea(false);
    setMarket([]);
  };

  // ============== PUSH TO MARKETS ===============

  const [toMarket, setToMarket] = useState([]);
  const [toAllmarkets, setToAllMarkets] = useState(false);
  const [topakistan, setToPakistan] = useState(false);
  const [toindia, setToIndia] = useState(false);
  const [tobangladesh, setToBangladesh] = useState(false);
  const [tochina, setToChina] = useState(false);
  const [tojapan, setToJapan] = useState(false);
  const [tokorea, setToKorea] = useState(false);
  const [touk, setToUk] = useState(false);
  const [togermany, setToGermany] = useState(false);
  const [tofrance, setToFrance] = useState(false);
  const [touae, setToUae] = useState(false);
  const [toksa, setToKsa] = useState(false);
  const [tospain, setToSpain] = useState(false);
  const [toturkiye, setToTurkiye] = useState(false);
  const [tojordan, setToJordan] = useState(false);
  const [toegypt, setToEgypt] = useState(false);
  const [tothailand, setToThailand] = useState(false);

  // ========== REMOVE MARKETS ===========
  const onRemoveToMarket = async (event) => {
    const { value } = event.target;
    const index = toMarket.indexOf(value);
    if (index !== -1) {
      toMarket.splice(index, 1);
    }
    setToMarket([...toMarket]);
  };

  // ========= ADD MARKETS ===========
  const onToMarketChange = async (event) => {
    const { value } = event.target;
    setToMarket([...toMarket, value]);
  };

  const onToAllMarkets = async () => {
    setToMarket([
      "Jordan",
      "Saudi Arabia",
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
      "China",
      "South Korea",
      "Japan",
    ]);
    setToKsa(true);
    setToSpain(true);
    setToJordan(true);
    setToEgypt(true);
    setToIndia(true);
    setToPakistan(true);
    setToBangladesh(true);
    setToTurkiye(true);
    setToFrance(true);
    setToGermany(true);
    setToUk(true);
    setToUae(true);
    setToChina(true);
    setToJapan(true);
    setToKorea(true);
    setToThailand(true);
  };
  const onRemoveToMarkets = async (event) => {
    setToKsa(false);
    setToSpain(false);
    setToJordan(false);
    setToEgypt(false);
    setToIndia(false);
    setToPakistan(false);
    setToBangladesh(false);
    setToTurkiye(false);
    setToFrance(false);
    setToGermany(false);
    setToUk(false);
    setToUae(false);
    setToChina(false);
    setToJapan(false);
    setToKorea(false);
    setToThailand(false);
    setToMarket([]);
  };

  // ============== SEASONS ===============

  const [season, setSeason] = useState([]);
  const [allyear, setAllYear] = useState(false);
  const [jan, setJan] = useState(false);
  const [feb, setFeb] = useState(false);
  const [mar, setMar] = useState(false);
  const [apr, setApr] = useState(false);
  const [may, setMay] = useState(false);
  const [jun, setJun] = useState(false);
  const [jul, setJul] = useState(false);
  const [aug, setAug] = useState(false);
  const [sep, setSep] = useState(false);
  const [oct, setOct] = useState(false);
  const [nov, setNov] = useState(false);
  const [dec, setDec] = useState(false);

  // ========== REMOVE SEASONS ===========
  const onRemoveSeason = async (event) => {
    const { value } = event.target;
    const index = season.indexOf(value);
    if (index !== -1) {
      season.splice(index, 1);
    }
    setSeason([...season]);
  };

  // ========= ADD SEASONS ===========
  const onSeasonChange = async (event) => {
    const { value } = event.target;
    setSeason([...season, value]);
  };

  const onAllSeasons = async () => {
    setSeason([
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
    ]);
    setJan(true);
    setFeb(true);
    setMar(true);
    setApr(true);
    setMay(true);
    setJun(true);
    setJul(true);
    setAug(true);
    setSep(true);
    setOct(true);
    setNov(true);
    setDec(true);
  };

  const onRemoveSeasons = async (event) => {
    setJan(false);
    setFeb(false);
    setMar(false);
    setApr(false);
    setMay(false);
    setJun(false);
    setJul(false);
    setAug(false);
    setSep(false);
    setOct(false);
    setNov(false);
    setDec(false);
    setSeason([]);
  };

  // ========= CLEAR Campaigns SESSION WHEN CLICKED =======
  const clearCampaign = () => {
    ReactSession.remove("camp_category");
    ReactSession.remove("camp_firstName");
    ReactSession.remove("camp_lastName");
    ReactSession.remove("camp_email");
    ReactSession.remove("market");
    ReactSession.remove("toMarket");
    ReactSession.remove("description");
    ReactSession.remove("rationale");
    ReactSession.remove("examples");
    ReactSession.remove("budget");
    ReactSession.remove("campaignName");
    ReactSession.remove("noDays");
    ReactSession.remove("season");
    ReactSession.remove("primary");
    ReactSession.remove("revenues");
    ReactSession.remove("sales");
    ReactSession.remove("aquisitions");
    ReactSession.remove("reengagements");
    ReactSession.remove("loyaltypoints");
    ReactSession.remove("conversions");
    // SECONDARY
    ReactSession.remove("secRevenues");
    ReactSession.remove("secRevenue");
    ReactSession.remove("secSale");
    ReactSession.remove("secSales");
    ReactSession.remove("secAqui");
    ReactSession.remove("secaquisitions");
    ReactSession.remove("secreeng");
    ReactSession.remove("secReengagements");
    ReactSession.remove("secloyaltypoints");
    ReactSession.remove("secloyalty");
    ReactSession.remove("secconv");
    ReactSession.remove("secconversions");
    ReactSession.remove("desktop");
    ReactSession.remove("mobileApp");
    ReactSession.remove("mobWeb");
    ReactSession.remove("allmarkets");
    ReactSession.remove("jordan");
    ReactSession.remove("egypt");
    ReactSession.remove("uae");
    ReactSession.remove("turkiye");
    ReactSession.remove("india");
    ReactSession.remove("pakistan");
    ReactSession.remove("bangladesh");
    ReactSession.remove("france");
    ReactSession.remove("germany");
    ReactSession.remove("spain");
    ReactSession.remove("uk");
    ReactSession.remove("ksa");
    ReactSession.remove("thailand");
    ReactSession.remove("china");
    ReactSession.remove("japan");
    ReactSession.remove("korea");
    ReactSession.remove("toMarket");
    ReactSession.remove("toAllmarkets");
    ReactSession.remove("tojordan");
    ReactSession.remove("toegypt");
    ReactSession.remove("touae");
    ReactSession.remove("toturkiye");
    ReactSession.remove("toindia");
    ReactSession.remove("topakistan");
    ReactSession.remove("tobangladesh");
    ReactSession.remove("tofrance");
    ReactSession.remove("togermany");
    ReactSession.remove("tospain");
    ReactSession.remove("touk");
    ReactSession.remove("toksa");
    ReactSession.remove("tothailand");
    ReactSession.remove("tochina");
    ReactSession.remove("tojapan");
    ReactSession.remove("tokorea");
    ReactSession.remove("jan");
    ReactSession.remove("feb");
    ReactSession.remove("mar");
    ReactSession.remove("apr");
    ReactSession.remove("may");
    ReactSession.remove("jun");
    ReactSession.remove("jul");
    ReactSession.remove("aug");
    ReactSession.remove("sep");
    ReactSession.remove("oct");
    ReactSession.remove("nov");
    ReactSession.remove("dec");
    ReactSession.remove("allyear");
    // PLATFORM
    ReactSession.remove("facebook");
    ReactSession.remove("newsletter");
    ReactSession.remove("twitter");
    ReactSession.remove("youtube");
    ReactSession.remove("thread");
    ReactSession.remove("linkedin");
    ReactSession.remove("instagram");
    ReactSession.remove("tiktok");
    ReactSession.remove("wechat");
    ReactSession.remove("weibo");
  };

  // ============= POPULATE SESSION DATA =================
  useEffect(() => {
    if (!ReactSession.get("description")) {
      setDescription("");
    } else {
      setDescription(ReactSession.get("description"));
    }
    if (!ReactSession.get("rationale")) {
      setRationale("");
    } else {
      setRationale(ReactSession.get("rationale"));
    }
    if (!ReactSession.get("examples")) {
      setExamples("");
    } else {
      setExamples(ReactSession.get("examples"));
    }
    if (!ReactSession.get("budget")) {
      setBudget("");
    } else {
      setBudget(ReactSession.get("budget"));
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
    if (!ReactSession.get("spain")) {
      setSpain(false);
    } else {
      setSpain(ReactSession.get("spain"));
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
    if (!ReactSession.get("china")) {
      setChina(false);
    } else {
      setChina(ReactSession.get("china"));
    }
    if (!ReactSession.get("japan")) {
      setJapan(false);
    } else {
      setJapan(ReactSession.get("japan"));
    }
    if (!ReactSession.get("korea")) {
      setKorea(false);
    } else {
      setKorea(ReactSession.get("korea"));
    }

    if (!ReactSession.get("toMarket")) {
      setToMarket([]);
    } else {
      setToMarket(ReactSession.get("toMarket"));
    }
    if (!ReactSession.get("toAllmarkets")) {
      setToAllMarkets(false);
    } else {
      setToAllMarkets(ReactSession.get("toAllmarkets"));
    }
    if (!ReactSession.get("tojordan")) {
      setToJordan(false);
    } else {
      setToJordan(ReactSession.get("tojordan"));
    }
    if (!ReactSession.get("toegypt")) {
      setToEgypt(false);
    } else {
      setToEgypt(ReactSession.get("toegypt"));
    }
    if (!ReactSession.get("touae")) {
      setToUae(false);
    } else {
      setToUae(ReactSession.get("touae"));
    }
    if (!ReactSession.get("toturkiye")) {
      setToTurkiye(false);
    } else {
      setToTurkiye(ReactSession.get("toturkiye"));
    }
    if (!ReactSession.get("toksa")) {
      setToKsa(false);
    } else {
      setToKsa(ReactSession.get("toksa"));
    }
    if (!ReactSession.get("tothailand")) {
      setToThailand(false);
    } else {
      setToThailand(ReactSession.get("tothailand"));
    }
    if (!ReactSession.get("tofrance")) {
      setToFrance(false);
    } else {
      setToFrance(ReactSession.get("tofrance"));
    }
    if (!ReactSession.get("togermany")) {
      setToGermany(false);
    } else {
      setToGermany(ReactSession.get("togermany"));
    }
    if (!ReactSession.get("touk")) {
      setToUk(false);
    } else {
      setToUk(ReactSession.get("touk"));
    }
    if (!ReactSession.get("toindia")) {
      setToIndia(false);
    } else {
      setToIndia(ReactSession.get("toindia"));
    }
    if (!ReactSession.get("tospain")) {
      setToSpain(false);
    } else {
      setToSpain(ReactSession.get("tospain"));
    }
    if (!ReactSession.get("topakistan")) {
      setToPakistan(false);
    } else {
      setToPakistan(ReactSession.get("topakistan"));
    }
    if (!ReactSession.get("tobangladesh")) {
      setToBangladesh(false);
    } else {
      setToBangladesh(ReactSession.get("tobangladesh"));
    }
    if (!ReactSession.get("tochina")) {
      setToChina(false);
    } else {
      setToChina(ReactSession.get("tochina"));
    }
    if (!ReactSession.get("tojapan")) {
      setToJapan(false);
    } else {
      setToJapan(ReactSession.get("tojapan"));
    }
    if (!ReactSession.get("tokorea")) {
      setToKorea(false);
    } else {
      setToKorea(ReactSession.get("tokorea"));
    }

    if (!ReactSession.get("campaignName")) {
      setCampaignName("");
    } else {
      setCampaignName(ReactSession.get("campaignName"));
    }
    if (!ReactSession.get("planDays")) {
      setPlanDays("");
    } else {
      setPlanDays(ReactSession.get("planDays"));
    }
    if (!ReactSession.get("noDays")) {
      setNoDays("");
    } else {
      setNoDays(ReactSession.get("noDays"));
    }
    if (!ReactSession.get("season")) {
      setSeason([]);
    } else {
      setSeason(ReactSession.get("season"));
    }
    if (!ReactSession.get("jan")) {
      setJan(false);
    } else {
      setJan(ReactSession.get("jan"));
    }
    if (!ReactSession.get("feb")) {
      setFeb(false);
    } else {
      setFeb(ReactSession.get("feb"));
    }
    if (!ReactSession.get("mar")) {
      setMar(false);
    } else {
      setMar(ReactSession.get("mar"));
    }
    if (!ReactSession.get("apr")) {
      setApr(false);
    } else {
      setApr(ReactSession.get("apr"));
    }
    if (!ReactSession.get("may")) {
      setMay(false);
    } else {
      setMay(ReactSession.get("may"));
    }
    if (!ReactSession.get("jun")) {
      setJun(false);
    } else {
      setJun(ReactSession.get("jun"));
    }
    if (!ReactSession.get("jul")) {
      setJul(false);
    } else {
      setJul(ReactSession.get("jul"));
    }
    if (!ReactSession.get("aug")) {
      setAug(false);
    } else {
      setAug(ReactSession.get("aug"));
    }
    if (!ReactSession.get("sep")) {
      setSep(false);
    } else {
      setSep(ReactSession.get("sep"));
    }
    if (!ReactSession.get("oct")) {
      setOct(false);
    } else {
      setOct(ReactSession.get("oct"));
    }
    if (!ReactSession.get("nov")) {
      setNov(false);
    } else {
      setNov(ReactSession.get("nov"));
    }
    if (!ReactSession.get("dec")) {
      setDec(false);
    } else {
      setDec(ReactSession.get("dec"));
    }
    if (!ReactSession.get("allyear")) {
      setAllYear(false);
    } else {
      setAllYear(ReactSession.get("allyear"));
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ReactSession.set("budget", budget);
    ReactSession.set("description", description);
    ReactSession.set("rationale", rationale);
    ReactSession.set("examples", examples);
    ReactSession.set("market", market);
    ReactSession.set("allmarkets", allmarkets);
    ReactSession.set("jordan", jordan);
    ReactSession.set("egypt", egypt);
    ReactSession.set("uae", uae);
    ReactSession.set("turkiye", turkiye);
    ReactSession.set("india", india);
    ReactSession.set("pakistan", pakistan);
    ReactSession.set("bangladesh", bangladesh);
    ReactSession.set("france", france);
    ReactSession.set("germany", germany);
    ReactSession.set("spain", spain);
    ReactSession.set("uk", uk);
    ReactSession.set("ksa", ksa);
    ReactSession.set("thailand", thailand);
    ReactSession.set("china", china);
    ReactSession.set("japan", japan);
    ReactSession.set("korea", korea);
    ReactSession.set("toMarket", toMarket);
    ReactSession.set("toAllmarkets", toAllmarkets);
    ReactSession.set("tojordan", tojordan);
    ReactSession.set("toegypt", toegypt);
    ReactSession.set("touae", touae);
    ReactSession.set("toturkiye", toturkiye);
    ReactSession.set("toindia", toindia);
    ReactSession.set("topakistan", topakistan);
    ReactSession.set("tobangladesh", tobangladesh);
    ReactSession.set("tofrance", tofrance);
    ReactSession.set("togermany", togermany);
    ReactSession.set("tospain", tospain);
    ReactSession.set("touk", touk);
    ReactSession.set("toksa", toksa);
    ReactSession.set("tothailand", tothailand);
    ReactSession.set("tochina", tochina);
    ReactSession.set("tojapan", tojapan);
    ReactSession.set("tokorea", tokorea);
    ReactSession.set("campaignName", campaignName);
    ReactSession.set("planDays", planDays);
    ReactSession.set("noDays", noDays);
    ReactSession.set("season", season);
    ReactSession.set("jan", jan);
    ReactSession.set("feb", feb);
    ReactSession.set("mar", mar);
    ReactSession.set("apr", apr);
    ReactSession.set("may", may);
    ReactSession.set("jun", jun);
    ReactSession.set("jul", jul);
    ReactSession.set("aug", aug);
    ReactSession.set("sep", sep);
    ReactSession.set("oct", oct);
    ReactSession.set("nov", nov);
    ReactSession.set("dec", dec);
    ReactSession.set("allyear", allyear);
    navigate("/campaigninfo");
  };

  // ============ CALENDAR ================
  const [planDays, setPlanDays] = useState("");
  const [noDays, setNoDays] = useState("");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Campaigns | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <LoggedInNavbar />
        <div className="personal_details">
          <Link to="/dashboard">Back to my Dashboard</Link>
          <h2>Add Campaigns</h2>
        </div>
        <div className="wrap">
          <div className="divider">
            <div className="personContent">
              <div className="threeItem">
                <div onClick={clearCampaign}>
                  <Link style={{ color: "#817eff" }} to="/campaigns">
                    {" "}
                    Add a Campaign
                  </Link>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Category: <span>{ReactSession.get("camp_category")}</span>
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Campaign Name:{" "}
                    {ReactSession.get("campaignName") ? (
                      <span>{ReactSession.get("campaignName")}</span>
                    ) : (
                      <span>{campaignName}</span>
                    )}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Campaign Days:{" "}
                    {noDays <= 1 ? (
                      <span>{noDays} day</span>
                    ) : (
                      <span>{noDays} days</span>
                    )}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Season(s):{" "}
                    {season &&
                      season.map((sea) => {
                        return season.at(-1) === sea && season.length > 1 ? (
                          <span key={sea}>& {sea}. </span>
                        ) : (
                          <span key={sea}>{sea}, </span>
                        );
                      })}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Budget:{" "}
                    {ReactSession.get("budget") ? (
                      <span>{ReactSession.get("budget")}</span>
                    ) : (
                      <span>{budget}</span>
                    )}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Description:{" "}
                    {ReactSession.get("description") ? (
                      <span>{ReactSession.get("description")}</span>
                    ) : (
                      <span>{description}</span>
                    )}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Rationale:{" "}
                    {ReactSession.get("rationale") ? (
                      <span>{ReactSession.get("rationale")}</span>
                    ) : (
                      <span>{rationale}</span>
                    )}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Examples:{" "}
                    {ReactSession.get("examples") ? (
                      <span>{ReactSession.get("examples")}</span>
                    ) : (
                      <span>{examples}</span>
                    )}
                  </p>
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    POS Market(s):{" "}
                    {market &&
                      market.map((mar) => {
                        return market.at(-1) === mar && market.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
                        );
                      })}
                  </p>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Push To Market(s):{" "}
                    {toMarket &&
                      toMarket.map((tomar) => {
                        return toMarket.at(-1) === tomar &&
                          toMarket.length > 1 ? (
                          <span key={tomar}>& {tomar}. </span>
                        ) : (
                          <span key={tomar}>{tomar}, </span>
                        );
                      })}
                  </p>
                </div>
              </div>
            </div>
            <form id="formSeven" onSubmit={onSubmit}>
              <div className="personContent">
                <section className="questionCard container">
                  <h2>Campaign Information</h2>
                  <div className="container-fluid regCon">
                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_name"
                          className="label col-form-label"
                        >
                          Campaign Name
                        </label>
                        <div className="campaign">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            className="form-control-lg"
                            id="campaign_name"
                            value={campaignName ? campaignName : ""}
                            onChange={(e) => {
                              setCampaignName(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          htmlFor="total_days"
                          className="label col-form-label"
                        >
                          Planning (days)
                        </label>
                        <div className="field">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="total_days"
                            autoComplete="off"
                            maxLength={4}
                            value={planDays}
                            onChange={(e) => {
                              setPlanDays(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          htmlFor="total_days"
                          className="label col-form-label"
                        >
                          Duration (days)
                        </label>
                        <div className="field">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="total_days"
                            autoComplete="off"
                            maxLength={4}
                            value={noDays}
                            onChange={(e) => {
                              setNoDays(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group row">
                        <label
                          htmlFor="total_days"
                          className="label col-form-label"
                        >
                          Budget
                        </label>
                        <div className="field">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="total_days"
                            autoComplete="off"
                            value={budget}
                            onChange={(e) => {
                              setBudget(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 style={{ marginBottom: "0px", padding: "0px" }}>
                    Season(s)
                  </h2>

                  <div className="row discountBox">
                    <div className="grid">
                      <div className="row">
                        <div className="states_flex">
                          {allyear === true ? (
                            <>
                              <input
                                id="allyear"
                                type="checkbox"
                                checked={allyear ? true : false}
                                name="season"
                                onChange={(event) => {
                                  !allyear
                                    ? onAllSeasons(event)
                                    : onRemoveSeasons(event);
                                }}
                                onClick={() => {
                                  setAllYear(!allyear);
                                }}
                                value="All Year"
                              />
                              <label htmlFor="allyear">All Year</label>
                            </>
                          ) : (
                            <>
                              <input
                                id="allyear"
                                type="checkbox"
                                checked={allyear ? true : false}
                                name="market"
                                onChange={(event) => {
                                  !allyear
                                    ? onAllSeasons(event)
                                    : onRemoveSeasons(event);
                                }}
                                onClick={() => {
                                  setAllYear(!allyear);
                                }}
                                value="All Year"
                              />
                              <label htmlFor="allyear">All Year</label>
                            </>
                          )}

                          <input
                            id="jan"
                            type="checkbox"
                            checked={jan ? true : false}
                            name="season"
                            onChange={(event) => {
                              !jan
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setJan(!jan);
                              setAllYear(false);
                            }}
                            value="January"
                          />
                          <label htmlFor="jan">January </label>

                          <input
                            id="feb"
                            type="checkbox"
                            name="season"
                            checked={feb ? true : false}
                            onChange={(event) => {
                              !feb
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setFeb(!feb);
                              setAllYear(false);
                            }}
                            value="February"
                          />
                          <label htmlFor="feb">February </label>
                          <input
                            id="mar"
                            type="checkbox"
                            checked={mar ? true : false}
                            name="season"
                            onChange={(event) => {
                              !mar
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setMar(!mar);
                              setAllYear(false);
                            }}
                            value="March"
                          />
                          <label htmlFor="mar">March </label>
                          <input
                            id="apr"
                            type="checkbox"
                            checked={apr ? true : false}
                            name="market"
                            onChange={(event) => {
                              !apr
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setApr(!apr);
                              setAllYear(false);
                            }}
                            value="April"
                          />
                          <label htmlFor="apr">April </label>
                        </div>
                      </div>
                    </div>

                    <div className="grid">
                      <div className="row">
                        <div className="states_flex">
                          <input
                            id="may"
                            type="checkbox"
                            name="season"
                            checked={may ? true : false}
                            onChange={(event) => {
                              !may
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setMay(!may);
                              setAllYear(false);
                            }}
                            value="May"
                          />
                          <label htmlFor="may">May </label>
                          <input
                            id="jun"
                            type="checkbox"
                            checked={jun ? true : false}
                            name="market"
                            onChange={(event) => {
                              !jun
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setJun(!jun);
                              setAllYear(false);
                            }}
                            value="June"
                          />
                          <label htmlFor="jun">June </label>
                          <input
                            id="jul"
                            type="checkbox"
                            name="season"
                            checked={jul ? true : false}
                            onChange={(event) => {
                              !jul
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setJul(!jul);
                              setAllYear(false);
                            }}
                            value="July"
                          />
                          <label htmlFor="jul">July </label>
                          <input
                            name="season"
                            id="aug"
                            checked={aug ? true : false}
                            type="checkbox"
                            onChange={(event) => {
                              !aug
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setAug(!aug);
                              setAllYear(false);
                            }}
                            value="August"
                          />
                          <label htmlFor="aug">August </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="row">
                        <div className="states_flex">
                          <input
                            id="sep"
                            type="checkbox"
                            checked={sep ? true : false}
                            name="season"
                            onChange={(event) => {
                              !sep
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setSep(!sep);
                              setAllYear(false);
                            }}
                            value="September"
                          />
                          <label htmlFor="sep">September </label>
                          <input
                            id="oct"
                            type="checkbox"
                            checked={oct ? true : false}
                            name="season"
                            onChange={(event) => {
                              !oct
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setOct(!oct);
                              setAllYear(false);
                            }}
                            value="October"
                          />
                          <label htmlFor="oct">October </label>
                          <input
                            id="nov"
                            type="checkbox"
                            checked={nov ? true : false}
                            name="season"
                            onChange={(event) => {
                              !nov
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setNov(!nov);
                              setAllYear(false);
                            }}
                            value="November"
                          />
                          <label htmlFor="nov">November </label>
                          <input
                            id="dec"
                            type="checkbox"
                            name="market"
                            checked={dec ? true : false}
                            onChange={(event) => {
                              !dec
                                ? onSeasonChange(event)
                                : onRemoveSeason(event);
                            }}
                            onClick={() => {
                              setDec(!dec);
                              setAllYear(false);
                            }}
                            value="December"
                          />
                          <label htmlFor="dec">December</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2>Description</h2>
                  <textarea
                    id="about"
                    maxLength="1000"
                    placeholder="A minimum of 50 characters and maximum of 1000 characters"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <br />

                  <h2>Rationale</h2>
                  <textarea
                    id="about"
                    maxLength="1000"
                    placeholder="A minimum of 50 characters and maximum of 1000 characters"
                    value={rationale}
                    onChange={(e) => {
                      setRationale(e.target.value);
                    }}
                  />
                  <br />
                  <h2>Competitor Examples</h2>
                  <textarea
                    id="about"
                    maxLength="500"
                    placeholder="A minimum of 50 characters and maximum of 500 characters"
                    value={examples}
                    onChange={(e) => {
                      setExamples(e.target.value);
                    }}
                  />
                  <br />

                  <h2 style={{ marginBottom: "0px", padding: "0px" }}>
                    POS Market(s)
                  </h2>

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
                              <label htmlFor="mktm">All Markets</label>
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
                              <label htmlFor="mktm">All Markets</label>
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
                            id="mkcn"
                            type="checkbox"
                            checked={china ? true : false}
                            name="market"
                            onChange={(event) => {
                              !china
                                ? onMarketChange(event)
                                : onRemoveMarket(event);
                            }}
                            onClick={() => {
                              setChina(!china);
                              setAllMarkets(false);
                            }}
                            value="China"
                          />
                          <label htmlFor="mkcn">
                            China{" "}
                            <img
                              src="/images/china.png"
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
                            id="mkjp"
                            type="checkbox"
                            checked={japan ? true : false}
                            name="market"
                            onChange={(event) => {
                              !japan
                                ? onMarketChange(event)
                                : onRemoveMarket(event);
                            }}
                            onClick={() => {
                              setJapan(!japan);
                              setAllMarkets(false);
                            }}
                            value="Japan"
                          />
                          <label htmlFor="mkjp">
                            Japan{" "}
                            <img
                              src="/images/japan.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt="Japan"
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
                            id="mkpk"
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
                          <label htmlFor="mkpk">
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
                            id="mktsaudi"
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
                          <label htmlFor="mktsaudi">
                            Saudi Arabia{" "}
                            <img
                              src="/images/saudi.png"
                              width="27px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mkkr"
                            type="checkbox"
                            checked={korea ? true : false}
                            name="market"
                            onChange={(event) => {
                              !korea
                                ? onMarketChange(event)
                                : onRemoveMarket(event);
                            }}
                            onClick={() => {
                              setKorea(!korea);
                              setAllMarkets(false);
                            }}
                            value="South Korea"
                          />
                          <label htmlFor="mkkr">
                            South Korea{" "}
                            <img
                              src="/images/korea.png"
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

                  <h2 style={{ marginBottom: "0px", padding: "0px" }}>
                    Push To Market(s)
                  </h2>

                  <div className="row discountBox">
                    <div className="grid">
                      <div className="row">
                        <div className="states_flex">
                          {toAllmarkets === true ? (
                            <>
                              <input
                                id="mktoall"
                                type="checkbox"
                                checked={toAllmarkets ? true : false}
                                name="to_market"
                                onChange={(event) => {
                                  !toAllmarkets
                                    ? onToAllMarkets(event)
                                    : onRemoveToMarkets(event);
                                }}
                                onClick={() => {
                                  setToAllMarkets(!toAllmarkets);
                                }}
                                value="All Online Markets"
                              />
                              <label htmlFor="mktoall">All Markets</label>
                            </>
                          ) : (
                            <>
                              <input
                                id="mktoall"
                                type="checkbox"
                                checked={toAllmarkets ? true : false}
                                name="to_market"
                                onChange={(event) => {
                                  !toAllmarkets
                                    ? onToAllMarkets(event)
                                    : onRemoveToMarkets(event);
                                }}
                                onClick={() => {
                                  setToAllMarkets(!toAllmarkets);
                                }}
                                value="All Online Markets"
                              />
                              <label htmlFor="mktoall">All Markets</label>
                            </>
                          )}

                          <input
                            id="mktoba"
                            type="checkbox"
                            checked={tobangladesh ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tobangladesh
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToBangladesh(!tobangladesh);
                              setToAllMarkets(false);
                            }}
                            value="Bangladesh"
                          />
                          <label htmlFor="mktoba">
                            Bangladesh{" "}
                            <img
                              src="/images/bangladesh.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>

                          <input
                            id="mktocn"
                            type="checkbox"
                            checked={tochina ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tochina
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToChina(!tochina);
                              setToAllMarkets(false);
                            }}
                            value="China"
                          />
                          <label htmlFor="mktocn">
                            China{" "}
                            <img
                              src="/images/china.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>

                          <input
                            id="mktoms"
                            type="checkbox"
                            name="to_market"
                            checked={toegypt ? true : false}
                            onChange={(event) => {
                              !toegypt
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToEgypt(!toegypt);
                              setToAllMarkets(false);
                            }}
                            value="Egypt"
                          />
                          <label htmlFor="mktoms">
                            Egypt{" "}
                            <img
                              src="/images/egypt.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktofr"
                            type="checkbox"
                            checked={tofrance ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tofrance
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToFrance(!tofrance);
                              setToAllMarkets(false);
                            }}
                            value="France"
                          />
                          <label htmlFor="mktofr">
                            France{" "}
                            <img
                              src="/images/france.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktode"
                            type="checkbox"
                            checked={togermany ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !togermany
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToGermany(!togermany);
                              setToAllMarkets(false);
                            }}
                            value="Germany"
                          />
                          <label htmlFor="mktode">
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
                            id="mktoin"
                            type="checkbox"
                            name="to_market"
                            checked={toindia ? true : false}
                            onChange={(event) => {
                              !toindia
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToIndia(!toindia);
                              setToAllMarkets(false);
                            }}
                            value="India"
                          />
                          <label htmlFor="mktoin">
                            India{" "}
                            <img
                              src="/images/india.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktojp"
                            type="checkbox"
                            checked={tojapan ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tojapan
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToJapan(!tojapan);
                              setToAllMarkets(false);
                            }}
                            value="Japan"
                          />
                          <label htmlFor="mktojp">
                            Japan{" "}
                            <img
                              src="/images/japan.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt="Japan"
                            />
                          </label>
                          <input
                            id="mktojo"
                            type="checkbox"
                            checked={tojordan ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tojordan
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToJordan(!tojordan);
                              setToAllMarkets(false);
                            }}
                            value="Jordan"
                          />
                          <label htmlFor="mktojo">
                            Jordan{" "}
                            <img
                              src="/images/jordan.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>

                          <input
                            id="mktopk"
                            type="checkbox"
                            name="to_market"
                            checked={topakistan ? true : false}
                            onChange={(event) => {
                              !topakistan
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToPakistan(!topakistan);
                              setToAllMarkets(false);
                            }}
                            value="Pakistan"
                          />
                          <label htmlFor="mktopk">
                            Pakistan{" "}
                            <img
                              src="/images/pakistan.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            name="to_market"
                            id="mktosaudi"
                            checked={toksa ? true : false}
                            type="checkbox"
                            onChange={(event) => {
                              !toksa
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToKsa(!toksa);
                              setToAllMarkets(false);
                            }}
                            value="Saudi Arabia"
                          />
                          <label htmlFor="mktosaudi">
                            Saudi Arabia{" "}
                            <img
                              src="/images/saudi.png"
                              width="27px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktokr"
                            type="checkbox"
                            checked={tokorea ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tokorea
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToKorea(!tokorea);
                              setToAllMarkets(false);
                            }}
                            value="South Korea"
                          />
                          <label htmlFor="mktokr">
                            South Korea{" "}
                            <img
                              src="/images/korea.png"
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
                            name="to_market"
                            id="mktoes"
                            checked={tospain ? true : false}
                            type="checkbox"
                            onChange={(event) => {
                              !tospain
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToSpain(!tospain);
                              setToAllMarkets(false);
                            }}
                            value="Spain"
                          />
                          <label htmlFor="mktoes">
                            Spain{" "}
                            <img
                              src="/images/spain.png"
                              width="27px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktotl"
                            type="checkbox"
                            checked={tothailand ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !tothailand
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToThailand(!tothailand);
                              setToAllMarkets(false);
                            }}
                            value="Thailand"
                          />
                          <label htmlFor="mktotl">
                            Thailand{" "}
                            <img
                              src="/images/thailand.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktotk"
                            type="checkbox"
                            checked={toturkiye ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !toturkiye
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToTurkiye(!toturkiye);
                              setToAllMarkets(false);
                            }}
                            value="Turkiye"
                          />
                          <label htmlFor="mktotk">
                            Turkiye{" "}
                            <img
                              src="/images/turkiye.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktouk"
                            type="checkbox"
                            checked={touk ? true : false}
                            name="to_market"
                            onChange={(event) => {
                              !touk
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToUk(!touk);
                              setToAllMarkets(false);
                            }}
                            value="United Kingdom"
                          />
                          <label htmlFor="mktouk">
                            United Kingdom{" "}
                            <img
                              src="/images/uk.png"
                              width="26px"
                              style={{ marginLeft: "4px" }}
                              alt=""
                            />
                          </label>
                          <input
                            id="mktouae"
                            type="checkbox"
                            name="to_market"
                            checked={touae ? true : false}
                            onChange={(event) => {
                              !touae
                                ? onToMarketChange(event)
                                : onRemoveToMarket(event);
                            }}
                            onClick={() => {
                              setToUae(!touae);
                              setToAllMarkets(false);
                            }}
                            value="United Arab Emirates"
                          />
                          <label htmlFor="mktouae">
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

                  <div className="bottomBtn">
                    <button className="btn-previous">
                      <Link to="/campaigns">Previous</Link>
                    </button>

                    {market.length !== 0 &&
                    noDays !== "" &&
                    campaignName !== "" ? (
                      <button type="submit" className=" btn-next">
                        Next
                      </button>
                    ) : (
                      <button disabled className=" btn-next">
                        Next
                      </button>
                    )}
                  </div>
                </section>
              </div>
            </form>
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
            background-color: #f4f5f6;
            padding-top: 60px;
          }
          .wrap .divider {
            display: grid;
            grid-template-columns: 25% 75%;
            padding-bottom: 60px;
          }

          @media screen and (max-width: 768px) {
            .wrap {
              padding: 10px;
            }
            .wrap .divider {
              display: block;
            }
          }

          /* ============= PERSONAL DETAILS ============== */
          .personal_details {
            margin: 15px auto 15px;
            padding: 10px 210px;
          }

          .personal_details a {
            color: #817eff;
            display: block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 10px;
          }

          .personal_details a:hover {
            color: #20094d;
          }

          .personal_details h2 {
            color: #323232;
            font-weight: 500;
            font-size: 32px;
          }

          @media screen and (max-width: 768px) {
            .personal_details {
              margin: 25px auto;
              padding: 10px 100px;
              text-align: center;
            }
          }

          /* =========== LEFT RAIL ========== */
          .wrap .personContent {
            margin: 0 20px;
          }

          .wrap .personContent .threeItem > div {
            padding: 10px 30px;
            width: 100%;
          }

          .wrap .personContent .threeItem > div a:hover {
            color: #777;
          }
          .wrap .personContent .threeItem > div a {
            color: #2b2b2b;
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

          /* ============== QUESTION CARD ============ */
          .wrap .questionCard {
            width: 420px;
            margin: 110px auto 0px;
            padding: 20px 10px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-radius: 7px;
            background: #fff;
            -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
            box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          }

          .wrap .questionCard h2 {
            font-family: sans-serif;
            text-align: center;
            font-weight: 800;
            font-size: 22px;
            width: 100%;
            margin: 24px auto;
            padding-top: 8px;
            padding-bottom: 8px;
            color: #2b2b2b;
          }

          .wrap .questionCard .btnGroup {
            width: 90%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .wrap .questionCard .btnGroup > button:hover {
            background: #817eff;
            color: #fff;
          }

          .wrap .questionCard .btnGroup > button:active {
            background: #817eff;
            color: #fff;
            border: none;
            outline: none;
          }
          .wrap .questionCard .btnGroup > button:focus {
            background: #817eff;
            color: #fff;
            border: none;
            outline: none;
          }

          .wrap .questionCard textarea {
            height: 200px !important;
            color: #2b2b2b;
            width: 100%;
            padding: 10px;
            border: 1px solid rgb(238, 238, 238);
            margin-bottom: 15px;
            white-space: pre-wrap;
          }

          .label {
            width: 130px;
            margin-right: 15px;
            padding-left: 5px;
          }

          .field {
            width: 290px;
          }
          .campaign {
            width: 450px;
          }
          .wrap .campaign input[type="text"] {
            height: 42px;
            border-radius: 0px;
            text-decoration: none;
            outline: none !important;
            background: none;
            border: 1px solid #dadada;
            padding: 12px 10px;
            font-weight: 500;
            width: 100%;
            font-size: 14px;
            color: #2b2b2b;
            border-radius: 7px;
            font-family: sans-serif;
          }

          .wrap .field input[type="text"] {
            height: 42px;
            border-radius: 0px;
            text-decoration: none;
            outline: none !important;
            background: none;
            border: 1px solid #dadada;
            padding: 12px 10px;
            font-weight: 500;
            width: 65%;
            font-size: 14px;
            color: #2b2b2b;
            border-radius: 7px;
            font-family: sans-serif;
          }

          textarea:focus,
          textarea:active {
            outline: none;
          }

          .bottomBtn {
            display: flex;
            display: -webkit-flex;
            width: 100%;
            justify-content: space-around;
          }

          @media only screen and (min-width: 768px) {
            .wrap .questionCard {
              width: 950px;
              padding: 30px 20px;
              margin-top: 0;
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

          /* ========= PREVIOUS AND NEXT BUTTONS =============*/

          .wrap .bottomBtn {
            display: flex;
            display: -webkit-flex;
            width: 100%;
            justify-content: space-around;
          }
          .wrap .bottomBtn .btn-next {
            position: relative;
            background-color: #817eff;
            color: white;
            border: 1px solid #817eff;
            cursor: pointer;
            font-weight: 800;
            width: 160px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
          }
          .wrap .bottomBtn .btn-previous {
            position: relative;
            background-color: #817eff;
            color: white;
            border: 1px solid #817eff;
            cursor: pointer;
            font-weight: 800;
            width: 160px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
          }

          .wrap .bottomBtn .btn-previous a,
          .wrap .bottomBtn .btn-next a {
            display: block;
            height: 100%;
            width: 100%;
            color: #fff;
            font-weight: 800;
          }

          .wrap .bottomBtn .btn-next:disabled {
            background-color: #ddd;
            color: #888;
            cursor: default;
            border: #ddd;
          }

          .bottomBtn button,
          .bottomBtn button:active,
          .bottomBtn button:focus {
            padding: 12px 20px;
            height: 50px;
            background: #fff;
            color: #2b2b2b;
            margin-bottom: 20px;
            border: none;
            outline: none;
            border-radius: 0px;
            cursor: pointer;
            font-size: 16px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }

          @media only screen and (min-width: 768px) {
            .wrap .questionCard {
              width: 950px;
              padding: 30px 20px;
              margin-top: 0;
            }
            .bottomBtn .btn-previous,
            .bottomBtn .btn-next {
              width: 200px;
            }
          }

          /* ============== CALENDAR =============== */

          .row .rdp {
            position: absolute;
            z-index: 2000;
          }
          .row .rdp-month {
            background-color: white;
            padding: 10px 15px;
            border: 1px solid black;
          }
          .row .rdp-day.rdp-day_selected {
            background-color: #817eff;
            color: white;
          }

          .row .rdp-day {
            height: 40px;
            width: 40px;
            border-radius: 0%;
          }
          .row .rdp-day:hover {
            background-color: #817eff;
            color: white;
          }

          .row .rdp-day {
            height: 40px;
            width: 40px;
            border-radius: 0%;
          }
          .row .rdp-day:hover {
            background-color: #817eff;
            color: white;
          }
          .row .rdp-cell .rdp-day:hover {
            background-color: #817eff;
            color: white;
          }
          .row .rdp-cell:hover {
            background-color: #817eff;
            color: white;
          }

          .row .rdp-day_outside {
            opacity: 0.25;
          }

          .row .rdp-day_outside:hover {
            opacity: 1;
            background-color: #817eff;
            color: white;
          }

          .rdp-button[disabled]:not(.rdp-day_selected):hover {
            color: #fff;
            opacity: 0.25;
            background-color: transparent;
          }

          .row .rdp-button_reset {
            color: #212529;
            font-size: 16px;
          }

          .row button {
            outline: none;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default CampaignAbout;
