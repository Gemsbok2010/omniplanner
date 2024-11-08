import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
import { useSelector } from "react-redux";
import { ExternalLink } from "react-external-link";
import { useDispatch } from "react-redux";
import { login } from "../redux/userInfo";

// Three dots
import { ThreeDots } from "react-loader-spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.value);

  ReactSession.setStoreType("sessionStorage");

  // ============== BACKDROP ============== //
  const [backdrop, setBackdrop] = useState(false);
  const [edm, setEdm] = useState("");
  const [total, setTotal] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [blacklist, setBlacklist] = useState(false);
  const [close, setClose] = useState(false);
  const [campaigns, setCampaigns] = useState("");
  const [applicants, setApplicants] = useState("");
  const [myListings, setMylistings] = useState("");
  const [newApply, setNewApply] = useState("");
  const [expired, setExpired] = useState("");
  const [current, setCurrent] = useState("");
  const [isloaded, setIsloaded] = useState(false);

  // ============ LOCUM DATA ===========
  useEffect(() => {
    setIsloaded(false);
    setEdm(ReactSession.get("edm"));
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "api/dashboard/dashboard/" +
          user.email
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setCampaigns(response.data.campaigns);
          setExpired(response.data.expired);
          setCurrent(response.data.current);
          setTotal(response.data.total);
          setApplicants(response.data.applicants);
          setMylistings(response.data.mylistings);
          setNewApply(response.data.newApply);
          dispatch(
            login({
              firstName: response.data.user.firstName,
              isLoggedIn: true,
              lastName: response.data.user.lastName,
              email: response.data.user.email,
              isActive: response.data.user.isActive,
              isAdmin: response.data.user.isAdmin,
            })
          );
          setIsloaded(true);
        }
      });
  }, []);

  // ========== ALERT MESSAGE =========
  const [messageToAll, setMessageToAll] = useState("");
  const [titleOfMessage, setTitleOfMessage] = useState("");
  const [messageOn, setMessageOn] = useState(false);

  const fetchData = async () => {
    setIsloaded(false);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "api/admin/homepage")
      .then((response) => {
        if (response.status === 200) {
          setMessageToAll(response.data.plans.messageToAll);
          setMessageOn(response.data.plans.messageOn);
          setTitleOfMessage(response.data.plans.titleOfMessage);
          setIsloaded(true);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            alt=""
          />
        </div>
      </div>
    );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Dashboard | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <nav>
          <div className="dashboard">
            <div className="logo">
              <div id="hamburger" onClick={() => setClose(false)}></div>
            </div>
          </div>
        </nav>

        {backdrop ? (
          <div className="backdrop">
            <ThreeDots
              type="ThreeDots"
              height={30}
              width={80}
              color={"white"}
            />
          </div>
        ) : (
          ""
        )}

        <div className="wrap">
          <main>
            <div></div>
            <aside className={close ? "moveback" : "movehere"}>
              {close ? (
                <>
                  <div
                    className="logo"
                    style={{ marginLeft: "20px", marginBottom: "1rem" }}
                  >
                    <Link to="/">
                      <img
                        src="/images/rx.png"
                        className="logo"
                        alt="Riyadh Air"
                      />
                    </Link>
                  </div>

                  <button id="close-btn" onClick={() => setClose(false)}>
                    <span
                      style={{ color: "white" }}
                      className="material-icons-sharp"
                    >
                      menu_open
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <div
                    className="logo"
                    style={{ marginLeft: "20px", marginBottom: "1rem" }}
                  >
                    <Link to="/">
                      <img src="/images/rx.png" className="logo" alt="" />
                    </Link>
                  </div>
                  <button id="close-btn" onClick={() => setClose(true)}>
                    <span
                      style={{ color: "white" }}
                      className="material-icons-sharp"
                    >
                      close
                    </span>
                  </button>
                </>
              )}
              {!isloaded ? (
                <div
                  className="sidebar"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    alignItems: "center",
                    height: "604px",
                  }}
                >
                  <ThreeDots
                    type="ThreeDots"
                    height={40}
                    width={80}
                    color={"grey"}
                  />
                </div>
              ) : user.isActive === false ? (
                <div className="sidebar">
                  <Link to="/dashboard" className="active disabled">
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard Home</h4>
                  </Link>
                  <Link to={"/personal-details"}>
                    <span className="material-icons-sharp">person</span>
                    <h4>Personal Details</h4>
                  </Link>

                  <Link to="#" className="disabled">
                    <span className="material-symbols-outlined">stylus</span>

                    <h4>Create a Brief</h4>
                  </Link>
                  <Link to="#" className="disabled">
                    <span className="material-symbols-outlined">
                      contract_edit
                    </span>
                    <h4>All Briefs</h4>
                  </Link>
                  <Link to="#" className="disabled">
                    <span className="material-symbols-outlined">campaign</span>
                  </Link>
                  <Link to="#" className="disabled">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                    <h4>Calendar</h4>
                  </Link>
                  <Link to="#" className="disabled">
                    <span className="material-icons-sharp">search</span>
                    <h4>Search Positions</h4>
                  </Link>
                  <Link to="#" className="disabled">
                    <span className="material-icons-sharp">search</span>
                    <h4>Applications Manager</h4>
                  </Link>
                </div>
              ) : (
                <div className="sidebar">
                  <Link to="/dashboard" className="active">
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard Home</h4>
                  </Link>
                  <Link to="/personal-details">
                    <span className="material-icons-sharp">person</span>
                    <h4>Personal Details</h4>
                  </Link>
                  {!edm ? (
                    <Link to="/step1">
                      <span className="material-symbols-outlined">stylus</span>
                      <h4>Create a Brief</h4>
                    </Link>
                  ) : (
                    <Link to="/question_continue">
                      <span className="material-symbols-outlined">stylus</span>
                      <h4>Create a Brief</h4>
                    </Link>
                  )}
                  <Link to="/briefs">
                    <span className="material-symbols-outlined">
                      contract_edit
                    </span>
                    <h4>All Briefs</h4>
                  </Link>
                  <Link to="/campaigns">
                    <span className="material-symbols-outlined">campaign</span>
                    <h4>Campaign Ideas</h4>
                  </Link>
                  <Link to="/campaignadvisor">
                    <span className="material-symbols-outlined">campaign</span>
                    <h4>Campaign Advisor</h4>
                  </Link>
                  <Link to="/calendar">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                    <h4>Calendar</h4>
                  </Link>

                  <ExternalLink target="_self" href="/logout">
                    <span className="material-icons-sharp">logout</span>
                    <h4>Log Out</h4>
                  </ExternalLink>
                </div>
              )}
              {/* END OF SIDEBAR */}
            </aside>

            <section className="middle">
              {user.isActive === true ? (
                ""
              ) : (
                <div
                  className="container-fluid"
                  style={{
                    backgroundColor: "#e40000",
                    color: "white",
                    padding: "4px 6px",
                    fontSize: "16px",
                  }}
                >
                  <span>
                    {" "}
                    Your account is blocked. Please contact the Omniplanner
                    manager for further assistance.
                  </span>
                </div>
              )}

              {messageOn === false ? (
                ""
              ) : (
                <div className="alertBox forbid">
                  <p>{titleOfMessage}</p>
                  <p>{messageToAll}</p>
                </div>
              )}
              <div className="myaccountbox">
                <div className="leftBox">
                  {user.isActive ? "" : <div className="blockfilter"></div>}

                  <div className="topBox">
                    <div>
                      <h2>User Profile</h2>
                      <h4>{user.email}</h4>
                      <h3>Name</h3>

                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                    <div className="controlButton">
                      {user.isAdmin ? (
                        <button className="controlpanel">
                          <Link
                            style={{ wdith: "100px" }}
                            to="/admin/dashboard"
                          >
                            Go to Admin
                          </Link>
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="bottomBox-none">
                    <h2>Newsletter Brief</h2>
                    <div>
                      <button type="button" className="registerLocum">
                        <Link to="/step1">Create a Brief</Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="gridBox">
                  <div className="grid">
                    {user.isActive ? "" : <div className="blockfilter"></div>}
                    <Link to="/briefs">
                      <h3>Briefs Scheduled</h3>
                      {total <= 1 ? (
                        <p>
                          {total}
                          <span> brief</span>
                        </p>
                      ) : (
                        <p>
                          {total}
                          <span> briefs</span>
                        </p>
                      )}
                    </Link>
                  </div>
                  <div className="grid">
                    {user.isActive ? "" : <div className="blockfilter"></div>}
                    <Link to="/briefs">
                      <h3>Campaigns</h3>
                      {campaigns <= 1 ? (
                        <p>
                          {campaigns}
                          <span> campaign</span>
                        </p>
                      ) : (
                        <p>
                          {campaigns}
                          <span> campaigns</span>
                        </p>
                      )}
                    </Link>
                  </div>
                  <div className="grid">
                    {user.isActive ? "" : <div className="blockfilter"></div>}
                    <Link to="#">
                      <h3>Active Briefs</h3>
                      <div
                        className="applied"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          top: "12%",
                          position: "relative",
                        }}
                      >
                        <div>
                          <p className="expired">Expired</p>
                          <p className="seen">Current</p>
                        </div>
                        <div>
                          <p>{expired}</p>
                          <p>{current}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="grid">
                    {user.isActive ? "" : <div className="blockfilter"></div>}
                    <Link to="/listingmanager">
                      <h3>Messages</h3>
                      <div
                        className="applied"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          top: "12%",
                          position: "relative",
                        }}
                      >
                        <div>
                          <p className="expired">New Messages</p>
                          <p className="seen">Actions from you</p>
                        </div>
                        <div>
                          <p>{myListings}</p>
                          <p>{applicants}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="ad-banner"></div>
            </section>
            {/* END OF MIDDLE */}
          </main>

          <Footer />
        </div>
        <style jsx="true">{`
          /* ======== ROOT CSS VARIABLES ========== */

          :root {
            --color-white: white;
            --color-light: #f0eff5;
            --color-gray-light: #89848c;
            --color-gray-dark: #56555e;
            --color-dark: #27282f;
            --color-primary: #817eff;
            --color-success: rgb(34, 202, 75);
            --color-danger: rgb(255, 67, 54);
            --color-warning: rgb(234, 181, 7);
            --color-purple: rgb(160, 99, 245);

            --color-primary-light: rgba(71, 7, 234, 0.2);
            --color-success-light: rgba(34, 202, 75, 0.2);
            --color-danger-light: rgba(255, 67, 54, 0.2);
            --color-purple-light: rgba(160, 99, 245, 0.2);

            --card-padding: 1.6rem;
            --padding-1: 1rem;
            --padding-2: 8px;

            --card-border-radius: 1.6rem;
            --border-radius-1: 1rem;
            --border-radius-2: 6px;
          }

          .dark-theme {
            --color-white: #131316;
            --color-light: #23232a;
            --color-dark: #ddd;
            --color-gray-dark: #adacb5;
          }

          * {
            margin: 0;
            padding: 0;
            outline: 0;
            border: 0;
            appearance: none;
            list-style: none;
            text-decoration: none;
            box-sizing: border-box;
          }
          html {
            font-size: 12px;
          }

          body {
            background-color: var(--color-light);
            font-family: "Noto Sans TC", sans-serif;
            min-height: 100vh;
            color: var(--color-dark);
          }
          h1 {
            font-size: 2.2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          h3 {
            font-size: 1.2rem;
          }
          h4 {
            font-size: 1rem;
          }
          h5 {
            font-size: 0.86rem;
            font-weight: 500;
          }

          h6 {
            font-size: 0.76rem;
          }

          p {
            font-size: 0.86rem;
            color: var(--color-gray-dark);
          }
          small {
            font-weight: 300;
            font-size: 0.77rem;
          }

          .text-muted {
            color: var(--color-gray-light);
          }
          .primary {
            color: var(--color-primary);
          }
          .success {
            color: var(--color-success);
          }
          .danger {
            color: var(--color-danger);
          }
          .purple {
            color: var(--color-purple);
          }
          .bg-primary {
            background-color: var(--color-primary);
            box-shadow: 0 0.8rem 0.8rem var(--color-primary-light);
          }
          .bg-success {
            background-color: var(--color-success);
            box-shadow: 0 0.8rem 0.8rem var(--color-success-light);
          }
          .bg-danger {
            background-color: var(--color-danger);
            box-shadow: 0 0.8rem 0.8rem var(--color-danger-light);
          }
          .bg-purple {
            background-color: var(--color-purple);
            box-shadow: 0 0.8rem 0.8rem var(--color-purple-light);
          }
          .bg-dark {
            background-color: #27282f;
            box-shadow: 0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
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
          /* ============== NAV BAR ============= */

          nav {
            width: 100%;
            background-color: var(--color-white);
            padding: 1rem 0;
            height: 65px;
          }

          nav .dashboard {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            width: 96%;
            margin: 0 auto;
          }
          nav img.logo {
            width: 10rem;
            display: block;
          }

          nav #hamburger {
            background: url("/images/menu-black.png");
            background-repeat: no-repeat;
            background-size: 45%;
            background-position: center;
            cursor: pointer;
            position: absolute;
            height: 65px;
            width: 60px;
            display: block;
            transform: translate(-50%, -20%);
            top: 65%;
            left: 5%;
          }

          nav .logo.active {
            display: block;
          }

          /* ============ ASIDE & SIDEBAR ============ */
          main {
            display: grid;
            grid-template-columns: 22rem 30rem;
            gap: 2rem;
            width: 96%;
            margin: 1rem auto 4rem;
          }

          .wrap .logo {
            margin-top: 5px;
            margin-btoom: 3px;
            height: 50px;
          }

          .wrap .container {
            max-width: 1080px;
            margin-right: 80px;
          }
          .wrap .buffer {
            display: block;
            width: 310px;
            height: 100%;
          }

          .wrap .container-fluid {
            display: grid;
            grid-template-columns: 25% 75%;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }

          .wrap .sub-footer {
            display: grid;
            grid-template-columns: 25% 75%;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            background-color: #fff;
          }

          main aside {
            position: fixed;
            top: 0;
            background-color: #240850;
            height: 100vh;
            z-index: 1000;
            width: 25rem;
            transform: translateX(-10%);
          }

          main .sidebar .alertCircle {
            height: 20px;
            width: 20px;
            background-color: #e40000;
            color: white;
            font-size: 12px;
            border-radius: 50%;
            text-align: center;
            line-height: 20px;
            position: absolute;
            transform: translate(-80%, -20%);
          }

          /* will be shown only on mobile and tablets */
          main aside button#close-btn {
            display: none;
          }
          main aside button#close-btn:focus,
          main aside button#close-btn:active {
            outline: none;
          }

          main aside .sidebar a {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            height: 4.2rem;
            color: #fff;
            position: relative;
          }

          main aside .sidebar a:hover {
            background-color: #817eff;
            border-radius: 30px;
            text-align: center;
            width: 90%;
          }

          main aside .sidebar a span {
            font-size: 1.7rem;
            margin-left: 2.2rem;
            transition: all 300ms ease;
          }

          main aside .sidebar a.active {
            background: #240850;
            color: var(--color-primary);
          }

          main aside .sidebar a.active:before {
            content: "";
            width: 6px;
            height: 100%;
            position: absolute;
            background: var(--color-primary);
          }

          main aside .sidebar a:hover {
            color: white;
          }

          main aside .sidebar a:hover span {
            margin-left: 2rem;
          }

          main aside .sidebar h4 {
            font-weight: 500;
          }
          .sidebar .disabled {
            background-color: #ddd;
            color: #888;
            cursor: default;
            border: #ddd;
          }

          main aside .sidebar .disabled:hover,
          #dropItem .disabled :hover {
            color: #888;
          }

          /* ============= MIDDLE SECTION ============= */
          .myaccountbox {
            margin-top: 30px;
            display: flex;
            justify-content: space-bewtween;
            width: 880px;
          }

          .leftBox {
            position: relative;
            background-color: white;
            height: 350px;
            width: 430px;
            margin-right: 10px;
            border-radius: 5px;
            border-top: 5px solid #817eff;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
          }

          .leftBox h2 {
            color: #2f383c;
            font-size: 1.6rem;
            word-break: break-word;
            font-weight: 400;
            letter-spacing: -0.02em;
            margin-bottom: 18px;
          }
          .leftBox h4 {
            color: rgba(99, 106, 109);
            font-weight: 100;
            font-family: "Noto Sans TC", sans-serif;
            font-size: 14px;
            margin-bottom: 16px;
          }
          .leftBox h3 {
            color: #2f383c;
            font-size: 1.6rem;
            word-break: break-word;
            font-weight: 400;
            letter-spacing: -0.02em;
            margin-bottom: 0px;
          }

          .leftBox p {
            font-size: 28px;
            font-weight: 600;
          }

          main section {
            width: 880px;
          }

          main section.midde .header {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          main section.middle .header input[type="date"] {
            padding: 0.5rem 2rem;
            border-radius: var(--border-radius-2);
            background: var(--color-white);
            color: var(--color-gray-dark);
          }

          main section.middle .cards {
            margin-top: 1rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          main section.middle .cards .card {
            background: linear-gradient(#ff796f, #bd261b);
            padding: var(--card-padding);
            border-radius: var(--card-border-radius);
            color: #fff;
            height: 16rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 2rem 3rem var(--color-danger-light);
            transition: all 300ms ease;
            min-width: 22rem;
          }

          main section.middle .cards .card:nth-child(2) {
            background: linear-gradient(#7f8191, #27282f);
            box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);
          }

          main section.middle .cards .card:nth-child(3) {
            background: linear-gradient(#5d70ff, #5719c2);
            box-shadow: 0 2rem 3rem var(--color-primary-light);
          }
          main section.middle .cards .card:hover {
            box-shadow: none;
          }

          main section.middle .card .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          main section.middle .card .top .left {
            display: flex;
            gap: 0.5rem;
          }
          main section.middle .card .top .left h2 {
            font-weight: 200;
            font-size: 1.4rem;
          }

          main section.middle .card .top .left img {
            width: 2.3rem;
            height: 2.3rem;
            border: 1px solid white;
            border-radius: var(--border-radius-2);
            padding: 0.4rem;
          }

          main section.middle .card .top .right img.right {
            width: 3.5rem;
          }

          main section.middle .card .middle {
            display: flex;
            justify-content: space-between;
          }

          main section.middle .container-fluid {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            display: block;
          }

          main section.middle .card .middle .chip {
            width: 3.5rem;
          }
          main section.middle .card .bottom {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          main section.middle .card .bottom .right {
            display: flex;
            gap: 2rem;
          }

          .bottomBox {
            display: flex;
            justify-content: space-between;
            padding: 16px 20px 0px 20px;
            margin: 0;
            height: 168px;
          }
          .bottomBox-none {
            display: block;
            padding: 16px 20px 0px 20px;
            margin: 0;
            height: 168px;
            text-align: center;
          }
          .bottomBox-none h2 {
            text-align: left;
          }
          .topBox {
            display: flex;
            justify-content: space-between;
            padding: 16px 20px 0px 20px;
            margin: 0;
            height: 168px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.18);
          }
          .topBox .controlButton {
            position: relative;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-betweeb;
          }

          .topBox .controlButton .controlpanel a {
            width: 130px;
            background: linear-gradient(210deg, #006098, rgba(0, 96, 152, 0));
            background-color: #54c8e8;
            border-radius: 4px;
          }

          .controlButton button {
            margin-top: 0px;
            top-right: 0px;
            top: 0;
            position: relative;
          }

          .bottomBox button {
            background-color: #817eff;
            position: relative;
            color: white;
            cursor: pointer;
            font-weight: 500;
            width: 130px;
            height: 50px;
            line-height: 50px;
            outline: none;
            height: 50px;
            border-radius: 4px;
            padding: 0 10px;
            margin-top: 20px;
          }

          .topBox button {
            background-color: transparent;
            position: relative;
            color: white;
            cursor: pointer;
            font-weight: 500;
            width: 130px;
            height: 50px;
            line-height: 50px;
            outline: none;
            height: 50px;
            border-radius: 4px;
            padding: 0;
          }

          .bottomBox-none .registerLocum {
            position: relative;
            background-color: #817eff;
            border: 1px solid #817eff;
            height: 50px;
            width: 80%;
            line-height: 48px;
            border-radius: 4px;
            line-height: 50px;
            margin: 0;
            font-size: 18px;
            text-align: center;
            margin-top: 15px;
          }

          .topBox a,
          .bottomBox a,
          .bottomBox-none a {
            color: white;
            height: 100%;
            width: 100%;
            display: block;
            font-size: 14px;
          }

          .gridBox {
            background-color: transparent;
            height: 350px;
            width: 420px;
            border-radius: 5px;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-row-gap: 12px;
            grid-column-gap: 12px;
            margin-top: 0px;
          }
          .grid {
            position: relative;
            background-color: white;
            border-radius: 5px;
            cursor: pointer;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
          }
          .grid h3 {
            text-align: center;
            font-size: 20px;
            top: 15%;
            position: relative;
            color: #2f383c;
          }
          .grid p {
            width: 100%;
            text-align: center;
            font-size: 38px;
            top: 23%;
            position: relative;
          }
          .grid span {
            font-size: 18px;
          }
          .grid .city p {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 5px;
          }
          .grid .applied p {
            font-size: 16px;
            height: 28px;
          }

          .grid .seen {
            color: green;
            font-size: 16px;
            height: 28px;
            line-height: 26px;
            padding-left: 3px;
            padding-right: 3px;
            border: 1px solid green;
            margin-left: 10px;
          }

          .grid .expired {
            color: #e40000;
            font-size: 16px;
            height: 28px;
            line-height: 26px;
            padding-left: 3px;
            padding-right: 3px;
            border: 1px solid #e40000;
            margin-left: 10px;
          }

          .grid .appliedbefore {
            color: #e40000;
            font-size: 16px;
            height: 28px;
            line-height: 26px;
            padding-left: 3px;
            padding-right: 3px;
            border: 1px solid #e40000;
            margin-left: 10px;
          }
          .blockfilter {
            position: absolute;
            display: block;
            background-color: rgba(221, 221, 221, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2500;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            cursor: default;
            z-index: 100;
          }

          main .alertBox {
            margin-top: 20px;
            position: relative;
            background-color: #fdf4f6;
            width: 100%;
            margin-right: 10px;
            border-radius: 5px;
            padding: 5px 25px;
            border-top: 5px solid #d52043;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
          }

          main .alertBox p {
            font-size: 14px;
            font-weight: 600;
            margin-left: 15px;
            margin-bottom: 0px;
            color: #56555e;
          }

          main .alertBox a {
            color: #d52043;
            font-size: 14px;
            font-weight: 600;
          }
          .forbid {
            background-image: url("./../../images/exclamation.png");
            background-repeat: no-repeat;
            background-position: 15px 7px;
            background-size: 18px;
          }

          .ad-banner {
            height: 205px;
            width: 100%;
            position: relative;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            margin-top: 20px;
            background: url("/images/rx-787.png") no-repeat center center;
            background-size: cover;
            background-position: 0px -225px;
          }

          /* =========== SLIDEKEY ========== */

          .checkbox-btn {
            position: relative;
            width: 130px;
            height: 50px;
            background-color: white;
            border: 3px solid transparent;
            overflow: hidden;
            border-radius: 0px;
          }
          .checkbox-btn input {
            height: 100%;
            width: 100%;
            position: relative;
            cursor: pointer;
            opacity: 0;
            top: 0;
            left: 0;
            z-index: 3;
          }
          .checkbox-btn div {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            border-radius: 4px;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
          }
          .checkbox-btn div .slidekey {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 0;
            left: 0;
            text-align: center;
            background-color: #000;
            transition: 0.5s ease-in-out 0ms;
          }
          .checkbox-btn input:checked + div .slidekey {
            transform: translateX(76px);
          }
          .checkbox-btn .slidekey:before {
            content: "Live";
            position: absolute;
            height: 100%;
            width: 76px;
            text-align: center;
            top: 0;
            left: -76px;
            line-height: 47px;
            background-color: #817eff;
            color: white;
            font-size: 14px;
            font-weight: bold;
          }
          .checkbox-btn .slidekey:after {
            content: "Hidden";
            background-color: #2b2b2b;
            color: white;
            position: absolute;
            height: 100%;
            width: 76px;
            text-align: center;
            top: 0;
            right: -76px;
            line-height: 47px;
            font-size: 14px;
            font-weight: bold;
          }

          /* ============ MEDIA QUERIES FOR TABLETS =========*/
          @media screen and (max-width: 1024px) {
            nav .search-bar {
              display: none;
            }

            .wrap .buffer {
              display: none;
            }
            .wrap .container-fluid {
              display: block;
              margin-left: auto;
              margin-right: auto;
              grid-template-columns: 100%;
              width: 100%;
              padding-left: 0;
              padding-right: 0;
            }

            main section.middle .container-fluid {
              width: 490px;
              margin: 0px;
            }

            .wrap .sub-footer {
              display: block;
              margin-left: auto;
              margin-right: auto;
              grid-template-columns: 100%;
              width: 100%;
              padding-left: 0;
              padding-right: 0;
            }

            .wrap .logo {
              margin-top: 5px;
              margin-btoom: 3px;
            }

            .myaccountbox {
              display: flex;
              flex-direction: column;
              margin-left: 40px;
              width: 400px;
            }
            .gridBox {
              margin-top: 20px;
            }

            main {
              grid-template-columns: 1fr;
            }

            main .moveback {
              transform: translateX(-100%);
              transition: all 300ms ease;
            }
            main .movehere {
              transform: translateX(0%);
              transition: all 300ms ease;
              width: 100%;
            }
            main aside {
              position: fixed;
              top: 0;
              left: -100%;
              z-index: 1000;
              width: 22rem;
              height: 100vh;
              animation: showSidebar 500ms ease-in forwards;
            }

            @keyframes showSidebar {
              to {
                left: 0;
              }
            }

            main aside button#close-btn {
              display: inline-block;
              width: 3rem;
              height: 3rem;
              position: absolute;
              top: 1rem;
              right: 1rem;
              z-index: 4;
              background: transparent;
              color: var(--color-dark);
            }
            button:hover {
              cursor: pointer;
            }

            main aside .sidebar {
              margin-top: 1rem;
            }

            main aside .updates {
              display: none;
            }

            main section.middle .cards {
              grid-template-columns: 1fr 1fr;
            }

            main canvas {
              margin: 3rem 0 1rem;
            }

            main section.right .recent.transactions {
              margin-top: 3rem;
            }
          }

          /*  ====== MEDIA QUERIES FOR MOBILE PHONES */

          @media screen and (max-width: 768px) {
            footer .font-weight-light-mobile {
              display: block;
              color: #212529;
            }
            footer .font-weight-light {
              display: none !important;
            }
            .wrap .buffer {
              display: none;
            }
            .wrap .container-fluid {
              margin-left: auto;
              margin-right: auto;
              width: 100%;
              grid-template-columns: 100%;
              padding-left: 0;
              padding-right: 0;
              display: block;
            }
            main section.middle .container-fluid {
              width: 490px;
              margin: 0px;
            }

            main .moveback {
              transform: translateX(-100%);
              transition: all 300ms ease;
            }
            main .movehere {
              transform: translateX(0%);
              transition: all 300ms ease;
            }

            nav .profile h5,
            nav .profile span {
              display: none;
            }

            main section.middle .cards {
              grid-template-columns: 1fr;
            }

            .ad-banner {
              height: 180px;
              width: 440px;
              position: relative;
              margin-top: 20px;
              background: url("/images/rx-787.png") no-repeat center center;
              background-size: cover;
              background-position: 0px 0px;
              margin-left: 40px;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Dashboard;
