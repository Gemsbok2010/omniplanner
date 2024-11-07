import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ExternalLink } from "react-external-link";

const Footer = ({ asx }) => {
  const user = useSelector((state) => state.userInfo.value);
  const [thisyear, setThisyear] = useState(null);

  // ============ GET CURRENT YEAR ===============
  useEffect(() => {
    const dt = new Date();
    const year = dt.getFullYear();
    setThisyear(year);
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="pageBottom container-fluid">
          <div className="container">
            <div className="mainTitle">
              <figure>
                <img
                  src="/images/rx.png"
                  alt=""
                  width="150px"
                  className="pageBottom-logo"
                />
              </figure>
              <div className="tonBtn">
                {user.isActive === true ? (
                  <>
                    <ExternalLink href="/logout" target="_self">
                      Log out
                    </ExternalLink>
                  </>
                ) : (
                  <>
                    <ExternalLink href="/logout" target="_self">
                      Log out
                    </ExternalLink>
                  </>
                )}
              </div>
            </div>

            <div
              style={{
                borderBottom: "1px solid #fff",
              }}
              className="container pb-4"
            ></div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="container title my-2">
                <span
                  className="mr-3 text-white"
                  style={{ fontWeight: "200", fontSize: "12px", color: "#fff" }}
                >
                  <span style={{ fontWeight: "200" }}>{thisyear}</span> © Riyadh
                  Air. All right reserved.
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  outline: "none",
                  width: "280px",
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

        {/* <footer className="container-fluid">
          
          
          </footer>  */}
      </div>
      <style jsx="true">{`
        .wrap .pageBottom {
          padding: 50px 0 25px;
          background: #20094d;
        }
        .wrap .pageBottom a {
          text-decoration: none;
          color: #fff;
          padding: 5px 10px;
          margin-right: 15px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        .wrap .pageBottom a:hover {
          color: #fff;
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
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .wrap .pageBottom .bigClass > a {
          padding: 0;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 3px;
          color: #fff;
          z-index: 100;
        }
        .wrap .pageBottom .bigClass > a:hover {
          color: #817eff;
        }
        .wrap .container-fluid {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
        .wrap .pageBottom-logo {
          margin-left: 0px;
        }
        footer {
          padding: 30px 0;
          font-size: 14px;
          background: #fff;
        }

        footer a:hover {
          color: #817eff;
        }
        footer a {
          text-decoration: none !important;
          text-align: center;
          display: inline-block;
          width: 170px;
          color: #fff;
          margin-right: 15px;
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

        @media screen and (max-width: 768px) {
          .wrap .pageBottom a {
            margin-right: 0;
          }
          .wrap .pageBottom .mainTitle {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: space-around;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
          }
          .wrap .pageBottom .mainTitle .tonBtn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
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

        .wrap .pageBottom .footerCopyright {
          font-size: 12px;
          margin: 10px 0 10px 6px;
          line-height: 35px;
          margin-left: 0;
        }
        .wrap .pageBottom .footerCopyright a {
          margin-right: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
