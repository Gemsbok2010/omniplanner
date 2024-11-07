import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import { ExternalLink } from "react-external-link";
import { useSelector } from "react-redux";

const Briefs = () => {
  ReactSession.setStoreType("sessionStorage");
  const user = useSelector((state) => state.userInfo.value);
  const { search } = useLocation();
  const [noOfCases, setNoOfCases] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState([]);
  const email = user.email;

  // =============== PAGE BUTTONS ================

  const pagePrevious = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/briefs/database?page=${page <= 0 ? 0 : page - 1}` +
        "sortBy=" +
        sort +
        "&status=" +
        status +
        "&email=" +
        email
    );

    const data = await res.json();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNoOfCases(data.num);
    setBriefs(data.briefs);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
  };

  const pageNext = async () => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/briefs/database?page=${
          page < maxPage ? 1 + parseInt(page) : page
        }` +
        "sortBy=" +
        sort +
        "&status=" +
        status +
        "&email=" +
        email
    );
    const data = await res.json();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNoOfCases(data.num);
    setBriefs(data.briefs);
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
        `api/briefs/database?page=${id + 1}` +
        "&sortBy=" +
        sort +
        "&status=" +
        status +
        "&email=" +
        email
    );
    const data = await res.json();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNoOfCases(data.num);
    setBriefs(data.briefs);
    setPage(data.page);
    setMaxPage(data.maxPage);
    setSort(data.sort);
  };

  // =============== SORT ================
  const [ascDesc, setAscDesc] = useState(false);
  const [sort, setSort] = useState(-1);
  const [, setReload] = useState(false);

  const sorting = async (ascDesc) => {
    setReload(false);
    if (ascDesc === false) {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/briefs/database?sortBy=asc" +
          "&page=" +
          page +
          "&status=" +
          status +
          "&email=" +
          email
      );
      const data = await res.json();
      setReload(true);
      setNoOfCases(data.num);
      setBriefs(data.briefs);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setSort(data.sort);
    }

    if (ascDesc === true) {
      setReload(false);
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/briefs/database?sortBy=desc" +
          "&page=" +
          page +
          "&status=" +
          status +
          "&email=" +
          email +
          "&slug=" +
          ReactSession.get("slug")
      );
      const data = await res.json();

      setReload(true);
      setNoOfCases(data.num);
      setBriefs(data.briefs);
      setPage(data.page);
      setMaxPage(data.maxPage);
      setSort(data.sort);
    }
  };

  //=========== FILTER CARD APPEARS ===========
  const [filterCard, setFilterCard] = useState(false);

  const appearFunction = () => {
    setFilterCard(true);
    setBackdrop(true);
  };

  // ============== SELECT STATUSES ===============
  const [status, setStatus] = useState([]);
  const [checkedCreated, setCheckedCreated] = useState(false);
  const [checkedProgress, setCheckedProgress] = useState(false);
  const [checkedCompleted, setCheckedCompleted] = useState(false);

  // ========== REMOVE STATUS ===========
  const onRemoveState = async (event) => {
    const { value } = event.target;

    const index = status.indexOf(value);
    if (index !== -1) {
      status.splice(index, 1);
    }

    setStatus([...status]);
  };

  // ========= ADD STATUS ===========
  const onStatusChange = async (event) => {
    const { value } = event.target;
    setStatus([...status, value]);
  };

  // ========= CLEAR ALL IN FILTERCARD ===========
  const clearAll = async () => {
    setCheckedCreated(false);
    setCheckedProgress(false);
    setCheckedCompleted(false);
    setStatus([]);
  };

  // ============== BACKDROP ============== //
  const [, setBackdrop] = useState(false);

  const clickOnBackdrop = () => {
    setBackdrop(false);
    setFilterCard(false);
  };

  // ============= GET BRIEF LIST================
  const [briefs, setBriefs] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    if (search === "") {
      sessionStorage.clear();
    }

    // declare the data fetching function
    const fetchData = async () => {
      setReload(false);
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/briefs/database?" +
          "&status=" +
          status +
          "&sortBy=" +
          sort +
          "&page=" +
          page +
          "&email=" +
          email
      );
      const data = await res.json();

      if (isCancelled === false) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        
        setReload(true);
        setNoOfCases(data.num);
        setBriefs(data.briefs);
        setPage(data.page);
        setMaxPage(data.maxPage);
        setSort(data.sort);
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
  }, [status, search, email, sort, page]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Briefs | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
            crossorigin="anonymous"
          />
          <meta name="description" content="Riyadh Air" />
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
                    id="arrow-up"
                    onClick={() => {
                      setAscDesc(!ascDesc);
                      sorting(ascDesc);
                    }}
                  >
                    <Link to={`?sortBy=desc`} target="_self">
                      Sort
                    </Link>
                  </button>
                ) : (
                  <button
                    id="arrow-down"
                    onClick={() => {
                      setAscDesc(!ascDesc);
                      sorting(ascDesc);
                    }}
                  >
                    <Link to={`?sortBy=asc`} target="_self">
                      Sort
                    </Link>
                  </button>
                )}
              </form>

              {noOfCases.length === 0 ? (
                <div className="results">Found 0 briefs</div>
              ) : noOfCases > 1 ? (
                <div className="results">Found {noOfCases} briefs</div>
              ) : (
                <div className="results">Found {noOfCases} brief</div>
              )}
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
                <div className="modal-box-status">
                  <h2 style={{ margin: "0" }}>Status</h2>
                  <div className="row">
                    <div className="states_flex">
                      <input
                        id="a"
                        type="checkbox"
                        checked={checkedCreated ? true : false}
                        name="status"
                        onChange={(event) => {
                          !checkedCreated
                            ? onStatusChange(event)
                            : onRemoveState(event);
                        }}
                        onClick={() => {
                          setCheckedCreated(!checkedCreated);
                        }}
                        value="Created"
                      />
                      <label htmlFor="a">Created</label>
                      <input
                        name="status"
                        id="b"
                        checked={checkedProgress ? true : false}
                        type="checkbox"
                        onChange={(event) => {
                          !checkedProgress
                            ? onStatusChange(event)
                            : onRemoveState(event);
                        }}
                        onClick={() => {
                          setCheckedProgress(!checkedProgress);
                        }}
                        value="In Progress"
                      />
                      <label htmlFor="b">In Progress</label>
                      <input
                        id="c"
                        type="checkbox"
                        checked={checkedCompleted ? true : false}
                        name="status"
                        onChange={(event) => {
                          !checkedCompleted
                            ? onStatusChange(event)
                            : onRemoveState(event);
                        }}
                        onClick={() => {
                          setCheckedCompleted(!checkedCompleted);
                        }}
                        value="Completed"
                      />
                      <label htmlFor="c">Completed</label>
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
                {briefs.map((brief) => {
                  return (
                    <div className="tiles" key={brief._id}>
                      <ExternalLink
                        target="_blank"
                        href={
                          process.env.REACT_APP_BACKEND_URL +
                          `api/briefs/edit/${brief.ticketId}`
                        }
                      >
                        <div className="topBox" style={{ overflow: "hidden" }}>
                          <div>
                            <h3>Ticket ID: {brief.ticketId}</h3>
                            <h4>
                              Filed by: {brief.firstName} {brief.lastName}
                            </h4>
                            <br />
                            <h4>Campaign Start Date: {brief.startDate}</h4>
                            <h4>Created Date: {brief.created_date}</h4>
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
                              {brief.status === "Completed" ? (
                                <span className={"green"}>{brief.status}</span>
                              ) : (
                                ""
                              )}
                              {brief.status === "In Progress" ? (
                                <span className={"yellow"}>{brief.status}</span>
                              ) : (
                                ""
                              )}
                              {brief.status === "Created" ? (
                                <span className={"red"}>{brief.status}</span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateRows: "50% 50%",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "no-wrap",
                                overflow: "hidden",
                                width: "180px",
                              }}
                            >
                              <span
                                className={brief.mainheading ? "purpleSm" : ""}
                              >
                                {brief.mainheading && brief.mainheading}
                              </span>
                            </div>
                          </div>
                        </div>
                      </ExternalLink>
                    </div>
                  );
                })}
                {briefs.length === 0 && (
                  <div className="no-listings">
                    <h2>No briefs at the moment.</h2>
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
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          /*================== BRIEF CARDS ================= */
          main {
            display: grid;
            grid-template-columns: 16rem auto 30rem;
            gap: 2rem;
            width: 96%;
            margin: 1rem auto 4rem;
          }
          main .tilesGrid {
            background-color: transparent;
            width: 1500px;
            display: grid;
            margin-top: 0px;
            grid-template-columns: 30% 30% 30%;
            grid-row-gap: 12px;
            grid-column-gap: 12px;
          }

          main .tiles {
            width: 430px;
            height: 171px;
            border-radius: 5px;
            cursor: pointer;
            border-top: 5px solid #817eff;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.28);
          }

          main .red {
            color: #e40000;
            font-size: 14px;
            height: 26px;
            line-height: 24px;
            padding-left: 3px;
            padding-right: 3px;
            border: 1px solid #e40000;
            background-color: #ffcbd1;
            margin-right: 8px;
            margin-bottom: 3px;
            border-radius: 6px;
          }
          main .yellow {
            color: #cd7f32;
            font-size: 14px;
            height: 26px;
            line-height: 24px;
            padding-left: 3px;
            padding-right: 3px;
            border: 1px solid #cd7f32;
            background-color: #ffd580;
            margin-right: 8px;
            margin-bottom: 3px;
            border-radius: 6px;
          }
          main .green {
            color: green;
            font-size: 14px;
            height: 26px;
            line-height: 24px;
            padding-left: 3px;
            padding-right: 3px;
            border: 1px solid green;
            margin-right: 8px;
            margin-bottom: 3px;
            border-radius: 6px;
            background-color: #d1ffbd;
          }

          main .purpleSm {
            color: #817eff;
            font-size: 14px;
            height: 20px;
            line-height: 18px;
            padding-left: 3px;
            padding-right: 3px;
            margin-right: 8px;
            margin-bottom: 3px;
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
            font-size: 28px;
            font-weight: 600;
            color: #2f383c;
          }

          main .topBox a {
            color: white;
            height: 100%;
            width: 100%;
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

          .wrap .modal-box-status {
            display: block;
            background: white;
            width: 100%;
            padding-bottom: 20px;
            margin: 30px auto;
            position: relative;
            font-size: 13px;
            border-bottom: 1px solid rgb(210, 213, 218);
          }

          .wrap .modal-box-status h2 {
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
            background-color: #817eff;
            text-align: center;
            border-color: #817eff;
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
          .modal-box-status input[type="checkbox"] {
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
          #arrow-down:hover {
            background-color: #f7f8f9;
            border-color: #353f47;
          }

          #arrow-up {
            background-image: url("./../../images/arrow-up.png");
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
            background-color: #817eff;
            border: 1px solid #817eff;
          }

          #arrow-down {
            background-image: url("./../../images/arrow-down.png");
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
            background-image: url("./../../images/filters-small.png");
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
            background-color: #817eff;
            cursor: pointer;
            color: white;
            border: 1px solid #817eff;
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
            background-color: #817eff;
            color: #fff;
          }

          .paginate .next {
            background-image: url("./../../images/arrow-down.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 15px;
            background-color: #fff;
            transform: rotate(-90deg);
          }
          .paginate .previous {
            background-image: url("./../../images/left.png");
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
            main .tilesGrid {
              display: grid;
              grid-column-gap: 0.1em;
              background-size: cover;
              grid-template-columns: 50% 50%;
              position: relative;
              padding: 0px 0px 0px 15px;
              overflow: hidden;
              position: relative;
              width: 1000px;
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
            main .tilesGrid {
              display: grid;
              grid-column-gap: 0.1em;
              background-size: cover;
              grid-template-columns: 100%;
              position: relative;
              padding: 0px 0px 0px 15px;
              overflow: hidden;
              position: relative;
              width: 485px;
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

export default Briefs;
