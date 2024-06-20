import { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    relevantExperience: "",
    portfolioUrl: "",
    managementExperience: "",
    skills: [],
    interviewTime: "",
  });

  const errors = useFormValidation(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        if (checked) {
          return { ...prevState, skills: [...prevState.skills, value] };
        } else {
          return {
            ...prevState,
            skills: prevState.skills.filter((skill) => skill !== value),
          };
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify(formData, null, 2));
    } else {
      alert("Please fill the form with caution");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`shadow appearance-none border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`shadow appearance-none border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Applying for Position
          </label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        {["Developer", "Designer"].includes(formData.position) && (
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Relevant Experience (years)
            </label>
            <input
              type="number"
              name="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
              className={`shadow appearance-none border ${
                errors.relevantExperience ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.relevantExperience && (
              <p className="text-red-500 text-xs italic">
                {errors.relevantExperience}
              </p>
            )}
          </div>
        )}
        {formData.position === "Designer" && (
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Portfolio URL
            </label>
            <input
              type="text"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleChange}
              className={`shadow appearance-none border ${
                errors.portfolioUrl ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.portfolioUrl && (
              <p className="text-red-500 text-xs italic">
                {errors.portfolioUrl}
              </p>
            )}
          </div>
        )}
        {formData.position === "Manager" && (
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Management Experience
            </label>
            <textarea
              name="managementExperience"
              value={formData.managementExperience}
              onChange={handleChange}
              className={`shadow appearance-none border ${
                errors.managementExperience
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
            ></textarea>
            {errors.managementExperience && (
              <p className="text-red-500 text-xs italic">
                {errors.managementExperience}
              </p>
            )}
          </div>
        )}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Additional Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "CSS", "Python", "React", "Node.js"].map(
              (skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-purple-600"
                  />
                  <span>{skill}</span>
                </label>
              )
            )}
          </div>
          {errors.skills && (
            <p className="text-red-500 text-xs italic">{errors.skills}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Preferred Interview Time
          </label>
          <input
            type="datetime-local"
            name="interviewTime"
            value={formData.interviewTime}
            onChange={handleChange}
            className={`shadow appearance-none border ${
              errors.interviewTime ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.interviewTime && (
            <p className="text-red-500 text-xs italic">
              {errors.interviewTime}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
