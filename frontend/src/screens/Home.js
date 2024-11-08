import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userInfo";
import { useSelector } from "react-redux";
import HomeNav from "../components/HomeNav";

// Three dots
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [springbok, setSpringbok] = useState(false);
  const user = useSelector((state) => state.userInfo.value);
  const [isloaded, setIsloaded] = useState(false);

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  // ========== POST ================
  const onSubmit = async (e) => {
    e.preventDefault();

    setIsloaded(true);
    fetch(process.env.REACT_APP_BACKEND_URL + "api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInQuestionCard(data.invalid);
          setIsloaded(false);
        } else {
          localStorage.setItem("userId", data.user._id);
          setIsloaded(false);
          dispatch(
            login({
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              email: data.user.email,
              isLoggedIn: true,
              isActive: data.user.isActive,
              isAdmin: data.user.isAdmin,
            })
          );
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setIsloaded(false);
        outPutErrorMessagesInQuestionCard(
          "Email is not registered. Please check your inputs and try again."
        );
      });
  };
  // ========== ERROR MESSAGE ===============

  const [updateNote, setUpdateNote] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function outPutErrorMessagesInQuestionCard(errorMessage) {
    setUpdateNote(true);
    setErrorMsg(errorMessage);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | RX Omniplanner </title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>

        <div className="wrap">
          <HomeNav />
          <section className="questionCard container">
            <div className="errorMessageHereInQuestionCard">
              {updateNote ? (
                <div className="updateNote">
                  <img
                    src="/images/cross-black.png"
                    alt=""
                    style={{ width: "14px", cursor: "pointer" }}
                    onClick={() => {
                      setUpdateNote(false);
                    }}
                  />{" "}
                  <span dangerouslySetInnerHTML={{ __html: errorMsg }}></span>
                </div>
              ) : (
                ""
              )}
            </div>

            <h2>Login</h2>
            <div className="container regCon">
              <form onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="input-group">
                    <input
                      className={springbok && email !== "" ? "springbok" : ""}
                      type="email"
                      id="email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onBlur={() => {
                        setSpringbok(true);
                      }}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="input-group">
                    {isloaded ? (
                      <button className="btn-med">
                        <ThreeDots
                          type="ThreeDots"
                          height={40}
                          width={80}
                          color={"white"}
                        />
                      </button>
                    ) : (
                      <button className="btn btn-med">Login</button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </HelmetProvider>
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
          padding: 0;
          background: #20094d;
        }

        .wrap .questionCard {
          width: 400px;
          padding: 100px 10px 20px;
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
          background: #20094d;
        }
        .wrap .questionCard > figure {
          width: 200px;
        }
        .wrap .questionCard > figure > a {
          display: block;
        }

        .wrap .questionCard h2 {
          font-family: sans-serif;
          text-align: center;
          font-weight: 800;
          font-size: 28px;
          width: 100%;
          margin: 4px auto 14px;
          padding-top: 8px;
          padding-bottom: 8px;
          color: #fff;
        }
        .regCon {
          margin: 0px auto;
          width: 80%;
        }
        @media screen and (max-width: 768px) {
          .regCon {
            width: 100%;
          }
        }
        input-group {
          display: block;
          margin-right: 20px;
          position: relative;
        }
        .input-group input {
          padding: 15px 20px;
        }
        .input-group label {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          font-family: sans-serif;
          font-size: 14px;
          left: 10px;
          color: #fff;
          font-weight: 500;
          padding: 15px 10px;
          pointer-events: none;
          transition: all 1500ms ease-in-out 0ms;
        }
        #email {
          background-image: url("./../../images/mail.png");
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: 340px;
        }

        .updateNote {
          background-color: #fcebcd;
          margin: 5px auto 12px;
          padding: 7px;
        }

        .input-group input:focus + label {
          left: 280px;
          font-size: 14px;
          opacity: 1;
        }
        .input-group input.springbok + label {
          left: 280px;
          font-size: 14px;
          opacity: 0;
        }
        label {
          display: inline-block;
          font-size: 16px;
          margin-bottom: 10px;
          color: #1d1d1d;
          width: 150px;
          text-align: left;
        }
        .questionCard .btn-med {
          height: 48px;
          line-height: 36px;
          border-radius: 4px;
          width: 100%;
          color: white;
          font-weight: 500;
          font-size: 18px;
          background-color: #817eff;
          text-align: center;
          border: none;
          box-sizing: border-box;
          margin-top: 0px;
          letter-spacing: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .questionCard .btn-med:active,
        .questionCard .btn-med:focus {
          outline: none;
        }

        input[type="email"] {
          height: 42px;
          border-radius: 4px;
          text-decoration: none;
          outline: none;
          background: none;
          border: 1px solid #fff;
          padding: 12px 10px;
          font-weight: 500;
          width: 100%;
          font-size: 16px;
          color: #fff;
          font-family: sans-serif;
        }
        .questionCard p {
          margin: 10px auto;
          text-align: center;
          color: #777;
          width: 100%;
          font-size: 15px;
          font-weight: 500;
          font-family: sans-serif;
        }
        .questionCard a {
          margin-bottom: 0;
          width: 100%;
          font-size: 15px;
          font-weight: 700;
          font-family: sans-serif;
          color: #008489;
        }

        @media only screen and (min-width: 768px) {
          .wrap .questionCard {
            width: 710px;
            padding: 100px 20px 30px;
          }

          .input-group input:focus + label {
            left: 440px;
          }
          .input-group input.springbok + label {
            left: 440px;
          }

          #email {
            background-image: url("./../../images/mail.png");
            background-position: 505px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
