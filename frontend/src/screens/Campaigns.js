import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { useSelector } from "react-redux";
import { ReactSession } from "react-client-session";
import { ThreeDots } from "react-loader-spinner";

const Campaigns = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.value);
  ReactSession.setStoreType("sessionStorage");

  // const [readyToShow, setReadyToShow] = useState(false);
  const [page, setPage] = useState([]);
  const [maxPage, setMaxPage] = useState([]);
  const [total, setTotal] = useState([]);
  const [sort, setSort] = useState(-1);
  const [display, setDisplay] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  // =============== PAGE BUTTONS ================

  const pagePrevious = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/listings/search?page=${page <= 0 ? 0 : page - 1}` +
        "&sortBy=" +
        sort +
        "&page=" +
        page
    );

    const data = await res.json();
    setTotal(data.total);
    setListofCampaigns(data.campaigns);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
  };

  const pageNext = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/listings/search?page=${
          page < maxPage ? 1 + parseInt(page) : page
        }` +
        "&sortBy=" +
        sort +
        "&page=" +
        page
    );
    const data = await res.json();

    setTotal(data.total);
    setListofCampaigns(data.campaigns);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
  };

  // ========= PAGE INTERMEDIATE BUTTONS ==========
  const circles = [];

  for (let v = 0; v < maxPage; v++) {
    circles.push(v);
  }

  const IntermediateButtons = async (id) => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/listings/search?page=${id + 1}` +
        "&sortBy=" +
        sort +
        "&page=" +
        page
    );
    const data = await res.json();
    setTotal(data.total);
    setListofCampaigns(data.campaigns);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
  };

  // ========== SELECT CATEGORY ================
  const [category, setCategory] = useState("");
  const [, setActive] = useState("");

  const handleActive = (e) => {
    setActive(!e.target.removeAttribute("active"));
    setActive(e.target.setAttribute("class", "active"));
  };

  // ========== POST ================
  const onSubmit = (e) => {
    e.preventDefault();
    ReactSession.set("camp_category", category);
    ReactSession.set("camp_firstName", user.firstName);
    ReactSession.set("camp_lastName", user.lastName);
    ReactSession.set("camp_email", user.email);
    navigate("/campaignabout");
  };
  // ============== BACKDROP ============== //
  const [backdrop, setBackdrop] = useState(false);
  const [listofCampaigns, setListofCampaigns] = useState([]);

  // ============= INITAL LOAD ===============
  useEffect(() => {
    let isCancelled = false;
    setIsloaded(false);
    if (!ReactSession.get("camp_category")) {
      setCategory("");
    } else {
      setCategory(ReactSession.get("camp_category"));
    }

    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "api/listings/search"
      );
      const data = await res.json();

      setListofCampaigns(data.campaigns);
      setTotal(data.total);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setSort(data.sort);
      setDisplay(data.display);
      setIsloaded(true);
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
  }, []);

  // ============= PAUSE/ DISPLAY LOAD ===============
  useEffect(() => {
    let isCancelled = false;

    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "api/listings/search"
      );
      const data = await res.json();

      setListofCampaigns(data.campaigns);
      setTotal(data.total);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setSort(data.sort);
      setDisplay(data.display);
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
  }, []);

  // ============= PAUSE CAMPAIGN ===============

  const sleepAd = async (e, id) => {
    e.preventDefault();

    setBackdrop(true);
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + `api/listings/sleepCampaign/${id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ pauseCampaign: false }),
      }
    );
    const data = await res.json();
    if (data) {
      setDisplay(data.display);
      setTotal(data.total);
      setSort(data.sort);
      setPage(data.page);
      setMaxPage(data.maxPage);

      setBackdrop(false);
    }
  };

  const activeAd = async (e, id) => {
    e.preventDefault();

    setBackdrop(true);
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + `api/listings/sleepCampaign/${id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ pauseCampaign: true }),
      }
    );
    const data = await res.json();

    if (data) {
      setDisplay(data.display);
      setTotal(data.total);
      setSort(data.sort);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setBackdrop(false);
    }
  };

  // ============== DELETE CAMPAIGN ============== //
  const onDelete = async (e, id) => {
    e.preventDefault();

    setBackdrop(true);
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL + `api/listings/deleteCampaign/${id}?`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (data) {
      setDisplay(data.display);
      setBackdrop(false);
    }
  };

  // ============== LOADING ============== //
  if (!isloaded)
    return (
      <div
        style={{
          backgroundColor: "#20094d",
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
          <title>Campaigns | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <LoggedInNavbar />
        {backdrop ? (
          <div className="backdrop">
            <ThreeDots
              type="ThreeDots"
              height={40}
              width={80}
              color={"white"}
            />
          </div>
        ) : (
          ""
        )}
        <div className="personal_details">
          <Link to="/dashboard">Back to my Dashboard</Link>
          <h2>Add Campaigns</h2>
        </div>
        <div className="wrap">
          <div className="divider">
            <div className="personContent">
              <div className="threeItem">
                <div>
                  <Link style={{ color: "#817eff" }} to="#">
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
                    Category:{" "}
                    <span>
                      {ReactSession.get("camp_category")
                        ? ReactSession.get("camp_category")
                        : "Please select"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <section className="questionCard container">
                <h2>Select Categories</h2>
                <div className="btnGroup">
                  {ReactSession.get("camp_category") === "Fares Related" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Fares Related
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Fares Related
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Ancillaries Retail" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Out of the Box Creative
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Out of the Box Creative
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Closed User Group Offer" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Closed User Group
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Closed User Group
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Ancillaries Fare Related" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Ancillaries Fare Related
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Ancillaries Fare Related
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Ancillaries Flight Experiences" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Ancillaries Flight Experiences
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Ancillaries Flight Experiences
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Ancillaries Retail" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Ancillaries Retail
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Ancillaries Retail
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Ancillaries Third Party" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Ancillaries Third Party
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Ancillaries Third Party
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Creative" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Creative
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Creative
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Activities (incl. tours)" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Activities (incl. tours)
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Activities (incl. tours)
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Events" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Events
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Events
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Loyalty" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Loyalty
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Loyalty
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Bank Rewards Program" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Bank Rewards Program
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Bank Rewards Program
                    </button>
                  )}
                  {ReactSession.get("camp_category") ===
                  "Cobranded Partnership" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Cobranded Partnership
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Cobranded Partnership
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Mobile" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Mobile
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Mobile
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Hotel" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Hotel
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Hotel
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Car Rental" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Car Rental
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Car Rental
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Helicopter" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Helicopter
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Helicopter
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Birthday" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Birthday
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Birthday
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Payments" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Payments
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Payments
                    </button>
                  )}
                  {ReactSession.get("camp_category") === "Metasearch" ? (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                      className="active"
                    >
                      Metasearch
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setCategory(e.currentTarget.innerText);
                        handleActive(e);
                      }}
                      type="submit"
                    >
                      Metasearch
                    </button>
                  )}
                </div>
              </section>
            </form>
          </div>
          <section className="listOfSubjects">
            {total === 0 ? (
              <p>No Campaigns found</p>
            ) : total > 1 ? (
              <p>
                <span style={{ fontSize: "23px" }}>{total}</span> Campaigns
              </p>
            ) : (
              <p>
                <span style={{ fontSize: "23px" }}>{total}</span> Campaign
              </p>
            )}
            <div className="wrapper-ads">
              {listofCampaigns.map((campaign) => {
                return (
                  <div className="ads" key={campaign._id}>
                    <div
                      className="rightmessage"
                      style={{
                        borderTop: "5px solid #20094d",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "50% 50%",
                        }}
                      >
                        <h2>
                          {campaign.campaignName + " "}

                          <span className="highlight_rx">
                            {campaign.category}
                          </span>

                          {campaign.pauseCampaign === true && (
                            <span
                              style={{
                                color: "#e40000",
                                fontSize: "18px",
                                border: "1px solid  #e40000",
                                display: "inline-block",
                                padding: "1px 8px",
                                borderRadius: "4px",
                                marginLeft: "5px",
                              }}
                            >
                              Paused
                            </span>
                          )}
                        </h2>
                        <div style={{ height: "60px" }}>
                          {campaign.primary === true && (
                            <>
                              {campaign.loyaltypoints.length >= 1 ? (
                                campaign.loyaltypoints.length >= 2 ? (
                                  campaign.loyaltypoints.length >= 3 ? (
                                    <span className="trial-accepted">
                                      Primary: Loyalty Points 5/5
                                    </span>
                                  ) : (
                                    <span className="trial-accepted">
                                      Primary: Loyalty Points 3/5
                                    </span>
                                  )
                                ) : (
                                  <span className="trial-accepted">
                                    Primary: Loyalty Points 1/5
                                  </span>
                                )
                              ) : (
                                ""
                              )}

                              {campaign.aquisitions.length >= 1 ? (
                                campaign.aquisitions.length >= 2 ? (
                                  campaign.aquisitions.length >= 3 ? (
                                    <span className="trial-accepted">
                                      Primary: Aquisitions 5/5
                                    </span>
                                  ) : (
                                    <span className="trial-accepted">
                                      Primary: Aquisitions 3/5
                                    </span>
                                  )
                                ) : (
                                  <span className="trial-accepted">
                                    Primary: Aquisitions 1/5
                                  </span>
                                )
                              ) : (
                                ""
                              )}

                              {campaign.sales.length >= 1 ? (
                                campaign.sales.length >= 2 ? (
                                  campaign.sales.length >= 3 ? (
                                    <span className="trial-accepted">
                                      Primary: Sales 5/5
                                    </span>
                                  ) : (
                                    <span className="trial-accepted">
                                      Primary: Sales 3/5
                                    </span>
                                  )
                                ) : (
                                  <span className="trial-accepted">
                                    Primary: Sales 1/5
                                  </span>
                                )
                              ) : (
                                ""
                              )}

                              {campaign.revenues.length >= 1 ? (
                                campaign.revenues.length >= 2 ? (
                                  campaign.revenues.length >= 3 ? (
                                    <span className="trial-accepted">
                                      Primary: Revenues 5/5
                                    </span>
                                  ) : (
                                    <span className="trial-accepted">
                                      Primary: Revenues 3/5
                                    </span>
                                  )
                                ) : (
                                  <span className="trial-accepted">
                                    Primary: Revenues 1/5
                                  </span>
                                )
                              ) : (
                                ""
                              )}

                              {campaign.conversions.length >= 1 ? (
                                campaign.conversions.length >= 2 ? (
                                  campaign.conversions.length >= 3 ? (
                                    <span className="trial-accepted">
                                      Primary: Conversions 5/5
                                    </span>
                                  ) : (
                                    <span className="trial-accepted">
                                      Primary: Conversions 3/5
                                    </span>
                                  )
                                ) : (
                                  <span className="trial-accepted">
                                    Primary: Conversions 1/5
                                  </span>
                                )
                              ) : (
                                ""
                              )}

                              {campaign.reengagements.length >= 1 ? (
                                campaign.reengagements.length >= 2 ? (
                                  campaign.reengagements.length >= 3 ? (
                                    <span className="trial-accepted">
                                      Primary: Re-engagements 5/5
                                    </span>
                                  ) : (
                                    <span className="trial-accepted">
                                      Primary: Re-engagements 3/5
                                    </span>
                                  )
                                ) : (
                                  <span className="trial-accepted">
                                    Primary: Re-engagements 1/5
                                  </span>
                                )
                              ) : (
                                ""
                              )}
                            </>
                          )}

                          {campaign.secReengagements.length >= 1 ? (
                            campaign.secReengagements.length >= 2 ? (
                              campaign.secReengagements.length >= 3 ? (
                                <span className="trial-accepted">
                                  Re-engagement 5/5
                                </span>
                              ) : (
                                <span className="trial-accepted">
                                  Re-engagement 3/5
                                </span>
                              )
                            ) : (
                              <span className="trial-accepted">
                                Re-engagement 1/5
                              </span>
                            )
                          ) : (
                            ""
                          )}

                          {campaign.secloyaltypoints.length >= 1 ? (
                            campaign.secloyaltypoints.length >= 2 ? (
                              campaign.secloyaltypoints.length >= 3 ? (
                                <span className="trial-accepted">
                                  Loyalty Points 5/5
                                </span>
                              ) : (
                                <span className="trial-accepted">
                                  Loyalty Points 3/5
                                </span>
                              )
                            ) : (
                              <span className="trial-accepted">
                                Loyalty Points 1/5
                              </span>
                            )
                          ) : (
                            ""
                          )}

                          {campaign.secaquisitions.length >= 1 ? (
                            campaign.secaquisitions.length >= 2 ? (
                              campaign.secaquisitions.length >= 3 ? (
                                <span className="trial-accepted">
                                  Aquisitions 5/5
                                </span>
                              ) : (
                                <span className="trial-accepted">
                                  Aquisitions 3/5
                                </span>
                              )
                            ) : (
                              <span className="trial-accepted">
                                Aquisitions 1/5
                              </span>
                            )
                          ) : (
                            ""
                          )}

                          {campaign.secSales.length >= 1 ? (
                            campaign.secSales.length >= 2 ? (
                              campaign.secSales.length >= 3 ? (
                                <span className="trial-accepted">
                                  Sales 5/5
                                </span>
                              ) : (
                                <span className="trial-accepted">
                                  Sales 3/5
                                </span>
                              )
                            ) : (
                              <span className="trial-accepted">Sales 1/5</span>
                            )
                          ) : (
                            ""
                          )}

                          {campaign.secRevenues.length >= 1 ? (
                            campaign.secRevenues.length >= 2 ? (
                              campaign.secRevenues.length >= 3 ? (
                                <span className="trial-accepted">
                                  Revenues 5/5
                                </span>
                              ) : (
                                <span className="trial-accepted">
                                  Revenues 3/5
                                </span>
                              )
                            ) : (
                              <span className="trial-accepted">
                                Revenues 1/5
                              </span>
                            )
                          ) : (
                            ""
                          )}

                          {campaign.secconversions.length >= 1 ? (
                            campaign.secconversions.length >= 2 ? (
                              campaign.secconversions.length >= 3 ? (
                                <span className="trial-accepted">
                                  Conversions 5/5
                                </span>
                              ) : (
                                <span className="trial-accepted">
                                  Conversions 3/5
                                </span>
                              )
                            ) : (
                              <span className="trial-accepted">
                                Conversions 1/5
                              </span>
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "60% 40%",
                        }}
                      >
                        <p>{campaign.description}</p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <button className="edit">
                            <ExternalLink
                              href={
                                process.env.REACT_APP_BACKEND_URL +
                                `api/listings/edit/${campaign._id}`
                              }
                              target="_self"
                            >
                              Edit
                            </ExternalLink>
                          </button>
                          {campaign.pauseCampaign === false ? (
                            <button
                              className="pause"
                              onClick={(e) => {
                                activeAd(e, campaign._id);
                              }}
                            >
                              Pause{" "}
                              <figure
                                style={{
                                  display: "inline",
                                }}
                              >
                                <img
                                  style={{
                                    width: "19px",
                                    transform: "translateY(-2px)",
                                  }}
                                  src="/images/pause.png"
                                  alt="Riyadh Air"
                                />
                              </figure>
                            </button>
                          ) : (
                            <button
                              className="display"
                              onClick={(e) => {
                                sleepAd(e, campaign._id);
                              }}
                            >
                              Display
                              <figure
                                style={{
                                  display: "inline",
                                }}
                              >
                                <img
                                  style={{
                                    width: "23px",
                                    transform: "translateY(-2px)",
                                  }}
                                  src="/images/play.png"
                                  alt="Riyadh Air"
                                />
                              </figure>
                            </button>
                          )}

                          <button
                            onClick={(e) => {
                              onDelete(e, campaign._id);
                            }}
                            className="delete"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="buttonSegment">
              <nav className="paginate">
                <ul>
                  {maxPage >= 2 ? (
                    page > 1 ? (
                      <li
                        key={1}
                        className="previous"
                        onClick={pagePrevious}
                      ></li>
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
            </div>
          </section>

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
            .wrap .buttonCard {
              width: 450px;
              margin: 25px 15px;
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
            margin: 70px auto 0px;
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

          form .active,
          button {
            padding: 12px 20px;
            height: 50px;
            font-weight: 900;
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
          .wrap .questionCard .btnGroup > button.active {
            background: #817eff;
            color: #fff;
            width: 100%;
            height: 50px;
          }

          .wrap .questionCard h2 {
            font-family: "Noto Sans TC", sans-serif;
            text-align: center;
            font-weight: 800;
            font-size: 22px;
            width: 100%;
            margin: 0px auto 24px;
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

          @media only screen and (min-width: 768px) {
            .wrap .questionCard {
              width: 710px;
              padding: 30px 20px;
              margin-top: 0;
            }
          }

          /* ============ PAGINATION ON BOTTOM ========== */
          .buttonSegment {
            display: block;
            width: 100%;
            padding-bottom: 15px;
          }

          .paginate {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            border: none;
            z-index: 500;
            margin: 22px auto;
            background-color: transparent;
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
          @media screen and (max-width: 768px) {
            .buttonSegment {
              display: block;
            }
          }

          /* ============= LIST OF SUBJECTS ============= */
          .wrap .listOfSubjects {
            background-color: #f4f5f6;
            width: 100%;
            padding: 2px 200px;
          }

          .wrapper-ads .ads {
            height: 136px;
            width: 100%;
            border-radius: 0px;
            border: none;
            margin: 15px 10px 10px 0px;
            position: relative;
            overflow: hidden;
          }

          .trial-accepted {
            background-color: #20094d;
            color: white;
            border-radius: 4px;
            padding: 2px 8px;
            font-size: 15px;
            font-weight: 400;
            height: 25px;
            line-height: 21px;
            margin-right: 5px;
            margin-top: 2px;
            display: inline-block;
          }

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

          .wrapper-ads .rightmessage {
            margin-left: 0px;
            cursor: pointer;
            position: relative;
            padding: 10px 15px;
            display: block;
            margin-right: 15px;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: white;
            border-bottom: 1px solid #777;
          }
          .wrapper-ads .ads:hover {
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }
          .wrapper-ads .rightmessage h2 {
            font-size: 18px;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 600;
            color: #2b2b2b;
          }

          .rightmessage h3 {
            font-size: 14px;
            font-family: "Noto Sans TC", sans-serif;
            color: #2b2b2b;
            font-weight: 800;
            margin: 15px 0px;
          }
          .rightmessage p {
            font-size: 14px;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 100;
            color: #2b2b2b;
            margin: 5px 0px;
          }

          .rightmessage .delete,
          .rightmessage .edit {
            width: 115px;
            height: 40px;
            font-size: 14px;
            border-radius: 4px;
            background-color: white;
            color: #484848;
            border: 1px solid #dce0e0;
            text-align: center;
            line-height: 38px;
            cursor: pointer;
            display: block;
            font-family: sans-serif;
            font-weight: 300;
            padding: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
          }

          .rightmessage .edit a {
            color: #484848;
            font-weight: 300;
            display: block;
            width: 100%;
            height: 100%;
          }

          .rightmessage .pause {
            background-color: #e40000;
            border: 1px solid #e40000;
            font-weight: 800;
            width: 115px;
            height: 40px;
            line-height: 38px;
            text-align: center;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            display: block;
            color: white;
            padding: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
          }
          .rightmessage .display {
            background-color: #817eff;
            border: 1px solid #817eff;
            font-weight: 800;
            width: 115px;
            height: 40px;
            line-height: 38px;
            text-align: center;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            display: block;
            color: white;
            padding: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
          }

          .rightmessage .pause:active,
          .rightmessage .pause:focus,
          .rightmessage .display:active,
          .rightmessage .display:focus,
          .rightmessage .delete:active,
          .rightmessage .delete:focus {
            outline: none;
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
          @media screen and (max-width: 768px) {
            .wrap .listOfSubjects {
              padding: 2px 0px;
            }
            .trial-accepted {
              padding: 1px 4px;
              font-size: 12px;
              height: 20px;
              line-height: 18px;
            }

            .my-rate {
              padding: 1px 4px;
              font-size: 12px;
              height: 20px;
              line-height: 18px;
              margin-left: 5px;
            }
            .rightmessage .display,
            .rightmessage .pause,
            .rightmessage .edit {
              width: 80px;
              height: 32px;
              line-height: 30px;
              font-size: 12px;
            }
            .rightmessage .delete {
              display: none;
            }

            .highlight_rx {
              height: 20px;
              line-height: 18px;
              padding: 1px 4px;
              font-size: 12px;
            }
            .rightmessage p {
              font-size: 12px;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Campaigns;
