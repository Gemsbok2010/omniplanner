import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import en from "date-fns/locale/en-GB";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Step1 = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.value);
  ReactSession.setStoreType("sessionStorage");
  const [type, setType] = useState("");
  const [campaignName, setCampaignName] = useState("");

  // ====== EDM TYPE (Disable and enable submit) ======

  const [seeEdm, setSeeEdm] = useState(false);
  const handleShowEdm = () => {
    setSeeEdm(false);
  };

  const handleSetType = (e) => {
    const innerHTML = e.target.innerHTML;
    setType(innerHTML);
  };

  // ============= STATE LIST =============
  const [states] = useState([
    { title: "Acquisition Member", id: 1 },
    { title: "Acquisition Mobile Download", id: 2 },
    { title: "Acquisition Subscriber", id: 3 },
    { title: "Co-branded", id: 4 },
    { title: "Destination Launch", id: 5 },
    { title: "New Market Launch", id: 6 },
    { title: "Partnership Launch", id: 7 },
    { title: "Product Launch", id: 8 },
    { title: "Sales", id: 9 },
  ]);

  // ============= POPULATE SESSION DATA =================
  useEffect(() => {
    if (!ReactSession.get("campaignName")) {
      setCampaignName("");
    } else {
      setCampaignName(ReactSession.get("campaignName"));
    }
    if (!ReactSession.get("type")) {
      setType("");
    } else {
      setType(ReactSession.get("type"));
    }
    if (!ReactSession.get("startDate")) {
      setStartDate("");
    } else {
      setStartDate(ReactSession.get("startDate"));
    }
    if (!ReactSession.get("endDate")) {
      setEndDate("");
    } else {
      setEndDate(ReactSession.get("endDate"));
    }

    if (!ReactSession.get("expiryDate")) {
      setExpiryDate("");
    } else {
      setExpiryDate(ReactSession.get("expiryDate"));
    }
    if (!ReactSession.get("noDays")) {
      setNoDays("");
    } else {
      setNoDays(ReactSession.get("noDays"));
    }
  }, []);

  // ======= ONSUBMIT TO NEXT STEP 2 =======
  const onSubmit = (e) => {
    e.preventDefault();
    ReactSession.set("firstName", user.firstName);
    ReactSession.set("lastName", user.lastName);
    ReactSession.set("email", user.email);
    ReactSession.set("type", type);
    ReactSession.set("campaignName", campaignName);
    ReactSession.set("startDate", `${startDate}`);
    ReactSession.set("endDate", `${endDate}`);
    ReactSession.set("noDays", `${noDays}`);
    ReactSession.set("expiryDate", `${expiryDate}`);
    navigate("/step2");
  };
  // ========= MONTHS ===========
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // ============ CALENDAR ================

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [showCalendarStart, setShowCalendarStart] = useState(false);
  const [showCalendarEnd, setShowCalendarEnd] = useState(false);

  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);

  const selectionner = (selectedDay) => {
    setSelectedDay(selectedDay);
    setStartDate(selectedDay);
    setExpiryDate(
      new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        selectedDay.getDate()
      )
    );
    setStartDate(
      `${selectedDay.getDate()} ${
        months[selectedDay.getMonth()]
      } ${selectedDay.getFullYear()}`
    );
    setEndDate("");
    setNoDays("Perpetual");
    setShowCalendarStart(false);
  };

  const selectionnerEnd = (selectedDay) => {
    setSelectedDay(selectedDay);
    setEndDate(selectedDay);
    setExpiryDate(
      new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        selectedDay.getDate()
      )
    );
    setEndDate(
      `${selectedDay.getDate()} ${
        months[selectedDay.getMonth()]
      } ${selectedDay.getFullYear()}`
    );
    setShowCalendarEnd(false);
    calcDays(selectedDay);
  };

  const [noDays, setNoDays] = useState("Perpetual");

  const calcDays = (endDate) => {
    const startingDay = new Date(startDate);
    const endingDay = new Date(endDate);
    const dayDifference = endingDay - startingDay;
    const seconds = Math.floor(dayDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const noDays = Math.floor(hours / 24) + 1;
    setNoDays(noDays);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Step 1 | RX Omniplanner</title>
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
                <li className="active">
                  <Link style={{ fontWeight: "bold" }} to="#">
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
                    Description{" "}
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

          <form id="formOne" onSubmit={onSubmit}>
            <div className="personContent">
              <section className="middlequestionCard">
                <h2>Campaign Info</h2>
                <div className="container-fluid regCon">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_name"
                          className="label col-form-label"
                        >
                          Campaign Name
                        </label>
                        <div className="field">
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

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Campaign Type
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select Type"
                            value={type ? type : ""}
                            onFocus={() => {
                              setSeeEdm(!seeEdm);
                            }}
                            onChange={() => {
                              setSeeEdm(!seeEdm);
                            }}
                          />
                          {seeEdm ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetType(e);
                                        handleShowEdm();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="start_date"
                          className="label col-form-label"
                        >
                          Start Date
                        </label>
                        <div className="field">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="start_date"
                            autoComplete="off"
                            placeholder="Start Date"
                            value={startDate}
                            onClick={() => {
                              setShowCalendarStart(!showCalendarStart);
                              setShowCalendarEnd(false);
                              setStartDate("");
                            }}
                            onChange={() => {
                              setShowCalendarStart(!showCalendarStart);
                              setShowCalendarEnd(false);
                              setStartDate("");
                            }}
                          />
                          {showCalendarStart ? (
                            <DayPicker
                              defaultMonth={
                                startDate
                                  ? new Date(
                                      startDate.getFullYear(),
                                      startDate.getMonth()
                                    )
                                  : new Date()
                              }
                              fromDate={today}
                              toDate={
                                new Date(
                                  today.getFullYear(),
                                  today.getMonth() + 12,
                                  today.getDate()
                                )
                              }
                              onSelect={selectionner}
                              selected={startDate}
                              showOutsideDays
                              fixedWeeks
                              numberOfMonths={1}
                              locale={en}
                              mode="single"
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="end_date"
                          className="label col-form-label"
                        >
                          End Date
                        </label>
                        <div className="field">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="end_date"
                            autoComplete="off"
                            placeholder="End Date"
                            value={endDate}
                            onClick={() => {
                              setShowCalendarEnd(!showCalendarEnd);
                              setShowCalendarStart(false);
                              setEndDate("");
                              setNoDays("Perpetual");
                            }}
                            onChange={() => {
                              setShowCalendarEnd(!showCalendarEnd);
                              setShowCalendarStart(false);
                              setEndDate("");
                              setNoDays("Perpetual");
                            }}
                          />
                          {showCalendarEnd ? (
                            <DayPicker
                              defaultMonth={
                                endDate
                                  ? new Date(
                                      endDate.getFullYear(),
                                      endDate.getMonth()
                                    )
                                  : new Date()
                              }
                              fromDate={selectedDay}
                              toDate={
                                new Date(
                                  today.getFullYear(),
                                  today.getMonth() + 12,
                                  today.getDate()
                                )
                              }
                              onSelect={selectionnerEnd}
                              selected={endDate}
                              showOutsideDays
                              fixedWeeks
                              numberOfMonths={1}
                              locale={en}
                              mode="single"
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="total_days"
                          className="label col-form-label"
                        >
                          Total Days
                        </label>
                        <div className="field">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="total_days"
                            autoComplete="off"
                            readOnly
                            value={
                              noDays === 1 ? `${noDays} day` : `${noDays} days`
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="personContent">
              <section className="buttonCard">
                {type && campaignName && startDate ? (
                  <input type="submit" className="btn-vori" value="Next" />
                ) : (
                  <input
                    type="button"
                    disabled
                    className="btn-vori"
                    value="Next"
                  />
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

          /* ============= EDM ============== */

          .label {
            width: 130px;
            margin-right: 15px;
          }

          .field {
            width: 290px;
          }

          input[type="text"],
          input[type="email"] {
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
          #email:disabled,
          #firstName:disabled,
          #lastName:disabled {
            background-color: #ebebeb;
          }

          .edm {
            position: absolute;
            z-index: 2000;
            width: 96%;
            display: block;
            height: 250px;
            overflow: scroll;
            z-index: 5000;
          }
          .edm ul {
            position: relative;
            margin: 0px;
            padding: 0;
            width: 98%;
          }

          .edm ul li {
            background-color: #f4f5f6;
            text-decoration: none;
            cursor: pointer;
            list-style-type: none;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #dadada;
            border-left: 2px solid #dadada;
            border-right: 2px solid #dadada;
            padding-left: 18px;
            position: relative;
            width: 290px;
            display: block;
          }

          .edm ul li:hover {
            background-color: white;
            border-left: 3px solid #817eff;
            padding-left: 17px;
          }

          .wrap .personContent {
            width: 90%;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            position: relative;
          }

          hr {
            display: block;
            margin-top: 0em;
            margin-bottom: 2em;
            margin-left: auto;
            margin-right: auto;
            border-width: 1px;
          }

          .wrap .middlequestionCard {
            width: 80%;
            min-height: 325px;
            padding: 30px 10px;
            margin: 30px auto 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 10px;
            background: #fff;
          }

          .wrap .middlequestionCard h2 {
            position: absolute;
            font-size: 24px;
            font-weight: 800;
            transform: translate(10%, -260%);
            color: white;
          }

          .wrap .buttonCard {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background-color: #3c217b;
            width: 80%;
            margin: 30px auto 30px;
            text-align: center;
          }

          .wrap .middlequestionCard {
            min-height: 260px;
          }

          .middlequestionCard .row {
            position: relative;
            top: 8%;
            width: 100%;
            left: 1%;
          }

          .btn-vori {
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
          }

          .btn-vori:disabled {
            background-color: #ddd;
            color: #888;
            cursor: default;
            border: #ddd;
          }

          .container-fluid.regCon {
            margin: 0;
          }

          section .regCon {
            width: 100% !important;
            padding: 0;
          }
          .regCon .form-group {
            margin-bottom: 25px;
          }

          .regCon .col-form-label {
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

          @media screen and (max-width: 768px) {
            .wrap .middlequestionCard {
              margin: 90px 0px 0px;
              width: 100%;
            }
            .wrap .personContent {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
              position: relative;
            }

            .wrap .buttonCard {
              width: 410px;
              margin: 25px auto;
            }
            input[type="submit"] {
              width: 100%;
            }

            .row .col-md-6:first-child {
              margin-bottom: 15px;
            }

            .middlequestionCard .row {
              width: 95%;
            }
            .field {
              position: relative;
              width: 100%;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Step1;
