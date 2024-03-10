import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import UpcomingEvents from "./pages/UpcomingEvents";
import UpcomingEvents2 from "./pages/UpcomingEvents2";
import Chapters from "./pages/Chapters";
import Dashboard from "./pages/Dashboard";
import FlaggedQuestions from "./pages/FlaggedQuestions";
import FlashcardQuestion from "./pages/FlashcardQuestion";
import Flashcards from "./pages/Flashcards";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword2 from "./pages/ForgotPassword2";
import ForgotPassword3 from "./pages/ForgotPassword3";
import ForgotPassword4 from "./pages/ForgotPassword4";
import ResetPassword from "./pages/ResetPassword";
import PastChapters from "./pages/PastChapters";
import QueryResponses from "./pages/QueryResponses";
import CardioQuestion from "./pages/CardioQuestion";
import Results from "./pages/Results";
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";
import SignUp3 from "./pages/SignUp3";
import SignUp4 from "./pages/SignUp4";
import SignUp5 from "./pages/SignUp5";
// import QuizView from './pages/QuizView/QuizView';
// import ScoreView from './pages/ScoreView/ScoreView';
// import PastChapters from "./pages/PastChapters";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CNSQuestion from "./pages/CNSQuestion";
import InfectionQuestion from "./pages/InfectionQuestion";
import RespiratoryQuestion from "./pages/RespiratoryQuestion";
import EndocrineQuestion from "./pages/EndocrineQuestion";
import AnaesthesiaQuestion from "./pages/AnaesthesiaQuestion";
import SkinQuestion from "./pages/SkinQuestion";
import NBQuestion from "./pages/NBQuestion";
import OphthalmologyQuestion from "./pages/OphthalmologyQuestion";
import MDIQuestion from "./pages/MDIQuestion";
import OGUQuestion from "./pages/OGUQuestion";
import MSKQuestion from "./pages/MSKQuestion";
import IPVQuestion from "./pages/IPVQuestion";
import ChatRoom from "./pages/ChatRoom";
import AIChat from "./pages/AiChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/myaccount" Component={MyAccount} />
        <Route path="/upcomingevents" Component={UpcomingEvents} />
        <Route path="/upcomingevents2" Component={UpcomingEvents2} />
        <Route path="/chapters" Component={Chapters} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/flaggedquestions" Component={FlaggedQuestions} />
        <Route path="/flashcardquestion" Component={FlashcardQuestion} />
        <Route path="/flashcards" Component={Flashcards} />
        <Route path="/forgotpassword" Component={ForgotPassword} />
        <Route path="/forgotpassword2" Component={ForgotPassword2} />
        <Route path="/forgotpassword3" Component={ForgotPassword3} />
        <Route path="/forgotpassword4" Component={ForgotPassword4} />
        <Route path="/resetpassword/:token" Component={ResetPassword} />
        <Route path="/pastchapters" Component={PastChapters} />
        <Route path="/queryresponses" Component={QueryResponses} />
        <Route path="/cardioquestion" Component={CardioQuestion} />
        <Route path="/cnsquestion" Component={CNSQuestion} />
        <Route path="/infectionquestion" Component={InfectionQuestion} />
        <Route path="/respiratoryquestion" Component={RespiratoryQuestion} />
        <Route path="/endocrinequestion" Component={EndocrineQuestion} />
        <Route path="/anaesthesiaquestion" Component={AnaesthesiaQuestion} />
        <Route path="/skinquestion" Component={SkinQuestion} />
        <Route path="/nbquestion" Component={NBQuestion} />
        <Route
          path="/ophthalmologyquestion"
          Component={OphthalmologyQuestion}
        />
        <Route path="/mdiquestion" Component={MDIQuestion} />
        <Route path="/oguquestion" Component={OGUQuestion} />
        <Route path="/mskquestion" Component={MSKQuestion} />
        <Route path="/ipvquestion" Component={IPVQuestion} />
        <Route path="/results" Component={Results} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/signup2" Component={SignUp2} />
        <Route path="/signup3" Component={SignUp3} />
        <Route path="/signup4" Component={SignUp4} />
        <Route path="/signup5" Component={SignUp5} />
        <Route path="/chat-room" Component={ChatRoom} />
        <Route path="/ai-chat" Component={AIChat} />
      </Routes>
    </Router>
  );
}

export default App;
