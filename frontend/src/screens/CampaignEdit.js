import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { ThreeDots } from "react-loader-spinner";

const CampaignEdit = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  const [readyToShow, setReadyToShow] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const [campaign, setCampaign] = useState({});
  const [description, setDescription] = useState("");
  const [rationale, setRationale] = useState("");
  const [backdrop, setBackdrop] = useState(false);
  const [updateNote, setUpdateNote] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [budget, setBudget] = useState("");
  const [noDays, setNoDays] = useState("");
  const [planDays, setPlanDays] = useState("");

  const onSave = () => {
    setTimeout(function () {
      setAlert(false);
      setUpdateNote(false);
    }, 3000);
  };

  // ============== DISCOUNT OFFERS ===============

  const [discountOffers, setDiscountOffers] = useState(false);
  const [shutOffGrat, setShutOffGrat] = useState(false);
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
  const [shutOffDiscount, setShutOffDiscount] = useState(false);
  const [shutOffLoyalty, setShutOffLoyalty] = useState(false);
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

  // ============== PUSH TO MARKETS ===============
  const [toMarket, setToMarket] = useState([]);
  const [topakistan, setToPakistan] = useState(false);
  const [toindia, setToIndia] = useState(false);
  const [tobangladesh, setToBangladesh] = useState(false);
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
  const [tochina, setToChina] = useState(false);
  const [tojapan, setToJapan] = useState(false);
  const [tokorea, setToKorea] = useState(false);

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

  // ============== MARKETS ===============

  const [market, setMarket] = useState([]);
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
  const [china, setChina] = useState(false);
  const [japan, setJapan] = useState(false);
  const [korea, setKorea] = useState(false);

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

  // ============== SEASONS ===============

  const [season, setSeason] = useState([]);
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

  // BRANDING
  const [branding, setBranding] = useState(false);
  const [brandings, setBrandings] = useState([]);
  const [brandAware, setBrandAware] = useState(false);
  const [sm, setSM] = useState(false);
  const [smShare, setSMShare] = useState(false);

  // ========== REMOVE BRANDING ===========
  const onRemoveBrand = async (event) => {
    const { value } = event.target;
    const index = brandings.indexOf(value);
    if (index !== -1) {
      brandings.splice(index, 1);
    }
    setBrandings([...brandings]);
  };

  // ========= ADD BRANDING ===========
  const onBrandChange = async (event) => {
    const { value } = event.target;
    setBrandings([...brandings, value]);
  };

  // REVENUES
  const [revenue, setRevenue] = useState(false);
  const [revenues, setRevenues] = useState([]);
  const [fltSaleRev, setFltSaleRev] = useState(false);
  const [ancRev, setAncRev] = useState(false);
  const [thirdRev, setThirdRev] = useState(false);

  // ========== REMOVE REVENUE ===========
  const onRemoveRevenue = async (event) => {
    const { value } = event.target;
    const index = revenues.indexOf(value);
    if (index !== -1) {
      revenues.splice(index, 1);
    }
    setRevenues([...revenues]);
  };

  // ========= ADD REVENUE ===========
  const onRevenueChange = async (event) => {
    const { value } = event.target;
    setRevenues([...revenues, value]);
  };

  // SALES
  const [sale, setSale] = useState(false);
  const [sales, setSales] = useState([]);
  const [tktSold, setTktSold] = useState(false);
  const [ancSold, setAncSold] = useState(false);
  const [thirdSold, setThirdSold] = useState(false);

  // ========== REMOVE SALES ===========
  const onRemoveSale = async (event) => {
    const { value } = event.target;
    const index = sales.indexOf(value);
    if (index !== -1) {
      sales.splice(index, 1);
    }
    setSales([...sales]);
  };

  // ========= ADD SALES ===========
  const onSaleChange = async (event) => {
    const { value } = event.target;
    setSales([...sales, value]);
  };

  // AQUISITION
  const [acqui, setAcqui] = useState(false);
  const [aquisitions, setAquisitions] = useState([]);
  const [subscriber, setSubscriber] = useState(false);
  const [newLoyalty, setNewLoyalty] = useState(false);
  const [newMobile, setNewMobile] = useState(false);

  // ========== REMOVE ACQUISITIONS ===========
  const onRemoveAcqui = async (event) => {
    const { value } = event.target;
    const index = aquisitions.indexOf(value);
    if (index !== -1) {
      aquisitions.splice(index, 1);
    }
    setAquisitions([...aquisitions]);
  };

  // ========= ADD ACQUISITIONS ===========
  const onAcquiChange = async (event) => {
    const { value } = event.target;
    setAquisitions([...aquisitions, value]);
  };

  // REENGAGEMENT
  const [reeng, setReeng] = useState(false);
  const [reengagements, setReengagements] = useState([]);
  const [subscriberReeng, setSubscriberReeng] = useState(false);
  const [loyaltyReeng, setLoyaltyReeng] = useState(false);

  // ========== REMOVE REENG ===========
  const onRemoveReeng = async (event) => {
    const { value } = event.target;
    const index = reengagements.indexOf(value);
    if (index !== -1) {
      reengagements.splice(index, 1);
    }
    setReengagements([...reengagements]);
  };

  // ========= ADD REENG ===========
  const onReengChange = async (event) => {
    const { value } = event.target;
    setReengagements([...reengagements, value]);
  };

  // LOYALTY POINTS
  const [loyaltypoint, setLoyaltypoint] = useState(false);
  const [loyaltypoints, setLoyaltypoints] = useState([]);
  const [pointPurchased, setPointPurchased] = useState(false);
  const [pointSpent, setPointSpent] = useState(false);

  // ========== REMOVE LOYALTY POINTS ===========
  const onRemoveLoyaltyPoints = async (event) => {
    const { value } = event.target;
    const index = loyaltypoints.indexOf(value);
    if (index !== -1) {
      loyaltypoints.splice(index, 1);
    }
    setLoyaltypoints([...loyaltypoints]);
  };

  // ========= ADD LOYALTY POINTS ===========
  const onLoyaltyPointsChange = async (event) => {
    const { value } = event.target;
    setLoyaltypoints([...loyaltypoints, value]);
  };

  // CONVERSIONS
  const [conversion, setConversion] = useState(false);
  const [conversions, setConversions] = useState([]);
  const [convRate, setConvRate] = useState(false);
  const [convRateInc, setConvRateInc] = useState(false);

  // ========== REMOVE CONVERSIONS ===========
  const onRemoveConversions = async (event) => {
    const { value } = event.target;
    const index = conversions.indexOf(value);
    if (index !== -1) {
      conversions.splice(index, 1);
    }
    setConversions([...conversions]);
  };

  // ========= ADD CONVERSIONS ===========
  const onConversionsChange = async (event) => {
    const { value } = event.target;
    setConversions([...conversions, value]);
  };

  // SECONDARY REVENUE
  const [secRevenue, setSecRevenue] = useState(false);
  const [shutSecSale, setShutSecSale] = useState(false);
  const [secRevenues, setSecRevenues] = useState([]);
  const [secfltSaleRev, setSecFltSaleRev] = useState(false);
  const [secancRev, setSecAncRev] = useState(false);
  const [secthirdRev, setSecThirdRev] = useState(false);

  // ========== REMOVE SEC REVENUES ===========
  const onRemoveSecRevenue = async (event) => {
    const { value } = event.target;
    const index = secRevenues.indexOf(value);
    if (index !== -1) {
      secRevenues.splice(index, 1);
    }
    setSecRevenues([...secRevenues]);
  };

  // ========= ADD SEC REVENUES ===========
  const onSecRevenueChange = async (event) => {
    const { value } = event.target;
    setSecRevenues([...secRevenues, value]);
  };

  // SECONDARY SALES
  const [secSale, setSecSale] = useState(false);
  const [shutSecRevenue, setShutSecRevenue] = useState(false);
  const [secSales, setSecSales] = useState([]);
  const [sectktSold, setSecTktSold] = useState(false);
  const [secancSold, setSecAncSold] = useState(false);
  const [secthirdSold, setSecThirdSold] = useState(false);

  // ========== REMOVE SEC SALES ===========
  const onRemoveSecSale = async (event) => {
    const { value } = event.target;
    const index = secSales.indexOf(value);
    if (index !== -1) {
      secSales.splice(index, 1);
    }
    setSecSales([...secSales]);
  };

  // ========= ADD SEC SALES ===========
  const onSecSaleChange = async (event) => {
    const { value } = event.target;
    setSecSales([...secSales, value]);
  };

  // SECONDARY AQUISITION
  const [secAqui, setSecAqui] = useState(false);
  const [shutSecAcqui, setShutSecAcqui] = useState(false);
  const [secaquisitions, setSecaquisitions] = useState([]);
  const [secsubscriber, setSecSubscriber] = useState(false);
  const [secnewLoyalty, setSecNewLoyalty] = useState(false);
  const [secnewMobile, setSecNewMobile] = useState(false);

  // ========== REMOVE SEC SALES ===========
  const onRemoveSecAcqui = async (event) => {
    const { value } = event.target;
    const index = secaquisitions.indexOf(value);
    if (index !== -1) {
      secaquisitions.splice(index, 1);
    }
    setSecaquisitions([...secaquisitions]);
  };

  // ========= ADD SEC SALES ===========
  const onSecAcquiChange = async (event) => {
    const { value } = event.target;
    setSecaquisitions([...secaquisitions, value]);
  };

  // SECONDARY REENGAGEMENT
  const [secreeng, setSecreeng] = useState(false);
  const [shutSecReeng, setShutSecReeng] = useState(false);
  const [secReengagements, setSecReengagements] = useState([]);
  const [secsubscriberReeng, setSecSubscriberReeng] = useState(false);
  const [secloyaltyReeng, setSecLoyaltyReeng] = useState(false);

  // ========== REMOVE REENG ===========
  const onRemoveSecReeng = async (event) => {
    const { value } = event.target;
    const index = secReengagements.indexOf(value);
    if (index !== -1) {
      secReengagements.splice(index, 1);
    }
    setSecReengagements([...secReengagements]);
  };

  // ========= ADD REENG ===========
  const onSecReengChange = async (event) => {
    const { value } = event.target;
    setSecReengagements([...secReengagements, value]);
  };

  // SECONDARY LOYALTY POINTS
  const [secloyalty, setSecloyalty] = useState(false);
  const [shutSecLoyalty, setShutSecLoyalty] = useState(false);
  const [secloyaltypoints, setSecloyaltypoints] = useState([]);
  const [secpointPurchased, setSecPointPurchased] = useState(false);
  const [secpointSpent, setSecPointSpent] = useState(false);

  // ========== REMOVE LOYALTY POINTS ===========
  const onSecRemoveLoyaltyPoints = async (event) => {
    const { value } = event.target;
    const index = secloyaltypoints.indexOf(value);
    if (index !== -1) {
      secloyaltypoints.splice(index, 1);
    }
    setSecloyaltypoints([...secloyaltypoints]);
  };

  // ========= ADD LOYALTY POINTS ===========
  const onSecLoyaltyPointsChange = async (event) => {
    const { value } = event.target;
    setSecloyaltypoints([...secloyaltypoints, value]);
  };

  // SECONDARY CONVERSIONS
  const [secconv, setSecConv] = useState(false);
  const [shutSecConv, setShutSecConv] = useState(false);
  const [secconversions, setSecConversions] = useState([]);
  const [secconvRate, setSecConvRate] = useState(false);
  const [secconvRateInc, setSecConvRateInc] = useState(false);

  // ========== REMOVE CONVERSIONS ===========
  const onRemoveSecConversions = async (event) => {
    const { value } = event.target;
    const index = secconversions.indexOf(value);
    if (index !== -1) {
      secconversions.splice(index, 1);
    }
    setSecConversions([...secconversions]);
  };

  // ========= ADD CONVERSIONS ===========
  const onSecConversionsChange = async (event) => {
    const { value } = event.target;
    setSecConversions([...secconversions, value]);
  };

  // ========= PLATFORMS ===========
  const [desktop, setDesktop] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [mobWeb, setMobWeb] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [threads, setThreads] = useState(false);
  const [weibo, setWeibo] = useState(false);
  const [wechat, setWechat] = useState(false);
  const [tiktok, setTiktok] = useState(false);

  // ============= PUT ==============
  const onSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);

    fetch(process.env.REACT_APP_BACKEND_URL + "api/listings/edit", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        description,
        season: season,
        market: market,
        toMarket: toMarket,
        campaignName: campaignName,
        budget: budget,
        planDays: planDays,
        noDays: noDays,
        rationale: rationale,
        id: id,
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
        mobweb: mobWeb,
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
        if (data.invalid) {
          outPutErrorMessages(data.invalid);
        } else {
          setUpdateNote(true);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setIsloading(false);
          setTimeout(function () {
            setUpdateNote(false);
          }, 3000);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // ============ SUBJECT DATA ===========
  useEffect(() => {
    setReadyToShow(false);
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "api/listings/campaignEdit/" + id
      )
      .then((response) => {
        if (response.status === 200) {
       
          setPlanDays(response.data.this_campaign.planDays);
          setNoDays(response.data.this_campaign.noDays);
          setCampaign(response.data.this_campaign);
          setRationale(response.data.this_campaign.rationale);
          setDescription(response.data.this_campaign.description);
          setSeason(response.data.this_campaign.season);
          setMarket(response.data.this_campaign.market);
          setToMarket(response.data.this_campaign.toMarket);
          setCampaignName(response.data.this_campaign.campaignName);
          setBudget(response.data.this_campaign.budget);
          setDiscount(response.data.this_campaign.discount);
          setGratuity(response.data.this_campaign.gratuity);
          setLoyalty(response.data.this_campaign.loyalty);
          setNoOffer(response.data.this_campaign.noOffer);
          setPrizeOffers(response.data.this_campaign.prizeOffers);
          setSales(response.data.this_campaign.sales);
          setBrandings(response.data.this_campaign.brandings);
          setRevenues(response.data.this_campaign.revenues);
          setAquisitions(response.data.this_campaign.aquisitions);
          setReengagements(response.data.this_campaign.reengagements);
          setLoyaltypoints(response.data.this_campaign.loyaltypoints);
          setConversions(response.data.this_campaign.conversions);
          setSecRevenues(response.data.this_campaign.secRevenues);
          setSecSales(response.data.this_campaign.secSales);
          setSecaquisitions(response.data.this_campaign.secaquisitions);
          setSecReengagements(response.data.this_campaign.secReengagements);
          setSecloyaltypoints(response.data.this_campaign.secloyaltypoints);
          setSecConversions(response.data.this_campaign.secconversions);
          setDesktop(response.data.this_campaign.desktop);
          setMobWeb(response.data.this_campaign.mobweb);
          setMobileApp(response.data.this_campaign.mobileApp);
          setNewsletter(response.data.this_campaign.newsletter);
          setFacebook(response.data.this_campaign.facebook);
          setTwitter(response.data.this_campaign.twitter);
          setLinkedin(response.data.this_campaign.linkedin);
          setTiktok(response.data.this_campaign.tiktok);
          setThreads(response.data.this_campaign.threads);
          setYoutube(response.data.this_campaign.youtube);
          setWeibo(response.data.this_campaign.weibo);
          setWechat(response.data.this_campaign.wechat);
          setInstagram(response.data.this_campaign.instagram);

          response.data.this_campaign.season.map((month) => {
            if (month === "January") {
              setJan(true);
            }
            if (month === "February") {
              setFeb(true);
            }
            if (month === "March") {
              setMar(true);
            }
            if (month === "April") {
              setApr(true);
            }

            if (month === "May") {
              setMay(true);
            }
            if (month === "June") {
              setJun(true);
            }
            if (month === "July") {
              setJul(true);
            }
            if (month === "August") {
              setAug(true);
            }
            if (month === "September") {
              setSep(true);
            }
            if (month === "October") {
              setOct(true);
            }
            if (month === "November") {
              setNov(true);
            }
            if (month === "December") {
              setDec(true);
            }
          });

          response.data.this_campaign.market.map((mkt) => {
            if (mkt === "Saudi Arabia") {
              setKsa(true);
            }
            if (mkt === "Bangladesh") {
              setBangladesh(true);
            }
            if (mkt === "China") {
              setChina(true);
            }
            if (mkt === "Japan") {
              setJapan(true);
            }
            if (mkt === "South Korea") {
              setKorea(true);
            }
            if (mkt === "India") {
              setIndia(true);
            }
            if (mkt === "Pakistan") {
              setPakistan(true);
            }
            if (mkt === "Thailand") {
              setThailand(true);
            }
            if (mkt === "United Arab Emirates") {
              setUae(true);
            }
            if (mkt === "France") {
              setFrance(true);
            }
            if (mkt === "Germany") {
              setGermany(true);
            }
            if (mkt === "United Kingdom") {
              setUk(true);
            }
            if (mkt === "Jordan") {
              setJordan(true);
            }
            if (mkt === "Egypt") {
              setEgypt(true);
            }
            if (mkt === "Turkiye") {
              setTurkiye(true);
            }
            if (mkt === "Spain") {
              setSpain(true);
            }
          });

          response.data.this_campaign.toMarket.map((mk) => {
            if (mk === "Saudi Arabia") {
              setToKsa(true);
            }
            if (mk === "Bangladesh") {
              setToBangladesh(true);
            }
            if (mk === "China") {
              setToChina(true);
            }
            if (mk === "Japan") {
              setToJapan(true);
            }
            if (mk === "South Korea") {
              setToKorea(true);
            }
            if (mk === "India") {
              setToIndia(true);
            }
            if (mk === "Pakistan") {
              setToPakistan(true);
            }
            if (mk === "Thailand") {
              setToThailand(true);
            }
            if (mk === "United Arab Emirates") {
              setToUae(true);
            }
            if (mk === "France") {
              setToFrance(true);
            }
            if (mk === "Germany") {
              setToGermany(true);
            }
            if (mk === "United Kingdom") {
              setToUk(true);
            }
            if (mk === "Jordan") {
              setToJordan(true);
            }
            if (mk === "Egypt") {
              setToEgypt(true);
            }
            if (mk === "Turkiye") {
              setToTurkiye(true);
            }
            if (mk === "Spain") {
              setToSpain(true);
            }
          });

          response.data.this_campaign.discount.map((type) => {
            if (type === "3rd Party Discount") {
              setThirdParty(true);
              setDiscountOffers(true);
            }
            if (type === "Airfare Discount") {
              setAirfare(true);
              setDiscountOffers(true);
            }
            if (type === "Ancillary Discount") {
              setAncillary(true);
              setDiscountOffers(true);
            }
            if (type === "Stopover Discount") {
              setStopoverDiscount(true);
              setDiscountOffers(true);
            }
            if (type === "Flight Pass Discount") {
              setFpassDiscount(true);
              setDiscountOffers(true);
            }
          });

          response.data.this_campaign.gratuity.map((type) => {
            if (type === "Complimentary Ticket") {
              setCompTkt(true);
              setGratuityOffers(true);
            }
            if (type === "Companion Ticket") {
              setCompanion(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Baggage") {
              setCompBag(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Seat") {
              setCompSeat(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Lounge Pass") {
              setCompLounge(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Priority Pass") {
              setCompPriority(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Fast Track") {
              setCompFast(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Transfer") {
              setCompTransfer(true);
              setGratuityOffers(true);
            }
            if (type === "Complimentary Stopover") {
              setCompStopover(true);
              setGratuityOffers(true);
            }
            if (type === "FOC Fare Change") {
              setFocChange(true);
              setGratuityOffers(true);
            }
          });

          response.data.this_campaign.loyalty.map((type) => {
            if (type === "Extra Points") {
              setExtraPoints(true);
              setLoyaltyOffers(true);
            }
            if (type === "Tier Extension") {
              setTierExt(true);
              setLoyaltyOffers(true);
            }
            if (type === "Status Points") {
              setStatusPoints(true);
              setLoyaltyOffers(true);
            }
            if (type === "MGM Points") {
              setMGMPoints(true);
              setLoyaltyOffers(true);
            }
            if (type === "Lower Tier Achievement") {
              setLowerTier(true);
              setLoyaltyOffers(true);
            }
            if (type === "Points Value Increase") {
              setPointsValue(true);
              setLoyaltyOffers(true);
            }
            if (type === "Buy Points at a Discount") {
              setBuyPoints(true);
              setLoyaltyOffers(true);
            }
            if (type === "Status Upgrade") {
              setStatusUpgrade(true);
              setLoyaltyOffers(true);
            }
          });
          // PRIMARY OBJ
          response.data.this_campaign.brandings.map((type) => {
            if (type === "Brand Awareness") {
              setBrandAware(true);
              setBranding(true);
            }
            if (type === "Social Media Followers") {
              setSM(true);
              setBranding(true);
            }
            if (type === "Social Media Shares") {
              setSMShare(true);
              setBranding(true);
            }
          });
          response.data.this_campaign.revenues.map((type) => {
            if (type === "Flight Sales Revenue") {
              setFltSaleRev(true);
              setRevenue(true);
            }
            if (type === "Ancillary Revenue") {
              setAncRev(true);
              setRevenue(true);
            }
            if (type === "3rd Party Product Revenue") {
              setThirdRev(true);
              setRevenue(true);
            }
          });
          response.data.this_campaign.sales.map((type) => {
            if (type === "Tickets Sold") {
              setTktSold(true);
              setSale(true);
            }
            if (type === "Ancillaries Sold") {
              setAncSold(true);
              setSale(true);
            }
            if (type === "3rd Party Product Sold") {
              setThirdSold(true);
              setSale(true);
            }
          });
          response.data.this_campaign.aquisitions.map((type) => {
            if (type === "New Subscribers") {
              setSubscriber(true);
              setAcqui(true);
            }
            if (type === "New Loyalty Members") {
              setNewLoyalty(true);
              setAcqui(true);
            }
            if (type === "New Mobile App Downloads") {
              setNewMobile(true);
              setAcqui(true);
            }
          });
          response.data.this_campaign.reengagements.map((type) => {
            if (type === "Subscribers re-engaged") {
              setSubscriberReeng(true);
              setReeng(true);
            }
            if (type === "Loyalty Members re-engaged") {
              setLoyaltyReeng(true);
              setReeng(true);
            }
          });
          response.data.this_campaign.loyaltypoints.map((type) => {
            if (type === "Points purchased") {
              setPointPurchased(true);
              setLoyaltypoint(true);
            }
            if (type === "Points spent") {
              setPointSpent(true);
              setLoyaltypoint(true);
            }
          });
          response.data.this_campaign.conversions.map((type) => {
            if (type === "Conversion rate") {
              setConvRate(true);
              setConversion(true);
            }
            if (type === "Conversion rate increase") {
              setConvRateInc(true);
              setConversion(true);
            }
          });

          // SECONDARY OBJ
          response.data.this_campaign.secRevenues.map((type) => {
            if (type === "Flight Sales Revenue") {
              setSecFltSaleRev(true);
              setSecRevenue(true);
            }
            if (type === "Ancillary Revenue") {
              setSecAncRev(true);
              setSecRevenue(true);
            }
            if (type === "3rd Party Product Revenue") {
              setSecThirdRev(true);
              setSecRevenue(true);
            }
          });
          response.data.this_campaign.secSales.map((type) => {
            if (type === "Tickets Sold") {
              setSecTktSold(true);
              setSecSale(true);
            }
            if (type === "Ancillaries Sold") {
              setSecAncSold(true);
              setSecSale(true);
            }
            if (type === "3rd Party Product Sold") {
              setSecThirdSold(true);
              setSecSale(true);
            }
          });
          response.data.this_campaign.secaquisitions.map((type) => {
            if (type === "New Subscribers") {
              setSecSubscriber(true);
              setSecAqui(true);
            }
            if (type === "New Loyalty Members") {
              setSecNewLoyalty(true);
              setSecAqui(true);
            }
            if (type === "New Mobile App Downloads") {
              setSecNewMobile(true);
              setSecAqui(true);
            }
          });
          response.data.this_campaign.secReengagements.map((type) => {
            if (type === "Subscribers re-engaged") {
              setSecSubscriberReeng(true);
              setSecreeng(true);
            }
            if (type === "Loyalty Members re-engaged") {
              setSecLoyaltyReeng(true);
              setSecreeng(true);
            }
          });
          response.data.this_campaign.secloyaltypoints.map((type) => {
            if (type === "Points purchased") {
              setSecPointPurchased(true);
              setSecloyalty(true);
            }
            if (type === "Points spent") {
              setSecPointSpent(true);
              setSecloyalty(true);
            }
          });
          response.data.this_campaign.secconversions.map((type) => {
            if (type === "Conversion rate") {
              setSecConvRate(true);
              setSecConv(true);
            }
            if (type === "Conversion rate increase") {
              setSecConvRateInc(true);
              setSecConv(true);
            }
          });

          setReadyToShow(true);
        }
      });
  }, []);

  // ========== ERROR MESSAGE ===============

  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function outPutErrorMessages(error) {
    setAlert(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const errorMessage = error;
    setAlertMsg(errorMessage);
  }

  if (!readyToShow)
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
          <title>Edit Subject | Acabook</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Medclicker" />
        </Helmet>
        <LoggedInNavbar />

        {backdrop ? (
          <div
            onClick={() => setBackdrop(false)}
            className="backdrop-delete"
          ></div>
        ) : (
          ""
        )}

        <div className="wrap">
          <div className="edit-description">
            {updateNote ? (
              <section className="updateNote container-fluid">
                <div className="container-fluid ">
                  <img
                    src="/images/tick.png"
                    style={{ width: "12px" }}
                    alt=""
                  />
                  <span>Updated successfully.</span>
                </div>
              </section>
            ) : null}
            {alert ? (
              <div className="alert">
                <img
                  src="/images/cross-black.png"
                  style={{ width: "12px" }}
                  alt=""
                />{" "}
                <span dangerouslySetInnerHTML={{ __html: alertMsg }}></span>
              </div>
            ) : (
              ""
            )}

            <div className="container-intro">
              <h2>
                {campaign.campaignName + " "}

                <span className="highlight_rx ">{campaign.category}</span>

                {campaign.pauseCampaign === true && (
                  <span
                    style={{
                      color: "#e40000",
                      fontSize: "18px",
                      border: "1px solid  #e40000",
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      marginLeft: "5px",
                    }}
                  >
                    Paused
                  </span>
                )}
              </h2>
            </div>
            <form onSubmit={onSubmit}>
              <div className="flexwrap">
                <div className="groupFive">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Campaign Information</h2>
                    </div>
                  </div>

                  <div className="container-level">
                    <label
                      style={{ fontWeight: "600" }}
                      htmlFor="campaign_name"
                    >
                      Campaign Name
                    </label>
                    <input
                      id="campaign_name"
                      type="text"
                      value={campaignName ? campaignName : ""}
                      onChange={(e) => {
                        setCampaignName(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="container-level">
                    <label
                      style={{ fontWeight: "600" }}
                      htmlFor="campaign_plan"
                    >
                      Planning (days)
                    </label>
                    <input
                      id="campaign_plan"
                      type="text"
                      value={planDays ? planDays : ""}
                      onChange={(e) => {
                        setPlanDays(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="container-level">
                    <label
                      style={{ fontWeight: "600" }}
                      htmlFor="campaign_duration"
                    >
                      Duration (days)
                    </label>
                    <input
                      id="campaign_duration"
                      type="text"
                      value={noDays ? noDays : ""}
                      onChange={(e) => {
                        setNoDays(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="container-level">
                    <label
                      style={{ fontWeight: "600" }}
                      htmlFor="campaign_budget"
                    >
                      Budget
                    </label>
                    <input
                      id="campaign_budget"
                      type="text"
                      value={budget ? budget : ""}
                      onChange={(e) => {
                        setBudget(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="groupSeven">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Seasons</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group tutoring">
                      <div className="align-trial">
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
                          }}
                          value="April"
                        />
                        <label htmlFor="apr">April </label>
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
                          }}
                          value="June"
                        />
                        <label htmlFor="jun">June </label>
                      </div>
                      <div className="align-trial">
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
                          }}
                          value="August"
                        />
                        <label htmlFor="aug">August </label>
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
                          }}
                          value="December"
                        />
                        <label htmlFor="dec">December</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexwrap">
                <div className="groupFive">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Description</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <textarea
                      id="about"
                      maxLength={2000}
                      placeholder="Maximum 2000 words"
                      value={description}
                      required
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="groupSeven">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Rationale</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <textarea
                      id="about"
                      maxLength={2000}
                      placeholder="Maximum 2000 words"
                      value={rationale}
                      required
                      onChange={(e) => {
                        setRationale(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flexwrap">
                <div className="groupFive">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>POS Markets</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group offer-trial">
                      <div className="align-other">
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
                          name="market"
                          checked={japan ? true : false}
                          onChange={(event) => {
                            !japan
                              ? onMarketChange(event)
                              : onRemoveMarket(event);
                          }}
                          onClick={() => {
                            setJapan(!japan);
                          }}
                          value="Japan"
                        />
                        <label htmlFor="mkjp">
                          Japan{" "}
                          <img
                            src="/images/japan.png"
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
                      </div>
                      <div className="align-other">
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
                          name="market"
                          id="mkkr"
                          checked={korea ? true : false}
                          type="checkbox"
                          onChange={(event) => {
                            !korea
                              ? onMarketChange(event)
                              : onRemoveMarket(event);
                          }}
                          onClick={() => {
                            setKorea(!korea);
                          }}
                          value="South Korea"
                        />
                        <label htmlFor="mkkr">
                          South Korea{" "}
                          <img
                            src="/images/korea.png"
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
                            !uk ? onMarketChange(event) : onRemoveMarket(event);
                          }}
                          onClick={() => {
                            setUk(!uk);
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

                    {/* <div className="form-group tutoring">
                      <div className="align-other"></div>
                      <div className="align-trial"></div>
                    </div> */}
                  </div>
                </div>

                <div className="groupSeven">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Push To Markets</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group offer-trial">
                      <div className="align-other">
                        <input
                          id="tobg"
                          type="checkbox"
                          checked={tobangladesh ? true : false}
                          name="market"
                          onChange={(event) => {
                            !tobangladesh
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToBangladesh(!tobangladesh);
                          }}
                          value="Bangladesh"
                        />
                        <label htmlFor="tobg">
                          Bangladesh{" "}
                          <img
                            src="/images/bangladesh.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="tocn"
                          type="checkbox"
                          checked={tochina ? true : false}
                          name="market"
                          onChange={(event) => {
                            !tochina
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToChina(!tochina);
                          }}
                          value="China"
                        />
                        <label htmlFor="tocn">
                          China{" "}
                          <img
                            src="/images/china.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="toms"
                          type="checkbox"
                          name="market"
                          checked={toegypt ? true : false}
                          onChange={(event) => {
                            !toegypt
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToEgypt(!toegypt);
                          }}
                          value="Egypt"
                        />
                        <label htmlFor="toms">
                          Egypt{" "}
                          <img
                            src="/images/egypt.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="tofr"
                          type="checkbox"
                          checked={tofrance ? true : false}
                          name="market"
                          onChange={(event) => {
                            !tofrance
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToFrance(!tofrance);
                          }}
                          value="France"
                        />
                        <label htmlFor="tofr">
                          France{" "}
                          <img
                            src="/images/france.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="tode"
                          type="checkbox"
                          checked={togermany ? true : false}
                          name="market"
                          onChange={(event) => {
                            !togermany
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToGermany(!togermany);
                          }}
                          value="Germany"
                        />
                        <label htmlFor="tode">
                          Germany{" "}
                          <img
                            src="/images/germany.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="toin"
                          type="checkbox"
                          name="market"
                          checked={toindia ? true : false}
                          onChange={(event) => {
                            !toindia
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToIndia(!toindia);
                          }}
                          value="India"
                        />
                        <label htmlFor="toin">
                          India{" "}
                          <img
                            src="/images/india.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="tojp"
                          type="checkbox"
                          name="market"
                          checked={tojapan ? true : false}
                          onChange={(event) => {
                            !tojapan
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToJapan(!tojapan);
                          }}
                          value="Japan"
                        />
                        <label htmlFor="tojp">
                          Japan{" "}
                          <img
                            src="/images/japan.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="tojo"
                          type="checkbox"
                          checked={tojordan ? true : false}
                          name="market"
                          onChange={(event) => {
                            !tojordan
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToJordan(!tojordan);
                          }}
                          value="Jordan"
                        />
                        <label htmlFor="tojo">
                          Jordan{" "}
                          <img
                            src="/images/jordan.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                      </div>
                      <div className="align-other">
                        <input
                          id="topk"
                          type="checkbox"
                          name="market"
                          checked={topakistan ? true : false}
                          onChange={(event) => {
                            !topakistan
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToPakistan(!topakistan);
                          }}
                          value="Pakistan"
                        />
                        <label htmlFor="topk">
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
                          id="tosaudi"
                          checked={toksa ? true : false}
                          type="checkbox"
                          onChange={(event) => {
                            !toksa
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToKsa(!toksa);
                          }}
                          value="Saudi Arabia"
                        />
                        <label htmlFor="tosaudi">
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
                          id="tokr"
                          checked={tokorea ? true : false}
                          type="checkbox"
                          onChange={(event) => {
                            !tokorea
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToKorea(!tokorea);
                          }}
                          value="South Korea"
                        />
                        <label htmlFor="tokr">
                          South Korea{" "}
                          <img
                            src="/images/korea.png"
                            width="27px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          name="market"
                          id="toes"
                          checked={tospain ? true : false}
                          type="checkbox"
                          onChange={(event) => {
                            !tospain
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToSpain(!tospain);
                          }}
                          value="Spain"
                        />
                        <label htmlFor="toes">
                          Spain{" "}
                          <img
                            src="/images/spain.png"
                            width="27px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="toth"
                          type="checkbox"
                          checked={tothailand ? true : false}
                          name="market"
                          onChange={(event) => {
                            !tothailand
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToThailand(!tothailand);
                          }}
                          value="Thailand"
                        />
                        <label htmlFor="toth">
                          Thailand{" "}
                          <img
                            src="/images/thailand.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="totk"
                          type="checkbox"
                          checked={toturkiye ? true : false}
                          name="market"
                          onChange={(event) => {
                            !toturkiye
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToTurkiye(!toturkiye);
                          }}
                          value="Turkiye"
                        />
                        <label htmlFor="totk">
                          Turkiye{" "}
                          <img
                            src="/images/turkiye.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="touk"
                          type="checkbox"
                          checked={touk ? true : false}
                          name="market"
                          onChange={(event) => {
                            !touk
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToUk(!touk);
                          }}
                          value="United Kingdom"
                        />
                        <label htmlFor="touk">
                          United Kingdom{" "}
                          <img
                            src="/images/uk.png"
                            width="26px"
                            style={{ marginLeft: "4px" }}
                            alt=""
                          />
                        </label>
                        <input
                          id="toae"
                          type="checkbox"
                          name="market"
                          checked={touae ? true : false}
                          onChange={(event) => {
                            !touae
                              ? onToMarketChange(event)
                              : onRemoveToMarket(event);
                          }}
                          onClick={() => {
                            setToUae(!touae);
                          }}
                          value="United Arab Emirates"
                        />
                        <label htmlFor="toae">
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
              </div>
              <div className="flexwrap">
                <div className="groupSix">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Types of Offers</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group offer">
                      <div className="align-trial">
                        <input
                          id="discount"
                          type="checkbox"
                          checked={discountOffers}
                          onChange={(e) => {
                            setDiscountOffers(e.target.checked);
                            setShutOffDiscount(true);
                            setShutOffGrat(false);
                            setShutOffLoyalty(false);
                            setNoOffer(false);
                          }}
                        />
                        <label htmlFor="discount">Discount Offers</label>

                        <input
                          id="gratuity"
                          type="checkbox"
                          checked={gratuityOffers}
                          onChange={(e) => {
                            setGratuityOffers(e.target.checked);
                            setShutOffDiscount(false);
                            setShutOffLoyalty(false);
                            setShutOffGrat(true);
                            setNoOffer(false);
                          }}
                        />
                        <label htmlFor="gratuity">Gratuity Offers</label>

                        <input
                          id="loyalty"
                          type="checkbox"
                          checked={loyaltyOffers}
                          onChange={(e) => {
                            setLoyaltyOffers(e.target.checked);
                            setShutOffLoyalty(true);
                            setShutOffDiscount(false);
                            setShutOffGrat(false);
                            setNoOffer(false);
                          }}
                        />
                        <label htmlFor="loyalty">Loyalty Offers</label>
                        <input
                          id="prize"
                          type="checkbox"
                          checked={prizeOffers}
                          onChange={(e) => {
                            setPrizeOffers(e.target.checked);
                            setNoOffer(false);
                          }}
                        />
                        <label htmlFor="prize">Prize Offers</label>
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
                      <div className="align-trial">
                        {discountOffers === true && shutOffDiscount === true ? (
                          <>
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
                            <label htmlFor="discb">Ancillary Discount</label>
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
                            <label htmlFor="discc">3rd Party Discount</label>
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
                            <label htmlFor="disce">Flight Pass Discount</label>
                          </>
                        ) : (
                          ""
                        )}

                        {gratuityOffers === true && shutOffGrat === true ? (
                          <>
                            <div className="row gratuityBox">
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
                                    <label htmlFor="gratj">
                                      FOC Fare Change
                                    </label>
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
                          </>
                        ) : (
                          ""
                        )}

                        {loyaltyOffers === true && shutOffLoyalty === true ? (
                          <>
                            <div className="row loyaltyBox">
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
                                    <label htmlFor="loyalb">
                                      Tier Extension
                                    </label>
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
                                    <label htmlFor="loyalc">
                                      Status Points
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
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexwrap">
                <div className="groupSix">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Primary Objective</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group offer">
                      <div className="align-trial">
                        <input
                          id="branding"
                          type="radio"
                          name="objective"
                          checked={branding}
                          onChange={(e) => {
                            setBranding(e.target.checked);
                            setRevenues([]);
                            setRevenue(false);
                            setFltSaleRev(false);
                            setAncRev(false);
                            setThirdRev(false);
                            setSales([]);
                            setSale(false);
                            setTktSold(false);
                            setAncSold(false);
                            setThirdSold(false);
                            setAquisitions([]);
                            setAcqui(false);
                            setSubscriber(false);
                            setNewLoyalty(false);
                            setNewMobile(false);
                            setReengagements([]);
                            setReeng(false);
                            setSubscriberReeng(false);
                            setLoyaltyReeng(false);
                            setLoyaltypoints([]);
                            setLoyaltypoint(false);
                            setPointPurchased(false);
                            setPointSpent(false);
                            setConversions([]);
                            setConversion(false);
                            setConvRate(false);
                            setConvRateInc(false);
                          }}
                        />
                        <label htmlFor="branding">Branding</label>
                        <input
                          id="rev"
                          type="radio"
                          name="objective"
                          checked={revenue}
                          onChange={(e) => {
                            setRevenue(e.target.checked);
                            setBrandings([]);
                            setBranding(false);
                            setBrandAware(false);
                            setSM(false);
                            setSMShare(false);
                            setSales([]);
                            setSale(false);
                            setTktSold(false);
                            setAncSold(false);
                            setThirdSold(false);
                            setAquisitions([]);
                            setAcqui(false);
                            setSubscriber(false);
                            setNewLoyalty(false);
                            setNewMobile(false);
                            setReengagements([]);
                            setReeng(false);
                            setSubscriberReeng(false);
                            setLoyaltyReeng(false);
                            setLoyaltypoints([]);
                            setLoyaltypoint(false);
                            setPointPurchased(false);
                            setPointSpent(false);
                            setConversions([]);
                            setConversion(false);
                            setConvRate(false);
                            setConvRateInc(false);
                          }}
                        />
                        <label htmlFor="rev">Revenue</label>
                        <input
                          id="sale"
                          type="radio"
                          name="objective"
                          checked={sale}
                          onChange={(e) => {
                            setSale(e.target.checked);
                            setRevenues([]);
                            setRevenue(false);
                            setFltSaleRev(false);
                            setAncRev(false);
                            setThirdRev(false);
                            setBrandings([]);
                            setBranding(false);
                            setBrandAware(false);
                            setSM(false);
                            setSMShare(false);
                            setAquisitions([]);
                            setAcqui(false);
                            setSubscriber(false);
                            setNewLoyalty(false);
                            setNewMobile(false);
                            setReengagements([]);
                            setReeng(false);
                            setSubscriberReeng(false);
                            setLoyaltyReeng(false);
                            setLoyaltypoints([]);
                            setLoyaltypoint(false);
                            setPointPurchased(false);
                            setPointSpent(false);
                            setConversions([]);
                            setConversion(false);
                            setConvRate(false);
                            setConvRateInc(false);
                          }}
                        />
                        <label htmlFor="sale">Sales</label>
                        <input
                          id="acqui"
                          type="radio"
                          name="objective"
                          checked={acqui}
                          onChange={(e) => {
                            setAcqui(e.target.checked);
                            setRevenues([]);
                            setRevenue(false);
                            setFltSaleRev(false);
                            setAncRev(false);
                            setThirdRev(false);
                            setBrandings([]);
                            setBranding(false);
                            setBrandAware(false);
                            setSM(false);
                            setSMShare(false);
                            setSales([]);
                            setSale(false);
                            setTktSold(false);
                            setAncSold(false);
                            setThirdSold(false);
                            setReengagements([]);
                            setReeng(false);
                            setSubscriberReeng(false);
                            setLoyaltyReeng(false);
                            setLoyaltypoints([]);
                            setLoyaltypoint(false);
                            setPointPurchased(false);
                            setPointSpent(false);
                            setConversions([]);
                            setConversion(false);
                            setConvRate(false);
                            setConvRateInc(false);
                          }}
                        />
                        <label htmlFor="acqui">Acquisitions</label>

                        <input
                          id="reeng"
                          type="radio"
                          name="objective"
                          checked={reeng}
                          onChange={(e) => {
                            setReeng(e.target.checked);
                            setRevenues([]);
                            setRevenue(false);
                            setFltSaleRev(false);
                            setAncRev(false);
                            setThirdRev(false);
                            setBrandings([]);
                            setBranding(false);
                            setBrandAware(false);
                            setSM(false);
                            setSMShare(false);
                            setSales([]);
                            setSale(false);
                            setTktSold(false);
                            setAncSold(false);
                            setThirdSold(false);
                            setAquisitions([]);
                            setAcqui(false);
                            setSubscriber(false);
                            setNewLoyalty(false);
                            setNewMobile(false);
                            setLoyaltypoints([]);
                            setLoyaltypoint(false);
                            setPointPurchased(false);
                            setPointSpent(false);
                            setConversions([]);
                            setConversion(false);
                            setConvRate(false);
                            setConvRateInc(false);
                          }}
                        />
                        <label htmlFor="reeng">Reengagement</label>

                        <input
                          id="loyaltypt"
                          type="radio"
                          name="objective"
                          checked={loyaltypoint}
                          onChange={(e) => {
                            setLoyaltypoint(e.target.checked);
                            setRevenues([]);
                            setRevenue(false);
                            setFltSaleRev(false);
                            setAncRev(false);
                            setThirdRev(false);
                            setBrandings([]);
                            setBranding(false);
                            setBrandAware(false);
                            setSM(false);
                            setSMShare(false);
                            setSales([]);
                            setSale(false);
                            setTktSold(false);
                            setAncSold(false);
                            setThirdSold(false);
                            setReengagements([]);
                            setReeng(false);
                            setSubscriberReeng(false);
                            setLoyaltyReeng(false);
                            setAquisitions([]);
                            setAcqui(false);
                            setSubscriber(false);
                            setNewLoyalty(false);
                            setNewMobile(false);
                            setConversions([]);
                            setConversion(false);
                            setConvRate(false);
                            setConvRateInc(false);
                          }}
                        />
                        <label htmlFor="loyaltypt">Loyalty Points</label>

                        <input
                          id="conversion"
                          type="radio"
                          name="objective"
                          checked={conversion}
                          onChange={(e) => {
                            setConversion(e.target.checked);
                            setRevenues([]);
                            setRevenue(false);
                            setFltSaleRev(false);
                            setAncRev(false);
                            setThirdRev(false);
                            setLoyaltypoints([]);
                            setLoyaltypoint(false);
                            setPointPurchased(false);
                            setPointSpent(false);
                            setBrandings([]);
                            setBranding(false);
                            setBrandAware(false);
                            setSM(false);
                            setSMShare(false);
                            setSales([]);
                            setSale(false);
                            setTktSold(false);
                            setAncSold(false);
                            setThirdSold(false);
                            setReengagements([]);
                            setReeng(false);
                            setSubscriberReeng(false);
                            setLoyaltyReeng(false);
                            setAquisitions([]);
                            setAcqui(false);
                            setSubscriber(false);
                            setNewLoyalty(false);
                            setNewMobile(false);
                          }}
                        />
                        <label htmlFor="conversion">Conversions</label>
                      </div>
                      <div className="align-trial">
                        {branding === true ? (
                          <>
                            <input
                              id="brandAware"
                              type="checkbox"
                              checked={brandAware ? true : false}
                              name="brand"
                              onChange={(event) => {
                                !brandAware
                                  ? onBrandChange(event)
                                  : onRemoveBrand(event);
                              }}
                              onClick={() => {
                                setBrandAware(!brandAware);
                              }}
                              value="Brand Awareness"
                            />
                            <label htmlFor="brandAware">Brand Awareness</label>
                            <input
                              name="brand"
                              id="sm"
                              checked={sm ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !sm
                                  ? onBrandChange(event)
                                  : onRemoveBrand(event);
                              }}
                              onClick={() => {
                                setSM(!sm);
                              }}
                              value="Social Media Followers"
                            />
                            <label htmlFor="sm">Social Media Followers</label>
                            <input
                              id="SMShare"
                              type="checkbox"
                              name="brand"
                              checked={smShare ? true : false}
                              onChange={(event) => {
                                !smShare
                                  ? onBrandChange(event)
                                  : onRemoveBrand(event);
                              }}
                              onClick={() => {
                                setSMShare(!smShare);
                              }}
                              value="Social Media Shares"
                            />
                            <label htmlFor="SMShare">Social Media Shares</label>
                          </>
                        ) : (
                          ""
                        )}

                        {revenue === true ? (
                          <>
                            <input
                              id="flt"
                              type="checkbox"
                              checked={fltSaleRev ? true : false}
                              name="revenue"
                              onChange={(event) => {
                                !fltSaleRev
                                  ? onRevenueChange(event)
                                  : onRemoveRevenue(event);
                              }}
                              onClick={() => {
                                setFltSaleRev(!fltSaleRev);
                              }}
                              value="Flight Sales Revenue"
                            />
                            <label htmlFor="flt">Flight Sales Revenue</label>

                            <input
                              id="anc"
                              type="checkbox"
                              checked={ancRev ? true : false}
                              name="revenue"
                              onChange={(event) => {
                                !ancRev
                                  ? onRevenueChange(event)
                                  : onRemoveRevenue(event);
                              }}
                              onClick={() => {
                                setAncRev(!ancRev);
                              }}
                              value="Ancillary Revenue"
                            />
                            <label htmlFor="anc">Ancillary Revenue</label>

                            <input
                              name="revenue"
                              id="third"
                              checked={thirdRev ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !thirdRev
                                  ? onRevenueChange(event)
                                  : onRemoveRevenue(event);
                              }}
                              onClick={() => {
                                setThirdRev(!thirdRev);
                              }}
                              value="3rd Party Product Revenue"
                            />
                            <label htmlFor="third">
                              3rd Party Product Revenue
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {sale === true ? (
                          <>
                            <input
                              id="tktSold"
                              type="checkbox"
                              checked={tktSold ? true : false}
                              name="sales"
                              onChange={(event) => {
                                !tktSold
                                  ? onSaleChange(event)
                                  : onRemoveSale(event);
                              }}
                              onClick={() => {
                                setTktSold(!tktSold);
                              }}
                              value="Tickets Sold"
                            />
                            <label htmlFor="tktSold">Tickets Sold</label>

                            <input
                              name="sales"
                              id="ancSold"
                              checked={ancSold ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !ancSold
                                  ? onSaleChange(event)
                                  : onRemoveSale(event);
                              }}
                              onClick={() => {
                                setAncSold(!ancSold);
                              }}
                              value="Ancillaries Sold"
                            />
                            <label htmlFor="ancSold">Ancillaries Sold</label>
                            <input
                              id="thirdSold"
                              type="checkbox"
                              checked={thirdSold ? true : false}
                              name="loyalty"
                              onChange={(event) => {
                                !thirdSold
                                  ? onSaleChange(event)
                                  : onRemoveSale(event);
                              }}
                              onClick={() => {
                                setThirdSold(!thirdSold);
                              }}
                              value="3rd Party Product Sold"
                            />
                            <label htmlFor="thirdSold">
                              3rd Party Product Sold
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {acqui === true ? (
                          <>
                            <input
                              id="sub"
                              type="checkbox"
                              checked={subscriber ? true : false}
                              onChange={(event) => {
                                !subscriber
                                  ? onAcquiChange(event)
                                  : onRemoveAcqui(event);
                              }}
                              onClick={() => {
                                setSubscriber(!subscriber);
                              }}
                              value="New Subscribers"
                            />
                            <label htmlFor="sub">New Subscribers</label>

                            <input
                              id="newLoy"
                              checked={newLoyalty ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !newLoyalty
                                  ? onAcquiChange(event)
                                  : onRemoveAcqui(event);
                              }}
                              onClick={() => {
                                setNewLoyalty(!newLoyalty);
                              }}
                              value="New Loyalty Members"
                            />
                            <label htmlFor="newLoy">New Loyalty Members</label>

                            <input
                              id="newMob"
                              type="checkbox"
                              checked={newMobile ? true : false}
                              onChange={(event) => {
                                !newMobile
                                  ? onAcquiChange(event)
                                  : onRemoveAcqui(event);
                              }}
                              onClick={() => {
                                setNewMobile(!newMobile);
                              }}
                              value="New Mobile App Downloads"
                            />
                            <label htmlFor="newMob">
                              New Mobile App Downloads
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {reeng === true ? (
                          <>
                            <input
                              id="subReeng"
                              type="checkbox"
                              checked={subscriberReeng ? true : false}
                              onChange={(event) => {
                                !subscriberReeng
                                  ? onReengChange(event)
                                  : onRemoveReeng(event);
                              }}
                              onClick={() => {
                                setSubscriberReeng(!subscriberReeng);
                              }}
                              value="Subscribers re-engaged"
                            />
                            <label htmlFor="subReeng">
                              Subscribers re-engaged
                            </label>

                            <input
                              id="loyReeng"
                              checked={loyaltyReeng ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !loyaltyReeng
                                  ? onReengChange(event)
                                  : onRemoveReeng(event);
                              }}
                              onClick={() => {
                                setLoyaltyReeng(!loyaltyReeng);
                              }}
                              value="Loyalty Members re-engaged"
                            />
                            <label htmlFor="loyReeng">
                              Loyalty Members re-engaged
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {loyaltypoint === true ? (
                          <>
                            <input
                              id="ptpurchase"
                              type="checkbox"
                              checked={pointPurchased ? true : false}
                              onChange={(event) => {
                                !pointPurchased
                                  ? onLoyaltyPointsChange(event)
                                  : onRemoveLoyaltyPoints(event);
                              }}
                              onClick={() => {
                                setPointPurchased(!pointPurchased);
                              }}
                              value="Points purchased"
                            />
                            <label htmlFor="ptpurchase">Points purchased</label>

                            <input
                              id="loySpent"
                              checked={pointSpent ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !pointSpent
                                  ? onLoyaltyPointsChange(event)
                                  : onRemoveLoyaltyPoints(event);
                              }}
                              onClick={() => {
                                setPointSpent(!pointSpent);
                              }}
                              value="Points spent"
                            />
                            <label htmlFor="loySpent">Points spent</label>
                          </>
                        ) : (
                          ""
                        )}

                        {conversion === true ? (
                          <>
                            <input
                              id="rate"
                              type="checkbox"
                              checked={convRate ? true : false}
                              onChange={(event) => {
                                !convRate
                                  ? onConversionsChange(event)
                                  : onRemoveConversions(event);
                              }}
                              onClick={() => {
                                setConvRate(!convRate);
                              }}
                              value="Conversion rate"
                            />
                            <label htmlFor="rate">Conversion rate</label>

                            <input
                              id="inc"
                              checked={convRateInc ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !convRateInc
                                  ? onConversionsChange(event)
                                  : onRemoveConversions(event);
                              }}
                              onClick={() => {
                                setConvRateInc(!convRateInc);
                              }}
                              value="Conversion rate increase"
                            />
                            <label htmlFor="inc">
                              Conversion rate increase
                            </label>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flexwrap">
                <div className="groupSix">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Secondary Objectives</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group offer">
                      <div className="align-trial">
                        <input
                          id="secrev"
                          type="checkbox"
                          checked={secRevenue}
                          onChange={(e) => {
                            setSecRevenue(e.target.checked);
                            setShutSecRevenue(true);
                            setShutSecSale(false);
                            setShutSecAcqui(false);
                            setShutSecConv(false);
                            setShutSecReeng(false);
                            setShutSecLoyalty(false);
                          }}
                        />
                        <label htmlFor="secrev">Revenue</label>

                        <input
                          id="secsale"
                          type="checkbox"
                          checked={secSale}
                          onChange={(e) => {
                            setSecSale(e.target.checked);
                            setShutSecSale(true);
                            setShutSecRevenue(false);
                            setShutSecAcqui(false);
                            setShutSecConv(false);
                            setShutSecReeng(false);
                            setShutSecLoyalty(false);
                          }}
                        />
                        <label htmlFor="secsale">Sales</label>
                        <input
                          id="secacqui"
                          type="checkbox"
                          checked={secAqui}
                          onChange={(e) => {
                            setSecAqui(e.target.checked);
                            setShutSecAcqui(true);
                            setShutSecRevenue(false);
                            setShutSecSale(false);
                            setShutSecConv(false);
                            setShutSecReeng(false);
                            setShutSecLoyalty(false);
                          }}
                        />
                        <label htmlFor="secacqui">Acquisitions</label>

                        <input
                          id="secreeng"
                          type="checkbox"
                          checked={secreeng}
                          onChange={(e) => {
                            setSecreeng(e.target.checked);
                            setShutSecAcqui(false);
                            setShutSecRevenue(false);
                            setShutSecSale(false);
                            setShutSecConv(false);
                            setShutSecReeng(true);
                            setShutSecLoyalty(false);
                          }}
                        />
                        <label htmlFor="secreeng">Reengagement</label>

                        <input
                          id="secloyaltypt"
                          type="checkbox"
                          checked={secloyalty}
                          onChange={(e) => {
                            setSecloyalty(e.target.checked);
                            setShutSecAcqui(false);
                            setShutSecRevenue(false);
                            setShutSecSale(false);
                            setShutSecConv(false);
                            setShutSecReeng(false);
                            setShutSecLoyalty(true);
                          }}
                        />
                        <label htmlFor="secloyaltypt">Loyalty Points</label>

                        <input
                          id="secconv"
                          type="checkbox"
                          checked={secconv}
                          onChange={(e) => {
                            setSecConv(e.target.checked);
                            setShutSecAcqui(false);
                            setShutSecRevenue(false);
                            setShutSecSale(false);
                            setShutSecConv(true);
                            setShutSecReeng(false);
                            setShutSecLoyalty(false);
                          }}
                        />
                        <label htmlFor="secconv">Conversions</label>
                      </div>
                      <div className="align-trial">
                        {secRevenue === true && shutSecRevenue === true ? (
                          <>
                            <input
                              id="secflt"
                              type="checkbox"
                              checked={secfltSaleRev ? true : false}
                              name="revenue"
                              onChange={(event) => {
                                !secfltSaleRev
                                  ? onSecRevenueChange(event)
                                  : onRemoveSecRevenue(event);
                              }}
                              onClick={() => {
                                setSecFltSaleRev(!secfltSaleRev);
                              }}
                              value="Flight Sales Revenue"
                            />
                            <label htmlFor="secflt">Flight Sales Revenue</label>

                            <input
                              id="secanc"
                              type="checkbox"
                              checked={secancRev ? true : false}
                              name="revenue"
                              onChange={(event) => {
                                !secancRev
                                  ? onSecRevenueChange(event)
                                  : onRemoveSecRevenue(event);
                              }}
                              onClick={() => {
                                setSecAncRev(!secancRev);
                              }}
                              value="Ancillary Revenue"
                            />
                            <label htmlFor="secanc">Ancillary Revenue</label>
                            <input
                              id="secthird"
                              checked={secthirdRev ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !secthirdRev
                                  ? onSecRevenueChange(event)
                                  : onRemoveSecRevenue(event);
                              }}
                              onClick={() => {
                                setSecThirdRev(!secthirdRev);
                              }}
                              value="3rd Party Product Revenue"
                            />
                            <label htmlFor="secthird">
                              3rd Party Product Revenue
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {secSale === true && shutSecSale === true ? (
                          <>
                            <input
                              id="sectktSold"
                              type="checkbox"
                              checked={sectktSold ? true : false}
                              name="sales"
                              onChange={(event) => {
                                !sectktSold
                                  ? onSecSaleChange(event)
                                  : onRemoveSecSale(event);
                              }}
                              onClick={() => {
                                setSecTktSold(!sectktSold);
                              }}
                              value="Tickets Sold"
                            />
                            <label htmlFor="sectktSold">Tickets Sold</label>

                            <input
                              id="secancSold"
                              checked={secancSold ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !secancSold
                                  ? onSecSaleChange(event)
                                  : onRemoveSecSale(event);
                              }}
                              onClick={() => {
                                setSecAncSold(!secancSold);
                              }}
                              value="Ancillaries Sold"
                            />
                            <label htmlFor="secancSold">Ancillaries Sold</label>
                            <input
                              id="secthirdSold"
                              type="checkbox"
                              checked={secthirdSold ? true : false}
                              onChange={(event) => {
                                !secthirdSold
                                  ? onSecSaleChange(event)
                                  : onRemoveSecSale(event);
                              }}
                              onClick={() => {
                                setSecThirdSold(!secthirdSold);
                              }}
                              value="3rd Party Product Sold"
                            />
                            <label htmlFor="secthirdSold">
                              3rd Party Product Sold
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {secAqui === true && shutSecAcqui === true ? (
                          <>
                            <input
                              id="secsub"
                              type="checkbox"
                              checked={secsubscriber ? true : false}
                              onChange={(event) => {
                                !secsubscriber
                                  ? onSecAcquiChange(event)
                                  : onRemoveSecAcqui(event);
                              }}
                              onClick={() => {
                                setSecSubscriber(!secsubscriber);
                              }}
                              value="New Subscribers"
                            />
                            <label htmlFor="secsub">New Subscribers</label>

                            <input
                              id="secnewLoy"
                              checked={secnewLoyalty ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !secnewLoyalty
                                  ? onSecAcquiChange(event)
                                  : onRemoveSecAcqui(event);
                              }}
                              onClick={() => {
                                setSecNewLoyalty(!secnewLoyalty);
                              }}
                              value="New Loyalty Members"
                            />
                            <label htmlFor="secnewLoy">
                              New Loyalty Members
                            </label>

                            <input
                              id="secnewMob"
                              type="checkbox"
                              checked={secnewMobile ? true : false}
                              onChange={(event) => {
                                !secnewMobile
                                  ? onSecAcquiChange(event)
                                  : onRemoveSecAcqui(event);
                              }}
                              onClick={() => {
                                setSecNewMobile(!secnewMobile);
                              }}
                              value="New Mobile App Downloads"
                            />
                            <label htmlFor="secnewMob">
                              New Mobile App Downloads
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {secreeng === true && shutSecReeng === true ? (
                          <>
                            <input
                              id="secsubReeng"
                              type="checkbox"
                              checked={secsubscriberReeng ? true : false}
                              onChange={(event) => {
                                !secsubscriberReeng
                                  ? onSecReengChange(event)
                                  : onRemoveSecReeng(event);
                              }}
                              onClick={() => {
                                setSecSubscriberReeng(!secsubscriberReeng);
                              }}
                              value="Subscribers re-engaged"
                            />
                            <label htmlFor="secsubReeng">
                              Subscribers re-engaged
                            </label>

                            <input
                              id="secloyReeng"
                              checked={secloyaltyReeng ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !secloyaltyReeng
                                  ? onSecReengChange(event)
                                  : onRemoveSecReeng(event);
                              }}
                              onClick={() => {
                                setSecLoyaltyReeng(!secloyaltyReeng);
                              }}
                              value="Loyalty Members re-engaged"
                            />
                            <label htmlFor="secloyReeng">
                              Loyalty Members re-engaged
                            </label>
                          </>
                        ) : (
                          ""
                        )}

                        {secloyalty === true && shutSecLoyalty === true ? (
                          <>
                            <input
                              id="secptpurchase"
                              type="checkbox"
                              checked={secpointPurchased ? true : false}
                              onChange={(event) => {
                                !secpointPurchased
                                  ? onSecLoyaltyPointsChange(event)
                                  : onSecRemoveLoyaltyPoints(event);
                              }}
                              onClick={() => {
                                setSecPointPurchased(!secpointPurchased);
                              }}
                              value="Points purchased"
                            />
                            <label htmlFor="secptpurchase">
                              Points purchased
                            </label>

                            <input
                              id="secloySpent"
                              checked={secpointSpent ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !secpointSpent
                                  ? onSecLoyaltyPointsChange(event)
                                  : onSecRemoveLoyaltyPoints(event);
                              }}
                              onClick={() => {
                                setSecPointSpent(!secpointSpent);
                              }}
                              value="Points spent"
                            />
                            <label htmlFor="secloySpent">Points spent</label>
                          </>
                        ) : (
                          ""
                        )}

                        {secconv === true && shutSecConv === true ? (
                          <>
                            <input
                              id="secrate"
                              type="checkbox"
                              checked={secconvRate ? true : false}
                              onChange={(event) => {
                                !secconvRate
                                  ? onSecConversionsChange(event)
                                  : onRemoveSecConversions(event);
                              }}
                              onClick={() => {
                                setSecConvRate(!secconvRate);
                              }}
                              value="Conversion rate"
                            />
                            <label htmlFor="secrate">Conversion rate</label>

                            <input
                              id="secinc"
                              checked={secconvRateInc ? true : false}
                              type="checkbox"
                              onChange={(event) => {
                                !secconvRateInc
                                  ? onSecConversionsChange(event)
                                  : onRemoveSecConversions(event);
                              }}
                              onClick={() => {
                                setSecConvRateInc(!secconvRateInc);
                              }}
                              value="Conversion rate increase"
                            />
                            <label htmlFor="secinc">
                              Conversion rate increase
                            </label>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexwrap">
                <div className="groupSix">
                  <div className="checkBoxGroup">
                    <div className="container-rate">
                      <h2>Platforms or Channels</h2>
                    </div>
                  </div>
                  <div className="container-level">
                    <div className="form-group offer">
                      <div className="align-trial">
                        <input
                          id="desktop"
                          type="checkbox"
                          checked={desktop}
                          onChange={(e) => {
                            setDesktop(e.target.checked);
                          }}
                        />
                        <label htmlFor="desktop">RX.com Desktop</label>

                        <input
                          id="mobweb"
                          type="checkbox"
                          checked={mobWeb}
                          onChange={(e) => {
                            setMobWeb(e.target.checked);
                          }}
                        />
                        <label htmlFor="mobweb">Mobile Web</label>
                        <input
                          id="mobile"
                          type="checkbox"
                          checked={mobileApp}
                          onChange={(e) => {
                            setMobileApp(e.target.checked);
                          }}
                        />
                        <label htmlFor="mobile">Mobile App</label>

                        <input
                          id="nl"
                          type="checkbox"
                          checked={newsletter}
                          onChange={(e) => {
                            setNewsletter(e.target.checked);
                          }}
                        />
                        <label htmlFor="nl">Newsletter</label>

                        <input
                          id="facebook"
                          type="checkbox"
                          checked={facebook}
                          onChange={(e) => {
                            setFacebook(e.target.checked);
                          }}
                        />
                        <label htmlFor="facebook">Loyalty Points</label>

                        <input
                          id="twitter"
                          type="checkbox"
                          checked={twitter}
                          onChange={(e) => {
                            setTwitter(e.target.checked);
                          }}
                        />
                        <label htmlFor="twitter">X</label>
                        <input
                          id="ig"
                          type="checkbox"
                          checked={instagram}
                          onChange={(e) => {
                            setInstagram(e.target.checked);
                          }}
                        />
                        <label htmlFor="ig">Instagram</label>
                      </div>
                      <div className="align-trial">
                        <input
                          id="yt"
                          type="checkbox"
                          checked={youtube}
                          onChange={(e) => {
                            setYoutube(e.target.checked);
                          }}
                        />
                        <label htmlFor="yt">Youtube</label>

                        <input
                          id="link"
                          type="checkbox"
                          checked={linkedin}
                          onChange={(e) => {
                            setLinkedin(e.target.checked);
                          }}
                        />
                        <label htmlFor="link">LinkedIn</label>

                        <input
                          id="threads"
                          type="checkbox"
                          checked={threads}
                          onChange={(e) => {
                            setThreads(e.target.checked);
                          }}
                        />
                        <label htmlFor="threads">Threads</label>

                        <input
                          id="tiktok"
                          type="checkbox"
                          checked={tiktok}
                          onChange={(e) => {
                            setTiktok(e.target.checked);
                          }}
                        />
                        <label htmlFor="tiktok">Tiktok</label>
                        <input
                          id="weibo"
                          type="checkbox"
                          checked={weibo}
                          onChange={(e) => {
                            setWeibo(e.target.checked);
                          }}
                        />
                        <label htmlFor="weibo">Weibo</label>
                        <input
                          id="wechat"
                          type="checkbox"
                          checked={wechat}
                          onChange={(e) => {
                            setWechat(e.target.checked);
                          }}
                        />
                        <label htmlFor="wechat">Wechat</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottomButtons">
                <button className="btn-back">
                  <Link to="/campaigns">Back</Link>
                </button>
                {description ? (
                  isloading ? (
                    <button className="btn-vori">
                      <ThreeDots
                        type="ThreeDots"
                        height={40}
                        width={80}
                        color={"white"}
                      />
                    </button>
                  ) : (
                    <input
                      type="submit"
                      className="save-btn"
                      value="Save"
                      onClick={onSave}
                    />
                  )
                ) : (
                  <input type="submit" className="save-btn" value="Save" />
                )}
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </HelmetProvider>
      <style jsx="true">{`
        .wrap {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding-top: 60px;
          background-color: #f0eff5;
        }
        html,
        body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
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

        .wrap .updateNote {
          width: 80%;
          background-color: #bff4f2;
          margin-bottom: 8px;
          height: 40px;
          line-height: 40px;
          padding: 0px 15px 0px 28px;
          display: none;
        }
        .wrap .updateNote span {
          margin-left: 5px;
        }
        .wrap .alert {
          background-color: #fcebcd;
          margin: 5px auto 12px;
          padding: 7px;
          width: 80%;
        }

        .flexwrap {
          padding: 0;
          margin: 0;
          width: 100%;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .edit-description {
          width: 410px;
          position: relative;
          display: flex;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: -moz-box;
          flex-wrap: wrap;
          justify-content: center;
          padding: 20px;
          margin: 0px auto 60px;
          border: 1px solid #ebebeb;
          background-color: #fff;
          padding-bottom: 20px;
          -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
        }
        .wrap .updateNote {
          width: 80%;
          background-color: #bff4f2;
          margin-bottom: 8px;
          height: 40px;
          line-height: 40px;
          padding: 0px 15px 0px 28px;
          display: block;
        }
        .wrap .updateNote span {
          margin-left: 5px;
        }

        .bottomButtons input[type="submit"] {
          position: relative;
          background-color: #817eff;
          color: white;
          border: 1px solid #817eff;
          cursor: pointer;
          width: 150px;
          height: 50px;
          line-height: 50px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
        }

        .bottomButtons {
          margin-top: 40px;
          display: flex;
          width: 100%;
          justify-content: space-around;
        }
        .wrap .save-btn:disabled {
          background-color: #ddd;
          color: #888;
          cursor: default;
          border: #ddd;
          border-radius: 4px;
          text-align: center;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
        }
        .container-intro {
          width: 100%;
        }

        .container-intro h2 {
          font-size: 22px;
          color: #333;
          font-weight: 800;
        }
        .container-intro p {
          color: rgb(51, 51, 51);
          line-height: 20px;
          font-size: 15px;
          font-weight: 100;
          font-family: sans-serif;
          width: 100%;
        }

        /* ============= COURSE TYPE ============= */

        .highlight_rx {
          color: white;
          background: #20094d;
          border-radius: 4px;
          height: 25px;
          line-height: 21px;
          text-align: center;
          padding: 2px 8px;
          display: inline-block;
        }

        /* ============= GROUP TITLES ============= */
        .container-title {
          width: 100%;
          left: 0%;
          padding: 0px 20px 0px;
        }
        .container-title h2 {
          font-weight: 800;
          font-size: 22px;
          width: 100%;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ebebeb;
          color: #2b2b2b;
        }

        /* ========== SUBMIT BUTTON ========= */
        .bottomButtons .btn-vori {
          position: relative;
          background-color: #817eff;
          color: white;
          cursor: pointer;
          font-weight: 500;
          width: 200px;
          height: 50px;
          line-height: 50px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
          padding: 0;
          border: none;
        }

        .bottomButtons .btn-vori {
          width: 200px;
          text-align: center;
          background-color: #817eff;
          cursor: pointer;
          justify-content: center;
          align-items: center;
        }
        .bottomButtons .btn-vori div {
          display: block !important;
        }

        .bottomButtons .btn-back {
          position: relative;
          background-color: #817eff;
          color: white;
          cursor: pointer;
          font-weight: 500;
          width: 200px;
          height: 50px;
          line-height: 50px;
          outline: none;
          font-size: 20px;
          border-radius: 4px;
          padding: 0;
          border: none;
        }
        .bottomButtons .btn-back a {
          color: white;
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .wrap .buttonCard {
          width: 450px;
          margin: 25px 30px;
        }
        @media only screen and (min-width: 768px) {
          .container-title .form-cont {
            margin: 3px 46px 7px 0px;
            width: 80px;
          }
          .container-title h2 {
            width: 440px;
          }
          .container-title {
            width: 480px;
          }
        }

        /* =============== GROUP FIVE ===============*/
        .groupFive {
          margin-top: 50px;
          width: 100%;
          height: 420px;
          border: 1px solid #ebebeb;
          position: relative;
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .groupFive .container-rate {
          width: 100%;
          left: 0%;
          padding: 0px 20px;
        }
        .groupFive .container-rate h2 {
          font-weight: 800;
          font-size: 22px;
          width: 100%;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ebebeb;
          color: #2b2b2b;
        }

        .container-level {
          width: 100%;
          left: 0%;
          padding: 0px 20px;
          position: relative;
        }
        .container-level h2 {
          font-weight: 800;
          font-size: 22px;
          width: 440px;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ebebeb;
          color: #2b2b2b;
        }
        textarea {
          height: 330px;
          width: 100%;
          padding: 10px;
          border: 1px solid rgb(238, 238, 238);
          outline: none;
        }

        /* =============== GROUP SIX ===============*/
        .groupSix {
          margin-top: 50px;
          width: 100%;
          height: 420px;
          border: 1px solid #ebebeb;
          position: relative;
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .groupSix .container-rate {
          width: 100%;
          left: 0%;
          padding: 0px 20px;
        }
        .groupSix .container-rate h2 {
          font-weight: 800;
          font-size: 22px;
          width: 100%;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ebebeb;
          color: #2b2b2b;
        }
        .groupSix .discountBox {
          width: 100%;
          background-color: transparent;
          position: relative;
        }

        .groupSix .gratuityBox {
          display: grid;
          grid-template-columns: 33% 33% 33%;
          gap: 9.5rem;
          width: 100%;
          background-color: transparent;
          position: relative;
        }

        .groupSix .loyaltyBox {
          display: grid;
          grid-template-columns: 50% 50%;
          gap: 4rem;
          width: 100%;
          background-color: transparent;
          position: relative;
        }

        .groupSix input[type="checkbox"] + label {
          height: 46px;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          font-family: sans-serif;
          font-weight: 500;
          float: left;
          width: 200px;
          margin-left: 60px;
          color: #2b2b2b;
          font-weight: 500;
          transform: translateY(1px);
          margin-bottom: 0px;
        }

        .groupSix input[type="checkbox"] + label::before {
          content: " ";
          position: relative;
          left: -35px;
          top: 22px;
          width: 22px;
          height: 22px;
          display: block;
          background: white;
          border-radius: 4px;
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .groupSix input[type="checkbox"] + label::after {
          content: " ";
          position: absolute;
          left: -34px;
          top: 23px;
          width: 20px;
          height: 20px;
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
        .groupSix input[type="checkbox"]:checked + label::after {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }

        .container-level {
          width: 100%;
          left: 0%;
          padding: 0px 20px;
          position: relative;
        }
        .container-level h2 {
          font-weight: 800;
          font-size: 22px;
          width: 440px;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ebebeb;
          color: #2b2b2b;
        }
        textarea {
          height: 330px;
          width: 100%;
          padding: 10px;
          border: 1px solid rgb(238, 238, 238);
          outline: none;
        }

        /* ========== GROUP SEVEN =========== */

        .groupSeven {
          margin-top: 50px;
          width: 100%;
          height: 420px;
          border: 1px solid #ebebeb;
          margin-left: 0px;
          position: relative;
          -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .groupSeven .container-rate {
          width: 100%;
          left: 0%;
          padding: 0px 20px;
        }
        .groupSeven .container-rate h2 {
          font-weight: 800;
          font-size: 22px;
          width: 100%;
          margin-top: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ebebeb;
          color: #2b2b2b;
        }

        input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input::-moz-placeholder {
          /* Firefox 19+ */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input :-ms-input-placeholder {
          /* IE 10+ */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input:-moz-placeholder {
          /* Firefox 18- */
          color: #2b2b2b !important;
          font-weight: bold;
        }

        /*Right banner*/
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        input[type="text"] {
          outline: none;
          padding: 6px 5px 6px 5px;
          height: 40px;
          width: 100%;
          color: #2b2b2b;
          font-size: 13px;
          font-weight: 500;
          font-family: sans-serif;
          margin-right: 15px;
          left: 50%;
          border: 1px solid #ebebeb;
          border-radius: 7px;
        }

        .img-fluid {
          transform: translateX(36%);
        }

        .container {
          text-align: center;
        }
        @media only screen and (min-width: 768px) {
          .container {
            text-align: left;
          }

          .img-fluid {
            transform: translateX(0%);
          }

          input[type="text"] {
            width: 100%;
          }

          .bottomButtons input[type="submit"] {
            width: 200px;
          }
          .bottomButtons {
            margin-top: 21px;
          }
          .edit-description {
            width: 1050px;
          }

          .container-rate h2 {
            width: 440px;
          }
          .container-rate {
            width: 480px;
          }

          .groupFive {
            width: 480px;
          }
          .groupSix {
            width: 990px;
          }
          .align-other {
            margin: -18px 0px;
          }

          .container-level {
            width: 480px;
          }
          .groupSeven {
            width: 480px;
            margin-left: 28px;
          }
        }

        /* ============== CHECKBOX BUTTON =========== */

        .align-trial {
          transform: translateY(-20px);
        }

        input[type="checkbox"] + label {
          height: 46px;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          font-family: sans-serif;
          font-weight: 500;
          float: left;
          width: 170px;
          margin-left: 60px;
          color: #2b2b2b;
          font-weight: 500;
          transform: translateY(1px);
          margin-bottom: 0px;
        }

        input[type="checkbox"] + label::before {
          content: " ";
          position: relative;
          left: -55px;
          top: 22px;
          width: 22px;
          height: 22px;
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
          left: -54px;
          top: 23px;
          width: 20px;
          height: 20px;
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
        input[type="checkbox"]:checked + label::after {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }
        @media only screen and (max-width: 768px) {
          input[type="checkbox"] + label {
            height: 42px;
            font-size: 14px;
          }

          input[type="checkbox"] + label::before {
            width: 22px;
            height: 22px;
            left: -40px;
          }
          input[type="checkbox"] + label::after {
            width: 19px;
            height: 19px;
            left: -39px;
          }
        }

        /* ============== RADIO BUTTON =========== */

        input[type="radio"] {
          visibility: hidden;
        }
        input[type="radio"] + label {
          height: 46px;
          position: relative;
          cursor: pointer;
          font-size: 14px;
          font-family: sans-serif;
          font-weight: 500;
          float: left;
          width: 210px;
          margin-left: 60px;
          color: #2b2b2b;
          font-weight: 500;
          transform: translateY(10px);
          margin-bottom: 0px;
        }
        input[type="radio"] + label::before {
          content: " ";
          position: relative;
          left: -55px;
          top: 22px;
          width: 22px;
          height: 22px;
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
          left: -54px;
          top: 23px;
          width: 20px;
          height: 20px;
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

        @media only screen and (max-width: 768px) {
          input[type="radio"] + label {
            height: 42px;
            font-size: 14px;
          }

          input[type="radio"] + label::before {
            width: 22px;
            height: 22px;
            left: -40px;
          }
          input[type="radio"] + label::after {
            width: 19px;
            height: 19px;
            left: -39px;
          }
        }

        /* =========== TEXT INPUT ============ */

        .wrap .btnGroup h2 {
          text-align: left;
          margin-top: 0px;
        }

        input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input::-moz-placeholder {
          /* Firefox 19+ */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input :-ms-input-placeholder {
          /* IE 10+ */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input:-moz-placeholder {
          /* Firefox 18- */
          color: #2b2b2b !important;
          font-weight: bold;
        }
        input[type="checkbox"] {
          visibility: hidden;
        }

        .btnGroup .form-control5 {
          display: inline-block;
          width: 250px;
          outline: none;
          height: 40px;
          padding: 0.375rem 0.75rem;
          font-size: 12px;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          -webkit-transition: border-color 0.15s ease-in-out,
            -webkit-box-shadow 0.15s ease-in-out;
          transition: border-color 0.15s ease-in-out,
            -webkit-box-shadow 0.15s ease-in-out;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
          margin-bottom: 10px;
        }

        .offer-trial {
          display: block;
          height: 140px;
        }
        .tutoring {
          display: block;
          transform: translateY(-25px);
        }

        .align-trial #trial_rate {
          outline: none;
          width: 100%;
          border-radius: 0px;
          color: #2b2b2b;
          display: block;
        }

        .align-trial #zoom_rate {
          outline: none;
          width: 100%;
          border-radius: 0px;
          display: block;
          color: #2b2b2b;
        }

        .align-trial #home_rate {
          outline: none;
          width: 100%;
          border-radius: 0px;
          display: block;
        }

        .align input[type="text"]:active,
        .align input[type="text"]:focus,
        .align-trial input[type="text"]:active,
        .align-trial input[type="text"]:focus {
          outline: none;
        }
        .align-trial input[type="text"] {
          display: block;
          margin-top: 8px;
          margin-left: 0px auto;
          width: 100%;
          border-radius: 0px;
        }
        .align-other {
          margin: 0px;
          width: 210px;
          display: block;
          transform: translateY(-54%);
        }
        @media only screen and (min-width: 768px) {
          .align input[type="text"] {
            width: 100%;
          }
          .align-trial input[type="text"] {
            width: 100%;
          }
          .align-other {
            transform: translateY(-45%);
          }
          .offer-trial {
            display: flex;
            height: 90px;
            justify-content: space-between;
          }
          .tutoring {
            display: flex;
            justify-content: space-between;
            transform: translateY(0);
          }

          .offer {
            display: grid;
            grid-template-columns: 50% 50%;
            gap: 1.5rem;
            width: 100%;
          }

          .align-trial #trial_rate {
            width: 170px;
            border-radius: 0px;
            margin-right: 0px;
            margin-top: 25px;
          }
          .align-trial #zoom_rate {
            width: 170px;
            margin-right: 0px;
            color: #2b2b2b;
            margin-top: 17px;
          }

          .align-trial #home_rate {
            margin-top: 75px;
            margin-right: 0px;
            width: 170px;
          }
        }
      `}</style>
    </>
  );
};

export default CampaignEdit;
