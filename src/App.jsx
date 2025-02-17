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
        <svg
          fill="#c4c4c4"
          height="50px"
          width="50px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 490 490"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <ellipse cx="245" cy="45.5" rx="46.3" ry="45.5"></ellipse>{" "}
                <path d="M431.7,182.4L304.5,75.8c-3.1,6.2-7.4,11.7-12.4,16.7l107.3,89.8h32.3V182.4z"></path>{" "}
                <path d="M197.9,92.6c-5.1-5.1-9.3-10.5-12.4-16.7L58.3,182.4H91L197.9,92.6z"></path>{" "}
                <g>
                  {" "}
                  <ellipse
                    cx="225.6"
                    cy="292.7"
                    rx="9.5"
                    ry="23.5"
                  ></ellipse>{" "}
                  <path d="M200.9,376.9h-9.4v17.6h9.4c5.4,0,9.8-3.9,9.8-8.8S206.3,376.9,200.9,376.9z"></path>{" "}
                  <path d="M0,203v287h490V203H0z M130.8,429.7c0,3.2-2.9,5.9-6.5,5.9s-6.5-2.6-6.5-5.9v-23.5h-17.6v23.5c0,3.2-2.9,5.9-6.5,5.9 s-6.5-2.6-6.5-5.9V371c0-3.2,2.9-5.9,6.5-5.9s6.5,2.6,6.5,5.9v23.5h17.6V371c0-3.2,2.9-5.9,6.5-5.9s6.5,2.6,6.5,5.9V429.7z M160.8,429.7c0,3.2-2.9,5.9-6.5,5.9s-6.5-2.6-6.5-5.9V371c0-3.2,2.9-5.9,6.5-5.9s6.5,2.6,6.5,5.9V429.7z M175.4,325l-26.9-40.5 V322c0,3.2-2.9,5.9-6.5,5.9s-6.5-2.6-6.5-5.9v-58.6c0-2.6,2-5,4.8-5.7s5.8,0.4,7.3,2.6l26.9,40.5v-37.4c0-3.2,2.9-5.9,6.5-5.9 s6.5,2.6,6.5,5.9V322c0,2.6-2,4.8-4.8,5.7C181.2,328.1,177.6,328.2,175.4,325z M223,426.3c1.6,2.9,0.2,6.5-2.9,7.9 c-2,0.9-5.9,1.6-8.8-2.6L197,406.2h-5.6v23.5c0,3.2-2.9,5.9-6.5,5.9s-6.5-2.6-6.5-5.9V371c0-3.2,2.9-5.9,6.5-5.9h15.9 c12.6,0,22.8,9.2,22.8,20.5c0,8.2-5.4,15.3-13.1,18.6L223,426.3z M225.6,327.9c-12.4,0-22.5-15.8-22.5-35.2 c0-19.4,10.1-35.2,22.5-35.2s22.5,15.8,22.5,35.2S238,327.9,225.6,327.9z M253.6,429.7c0,3.2-2.9,5.9-6.5,5.9s-6.5-2.6-6.5-5.9 V371c0-3.2,2.9-5.9,6.5-5.9s6.5,2.6,6.5,5.9V429.7z M323.8,429.7c0,2.6-2,5-4.8,5.7c-0.6,0.1-4.6,1-7.3-2.6l-26.9-40.5v37.4 c0,3.2-2.9,5.9-6.5,5.9s-6.5-2.6-6.5-5.9V371c0-2.6,2-5,4.8-5.7s5.8,0.4,7.3,2.6l26.9,40.5V371c0-3.2,2.9-5.9,6.5-5.9 s6.5,2.6,6.5,5.9V429.7z M338.4,264.8L321,323.4c-0.8,2.6-3.3,4.4-6.3,4.4s-5.5-1.8-6.3-4.4L297.2,286l-11.1,37.4 c-0.8,2.6-3.3,4.4-6.3,4.4s-5.5-1.8-6.3-4.4l-17.4-58.6c-0.9-3.1,1.1-6.3,4.6-7.2c3.5-0.8,7,1,8,4.2l11.1,37.4l9.9-36.2 c0.9-3.3,3.9-5.6,7.3-5.6s6.4,2.3,7.3,5.5l10.3,36.3l11.1-37.4c0.9-3.1,4.5-5,8-4.2C337.2,258.5,339.3,261.7,338.4,264.8z M371.3,435.6c-15,0-31.6-13.7-31.6-35.2c0-11.8,8.6-35.2,31.6-35.2c9.3,0,18,4.4,24,12.2c2.1,2.7,1.3,6.3-1.6,8.2 s-7,1.2-9.1-1.5c-3.6-4.6-8.3-7.2-13.3-7.2c-12.8,0-18.6,14.7-18.6,23.5c0,11.4,7.2,23.5,18.6,23.5c12.1,0,18-13.3,18-17.6h-18 c-3.6,0-6.5-2.6-6.5-5.9c0-3.2,2.9-5.9,6.5-5.9h25.1c3.6,0,6.5,2.6,6.5,5.9C402.9,414,393.6,435.6,371.3,435.6z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
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
