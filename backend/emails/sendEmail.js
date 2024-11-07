require("dotenv/config");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// =============== LOCUM APPLIED NOTIFICATION TO EMPLOYER ================
function locumApplication(
  firstName,
  caseId,
  email,
  applicant,
  thisyear,
  logo,
  professions
) {
  output = `
          <head>
          <style> 
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          body {
            background-color: #f4f5f6;
          }
          
          h1 {
            font-weight: 700;
            font-size: 30px;
          }
          p {
            font-weight: 500;
            font-size: 14px;
            color: #333;
            font-family: sans-serif;
          }
          hr {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
          }
          
          </style>
        </head>
        <body>
            <div style="-webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 40px 20px 20px;
            background-color: #f4f5f6;">
            <div style="  width:100%;
            background-color: white;
            position: relative;
            border: 1px solid #eee;">
            <div style="margin: 30px 30px; text-align:center">
            <img style="background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            width: 210px;
            position: relative;" src="${logo}">
        </div>
      
                <hr style="margin-top: 12px; margin-bottom: 12px;">
                <div style="margin: 30px 30px;">
                <h1>Hi ${firstName},</h1>
                    <br/>
                    <p>This is a notification email that a locum, <b>${applicant}</b>, has submitted an application for case ID: <b>${caseId}</b>, which you have advertised for a <b>locum ${professions}</b>.</p>
                    <br/>
                <p>Please login to your account, go to <b>[Listing Manager]</b> to review ${applicant}'s application. You have <b>72 hours</b> to accept or reject the application before the application will be auto-deleted.</p>
                <br/>
<p>If you are no longer looking for a <b>locum ${professions}</b>, please login to your account, go to <b>[Listing Manager]</b>, scroll to Case ID: <b>${caseId}</b>, click on <b>[Edit]</b> and click <b>[Delete]</b>.</p>
                <br/>
                <p>Please do not hesitate in contacting Medclicker Customer Support for any assistance or questions. Thank you!</p>
                   
                            <br/>
                            <p>Kind regards,</p>
                            <p>Medclicker Customer Support</p>
                    <div style="margin:5px 0px 0px">
                    <img style="background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                    margin: 0; width:120.88px" src="${logo}" alt="logo">
                    </div>
                    <br>
                    <div style=" font-size: 12px;
                    color: #777;
                    text-align: center;
                    margin: 10px auto;">This email was sent by Medclicker to ${email}.</div>
                    <div style="  font-size: 12px;
                    color: #777;
                    text-align: center;
                    margin: 10px auto;">© <span>${thisyear}</span> Orange Tech Pty Ltd. ABN 49 649 839 609. All Rights Reserved</div>
                    </p>
                </div>
            </div>
        </div>
        </body>
          `;
  return output;
}

function sendLocumEmail(to, from, subject, text) {
  const msg = { to, from, subject, html: text };
  sgMail.send(msg, (err) => {
    if (err) {
      console.log("Email not sent");
    } else {
      console.log(`Email sent to ${to} successfully`);
    }
  });
}

// =============== EMPLOYER MADE PAYMENT NOTIFY LOCUM HIRED ================
function toLocum(
  jobSeekerFirstName,
  jobSeekerEmail,
  available_start,
  available_finish,
  firstName,
  lastName,
  email,
  phone,
  streetNo,
  street,
  suburb,
  state,
  postalCode,
  country,
  professions,
  thisyear,
  logo,
  caseId
) {
  output = `
          <head>
          <style> 
          html,
          body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          body {
            background-color: #f4f5f6;
          }
          
          h1 {
            font-weight: 700;
            font-size: 30px;
          }
          p {
            font-weight: 500;
            font-size: 14px;
            color: #333;
            font-family: sans-serif;
          }
          hr {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
          }
          
          </style>
        </head>
        <body>
            <div style="-webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 40px 20px 20px;
            background-color: #f4f5f6;">
            <div style="  width:100%;
            background-color: white;
            position: relative;
            border: 1px solid #eee;">
            <div style="margin: 30px 30px; text-align:center">
            <img style="background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            width: 210px;
            position: relative;" src="${logo}">
        </div>
      
                <hr style="margin-top: 12px; margin-bottom: 12px;">
                <div style="margin: 30px 30px;">
                <h1>Hi ${jobSeekerFirstName},</h1>
                    <br/>
                    <p>Congratulations! This is a notification email that the employer for case ID: <b>${caseId}</b>, has accepted your offer for the role you applied for as a <b>locum ${professions}</b> for the dates from <b>${available_start}</b> to <b>${available_finish}</b>.</p>
                    <br/>
                <p>For more details, please login to your account, go to <b>[Applications Manager]</b>, scroll to case ID: <b>${caseId}</b> to review your application. Please contact the employer as soon as possible to arrange accommodation and air or road travels, if needed.</p>
                <br/>
                <div style="position: relative;text-align: left;box-sizing: border-box;">
                <table style="width:100%; position:relative;border-spacing: 0;
              border-collapse:collapse">
                  <thead>
                    <tr style="color:#011b58;border-bottom: 1px solid #eee; height:40px">
                      <th style="padding: 0;text-align: left; font-size:14px">Employer's Details</th>
                      <th style="padding: 0;text-align: left"></th>
                    </tr>
            
                  </thead>
                  <tbody>
            
                    <tr style="height:40px">
                      <td
                        style="border-bottom: 1px solid #eee; width:170px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                        Contact</td>
                      <td
                        style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-left:5px;box-sizing: border-box;;font-size:14px;">
                        ${firstName} ${lastName}</td>
                    </tr>
            
                    <tr style="height:40px">
            
                      <td
                        style="box-sizing: border-box;border-bottom: 1px solid #eee;width:170px;padding: 0;padding-left:5px;font-size:14px;">
                        Email
                      </td>
                      <td style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-left:5px;font-size:14px;">
                        ${email}</td>
                    </tr>
                    <tr style="height:40px">
                      <td
                        style="box-sizing: border-box;border-bottom: 1px solid #eee; width:170px;font-size:14px; background-color:#eeebeb;padding: 0;padding-left:5px">
                        Phone
                      </td>
                      <td
                        style="box-sizing: border-box;border-bottom: 1px solid #eee;background-color:#eeebeb;padding: 0;padding-left:5px;font-size:14px;">
                        ${phone}</td>
                    </tr>
                    <tr style="height:40px">
            
                      <td
                        style="box-sizing: border-box;border-bottom: 1px solid #eee;width:170px;padding: 0;padding-left:5px;font-size:14px;">
                        Address
                      </td>
                      <td style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-left:5px;font-size:14px;">
                        ${streetNo} ${street}, ${suburb} ${state} ${postalCode}</td>
                    </tr>
                  </tbody>
            
                </table>
              </div>
                <br/>

                <p>Please do not hesitate in contacting Medclicker Customer Support for any assistance or questions. Good luck and happy locuming!</p>
                <br/>

                <p>Please keep this email for your records as this will serve as an official receipt for this agreement.</p>
                            <br/>
                            <p>Kind regards,</p>
                            <p>Medclicker Customer Support</p>
                    <div style="margin:5px 0px 0px">
                    <img style="background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center;
                    margin: 0; width:120.88px" src="${logo}" alt="logo">
                    </div>
                    <br>
                    <div style=" font-size: 12px;
                    color: #777;
                    text-align: center;
                    margin: 10px auto;">This email was sent by Medclicker to ${jobSeekerEmail}.</div>
                    <div style="  font-size: 12px;
                    color: #777;
                    text-align: center;
                    margin: 10px auto;">© <span>${thisyear}</span> Orange Tech Pty Ltd. ABN 49 649 839 609. All Rights Reserved</div>
                    </p>
                </div>
            </div>
        </div>
        </body>
          `;
  return output;
}

function pdfContract(
  jobSeekerFirstName,
  jobSeekerLastName,
  jobSeekerEmail,
  jobSeekerPhone,
  ahpra,
  available_start,
  available_finish,
  locum_streetNo,
  locum_street,
  locum_suburb,
  locum_state,
  locum_postalCode,
  firstName,
  lastName,
  email,
  phone,
  streetNo,
  street,
  suburb,
  state,
  postalCode,
  emp_streetNo,
  emp_street,
  emp_suburb,
  emp_state,
  emp_postalCode,
  professions,
  caseId,
  dateIssued,
  thisyear,
  logo,
  normal_rate,
  sat_rate,
  sun_rate,
  ph_rate,
  accommodation,
  roadtravel,
  airtravel,
  airport
) {
  pdfOutput = `<body style="box-sizing: border-box;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;line-height: 1.42857143;
  color: #333;">

  <div class="top-container" style="display: flex;
    justify-content: left;
    flex-direction: row;box-sizing: border-box">

    <div style="width: 1000px;
      height:1406px;
      margin: 0px auto;
      background-color: white;
      position: relative;
      border: none;
      padding: 0px;
      display: flex;box-sizing: border-box">
      <div style="padding: 80px 0px 60px;
        height: 100%;
        width: 350px;
        position: relative;
        display: inline;
        background: #eeebeb;
        box-sizing: border-box;">
        <div style="position: relative;
          text-align: center;
          width: 100%;
      top: 0px;box-sizing: border-box;">
          <img style="box-sizing: border-box;vertical-align: middle; border:0;transform: translateX(0%);" src="${logo}"
            width="180px" alt="Medclicker LOGO" />
        </div>

        <div style="position: relative;
         
          padding: 5px 46px 0px 50px;
          top: 14%;
          text-align: left;
          background-color: #eeebeb;">
          <h2 style="color: #333;
            font-size: 16px;
            margin-bottom: 5px;font-weight: 500;
      line-height: 1.1;box-sizing: border-box;
            margin-top: 0px;">EMPLOYER DETAILS</h2>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;margin: 0 0 10px;
            margin-bottom: 5px;">${firstName} ${lastName}</p>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;margin: 0 0 10px;
            margin-bottom: 5px;">${emp_streetNo} ${emp_street} </p>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;margin: 0 0 10px;
            margin-bottom: 5px;">${emp_suburb} </p>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;margin: 0 0 10px;
            margin-bottom: 5px;">${emp_state} ${emp_postalCode} </p>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;margin: 0 0 10px;
            margin-bottom: 5px;">Australia</p>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;    margin: 0 0 10px;
            margin-bottom: 5px;">Mobile: ${phone}</p>
          <p style="color: #777;
            font-size: 16px;
            font-weight: 500;margin: 0 0 10px;
            margin-bottom: 5px;">Email: ${email}</p>
        </div>

        <div class="copyright" style=" position: absolute;
            padding: 5px 46px 10px 50px;
          bottom: 0%;
          text-align: left;">
          <p style="  margin-top: 1px;
            font-weight: 500;
            font-size: 13px;
            margin-bottom: 5px;margin: 0 0 10px;
            color: #777;">© ${thisyear} Orange Tech Pty Ltd.</p>
          <p style="  margin-top: 1px;
            font-weight: 500;
            font-size: 13px;
            margin-bottom: 5px;margin: 0 0 10px;
            color: #777;"> ABN 49 649 839 609. All Rights Reserved</p>
        </div>

      </div>
      <div class="main" style="box-sizing: border-box;padding: 30px 35px 20px; display: inline-block;
        width: 650px;">
        <div style="display: flex;
          position: relative;box-sizing: border-box;
          top: 0%;
          text-align: left;
          justify-content: space-between;">
          <div style="font-size:20px;font-weight: 600;color:#333; font-family: sans-serif; box-sizing: border-box;">
            AGREEMENT FOR
            <div style="font-size:20px; font-weight: 600; color:#333;font-family: sans-serif; box-sizing: border-box;">
              ${jobSeekerFirstName} ${jobSeekerLastName}
            </div>
          </div>
          <div
            style="font-size:28px;color:#da4236; font-weight: 800; border:2px solid #da4236; padding:0px 10px; height:44px;box-sizing: border-box;">
            Accepted
          </div>
        </div>
        <hr style="height:0;margin-top: 20px;
          margin-bottom: 20px;
          border: 0;box-sizing: content-box;
          border-top: 1px solid #eee">
        <div style="min-height: 995px;position: relative;text-align: left;box-sizing: border-box;">
          <table style="width:100%; position:relative;border-spacing: 0;
            border-collapse:collapse">
            <thead>
              <tr style="color:#011b58;border-bottom: 1px solid #eee; height:40px">
                <th style="padding: 0;text-align: left">Employment Details</th>
                <th style="padding: 0;text-align: left"></th>
                <th style="padding: 0;text-align: left"></th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #eee; height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Case ID</td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;"></td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;padding-right:5px;text-align: right;">
                  ${caseId}</td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Date Issued
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px;box-sizing: border-box;;font-size:14px;text-align: right;">
                  ${dateIssued}</td>
              </tr>

              <tr style="height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px; ">Work
                  Address</td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;width:140px;padding: 0;padding-left:5px;font-size:14px;">
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-right:5px;font-size:14px;text-align: right;">
                  ${streetNo} ${street}, ${suburb} </td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  State
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">

                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px;box-sizing: border-box;;font-size:14px;text-align: right;">
                  ${state} ${postalCode}</td>
              </tr>

            </tbody>

          </table>
          <br />
          <table style="width:100%; position:relative;border-spacing: 0;
            border-collapse:collapse">
            <thead>
              <tr style="color:#011b58;border-bottom: 1px solid #eee; height:40px">
                <th style="padding: 0;text-align: left">${professions} Locum  Details</th>
                <th style="padding: 0;text-align: left"></th>
                <th style="padding: 0;text-align: left"></th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #eee; height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Locum Name</td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;"></td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;padding-right:5px;text-align: right;">
                  ${jobSeekerFirstName} ${jobSeekerLastName}</td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Phone
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px;box-sizing: border-box;;font-size:14px;text-align: right;">
                  ${jobSeekerPhone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee; height:40px">

                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Email</td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;"></td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;padding-right:5px;text-align: right;">
                  ${jobSeekerEmail}</td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Address
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px;box-sizing: border-box;;font-size:14px;text-align: right;">
                  ${locum_streetNo} ${locum_street}, ${locum_suburb}</td>
              </tr>

              <tr style="height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px; ">State
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;width:140px;padding: 0;padding-left:5px;font-size:14px;">
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-right:5px;font-size:14px;text-align: right;">
                  ${locum_state} ${locum_postalCode}
                </td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  AHPRA
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px;box-sizing: border-box;;font-size:14px;text-align: right;">
                  ${ahpra}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <table style="width:100%; position:relative;border-spacing: 0;
            border-collapse:collapse">
            <thead>

              <tr style="color:#011b58;border-bottom: 1px solid #eee; height:40px">

                <th style="padding: 0;text-align: left">The Offer</th>
                <th style="padding: 0;text-align: left"></th>
                <th style="padding: 0;text-align: left"></th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #eee; height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Weekday Rates</td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;"></td>
                <td style="box-sizing: border-box;padding: 0;font-size:14px;padding-right:5px; text-align:right">
                  ${
                    normal_rate !== "" ? `AUD ${normal_rate}` : "Negotiable"
                  }</td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Saturday Rates
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px; text-align:right;box-sizing: border-box;;font-size:14px;">
                  ${sat_rate !== "" ? `AUD ${sat_rate}` : "Negotiable"}</td>
              </tr>

              <tr style="height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Sunday Rates</td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;width:140px;padding: 0;padding-left:5px;font-size:14px;">
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-right:5px; text-align:right;font-size:14px;">
                  ${sun_rate !== "" ? `AUD ${sun_rate}` : "Negotiable"}</td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Public Holiday Rates
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px; text-align:right;box-sizing: border-box;;font-size:14px;">
                  ${ph_rate !== "" ? `AUD ${ph_rate}` : "Negotiable"}</td>
              </tr>
              <tr style="height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Air Travel Reimbursed
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;width:140px;padding: 0;padding-left:5px;font-size:14px;">
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-right:5px; text-align:right;font-size:14px;">
                  ${airtravel === true ? "Included" : "Not included"}
                  </td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Air Travel Airport from
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px; text-align:right;box-sizing: border-box;font-size:14px;">
                  ${airport ? airport : "Not Applicable"}
                </td>
              </tr>
              <tr style="height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Road Travel Reimbursed
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;width:140px;padding: 0;padding-left:5px;font-size:14px;">
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-right:5px; text-align:right;font-size:14px;">
                  ${roadtravel === true ? "Included" : "Not included"}
                </td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Accommodation Included
                </td>
                <td
                  style="border-bottom: 1px solid #eee; width:140px; background-color: #eeebeb;padding: 0; padding-left:5px;box-sizing: border-box;font-size:14px;">
                </td>
                <td
                  style="border-bottom: 1px solid #eee; background-color: #eeebeb;padding: 0;padding-right:5px; text-align:right;box-sizing: border-box;;font-size:14px;">${
                    accommodation === true ? "Included" : "Not included"
                  }
                </td>
              </tr>
              <tr style="height:40px">
                <td style="box-sizing: border-box; padding: 0;font-size:14px;padding-left:5px;">Start Date
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;width:140px;padding: 0;padding-left:5px;font-size:14px;">
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;padding: 0;padding-right:5px; text-align:right;font-size:14px;font-weight:900">${available_start}
                </td>
              </tr>
              <tr style=" height:40px">
                <td
                  style="box-sizing: border-box; padding: 0;font-size:14px;background-color: #eeebeb;padding-left:5px;">
                  Finish Date
                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee; ;width:140px;font-size:14px; background-color:#eeebeb;padding: 0;padding-right:5px; text-align:right;">

                </td>
                <td
                  style="box-sizing: border-box;border-bottom: 1px solid #eee;font-weight:900;background-color:#eeebeb;padding: 0;text-align:right;padding-right:5px;font-size:14px;">${available_finish}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

  </body>
  `;
  return pdfOutput;
}

function sendHiredEmail(to, from, subject, text, attachments) {
  const msg = { to, from, subject, html: text, attachments };
  sgMail.send(msg, (err) => {
    if (err) {
      console.log("Email not sent");
    } else {
      console.log(`Email sent to ${to} successfully`);
    }
  });
}

module.exports = {
  toLocum,
  pdfContract,
  sendHiredEmail,
  locumApplication,
  sendLocumEmail,
};
