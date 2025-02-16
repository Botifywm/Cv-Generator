import { format } from "date-fns";

function dateFormat(date) {
  if (!date || date === "Present") {
    return date;
  } else {
    return format(new Date(date), "MMM yyyy");
  }
}

export default function MainCV({
  personalForm,
  educationForm,
  experienceForm,
}) {
  return (
    <div>
      <div className="personalCV">
        <div className="personalCVBody">
          <p className="nameCV">{personalForm.name}</p>
          <div className="contactDetails">
            Email: {personalForm.email} <p className="line"> | </p> Mobile:{" "}
            {personalForm.number}
          </div>
        </div>
      </div>

      <div className="educationCV">
        <div className="eduCVHeader">EDUCATION</div>
        <hr></hr>
        {educationForm.map((edu) => (
          <div key={edu.schoolName} className="educationBody">
            <p className="schoolNameCV">{edu.schoolName}</p>
            <p className="titleCV">{edu.title}</p>
            <div className="eduDate">
              {dateFormat(edu.startDate)} - {dateFormat(edu.endDate)}
            </div>
          </div>
        ))}
      </div>

      <div className="experienceCV">
        <div className="expCVHeader">PROFESSIONAL EXPERIENCE</div>
        <hr></hr>
        {experienceForm.map((experience) => (
          <div key={experience.companyName} className="experienceBody">
            <p className="companyNameCV">{experience.companyName}</p>
            <p className="positionTitleCV">{experience.positionTitle}</p>
            <p className="responsibilitiesEduCV">
              {experience.responsibilities}
            </p>
            <div className="expDate">
              {dateFormat(experience.startDate)} -{" "}
              {dateFormat(experience.endDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
