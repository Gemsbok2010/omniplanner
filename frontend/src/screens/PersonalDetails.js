import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ThreeDots } from "react-loader-spinner";
import { login } from "../redux/userInfo";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.value);

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");

  const [userInfo, setUserInfo] = useState({});
  const [isloading, setIsloading] = useState(false);

  // ========= GOOGLE & FACEBOOK SIGN UP DATA ===========
  useEffect(() => {
    if (id) {
      localStorage.setItem("userId", id);
    }
    // ============ PROFILE DATA ===========
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "api/users/allusers/" +
          localStorage.getItem("userId")
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("userId", response.data._id);
          setUserInfo(response.data);
          dispatch(
            login({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
              isLoggedIn: true,
              isActive: response.data.isActive,
              isAdmin: response.data.isAdmin,
            })
          );
          window.history.pushState({}, document.title, "/personal-details");
        }
      });
  }, [id]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // ========== ALERT MESSAGE ===============
  const [updateNote, setUpdateNote] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertTop, setAlertTop] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function outPutErrorMessages(errorMessage) {
    setAlert(true);
    setAlertTop(false);
    setUpdateNote(false);
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
    setAlertMsg(errorMessage);
  }

  // ======= PUT REQUEST TO UPDATE TO AUTHUSERS.JS ======
  const onSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    fetch(process.env.REACT_APP_BACKEND_URL + "api/users/allusers", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessages(data.invalid);
          setIsloading(false);
        } else {
          setUpdateNote(true);
          setIsloading(false);
          setAlert(false);
          setAlertTop(false);
          window.scrollTo({
            top: 200,
            behavior: "smooth",
          });
          setUserInfo(data);
          dispatch(
            login({
              firstName: data.firstName,
              isLoggedIn: true,
              lastName: data.lastName,
              email: data.email,
              isActive: data.isActive,
              isAdmin: data.isAdmin,
            })
          );
          setTimeout(function () {
            setUpdateNote(false);
          }, 3000);
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
          <title>Personal Details | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air Personal Details" />
        </Helmet>
        <LoggedInNavbar />

        <div className="personal_details">
          <Link to="/dashboard">Back to my Dashboard</Link>
          <h2>Personal information</h2>
        </div>

        <div className="wrap">
          <div className="personContent"></div>

          <form id="formOne" onSubmit={onSubmit}>
            <div className="personContent">
              <section className="middleQuestionCard container-fluid">
                <h2>My Details</h2>
                <div className="container-fluid regCon">
                  <div className="errorMessageHere">
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
                          style={{ width: "12px", cursor: "pointer" }}
                          alt=""
                          onClick={() => {
                            setAlert(false);
                          }}
                        />{" "}
                        <span
                          dangerouslySetInnerHTML={{ __html: alertMsg }}
                        ></span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="firstName"
                          className="col-sm-3 col-form-label"
                        >
                          First Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="firstName"
                            name="firstName"
                            autoComplete="none"
                            value={userInfo.firstName ? userInfo.firstName : ""}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="lastName"
                          className="col-sm-3 col-form-label"
                        >
                          Last Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="lastName"
                            name="lastName"
                            autoComplete="none"
                            value={userInfo.lastName ? userInfo.lastName : ""}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="email"
                          className="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            className="form-control-lg"
                            id="email"
                            disabled
                            defaultValue={userInfo.email}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="personContent">
              <section className="buttonCard container-fluid">
                {userInfo.lastName && userInfo.firstName ? (
                  !isloading ? (
                    <input type="submit" className="btn-vori" value="Update" />
                  ) : (
                    <button className="btn-vori">
                      <ThreeDots
                        type="ThreeDots"
                        height={40}
                        width={80}
                        color={"white"}
                      />
                    </button>
                  )
                ) : (
                  <button disabled>Update</button>
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
            background-color: #f4f5f6;
          }

          .btn-vori {
            position: relative;
            background-color: #817eff;
            color: #fff;
            border: 1px solid #817eff;
            font-weight: 800;
            width: 150px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            width: 100%;
            cursor: pointer;
            text-align: center;
            align-items: center;
          }

          .buttonCard button {
            position: relative;
            background-color: #ddd;
            color: #888;
            border: 1px solid #ddd;
            font-weight: 800;
            width: 150px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .regCon {
            width: 85% !important;
            padding: 20px 0;
          }
          .regCon h2 {
            margin-bottom: 20px;
          }
          .regCon .form-group {
            margin-bottom: 25px;
          }

          @media only screen and (min-width: 768px) {
            .buttonCard .btn-vori {
              width: 200px;
              text-align: center;
              background-color: #817eff;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .buttonCard button {
              width: 200px;
            }
          }

          /* ======== POST-SAVE MESSAGE ========== */
          .wrap .personContent {
            width: 90%;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            position: relative;
          }
          .wrap .updateNote {
            width: 100%;
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
            .row .col-md-6:first-child {
              margin-bottom: 15px;
            }
          }

          /* ============= PERSONAL DETAILS ============== */

          .personal_details {
            margin: 15px auto 25px;
            padding: 10px 210px;
          }

          .personal_details a {
            color: #817eff;
            display: block;
            margin-bottom: 10px;
          }

          .personal_details a:hover {
            color: #3c217b;
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

          /* ============= QUESTION CARD ============== */

          .wrap .middleQuestionCard {
            width: 80%;
            min-height: 325px;
            padding: 30px 20px;
            margin-top: 90px;
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

          .wrap .middleQuestionCard h2 {
            position: absolute;
            font-size: 24px;
            font-weight: 500;
            transform: translate(0%, -260%);
            color: #323232;
          }
          .wrap .middleQuestionCard {
            min-height: 240px;
          }

          .middleQuestionCard .row {
            position: relative;
            top: 5%;
            width: 100%;
            left: 3%;
          }

          #email:disabled {
            background-color: #ebebeb;
          }

          input[type="text"]:invalid,
          input[type="date"]:invalid {
            border: 3px solid #817eff;
          }

          input[type="text"],
          input[type="tel"],
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
            border-radius: 6px;
            font-family: "Noto Sans TC", sans-serif;
          }

          .wrap .buttonCard {
            width: 80%;
            margin: 30px auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 0px;
            background: #fff;
            background-color: #f4f5f6;
          }

          .regCon .location > p {
            color: #777;
            font-size: 22px;
          }
          .regCon .location .bottomTips span {
            color: #2b2b2b;
            font-size: 14px;
            font-weight: 500;
          }
          .regCon .location .bottomTips p {
            color: #2b2b2b;
            margin: 10px auto;
            font-size: 16px;
            font-weight: 800;
          }

          @media screen and (max-width: 768px) {
            .wrap .middleQuestionCard {
              margin: 90px 0px 0px;
              width: 100%;
            }
            .wrap .personContent {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
            }
            .wrap .buttonCard {
              width: 410px;
              margin: 25px auto;
            }

            .container {
              text-align: center;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};
export default PersonalDetails;
