// import React, { useState } from 'react';
// import FormField from "./FormField";
// import SectionHeading from "./SectionHeading";

// const AcademicDetailsForm = ({ academicDetails, onChangemyInfo, isEmpty }) => {
//   const [formFields, setFormFields] = useState([
//     {
//       id: 1,
//       name: 'country',
//       label: 'Country',
//       placeholder: 'e.g India, USA',
//     },
//     {
//       id: 2,
//       name: 'college',
//       label: 'College/University',
//       placeholder: 'e.g Harvard University',
//     },
//     {
//       id: 3,
//       name: 'course',
//       label: 'Course',
//       placeholder: 'e.g Masters in Science',
//     },
//     {
//       id: 4,
//       name: 'language',
//       label: 'Your Language',
//       placeholder: 'e.g English',
//     },
//   ]);

//   return (
//     <div>
//       <SectionHeading
//         title="Academic Details"
//         desc="Please provide details about your academic background."
//       />
//       <form>
//         <div className="flex flex-col space-y-6">
//           {formFields.map((formField) => (
//             <FormField
//               onChangemyInfo={onChangemyInfo}
//               key={formField.id}
//               name={formField.name}
//               label={formField.label}
//               placeholder={formField.placeholder}
//               value={academicDetails[formField.name]}
//               isEmpty={isEmpty}
//             />
//           ))}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AcademicDetailsForm;
import React from 'react';
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";
import Numberinp from './Numberinp';
const AcademicDetailsForm = ({ academicDetails, onChange, isEmpty }) => {
  const formFields = [
    { id: 1, name: 'country', label: 'Country', placeholder: 'e.g India, USA' },
    { id: 2, name: 'college', label: 'College/University', placeholder: 'e.g Harvard University' },
    { id: 3, name: 'course', label: 'Course', placeholder: 'e.g Masters in Science' },
    { id: 4, name: 'language', label: 'Your Language', placeholder: 'e.g English' },
  ];

  return (
    <div>
      <SectionHeading
        title="Academic Details"
        desc="Please provide details about your academic background."
      />
      <form>
        <div className="flex flex-col space-y-6">
          {formFields.map((formField) => (
            <FormField
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={academicDetails[formField.name]}
              onChange={onChange}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
      <Numberinp/>
    </div>
  );
};

export default AcademicDetailsForm;

