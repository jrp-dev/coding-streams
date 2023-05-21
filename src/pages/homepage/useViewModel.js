import { useState } from 'react';

/**
 * Save functions and variables here
 * 
 * @returns {model, actions}
 */
const useViewModel = () => {
  /** Saves form field values */
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  /** Saves all form errors */
  const [errors, setErrors] = useState({});

  /** Handles field value changes */
  const handleFieldChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  /** Handles form submit */
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation rules for each field
    const validationRules = {
      firstname: {
        name: 'First Name',
        required: true,
      },
      lastname: {
        name: 'Last Name',
        required: true,
      },
      email: {
        name: 'Email Address',
        required: true,
        pattern: /^\S+@\S+\.\S+$/,
        message: 'Looks like this is not an email',
      },
      password: {
        name: 'Password',
        required: true,
      },
    };

    // Validation errors object to store any encountered errors
    let validationErrors = {};

    // Iterate over each field in the formValues object and validate
    for (const field in formValues) {
      if (formValues.hasOwnProperty(field)) {
        const value = formValues[field];
        const rules = validationRules[field];

        if (rules.required && value.trim() === '') {
          validationErrors[field] = `${validationRules[field]?.name} cannot be empty`;
        }

        if (value?.trim()?.length > 0 && rules.pattern && !rules.pattern.test(value)) {
          validationErrors[field] = rules?.message || '';
        }
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      // Displays error in each field if there's any
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with form submission
      console.log('Form submitted successfully!');
    }
  };

  return {
    model: {
      errors,
    },
    actions: {
      handleFieldChange,
      handleSubmit,
    },
  };
};

export default useViewModel;
