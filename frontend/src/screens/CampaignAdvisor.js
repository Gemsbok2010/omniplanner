import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import { ExternalLink } from "react-external-link";
import { CSVLink } from "react-csv";

const CampaignAdvisor = () => {
  ReactSession.setStoreType("sessionStorage");
  const { search } = useLocation();
  const [noOfCases, setNoOfCases] = useState([]);
  const [page, setPage] = useState([]);
  const [maxPage, setMaxPage] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  // =============== PAGE BUTTONS ================

  const pagePrevious = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/listings/database?page=${page <= 0 ? 0 : page - 1}` +
        "&sort=" +
        sort +
        "&season=" +
        season +
        "&categories=" +
        categories +
        "&location=" +
        location +
        "&primary=" +
        primary +
        "&secRevenue=" +
        secRevenue +
        "&secloyalty=" +
        secloyalty +
        "&secconv=" +
        secconv +
        "&secreeng=" +
        secreeng +
        "&secSale=" +
        secSale +
        "&secAqui=" +
        secAqui +
        "&toLocation=" +
        toLocation +
        "&discount=" +
        discount +
        "&loyalty=" +
        loyalty +
        "&prize=" +
        prize +
        "&gratuity=" +
        gratuity
    );

    const data = await res.json();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNoOfCases(data.num);
    setCampaigns(data.campaigns);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
    setListOfCategories(data.categories);
  };

  const pageNext = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/listings/database?page=${
          page < maxPage ? 1 + parseInt(page) : page
        }` +
        "&sort=" +
        sort +
        "&season=" +
        season +
        "&categories=" +
        categories +
        "&location=" +
        location +
        "&primary=" +
        primary +
        "&secRevenue=" +
        secRevenue +
        "&secloyalty=" +
        secloyalty +
        "&secconv=" +
        secconv +
        "&secreeng=" +
        secreeng +
        "&secSale=" +
        secSale +
        "&secAqui=" +
        secAqui +
        "&toLocation=" +
        toLocation +
        "&discount=" +
        discount +
        "&loyalty=" +
        loyalty +
        "&prize=" +
        prize +
        "&gratuity=" +
        gratuity
    );
    const data = await res.json();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNoOfCases(data.num);
    setCampaigns(data.campaigns);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
    setListOfCategories(data.categories);
  };

  // ========= PAGE INTERMEDIATE BUTTONS ==========
  const circles = [];

  for (let v = 0; v < maxPage; v++) {
    circles.push(v);
  }

  const IntermediateButtons = async (id) => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/listings/database?page=${id + 1}` +
        "&season=" +
        season +
        "&categories=" +
        categories +
        "&location=" +
        location +
        "&sort=" +
        sort +
        "&primary=" +
        primary +
        "&secRevenue=" +
        secRevenue +
        "&secloyalty=" +
        secloyalty +
        "&secconv=" +
        secconv +
        "&secreeng=" +
        secreeng +
        "&secSale=" +
        secSale +
        "&secAqui=" +
        secAqui +
        "&discount=" +
        discount +
        "&loyalty=" +
        loyalty +
        "&prize=" +
        prize +
        "&gratuity=" +
        gratuity +
        "&toLocation=" +
        toLocation
    );
    const data = await res.json();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNoOfCases(data.num);
    setCampaigns(data.campaigns);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
    setListOfCategories(data.categories);
  };

  // =============== SORT ================
  const [ascDesc, setAscDesc] = useState(true);
  const [sort, setSort] = useState(1);

  const sorting = async (ascDesc) => {
    if (ascDesc === false) {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/listings/database?sort=1" +
          "&season=" +
          season +
          "&categories=" +
          categories +
          "&location=" +
          location +
          "&page=" +
          page +
          "&primary=" +
          primary +
          "&secRevenue=" +
          secRevenue +
          "&secloyalty=" +
          secloyalty +
          "&secconv=" +
          secconv +
          "&secreeng=" +
          secreeng +
          "&secSale=" +
          secSale +
          "&secAqui=" +
          secAqui +
          "&toLocation=" +
          toLocation +
          "&discount=" +
          discount +
          "&loyalty=" +
          loyalty +
          "&prize=" +
          prize +
          "&gratuity=" +
          gratuity
      );
      const data = await res.json();

      setNoOfCases(data.num);
      setCampaigns(data.campaigns);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setSort(data.sort);
      setListOfCategories(data.categories);
    }

    if (ascDesc === true) {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/listings/database?sort=-1" +
          "&season=" +
          season +
          "&categories=" +
          categories +
          "&location=" +
          location +
          "&page=" +
          page +
          "&primary=" +
          primary +
          "&secRevenue=" +
          secRevenue +
          "&secloyalty=" +
          secloyalty +
          "&secconv=" +
          secconv +
          "&secreeng=" +
          secreeng +
          "&secSale=" +
          secSale +
          "&secAqui=" +
          secAqui +
          "&toLocation=" +
          toLocation +
          "&discount=" +
          discount +
          "&loyalty=" +
          loyalty +
          "&prize=" +
          prize +
          "&gratuity=" +
          gratuity
      );
      const data = await res.json();
      setNoOfCases(data.num);
      setCampaigns(data.campaigns);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setSort(data.sort);
      setListOfCategories(data.categories);
    }
  };

  //=========== FILTER CARD APPEARS ===========
  const [filterCard, setFilterCard] = useState(false);

  const appearFunction = () => {
    setFilterCard(true);
    setBackdrop(true);
  };

  // ========== SELECT TYPE OF OFFERS ===========
  const [discount, setDiscount] = useState(false);
  const [gratuity, setGratuity] = useState(false);
  const [loyalty, setLoyalty] = useState(false);
  const [prize, setPrize] = useState(false);

  // ========== SELECT SECONDARY OBJECTIVE ===========
  const [secSale, setSecSale] = useState(false);
  const [secRevenue, setSecRevenue] = useState(false);
  const [secAqui, setSecAqui] = useState(false);
  const [secreeng, setSecreeng] = useState(false);
  const [secloyalty, setSecloyalty] = useState(false);
  const [secconv, setSecConv] = useState(false);

  // ========== SELECT PRIMARY OBJECTIVE ===========
  const [primary, setPrimary] = useState("");
  const [, setRevenues] = useState([]);
  const [, setBrandings] = useState([]);
  const [, setSales] = useState([]);
  const [, setAquisitions] = useState([]);
  const [, setReengagements] = useState([]);
  const [, setLoyaltypoints] = useState([]);
  const [, setConversions] = useState([]);

  // ========== SELECT SEASON (MONTH) ===========
  const [season, setSeason] = useState([]);
  const [categories, setCategories] = useState([]);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [checks, setChecks] = useState([]);
  const [location, setLocation] = useState([]);
  const [toLocation, setToLocation] = useState([]);
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
  const [, setChecker] = useState([]);

  // =========== ADD SEASON ==================
  const onSeasonChange = async (event) => {
    const { value } = event.target;
    setSeason([...season, value]);
    const { checked } = event.target;
    setChecker([...season, checked]);
  };

  // ============= REMOVE SEASON =============
  const onRemoveLevel = async (event) => {
    const { value } = event.target;
    const index = season.indexOf(value);
    if (index !== -1) {
      season.splice(index, 1);
    }
    setSeason([...season]);
  };

  // ========== SELECT CATEGORIES ===========

  const checkingsubject = (e) => {
    const value = e.target.value;

    if (!categories.includes(value)) {
      setCategories([...categories, value]);
    } else {
      const index = categories.indexOf(value);

      if (index !== -1) {
        categories.splice(index, 1);
      }
      setCategories([...categories]);
    }
  };

  const checkingchecks = (id) => {
    if (!checks.includes(id)) {
      setChecks([...checks, id]);
    } else {
      const index = checks.indexOf(id);
      if (index !== -1) {
        checks.splice(index, 1);
      }
      setChecks([...checks]);
    }
  };

  // ============== SELECT PUSH TO MARKETS ===============

  const [tobangladesh, setToBangladesh] = useState(false);
  const [toegypt, setToEgypt] = useState(false);
  const [tofrance, setToFrance] = useState(false);
  const [togermany, setToGermany] = useState(false);
  const [toindia, setToIndia] = useState(false);
  const [tojordan, setToJordan] = useState(false);
  const [toksa, setToKsa] = useState(false);
  const [topakistan, setToPakistan] = useState(false);
  const [tospain, setToSpain] = useState(false);
  const [tothailand, setToThailand] = useState(false);
  const [toturkiye, setToTurkiye] = useState(false);
  const [touk, setToUk] = useState(false);
  const [touae, setToUae] = useState(false);
  const [tochina, setToChina] = useState(false);
  const [tojapan, setToJapan] = useState(false);
  const [tokorea, setToKorea] = useState(false);

  // ========== REMOVE MARKETS ===========
  const onRemoveToLocation = async (event) => {
    const { value } = event.target;
    const index = toLocation.indexOf(value);
    if (index !== -1) {
      toLocation.splice(index, 1);
    }
    setToLocation([...toLocation]);
  };

  // ========= ADD MARKETS ===========
  const onToLocationChange = async (event) => {
    const { value } = event.target;
    setToLocation([...toLocation, value]);
  };

  // ============== SELECT POS MARKETS ===============

  const [bangladesh, setBangladesh] = useState(false);
  const [egypt, setEgypt] = useState(false);
  const [france, setFrance] = useState(false);
  const [germany, setGermany] = useState(false);
  const [india, setIndia] = useState(false);
  const [jordan, setJordan] = useState(false);
  const [ksa, setKsa] = useState(false);
  const [pakistan, setPakistan] = useState(false);
  const [spain, setSpain] = useState(false);
  const [thailand, setThailand] = useState(false);
  const [turkiye, setTurkiye] = useState(false);
  const [uk, setUk] = useState(false);
  const [uae, setUae] = useState(false);
  const [china, setChina] = useState(false);
  const [japan, setJapan] = useState(false);
  const [korea, setKorea] = useState(false);

  // ========== REMOVE STATE LOCATION ===========
  const onRemoveLocation = async (event) => {
    const { value } = event.target;
    const index = location.indexOf(value);
    if (index !== -1) {
      location.splice(index, 1);
    }
    setLocation([...location]);
  };

  // ========= ADD STATE LOCATION ===========
  const onLocationChange = async (event) => {
    const { value } = event.target;
    setLocation([...location, value]);
  };

  // ========= CLEAR ALL IN FILTERCARD ===========
  const clearAll = async () => {
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
    setBangladesh(false);
    setChina(false);
    setJapan(false);
    setKorea(false);
    setEgypt(false);
    setFrance(false);
    setGermany(false);
    setIndia(false);
    setJordan(false);
    setKsa(false);
    setPakistan(false);
    setSpain(false);
    setTurkiye(false);
    setThailand(false);
    setUk(false);
    setUae(false);
    setLocation([]);
    setToBangladesh(false);
    setToChina(false);
    setToJapan(false);
    setToKorea(false);
    setToEgypt(false);
    setToFrance(false);
    setToGermany(false);
    setToIndia(false);
    setToJordan(false);
    setToKsa(false);
    setToPakistan(false);
    setToSpain(false);
    setToTurkiye(false);
    setToThailand(false);
    setToUk(false);
    setToUae(false);
    setToLocation([]);
    setSeason([]);
    setCategories([]);
    setChecks([]);
    setPrimary("");
    setSecRevenue(false);
    setSecSale(false);
    setSecAqui(false);
    setSecreeng(false);
    setSecloyalty(false);
    setSecConv(false);
    setPrize(false);
    setDiscount(false);
    setGratuity(false);
    setLoyalty(false);
  };

  // ============== BACKDROP ============== //
  const [, setBackdrop] = useState(false);

  const clickOnBackdrop = () => {
    setBackdrop(false);
    setFilterCard(false);
  };

  // ============= GET CAMPAIGN LIST================
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    if (search === "") {
      sessionStorage.clear();
    }

    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/listings/database?" +
          "season=" +
          season +
          "&categories=" +
          categories +
          "&location=" +
          location +
          "&sort=" +
          sort +
          "&page=" +
          page +
          "&primary=" +
          primary +
          "&secRevenue=" +
          secRevenue +
          "&secloyalty=" +
          secloyalty +
          "&secconv=" +
          secconv +
          "&secreeng=" +
          secreeng +
          "&secSale=" +
          secSale +
          "&secAqui=" +
          secAqui +
          "&toLocation=" +
          toLocation +
          "&discount=" +
          discount +
          "&loyalty=" +
          loyalty +
          "&prize=" +
          prize +
          "&gratuity=" +
          gratuity
      );
      const data = await res.json();

      if (isCancelled === false) {
        setNoOfCases(data.num);
        setCampaigns(data.campaigns);
        setPage(data.page);
        setMaxPage(data.maxPage);
        setSort(data.sort);
        setListOfCategories(data.categories);
        setTimeout(function () {
          setIsloaded(true);
        }, 1000);
      }
    };
    if (isCancelled === false) {
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }
    return () => {
      isCancelled = true;
    };
  }, [
    season,
    categories,
    location,
    toLocation,
    page,
    primary,
    secRevenue,
    secconv,
    secSale,
    secloyalty,
    secAqui,
    secreeng,
    gratuity,
    discount,
    loyalty,
    prize,
  ]);

  // ======= TAKE OUT DUPLICATE CATEGORIES ======

  const noDuplicates = [
    ...new Map(listOfCategories.map((list) => [list.category, list])).values(),
  ];

  // =========== CUSTOMISED CSV FILE ============
  const headers = [
    { label: "Category", key: "category" },
    { label: "Campaign Name", key: "campaignName" },
    { label: "Duration", key: "noDays" },
    { label: "Planning days", key: "planDays" },
    { label: "Budget", key: "budget" },
    { label: "Description", key: "description" },
    { label: "Rationale", key: "rationale" },
    { label: "Examples", key: "examples" },
    { label: "POS Markets", key: "market" },
    { label: "Push To Markets", key: "toMarket" },
    { label: "Offer: Discount", key: "discount" },
    { label: "Offer: Gratuity", key: "gratuity" },
    { label: "Offer: Loyalty", key: "loyalty" },
    { label: "Offer: Prize", key: "prizeOffers" },
    { label: "Offer: None", key: "noOffer" },
    { label: "Primary Branding", key: "brandings" },
    { label: "Primary Revenues", key: "revenues" },
    { label: "Primary Sales", key: "sales" },
    { label: "Primary Acquisition", key: "aquisitions" },
    { label: "Primary Loyalty Points", key: "loyaltypoints" },
    { label: "Primary Re-engagement", key: "reengagements" },
    { label: "Primary Conversions", key: "conversions" },
    { label: "2nd Revenues", key: "secRevenues" },
    { label: "2nd Sales", key: "secSales" },
    { label: "2nd Acquisition", key: "secaquisitions" },
    { label: "2nd Loyalty Points", key: "secloyaltypoints" },
    { label: "2nd Re-engagement", key: "secReengagements" },
    { label: "2nd Conversions", key: "secconversions" },
    { label: "RX Webiste", key: "desktop" },
    { label: "RX Mob app", key: "mobileApp" },
    { label: "RX Mob web", key: "mobweb" },
    { label: "Newsletter", key: "newsletter" },
    { label: "SM: Facebook", key: "facebook" },
    { label: "SM: Instagram", key: "instagram" },
    { label: "SM: X", key: "twitter" },
    { label: "SM: Youtube", key: "youtube" },
    { label: "SM: Linkedin", key: "linkedin" },
    { label: "SM: Threads", key: "threads" },
    { label: "SM: Tiktok", key: "tiktok" },
    { label: "SM: WeChat", key: "wechat" },
    { label: "SM: Weibo", key: "weibo" },
  ];

  const csvReport = {
    data: campaigns,
    headers: headers,
    filename: "RX_Campaigns.csv",
  };

  // ============== LOADING ============== //
  if (!isloaded)
    return (
      <div
        style={{
          backgroundColor: "#240850",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          zIndex: "2500",
          display: "block",
          position: "fixed",
        }}
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            display: "block",
            height: "100%",
            width: "100%",
            top: "90%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img
            style={{
              animation: "loadingframe 1000ms infinite",
              animationDirection: "alternate-reverse",
            }}
            src="/images/rx.png"
            width="150px"
            alt="Riyadh Air"
          />
        </div>
      </div>
    );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Campaign Advisor | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous"
          />
          <meta name="description" content="Acabook" />
        </Helmet>
        <LoggedInNavbar />
        <section>
          <div className="fix-Container">
            <div className="row">
              <div
                className="nonselect"
                id="filterPanel"
                onClick={appearFunction}
              >
                <div id="filter"></div>
                <span>Filter</span>
              </div>

              <form style={{ marginRight: "118px" }}>
                {ascDesc ? (
                  <button
                    id="arrow-down"
                    onClick={() => {
                      setAscDesc(!ascDesc);
                      sorting(ascDesc);
                    }}
                  >
                    <Link
                      to={`?sort=desc&season=${season}&location=${location}&categories=${categories}`}
                      target="_self"
                    >
                      Sort
                    </Link>
                  </button>
                ) : (
                  <button
                    id="arrow-up"
                    onClick={() => {
                      setAscDesc(!ascDesc);
                      sorting(ascDesc);
                    }}
                  >
                    <Link
                      to={`?sort=asc&season=${season}&location=${location}&categories=${categories}`}
                      target="_self"
                    >
                      Sort
                    </Link>
                  </button>
                )}
              </form>

              {noOfCases.length === 0 ? (
                <div className="results">Found 0 campaigns</div>
              ) : noOfCases > 1 ? (
                <div className="results">Found {noOfCases} campaigns</div>
              ) : (
                <div className="results">Found {noOfCases} campaign</div>
              )}
              <button>
                <CSVLink {...csvReport} className="btn-search">
                  Download
                </CSVLink>
              </button>
            </div>
          </div>
        </section>
        <div className="wrap">
          {filterCard ? (
            <div className="filterCard container">
              <div className="filterTitle">
                <img
                  onClick={clickOnBackdrop}
                  style={{
                    width: "20px",
                    cursor: "pointer",
                    verticalAlign: "top",
                  }}
                  src="/images/cross-black.png"
                  alt=""
                />
                <h2>Filter Card</h2>
              </div>

              <form id="filterForm">
                <div className="modal-box-roletype">
                  <h2 style={{ margin: "0" }}>Categories</h2>
                  <div className="row">
                    <div className="role_flex">
                      {noDuplicates.map((category) => {
                        return (
                          <span key={category._id}>
                            <input
                              id={category._id}
                              type="checkbox"
                              checked={
                                checks.includes(category._id) ? true : false
                              }
                              name={category.campaignName}
                              onChange={(e) => {
                                checkingsubject(e);
                                checkingchecks(category._id);
                              }}
                              value={category.category}
                            />
                            <label htmlFor={category._id}>
                              {category.category}
                            </label>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="modal-box-location">
                  <h2 style={{ margin: "0" }}>POS Markets</h2>
                  <div className="row">
                    <div className="states_flex">
                      <input
                        id="a"
                        type="checkbox"
                        checked={bangladesh ? true : false}
                        name="location"
                        onChange={(event) => {
                          !bangladesh
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setBangladesh(!bangladesh);
                        }}
                        value="Bangladesh"
                      />
                      <label htmlFor="a">Bangladesh</label>
                      <input
                        id="cn"
                        type="checkbox"
                        checked={china ? true : false}
                        name="location"
                        onChange={(event) => {
                          !china
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setChina(!china);
                        }}
                        value="China"
                      />
                      <label htmlFor="cn">China</label>
                      <input
                        name="location"
                        id="b"
                        checked={egypt ? true : false}
                        type="checkbox"
                        onChange={(event) => {
                          !egypt
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setEgypt(!egypt);
                        }}
                        value="Egypt"
                      />
                      <label htmlFor="b">Egypt</label>
                      <input
                        id="c"
                        type="checkbox"
                        checked={france ? true : false}
                        name="location"
                        onChange={(event) => {
                          !france
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setFrance(!france);
                        }}
                        value="France"
                      />
                      <label htmlFor="c">France</label>
                      <input
                        id="e"
                        type="checkbox"
                        checked={germany ? true : false}
                        name="location"
                        onChange={(event) => {
                          !germany
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setGermany(!germany);
                        }}
                        value="Germany"
                      />
                      <label htmlFor="e">Germany</label>
                      <input
                        id="d"
                        type="checkbox"
                        checked={india ? true : false}
                        name="location"
                        onChange={(event) => {
                          !india
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setIndia(!india);
                        }}
                        value="India"
                      />
                      <label htmlFor="d">India</label>
                      <input
                        id="jp"
                        type="checkbox"
                        checked={japan ? true : false}
                        name="location"
                        onChange={(event) => {
                          !japan
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setJapan(!japan);
                        }}
                        value="Japan"
                      />
                      <label htmlFor="jp">Japan</label>
                      <input
                        id="g"
                        type="checkbox"
                        name="location"
                        checked={jordan ? true : false}
                        onChange={(event) => {
                          !jordan
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setJordan(!jordan);
                        }}
                        value="Jordan"
                      />
                      <label htmlFor="g">Jordan</label>
                      <input
                        id="f"
                        type="checkbox"
                        checked={pakistan ? true : false}
                        name="location"
                        onChange={(event) => {
                          !pakistan
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setPakistan(!pakistan);
                        }}
                        value="Pakistan"
                      />
                      <label htmlFor="f">Pakistan</label>

                      <input
                        id="h"
                        type="checkbox"
                        checked={ksa ? true : false}
                        name="location"
                        onChange={(event) => {
                          !ksa
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setKsa(!ksa);
                        }}
                        value="Saudi Arabia"
                      />
                      <label htmlFor="h">Saudi Arabia</label>
                      <input
                        id="kr"
                        type="checkbox"
                        name="location"
                        checked={korea ? true : false}
                        onChange={(event) => {
                          !korea
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setKorea(!korea);
                        }}
                        value="South Korea"
                      />
                      <label htmlFor="kr">South Korea</label>
                      <input
                        id="i"
                        type="checkbox"
                        checked={spain ? true : false}
                        name="location"
                        onChange={(event) => {
                          !spain
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setSpain(!spain);
                        }}
                        value="Spain"
                      />
                      <label htmlFor="i">Spain</label>
                      <input
                        id="t"
                        type="checkbox"
                        checked={turkiye ? true : false}
                        name="location"
                        onChange={(event) => {
                          !turkiye
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setTurkiye(!turkiye);
                        }}
                        value="Turkiye"
                      />
                      <label htmlFor="t">Turkiye</label>

                      <input
                        id="k"
                        type="checkbox"
                        checked={thailand ? true : false}
                        name="location"
                        onChange={(event) => {
                          !thailand
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setThailand(!thailand);
                        }}
                        value="Thailand"
                      />
                      <label htmlFor="k">Thailand</label>
                      <input
                        id="l"
                        type="checkbox"
                        checked={uk ? true : false}
                        name="location"
                        onChange={(event) => {
                          !uk
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setUk(!uk);
                        }}
                        value="United Kingdom"
                      />
                      <label htmlFor="l">United Kingdom</label>
                      <input
                        id="q"
                        type="checkbox"
                        checked={uae ? true : false}
                        name="location"
                        onChange={(event) => {
                          !uae
                            ? onLocationChange(event)
                            : onRemoveLocation(event);
                        }}
                        onClick={() => {
                          setUae(!uae);
                        }}
                        value="United Arab Emirates"
                      />
                      <label htmlFor="q">United Arab Emirates</label>
                    </div>
                  </div>
                </div>

                <div className="modal-box-location">
                  <h2 style={{ margin: "0" }}>Push To Markets</h2>
                  <div className="row">
                    <div className="states_flex">
                      <input
                        id="tobg"
                        type="checkbox"
                        checked={tobangladesh ? true : false}
                        name="location"
                        onChange={(event) => {
                          !tobangladesh
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToBangladesh(!tobangladesh);
                        }}
                        value="Bangladesh"
                      />
                      <label htmlFor="tobg">Bangladesh</label>
                      <input
                        id="tocn"
                        type="checkbox"
                        checked={tochina ? true : false}
                        name="location"
                        onChange={(event) => {
                          !tochina
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToChina(!tochina);
                        }}
                        value="China"
                      />
                      <label htmlFor="tocn">China</label>
                      <input
                        name="location"
                        id="toms"
                        checked={toegypt ? true : false}
                        type="checkbox"
                        onChange={(event) => {
                          !toegypt
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToEgypt(!toegypt);
                        }}
                        value="Egypt"
                      />
                      <label htmlFor="toms">Egypt</label>
                      <input
                        id="tofr"
                        type="checkbox"
                        checked={tofrance ? true : false}
                        name="location"
                        onChange={(event) => {
                          !tofrance
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToFrance(!tofrance);
                        }}
                        value="France"
                      />
                      <label htmlFor="tofr">France</label>
                      <input
                        id="tode"
                        type="checkbox"
                        checked={togermany ? true : false}
                        name="location"
                        onChange={(event) => {
                          !togermany
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToGermany(!togermany);
                        }}
                        value="Germany"
                      />
                      <label htmlFor="tode">Germany</label>
                      <input
                        id="toin"
                        type="checkbox"
                        checked={toindia ? true : false}
                        name="location"
                        onChange={(event) => {
                          !toindia
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToIndia(!toindia);
                        }}
                        value="India"
                      />
                      <label htmlFor="toin">India</label>
                      <input
                        id="tojp"
                        type="checkbox"
                        checked={tojapan ? true : false}
                        name="location"
                        onChange={(event) => {
                          !tojapan
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToJapan(!tojapan);
                        }}
                        value="Japan"
                      />
                      <label htmlFor="tojp">Japan</label>
                      <input
                        id="tojo"
                        type="checkbox"
                        name="location"
                        checked={tojordan ? true : false}
                        onChange={(event) => {
                          !tojordan
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToJordan(!tojordan);
                        }}
                        value="Jordan"
                      />
                      <label htmlFor="tojo">Jordan</label>
                      <input
                        id="topk"
                        type="checkbox"
                        checked={topakistan ? true : false}
                        name="location"
                        onChange={(event) => {
                          !topakistan
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToPakistan(!topakistan);
                        }}
                        value="Pakistan"
                      />
                      <label htmlFor="topk">Pakistan</label>

                      <input
                        id="tosa"
                        type="checkbox"
                        checked={toksa ? true : false}
                        name="location"
                        onChange={(event) => {
                          !toksa
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToKsa(!toksa);
                        }}
                        value="Saudi Arabia"
                      />
                      <label htmlFor="tosa">Saudi Arabia</label>
                      <input
                        id="tokr"
                        type="checkbox"
                        name="location"
                        checked={tokorea ? true : false}
                        onChange={(event) => {
                          !tokorea
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToKorea(!tokorea);
                        }}
                        value="South Korea"
                      />
                      <label htmlFor="tokr">South Korea</label>
                      <input
                        id="toes"
                        type="checkbox"
                        checked={tospain ? true : false}
                        name="location"
                        onChange={(event) => {
                          !tospain
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToSpain(!tospain);
                        }}
                        value="Spain"
                      />
                      <label htmlFor="toes">Spain</label>
                      <input
                        id="totk"
                        type="checkbox"
                        checked={toturkiye ? true : false}
                        name="location"
                        onChange={(event) => {
                          !toturkiye
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToTurkiye(!toturkiye);
                        }}
                        value="Turkiye"
                      />
                      <label htmlFor="totk">Turkiye</label>

                      <input
                        id="toth"
                        type="checkbox"
                        checked={tothailand ? true : false}
                        name="location"
                        onChange={(event) => {
                          !tothailand
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToThailand(!tothailand);
                        }}
                        value="Thailand"
                      />
                      <label htmlFor="toth">Thailand</label>
                      <input
                        id="touk"
                        type="checkbox"
                        checked={touk ? true : false}
                        name="location"
                        onChange={(event) => {
                          !touk
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToUk(!touk);
                        }}
                        value="United Kingdom"
                      />
                      <label htmlFor="touk">United Kingdom</label>
                      <input
                        id="toae"
                        type="checkbox"
                        checked={touae ? true : false}
                        name="location"
                        onChange={(event) => {
                          !touae
                            ? onToLocationChange(event)
                            : onRemoveToLocation(event);
                        }}
                        onClick={() => {
                          setToUae(!touae);
                        }}
                        value="United Arab Emirates"
                      />
                      <label htmlFor="toae">United Arab Emirates</label>
                    </div>
                  </div>
                </div>

                <div className="modal-box-language">
                  <h2 style={{ margin: "0" }}>Seasons</h2>
                  <div className="row">
                    <div className="language_flex">
                      <input
                        id="jan"
                        type="checkbox"
                        checked={jan ? true : false}
                        name="season"
                        onChange={(event) => {
                          !jan ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setJan(!jan);
                        }}
                        value="January"
                      />
                      <label htmlFor="jan">January</label>
                      <input
                        id="feb"
                        type="checkbox"
                        checked={feb ? true : false}
                        name="season"
                        onChange={(event) => {
                          !feb ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setFeb(!feb);
                        }}
                        value="February"
                      />
                      <label htmlFor="feb">February</label>

                      <input
                        id="mar"
                        type="checkbox"
                        checked={mar ? true : false}
                        name="contract"
                        onChange={(event) => {
                          !mar ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setMar(!mar);
                        }}
                        value="March"
                      />

                      <label htmlFor="mar">March</label>

                      <input
                        id="apr"
                        type="checkbox"
                        checked={apr ? true : false}
                        name="season"
                        onChange={(event) => {
                          !apr ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setApr(!apr);
                        }}
                        value="April"
                      />
                      <label htmlFor="apr">April</label>

                      <input
                        id="may"
                        type="checkbox"
                        name="season"
                        checked={may ? true : false}
                        onChange={(event) => {
                          !may ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setMay(!may);
                        }}
                        value="May"
                      />
                      <label htmlFor="may">May</label>
                      <input
                        id="jun"
                        type="checkbox"
                        name="season"
                        checked={jun ? true : false}
                        onChange={(event) => {
                          !jun ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setJun(!jun);
                        }}
                        value="June"
                      />
                      <label htmlFor="jun">June</label>
                      <input
                        id="jul"
                        type="checkbox"
                        name="season"
                        checked={jul ? true : false}
                        onChange={(event) => {
                          !jul ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setJul(!jul);
                        }}
                        value="July"
                      />
                      <label htmlFor="jul">July</label>
                      <input
                        id="aug"
                        type="checkbox"
                        name="season"
                        checked={aug ? true : false}
                        onChange={(event) => {
                          !aug ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setAug(!aug);
                        }}
                        value="August"
                      />
                      <label htmlFor="aug">August</label>
                      <input
                        id="sep"
                        type="checkbox"
                        name="season"
                        checked={sep ? true : false}
                        onChange={(event) => {
                          !sep ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setSep(!sep);
                        }}
                        value="September"
                      />
                      <label htmlFor="sep">September</label>
                      <input
                        id="oct"
                        type="checkbox"
                        name="season"
                        checked={oct ? true : false}
                        onChange={(event) => {
                          !oct ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setOct(!oct);
                        }}
                        value="October"
                      />
                      <label htmlFor="oct">October</label>
                      <input
                        id="nov"
                        type="checkbox"
                        name="season"
                        checked={nov ? true : false}
                        onChange={(event) => {
                          !nov ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setNov(!nov);
                        }}
                        value="November"
                      />
                      <label htmlFor="nov">November</label>
                      <input
                        id="dec"
                        type="checkbox"
                        name="season"
                        checked={dec ? true : false}
                        onChange={(event) => {
                          !dec ? onSeasonChange(event) : onRemoveLevel(event);
                        }}
                        onClick={() => {
                          setDec(!dec);
                        }}
                        value="December"
                      />
                      <label htmlFor="dec">December</label>
                    </div>
                  </div>
                </div>
                <div className="modal-box-language">
                  <h2 style={{ margin: "0" }}>Type of Offers</h2>
                  <div className="row">
                    <div className="language_flex">
                      <input
                        id="discount"
                        type="checkbox"
                        checked={discount}
                        onChange={(e) => {
                          setDiscount(e.target.checked);
                        }}
                      />
                      <label htmlFor="discount">Discount Offers</label>
                      <input
                        id="gratuity"
                        type="checkbox"
                        checked={gratuity}
                        onChange={(e) => {
                          setGratuity(e.target.checked);
                        }}
                      />
                      <label htmlFor="gratuity">Gratuity</label>
                      <input
                        id="loyalty"
                        type="checkbox"
                        checked={loyalty}
                        onChange={(e) => {
                          setLoyalty(e.target.checked);
                        }}
                      />
                      <label htmlFor="loyalty">Loyalty Points</label>
                      <input
                        id="prize"
                        type="checkbox"
                        checked={prize}
                        onChange={(e) => {
                          setPrize(e.target.checked);
                        }}
                      />
                      <label htmlFor="prize">Prize Offers</label>
                    </div>
                  </div>
                </div>
                <div className="modal-box-language">
                  <h2 style={{ margin: "0" }}>Primary Objective</h2>
                  <div className="row">
                    <div className="language_flex">
                      <input
                        id="brand"
                        type="radio"
                        name="primary"
                        checked={primary === "brandings" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setSales([]);
                          setRevenues([]);
                          setAquisitions([]);
                          setReengagements([]);
                          setLoyaltypoints([]);
                          setConversions([]);
                        }}
                        value="brandings"
                      />
                      <label htmlFor="brand">Branding</label>
                      <input
                        id="rev"
                        type="radio"
                        name="primary"
                        checked={primary === "revenues" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setSales([]);
                          setAquisitions([]);
                          setReengagements([]);
                          setLoyaltypoints([]);
                          setConversions([]);
                          setBrandings([]);
                        }}
                        value="revenues"
                      />
                      <label htmlFor="rev">Revenues</label>
                      <input
                        id="sales"
                        type="radio"
                        name="primary"
                        checked={primary === "sales" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setRevenues([]);
                          setAquisitions([]);
                          setReengagements([]);
                          setLoyaltypoints([]);
                          setConversions([]);
                          setBrandings([]);
                        }}
                        value="sales"
                      />
                      <label htmlFor="sales">Sales</label>
                      <input
                        id="aqu"
                        type="radio"
                        name="primary"
                        checked={primary === "aquisitions" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setSales([]);
                          setRevenues([]);
                          setReengagements([]);
                          setLoyaltypoints([]);
                          setConversions([]);
                          setBrandings([]);
                        }}
                        value="aquisitions"
                      />
                      <label htmlFor="aqu">Aquisitions</label>

                      <input
                        id="reeng"
                        type="radio"
                        name="primary"
                        checked={primary === "reengagements" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setSales([]);
                          setRevenues([]);
                          setAquisitions([]);
                          setLoyaltypoints([]);
                          setConversions([]);
                          setBrandings([]);
                        }}
                        value="reengagements"
                      />

                      <label htmlFor="reeng">Re-engagement</label>

                      <input
                        id="loy"
                        type="radio"
                        name="primary"
                        checked={primary === "loyaltypoints" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setSales([]);
                          setRevenues([]);
                          setAquisitions([]);
                          setReengagements([]);
                          setConversions([]);
                          setBrandings([]);
                        }}
                        value="loyaltypoints"
                      />
                      <label htmlFor="loy">Loyalty Points</label>
                      <input
                        id="conv"
                        type="radio"
                        name="primary"
                        checked={primary === "conversions" ? true : false}
                        onChange={(e) => {
                          setPrimary(e.target.value);
                          setSales([]);
                          setRevenues([]);
                          setAquisitions([]);
                          setReengagements([]);
                          setLoyaltypoints([]);
                          setBrandings([]);
                        }}
                        value="conversions"
                      />
                      <label htmlFor="conv">Conversions</label>
                    </div>
                  </div>
                </div>
                <div className="modal-box-language">
                  <h2 style={{ margin: "0" }}>Secondary Objectives</h2>
                  <div className="row">
                    <div className="language_flex">
                      <input
                        id="sec_rev"
                        type="checkbox"
                        checked={secRevenue}
                        onChange={(e) => {
                          setSecRevenue(e.target.checked);
                        }}
                      />
                      <label htmlFor="sec_rev">Revenues</label>
                      <input
                        id="sec_sales"
                        type="checkbox"
                        checked={secSale}
                        onChange={(e) => {
                          setSecSale(e.target.checked);
                        }}
                      />
                      <label htmlFor="sec_sales">Sales</label>
                      <input
                        id="sec_aquisition"
                        type="checkbox"
                        checked={secAqui}
                        onChange={(e) => {
                          setSecAqui(e.target.checked);
                        }}
                      />
                      <label htmlFor="sec_aquisition">Aquisitions</label>
                      <input
                        id="sec_reeng"
                        type="checkbox"
                        checked={secreeng}
                        onChange={(e) => {
                          setSecreeng(e.target.checked);
                        }}
                      />
                      <label htmlFor="sec_reeng">Reengagements</label>
                      <input
                        id="sec_loy"
                        type="checkbox"
                        checked={secloyalty}
                        onChange={(e) => {
                          setSecloyalty(e.target.checked);
                        }}
                      />
                      <label htmlFor="sec_loy">Loyalty Points</label>
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
                <input
                  type="button"
                  className="btn-search"
                  value="Clear all"
                  onClick={clearAll}
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {filterCard ? (
            <div onClick={clickOnBackdrop} className="backdrop"></div>
          ) : (
            ""
          )}
          <main>
            <section>
              <div className="tilesGrid">
                {campaigns.map((campaign) => {
                  return (
                    <div className="tiles" key={campaign._id}>
                      <ExternalLink
                        target="_blank"
                        href={
                          process.env.REACT_APP_BACKEND_URL +
                          `api/listings/campaign/${campaign._id}`
                        }
                      >
                        <div className="topBox" style={{ overflow: "hidden" }}>
                          {/* LEFT BOX */}
                          <div style={{ width: "380px" }}>
                            <p className="highlight_rx">{campaign.category}</p>
                            <p className="campaignName">
                              Campaign Name: {campaign.campaignName}
                            </p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                                overflow: "hidden",
                                width: "230px",
                                height: "58px",
                                position: "relative",
                                backgroundColor: "white",
                              }}
                            >
                              <p style={{ color: "#333", fontSize: "13px" }}>
                                {campaign.description}
                              </p>
                            </div>
                          </div>
                          {/* CENTER BOX */}
                          <div
                            style={{
                              width: "420px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ width: "200px" }}>
                              <p
                                style={{
                                  color: "#2f383c",
                                  fontWeight: "600",
                                  wordBreak: "break-word",
                                  marginBottom: "4px",
                                }}
                              >
                                Type of Offers
                              </p>
                              {campaign.discount.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Discount Offer
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.discount.length === 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Discount Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.discount.length >= 3 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Discount Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.gratuity.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Gratuity Offer
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.gratuity.length === 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Gratuity Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.gratuity.length >= 3 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Gratuity Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.loyalty.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Offer
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.loyalty.length === 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.loyalty.length >= 3 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.prizeOffers === true ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Prize Offers
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.noOffer === true ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  No Offer
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                            <div style={{ width: "200px" }}>
                              <p
                                style={{
                                  color: "#2f383c",
                                  fontWeight: "600",
                                  wordBreak: "break-word",
                                  marginBottom: "4px",
                                }}
                              >
                                Primary Objective
                              </p>

                              {campaign.brandings !== "" &&
                              campaign.brandings.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Branding
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.brandings.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Branding
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.brandings.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Branding
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.aquisitions !== "" &&
                              campaign.aquisitions.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Acquisitions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.aquisitions.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Acquisitions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.aquisitions.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Acquisitions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.revenues !== "" &&
                              campaign.revenues.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Revenues
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.revenues.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Revenues
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.revenues.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Revenues
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.sales !== "" &&
                              campaign.sales.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Sales
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.sales.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Sales
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.sales.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Sales
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.reengagements !== "" &&
                              campaign.reengagements.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Re-engagements
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.reengagements.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Re-engagements
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.reengagements.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Re-engagements
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.conversions !== "" &&
                              campaign.conversions.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Conversions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.conversions.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Conversions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.conversions.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Conversions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.loyaltypoints !== "" &&
                              campaign.loyaltypoints.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Points
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.loyaltypoints.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Points
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.loyaltypoints.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Points
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}
                              <p
                                style={{
                                  color: "#2f383c",
                                  fontWeight: "600",
                                  wordBreak: "break-word",
                                  marginBottom: "4px",
                                }}
                              >
                                Secondary Objectives
                              </p>
                              {campaign.secloyaltypoints !== "" &&
                              campaign.secloyaltypoints.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Points
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secloyaltypoints.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Points
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secloyaltypoints.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Loyalty Points
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.secRevenues !== "" &&
                              campaign.secRevenues.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Revenues
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secRevenues.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Revenues
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secRevenues.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Revenues
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.secReengagements !== "" &&
                              campaign.secReengagements.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Re-engagements
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secReengagements.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Re-engagements
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secReengagements.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Re-engagements
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.secSales !== "" &&
                              campaign.secSales.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Sales
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secSales.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Sales
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secSales.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Sales
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.secconversions !== "" &&
                              campaign.secconversions.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Conversions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secconversions.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Conversions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secconversions.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Conversions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}

                              {campaign.secaquisitions !== "" &&
                              campaign.secaquisitions.length === 1 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Acquisitions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secaquisitions.length >= 2 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Acquisitions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : campaign.secaquisitions.length > 4 ? (
                                <p style={{ color: "#333", fontSize: "13px" }}>
                                  Acquisitions
                                  <span className="mx-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          {/* RIGHT BOX */}
                          <div
                            style={{
                              display: "grid",
                              gridTemplateRows: "50% 50%",
                            }}
                          >
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "40% 20% 40% ",
                                flexWrap: "no-wrap",
                                overflow: "hidden",
                                width: "480px",
                              }}
                            >
                              <div className="leftBox">
                                <p
                                  style={{
                                    marginBottom: "0",
                                  }}
                                >
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Saudi Arabia" ? (
                                      <img
                                        key={1}
                                        src="/images/saudi.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "China" ? (
                                      <img
                                        key={2}
                                        src="/images/china.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "South Korea" ? (
                                      <img
                                        key={3}
                                        src="/images/korea.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Japan" ? (
                                      <img
                                        key={4}
                                        src="/images/japan.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Jordan" ? (
                                      <img
                                        key={5}
                                        src="/images/jordan.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Germany" ? (
                                      <img
                                        key={6}
                                        src="/images/germany.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}

                                  {campaign.market.map((mktt) => {
                                    return mktt === "Spain" ? (
                                      <img
                                        key={7}
                                        src="/images/spain.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "India" ? (
                                      <img
                                        key={8}
                                        src="/images/india.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Pakistan" ? (
                                      <img
                                        key={9}
                                        src="/images/pakistan.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Bangladesh" ? (
                                      <img
                                        key={10}
                                        src="/images/bangladesh.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Thailand" ? (
                                      <img
                                        key={11}
                                        src="/images/thailand.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "France" ? (
                                      <img
                                        key={12}
                                        src="/images/france.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "United Kingdom" ? (
                                      <img
                                        key={13}
                                        src="/images/uk.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Turkiye" ? (
                                      <img
                                        key={14}
                                        src="/images/turkiye.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "Egypt" ? (
                                      <img
                                        key={15}
                                        src="/images/egypt.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.market.map((mktt) => {
                                    return mktt === "United Arab Emirates" ? (
                                      <img
                                        key={16}
                                        src="/images/uae.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                </p>
                              </div>
                              <div className="leftBox">
                                <img
                                  src="/images/airplane.png"
                                  alt="airplane"
                                  width="28px"
                                />
                              </div>

                              <div className="rightBox">
                                <p
                                  style={{
                                    marginBottom: "0",
                                  }}
                                >
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Saudi Arabia" ? (
                                      <img
                                        key={1}
                                        src="/images/saudi.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "China" ? (
                                      <img
                                        key={2}
                                        src="/images/china.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "South Korea" ? (
                                      <img
                                        key={3}
                                        src="/images/korea.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Japan" ? (
                                      <img
                                        src="/images/japan.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Jordan" ? (
                                      <img
                                        src="/images/jordan.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Germany" ? (
                                      <img
                                        src="/images/germany.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}

                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Spain" ? (
                                      <img
                                        src="/images/spain.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "India" ? (
                                      <img
                                        src="/images/india.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Pakistan" ? (
                                      <img
                                        src="/images/pakistan.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Bangladesh" ? (
                                      <img
                                        src="/images/bangladesh.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Thailand" ? (
                                      <img
                                        src="/images/thailand.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "France" ? (
                                      <img
                                        src="/images/france.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "United Kingdom" ? (
                                      <img
                                        src="/images/uk.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Turkiye" ? (
                                      <img
                                        src="/images/turkiye.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "Egypt" ? (
                                      <img
                                        src="/images/egypt.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                  {campaign.toMarket.map((mktt) => {
                                    return mktt === "United Arab Emirates" ? (
                                      <img
                                        src="/images/uae.png"
                                        width="26px"
                                        style={{ marginRight: "2px" }}
                                        alt=""
                                      />
                                    ) : (
                                      ""
                                    );
                                  })}
                                </p>
                              </div>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                                overflow: "hidden",
                                width: "100%",
                                height: "65px",
                                position: "relative",
                                backgroundColor: "white",
                                flexDirection: "column-reverse",
                              }}
                            >
                              {campaign.season.map((sai) => {
                                return sai === "January" ? (
                                  <span
                                    style={{
                                      color: "white",
                                      marginRight: "5px",
                                      height: "45px",
                                      width: "35px",
                                      backgroundColor: "#817eff",
                                      lineHeight: "45px",
                                      textAlign: "center",
                                    }}
                                  >
                                    Jan
                                  </span>
                                ) : (
                                  ""
                                );
                              })}
                              {campaign.season.indexOf("January") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Jan
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "February" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Feb
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("February") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Feb
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "March" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Mar
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("March") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Mar
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "April" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Apr
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("April") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Apr
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "May" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      May
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("May") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  May
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "June" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Jun
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("June") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Jun
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "July" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Jul
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("July") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Jul
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "August" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Aug
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("August") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Aug
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "September" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Sep
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("September") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Sep
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "October" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Oct
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("October") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Oct
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "November" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Nov
                                    </span>
                                  )
                                );
                              })}
                              {campaign.season.indexOf("November") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Nov
                                </span>
                              )}
                              {campaign.season.map((sai) => {
                                return (
                                  sai === "December" && (
                                    <span
                                      style={{
                                        color: "white",
                                        marginRight: "5px",
                                        height: "45px",
                                        width: "35px",
                                        backgroundColor: "#817eff",
                                        lineHeight: "45px",
                                        textAlign: "center",
                                      }}
                                    >
                                      Dec
                                    </span>
                                  )
                                );
                              })}

                              {campaign.season.indexOf("December") === -1 && (
                                <span
                                  style={{
                                    color: "#333",
                                    marginRight: "5px",
                                    height: "45px",
                                    width: "35px",
                                    border: "1px solid black",
                                    lineHeight: "45px",
                                    textAlign: "center",
                                  }}
                                >
                                  Dec
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </ExternalLink>
                    </div>
                  );
                })}
                {campaigns.length === 0 && (
                  <div className="no-listings">
                    <h2>No campaigns at the moment.</h2>
                  </div>
                )}
              </div>
            </section>
          </main>

          <nav className="paginate">
            <ul>
              {maxPage >= 2 ? (
                page > 1 ? (
                  <li key={1} className="previous" onClick={pagePrevious}></li>
                ) : (
                  <li
                    style={{ opacity: "0.2", cursor: "default" }}
                    className="previous"
                    key={2}
                  ></li>
                )
              ) : (
                <span></span>
              )}
              {circles.map((circle) => {
                return (
                  <li
                    key={circle}
                    className={page === circle + 1 ? "active" : ""}
                    onClick={() => IntermediateButtons(circle)}
                  >
                    {circle + 1}
                  </li>
                );
              })}

              {maxPage >= 2 ? (
                page < maxPage ? (
                  <li key={1} className="next" onClick={pageNext}></li>
                ) : (
                  <li
                    style={{ opacity: "0.2", cursor: "default" }}
                    className="next"
                    key={2}
                  ></li>
                )
              ) : (
                <span></span>
              )}
            </ul>
          </nav>

          <Footer />
        </div>
        <style jsx="true">{`
          body {
            background-color: #fff;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          /*================== CAMPAIGN CARDS ================= */
          main {
             {
              /* display: grid;
            grid-template-columns: 16rem auto 30rem; */
            }
            gap: 2rem;
            width: 96%;
            margin: 1rem auto 4rem;
          }
           {
            /* main .tilesGrid {
            background-color: transparent;
            width: 1500px;
            display: grid;
            margin-top: 0px;
            grid-template-columns: 30% 30% 30%;
            grid-row-gap: 12px;
            grid-column-gap: 12px;
          } */
          }

          main .tilesGrid .topBox p {
            color: #2f383c;
            margin-bottom: 5px;
          }

          main .tiles {
            width: 100%;
            height: 171px;
            margin-top: 6px;
            border-radius: 5px;
            cursor: pointer;
            border-top: 5px solid #20094d;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
          }

          main .tilesGrid .topBox .highlight_rx {
            color: white;
            background: #20094d;
            border-radius: 4px;
            height: 25px;
            line-height: 21px;
            text-align: center;
            padding: 2px 8px;
            display: inline-block;
          }

          main .topBox {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px 5px 20px;
            overflow: hidden;
            background-color: white;
            margin: 0;
            height: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.18);
          }

          main .topBox .smallPhoto {
            display: inline-block;
            margin: 0px;
          }

          main .topBox .campaignName {
            color: #2f383c;
            font-size: 14px;
            word-break: break-word;
            font-weight: 600;
            letter-spacing: -0.02em;
            margin-bottom: 3px;
            position: relative;
          }

          main .topBox h2 {
            color: #2f383c;
            font-size: 1.6rem;
            word-break: break-word;
            font-weight: 600;
            letter-spacing: -0.02em;
            margin-bottom: 3px;
          }
          main .topBox h4 {
            color: rgba(99, 106, 109);
            font-weight: 200;
            font-family: "Noto Sans TC", sans-serif;
            font-size: 14px;
            margin-bottom: 7px;
          }

          main .topBox h3 {
            color: #2f383c;
            font-size: 1rem;
            word-break: break-word;
            font-weight: 600;
            letter-spacing: -0.02em;
            margin-bottom: 3px;
          }
          main .topBox p {
            color: #fff;
          }

          main .topBox a {
            color: white;
            height: 100%;
            width: 100%;
          }
          .fa-star {
            color: gold;
            font-size: 14px;
          }

          .ratings {
            font-size: 14px;
            margin-left: 5px;
          }
          .no-listings {
            text-align: center;
            margin-top: 20px;
            padding: 0px auto;
          }
          .no-listings h2 {
            color: 333;
            font-weight: 800;
            margin: 0;
            font-size: 18px;
          }
          /*===================== FILTER CARD ================= */

          .wrap .filterCard {
            width: 420px;
            height: 95vh;
            padding: 20px 10px;
            align-items: center;
            border-radius: 0px;
            background: #fff;
            -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
            box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
            z-index: 3000;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            position: absolute;
            display: block;
            animation: filterframe 300ms ease-in 0ms;
            overflow: scroll;
          }

          @keyframes filterframe {
            from {
              transform: translate(-50%, -30%);
              opacity: 0;
            }
            to {
              transform: translateY(-50%, -50%);
              opacity: 1;
            }
          }

          @media only screen and (min-width: 768px) {
            .wrap .filterCard {
              width: 680px;
              padding: 30px 16px;
              z-index: 3500;
            }
          }

          .wrap .filterCard .filterTitle {
            position: relative;
            height: 42px;
            line-height: 42px;
            border-bottom: 1px solid rgb(210, 213, 218);
          }

          .wrap .filterCard .filterTitle h2 {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            font-weight: 600;
            font-size: 18px;
            font-family: Museo-Sans-500;
            color: rgb(51, 63, 72);
          }

          .wrap .filterCard .filterTitle img:hover {
            background-color: #dedede;
          }

          .modal-box-roletype {
            display: block;
            background: white;
            width: 100%;
            padding-bottom: 20px;
            margin: 30px auto;
            position: relative;
            font-size: 13px;
            border-bottom: 1px solid rgb(210, 213, 218);
          }

          .wrap .modal-box-roletype h2 {
            color: rgb(51, 63, 72);
            font-size: 16px;
            font-weight: 600;
            font-family: Museo-Sans-500;
          }

          .modal-box-language {
            display: block;
            background: white;
            width: 100%;
            padding-bottom: 20px;
            margin: 30px auto;
            position: relative;
            font-size: 13px;
            border-bottom: 1px solid rgb(210, 213, 218);
          }

          .wrap .modal-box-language h2 {
            color: rgb(51, 63, 72);
            font-size: 16px;
            font-weight: 600;
            font-family: Museo-Sans-500;
          }

          .wrap .modal-box-location {
            display: block;
            background: white;
            width: 100%;
            padding-bottom: 20px;
            margin: 30px auto;
            position: relative;
            font-size: 13px;
            border-bottom: 1px solid rgb(210, 213, 218);
          }

          .wrap .modal-box-location h2 {
            color: rgb(51, 63, 72);
            font-size: 16px;
            font-weight: 600;
            font-family: Museo-Sans-500;
          }

          .filterCard .btn-search {
            height: 48px;
            border-radius: 4px;
            width: 120px;
            font-weight: 800;
            font-size: 20px;
            background-color: #20094d;
            text-align: center;
            border-color: #20094d;
            box-sizing: border-box;
            margin-top: 0px;
            cursor: pointer;
            padding: 1px auto;
            line-height: 32px;
            color: #fff;
            position: relative;
            outline: none;
            border: none;
          }
          .modal-box-location input[type="radio"],
          .modal-box-roletype input[type="radio"],
          .modal-box-language input[type="radio"],
          .modal-box-location input[type="checkbox"],
          .modal-box-roletype input[type="checkbox"],
          .modal-box-language input[type="checkbox"] {
            display: none;
            margin: 0;
            width: 0;
          }
          .fix-Container {
            width: 100%;
            height: 56px;
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
          }
          .language_flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: block;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            margin: 1px 0px 0px 80px;
            height: 100%;
          }
          .role_flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: block;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            margin: 1px 0px 0px 80px;
            height: 100%;
          }

          .filterCard .btn-search:active,
          .filterCard .btn-search:focus {
            outline: none;
            border: none;
          }

          .results {
            position: relative;
            height: 56px;
            line-height: 56px;
            width: 200px;
            font-weight: 600;
            font-size: 13px;
            font-family: "Noto Sans TC", sans-serif;
            color: rgb(51, 63, 72);
            display: none;
          }

          .nonselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                            supported by Chrome, Edge, Opera and Firefox */
          }

          section .fix-Container button {
            width: 150px;
            height: 40px;
            padding: 5px 16px;
            line-height: 30px;
            font-size: 13px;
            border-radius: 4px;
            background-color: white;
            color: #484848;
            border: 1px solid #dce0e0;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            font-family: sans-serif;
            font-weight: 500;
            position: relative;
            left: 30px;
            top: 7px;
          }

          section .fix-Container button a {
            color: #484848;
            display: block;
            widht: 100%;
            height: 100%;
          }

          #filterPanel {
            width: 150px;
            height: 40px;
            padding: 5px 16px;
            line-height: 30px;
            font-size: 13px;
            border-radius: 4px;
            background-color: white;
            color: #484848;
            border: 1px solid #dce0e0;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            font-family: sans-serif;
            font-weight: 500;
            position: relative;
            left: 30px;
            top: 7px;
          }

          #filterPanel span {
            margin-left: 26px;
            font-weight: 500;
          }

          #filterPanel:hover,
          #arrow-down:hover,
          section .fix-Container button:hover {
            background-color: #f7f8f9;
            border-color: #353f47;
          }

          #arrow-up {
            background-image: url(./../../images/arrow-up.png);
            height: 40px;
            width: 150px;
            line-height: 32px;
            font-size: 13px;
            border-radius: 4px;
            border: 1px solid #dce0e0;
            position: relative;
            left: 50px;
            top: 7px;
            text-align: center;
            font-family: sans-serif;
            font-weight: 500;
            cursor: pointer;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: 19px 14px;
            background-size: 13px;
            padding: 0;
            background-color: #20094d;
            border: 1px solid #20094d;
          }

          #arrow-down {
            background-image: url(./../../images/arrow-down.png);
            height: 40px;
            width: 150px;
            line-height: 32px;
            font-size: 13px;
            border-radius: 4px;
            border: 1px solid #dce0e0;
            text-align: center;
            font-family: sans-serif;
            font-weight: 500;
            cursor: pointer;
            background-color: white;
            background-repeat: no-repeat;
            background-position: 19px 14px;
            background-size: 13px;
            display: inline-block;
            position: relative;
            left: 50px;
            top: 7px;
            padding: 0;
          }
          #arrow-up a {
            height: 100%;
            width: 100%;
            color: #fff;
            position: relative;
            font-family: sans-serif;
            font-weight: 500;
            display: block;
            line-height: 40px;
          }
          #arrow-down a {
            height: 100%;
            width: 100%;
            color: #484848;
            position: relative;
            font-family: sans-serif;
            font-weight: 500;
            display: block;
            line-height: 40px;
          }
          #filter {
            background-image: url(./../../images/filters-small.png);
            height: 30px;
            width: 30px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 22px;
            display: block;
            position: absolute;
          }
          .backdrop {
            position: fixed;
            display: block;
            background-color: rgba(33, 40, 46, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2500;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
          .checkboxes {
            background-color: #20094d;
            cursor: pointer;
            color: white;
            border: 1px solid #20094d;
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

          .checkboxes:focus,
          .checkboxes:active {
            outline: none;
          }

          input::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: #555 !important;
            font-weight: bold;
          }
          input::-moz-placeholder {
            /* Firefox 19+ */
            color: #555 !important;
            font-weight: bold;
          }
          input :-ms-input-placeholder {
            /* IE 10+ */
            color: #555 !important;
            font-weight: bold;
          }
          input:-moz-placeholder {
            /* Firefox 18- */
            color: #555 !important;
            font-weight: bold;
          }
          input[type="checkbox"] {
            opacity: 0;
            float: left;
          }
          input[type="radio"] {
            opacity: 0;
            float: left;
          }

          /* ============= CHECKBOXES ================*/
          input[type="checkbox"] + label {
            margin: 0 0 0 20px;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            font-family: sans-serif;
            font-weight: 500;
            float: left;
            margin: 0px;
            width: 100%;
          }
          input[type="checkbox"] + label::before {
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
          input[type="checkbox"] + label::after {
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
          input[type="checkbox"]:checked + label::after {
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

          @media only screen and (min-width: 768px) {
            .results {
              display: block;
            }
          }

          /* ============= CHECKBOXES ================*/
          input[type="radio"] + label {
            margin: 0 0 0 20px;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            font-family: sans-serif;
            font-weight: 500;
            float: left;
            margin: 0px;
            width: 100%;
          }
          input[type="radio"] + label::before {
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
          input[type="radio"] + label::after {
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
          input[type="radio"]:checked + label::after {
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

          @media only screen and (min-width: 768px) {
            .results {
              display: block;
            }
          }

          /* ============ PAGINATION ON BOTTOM ========== */
          .paginate {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            border: none;
            z-index: 500;
            margin: 22px auto;
          }
          .paginate ul li,
          .paginate ul li a {
            width: 35px;
            height: 35px;
            background-color: #fff;
            color: #2b2b2b;
            font-weight: 700;
            float: left;
            border-radius: 50%;
            line-height: 35px;
            text-align: center;
            margin: 0px 10px;
            list-style-type: none;
            cursor: pointer;
          }
          .paginate .active {
            background-color: #2b2b2b;
            color: #fff;
          }

          .paginate .next {
            background-image: url(./../../images/arrow-down.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 15px;
            background-color: #fff;
            transform: rotate(-90deg);
          }
          .paginate .previous {
            background-image: url(./../../images/left.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 15px;
            background-color: #fff;
          }

          .pagination ul li:hover {
            cursor: pointer;
          }

          /* ============ MEDIA QUERIES FOR TABLETS =========*/
          @media screen and (max-width: 1024px) {
            .topBox {
              position: relative;
              width: 100%;
            }
             {
              /* main .tilesGrid {
              display: grid;
              grid-column-gap: 0.1em;
              background-size: cover;
              grid-template-columns: 50% 50%;
              position: relative;
              padding: 0px 0px 0px 15px;
              overflow: hidden;
              position: relative;
              width: 1000px;
            } */
            }
            main .tiles {
              position: relative;
              width: 455px;
            }
            .wrap {
              padding: 0 auto;
            }
          }

          /*  ====== MEDIA QUERIES FOR MOBILE PHONES */

          @media screen and (max-width: 768px) {
            .topBox {
              position: relative;
              width: 100%;
            }
             {
              /* main .tilesGrid {
              display: grid;
              grid-column-gap: 0.1em;
              background-size: cover;
              grid-template-columns: 100%;
              position: relative;
              padding: 0px 0px 0px 15px;
              overflow: hidden;
              position: relative;
              width: 485px;
            } */
            }
            main .tiles {
              position: relative;
              width: 455px;
            }
            .wrap {
              padding: 0 auto;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default CampaignAdvisor;
