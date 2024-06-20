import { useState, useEffect } from 'react';

const useFormValidation = (formData) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validate = () => {
      const newErrors = {};

      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

      if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
      else if (!/^\d+$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone Number is invalid";

      if (["Developer", "Designer"].includes(formData.position)) {
        if (!formData.relevantExperience) newErrors.relevantExperience = "Relevant Experience is required";
        else if (isNaN(formData.relevantExperience) || formData.relevantExperience <= 0) newErrors.relevantExperience = "Relevant Experience must be a number greater than 0";
      }

      if (formData.position === "Designer") {
        if (!formData.portfolioUrl) newErrors.portfolioUrl = "Portfolio URL is required";
        else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(formData.portfolioUrl)) newErrors.portfolioUrl = "Portfolio URL is invalid";
      }

      if (formData.position === "Manager") {
        if (!formData.managementExperience) newErrors.managementExperience = "Management Experience is required";
      }

      if (!formData.skills.length) newErrors.skills = "At least one skill must be selected";

      if (!formData.interviewTime) newErrors.interviewTime = "Preferred Interview Time is required";

      setErrors(newErrors);
    };

    validate();
  }, [formData]);

  return errors;
};

export default useFormValidation;
