import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { ExternalLink } from "react-external-link";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Brief = () => {
  const user = useSelector((state) => state.userInfo.value);
  const { pathname } = useLocation();
  const ticketId = pathname.split("/")[2];

  // CONTENT 1 HERO
  const [greeting, setGreeting] = useState("");
  const [customise, setCustomise] = useState("");
  const [content, setContent] = useState("");
  const [eyebrow, setEyebrow] = useState("");
  const [mainheading, setMainheading] = useState("");
  const [cta, setCta] = useState("");
  const [ctaUrl, setCtaUrl] = useState("");
  // CONTENT 2
  const [content1, setContent1] = useState("");
  const [resource1Title, setResource1Title] = useState("");
  const [cta1, setCta1] = useState("");
  const [ctaUrl1, setCtaUrl1] = useState("");
  const [content2, setContent2] = useState("");
  const [resource2Title, setResource2Title] = useState("");
  const [cta2, setCta2] = useState("");
  const [ctaUrl2, setCtaUrl2] = useState("");
  // CONTENT 3
  const [campusHeading, setCampusHeading] = useState("");
  const [eyebrowCampus, setEyebrowCampus] = useState("");
  const [contentCampus, setContentCampus] = useState("");
  const [ctaCampus, setCtaCampus] = useState("");
  const [ctaUrlCampus, setCtaUrlCampus] = useState("");
  const [campus1Title, setCampus1Title] = useState("");
  const [campus1Content, setCampus1Content] = useState("");
  const [ctaCampus1, setCtaCampus1] = useState("");
  const [ctaUrlCampus1, setCtaUrlCampus1] = useState("");
  const [campus2Title, setCampus2Title] = useState("");
  const [campus2Content, setCampus2Content] = useState("");
  const [ctaCampus2, setCtaCampus2] = useState("");
  const [ctaUrlCampus2, setCtaUrlCampus2] = useState("");
  // CONTACT US
  const [contactRep, setContactRep] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [contactEmail, setContactEmail] = useState("HCPConnect@sanofi.com");
  const [ctaContactUs, setCtaContactUs] = useState("");
  const [ctaUrlContactUs, setCtaUrlContactUs] = useState("");
  // FOOTER
  const [footerContent, setFooterContent] = useState("");
  const [ctafoot1, setCtaFoot1] = useState("");
  const [ctaUrlFoot1, setCtaUrlFoot1] = useState("");
  const [ctafoot2, setCtaFoot2] = useState("");
  const [ctaUrlFoot2, setCtaUrlFoot2] = useState("");
  const [ctafoot3, setCtaFoot3] = useState("");
  const [ctaUrlFoot3, setCtaUrlFoot3] = useState("");
  const [matcode, setMatcode] = useState("");
  const [date, setDate] = useState("");
  const [socialmedia, setSocialmedia] = useState(true);
  const [lpc, setLpc] = useState(true);
  const [legal, setLegal] = useState(
    "https://www.sanofi.com.au/en/legal-notice"
  );
  const [privacy, setPrivacy] = useState(
    "https://www.sanofi.com.au/en/privacy-policy"
  );
  const [contact, setContact] = useState(
    "https://www.sanofi.com.au/en/contact-us"
  );

  const [identity, setIdentity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const [, setIsloaded] = useState(false);

  // =============== UPLOAD PHOTO HERO ===============
  const [photo, setPhoto] = useState("");
  const [previewImage, setPreviewImage] = useState(false);
  const [imageFacebook, setImageFacebook] = useState(false);
  const [previewText, setPreviewText] = useState(false);
  const [imageHere, setImageHere] = useState("");

  const [, setFile] = useState("");

  const imageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      setPreviewText(true);
      setImageFacebook(true);
      setPreviewImage(true);
      reader.onload = function (event) {
        setImageHere(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // =========== DELETE PHOTO HERO ==================
  const deletePhoto = async () => {
    setPhoto("");
    setImageHere("");
  };

  // =============== UPLOAD PHOTO RESOURCE 1 ===============
  const [photo1, setPhoto1] = useState("");
  const [previewImage1, setPreviewImage1] = useState(false);
  const [imageResource1, setImageResource1] = useState(false);
  const [previewText1, setPreviewText1] = useState(false);
  const [imageHere1, setImageHere1] = useState("");

  const [, setFile1] = useState("");

  const resource1Upload = (event) => {
    const file1 = event.target.files[0];

    if (file1) {
      const reader = new FileReader();
      setPreviewText1(true);
      setImageResource1(true);
      setPreviewImage1(true);
      reader.onload = function (event) {
        setImageHere1(event.target.result);
      };
      reader.readAsDataURL(file1);
    }
  };

  // =========== DELETE PHOTO RESOURCE 1 ==================
  const deletePhoto1 = async () => {
    setPhoto1("");
    setImageHere1("");
  };

  // =============== UPLOAD PHOTO RESOURCE 2 ===============
  const [photo2, setPhoto2] = useState("");
  const [previewImage2, setPreviewImage2] = useState(false);
  const [imageResource2, setImageResource2] = useState(false);
  const [previewText2, setPreviewText2] = useState(false);
  const [imageHere2, setImageHere2] = useState("");

  const [, setFile2] = useState("");

  const resource2Upload = (event) => {
    const file2 = event.target.files[0];
    if (file2) {
      const reader = new FileReader();
      setPreviewText2(true);
      setImageResource2(true);
      setPreviewImage2(true);
      reader.onload = function (event) {
        setImageHere2(event.target.result);
      };
      reader.readAsDataURL(file2);
    }
  };

  // =========== DELETE PHOTO RESOURCE 2 ==================
  const deletePhoto2 = async () => {
    setPhoto2("");
    setImageHere2("");
  };

  // =============== UPLOAD PHOTO CAMPUS 3 ===============
  const [photo3, setPhoto3] = useState("");
  const [previewImage3, setPreviewImage3] = useState(false);
  const [imageResource3, setImageResource3] = useState(false);
  const [previewText3, setPreviewText3] = useState(false);
  const [imageHere3, setImageHere3] = useState("");

  const [, setFile3] = useState("");

  const campusUpload = (event) => {
    const file3 = event.target.files[0];
    if (file3) {
      const reader = new FileReader();
      setPreviewText3(true);
      setImageResource3(true);
      setPreviewImage3(true);
      reader.onload = function (event) {
        setImageHere3(event.target.result);
      };
      reader.readAsDataURL(file3);
    }
  };

  // =========== DELETE PHOTO CAMPUS ==================
  const deleteCampus = async () => {
    setPhoto3("");
    setImageHere3("");
  };

  // ============ PROFILE DATA ===========
  useEffect(() => {
    setIsloaded(false);
    const fetchData = async () => {
      axios
        .get(
          process.env.REACT_APP_BACKEND_URL + "api/briefs/profile/" + ticketId
        )
        .then((response) => {
          if (response.status === 200) {
            setIdentity(response.data._id);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setPhone(response.data.phone);
            setIdPhoto(response.data.filename);
            setIsloaded(true);
          }
        });
    };
    fetchData();
  }, []);

  // ========== ALERT MESSAGE ===============
  const [updateNote, setUpdateNote] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function outPutErrorMessagesInAllusers(errorMessage) {
    setAlert(true);
    window.scrollTo({
      top: 60,
      behavior: "smooth",
    });
    setAlertMsg(errorMessage);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_BACKEND_URL + "api/briefs/updateBrief", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: identity,
        nanoId: user.nanoId,
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        phone: phone,
        photo: idPhoto,
        greeting: greeting,
        customise: customise,
        content: content,
        eyebrow: eyebrow,
        mainheading: mainheading,
        cta: cta,
        ctaUrl: ctaUrl,
        content1: content1,
        resource1Title: resource1Title,
        cta1: cta1,
        ctaUrl1: ctaUrl1,
        content2: content2,
        resource2Title: resource2Title,
        cta2: cta2,
        ctaUrl2: ctaUrl2,
        campusHeading: campusHeading,
        eyebrowCampus: eyebrowCampus,
        contentCampus: contentCampus,
        ctaCampus: ctaCampus,
        ctaUrlCampus: ctaUrlCampus,
        campus1Title: campus1Title,
        campus1Content: campus1Content,
        ctaCampus1: ctaCampus1,
        ctaUrlCampus1: ctaUrlCampus1,
        campus2Title: campus2Title,
        campus2Content: campus2Content,
        ctaCampus2: ctaCampus2,
        ctaUrlCampus2: ctaUrlCampus2,
        contactRep: contactRep,
        contactUs: contactUs,
        contactEmail: contactEmail,
        ctaUrlContactUs: ctaUrlContactUs,
        ctaContactUs: ctaContactUs,
        footerContent: footerContent,
        ctafoot1: ctafoot1,
        ctaUrlFoot1: ctaUrlFoot1,
        ctafoot2: ctafoot2,
        ctaUrlFoot2: ctaUrlFoot2,
        ctafoot3: ctafoot3,
        ctaUrlFoot3: ctaUrlFoot3,
        matcode: matcode,
        date: date,
        socialmedia: socialmedia,
        lpc: lpc,
        legal: legal,
        privacy: privacy,
        contact: contact,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInAllusers(data.invalid);
        } else {
          setUpdateNote(true);
          setAlert(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setTimeout(function () {
            setUpdateNote(false);
          }, 2000);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // ============ PROFILE DATA ===========

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "api/briefs/profilePreview/" +
          ticketId
      )
      .then((response) => {
        if (response.status === 200) {
          setGreeting(response.data.greeting);
          setCustomise(response.data.customise);
          setContent(response.data.content);
          setEyebrow(response.data.eyebrow);
          setMainheading(response.data.mainheading);
          setCta(response.data.cta);
          setCtaUrl(response.data.ctaUrl);
          setContent1(response.data.content1);
          setResource1Title(response.data.resource1Title);
          setCta1(response.data.cta1);
          setCtaUrl1(response.data.ctaUrl1);
          setContent2(response.data.content2);
          setResource2Title(response.data.resource2Title);
          setCta2(response.data.cta2);
          setCtaUrl2(response.data.ctaUrl2);
          setCampusHeading(response.data.campusHeading);
          setEyebrowCampus(response.data.eyebrowCampus);
          setContentCampus(response.data.contentCampus);
          setCtaCampus(response.data.ctaCampus);
          setCtaUrlCampus(response.data.ctaUrlCampus);
          setCampus1Title(response.data.campus1Title);
          setCampus1Content(response.data.campus1Content);
          setCtaCampus1(response.data.ctaCampus1);
          setCtaUrlCampus1(response.data.ctaUrlCampus1);
          setCampus2Title(response.data.campus2Title);
          setCampus2Content(response.data.campus2Content);
          setCtaCampus2(response.data.ctaCampus2);
          setCtaUrlCampus2(response.data.ctaUrlCampus2);
          setContactRep(response.data.contactRep);
          setContactUs(response.data.contactUs);
          setContactEmail(response.data.contactEmail);
          setCtaContactUs(response.data.ctaContactUs);
          setCtaUrlContactUs(response.data.ctaUrlContactUs);
          setFooterContent(response.data.setFooterContent);
          setCtaFoot1(response.data.ctafoot1);
          setCtaUrlFoot1(response.data.ctaUrlFoot1);
          setCtaFoot2(response.data.ctafoot2);
          setCtaUrlFoot2(response.data.ctaUrlFoot2);
          setCtaFoot3(response.data.ctafoot3);
          setCtaUrlFoot3(response.data.ctaUrlFoot3);
          setMatcode(response.data.matcode);
          setDate(response.data.date);
          setSocialmedia(response.data.socialmedia);
          setLpc(response.data.lpc);
          setLegal(response.data.legal);
          setPrivacy(response.data.privacy);
          setContact(response.data.contact);
        }
      });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Content | Sanofi Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta name="description" content="Sanofi" />
        </Helmet>

        <LoggedInNavbar />
        <div className="brief_details">
          <Link to="/dashboard">Back to my Dashboard</Link>
          <h2>Content</h2>
        </div>
        <div className="wrap">
          {updateNote && (
            <section className="updateNote container-fluid">
              <div className="container-fluid ">
                <img src="/images/tick.png" width="12px" alt="" />
                <span>Your details have been updated</span>
              </div>
            </section>
          )}
          <div className="divider">
            <div className="personContent">
              <div className="threeItem">
                <div>
                  <ExternalLink
                    href={
                      process.env.REACT_APP_BACKEND_URL +
                      `api/briefs/edit/${ticketId}`
                    }
                    target="_self"
                  >
                    Brief Type
                  </ExternalLink>
                </div>
                <div>
                  <Link to="#">Content</Link>
                </div>
                <div>
                  <ExternalLink
                    href={
                      process.env.REACT_APP_BACKEND_URL +
                      `api/briefs/preview/${ticketId}`
                    }
                    target="_self"
                  >
                    Preview Brief
                  </ExternalLink>
                </div>
              </div>
            </div>
            <div className="allQuestionCards">
              <form id="formOne" onSubmit={onSubmit}>
                <section className="questionCard container-fluid">
                  <div className="container-fluid regCon">
                    <h2>Content Block Section 1 (Hero)</h2>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="greeting"
                          className="col-sm-3 col-form-label"
                        >
                          Greeting/ Salutation
                        </label>
                        <div className="col-sm-9">
                          <input
                            id="a"
                            type="radio"
                            name="greeting"
                            value="Dear Dr. Last Name"
                            checked={greeting === "Dear Dr. Last Name" && true}
                            onChange={(e) => {
                              setGreeting(e.target.value);
                              setCustomise("");
                            }}
                          />
                          <label htmlFor="a">Dear Dr. Last Name</label>

                          <input
                            id="b"
                            type="radio"
                            name="greeting"
                            checked={greeting === "Dear First Name" && true}
                            value="Dear First Name"
                            onChange={(e) => {
                              setGreeting(e.target.value);
                              setCustomise("");
                            }}
                          />
                          <label htmlFor="b">Dear First Name</label>

                          <input
                            id="c"
                            type="radio"
                            name="greeting"
                            checked={greeting === "Customise" && true}
                            value="Customise"
                            onChange={(e) => {
                              setGreeting(e.target.value);
                            }}
                          />
                          <label htmlFor="c">Customise</label>
                          {greeting === "Customise" ? (
                            <input
                              type="text"
                              autoComplete="none"
                              className="form-control-lg"
                              id="greeting"
                              name="greeting"
                              required
                              placeholder="Dear Healthcare Professionals"
                              value={customise ? customise : ""}
                              onChange={(e) => {
                                setCustomise(e.target.value);
                              }}
                              style={{ marginTop: "15px" }}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="eyebrow"
                          className="col-sm-3 col-form-label"
                        >
                          Eyebrow Text
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="eyebrow"
                            name="eyebrow"
                            value={eyebrow ? eyebrow : ""}
                            onChange={(e) => {
                              setEyebrow(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor="heading"
                          className="col-sm-3 col-form-label"
                        >
                          Main Heading
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="heading"
                            name="heading"
                            value={mainheading ? mainheading : ""}
                            onChange={(e) => {
                              setMainheading(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Description"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={content}
                          onChange={(e) => {
                            setContent(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="cta"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="cta"
                            className="form-control-lg"
                            id="cta"
                            value={cta ? cta : ""}
                            onChange={(e) => {
                              setCta(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-url"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="ctaUrl"
                            className="form-control-lg"
                            id="cta-url"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrl ? ctaUrl : ""}
                            onChange={(e) => {
                              setCtaUrl(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="bigHead">
                        <figure id="imagePreview">
                          <div id="bin" onClick={deletePhoto}>
                            <input
                              type="button"
                              id="embedBin"
                              style={{ visibility: "hidden" }}
                            />
                          </div>

                          {previewImage ? (
                            <img
                              src={imageHere}
                              alt=""
                              name="imageFile"
                              id="image-preview"
                            />
                          ) : (
                            ""
                          )}
                          {imageFacebook ? (
                            ""
                          ) : (
                            <>
                              <img
                                src={photo}
                                alt=""
                                name="image-File"
                                id="image-File"
                              />
                            </>
                          )}
                          {previewText ? "" : <span id="text-preview"></span>}
                        </figure>
                        <div className="rp">
                          <h4 style={{ fontWeight: "800", fontSize: "20px" }}>
                            Hero Image
                          </h4>
                          <span className="ex">
                            JPG, JPEG, PNG and GIF files only, max. file size:
                            60kb
                          </span>
                          <br />
                          <div className="buttonsEven">
                            <label htmlFor="photoUpload" className="upload-btn">
                              Upload Image
                            </label>
                            <input
                              type="file"
                              accept="image/gif, image/jpeg, image/jpg, image/png, .doc,.docx, application/pdf"
                              className="form-control-file headUp"
                              id="photoUpload"
                              onChange={(event) => {
                                imageUpload(event);
                                setFile(event.target.files[0]);
                              }}
                              name="sanofiFile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h2>Content Block Section 2 (Content List)</h2>
                    <h3>Resource 1</h3>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="content-title"
                          className="col-sm-3 col-form-label"
                        >
                          Content Title
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="content-title"
                            value={resource1Title ? resource1Title : ""}
                            onChange={(e) => {
                              setResource1Title(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Description"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={content1}
                          onChange={(e) => {
                            setContent1(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="cta"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="cta"
                            className="form-control-lg"
                            id="cta"
                            value={cta1 ? cta1 : ""}
                            onChange={(e) => setCta1(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-url"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="ctaUrl"
                            className="form-control-lg"
                            id="cta-url"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrl1 ? ctaUrl1 : ""}
                            onChange={(e) => setCtaUrl1(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="bigHead">
                        <figure id="imagePreview">
                          <div id="bin" onClick={deletePhoto1}>
                            <input
                              type="button"
                              id="embedBin"
                              style={{ visibility: "hidden" }}
                            />
                          </div>

                          {previewImage1 ? (
                            <img
                              src={imageHere1}
                              alt=""
                              name="imageFile"
                              id="image-preview"
                            />
                          ) : (
                            ""
                          )}
                          {imageResource1 ? (
                            ""
                          ) : (
                            <>
                              <img
                                src={photo1}
                                alt=""
                                name="image-File"
                                id="image-File"
                              />
                            </>
                          )}
                          {previewText1 ? "" : <span id="text-preview"></span>}
                        </figure>
                        <div className="rp">
                          <h4 style={{ fontWeight: "800", fontSize: "20px" }}>
                            Image
                          </h4>
                          <span className="ex">
                            JPG, JPEG, PNG and GIF files only, max. file size:
                            60kb
                          </span>
                          <br />
                          <div className="buttonsEven">
                            <label htmlFor="fotoUpload" className="upload-btn">
                              Upload Image
                            </label>
                            <input
                              type="file"
                              accept="image/gif, image/jpeg, image/jpg, image/png, .doc,.docx, application/pdf"
                              className="form-control-file headUp"
                              id="fotoUpload"
                              onChange={(event) => {
                                resource1Upload(event);
                                setFile1(event.target.files[0]);
                              }}
                              name="sanofiFile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3>Resource 2</h3>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="content-title"
                          className="col-sm-3 col-form-label"
                        >
                          Content Title
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="content-title"
                            name="ontent2Title"
                            value={resource2Title ? resource2Title : ""}
                            onChange={(e) => {
                              setResource2Title(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Description"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={content2}
                          onChange={(e) => {
                            setContent2(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="cta"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="cta"
                            className="form-control-lg"
                            id="cta"
                            value={cta2 ? cta2 : ""}
                            onChange={(e) => {
                              setCta2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-url"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="ctaUrl"
                            className="form-control-lg"
                            id="cta-url"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrl2 ? ctaUrl2 : ""}
                            onChange={(e) => setCtaUrl2(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="bigHead">
                        <figure id="imagePreview">
                          <div id="bin" onClick={deletePhoto2}>
                            <input
                              type="button"
                              id="embedBin"
                              style={{ visibility: "hidden" }}
                            />
                          </div>

                          {previewImage2 ? (
                            <img
                              src={imageHere2}
                              alt=""
                              name="imageFile"
                              id="image-preview"
                            />
                          ) : (
                            ""
                          )}
                          {imageResource2 ? (
                            ""
                          ) : (
                            <>
                              <img
                                src={photo2}
                                alt=""
                                name="image-File"
                                id="image-File"
                              />
                            </>
                          )}
                          {previewText2 ? "" : <span id="text-preview"></span>}
                        </figure>
                        <div className="rp">
                          <h4 style={{ fontWeight: "800", fontSize: "20px" }}>
                            Image
                          </h4>
                          <span className="ex">
                            JPG, JPEG, PNG and GIF files only, max. file size:
                            60kb
                          </span>
                          <br />
                          <div className="buttonsEven">
                            <label htmlFor="fotoOpladen" className="upload-btn">
                              Upload Image
                            </label>
                            <input
                              type="file"
                              accept="image/gif, image/jpeg, image/jpg, image/png, .doc,.docx, application/pdf"
                              className="form-control-file headUp"
                              id="fotoOpladen"
                              onChange={(event) => {
                                resource2Upload(event);
                                setFile2(event.target.files[0]);
                              }}
                              name="sanofiFile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h2>Content Block Section 3 (Campus)</h2>

                    <div className="full_field row">
                      <div className="form-group row">
                        <label
                          htmlFor="eyebrowCampus"
                          className="col-sm-3 col-form-label"
                        >
                          Eyebrow Text
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="eyebrowCampus"
                            value={eyebrowCampus ? eyebrowCampus : ""}
                            onChange={(e) => {
                              setEyebrowCampus(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="campusHeading"
                          className="col-sm-3 col-form-label"
                        >
                          Section Heading
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="campusHeading"
                            value={campusHeading ? campusHeading : ""}
                            onChange={(e) => {
                              setCampusHeading(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Description"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={contentCampus}
                          onChange={(e) => {
                            setContentCampus(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="ctaCampus"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="ctaCampus"
                            value={ctaCampus ? ctaCampus : ""}
                            onChange={(e) => {
                              setCtaCampus(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-urlCampus"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta-urlCampus"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrlCampus ? ctaUrlCampus : ""}
                            onChange={(e) => {
                              setCtaUrlCampus(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="bigHead">
                        <figure id="imagePreview">
                          <div id="bin" onClick={deleteCampus}>
                            <input
                              type="button"
                              id="embedBin"
                              style={{ visibility: "hidden" }}
                            />
                          </div>

                          {previewImage3 ? (
                            <img
                              src={imageHere3}
                              alt=""
                              name="imageFile"
                              id="image-preview"
                            />
                          ) : (
                            ""
                          )}
                          {imageResource3 ? (
                            ""
                          ) : (
                            <>
                              <img
                                src={photo3}
                                alt=""
                                name="image-File"
                                id="image-File"
                              />
                            </>
                          )}
                          {previewText3 ? "" : <span id="text-preview"></span>}
                        </figure>
                        <div className="rp">
                          <h4 style={{ fontWeight: "800", fontSize: "20px" }}>
                            Hero Image
                          </h4>
                          <span className="ex">
                            JPG, JPEG, PNG and GIF files only, max. file size:
                            60kb
                          </span>
                          <br />
                          <div className="buttonsEven">
                            <label
                              htmlFor="campusUpload"
                              className="upload-btn"
                            >
                              Upload Image
                            </label>
                            <input
                              type="file"
                              accept="image/gif, image/jpeg, image/jpg, image/png, .doc,.docx, application/pdf"
                              className="form-control-file headUp"
                              id="campusUpload"
                              onChange={(event) => {
                                campusUpload(event);
                                setFile3(event.target.files[0]);
                              }}
                              name="sanofiFile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3>Campus Sub Content 1</h3>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="content-title"
                          className="col-sm-3 col-form-label"
                        >
                          Content Title
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="content-title"
                            value={campus1Title ? campus1Title : ""}
                            onChange={(e) => {
                              setCampus1Title(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Description"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={campus1Content}
                          onChange={(e) => {
                            setCampus1Content(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="cta"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            name="cta"
                            className="form-control-lg"
                            id="cta"
                            value={ctaCampus1 ? ctaCampus1 : ""}
                            onChange={(e) => {
                              setCtaCampus1(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-urlCampus1"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta-urlCampus1"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrlCampus1 ? ctaUrlCampus1 : ""}
                            onChange={(e) => setCtaUrlCampus1(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3>Campus Sub Content 2</h3>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="content-title"
                          className="col-sm-3 col-form-label"
                        >
                          Content Title
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="content-title"
                            value={campus2Title ? campus2Title : ""}
                            onChange={(e) => {
                              setCampus2Title(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Description"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={campus2Content}
                          onChange={(e) => {
                            setCampus2Content(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="cta"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta"
                            value={ctaCampus2 ? ctaCampus2 : ""}
                            onChange={(e) => {
                              setCtaCampus2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-urlCampus2"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta-urlCampus2"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrlCampus2 ? ctaUrlCampus2 : ""}
                            onChange={(e) => setCtaUrlCampus2(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h2>Contact us</h2>
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          {contactRep ? (
                            <>
                              <input
                                id="ae"
                                type="checkbox"
                                checked={contactRep}
                                onChange={(e) => {
                                  setContactRep(e.target.checked);
                                }}
                              />
                              <label htmlFor="ae">
                                Personalised ISP section included
                              </label>
                            </>
                          ) : (
                            <>
                              <input
                                id="ae"
                                type="checkbox"
                                checked={false}
                                onChange={(e) => {
                                  setContactRep(e.target.checked);
                                }}
                              />
                              <label htmlFor="ae">
                                Personalised ISP section included
                              </label>
                            </>
                          )}

                          {contactUs ? (
                            <>
                              <input
                                id="be"
                                type="checkbox"
                                checked={contactUs}
                                onChange={(e) => {
                                  setContactUs(e.target.checked);
                                }}
                              />
                              <label htmlFor="be">
                                Contact us section included
                              </label>
                            </>
                          ) : (
                            <>
                              <input
                                id="be"
                                type="checkbox"
                                checked={false}
                                onChange={(e) => {
                                  setContactUs(e.target.checked);
                                }}
                              />
                              <label htmlFor="be">
                                Contact us section included
                              </label>
                            </>
                          )}
                        </div>
                        {contactUs === true ? (
                          <div className="row full_field">
                            <div className="form-group row">
                              <label
                                htmlFor="contact_email"
                                className="col-sm-3 col-form-label"
                              >
                                Contact Us Email
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="email"
                                  autoComplete="none"
                                  className="form-control-lg"
                                  id="contact_email"
                                  required
                                  value={contactEmail ? contactEmail : ""}
                                  onChange={(e) => {
                                    setContactEmail(e.target.value);
                                  }}
                                  style={{ marginTop: "15px" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="cta_contactus"
                                className="col-sm-3 col-form-label"
                              >
                                Call To Action
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  autoComplete="nope"
                                  className="form-control-lg"
                                  id="cta_contactus"
                                  value={ctaContactUs ? ctaContactUs : ""}
                                  onChange={(e) => {
                                    setCtaContactUs(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="cta-url"
                                className="col-sm-3 col-form-label"
                              >
                                Call To Action URL
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  autoComplete="nope"
                                  name="ctaUrl"
                                  className="form-control-lg"
                                  id="cta-url"
                                  placeholder="https://www.sanofi.com"
                                  value={ctaUrlContactUs ? ctaUrlContactUs : ""}
                                  onChange={(e) =>
                                    setCtaUrlContactUs(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <hr />
                    <h2>Footer Copyright</h2>
                    <div className="form-group">
                      <span className="pencil"></span>

                      <input
                        type="text"
                        id="description"
                        autoComplete="off"
                        disabled
                        defaultValue="Product Information"
                      />

                      <div className="workhistory">
                        <textarea
                          id="content"
                          autoComplete="off"
                          cols="90"
                          rows="9"
                          value={footerContent}
                          onChange={(e) => {
                            setFooterContent(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="ctafoot1"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action #1
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="ctafoot1"
                            value={ctafoot1 ? ctafoot1 : ""}
                            onChange={(e) => {
                              setCtaFoot1(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-urlfoot1"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL #1
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta-urlfoot1"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrlFoot1 ? ctaUrlFoot1 : ""}
                            onChange={(e) => setCtaUrlFoot1(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="ctafoot2"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action #2
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="ctafoot2"
                            value={ctafoot2 ? ctafoot2 : ""}
                            onChange={(e) => {
                              setCtaFoot2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-urlFoot2"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL #2
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta-urlFoot2"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrlFoot2 ? ctaUrlFoot2 : ""}
                            onChange={(e) => setCtaUrlFoot2(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <label
                          htmlFor="ctafoot3"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action #3
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="ctafoot3"
                            value={ctafoot3 ? ctafoot3 : ""}
                            onChange={(e) => {
                              setCtaFoot3(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="cta-urlFoot2"
                          className="col-sm-3 col-form-label"
                        >
                          Call To Action URL #3
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="cta-urlFoot3"
                            placeholder="https://www.sanofi.com"
                            value={ctaUrlFoot3 ? ctaUrlFoot3 : ""}
                            onChange={(e) => setCtaUrlFoot3(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="mat"
                          className="col-sm-3 col-form-label"
                        >
                          MAT Code
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="mat"
                            placeholder="MAT-AU-XXXXXXXv1"
                            value={matcode ? matcode : ""}
                            onChange={(e) => setMatcode(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="date"
                          className="col-sm-3 col-form-label"
                        >
                          Date Prepared
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            autoComplete="nope"
                            className="form-control-lg"
                            id="date"
                            placeholder="April 2024"
                            value={date ? date : ""}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row full_field">
                      <div className="form-group row">
                        <div className="col-sm-9">
                          {socialmedia ? (
                            <>
                              <input
                                id="sm"
                                type="checkbox"
                                checked={socialmedia}
                                onChange={(e) => {
                                  setSocialmedia(e.target.checked);
                                }}
                              />
                              <label htmlFor="sm">Social Media included</label>
                            </>
                          ) : (
                            <>
                              <input
                                id="sm"
                                type="checkbox"
                                checked={false}
                                onChange={(e) => {
                                  setSocialmedia(e.target.checked);
                                }}
                              />
                              <label htmlFor="sm">Social Media included</label>
                            </>
                          )}

                          {lpc ? (
                            <>
                              <input
                                id="lpc"
                                type="checkbox"
                                checked={lpc}
                                onChange={(e) => {
                                  setLpc(e.target.checked);
                                }}
                              />
                              <label htmlFor="lpc">
                                Legal, Privacy & Contact us included
                              </label>
                            </>
                          ) : (
                            <>
                              <input
                                id="lpc"
                                type="checkbox"
                                checked={false}
                                onChange={(e) => {
                                  setLpc(e.target.checked);
                                }}
                              />
                              <label htmlFor="lpc">
                                Legal, Privacy & Contact us included
                              </label>
                            </>
                          )}
                        </div>
                        {lpc === true ? (
                          <div className="row full_field">
                            <div className="form-group row">
                              <label
                                htmlFor="legal"
                                className="col-sm-3 col-form-label"
                              >
                                Legal Notice
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  autoComplete="none"
                                  className="form-control-lg"
                                  id="legal"
                                  required
                                  value={legal ? legal : ""}
                                  onChange={(e) => {
                                    setLegal(e.target.value);
                                  }}
                                  style={{ marginTop: "15px" }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="privacy"
                                className="col-sm-3 col-form-label"
                              >
                                Privacy Policy
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  autoComplete="nope"
                                  className="form-control-lg"
                                  id="privacy"
                                  value={privacy ? privacy : ""}
                                  onChange={(e) => {
                                    setPrivacy(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="contact_footer"
                                className="col-sm-3 col-form-label"
                              >
                                Contact us
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  autoComplete="nope"
                                  className="form-control-lg"
                                  id="contact_footer"
                                  placeholder="https://www.sanofi.com"
                                  value={contact ? contact : ""}
                                  onChange={(e) => setContact(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="buttonCard">
                  <input type="submit" className="btn-vori" value="Update" />
                </section>
              </form>
            </div>
          </div>
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
            padding-top: 60px;
            background-color: #3c217b;
          }
          .wrap .divider {
            display: grid;
            grid-template-columns: 30% 70%;
          }

          .wrap .updateNote {
            width: 80%;
            background-color: #bff4f2;
            margin-bottom: 8px;
            height: 40px;
            line-height: 40px;
            padding: 0px 15px 0px 28px;
            display: block;
          }
          .wrap .updateNote span {
            margin-left: 5px;
          }
          .wrap .alert {
            background-color: #fcebcd;
            margin: 5px auto 12px;
            padding: 7px;
            width: 80%;
          }

          @media screen and (max-width: 768px) {
            .container {
              text-align: center;
            }
            .wrap {
              padding: 10px;
            }
            .wrap .divider {
              display: block;
            }
            .wrap .link-btn {
              margin-top: 16px;
            }
            .row .col-md-6:first-child {
              margin-bottom: 15px;
            }
          }

          /* ============= PERSONAL DETAILS ============== */

          .brief_details {
            margin: 15px auto 25px;
            padding: 10px 440px;
          }

          .brief_details h2 {
            color: #323232;
            font-weight: 500;
            font-size: 32px;
          }
          .brief_details a {
            color: #817eff;
            display: block;
            margin-bottom: 10px;
          }

          .brief_details a:hover {
            color: #817eff;
          }

          @media screen and (max-width: 768px) {
            .brief_details {
              margin: 25px auto;
              padding: 10px 100px;
              text-align: center;
            }
          }

          /* =========== LEFT RAIL ========== */
          .wrap .personContent {
            width: 350px;
            margin: 0 20px;
          }
          .wrap .personContent .threeItem:last-child {
            height: 135px;
          }
          .wrap .personContent .threeItem > div {
            padding: 10px 30px;
            width: 100%;
          }
          .wrap .personContent .threeItem > div:last-child {
            padding: 0px 30px;
            margin-top: 20px;
            border: 1px solid #fff;
            height: 38px;
            border-radius: 4px;
            line-height: 38px;
            text-align: center;
          }
          .wrap .personContent .threeItem > div:last-child:hover {
            border: 1px solid #817eff;
          }
          .wrap .personContent .threeItem > div a:hover {
            color: #817eff;
          }
          .wrap .personContent .threeItem > div a {
            color: #fff;
            font-weight: 800;
            font-size: 22px;
            font-family: sans-serif;
          }
          .wrap .personContent .threeItem > div:hover {
            cursor: pointer;
          }
          @media screen and (max-width: 768px) {
            .wrap .personContent {
              display: block;
              width: 420px;
              margin: 0 auto 30px;
              height: 200px;
            }
            .wrap .personContent .threeItem {
              margin: 0;
              width: 420px;
              margin-bottom: 20px;
              text-align: center;
            }
            .wrap .personContent .threeItem > div {
              width: 100%;
            }
          }

          /* ========= RIGHT RAIL ========== */
          .wrap .allQuestionCards {
            width: 950px;
            padding: 0px 20px;
          }
          .wrap .sectionHeadings h2 {
            font-weight: 800;
            font-size: 24px;
            color: #fff;
            margin-top: 35px;
            margin-bottom: 10px;
            margin-left: 30px;
            width: 100%;
          }
          .regCon {
            width: 85% !important;
            padding: 20px 0;
          }
          .regCon .form-group {
            margin-bottom: 25px;
          }

          .regCon .col-form-label {
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

          @media screen and (max-width: 768px) {
            .allQuestionCards {
              position: relative;
              margin: 0;
              width: 100%;
              display: block;
            }
          }

          /* ============== QUESTION CARD CONTENT =========== */
          .wrap .questionCard {
            position: relative;
            width: 900px;
            min-height: 270px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 0px;
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

          .form-group .workhistory textarea,
          .form-group .workhistory iframe {
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-size: 16px;
            line-height: 1.5;
            color: #2b2b2b;
            font-weight: 500;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ebebeb;
            border-radius: 0px;
            outline: 0;
          }

          .form-group .honour-awards textarea {
            display: block;
            width: 100%;
            height: 200px;
            padding: 0.375rem 0.75rem;
            font-size: 16px;
            line-height: 1.5;
            color: #2b2b2b;
            font-weight: 500;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ebebeb;
            border-radius: 0px;
            outline: 0;
          }

          input[type="text"] {
            height: 42px;
            text-decoration: none;
            outline: none;
            background: none;
            border: none;
            border-bottom: 2px solid #dadada;
            font-weight: 500;
            width: 265px;
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

          /* ============== CHECKBOX BUTTON =========== */

          input[type="checkbox"] {
            visibility: hidden;
          }
          input[type="checkbox"] + label {
            height: 52px;
            position: relative;
            cursor: pointer;
            font-size: 16px;
            font-family: sans-serif;
            font-weight: 500;
            float: left;
            width: 260px;
            margin-left: 60px;
            color: #2b2b2b;
            font-weight: 500;
            transform: translateY(10px);
          }
          input[type="checkbox"] + label::before {
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

          input[type="checkbox"] + label::after {
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
          input[type="checkbox"]:checked + label::after {
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
            border: 2px solid #dadada;
            padding: 12px 15px;
            font-weight: 500;
            width: 100%;
            font-size: 14px;
            color: #2b2b2b;
            font-family: sans-serif;
          }

          .bigHead {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 85%;
            margin: 0 15px;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-bottom: 20px;
          }

          .bigHead #imagePreview {
            width: 250px;
            height: 180px;
            border: 1px solid #ddd;
            margin-top: 15px;
            display: flex;
            justify-content: center;
            background-color: #eee;
            color: #ccc;
            align-items: center;
            overflow: hidden;
            position: relative;
          }
          .bigHead #imagePreview img {
            position: absolute;
            height: 150px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
          }

          .bigHead #bin {
            margin: 4px 0px 0px 1px;
            height: 24px;
            width: 24px;
            cursor: pointer;
            position: relative;
            left: -45%;
            top: -43%;
            border-radius: 2px;
            background-color: #484848;
            background-image: url("./../../images/bin.png");
            background-position: center;
            background-size: 12px;
            background-repeat: no-repeat;
            z-index: 200;
          }

          .bigHead #bin:hover {
            background-color: #2b2b2b;
            cursor: pointer;
          }

          .bigHead #bin:active,
          .bigHead #bin:focus {
            border: none;
            background-color: #2b2b2b;
          }

          .bigHead .rp {
            margin-left: 50px;
          }
          .bigHead .ex {
            margin-bottom: 16px;
            display: inline-block;
          }

          #campusUpload,
          #fotoOpladen,
          #fotoUpload,
          #photoUpload {
            display: none;
          }
          .upload-btn,
          .photo-btn {
            color: #fff;
            width: 130px;
            height: 40px;
            text-align: center;
            line-height: 36px;
            cursor: pointer;
            border: 2px solid #817eff;
            background-color: #817eff;
          }

          .bigHead .buttonsEven {
            display: flex;
            justifycontent: space-evenly;
            width: 60%;
          }

          /* ========== SUBMIT BUTTON ========= */
          .btn-vori {
            position: relative;
            background-color: #817eff;
            color: white;
            cursor: pointer;
            font-weight: 800;
            width: 200px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            margin: 20px 0px 20px 0px;
            border: none;
          }

          @media screen and (max-width: 768px) {
            .wrap .buttonCard {
              width: 450px;
              margin: 25px 30px;
            }
            input[type="submit"] {
              width: 100%;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};

export default Brief;
