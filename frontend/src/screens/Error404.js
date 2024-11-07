import { useEffect } from "react";
import HomeNav from "../components/HomeNav";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 7000);
  }, [navigate]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>404 Error | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <HomeNav />

        <div className="wrap">
          <div className="backHome">
            <Link to="/">Return to Home</Link>
          </div>
        </div>
        <style jsx="true">{`
          .wrap {
            background-image: url("/images/404.png");
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-size: contain;
            background-color: #20094d;
          }
          .backHome {
            height: 780px;
          }

          .backHome a {
            color: white;
            background-color: #817eff;
            border: 2px solid white;
            text-align: center;
            height: 70px;
            line-height: 66px;
            border-radius: 4px;
            font-size: 22px;
            width: 240px;
            display: block;
            position: relative;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 85%;
          }
          @media only screen and (min-width: 768px) {
            .wrap {
              background-image: url("/images/404.png");
              background-position: center;
              background-size: contain;
            }
            .backHome a {
              transform: translate(-50%, -50%);
              left: 60%;
              top: 60%;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
}
