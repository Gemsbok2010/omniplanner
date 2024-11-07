import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink } from "react-external-link";
import { ReactSession } from "react-client-session";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../redux/userInfo";
import { Cookies } from "react-cookie";
// Three dots

// set up cookies
const cookies = new Cookies();

const HomeNav = () => {
  const dispatch = useDispatch();

  const [openHamburger, setOpenHamburger] = useState(false);
  const user = useSelector((state) => state.userInfo.value);
  ReactSession.setStoreType("localStorage");

  // ============= GOOGLE AND FACEBOOK LOGIN ===============
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get("id");
  let token = params.get("token");

  // ========= GOOGLE & FACEBOOK LOGIN DATA ===========
  useEffect(() => {
    if (id) {
      localStorage.setItem("userId", id);
      localStorage.setItem("token", token);
      window.history.pushState({}, document.title, "/");
    }

    // ============ PROFILE DATA ===========

    if (id) {
      axios
        .get(
          process.env.REACT_APP_BACKEND_URL +
            "api/users/allusers/" +
            localStorage.getItem("userId")
        )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("userId", response.data._id);
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
          }
        });
    }
  }, [id]);

  return (
    <>
      <section className="content1 container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src="/images/rx.png"
              width="200px"
              alt=""
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item2">
                {user.isLoggedIn ? (
                  <ExternalLink
                    className="nav-link"
                    target="_self"
                    href="/logout"
                  >
                    Log Out
                  </ExternalLink>
                ) : (
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <form style={{ display: "none" }} className="loginForm">
            <input type="email" style={{ display: "none" }} />
            <input type="checkbox" name="remember" />
          </form>
          <i
            className="nonselect"
            style={{ display: "none" }}
            id="show-more"
          ></i>
          <div
            id="hamburger"
            onClick={() => {
              setOpenHamburger(!openHamburger);
            }}
          ></div>
        </nav>

        {openHamburger && (
          <div id="ham-menu">
            <ul>
              <li className="nonselect">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        )}
      </section>
      <style jsx="true">{`

        /* ========== NAVBAR SELECTIONS ============= */
        section {
          background-color: #20094d;
        }

        nav .nav-link {
          font-weight: 800;
          font-size: 14px;
          background-color: #20094d;
        }

        nav .navbar-nav.ml-auto a {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 600;
        }

        nav .nav-item1::after,
        nav .nav-item2::after,
        nav .nav-item3::after,
        nav .nav-item4::after {
          content: "";
          height: 2px;
          background-color: white;
          width: 100%;
          transform: scaleX(0);
          display: block;
        }
        nav .nav-item1:hover::after,
        nav .nav-item2:hover::after,
        nav .nav-item3:hover::after,
        nav .nav-item4:hover::after {
          transform: scaleX(1);
        }
        nav .nav-item1:hover::after {
          width: 42%;
          transform: translateX(70%);
        }

        nav .nav-item2:hover::after {
          width: 50%;
          transform: translateX(50%);
        }
        nav .nav-item3:hover::after {
          width: 67%;
          transform: translateX(25%);
        }
        nav .nav-item4:hover::after {
          width: 57%;
          transform: translateX(37%);
        }

        .nav-item5 .smallPhoto .blankImage {
          position: relative;
          height: 40px;
          width: 40px;
        }

        nav #login:hover {
          cursor: pointer;
        }

        #hamburger {
          background: url("./../../images/menu.png");
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
        }

        #ham-menu ul li a {
          color: white;
          position: relative;
          display: block;
          width: 100%;
        }
        #ham-menu ul {
          padding: 0px 0px 0px 0px;
          margin: 0px 1em 1em;
        }
        #ham-menu ul li {
          list-style: none;
          color: white;
          background-color: #2b2b2b;
          opacity: 0.8;
          height: 50px;
          line-height: 50px;
          width: 100%;
          padding-left: 30px;
          border-bottom: 1px solid #777;
          border-left: 3px solid transparent;
        }

        #ham-menu ul li:hover {
          border-left: 3px solid #817eff;
          cursor: pointer;
        }
        #ham-menu ul li {
          display: block;
        }
        @media screen and (min-width: 768px) {
          #hamburger {
            display: none;
          }
          #ham-menu {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default HomeNav;
