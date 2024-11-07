import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { login } from "../redux/userInfo";

import {
  StyledFormSubmit,
  StyledFormSubmitting,
  StyledFormButton,
} from "../components/Styles";

import { ThreeDots } from "react-loader-spinner";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isloaded, setIsloaded] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [vanishfirst, setVanishfirst] = useState(true);
  const [vanishlast, setVanishlast] = useState(true);
  const [vanishemail, setVanishemail] = useState(true);

  // ========== ERROR MESSAGE ===============

  const [updateNote, setUpdateNote] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function outPutErrorMessagesInSignUp(errorMessage) {
    setUpdateNote(true);
    setErrorMsg(errorMessage);
  }
  // ========== POST ================
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsloaded(true);
    const createdAt = new Date();
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "api/auth/signup?createdAt=" +
          createdAt,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
          }),
        }
      );
      const data = await res.json();

      if (data.prompt) {
        outPutErrorMessagesInSignUp(data.prompt);
        setIsloaded(false);
      }
      if (data.invalid) {
        outPutErrorMessagesInSignUp(data.invalid);
        setIsloaded(false);
      }
      if (data.user) {
        localStorage.setItem("userId", data.user._id);
        setIsloaded(false);
        dispatch(
          login({
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            email: data.user.email,
            isActive: data.user.isActive,
            isLoggedIn: true,
            isAdmin: data.user.isAdmin,
          })
        );
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <div className="wrap">
          <div className="wrapposter">
            <section className="questionCard container">
              <figure>
                <Link to="/">
                  <img
                    src="/images/rx-light.png"
                    alt="LOGO"
                    className="img-fluid"
                  />
                </Link>
              </figure>
              <div className="container regCon">
                <h2>Create a new user </h2>
                <form id="signupForm" onSubmit={onSubmit}>
                  <div className="errorMessageHereInQuestionCard">
                    {updateNote ? (
                      <div className="updateNote">
                        <img
                          src="/images/cross-black.png"
                          style={{
                            width: "14px",
                            cursor: "pointer",
                            marginRight: "2px",
                          }}
                          onClick={() => {
                            setUpdateNote(false);
                          }}
                          alt=""
                        />
                        <span
                          dangerouslySetInnerHTML={{ __html: errorMsg }}
                        ></span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        id="firstname"
                        autoComplete="none"
                        value={firstName}
                        onBlur={() => {
                          setVanishfirst(true);
                        }}
                        className={
                          vanishfirst && firstName !== "" ? "springbok" : ""
                        }
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        id="lastname"
                        autoComplete="none"
                        onBlur={() => {
                          setVanishlast(true);
                        }}
                        className={
                          vanishlast && lastName !== "" ? "springbok" : ""
                        }
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                      <label htmlFor="lastname">Last Name</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        onBlur={() => {
                          setVanishemail(true);
                        }}
                        className={
                          vanishemail && email !== "" ? "springbok" : ""
                        }
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>

                  {lastName && firstName && email ? (
                    !isloaded ? (
                      <StyledFormSubmit
                        type="submit"
                        value="Register"
                      ></StyledFormSubmit>
                    ) : (
                      <StyledFormSubmitting>
                        <ThreeDots
                          type="ThreeDots"
                          height={40}
                          width={80}
                          color={"white"}
                        />
                      </StyledFormSubmitting>
                    )
                  ) : (
                    <StyledFormButton disabled>Register</StyledFormButton>
                  )}

                  <hr />
                </form>
              </div>
              <p>
                Already have an Omniplanner account?
                <Link to="/"> Login</Link>
              </p>
            </section>
          </div>
        </div>

        <style jsx="true">{`
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            background: #20094d;
          }

          .wrap {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 0;
            background: #20094d;
          }

          .wrapposter {
            background: #20094d;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            padding-bottom: 60px;
            padding-top: 60px;
            display: flex;
            justifycontent: space-evenly;
          }

          @media screen and (max-width: 768px) {
            .wrapposter {
              display: block;
            }
          }

          .wrap .questionCard {
            width: 400px;
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
            border-radius: 0px;
            background: #fff;
            -webkit-box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
            box-shadow: 4px 4px 20px rgba(51, 51, 51, 0.3);
          }

          .wrap .questionCard > figure {
            width: 200px;
          }

          .wrap .questionCard > figure > a {
            display: block;
          }

          .wrap .questionCard h2 {
            font-family: "Noto Sans TC", sans-serif;
            text-align: center;
            font-weight: 400;
            font-size: 22px;
            width: 100%;
            margin: 15px auto;
            padding-top: 8px;
            padding-bottom: 8px;
            color: #2b2b2b;
          }
          .wrap .questionCard p {
            margin: 10px auto;
            text-align: center;
            color: #777;
            width: 100%;
            font-size: 15px;
            font-weight: 500;
            font-family: "Noto Sans TC", sans-serif;

            position: relative;
          }

          .wrap .questionCard a {
            margin-bottom: 0;
            width: 100%;
            font-size: 15px;
            font-weight: 700;
            font-family: "Noto Sans TC", sans-serif;
            color: #817eff;
          }

          .wrap .regCon {
            margin: 0px auto;
            width: 90%;
          }

          @media screen and (max-width: 768px) {
            .wrap .regCon {
              width: 100%;
            }
          }
          .wrapposter .input-group {
            display: block;
            margin-right: 20px;
            position: relative;
          }

          .wrapposter .input-group label {
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            left: 0%;
            font-family: "Noto Sans TC", sans-serif;
            font-size: 14px;
            color: #777;
            font-weight: 500;
            padding: 0px 0px;
            pointer-events: none;
            transition: all 300ms ease-in-out 0ms;
          }
          .wrap #email {
            background-image: url("/images/mail-grey.png");
            background-repeat: no-repeat;
            background-size: 16px;
            background-position: 320px;
          }
          .wrap #firstname,
          .wrap #lastname {
            background-image: url("/images/human.png");
            background-repeat: no-repeat;
            background-size: 17px;
            background-position: 320px;
          }

          .input-group input:focus + label {
            transform: translate(-8px, -32px) scale(0.9);
            font-size: 14px;
            opacity: 1;
          }
          .input-group input.springbok + label {
            transform: translate(-8px, -32px) scale(0.9);
            font-size: 14px;
            opacity: 0;
          }
          label {
            display: inline-block;
            font-size: 15px;
            margin-bottom: 10px;
            color: #1d1d1d;
            width: 150px;
            text-align: left;
          }

          .wrap .form-group {
            height: 52px;
          }
          .wrap .questionCard input[type="text"],
          .wrap .questionCard input[type="email"] {
            height: 42px;
            text-decoration: none;
            outline: none;
            background: none;
            border: none;
            border-bottom: 2px solid #dadada;
            font-weight: 500;
            width: 100%;
            font-size: 14px;
            color: #2b2b2b;
            font-family: "Noto Sans TC", sans-serif;
          }

          .wrap .questionCard input[type="checkbox"] {
            display: none;
            float: left;
          }
          .wrap .questionCard input[type="checkbox"] + label {
            position: relative;
            cursor: pointer;
            font-size: 15px;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 500;
            margin: 0px 0px 0px 50px;
            width: 100%;
            display: block;
            color: #2b2b2b;
          }
          .wrap .questionCard input[type="checkbox"] + label::before {
            content: " ";
            position: relative;
            left: -55px;
            top: 16px;
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
          .wrap .questionCard input[type="checkbox"] + label::after {
            content: " ";
            position: absolute;
            left: -60px;
            top: 13px;
            width: 30px;
            height: 30px;
            display: block;
            z-index: 1;
            background: url("/images/check.png");
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
          .wrap .questionCard input[type="checkbox"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          .wrap .updateNote {
            background-color: #fcebcd;
            margin: 5px auto 12px;
            padding: 7px;
          }

          /* ============ MEDIA QUERIES FOR DESKTOP =========*/

          @media only screen and (min-width: 768px) {
            .wrap .questionCard {
              width: 468px;
              padding: 30px 0px;
            }
            .wrap .questionCard h2 {
              font-size: 26px;
            }
            .input-group input:focus + label {
              transform: translate(-8px, -32px) scale(0.9);
            }
            .input-group input.springbok + label {
              transform: translate(-8px, -32px) scale(0.9);
            }
            .wrap .passwordCard input[type="checkbox"] + label {
              margin: 0px 0px 0px 40px;
              height: 42px;
            }
            .wrap #firstname,
            .wrap #lastname,
            .wrap #email {
              background-position: 360px;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Signup;
