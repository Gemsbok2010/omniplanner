import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ExternalLink } from "react-external-link";
import { useSelector } from "react-redux";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import en from "date-fns/locale/en-GB";

const BriefEdit = () => {
  const user = useSelector((state) => state.userInfo.value);
  const { pathname } = useLocation();
  const ticketId = pathname.split("/")[2];

  const [edm, setEdm] = useState("");
  const [distributionDate, setDistributionDate] = useState("");

  const [identity, setIdentity] = useState("");

  const [, setIsloaded] = useState(false);

  // ============ PROFILE DATA ===========
  useEffect(() => {
    setIsloaded(false);
    const fetchData = async () => {
      axios
        .get(
          process.env.REACT_APP_BACKEND_URL + "api/briefs/profile/" + ticketId
        )
        .then((response) => {
          if (response.status === 200) {
            setIdentity(response.data._id);
            setEdm(response.data.edm);
            setDistributionDate(response.data.distributionDate);
            setIsloaded(true);
          }
        });
    };
    fetchData();
  }, []);

  // ========== ALERT MESSAGE ===============
  const [updateNote, setUpdateNote] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function outPutErrorMessagesInAllusers(errorMessage) {
    setAlert(true);
    window.scrollTo({
      top: 60,
      behavior: "smooth",
    });
    setAlertMsg(errorMessage);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "api/briefs/updateBrief?expiryDate=" +
        expiryDate,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          _id: identity,
          nanoId: user.nanoId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          edm: edm,
          distributionDate: distributionDate,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInAllusers(data.invalid);
        } else {
          setUpdateNote(true);
          setAlert(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setTimeout(function () {
            setUpdateNote(false);
          }, 2000);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // ====== EDM TYPE (Disable and enable submit) ======

  const [seeEdm, setSeeEdm] = useState(false);
  const handleShowEdm = () => {
    setSeeEdm(false);
  };

  const handleSetEdm = (e) => {
    const innerHTML = e.target.innerHTML;
    setEdm(innerHTML);
  };

  // ============= STATE LIST =============
  const [states] = useState([
    { title: "Campaign", id: 1 },
    { title: "Event", id: 2 },
    { title: "RTE", id: 3 },
    { title: "eDM", id: 4 },
  ]);

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
  const [expiryDate, setExpiryDate] = useState("");
  const [showCalendarStart, setShowCalendarStart] = useState(false);

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
    setDistributionDate(
      `${selectedDay.getDate()} ${
        months[selectedDay.getMonth()]
      } ${selectedDay.getFullYear()}`
    );
    setShowCalendarStart(false);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Brief Edit | Sanofi Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Sanofi" />
        </Helmet>

        <LoggedInNavbar />
        <div className="brief_details">
          <Link to="/dashboard">Back to my Dashboard</Link>
          <h2>Brief Type</h2>
        </div>
        <div className="wrap">
          {updateNote && (
            <section className="updateNote container-fluid">
              <div className="container-fluid ">
                <img src="/images/tick.png" width="12px" alt="" />
                <span>Your details have been updated</span>
              </div>
            </section>
          )}
          <div className="divider">
            <div className="personContent">
              <div className="threeItem">
                <div>
                  <Link to="#">Brief Type</Link>
                </div>
                <div>
                  <ExternalLink
                    href={
                      process.env.REACT_APP_BACKEND_URL +
                      `api/briefs/brief/${ticketId}`
                    }
                    target="_self"
                  >
                    Content
                  </ExternalLink>
                </div>
                <div>
                  <ExternalLink
                    href={
                      process.env.REACT_APP_BACKEND_URL +
                      `api/briefs/preview/${ticketId}`
                    }
                    target="_self"
                  >
                    Preview Brief
                  </ExternalLink>
                </div>
              </div>
            </div>
            <div className="allQuestionCards">
              <form id="formOne" onSubmit={onSubmit}>
                <div className="sectionHeadings">
                  <h2>Brief Type</h2>
                </div>
                <div className="regCon">
                  <div className="errorMessageHere">
                    {alert ? (
                      <div className="alert">
                        <img
                          src="/images/cross-black.png"
                          style={{ width: "12px" }}
                          alt=""
                        />
                        <span
                          dangerouslySetInnerHTML={{ __html: alertMsg }}
                        ></span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <section className="middleQuestionCard">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label
                            htmlFor="distribution"
                            className="col-sm-4 col-form-label"
                          >
                            Distribution Date
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control-lg"
                              id="distribution"
                              autoComplete="off"
                              placeholder="Distribution Date"
                              value={distributionDate}
                              onClick={() => {
                                setShowCalendarStart(!showCalendarStart);
                                setStartDate("");
                                setDistributionDate("");
                              }}
                              onChange={() => {
                                setShowCalendarStart(!showCalendarStart);
                                setStartDate("");
                                setDistributionDate("");
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
                            htmlFor="edm"
                            className="col-sm-4 col-form-label"
                          >
                            Brief Type
                          </label>
                          <div className="col-sm-8">
                            <input
                              required
                              autoComplete="nope"
                              type="text"
                              readOnly
                              className="form-control-lg"
                              id="edm"
                              placeholder="Select Type"
                              value={edm ? edm : ""}
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
                                          handleSetEdm(e);
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
                  </section>
                </div>

                <section className="buttonCard">
                  <input type="submit" className="btn-vori" value="Update" />
                </section>
              </form>
            </div>
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
            padding-top: 60px;
            background-color: #3c217b;
          }
          .wrap .divider {
            display: grid;
            grid-template-columns: 30% 70%;
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
          .wrap .alert {
            background-color: #fcebcd;
            margin: 5px auto 12px;
            padding: 7px;
            width: 80%;
          }

          @media screen and (max-width: 768px) {
            .container {
              text-align: center;
            }
            .wrap {
              padding: 10px;
            }
            .wrap .divider {
              display: block;
            }

            .row .col-md-6:first-child {
              margin-bottom: 15px;
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
            color: #817eff;
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

          /* ============= PERSONAL DETAILS ============== */

          .brief_details {
            margin: 15px auto 25px;
            padding: 10px 440px;
          }

          .brief_details h2 {
            color: #323232;
            font-weight: 500;
            font-size: 32px;
          }
          .brief_details a {
            color: #817eff;
            display: block;
            margin-bottom: 10px;
          }

          .brief_details a:hover {
            color: #817eff;
          }

          @media screen and (max-width: 768px) {
            .brief_details {
              margin: 25px auto;
              padding: 10px 100px;
              text-align: center;
            }
          }

          /* =========== LEFT RAIL ========== */
          .wrap .personContent {
            width: 350px;
            margin: 0 20px;
          }
          .wrap .personContent .threeItem:last-child {
            height: 135px;
          }
          .wrap .personContent .threeItem > div {
            padding: 10px 30px;
            width: 100%;
          }
          .wrap .personContent .threeItem > div:last-child {
            padding: 0px 30px;
            margin-top: 20px;
            border: 1px solid #fff;
            height: 38px;
            border-radius: 4px;
            line-height: 38px;
            text-align: center;
          }
          .wrap .personContent .threeItem > div:last-child:hover {
            border: 1px solid #817eff;
          }
          .wrap .personContent .threeItem > div a:hover {
            color: #817eff;
          }
          .wrap .personContent .threeItem > div a {
            color: #fff;
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

          /* ========= RIGHT RAIL ========== */
          .wrap .allQuestionCards {
            width: 950px;
            padding: 0px 20px;
          }
          .wrap .sectionHeadings h2 {
            font-weight: 800;
            font-size: 24px;
            color: #fff;
            margin-top: 35px;
            margin-bottom: 10px;
            margin-left: 30px;
            width: 100%;
          }
          .regCon {
            width: 85% !important;
            padding: 20px 0;
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
            .allQuestionCards {
              position: relative;
              margin: 0;
              width: 100%;
              display: block;
            }
          }

          /* ============== 基本資料 ================ */
          #email:disabled,
          #lastName:disabled,
          #firstName:disabled {
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
            width: 100%;
            display: block;
          }

          .edm ul li:hover {
            background-color: white;
            border-left: 3px solid #817eff;
            padding-left: 17px;
          }

          input[type="text"],
          input[type="email"] {
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
          .wrap .middleQuestionCard {
            position: relative;
            width: 900px;
            min-height: 260px;
            padding: 30px 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 0px;
            background: #fff;
          }
          .wrap .col-form-label {
            font-family: Arial;
            font-size: 14px;
            font-weight: 500;
          }

          .middleQuestionCard .row {
            position: relative;
            top: 8%;
            width: 100%;
            left: 3%;
          }
          @media screen and (max-width: 768px) {
            .wrap .middleQuestionCard {
              width: 450px;
              margin: 0px 30px;
              display: block;
            }
          }

          /* ======= 訂閱與SMS簡訊通知 ========== */
          .wrap .SMSQuestionCard {
            min-height: 125px;
            position: relative;
            width: 900px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 0px;
            background: #fff;
          }
          input[type="checkbox"] {
            display: none;
          }
          input[type="checkbox"] label {
            color: red;
          }
          input[type="checkbox"] + label {
            position: relative;
            cursor: pointer;
            font-size: 16px;
            font-family: sans-serif;
            font-weight: 800;
            margin: 2px 0px 8px 35px;
            width: 100%;
            display: block;
            color: #2b2b2b;
          }
          input[type="checkbox"] + label::before {
            content: " ";
            position: relative;
            left: -33px;
            top: 21px;
            width: 24px;
            height: 24px;
            display: block;
            background: white;
            border-radius: 0px;
            border: 2px solid rgb(218, 218, 218);
          }
          input[type="checkbox"] + label::after {
            content: " ";
            position: absolute;
            left: -31px;
            top: 24px;
            width: 19px;
            height: 19px;
            display: block;
            z-index: 1;
            background: url("./../../images/tick.png");
            background-repeat: no-repeat;
            background-size: 15px;
            background-position: center;
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
            outline: 3px solid #817eff;
            border: none;
          }
          input[type="checkbox"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
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

          @media screen and (max-width: 768px) {
            .wrap .SMSQuestionCard {
              width: 450px;
              margin: 0px 30px;
              display: block;
            }
          }

          /* ========== SUBMIT BUTTON ========= */
          .btn-vori {
            position: relative;
            background-color: #817eff;
            color: white;
            cursor: pointer;
            font-weight: 800;
            width: 200px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            margin: 20px 0px 20px 0px;
            border: none;
          }

          @media screen and (max-width: 768px) {
            .wrap .buttonCard {
              width: 450px;
              margin: 25px 30px;
            }
            input[type="submit"] {
              width: 100%;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default BriefEdit;
