import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected import statement
import ErrorPage from "./resources/404";
import Home from "./resources/home";
import CVmaker from "./resources/CV";
import ResumeMaker from "./resources/Resume";
import './App.css'

function App() {
  // const currentPath = window.location.pathname;

  return (
    <Router>
      <div>
        {/* {currentPath !== "/" && (
          <Home />)}
        {(currentPath == "/make-a-cv") && ( // Render "Login" link only if not on the login page
              <CVmaker/>
            )}
        {(currentPath == "/lets-write-cover-letter") && ( // Render "Sign Up" link only if not on the signup page and not on the home page
          <ResumeMaker/>
            )} */}

        {/* Routing */}
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/make-a-cv" element={<CVmaker />} />
          <Route path="/lets-write-cover-letter" element={<ResumeMaker />} />
          <Route path="*" element={<ErrorPage />} /> {/* Handle 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
