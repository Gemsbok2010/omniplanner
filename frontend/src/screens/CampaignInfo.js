import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useSelector } from "react-redux";

const CampaignInfo = () => {
  const navigate = useNavigate();
  ReactSession.setStoreType("sessionStorage");
  const user = useSelector((state) => state.userInfo.value);
  const [primary, setPrimary] = useState("");
  const [season, setSeason] = useState([]);
  const [market, setMarket] = useState([]);
  const [toMarket, setToMarket] = useState([]);
  const [noDays, setNoDays] = useState("");

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
  const [statusUpgrade, setStatusUpgrade] = useState(false);

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

  // ========= POPULATE SESSION DATA ==============
  useEffect(() => {
    // PRIMARY
    if (!ReactSession.get("primary")) {
      setPrimary("");
    } else {
      setPrimary(ReactSession.get("primary"));
    }
    if (!ReactSession.get("brandings")) {
      setBrandings([]);
    } else {
      setBrandings(ReactSession.get("brandings"));
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

    if (!ReactSession.get("facebook")) {
      setFacebook(false);
    } else {
      setFacebook(ReactSession.get("facebook"));
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
    if (!ReactSession.get("market")) {
      setMarket([]);
    } else {
      setMarket(ReactSession.get("market"));
    }
    if (!ReactSession.get("toMarket")) {
      setToMarket([]);
    } else {
      setToMarket(ReactSession.get("toMarket"));
    }
  }, []);

  const handleOnDrag = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // BRANDING
  const [brandings, setBrandings] = useState([]);

  const onDropBranding = (e) => {
    const widgetType = e.dataTransfer.getData("widgetType");
    // DO NOT DUPLICATE IN ARRAY
    if (brandings.indexOf(widgetType) === -1) {
      // ADD IF NO EXISTING
      setBrandings([...brandings, widgetType]);
    } else {
      // DO NOT ADD IF EXISTED
      setBrandings([...brandings]);
    }
  };

  const deleteBranding = (e, id) => {
    e.preventDefault();
    brandings.splice(id, 1);
    setBrandings([...brandings]);
  };

  // REVENUE
  const [revenues, setRevenues] = useState([]);

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
  const [mobweb, setMobweb] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [youtube, setYouTube] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [weibo, setWeibo] = useState(false);
  const [wechat, setWechat] = useState(false);
  const [tiktok, setTiktok] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [threads, setThreads] = useState(false);

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
    ReactSession.remove("threads");
    ReactSession.remove("linkedin");
    ReactSession.remove("instagram");
    ReactSession.remove("tiktok");
    ReactSession.remove("wechat");
    ReactSession.remove("weibo");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_BACKEND_URL + "api/listings/createCampaign", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        category: ReactSession.get("camp_category"),
        description: ReactSession.get("description"),
        examples: ReactSession.get("examples"),
        rationale: ReactSession.get("rationale"),
        budget: ReactSession.get("budget"),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        market: market,
        toMarket: toMarket,
        campaignName: ReactSession.get("campaignName"),
        planDays: ReactSession.get("planDays"),
        noDays: ReactSession.get("noDays"),
        season: season,
        // OFFERS
        loyalty: loyalty,
        discount: discount,
        gratuity: gratuity,
        prizeOffers: prizeOffers,
        noOffer: noOffer,
        //PRIMARY
        brandings: brandings,
        revenues: revenues,
        sales: sales,
        aquisitions: aquisitions,
        reengagements: reengagements,
        loyaltypoints: loyaltypoints,
        conversions: conversions,
        // SECONDARY
        secRevenues: secRevenues,
        secRevenue: secRevenue,
        secSale: secSale,
        secSales: secSales,
        secAqui: secAqui,
        secaquisitions: secaquisitions,
        secreeng: secreeng,
        secReengagements: secReengagements,
        secloyaltypoints: secloyaltypoints,
        secloyalty: secloyalty,
        secconv: secconv,
        secconversions: secconversions,
        // PLATFORM
        desktop: desktop,
        mobweb: mobweb,
        mobileApp: mobileApp,
        threads: threads,
        linkedin: linkedin,
        facebook: facebook,
        wechat: wechat,
        newsletter: newsletter,
        twitter: twitter,
        youtube: youtube,
        tiktok: tiktok,
        weibo: weibo,
        instagram: instagram,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
 
        if (data) {
          ReactSession.remove("camp_category");
          ReactSession.remove("camp_firstName");
          ReactSession.remove("camp_lastName");
          ReactSession.remove("camp_email");
          ReactSession.remove("market");
          ReactSession.remove("toMarket");
          ReactSession.remove("budget");
          ReactSession.remove("description");
          ReactSession.remove("rationale");
          ReactSession.remove("examples");
          ReactSession.remove("campaignName");
          ReactSession.remove("planDays");
          ReactSession.remove("noDays");
          ReactSession.remove("season");
          ReactSession.remove("primary");
          ReactSession.remove("revenues");
          ReactSession.remove("sales");
          ReactSession.remove("aquisitions");
          ReactSession.remove("reengagements");
          ReactSession.remove("loyaltypoints");
          ReactSession.remove("conversions");
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
          navigate("/campaigns");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Campaigns | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="objectives" content="Riyadh Air" />
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
                      <span>{ReactSession.get("campaignName")}</span>
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
                      <span>{ReactSession.get("budget")}</span>
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
                      <span>{ReactSession.get("description")}</span>
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
                      <span>{ReactSession.get("rationale")}</span>
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
                      <span>{ReactSession.get("examples")}</span>
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
                  <div style={{ height: "3px" }}></div>
                  <p
                    style={{
                      marginLeft: "6px",
                      marginBottom: "2px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Offers:{" "}
                    {discount &&
                      discount.map((dis) => {
                        return discount.at(-1) === dis &&
                          discount.length > 1 ? (
                          <span key={dis}>& {dis}. </span>
                        ) : (
                          <span key={dis}>{dis}, </span>
                        );
                      })}
                    {gratuity &&
                      gratuity.map((gra) => {
                        return gratuity.at(-1) === gra &&
                          gratuity.length > 1 ? (
                          <span key={gra}>& {gra}. </span>
                        ) : (
                          <span key={gra}>{gra}, </span>
                        );
                      })}
                    {loyalty &&
                      loyalty.map((loy) => {
                        return loyalty.at(-1) === loy && loyalty.length > 1 ? (
                          <span key={loy}>& {loy}. </span>
                        ) : (
                          <span key={loy}>{loy}, </span>
                        );
                      })}
                    {prizeOffers === true && <span> Prize Offers. </span>}
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
                    Primary Objective:{" "}
                    {brandings &&
                      brandings.map((brand) => {
                        return brandings.at(-1) === brand &&
                          brandings.length > 1 ? (
                          <span key={brand}>& {brand}. </span>
                        ) : (
                          <span key={brand}>{brand}, </span>
                        );
                      })}
                    {revenues &&
                      revenues.map((rev) => {
                        return revenues.at(-1) === rev &&
                          revenues.length > 1 ? (
                          <span key={rev}>& {rev}. </span>
                        ) : (
                          <span key={rev}>{rev}, </span>
                        );
                      })}
                    {sales &&
                      sales.map((sale) => {
                        return sales.at(-1) === sale && sales.length > 1 ? (
                          <span key={sale}>& {sale}. </span>
                        ) : (
                          <span key={sale}>{sale}, </span>
                        );
                      })}
                    {aquisitions &&
                      aquisitions.map((aqu) => {
                        return aquisitions.at(-1) === aqu &&
                          aquisitions.length > 1 ? (
                          <span key={aqu}>& {aqu}. </span>
                        ) : (
                          <span key={aqu}>{aqu}, </span>
                        );
                      })}
                    {reengagements &&
                      reengagements.map((reeng) => {
                        return reengagements.at(-1) === reeng &&
                          reengagements.length > 1 ? (
                          <span key={reeng}>& {reeng}. </span>
                        ) : (
                          <span key={reeng}>{reeng}, </span>
                        );
                      })}
                    {loyaltypoints &&
                      loyaltypoints.map((loyalty) => {
                        return loyaltypoints.at(-1) === loyalty &&
                          loyaltypoints.length > 1 ? (
                          <span key={loyalty}>& {loyalty}. </span>
                        ) : (
                          <span key={loyalty}>{loyalty}, </span>
                        );
                      })}
                    {conversions &&
                      conversions.map((conv) => {
                        return conversions.at(-1) === conv &&
                          conversions.length > 1 ? (
                          <span key={conv}>& {conv}. </span>
                        ) : (
                          <span key={conv}>{conv}, </span>
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
                    Secondary Objective(s):{" "}
                    {secSales &&
                      secSales.map((mar) => {
                        return secSales.at(-1) === mar &&
                          secSales.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
                        );
                      })}
                    {secRevenues &&
                      secRevenues.map((mar) => {
                        return secRevenues.at(-1) === mar &&
                          secRevenues.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
                        );
                      })}
                    {secaquisitions &&
                      secaquisitions.map((mar) => {
                        return secaquisitions.at(-1) === mar &&
                          secaquisitions.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
                        );
                      })}
                    {secReengagements &&
                      secReengagements.map((mar) => {
                        return secReengagements.at(-1) === mar &&
                          secReengagements.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
                        );
                      })}
                    {secloyaltypoints &&
                      secloyaltypoints.map((mar) => {
                        return secloyaltypoints.at(-1) === mar &&
                          secloyaltypoints.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
                        );
                      })}
                    {secconversions &&
                      secconversions.map((mar) => {
                        return secconversions.at(-1) === mar &&
                          secconversions.length > 1 ? (
                          <span key={mar}>& {mar}. </span>
                        ) : (
                          <span key={mar}>{mar}, </span>
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
                    Platform(s): <span>{mobileApp && "Mobile App,"} </span>
                    <span> {desktop && "Desktop,"}</span>
                    <span> {mobweb && "Mobile Web,"}</span>
                    <span> {facebook && "Facebook,"}</span>
                    <span> {twitter && "X,"}</span>
                    <span> {instagram && "Instagram,"}</span>
                    <span> {linkedin && "Linkedin,"}</span>
                    <span> {youtube && "Youtube,"}</span>
                    <span> {threads && "Threads,"}</span>
                    <span> {newsletter && "Newsletter,"}</span>
                    <span> {weibo && "Weibo,"}</span>
                    <span> {tiktok && "Tik Tok,"}</span>
                    <span> {wechat && "WeChat,"}</span>
                  </p>
                </div>
              </div>
            </div>
            <form id="formTwo" onSubmit={onSubmit}>
              <div className="personContent">
                <section className="questionCard container-fluid">
                  <div className="container-fluid regCon">
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
                                  <label htmlFor="discd">
                                    Stopover Discount
                                  </label>
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
                                  <label htmlFor="gratb">
                                    Companion Ticket
                                  </label>
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
                                setStatusUpgrade(false);
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
                                    id="loyalUp"
                                    type="checkbox"
                                    name="loyalty"
                                    checked={statusUpgrade ? true : false}
                                    onChange={(event) => {
                                      !statusUpgrade
                                        ? onLoyaltyChange(event)
                                        : onRemoveLoyalty(event);
                                    }}
                                    onClick={() => {
                                      setStatusUpgrade(!statusUpgrade);
                                    }}
                                    value="Status Upgrade"
                                  />
                                  <label htmlFor="loyalUp">
                                    Status Upgrade
                                  </label>
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
                                setPrizeOffers(false);
                                setLoyalty([]);
                                setDiscount([]);
                                setGratuity([]);
                                setLoyaltyOffers(false);
                                setMGMPoints(false);
                                setBuyPoints(false);
                                setPointsValue(false);
                                setLowerTier(false);
                                setStatusUpgrade(false);
                                setStatusPoints(false);
                                setTierExt(false);
                                setExtraPoints(false);
                                setDiscountOffers(false);
                                setAirfare(false);
                                setThirdParty(false);
                                setAncillary(false);
                                setStopoverDiscount(false);
                                setFpassDiscount(false);
                                setGratuityOffers(false);
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
                              }}
                            />
                            <label htmlFor="noOffer">No Offer</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

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
                              id="branding"
                              type="radio"
                              name="objective"
                              value="Branding"
                              checked={primary === "Branding" ? true : false}
                              onChange={(e) => {
                                setPrimary(e.target.value);
                                setSales([]);
                                setRevenues([]);
                                setAquisitions([]);
                                setReengagements([]);
                                setLoyaltypoints([]);
                                setConversions([]);
                              }}
                            />
                            <label htmlFor="branding">Branding</label>
                          </div>
                        </div>
                      </div>

                      {primary === "Branding" ? (
                        <>
                          <div className="row dropInBox discountBox">
                            <div className="grid">
                              <div className="row">
                                <div
                                  onDrop={onDropBranding}
                                  onDragOver={handleDragOver}
                                  style={{
                                    border: "1px solid #dadada",
                                    height: "200px",
                                    width: "240px",
                                    borderRadius: "7px",
                                    padding: "4px 5px",
                                  }}
                                >
                                  {brandings.map((brand, index) => {
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
                                            deleteBranding(e, index);
                                          }}
                                        />
                                        {brand}
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
                                        handleOnDrag(e, "Brand Awareness");
                                      }}
                                      style={{ backgroundColor: "deeppink" }}
                                    >
                                      Brand Awareness
                                    </p>
                                  </div>
                                  <div
                                    className="widget"
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Social Media Followers");
                                    }}
                                  >
                                    <p style={{ backgroundColor: "#54c8e8" }}>
                                      Social Media Followers
                                    </p>
                                  </div>
                                  <div
                                    className="widget"
                                    draggable="true"
                                    onDragStart={(e) => {
                                      handleOnDrag(e, "Social Media Shares");
                                    }}
                                  >
                                    <p style={{ backgroundColor: "#ffc54e" }}>
                                      Social Media Shares
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
                              id="revenue"
                              type="radio"
                              name="objective"
                              value="Revenue"
                              checked={primary === "Revenue" ? true : false}
                              onChange={(e) => {
                                setPrimary(e.target.value);
                                setSales([]);
                                setBrandings([]);
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
                                setBrandings([]);
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
                                setBrandings([]);
                              }}
                            />
                            <label htmlFor="aquisition">Acquisition</label>
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
                                      handleOnDrag(
                                        e,
                                        "New Mobile App Downloads"
                                      );
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
                              checked={
                                primary === "Reengagement" ? true : false
                              }
                              onChange={(e) => {
                                setPrimary(e.target.value);
                                setSales([]);
                                setRevenues([]);
                                setAquisitions([]);
                                setLoyaltypoints([]);
                                setConversions([]);
                                setBrandings([]);
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
                                        handleOnDrag(
                                          e,
                                          "Subscribers re-engaged"
                                        );
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
                                setBrandings([]);
                              }}
                            />
                            <label htmlFor="loyalty_points">
                              Loyalty Points
                            </label>
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
                                setBrandings([]);
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
                                      handleOnDrag(
                                        e,
                                        "Conversion rate increase"
                                      );
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
                            <label htmlFor="sec_aquisition">Acquisition</label>
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
                                  {secaquisitions.map(
                                    (secaquisition, index) => {
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
                                      handleOnDrag(
                                        e,
                                        "New Mobile App Downloads"
                                      );
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
                                        handleOnDrag(
                                          e,
                                          "Subscribers re-engaged"
                                        );
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
                                  {secconversions.map(
                                    (secconversion, index) => {
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
                                      handleOnDrag(
                                        e,
                                        "Conversion rate increase"
                                      );
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
                              }}
                            />
                            <label htmlFor="desktop">RX.com Desktop</label>
                          </div>
                        </div>
                      </div>

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
                              }}
                            />
                            <label htmlFor="mob_app">Mobile App</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="nl"
                              type="checkbox"
                              checked={newsletter}
                              onChange={(e) => {
                                setNewsletter(e.target.checked);
                              }}
                            />
                            <label htmlFor="nl">Newsletter</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="fb"
                              type="checkbox"
                              checked={facebook}
                              onChange={(e) => {
                                setFacebook(e.target.checked);
                              }}
                            />
                            <label htmlFor="fb">Facebook</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="twitter"
                              type="checkbox"
                              checked={twitter}
                              onChange={(e) => {
                                setTwitter(e.target.checked);
                              }}
                            />
                            <label htmlFor="twitter">X</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="insta"
                              type="checkbox"
                              checked={instagram}
                              onChange={(e) => {
                                setInstagram(e.target.checked);
                              }}
                            />
                            <label htmlFor="insta">Instagram</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="you"
                              type="checkbox"
                              checked={youtube}
                              onChange={(e) => {
                                setYouTube(e.target.checked);
                              }}
                            />
                            <label htmlFor="you">YouTube</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="link"
                              type="checkbox"
                              checked={linkedin}
                              onChange={(e) => {
                                setLinkedin(e.target.checked);
                              }}
                            />
                            <label htmlFor="link">LinkedIn</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="thr"
                              type="checkbox"
                              checked={threads}
                              onChange={(e) => {
                                setThreads(e.target.checked);
                              }}
                            />
                            <label htmlFor="thr">Threads</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="wei"
                              type="checkbox"
                              checked={weibo}
                              onChange={(e) => {
                                setWeibo(e.target.checked);
                              }}
                            />
                            <label htmlFor="wei">Weibo</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="tiktok"
                              type="checkbox"
                              checked={tiktok}
                              onChange={(e) => {
                                setTiktok(e.target.checked);
                              }}
                            />
                            <label htmlFor="tiktok">Tik Tok</label>
                          </div>
                        </div>
                      </div>
                      <div className="row full_field">
                        <div className="form-group row">
                          <div className="col-sm-9">
                            <input
                              id="chat"
                              type="checkbox"
                              checked={wechat}
                              onChange={(e) => {
                                setWechat(e.target.checked);
                              }}
                            />
                            <label htmlFor="chat">WeChat</label>
                          </div>
                        </div>
                      </div>
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
                    <Link to="/campaignabout">Go Back</Link>
                  </button>
                  {brandings.length !== 0 ||
                  revenues.length !== 0 ||
                  sales.length !== 0 ||
                  aquisitions.length !== 0 ||
                  reengagements.length !== 0 ||
                  loyaltypoints.length !== 0 ||
                  conversions.length !== 0 ? (
                    <button type="submit" className="btn-vori">
                      Submit
                    </button>
                  ) : (
                    <button type="button" disabled className="btn-vori">
                      Submit
                    </button>
                  )}
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
              padding: 0;
            }
            .wrap .divider {
              display: block;
            }
          }

          /* ========== NEXT BUTTON ==========*/
          .wrap .buttonCard {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background-color: #f4f5f6;
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

export default CampaignInfo;
