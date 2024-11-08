import { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ReactGA from "react-ga4";

//Route Protection
import ProtectedAdmin from "./ProtectedAdmin";
import ProtectedRoutes from "./ProtectedRoutes";
import ExcludePostLogin from "./ExcludePostLogin";
import BlockInactives from "./BlockInactives";
import IdleTimerContainer from "./components/IdleTimerContainer";

//Admin
const Ahomepage = lazy(() => import("./admin/Ahomepage"));
const Adashboard = lazy(() => import("./admin/Adashboard"));
const Alogout = lazy(() => import("./admin/Alogout"));
const Abrief = lazy(() => import("./admin/Abrief"));
const Ausers = lazy(() => import("./admin/Ausers"));
const Aedituser = lazy(() => import("./admin/Aedituser"));

//Screens
const PersonalDetails = lazy(() => import("./screens/PersonalDetails"));
const QuestionContinue = lazy(() => import("./screens/QuestionContinue"));
const Step1 = lazy(() => import("./screens/Step1"));
const Step2 = lazy(() => import("./screens/Step2"));
const Step3 = lazy(() => import("./screens/Step3"));
const Step4 = lazy(() => import("./screens/Step4"));
const Step5 = lazy(() => import("./screens/Step5"));
const Step6 = lazy(() => import("./screens/Step6"));
const BriefEdit = lazy(() => import("./screens/BriefEdit"));
const Brief = lazy(() => import("./screens/Brief"));
const Preview = lazy(() => import("./screens/Preview"));
const Dashboard = lazy(() => import("./screens/Dashboard"));
const Home = lazy(() => import("./screens/Home"));
const Signup = lazy(() => import("./screens/Signup"));
const Error404 = lazy(() => import("./screens/Error404"));
const Calendar = lazy(() => import("./screens/Calendar"));
const Briefs = lazy(() => import("./screens/Briefs"));
const Campaigns = lazy(() => import("./screens/Campaigns"));
const CampaignInfo = lazy(() => import("./screens/CampaignInfo"));
const CampaignAbout = lazy(() => import("./screens/CampaignAbout"));
const CampaignAdvisor = lazy(() => import("./screens/CampaignAdvisor"));
const Campaign = lazy(() => import("./screens/Campaign"));
const CampaignEdit = lazy(() => import("./screens/CampaignEdit"));
const Logout = lazy(() => import("./screens/Logout"));

ReactGA.initialize("G-TLNDN2J382");

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);
    return null;
  }
  return (
    <Router>
      <ScrollToTop />
      <IdleTimerContainer />
      <Suspense
        fallback={
          <div
            style={{
              backgroundColor: "#20094d",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              zIndex: "2500",
              display: "block",
              position: "fixed",
            }}
          >
            <div
              style={{
                textAlign: "center",
                position: "absolute",
                display: "block",
                height: "100%",
                width: "100%",
                top: "90%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <img
                style={{
                  animation: "loadingframe 1000ms infinite",
                  animationDirection: "alternate-reverse",
                }}
                src="/images/rx.png"
                width="150px"
                alt="Riyadh Air"
              />
            </div>
          </div>
        }
      >
        <Routes>
          {/* 1. ADMIN NOT LOGGED IN */}
          <Route path="/signout" element={<Alogout />} />
          <Route path="/admin/dashboard" element={<Adashboard />} />

          {/* 2. ADMIN LOGGED IN */}
          <Route element={<ProtectedAdmin />}>
            <Route path="/homepage" element={<Ahomepage />} />
            <Route path="/admin/users" element={<Ausers />} />
            <Route path="/adminusers/:id" element={<Aedituser />} />
            <Route path="/admin/brief" element={<Abrief />} />
          </Route>

          {/* 2. BLOCKED WHEN ADMIN LOGGED IN */}
          <Route element={<ExcludePostLogin />}></Route>

          {/* 1. USER NOT LOGGED IN */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/logout" element={<Logout />} />

          {/* 2. BLOCKED WHEN USER LOGGED IN */}
          <Route element={<ExcludePostLogin />}>
            <Route path="/register" element={<Signup />} />
          </Route>

          {/* 2. USERS LOGGED IN */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/personal-details" element={<PersonalDetails />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />
            <Route path="/step5" element={<Step5 />} />
            <Route path="/step6" element={<Step6 />} />
            <Route path="/brief_edit/:ticketId" element={<BriefEdit />} />
            <Route path="/brief/:ticketId" element={<Brief />} />
            <Route path="/preview/:ticketId" element={<Preview />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaignabout" element={<CampaignAbout />} />
            <Route path="/campaign/:_id" element={<Campaign />} />
            <Route path="/campaignadvisor" element={<CampaignAdvisor />} />
            <Route path="/campaignEdit/:id" element={<CampaignEdit />} />
            <Route path="/campaigninfo" element={<CampaignInfo />} />
            {/* 4. BLOCK BLACKLISTED USERS */}
            <Route element={<BlockInactives />}>
              <Route path="/briefs" element={<Briefs />} />
              <Route path="/question_continue" element={<QuestionContinue />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
