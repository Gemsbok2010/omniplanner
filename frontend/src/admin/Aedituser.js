import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import LoggedInNavbarByAdmin from "../components/LoggedInNavbarByAdmin";
import { ReactSession } from "react-client-session";
import { ThreeDots } from "react-loader-spinner";

const Aedituser = () => {
  ReactSession.setStoreType("sessionStorage");
  const { pathname } = useLocation();

  const userid = pathname.split("/")[2];
  const [userInfo, setUserInfo] = useState({});
  const [idPhoto, setIdPhoto] = useState("");
  const [isloading, setIsloading] = useState(false);

  // ============ PROFILE DATA ===========
  useEffect(() => {
    ReactSession.set("customerId", userid);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "api/users/allusers/" + userid)
      .then((response) => {
        if (response.status === 200) {
          setUserInfo(response.data);

          setIdPhoto(response.data.filename);
        }
      });
  }, []);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

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

  //==== ID PHOTO (disable and enable save photo button) ====
  const [savePhoto, setSavePhoto] = useState(false);

  function imageUploadActivateButton() {
    setSavePhoto(true);
  }

  // =============== UPLOAD PHOTO ===============
  const [previewImage, setPreviewImage] = useState(false);
  const [previewText, setPreviewText] = useState(false);
  const [imageFacebook, setImageFacebook] = useState(false);
  const [imageHere, setImageHere] = useState("");

  const [file, setFile] = useState("");

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

  // =========== DELETE PHOTO ==================
  const deletePhoto = async (id) => {
    await fetch(
      process.env.REACT_APP_BACKEND_URL + "api/users/allusers/" + id,
      {
        method: "DELETE",
      }
    ).then((res) => {
      if (res.ok === true) {
        setIdPhoto("");
        setImageHere("");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    fetch(
      process.env.REACT_APP_BACKEND_URL +
        `api/admin/upload?email=${userInfo.email}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInAllusers(data.invalid);
          setAlert(false);
        } else {
          setUpdateNote(true);
          setAlert(false);
          setIdPhoto(data.newImage);
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
        console.error(err);
      });
  };

  // ======= PUT REQUEST TO UPDATE TO AUTHUSERS.JS ======
  const onSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    fetch(process.env.REACT_APP_BACKEND_URL + "api/users/allusers", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phone: userInfo.phone,
        filename: idPhoto,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.invalid) {
          outPutErrorMessagesInAllusers(data.invalid);
          setIsloading(false);
        } else {
          setUpdateNote(true);
          setIsloading(false);
          setAlert(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setUserInfo(data);

          setTimeout(function () {
            setUpdateNote(false);
          }, 2000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Personal Details | Sanofi Omniplanner</title>
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <meta
            name="description"
            content="Sanofi Personal Details for editing"
          />
        </Helmet>
        <LoggedInNavbarByAdmin photo={idPhoto} />
        <div className="personal_details">
          <h2>Personal information</h2>
        </div>
        <div className="wrap">
          <div className="personContent">
            {updateNote ? (
              <section className="updateNote container-fluid">
                <div className="container-fluid ">
                  <img
                    src="/images/tick.png"
                    style={{ width: "12px" }}
                    alt=""
                  />
                  <span>Updated successfully.</span>
                </div>
              </section>
            ) : null}
          </div>

          <form id="formZero" onSubmit={handleSubmit}>
            <div className="personContent">
              <section className="questionCard container-fluid">
                <h2>Photo</h2>
                <div className="container-fluid regCon">
                  <div className="bigHead">
                    <figure id="imagePreview">
                      <div id="bin" onClick={() => deletePhoto(userInfo._id)}>
                        <input
                          type="submit"
                          id="embedBin"
                          style={{ visibility: "hidden" }}
                        />
                      </div>
                      {imageFacebook ? (
                        ""
                      ) : (
                        <>
                          <img
                            src={idPhoto}
                            alt=""
                            name="image-File"
                            id="image-facebook"
                          />
                        </>
                      )}
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

                      {previewText ? "" : <span id="text-preview"></span>}
                    </figure>
                    <div className="rp">
                      <span className="ex">
                        JPG, JPEG, PNG and GIF files only, max. file size: 600kb
                      </span>
                      <br />
                      <div className="buttonsEven">
                        <label htmlFor="photoUpload" className="upload-btn">
                          Upload Photo
                        </label>
                        <input
                          type="file"
                          accept="image/gif, image/jpeg, image/jpg, image/png"
                          className="form-control-file headUp"
                          id="photoUpload"
                          onChange={(event) => {
                            imageUpload(event);
                            imageUploadActivateButton();
                            setFile(event.target.files[0]);
                          }}
                          name="gameFile"
                        />

                        {savePhoto ? (
                          <button
                            style={{
                              backgroundColor: "#817eff",
                              cursor: "pointer",
                              color: "#fff",
                              border: "1px solid #817eff",
                            }}
                            type="submit"
                            id="savePhoto"
                          >
                            Save Photo
                          </button>
                        ) : (
                          <button type="submit" disabled id="savePhoto">
                            Save Photo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
          <form id="formOne" onSubmit={onSubmit}>
            <div className="personContent">
              <section className="middleQuestionCard container-fluid">
                <h2>My Details</h2>
                <div className="container-fluid regCon">
                  <div className="errorMessageHere">
                    {alert ? (
                      <div className="alert">
                        <img
                          src="/images/cross-black.png"
                          style={{ width: "12px" }}
                          alt=""
                        />
                        <span
                          dangerouslySetInnerHTML={{ __html: alertMsg }}
                        ></span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="firstName"
                          className="col-sm-3 col-form-label"
                        >
                          First Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="firstName"
                            name="firstName"
                            autoComplete="none"
                            value={userInfo.firstName ? userInfo.firstName : ""}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="lastName"
                          className="col-sm-3 col-form-label"
                        >
                          Last Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control-lg"
                            id="lastName"
                            name="lastName"
                            autoComplete="none"
                            value={userInfo.lastName ? userInfo.lastName : ""}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="email"
                          className="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            className="form-control-lg"
                            id="email"
                            disabled
                            defaultValue={userInfo.email}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="phone"
                          className="col-sm-3 col-form-label"
                        >
                          Mobile
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            required
                            className="form-control-lg"
                            autoComplete="nope"
                            maxLength="10"
                            minLength="10"
                            placeholder="10-digits number"
                            value={userInfo.phone ? userInfo.phone : ""}
                            id="phone"
                            name="phone"
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="personContent">
              <section className="buttonCard container-fluid">
                {userInfo.lastName && userInfo.firstName ? (
                  !isloading ? (
                    <input type="submit" className="btn-vori" value="Update" />
                  ) : (
                    <button className="btn-vori">
                      <ThreeDots
                        type="ThreeDots"
                        height={40}
                        width={80}
                        color={"white"}
                      />
                    </button>
                  )
                ) : (
                  <button disabled>Update</button>
                )}
              </section>
            </div>
          </form>
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
            background-color: #f4f5f6;
          }

          .btn-vori {
            position: relative;
            background-color: #817eff;
            color: #fff;
            border: 1px solid #817eff;
            font-weight: 800;
            width: 150px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            width: 100%;
            cursor: pointer;
            text-align: center;
            align-items: center;
          }
          .btn-login {
            height: 48px;
            border-radius: 4px;
            width: 100%;
            font-weight: 800;
            font-size: 20px;
            background-color: rgb(165, 206, 15);
            text-align: center;
            box-sizing: border-box;
            margin-top: 0px;
            cursor: pointer;
            padding: 1px auto;
            background-color: #817eff;
            color: #fff;
            border: 1px solid #817eff;
          }

          .buttonCard button {
            position: relative;
            background-color: #ddd;
            color: #888;
            border: 1px solid #ddd;
            font-weight: 800;
            width: 150px;
            height: 50px;
            line-height: 50px;
            outline: none;
            font-size: 20px;
            border-radius: 4px;
            padding: 0;
            width: 100%;
          }

          .regCon {
            width: 85% !important;
            padding: 20px 0;
          }
          .regCon h2 {
            margin-bottom: 20px;
          }
          .regCon .form-group {
            margin-bottom: 25px;
          }

          @media only screen and (min-width: 768px) {
            .wrap {
              padding-top: 60px;
            }
            .buttonCard .btn-vori {
              width: 200px;
              text-align: center;
              background-color: #817eff;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .buttonCard button {
              width: 200px;
            }
          }

          /* ======== POST-SAVE MESSAGE ========== */
          .wrap .personContent {
            width: 90%;
            margin: 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            position: relative;
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

          /* ============= PERSONAL DETAILS ============== */

          .personal_details {
            margin: 25px auto;
            padding: 10px 210px;
          }

          .personal_details h2 {
            color: #323232;
            font-weight: 500;
            font-size: 32px;
          }
          @media screen and (max-width: 768px) {
            .personal_details {
              margin: 25px auto;
              padding: 10px 100px;
              text-align: center;
            }
          }

          /* ========= 頭像照片 =========== */
          .wrap .questionCard {
            width: 80%;
            min-height: 270px;
            padding: 30px 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-top: 40px;
            border-radius: 0px;
            background: #fff;
          }

          .questionCard h2 {
            position: absolute;
            transform: translate(0%, -200%);
            font-weight: 500;
            font-size: 24px;
            width: 440px;
            margin-top: 10px;
            padding-top: 8px;
            padding-bottom: 8px;
            margin-bottom: 40px;
            color: #323232;
          }

          .bigHead {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 85%;
            margin: 0 auto;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #ebebeb;
          }
          .bigHead #savePhoto {
            background-color: #ddd;
            color: #888;
            border: 1px solid #ddd;
            height: 40px;
            margin: 0px auto;
            width: 130px;
            margin-left: 5px;
          }
          .bigHead #savePhoto:active,
          .bigHead #savePhoto:focus {
            outline: none;
          }

          .bigHead #imagePreview {
            width: 150px;
            height: 150px;
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
            left: -42%;
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

          #photoUpload {
            display: none;
          }
          .upload-btn,
          .photo-btn {
            color: #484848;
            width: 130px;
            height: 40px;
            text-align: center;
            line-height: 36px;
            cursor: pointer;
            border: 2px solid #dadada;
            background-color: white;
          }

          .bigHead .buttonsEven {
            display: flex;
            justifycontent: space-evenly;
            width: 60%;
          }

          @media screen and (max-width: 768px) {
            .wrap .questionCard {
              margin: 90px 0px 0px;
              width: 100%;
            }

            .row .col-md-6:first-child {
              margin-bottom: 15px;
            }

            .bigHead .buttonsEven {
              display: block;
            }
            .bigHead #savePhoto {
              margin-left: 0px;
            }

            .bigHead {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
            }
            .bigHead > .rp {
              margin: 0 auto;
              text-align: center;
            }
            .bigHead > .rp .headUp {
              padding-left: 40px;
              margin-top: 10px;
            }
            .bigHead > .rp label {
              display: block;
            }
            .bigHead > .rp .ex {
              display: none;
            }
          }

          /* ============= 基本資料 居住位置 ============== */
          .wrap .bottomQuestionCard,
          .wrap .middleQuestionCard {
            width: 80%;
            min-height: 325px;
            padding: 30px 20px;
            margin-top: 90px;
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

          .wrap .bottomQuestionCard h2,
          .wrap .middleQuestionCard h2 {
            position: absolute;
            font-size: 24px;
            font-weight: 500;
            transform: translate(0%, -260%);
            color: #323232;
          }
          .wrap .middleQuestionCard {
            min-height: 240px;
          }

          .middleQuestionCard .row {
            position: relative;
            top: 5%;
            width: 100%;
            left: 3%;
          }

          #email:disabled {
            background-color: #ebebeb;
          }

          input[type="text"]:invalid,
          input[type="date"]:invalid {
            border: 3px solid #817eff;
          }

          input[type="text"],
          input[type="date"],
          input[type="tel"],
          input[type="email"] {
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
            font-family: "Noto Sans TC", sans-serif;
          }

          .wrap .buttonCard {
            width: 80%;
            margin: 30px auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: 0px;
            background: #fff;
            background-color: #f4f5f6;
          }

          .regCon .location > p {
            color: #777;
            font-size: 22px;
          }
          .regCon .location .bottomTips span {
            color: #2b2b2b;
            font-size: 14px;
            font-weight: 500;
          }
          .regCon .location .bottomTips p {
            color: #2b2b2b;
            margin: 10px auto;
            font-size: 16px;
            font-weight: 800;
          }

          @media screen and (max-width: 768px) {
            .wrap .bottomQuestionCard,
            .wrap .middleQuestionCard {
              margin: 90px 0px 0px;
              width: 100%;
            }
            .wrap .personContent {
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
            }
            .wrap .buttonCard {
              width: 410px;
              margin: 25px auto;
            }

            .container {
              text-align: center;
            }
          }

          /* ======= INCOMPLETE PROFILE ALERT POP UP ======== */

          .backdrop {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #3f3f3f;
            z-index: 100;
            opacity: 0.8;
            cursor: auto;
            z-index: 2000;
          }
          .alertCard {
            position: fixed;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: 1140px;
            padding: 28px 30px;
            display: -webkit-box;
            display: -ms-flexbox;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-radius: 0px;
            background: rgba(255, 255, 255, 0.9);
            z-index: 2000;
          }
          .alertCard figure {
            position: relative;
            width: 100%;
            display: block;
          }

          .alertCard .cross {
            width: 25px;
            cursor: pointer;
            display: flex;
            align-items: left;
          }

          .alertCard h3 {
            color: #333;
            font-size: 38px;
            font-family: "Noto Sans TC", sans-serif;
            font-weight: 900;
            margin-bottom: 40px;
            text-align: center;
          }

          .alertCard p {
            color: #333;
            font-size: 22px;
            font-family: "Noto Sans TC", sans-serif;
            text-align: center;
          }

          @media screen and (max-width: 768px) {
            .alertCard {
              width: 500px;
              margin: 0 auto;
            }
          }
        `}</style>
      </HelmetProvider>
    </>
  );
};
export default Aedituser;
