import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ExternalLink } from "react-external-link";
import { login } from "../redux/userInfo";

// Three dots
import { ThreeDots } from "react-loader-spinner";

const Footer = ({ asx }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.value);
  const [email, setEmail] = useState("");
  const [thisyear, setThisyear] = useState(null);

  const googleUrlAddress =
    process.env.REACT_APP_BACKEND_URL + `auth/google?dd=${location.pathname}`;

  // ============ GET CURRENT YEAR ===============
  useEffect(() => {
    const dt = new Date();
    const year = dt.getFullYear();
    setThisyear(year);
  }, []);

  // ======= TAKE OUT DUPLICATE PROFESSIONS ======
  const [listOfProfessions, setListOfProfessions] = useState([]);

  // ============= GET APPLICATIONSMANAGER ===============
  // ============= GET SEARCH FILTER ================

  useEffect(() => {
    let isCancelled = false;

    // declare the data fetching function
    const fetchData = async () => {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "api/admin/footer"
      );
      const data = await res.json();

      if (isCancelled === false) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        console.log(data);
        setListOfProfessions(data.professions);
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
  }, []);

  const noDuplicates = [
    ...new Map(
      listOfProfessions.map((list) => [list.professionName, list])
    ).values(),
  ];

  // ========== ERROR MESSAGE ===============
  const [updateNote, setUpdateNote] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function outPutErrorMessagesInQuestionCard(errorMessage) {
    setUpdateNote(true);
    setErrorMsg(errorMessage);
  }

  // ============= LOGIN QUESTION CARD =================
  const [questionCard, setQuestionCard] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [password, setPassword] = useState("");
  const [isloaded, setIsloaded] = useState(false);
  const [vanishemail, setVanishemail] = useState(true);
  const [vanishpwd, setVanishpwd] = useState(true);

  const onLoginForm = async (e) => {
    e.preventDefault();
    setIsloaded(true);
    fetch(process.env.REACT_APP_BACKEND_URL + "api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInQuestionCard(data.invalid);
          setIsloaded(false);
        }
        if (
          data.user.survey === "" ||
          data.user.phone === "" ||
          data.user.profession === "" ||
          data.user.street === ""
        ) {
          setIsloaded(false);
          dispatch(
            login({
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              email: data.user.email,
              filename: data.user.filename,
              isLoggedIn: true,
              isLocum: data.user.isLocum,
              isActive: data.user.isActive,
              nanoId: data.user.nanoId,
              isAdmin: data.user.isAdmin,
              completeAccess: false,
            })
          );

          navigate("/personal-details");
        } else {
          setIsloaded(false);
          dispatch(
            login({
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              email: data.user.email,
              filename: data.user.filename,
              isLoggedIn: true,
              isLocum: data.user.isLocum,
              isActive: data.user.isActive,
              nanoId: data.user.nanoId,
              isAdmin: data.user.isAdmin,
              completeAccess: true,
            })
          );
          navigate("/");
          setBackdrop(false);
          setQuestionCard(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {/* BACKDROP */}
      {backdrop ? (
        <div
          className="backdrop"
          onClick={() => {
            setBackdrop(false);
            setQuestionCard(false);
          }}
        ></div>
      ) : (
        ""
      )}
      {/* QUESTION CARD */}
      <div className="wrap">
        <div className="pageBottom container-fluid">
          <div className="buffer"></div>
          <div className="container">
            <div className="container pb-4">
              <div className="row">
                <div className="col-md-3">
                  <div className="bigClass">
                    {noDuplicates.slice(0, 6).map((profession) => {
                      return user.isLoggedIn ? (
                        <Link
                          to={`/searchlist?professions=${profession.professionName}&index=${profession._id}`}
                          key={profession._id}
                          onClick={(e) => {
                            asx(e, profession._id);
                          }}
                        >
                          {profession.professionName}
                        </Link>
                      ) : (
                        <Link
                          to="#"
                          key={profession._id}
                          onClick={() => {
                            setQuestionCard(true);
                            setBackdrop(true);
                          }}
                        >
                          {" "}
                          {profession.professionName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass">
                    {noDuplicates.slice(5, 11).map((profession) => {
                      return user.isLoggedIn ? (
                        <Link
                          to={`/searchlist?professions=${profession.professionName}&index=${profession._id}`}
                          key={profession._id}
                          onClick={(e) => {
                            asx(e, profession._id);
                          }}
                        >
                          {profession.professionName}
                        </Link>
                      ) : (
                        <Link
                          to="#"
                          onClick={() => {
                            setQuestionCard(true);
                            setBackdrop(true);
                          }}
                        >
                          {" "}
                          {profession.professionName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass">
                    {noDuplicates.slice(10, 16).map((profession) => {
                      return user.isLoggedIn ? (
                        <Link
                          to={`/searchlist?professions=${profession.professionName}&index=${profession._id}`}
                          key={profession._id}
                          onClick={(e) => {
                            asx(e, profession._id);
                          }}
                        >
                          {profession.professionName}
                        </Link>
                      ) : (
                        <Link
                          to="#"
                          onClick={() => {
                            setQuestionCard(true);
                            setBackdrop(true);
                          }}
                        >
                          {" "}
                          {profession.professionName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass last">
                    {noDuplicates.slice(15, 21).map((profession) => {
                      return (
                        <Link
                          to={`/searchlist?professions=${profession.professionName}`}
                          key={profession._id}
                          onClick={(e) => {
                            asx(e, profession._id);
                          }}
                        >
                          {profession.professionName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <p className="title my-4">Destinations</p>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="bigClass">
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Riyadh
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Jeddah
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Dammam
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Dubai
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Amman
                    </Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass">
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Istanbul
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Cairo
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      New Delhi
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Mumbai
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Hyderabad
                    </Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass">
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Karachi
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Islamabad
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Dhaka
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Bangkok
                    </Link>
                    <Link
                      to={"#"}
                      onClick={(e) => {
                        user.isLoggedIn ? asx(e) : setQuestionCard(true);
                        setBackdrop(true);
                      }}
                    >
                      Shanghai
                    </Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass last">
                    <Link to="searchlist?location=New Zealand">London</Link>
                    <Link to="searchlist?location=New Zealand">Paris</Link>
                    <Link to="searchlist?location=New Zealand">Munich</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container pb-4"></div>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="title my-2" style={{ width: "300px" }}>
                <p
                  style={{
                    marginBottom: "0",
                    fontSize: "12px",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  {thisyear} © Riyadh Air. All right reserved.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  outline: "none",
                  width: "330px",
                }}
              >
                <div className="footerCopyright">
                  <ExternalLink
                    target="_blank"
                    href="https://www.facebook.com/RiyadhAir"
                  >
                    <img
                      src="/images/facebook.png"
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </ExternalLink>
                </div>
                <div className="footerCopyright">
                  <ExternalLink target="_blank" href="https://x.com/RiyadhAir">
                    <img src="/images/x.png" alt="" style={{ width: "20px" }} />
                  </ExternalLink>
                </div>

                <div className="footerCopyright">
                  <ExternalLink
                    target="_blank"
                    href="https://www.instagram.com/riyadhair"
                  >
                    <img
                      src="/images/ig.png"
                      alt=""
                      style={{ width: "22px" }}
                    />
                  </ExternalLink>
                </div>
                <div className="footerCopyright">
                  <ExternalLink
                    target="_blank"
                    href="https://www.tiktok.com/@riyadhair"
                  >
                    <img
                      src="/images/tiktok.png"
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </ExternalLink>
                </div>
                <div className="footerCopyright">
                  <ExternalLink
                    target="_blank"
                    href="https://www.linkedin.com/company/riyadhair"
                  >
                    <img
                      src="/images/linkedin.png"
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </ExternalLink>
                </div>
                <div className="footerCopyright">
                  <ExternalLink
                    target="_blank"
                    href="https://www.youtube.com/@riyadhair"
                  >
                    <img
                      src="/images/YouTube.png"
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </ExternalLink>
                </div>
                <div className="footerCopyright">
                  <ExternalLink
                    target="_blank"
                    href="https://www.threads.net/@riyadhair"
                  >
                    <img
                      src="/images/threads.png"
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        html,
        body {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .wrap .pageBottom {
          padding: 50px 0 25px;
          background: #817eff;
        }
        .wrap .pageBottom a {
          text-decoration: none;
          color: #fff;
          font-weight: 400;
          padding: 5px 10px;
          margin-right: 15px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .wrap .pageBottom .mainTitle {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .wrap .pageBottom .title {
          font-size: 14px;
          color: #fff;
          padding: 0 9px;
        }
        .wrap .pageBottom .bigClass {
          position: relative;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .wrap .pageBottom .bigClass > a {
          padding: 0;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 3px;
          color: #fff;
          z-index: 100;
        }

        .wrap .container-fluid {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        .wrap .container-footer {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        footer {
          padding: 30px 0;
          font-size: 14px;
          background: #fff;
        }
        footer a {
          text-decoration: none !important;
          color: #777;
          margin-right: 15px;
        }

        footer a {
          text-align: center;
          display: inline-block;
          color: #777;
          width: 170px;
          font-weight: 500;
        }
        footer #fbicon:hover {
          text-decoration: none;
          color: #3b5998;
        }
        footer img {
          margin: 0 3px;
          filter: grayscale(100%);
          transition: all 200ms linear 0ms;
        }
        footer a:hover img {
          text-decoration: none;
          filter: grayscale(0%);
        }

        .wrap .pageBottom .subscribe-btn {
          background-color: #2b2b2b;
          font-size: 14px;
          letter-spacing: normal;
          font-weight: 500;
          color: white;
          cursor: pointer;
          border-radius: 5px;
          height: 35px;
          width: 100px;
          border: none;
          outline: none;
        }

        .wrap .subscribe-btn a:hover {
          color: white;
        }
        .wrap .subscribe-btn a {
          height: 100%;
          width: 100%;
          display: block;
          color: white;
          line-height: 25px;
        }

        /* ========= FOOTER LOGO ========== */

        .mainTitle .img-fluid {
          transform: translateX(0%);
        }

        @media screen and (max-width: 768px) {
          .wrap .pageBottom a {
            margin-right: 0;
          }
          .wrap .pageBottom .mainTitle {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            text-align: center;
            display: block;
            margin-bottom: 20px;
          }
          .wrap .pageBottom .mainTitle .tonBtn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            font-family: "amplitude";
            font-weight: 100;
          }
          .wrap .pageBottom .mainTitle .tonBtn > a {
            min-width: 35px;
            margin-bottom: 10px;
            margin-right: 15px;
            font-size: 13px;
          }

          .wrap .pageBottom p {
            text-align: center;
          }
          .wrap .pageBottom .bigClass {
            text-align: center;
          }
          .wrap footer > .container {
            text-align: center;
          }
          .wrap footer span {
            display: block;
            margin-bottom: 10px;
            text-align: center;
          }
        }

        /* ========== LOGIN QUESTION CARD ============= */

        .backdrop {
          position: fixed;
          background-color: rgba(33, 40, 46, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1500;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        @keyframes mailframe {
          from {
            transform: translate(-50%, -30%);
            opacity: 0;
          }
          to {
            transform: translateY(-50%, -50%);
            opacity: 1;
          }
        }

        .input-group label {
          display: block;
        }
        form .row {
          margin: 0px;
        }

        .container {
          text-align: left;
        }

        @media only screen and (min-width: 768px) {
          .wrap .container {
            text-align: left;
          }

          .backdrop {
            display: block;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #3f3f3f;
            z-index: 100;
            opacity: 0.8;
            cursor: auto;
          }

          .wrap .content4 > .comment {
            padding: 20px 40px;
          }
          .content5 .btn-med {
            top: 75%;
            left: 12%;
          }

          .form-check-input {
            margin-left: -1.25rem;
          }
          .form-check-label {
            margin-left: 0px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
