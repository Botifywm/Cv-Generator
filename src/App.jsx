import { useState } from "react";
import "./App.css";
import MainCV from "./components/MainCV";
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [personal, setPersonal] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    number: "",
  });
  const [education, setEducation] = useState([
    { id: uuidv4(), schoolName: "", title: "", startDate: "", endDate: "" },
  ]);
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
      current: false,
    },
  ]);
  const [submitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <div className="header">
        <h1>The CV Generator</h1>
      </div>
      <div className="formandCv">
        <div className="form">
          <div className="personalForm">
            <div className="personalHeader">Personal Details</div>
            <PersonalForm personal={personal} setPersonal={setPersonal} />
          </div>

          <div className="educationForm">
            <div className="eduHeader">Education</div>
            <EducationForm education={education} setEducation={setEducation} />
          </div>

          <div className="experiencelForm">
            <div className="expHeader">Experience</div>
            <ExperienceForm
              experience={experience}
              setExperience={setExperience}
            />
          </div>
          <div className="submitForm">
            <button onClick={handleSubmit}>Generate CV</button>
          </div>
        </div>

        <div className="cvContainer">
          {submitted && (
            <div className="mainCV">
              <MainCV
                personalForm={personal}
                educationForm={education}
                experienceForm={experience}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
