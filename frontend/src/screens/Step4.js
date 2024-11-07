import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Step4 = () => {
  const navigate = useNavigate();
  ReactSession.setStoreType("sessionStorage");

  // ========= POPULATE SESSION DATA ==============
  useEffect(() => {
    if (!ReactSession.get("mediaPlan")) {
      setMediaPlan(false);
    } else {
      setMediaPlan(ReactSession.get("mediaPlan"));
    }
    if (!ReactSession.get("webapp")) {
      setWebapp(false);
    } else {
      setWebapp(ReactSession.get("webapp"));
    }
    if (!ReactSession.get("budget")) {
      setBudget("");
    } else {
      setBudget(ReactSession.get("budget"));
    }

    if (!ReactSession.get("tnc")) {
      setTnc(false);
    } else {
      setTnc(ReactSession.get("tnc"));
    }
    if (!ReactSession.get("terms")) {
      setTerms("");
    } else {
      setTerms(ReactSession.get("terms"));
    }
    if (!ReactSession.get("asset")) {
      setAsset(false);
    } else {
      setAsset(ReactSession.get("asset"));
    }
    if (!ReactSession.get("creativeAssets")) {
      setCreativeAssets("");
    } else {
      setCreativeAssets(ReactSession.get("creativeAssets"));
    }
    if (!ReactSession.get("copy")) {
      setCopy(false);
    } else {
      setCopy(ReactSession.get("copy"));
    }

    if (!ReactSession.get("copybrief")) {
      setCopybrief("");
    } else {
      setCopybrief(ReactSession.get("copybrief"));
    }

    if (!ReactSession.get("translation")) {
      setTranslation(false);
    } else {
      setTranslation(ReactSession.get("translation"));
    }
    if (!ReactSession.get("audience")) {
      setAudience(false);
    } else {
      setAudience(ReactSession.get("audience"));
    }

    if (!ReactSession.get("targetAudience")) {
      setTargetAudience("");
    } else {
      setTargetAudience(ReactSession.get("targetAudience"));
    }

    if (!ReactSession.get("tracking")) {
      setTracking(false);
    } else {
      setTracking(ReactSession.get("tracking"));
    }
    if (!ReactSession.get("analytics")) {
      setAnalytics(false);
    } else {
      setAnalytics(ReactSession.get("analytics"));
    }
    if (!ReactSession.get("targetAnalytics")) {
      setTargetAnalytics("");
    } else {
      setTargetAnalytics(ReactSession.get("targetAnalytics"));
    }
  }, []);

  // =============== SUBMIT =================
  const onSubmit = (e) => {
    e.preventDefault();
    ReactSession.set("mediaPlan", mediaPlan);
    ReactSession.set("webapp", webapp);
    ReactSession.set("budget", budget);
    ReactSession.set("tnc", tnc);
    ReactSession.set("terms", terms);
    ReactSession.set("asset", asset);
    ReactSession.set("creativeAssets", creativeAssets);
    ReactSession.set("copy", copy);
    ReactSession.set("copybrief", copybrief);
    ReactSession.set("translation", translation);
    ReactSession.set("audience", audience);
    ReactSession.set("targetAudience", targetAudience);
    ReactSession.set("tracking", tracking);
    ReactSession.set("analytics", analytics);
    ReactSession.set("targetAnalytics", targetAnalytics);
    navigate("/step5");
  };

  // ============= STATE LIST =============
  const [states] = useState([
    { title: "Yes", id: 1 },
    { title: "No", id: 2 },
  ]);

  const [newExists] = useState([
    { title: "New", id: 1 },
    { title: "Existing", id: 2 },
  ]);

  // ====== MEDIA PLAN (Disable and enable submit) ======

  const [seeMp, setSeeMp] = useState(false);
  const [mediaPlan, setMediaPlan] = useState(false);
  const handleShowMedia = () => {
    setSeeMp(false);
  };

  const handleSetMedia = (e) => {
    const innerHTML = e.target.innerHTML;
    if (innerHTML === "Yes") {
      setMediaPlan(true);
    } else {
      setMediaPlan(false);
    }
  };

  // ===== WEB APLL TOUCHPOINTS (Disable and enable submit) =====

  const [seeWebapp, setSeeWebapp] = useState(false);
  const [webapp, setWebapp] = useState(false);
  const handleShowWebapp = () => {
    setSeeWebapp(false);
  };

  const handleSetWebapp = (e) => {
    const innerHTML = e.target.innerHTML;

    if (innerHTML === "Yes") {
      setWebapp(true);
    } else {
      setWebapp(false);
    }
  };

  // ===== BUDGET (Disable and enable submit) =====
  const [budget, setBudget] = useState("");

  // ===== TERMS & CONDITIONS (Disable and enable submit) =====

  const [seeTnc, setSeeTnc] = useState(false);
  const [tnc, setTnc] = useState(false);
  const [terms, setTerms] = useState("");
  const handleShowTnc = () => {
    setSeeTnc(false);
  };

  const handleSetTnc = (e) => {
    const innerHTML = e.target.innerHTML;
    if (innerHTML === "Yes") {
      setTnc(true);
    } else {
      setTnc(false);
    }
  };

  // ===== CREATIVE ASSETS (Disable and enable submit) =====
  const [seeAsset, setSeeAsset] = useState(false);
  const [asset, setAsset] = useState(false);
  const [creativeAssets, setCreativeAssets] = useState("");

  const handleShowAsset = () => {
    setSeeAsset(false);
  };

  const handleSetAsset = (e) => {
    const innerHTML = e.target.innerHTML;
    if (innerHTML === "New") {
      setAsset(true);
    } else {
      setAsset(false);
    }
  };

  // ===== COPY REQUIRED (Disable and enable submit) =====
  const [seeCopy, setSeeCopy] = useState(false);
  const [copy, setCopy] = useState(false);
  const [copybrief, setCopybrief] = useState("");

  const handleShowCopy = () => {
    setSeeCopy(false);
  };

  const handleSetCopy = (e) => {
    const innerHTML = e.target.innerHTML;
    if (innerHTML === "New") {
      setCopy(true);
    } else {
      setCopy(false);
    }
  };

  // ====== TRANSLATION (Disable and enable submit) ======

  const [seeTranslate, setSeeTranslate] = useState(false);
  const [translation, setTranslation] = useState(false);
  const handleShowTranslate = () => {
    setSeeTranslate(false);
  };

  const handleSetTranslate = (e) => {
    const innerHTML = e.target.innerHTML;

    if (innerHTML === "Yes") {
      setTranslation(true);
    } else {
      setTranslation(false);
    }
  };

  // ===== TARGET AUDIENCE (Disable and enable submit) =====

  const [seeAudience, setSeeAudience] = useState(false);
  const [audience, setAudience] = useState(false);
  const [targetAudience, setTargetAudience] = useState("");
  const handleShowAudience = () => {
    setSeeAudience(false);
  };

  const handleSetAudience = (e) => {
    const innerHTML = e.target.innerHTML;

    if (innerHTML === "Yes") {
      setAudience(true);
    } else {
      setAudience(false);
    }
  };

  // ====== TRACKING(Disable and enable submit) ======
  const [seeTracking, setSeeTracking] = useState(false);
  const [tracking, setTracking] = useState(false);
  const handleShowTracking = () => {
    setSeeTracking(false);
  };

  const handleSetTracking = (e) => {
    const innerHTML = e.target.innerHTML;

    if (innerHTML === "Yes") {
      setTracking(true);
    } else {
      setTracking(false);
    }
  };

  // ===== ANALYTICS REQUIRED (Disable and enable submit) =====

  const [seeAnalytics, setSeeAnalytics] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [targetAnalytics, setTargetAnalytics] = useState("");
  const handleShowAnalytics = () => {
    setSeeAnalytics(false);
  };

  const handleSetAnalytics = (e) => {
    const innerHTML = e.target.innerHTML;

    if (innerHTML === "Yes") {
      setAnalytics(true);
    } else {
      setAnalytics(false);
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Step 4 | RX Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Riyadh Air" />
        </Helmet>
        <LoggedInNavbar />
        <div className="wrap">
          <div className="Q1title">
            <div
              id="msform"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul
                id="progressbar"
                style={{ display: "inline", paddingInlineStart: "0px" }}
              >
                <li>
                  <Link
                    style={{ fontWeight: "bold" }}
                    to={ReactSession.get("type") ? "/step1" : "#"}
                  >
                    Campaign Info
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("startDate")
                        ? "pointer"
                        : "default",
                    }}
                    to={"/step2"}
                  >
                    Description
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("description")
                        ? "pointer"
                        : "default",
                    }}
                    to={ReactSession.get("description") ? "/step3" : "#"}
                  >
                    Objectives
                  </Link>
                </li>
                <li className="active">
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor: ReactSession.get("primary")
                        ? "pointer"
                        : "default",
                    }}
                    to={"#"}
                  >
                    Requirements
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      fontWeight: "bold",
                      cursor:
                        ReactSession.get("analytics") !== ""
                          ? "pointer"
                          : "default",
                    }}
                    to={ReactSession.get("analytics") !== "" ? "/step5" : "#"}
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <form id="formTwo" onSubmit={onSubmit}>
            <div className="personContent">
              <section className="questionCard container-fluid">
                <div className="container-fluid regCon">
                  <h2>Campaign Requirements</h2>

                  <div className="form-group">
                    <span className="pencil"></span>

                    <input
                      type="text"
                      id="description"
                      autoComplete="off"
                      disabled
                      defaultValue="Requirements"
                    />
                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Media Plan Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={mediaPlan === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeMp(!seeMp);
                            }}
                            onChange={() => {
                              setSeeMp(!seeMp);
                            }}
                          />
                          {seeMp ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetMedia(e);
                                        handleShowMedia();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Web/ App touchpoints required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={webapp === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeWebapp(!seeWebapp);
                            }}
                            onChange={() => {
                              setSeeWebapp(!seeWebapp);
                            }}
                          />
                          {seeWebapp ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetWebapp(e);
                                        handleShowWebapp();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Budget Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Type here"
                            value={budget}
                            onChange={(e) => {
                              setBudget(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Terms & Conditions
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={tnc === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeTnc(!seeTnc);
                            }}
                            onChange={() => {
                              setSeeTnc(!seeTnc);
                            }}
                          />
                          {seeTnc ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetTnc(e);
                                        handleShowTnc();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    {tnc === "Yes" ? (
                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="120"
                          rows="15"
                          value={terms}
                          onChange={(e) => {
                            setTerms(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    ) : (
                      ""
                    )}

                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Creative Assets Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={asset === true ? "New" : "Existing"}
                            onFocus={() => {
                              setSeeAsset(!seeAsset);
                            }}
                            onChange={() => {
                              setSeeAsset(!seeAsset);
                            }}
                          />
                          {seeAsset ? (
                            <div className="edm">
                              <ul>
                                {newExists.map((newExist) => {
                                  return (
                                    <li
                                      key={newExist.id}
                                      onClick={(e) => {
                                        handleSetAsset(e);
                                        handleShowAsset();
                                      }}
                                    >
                                      {newExist.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="creative">
                      <textarea
                        id="content"
                        autoComplete="off"
                        cols="120"
                        rows="9"
                        value={creativeAssets}
                        onChange={(e) => {
                          setCreativeAssets(e.target.value);
                        }}
                      ></textarea>
                      <hr />
                    </div>

                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Copy Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={copy === true ? "New" : "Existing"}
                            onFocus={() => {
                              setSeeCopy(!seeCopy);
                            }}
                            onChange={() => {
                              setSeeCopy(!seeCopy);
                            }}
                          />
                          {seeCopy ? (
                            <div className="edm">
                              <ul>
                                {newExists.map((newExist) => {
                                  return (
                                    <li
                                      key={newExist.id}
                                      onClick={(e) => {
                                        handleSetCopy(e);
                                        handleShowCopy();
                                      }}
                                    >
                                      {newExist.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="creative">
                      <textarea
                        id="content"
                        autoComplete="off"
                        cols="120"
                        rows="9"
                        value={copybrief}
                        onChange={(e) => {
                          setCopybrief(e.target.value);
                        }}
                      ></textarea>
                      <hr />
                    </div>

                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Translation Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={translation === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeTranslate(!seeTranslate);
                            }}
                            onChange={() => {
                              setSeeTranslate(!seeTranslate);
                            }}
                          />
                          {seeTranslate ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetTranslate(e);
                                        handleShowTranslate();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Target Audience Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={audience === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeAudience(!seeAudience);
                            }}
                            onChange={() => {
                              setSeeAudience(!seeAudience);
                            }}
                          />
                          {seeAudience ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetAudience(e);
                                        handleShowAudience();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    {audience === "Yes" ? (
                      <div className="creative">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="120"
                          rows="9"
                          value={targetAudience}
                          onChange={(e) => {
                            setTargetAudience(e.target.value);
                          }}
                        ></textarea>
                        <hr />
                      </div>
                    ) : (
                      ""
                    )}
                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Tracking Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={tracking === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeTracking(!seeTracking);
                            }}
                            onChange={() => {
                              setSeeTracking(!seeTracking);
                            }}
                          />
                          {seeTracking ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetTracking(e);
                                        handleShowTracking();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="row full_field"
                      style={{ marginTop: "28px" }}
                    >
                      <div className="form-group row">
                        <label
                          htmlFor="campaign_type"
                          className="label col-form-label"
                        >
                          Analytics Required
                        </label>
                        <div className="field">
                          <input
                            required
                            autoComplete="nope"
                            type="text"
                            readOnly
                            className="form-control-lg"
                            id="campaign_type"
                            placeholder="Select"
                            value={analytics === true ? "Yes" : "No"}
                            onFocus={() => {
                              setSeeAnalytics(!seeAnalytics);
                            }}
                            onChange={() => {
                              setSeeAnalytics(!seeAnalytics);
                            }}
                          />
                          {seeAnalytics ? (
                            <div className="edm">
                              <ul>
                                {states.map((state) => {
                                  return (
                                    <li
                                      key={state.id}
                                      onClick={(e) => {
                                        handleSetAnalytics(e);
                                        handleShowAnalytics();
                                      }}
                                    >
                                      {state.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    {analytics === "Yes" ? (
                      <div className="creative">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="120"
                          rows="9"
                          value={targetAnalytics}
                          onChange={(e) => {
                            setTargetAnalytics(e.target.value);
                          }}
                        ></textarea>
                        <hr />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {analytics === "yes" ? <hr /> : ""}
                </div>
              </section>
            </div>
            <div className="personContent">
              <section
                className="buttonCard"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button type="button" className="btn-vori">
                  <Link to="/step3">Go Back</Link>
                </button>
                {analytics !== "" &&
                tracking !== "" &&
                audience !== "" &&
                translation !== "" &&
                copy !== "" &&
                asset !== "" &&
                budget !== "" &&
                tnc !== "" &&
                webapp !== "" &&
                mediaPlan !== "" ? (
                  <button type="submit" className="btn-vori">
                    Next
                  </button>
                ) : (
                  <button type="button" disabled className="btn-vori">
                    Next
                  </button>
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
            background-color: #3c217b;
          }
          @media screen and (max-width: 768px) {
            .wrap {
              padding: 0;
            }
          }
          /* ============== PROCESS BAR ON TOP ============== */
          .wrap .Q1title {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: auto;
            font-size: 16px;
            color: #484848;
            padding: 0px;
            text-align: center;
            margin: 0px auto;
          }

          #msform {
            width: 100%;
            margin: 30px auto 0px;
            text-align: center;
            position: relative;
          }

          #progressbar {
            margin-bottom: 30px;
            overflow: hidden;
            counter-reset: step;
          }
          #progressbar li {
            list-style-type: none;
            color: white;
            text-transform: uppercase;
            font-size: 11px;
            width: 100px;
            float: left;
            position: relative;
          }
          #progressbar li:before {
            content: counter(step);
            counter-increment: step;
            width: 40px;
            line-height: 40px;
            display: block;
            font-size: 16px;
            color: #333;
            background: white;
            border-radius: 3px;
            margin: 0 auto 5px auto;
          }

          #progressbar li:after {
            content: "";
            width: 100%;
            height: 2px;
            background: white;
            position: absolute;
            left: -50%;
            top: 9px;
            z-index: -1; /*put it behind the numbers*/
          }
          #progressbar li:first-child:after {
            content: none;
          }
          #progressbar li a {
            color: white;
          }

          #progressbar li.active:before,
          #progressbar li.active:after {
            background: #817eff;
            color: white;
          }

          @media screen and (max-width: 768px) {
            .wrap .Q1title {
              width: 100%;
              padding: 0px 0px 0px 0px;
            }
            #progressbar li {
              list-style-type: none;
              color: white;
              font-size: 10px;
              width: 80px;
              float: left;
              position: relative;
            }
            #progressbar li:before {
              width: 25px;
              line-height: 25px;
              font-size: 12px;
              color: #333;
              margin: 0 auto 5px auto;
            }
          }
          /* ========== DROPDOWN ==========*/
          .label {
            width: 250px;
            margin-right: 15px;
            font-weight: 600;
          }

          .field {
            width: 290px;
          }
          .field input[type="text"] {
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
            border-radius: 7px;
            font-family: sans-serif;
          }
          .edm {
            position: absolute;
            z-index: 2000;
            width: 96%;
            display: block;
            height: 250px;
            overflow: scroll;
            z-index: 5000;
          }
          .edm ul {
            position: relative;
            margin: 0px;
            padding: 0;
            width: 98%;
          }

          .edm ul li {
            background-color: #f4f5f6;
            text-decoration: none;
            cursor: pointer;
            list-style-type: none;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #dadada;
            border-left: 2px solid #dadada;
            border-right: 2px solid #dadada;
            padding-left: 18px;
            position: relative;
            width: 290px;
            display: block;
          }

          .edm ul li:hover {
            background-color: white;
            border-left: 3px solid #817eff;
            padding-left: 17px;
          }

          /* ========== NEXT BUTTON ==========*/
          .wrap .buttonCard {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background-color: #3c217b;
            width: 80%;
            margin: 30px auto 30px;
            text-align: center;
          }

          .btn-vori {
            position: relative;
            background-color: #817eff;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: 800;
            width: 200px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
          }

          .btn-vori:disabled {
            background-color: #ddd;
            color: #888;
            cursor: default;
            border: #ddd;
          }

          .btn-vori a {
            color: white;
            font-weight: 800;
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
          }

          @media only screen and (min-width: 768px) {
            .btn-vori {
              width: 200px;
            }
          }

          @media screen and (max-width: 768px) {
            .wrap .buttonCard {
              width: 410px;
              margin: 25px auto;
            }
            input[type="submit"] {
              width: 100%;
            }
          }

          /* ============== CHECKBOX BUTTONS TOP =========== */

          .discountBox {
            display: flex;
            justify-content: space-between;
            background-color: transparent;
            width: 100%;
            position: relative;
          }

          .states_flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: block;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            margin: 1px 0px 0px 80px;
            height: 100%;
            width: 200px;
          }

          .discountBox .checkboxes {
            background-color: #14a248;
            cursor: pointer;
            color: white;
            border: 1px solid #14a248;
            position: relative;
            width: 250px;
            font-size: 16px;
            text-align: center;
            height: 40px;
            margin-top: 18px;
            border-radius: 4px;
            transform: translateX(19%);
            outline: none;
          }

          .discountBox .checkboxes:focus,
          .checkboxes:active {
            outline: none;
          }

          .discountBox input::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input::-moz-placeholder {
            /* Firefox 19+ */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input :-ms-input-placeholder {
            /* IE 10+ */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input:-moz-placeholder {
            /* Firefox 18- */
            color: #555 !important;
            font-weight: bold;
          }
          .discountBox input[type="checkbox"] {
            opacity: 0;
            float: left;
          }

          .discountBox input[type="checkbox"] + label {
            margin: 0 0 0 20px;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            font-family: sans-serif;
            font-weight: 200;
            float: left;
            margin: 0px;
            width: 100%;
            color: #2b2b2b;
            font-weight: 600;
          }
          .discountBox input[type="checkbox"] + label::before {
            content: " ";
            position: relative;
            left: -45px;
            top: 19px;
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
          .discountBox input[type="checkbox"] + label::after {
            content: " ";
            position: absolute;
            left: -50px;
            top: 15px;
            width: 30px;
            height: 30px;
            display: block;
            z-index: 1;
            background: url("./../../images/check.png");
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
          .discountBox input[type="checkbox"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          @keyframes myframes {
            from {
              opacity: 1;
              transform: translateY(-40%);
            }
            to {
              opacity: 1;
              transform: translateY(0%);
            }
          }

          /* ============== CHECKBOX BUTTON BOTTOM =========== */

          .full_field input[type="checkbox"] {
            visibility: hidden;
          }
          .full_field input[type="checkbox"] + label {
            height: 52px;
            position: relative;
            cursor: pointer;
            font-size: 16px;
            font-family: sans-serif;
            float: left;
            width: 260px;
            margin-left: 60px;
            color: #2b2b2b;
            font-weight: 600;
            transform: translateY(10px);
          }
          .full_field input[type="checkbox"] + label::before {
            content: " ";
            position: relative;
            left: -55px;
            top: 22px;
            width: 32px;
            height: 32px;
            display: block;
            background: white;
            border-radius: 4px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .full_field input[type="checkbox"] + label::after {
            content: " ";
            position: absolute;
            left: -53px;
            top: 26px;
            width: 29px;
            height: 29px;
            display: block;
            z-index: 1;
            background: url("./../../images/check.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            -webkit-transition: all 0.2s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          .full_field input[type="checkbox"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          /* ============== RADIO BUTTON =========== */

          input[type="radio"] {
            visibility: hidden;
          }
          input[type="radio"] + label {
            height: 52px;
            position: relative;
            cursor: pointer;
            font-size: 16px;
            font-family: sans-serif;
            font-weight: 500;
            float: left;
            width: 210px;
            margin-left: 60px;
            color: #2b2b2b;
            font-weight: 500;
            transform: translateY(10px);
          }
          input[type="radio"] + label::before {
            content: " ";
            position: relative;
            left: -55px;
            top: 22px;
            width: 32px;
            height: 32px;
            display: block;
            background: white;
            border-radius: 4px;
            -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
          }

          input[type="radio"] + label::after {
            content: " ";
            position: absolute;
            left: -53px;
            top: 26px;
            width: 29px;
            height: 29px;
            display: block;
            z-index: 1;
            background: url("./../../images/check.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            -webkit-transition: all 0.2s ease;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
          }
          input[type="radio"]:checked + label::after {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
          }

          /* ============== CONTENT SECTION (HERO) =========== */

          .wrap .full_field .row {
            position: relative;
            top: 8%;
            width: 100%;
            left: 3%;
          }

          .wrap .full_field .col-form-label {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-top: calc(0.375rem + 1px);
            padding-bottom: calc(0.375rem + 1px);
            padding-right: 0;
            padding-left: 15px;
            font-family: sans-serif;
          }

          .wrap .full_field .column {
            width: 725px;
            margin-left: 45px;
          }

          .wrap .full_field input[type="email"],
          .wrap .full_field input[type="text"] {
            height: 42px;
            border-radius: 0px;
            text-decoration: none;
            outline: none !important;
            background: none;
            border: 1px solid #dadada;
            padding: 12px 15px;
            font-weight: 500;
            width: 100%;
            font-size: 14px;
            color: #2b2b2b;
            border-radius: 7px;
            font-family: sans-serif;
          }

          /* ============== QUESTION CARD CONTENT =========== */

          .wrap .personContent {
            width: 90%;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }

          .wrap .questionCard {
            width: 80%;
            padding: 30px 20px;
            margin: 20px auto 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 7px;
            background: #fff;
          }
          .wrap .questionCard h2 {
            font-weight: 800;
            font-size: 28px;
            width: 650px;
            margin-top: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
            color: #2b2b2b;
          }
          .wrap .questionCard h3 {
            background-color: #817eff;
            color: white;
            font-size: 23px;
            font-weight: 800;
            text-align: center;
            line-height: 45px;
            height: 45px;
          }

          .form-group .workhistory textarea {
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-size: 12px;
            line-height: 1.5;
            color: #2b2b2b;
            font-weight: 500;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #dadada;
            height: 400px;
            outline: 0;
            border-radius: 7px;
          }
          .form-group .creative textarea {
            display: block;
            width: 100%;
            outline: 0;
            border-radius: 7px;
            color: #2b2b2b;
            font-weight: 500;
            border: 1px solid #dadada;
            padding: 0.375rem 0.75rem;
          }

          input[type="text"] {
            height: 42px;
            text-decoration: none;
            outline: none;
            background: none;
            border: none;
            border-bottom: 2px solid #dadada;
            font-weight: 500;
            width: 295px;
            font-size: 14px;
            color: #2b2b2b;
            font-family: sans-serif;
            font-weight: 800;
          }

          .pencil {
            background-image: url("./../../images/pencil.png");
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-size: 26px;
          }

          .form-group span {
            height: 27px;
            width: 27px;
            display: inline-block;
          }

          .questionCard .form-group h2 {
            font-size: 20px;
            margin-bottom: 0px;
            margin-top: 30px;
          }

          .questionCard .form-group #description {
            font-size: 20px;
            margin-bottom: 0px;
            margin-top: 20px;
            border: none;
            color: #2b2b2b;
            font-weight: 800;
          }
          #content {
            white-space: pre-wrap;
          }

          .container1,
          .container2,
          .container3,
          .container4 {
            position: relative;
          }

          .regCon {
            width: 90% !important;
            padding: 20px 0;
          }

          @media screen and (max-width: 768px) {
            .wrap .questionCard {
              margin: 0 auto;
              width: 440px;
            }
            .wrap .personContent {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
            }
            .wrap .questionCard h2 {
              font-weight: 800;
              font-size: 22px;
            }
          }

          .btn-vori:active,
          .btn-vori:focus {
            color: white;
            border: 1px solid #817eff;
            outline: none;
            border: none;
          }

          @media screen and (max-width: 768px) {
            .wrap .questionCard {
              margin: 0;
              width: 450px;
              margin: 0px auto;
              display: block;
            }
            input[type="text"] {
              width: 170px;
              font-size: 13px;
            }

            #description {
              width: 265px;
            }

            form .btn-save {
              width: 450px;
              margin: 25px;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Step4;
