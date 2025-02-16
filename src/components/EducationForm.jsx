import { v4 as uuidv4 } from "uuid";

export default function EducationForm({ education, setEducation }) {
  function handleChange(e, id) {
    const { name, value } = e.target;
    setEducation((prevEducation) =>
      prevEducation.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      )
    );
  }

  function addField() {
    setEducation((prevEducation) => [
      ...prevEducation,
      { id: uuidv4(), schoolName: "", title: "", startDate: "", endDate: "" },
    ]);
  }

  function deleteField(id) {
    setEducation((prevEducation) =>
      prevEducation.filter((edu) => edu.id !== id)
    );
  }

  return (
    <div>
      {education.map((edu) => (
        <div key={edu.id} className="education-field">
          <div className="schoolName">
            <label htmlFor="">School: </label>
            <input
              type="text"
              name="schoolName"
              onChange={(e) => handleChange(e, edu.id)}
              value={edu.schoolName}
              placeholder="Havard University"
            />
          </div>
          <div className="title">
            <label htmlFor="">Title of Certificate: </label>
            <input
              type="text"
              name="title"
              onChange={(e) => handleChange(e, edu.id)}
              value={edu.title}
              placeholder="Bachelor of Finance"
            />
          </div>
          <div>
            <label htmlFor="">Start Date: </label>
            <input
              type="date"
              name="startDate"
              onChange={(e) => handleChange(e, edu.id)}
              value={edu.startDate}
            />
          </div>
          <div>
            <label htmlFor="">End Date: </label>
            <input
              type="date"
              name="endDate"
              onChange={(e) => handleChange(e, edu.id)}
              value={edu.endDate}
            />
          </div>
          <button className="del" onClick={() => deleteField(edu.id)}>
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
