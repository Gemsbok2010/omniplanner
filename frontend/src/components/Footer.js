import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  const [thisyear, setThisyear] = useState(null);

  // ============ GET CURRENT YEAR ===============
  useEffect(() => {
    const dt = new Date();
    const year = dt.getFullYear();
    setThisyear(year);
  }, []);

  return (
    <>
      {/* QUESTION CARD */}
      <div className="wrap">
        <div className="pageBottom container-fluid">
          <div className="buffer"></div>
          <div className="container">
            <p className="title my-4">Destinations</p>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="bigClass">
                    <Link to={"#"}>Riyadh</Link>
                    <Link to={"#"}>Jeddah</Link>
                    <Link to={"#"}>Dammam</Link>
                    <Link to={"#"}>Dubai</Link>
                    <Link to={"#"}>Amman</Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass">
                    <Link to={"#"}>Istanbul</Link>
                    <Link to={"#"}>Cairo</Link>
                    <Link to={"#"}>New Delhi</Link>
                    <Link to={"#"}>Mumbai</Link>
                    <Link to={"#"}>Hyderabad</Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass">
                    <Link to={"#"}>Karachi</Link>
                    <Link to={"#"}>Islamabad</Link>
                    <Link to={"#"}>Dhaka</Link>
                    <Link to={"#"}>Bangkok</Link>
                    <Link to={"#"}>Shanghai</Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bigClass last">
                    <Link to={"#"}>London</Link>
                    <Link to={"#"}>Paris</Link>
                    <Link to={"#"}>Munich</Link>
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
