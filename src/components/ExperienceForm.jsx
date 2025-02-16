import { v4 as uuidv4 } from "uuid";

export default function ExperienceForm({ experience, setExperience }) {
  function handleChange(e, id) {
    const { name, value, type, checked } = e.target;
    setExperience((prevExp) =>
      prevExp.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              [name]: type === "checkbox" ? checked : value,
              ...(name === "current" && checked ? { endDate: "Present" } : {}),
            }
          : exp
      )
    );
  }

  function addField() {
    setExperience((prevExp) => [
      ...prevExp,
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
  }

  function deleteField(id) {
    setExperience((prevExp) => prevExp.filter((exp) => exp.id !== id));
  }

  return (
    <div>
      {experience.map((exp) => (
        <div key={exp.id} className="experience-field">
          <div className="companyName">
            <label htmlFor="">Company: </label>
            <input
              type="text"
              name="companyName"
              onChange={(e) => handleChange(e, exp.id)}
              value={exp.companyName}
            />
          </div>
          <div className="positionTitle">
            <label htmlFor="">Position Title: </label>
            <input
              type="text"
              name="positionTitle"
              onChange={(e) => handleChange(e, exp.id)}
              value={exp.positionTitle}
            />
          </div>
          <div className="responsibilities">
            <label htmlFor="">Main Responsibilities: </label>
            <textarea
              name="responsibilities"
              onChange={(e) => handleChange(e, exp.id)}
              value={exp.responsibilities}
              rows="5"
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Start Date: </label>
            <input
              type="date"
              name="startDate"
              onChange={(e) => handleChange(e, exp.id)}
              value={exp.startDate}
            />
          </div>
          <div>
            <label htmlFor="">End Date: </label>
            <input
              type="date"
              name="endDate"
              onChange={(e) => handleChange(e, exp.id)}
              value={exp.current ? "Present" : exp.endDate}
              disabled={exp.current}
            />
          </div>
          <div>
            <label htmlFor="">Present: </label>
            <input
              type="checkbox"
              name="current"
              checked={exp.current}
              onChange={(e) => handleChange(e, exp.id)}
            />
          </div>
          <button className="del" onClick={() => deleteField(exp.id)}>
            Delete
          </button>
        </div>
      ))}
      <button className="add" onClick={addField}>
        Add New Field
      </button>
    </div>
  );
}
