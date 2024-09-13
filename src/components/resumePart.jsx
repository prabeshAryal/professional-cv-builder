import "../styles/App.css";
import HeadingDisplay from "../components/headingDisplay";
import React, { forwardRef } from "react";

// export default function Resume({
//   name,
//   socialLinks,
//   arrEducationDisplay,
//   arrWorkDisplay,
//   arrSkillsDisplay,
//   arrProjectsDisplay,
// }) {
//   return (
//     <>
//       <section className="display-div">
//         <div className="resume-page html-content">
//           <div className="personal-display">
//             <HeadingDisplay name={name} socialLinks={socialLinks} />
//           </div>
//           <div className="education-display">
//             <h2>
//               <span>E</span>ducation
//             </h2>
//             <div className="education-children">{arrEducationDisplay}</div>
//           </div>
//           <div className="work-display">
//             <h2>
//               <span>W</span>ork <span>E</span>xperience
//             </h2>
//             <div className="work-children">{arrWorkDisplay}</div>
//           </div>
//           <div className="skill-display">
//             <h2>
//               <span>S</span>kills
//             </h2>
//             <div className="skill-children">{arrSkillsDisplay}</div>
//           </div>
//           <div className="project-display">
//             <h2>
//               <span>P</span>rojects
//             </h2>
//             <div className="project-children">{arrProjectsDisplay}</div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



const Resume = forwardRef(
  (
    {
      name,
      socialLinks,
      arrEducationDisplay,
      arrWorkDisplay,
      arrSkillsDisplay,
      arrProjectsDisplay,
    },
    ref
  ) => (
    <div className="resume-page html-content" ref={ref}>
      <div className="personal-display">
        <HeadingDisplay name={name} socialLinks={socialLinks} />
      </div>
      <div className="education-display">
        <h2>
          <span>E</span>ducation
        </h2>
        <div className="education-children">{arrEducationDisplay}</div>
      </div>
      <div className="work-display">
        <h2>
          <span>W</span>ork <span>E</span>xperience
        </h2>
        <div className="work-children">{arrWorkDisplay}</div>
      </div>
      <div className="skill-display">
        <h2>
          <span>S</span>kills
        </h2>
        <div className="skill-children">{arrSkillsDisplay}</div>
      </div>
      <div className="project-display">
        <h2>
          <span>P</span>rojects
        </h2>
        <div className="project-children">{arrProjectsDisplay}</div>
      </div>
    </div>
  )
);

// Setting the display name for better debugging
Resume.displayName = "Resume";

export default Resume;
