import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";

const QuestionContinue = () => {
  ReactSession.setStoreType("sessionStorage");

  const [edm, setEdm] = useState("");
  const [content, setContent] = useState("");



  // ============= POPULATE SESSION DATA =================
  useEffect(() => {
    setEdm(ReactSession.get("edm"));
    setContent(ReactSession.get("content"));
  }, []);

  // ========= CLEAR SESSION WHEN 重新開始 IS CLICKED =======
  const clearSession = () => {
    sessionStorage.clear();
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Continue | Sanofi Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Sanofi" />
        </Helmet>
        <div className="wrap">
          <section className="questionCard container">
            <figure>
              <Link to="/dashboard">
                <img
                  src="/images/sanofi.png"
                  alt="LOGO"
                  className="img-fluid"
                />
              </Link>
            </figure>

            <h2>Return where you left off?</h2>
            <div className="btnGroup">
              <button className="btn">
                {edm !== "" && !content ? (
                  <Link to="/step2">Continue</Link>
                ) : edm !== "" && content !== "" ? (
                  <Link to="/step3">Continue</Link>
                ) : (
                  <Link to="/step2">Continue</Link>
                )}
              </button>

              <button className="btn" onClick={clearSession}>
                <Link to="/step1">Start over</Link>
              </button>
            </div>
          </section>
        </div>

        <style jsx="true">{`
          .wrap {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            min-height: 100vh;
            background: #3c217b;
          }

          .wrap .questionCard {
            width: 500px;
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
            margin-bottom: 40px;
          }

          .wrap .questionCard > figure > a {
            display: block;
          }

          .wrap .questionCard h2 {
            font-family: sans-serif;
            text-align: center;
            font-weight: 800;
            font-size: 22px;
            width: 100%;
            margin: 24px auto;
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

          .wrap .questionCard .btnGroup > button {
            background: #fff;
            color: #2b2b2b;
            padding: 0;
            margin-bottom: 20px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .wrap .questionCard .btnGroup > button:hover {
            background: #817eff;
            color: #fff;
          }

          .wrap .questionCard .btnGroup > button:active {
            background: #817eff;
            color: #fff;
          }

          .wrap .questionCard .btnGroup > button > a {
            display: block;
            padding: 12px 20px;
            color: #2b2b2b;
          }

          .wrap .questionCard .btnGroup > button > a:hover {
            color: #fff;
          }
          @media only screen and (min-width: 768px) {
            .wrap .questionCard {
              width: 710px;
              padding: 30px 20px;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default QuestionContinue;
