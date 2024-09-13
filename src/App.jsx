import React, { useRef, useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { v4 as uuid } from "uuid";
import "./styles/App.css";
import "./styles/App-responsive.css";
// import { Work, Education, Skills, Project } from "./utils/appClasses";

import defaultData from "./defaultData.json"; // Adjust path as needed

//Componenets
import HeadingInput from "./components/headingInput";
// import HeadingDisplay from "./components/headingDisplay";
import EducationInput from "./components/educationInput";
import EducationDisplay from "./components/educationDisplay";
import WorkInput from "./components/workInput";
import WorkDisplay from "./components/workDisplay";
import SkillsInput from "./components/skillsInput";
import SkillsDisplay from "./components/skillsDisplay";
import ProjectInput from "./components/projectInput";
import ProjectDisplay from "./components/projectDisplay";
import Footer from "./components/footer";
import PromptDialog from "./components/PromptDialog";

//Images
import personImg from "./assets/icons/personal-details.svg";
import educationImg from "./assets/icons/education.svg";
import workImg from "./assets/icons/work.svg";
import skillsImg from "./assets/icons/skills.svg";
import projectImg from "./assets/icons/projects.svg";
import pdfImg from "./assets/icons/pdf.svg";
import Resume from "./components/resumePart";

export default function App() {
  // If required don't show in mobile devices 
  //  if (/Mobi|Android/i.test(navigator.userAgent)) {
  //    return (
  //      <div>
  //        <h1>Access Denied</h1>
  //        <p>
  //          This site is not available on mobile devices. Please access it from a
  //          desktop computer.
  //        </p>
  //      </div>
  //    );
  //  }

  const [data, setData] = useState({
    name: "",
    socialLinks: [],
    educationList: [],
    workActivities: [],
    skillList: [],
    projectActivities: [],
  });
    const resumeRef = useRef(null);


  useEffect(() => {
    setData(defaultData); // Load data from defaultData.json on first load
  }, []);

  // Destructure data
  const {
    name,
    socialLinks,
    educationList,
    workActivities,
    skillList,
    projectActivities,
  } = data;

  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [showJSON, setShowJSON] = useState(false); // For toggling JSON textarea
  const [jsonInput, setJsonInput] = useState(""); // To store textarea input
  const [jsonError, setJsonError] = useState(""); // State to store JSON errors
  const [textareaContent, setTextareaContent] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  function toggleVisibility(index) {
    let updatedToggleArr = [...isVisible];
    updatedToggleArr[index] = !updatedToggleArr[index];
    setIsVisible(updatedToggleArr);
  }

  // Toggle JSON textarea visibility
  function toggleJSON() {
    setShowJSON(!showJSON);
    setJsonInput(
      JSON.stringify(
        {
          name,
          socialLinks,
          educationList,
          workActivities,
          skillList,
          projectActivities,
        },
        null,
        2
      )
    ); // Populate with current state
  }

  const promptGenerator = () => {
    const sys_prompt = `Generate a Professional CV
Instructions:

Please create a professional CV in JSON format based on the following skillsets and job description. Ensure the CV is clear, professional, and well-organized. The CV should include the following sections:

Personal Details: Name, social links (with usernames displayed but links behind the keys), email, and phone number.
Education: List of educational qualifications including start and end dates, course details, and grades.
Work Experience: Detailed descriptions of work experience, including designation, start and end dates, and key responsibilities.
Skills: List of relevant skills and technologies with a brief description.
Projects: Information about notable projects, including titles, URLs, and descriptions.`;

    const currJSON = JSON.stringify(
      {
        name,
        socialLinks,
        educationList,
        workActivities,
        skillList,
        projectActivities,
      },
      null,
      2
    );
    const json_prompt = `Provide Data in JSON Format
Instructions:

Please provide the following data in JSON format for inclusion in the CV:

Personal Details: Include keys for name, social links (with proper link formatting), email, and phone number.
Education List: Each entry should include start and end dates, course name, and grade.
Work Activities: Each entry should include designation, start and end dates, and a description of responsibilities.
Skill List: Each entry should include skill position and techstack.
Project Activities: Each entry should include title, URL, and description.
Explicit Working Example with some useful information for you : `;

    return `${sys_prompt}\n\n${textareaContent}\n\n${json_prompt}\n\n${currJSON}`;
  };
  const handleButtonClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const handleCopyToClipboard = () => {
    const prompt = promptGenerator();
    navigator.clipboard.writeText(prompt).then(() => {
      alert("Copied to clipboard!");
    });
  };

  // Handle JSON input change
  function handleJsonChange(e) {
    const newJson = e.target.value;
    setJsonInput(newJson);
    applyJsonChanges(newJson); // Apply changes immediately with the latest JSON
  }

  // Apply JSON changes to state
function applyJsonChanges(newJson) {
  try {
    const parsedData = JSON.parse(newJson);
    setData({
      ...data,
      ...parsedData,
    });
    setJsonError(""); // Clear error if JSON is valid
  } catch (error) {
    setJsonError("Invalid JSON format."); // Set error message
  }
}

  //Input arrays
  const arrEducationInputs = educationList.map((education) => (
    <EducationInput
      education={education}
      educationList={educationList}
      setEducationList={(newList) =>
        setData({ ...data, educationList: newList })
      }
      key={education.id} // Ensure each education has a unique `id`
    />
  ));

  const arrWorkInputs = workActivities.map((activity) => (
    <WorkInput
      workActivity={activity}
      workActivities={workActivities}
      setWorkActivities={(newList) =>
        setData({ ...data, workActivities: newList })
      }
      key={activity.id} // Ensure each activity has a unique `id`
    />
  ));

  const arrSkillsInputs = skillList.map((skill) => (
    <SkillsInput
      skill={skill}
      skillList={skillList}
      setSkillList={(newList) => setData({ ...data, skillList: newList })}
      key={skill.id} // Ensure each skill has a unique `id`
    />
  ));

  const arrProjectInputs = projectActivities.map((activity) => (
    <ProjectInput
      projectActivity={activity}
      projectActivities={projectActivities}
      setProjectActivities={(newList) =>
        setData({ ...data, projectActivities: newList })
      }
      key={activity.id} // Ensure each project has a unique `id`
    />
  ));


  //Display arrays
  const arrEducationDisplay = educationList.map((education,index) => (
    <EducationDisplay education={education} key={index} />
  ));

  const arrWorkDisplay = workActivities.map((activity,index) => (
    <WorkDisplay workActivity={activity} key={index} />
  ));

  const arrSkillsDisplay = skillList.map((skill,index) => (
    <SkillsDisplay skill={skill} key={index} />
  ));

  const arrProjectsDisplay = projectActivities.map((activity,index) => (
    <ProjectDisplay projectActivity={activity} key={index} />
  ));

  //Addition handlers
function handleAddEducation() {
  let updatedEducationList = [...educationList];
  updatedEducationList.push({
    id: uuid(), // Add a unique ID here
    startDate: "",
    endDate: "",
    course: "",
    grade: "",
  });
  setData({ ...data, educationList: updatedEducationList });
}

function handleAddWork() {
  let updatedWorkActivities = [...workActivities];
  updatedWorkActivities.push({
    id: uuid(), // Add a unique ID here
    designation: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  setData({ ...data, workActivities: updatedWorkActivities });
}

function handleAddSkills() {
  let updatedSkillList = [...skillList];
  updatedSkillList.push({
    id: uuid(), // Add a unique ID here
    position: "",
    techstack: "",
  });
  setData({ ...data, skillList: updatedSkillList });
}

function handleAddProject() {
  let updatedProjectActivities = [...projectActivities];
  updatedProjectActivities.push({
    id: uuid(), // Add a unique ID here
    title: "",
    url: "",
    description: "",
  });
  setData({ ...data, projectActivities: updatedProjectActivities });
}

  return (
    <>
      <div className="main-container">
        <header
          className="primary-header"
          onClick={() => window.location.reload()}
        >
          Prabesh's Resume Builder
        </header>
        <section className="input-div">
          <ReactToPrint
            trigger={() => (
              <button>
                <img src={pdfImg} alt="Adobe PDF Logo"></img>Download
              </button>
            )}
            content={() => resumeRef.current}
            documentTitle={
              name +
              "'s Resume " +
              new Date()
                .toLocaleString("en-GB", { timeZoneName: "short" })
                .replace(/[/,: ]/g, "-")
                .replace(/T/g, "_")
                .replace(/\s/g, "_")
                .replace(/-/g, "_")
                .substring(0, 19)
            }
            pageStyle="@page { margin: 1cm; }"
          />
          {/* <ResumePage/> */}
          <button
            onClick={toggleJSON}
            className={`floating-json-button hide-on-mobile ${
              showJSON ? "close" : ""
            }`}
          >
            {showJSON ? (
              <span className="close-symbol">×</span> // Cross symbol
            ) : (
              <span className="toggle-symbol">&lt;/&gt;</span> // </> symbol
            )}
          </button>
          {showJSON && (
            <div className="json-edit-cluster hide-on-mobile">
              <div className="json-editor">
                <textarea
                  value={jsonInput}
                  onChange={handleJsonChange}
                  rows="20"
                  cols="50"
                />
                {jsonError && (
                  <div className="json-error">
                    <p>{jsonError}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            className={`floating-prompt-button hide-on-mobile${
              isDialogOpen ? "close" : ""
            }`}
            onClick={handleButtonClick}
          >
            {isDialogOpen ? "Close" : "Get Prompt"}
          </button>
          <PromptDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onCopy={handleCopyToClipboard}
            textareaContent={textareaContent}
            setTextareaContent={setTextareaContent}
          />

          <div className="personal-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(0)}>
              <img src={personImg} alt="personal details"></img>Personal Details
            </h2>
            {isVisible[0] && (
              <HeadingInput
                name={name}
                setName={(newName) => setData({ ...data, name: newName })}
                socialLinks={socialLinks}
                setSocialLinks={(newLinks) =>
                  setData({ ...data, socialLinks: newLinks })
                }
              />
            )}
          </div>
          <div className="education-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(1)}>
              <img src={educationImg} alt="education"></img>Education
            </h2>
            {isVisible[1] && arrEducationInputs}
            {isVisible[1] && (
              <button onClick={handleAddEducation}>+ Add New</button>
            )}
          </div>
          <div className="work-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(2)}>
              <img src={workImg} alt="work experience"></img>Work Experience
            </h2>
            {isVisible[2] && arrWorkInputs}
            {isVisible[2] && <button onClick={handleAddWork}>+ Add New</button>}
          </div>
          <div className="skill-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(3)}>
              <img
                src={skillsImg}
                alt="skills"
                className="smaller-input-logo "
              ></img>
              Skills
            </h2>
            {isVisible[3] && arrSkillsInputs}
            {isVisible[3] && (
              <button onClick={handleAddSkills}>+ Add New</button>
            )}
          </div>
          <div className="project-input">
            <h2 className="input-heading" onClick={() => toggleVisibility(4)}>
              <img
                src={projectImg}
                alt="projects"
                className="smaller-input-logo "
              ></img>
              Projects
            </h2>
            {isVisible[4] && arrProjectInputs}
            {isVisible[4] && (
              <button onClick={handleAddProject}>+ Add New</button>
            )}
          </div>
        </section>
        <section className="display-div">
          <Resume
            ref={resumeRef}
            name={name}
            socialLinks={socialLinks}
            arrEducationDisplay={arrEducationDisplay}
            arrWorkDisplay={arrWorkDisplay}
            arrSkillsDisplay={arrSkillsDisplay}
            arrProjectsDisplay={arrProjectsDisplay}
          />
        </section>
        <Footer numOfHours={17} />
      </div>
    </>
  );
}
