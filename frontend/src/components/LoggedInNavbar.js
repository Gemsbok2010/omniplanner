import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { ReactSession } from "react-client-session";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const LoggedInNavbar = () => {
  ReactSession.setStoreType("sessionStorage");
  const user = useSelector((state) => state.userInfo.value);

  const [dropDown, setDropDown] = useState(false);
  const [blacklist, setBlacklist] = useState(false);
  const [edm, setEdm] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/step6" ? setDropDown(true) : setDropDown(false);
    setEdm(ReactSession.get("edm"));
  }, []);
  return (
    <>
      <nav>
        <figure>
          <Link to="/dashboard">
            <img
              src="/images/rx-light.png"
              alt="Riyadh Air LOGO"
              className="img-fluid"
            />
          </Link>
        </figure>

        <div
          id="hamburger"
          onClick={() => {
            user.isActive ? setDropDown(!dropDown) : setBlacklist(!blacklist);
          }}
        ></div>
        <div className="nav-name">Hi, {user.firstName}</div>
        <div
          className="nav-box"
          onClick={() => {
            user.isActive ? setDropDown(!dropDown) : setBlacklist(!blacklist);
          }}
        >
          {!user.isActive && blacklist ? (
            <div id="dropItem">
              <div className="dropwrap">
                <div>
                  <ExternalLink href="/logout" target="_self">
                    Log Out
                  </ExternalLink>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {dropDown ? (
            <div id="dropItem">
              <div className="dropwrap">
                <div>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
                <div>
                  <Link to="/personal-details">Personal Details</Link>
                </div>

                {!edm ? (
                  <div>
                    <Link to={"/step1"}>Create a Brief</Link>
                  </div>
                ) : (
                  <div>
                    <Link to={"/question_continue"}>Create a Brief</Link>
                  </div>
                )}

                <div
                  className={pathname === "/step6" ? "mybriefActivated" : ""}
                >
                  <Link to={"/briefs"}>All Briefs</Link>
                </div>
                <div>
                  <Link to={"/campaigns"}>Campaign Ideas</Link>
                </div>
                <div>
                  <Link to={"/campaignadvisor"}>Campaign Advisor</Link>
                </div>
                <div>
                  <Link to={"/calendar"}>Calendar</Link>
                </div>
                <div>
                  <ExternalLink href="/logout" target="_self">
                    Log Out
                  </ExternalLink>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
      <style jsx="true">
        {`
          nav {
            background-color: #fff;
            width: 100%;
            height: 85px;
            margin: 0 auto;
            padding: 0;
            border-bottom: 1px solid #ebebeb;
            position: relative;
          }

          .navbar-nav {
            float: right;
            position: absolute;
            display: block;
          }

          .navbar-nav ul {
            padding: 0;
            margin: 0;
          }

          .navbar-nav ul li {
            text-decoration: none;
            list-style: none;
          }

          .navbar-nav ul li a {
            font-weight: 800;
            font-size: 14px;
            color: #2b2b2b;
          }

          nav #hamburger {
            background: url("./../../images/menu-black.png");
            background-repeat: no-repeat;
            background-size: 45%;
            background-position: center;
            cursor: pointer;
            position: absolute;
            height: 85px;
            width: 80px;
            display: block;
            transform: translate(-50%, -50%);
            top: 55%;
            left: 90%;
            display: block;
          }

          nav .nav-box {
            width: 185px;
            height: 35px;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 80%;
            text-align: center;
            cursor: pointer;
            z-index: 1000;
            font-weight: 600;
            font-size: 15px;
            padding-top: 4px;
            padding-bottom: 4px;
            display: block;
          }

          nav .nav-name {
            width: 185px;
            height: 35px;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 80%;
            text-align: center;
            cursor: pointer;
            z-index: 1000;
            font-weight: 600;
            font-size: 15px;
            padding-top: 4px;
            padding-bottom: 4px;
            display: none;
          }

          nav > figure > a {
            display: block;
          }
          nav h2 {
            font-weight: bold;
          }
          nav > figure {
            width: 200px;
            position: absolute;
            transform: translate(-50%, -50%);
            left: 10%;
            top: 50%;
          }

          @media only screen and (min-width: 768px) {
            nav .nav-box {
              left: 92%;
              display: block;
            }
            nav figure .img-fluid {
              transform: translateX(0%);
            }
            nav .nav-name {
              left: 92%;
              display: block;
            }

            nav #hamburger {
              display: none;
            }
          }
          #dropItem {
            width: 280px;
            background-color: white;
            position: absolute;
            text-align: left;
            transform: translate(-33%, 18%);
            border: 1px solid #ebebeb;
            border-top: none;
            display: block;
          }

          #dropItem.open {
            display: block;
          }

          .dropwrap {
            padding-bottom: 0px;
            width: 88%;
            background-color: #fff;
            margin-top: 3%;
            margin-left: 6%;
          }
          .dropwrap div {
            border-bottom: 1px solid #ebebeb;
            height: 45px;
            line-height: 45px;
            font-weight: 500;
            color: #777;
            font-size: 13px;
            padding-left: 3px;
          }
          .dropwrap div a {
            color: #777;
            font-weight: 500;
            font-size: 13px;
            font-family: "Noto Sans TC", sans-serif;
            height: 100%;
            width: 100%;
            position: relative;
            display: block;
          }
          .dropwrap div:hover {
            border-bottom: 1px solid #484848;
          }

          nav .img-fluid {
            transform: translateX(36%);
            width: 130px;
          }

          .dropwrap .mybriefActivated {
            background-color: #817eff;
            animation: mailframe 500ms ease-in 5ms;
            animation-fill-mode: forwards;
          }

          .dropwrap .mybriefActivated a {
            color: #fff;
            animation: textframe 500ms ease-in-out 0ms;
          }

          @keyframes mailframe {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes textframe {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default LoggedInNavbar;
