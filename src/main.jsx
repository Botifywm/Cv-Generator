import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
// import PersonalForm from "./components/PersonalForm.jsx";
// import EducationForm from "./components/EducationForm.jsx";
// import ExperienceForm from "./components/ExperienceForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Components to create

// Every form is an object - so I will have to create 3 form components
// 1 component for the CV itself
// might not edit component since the forms are open and can be edited freely
// The form will render separately from the CV
// Add button will create the component object - Add button can be a separate component so that the button can be rendered on all three forms
// At the end, I will have to combine all the 3 form components into App.jsx
// 3 component forms + 1 CV component + 1 Add component = 5 components
// Add component will be imported into the 3 form components
// App.jsx will combine the three comp with the CV comp
