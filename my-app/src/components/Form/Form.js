import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [subscriberId, setSubscriberId] = useState('');
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberCountry, setSubscriberCountry] = useState('');
  const [subscriberDuration, setSubscriberDuration] = useState('');
  const [formErrors, setFormErrors] = useState({}); // Added state for form errors

  const validateForm = () => {
    const errors = {};
    if (!subscriberId) {
      errors.subscriberId = 'Subscriber ID is required';
    }
    if (!subscriberName) {
      errors.subscriberName = 'Subscriber Name is required';
    }
    if (!subscriberCountry) {
      errors.subscriberCountry = 'Subscriber Country is required';
    }
    // Add validation for subscriberDuration (e.g., numeric, positive value)
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }

    const formData = {
      subscriberId,
      subscriberName,
      subscriberCountry,
      subscriberDuration: parseInt(subscriberDuration),
    };
    
    console.log(formData)

    onSubmit(formData);
    setSubscriberId('');
    setSubscriberName('');
    setSubscriberCountry('');
    setSubscriberDuration('');
    setFormErrors({}); // Clear form errors after successful submission
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="subscriberId">Subscriber ID:</label>
      <input
        type="text"
        id="subscriberId"
        value={subscriberId}
        onChange={(e) => setSubscriberId(e.target.value)}
        required
      />
      {/* Add error message if present in formErrors.subscriberId */}
      {formErrors.subscriberId && <span className="error">{formErrors.subscriberId}</span>}

      <label htmlFor="subscriberName">Subscriber Name:</label>
      <input
        type="text"
        id="subscriberName"
        value={subscriberName}
        onChange={(e) => setSubscriberName(e.target.value)}
        required
      />
      {/* Add error message if present in formErrors.subscriberName */}
      {formErrors.subscriberName && <span className="error">{formErrors.subscriberName}</span>}

      <label htmlFor="subscriberCountry">Subscriber Country:</label>
      <input
        type="text"
        id="subscriberCountry"
        value={subscriberCountry}
        onChange={(e) => setSubscriberCountry(e.target.value)}
        required
      />
      {/* Add error message if present in formErrors.subscriberCountry */}
      {formErrors.subscriberCountry && <span className="error">{formErrors.subscriberCountry}</span>}

      <label htmlFor="subscriberDuration">Subscriber Duration (in days):</label>
      <input
        type="number"
        id="subscriberDuration"
        value={subscriberDuration}
        onChange={(e) => setSubscriberDuration(e.target.value)}
        required
      />
      {/* Add error message if present in formErrors.subscriberDuration */}
      {formErrors.subscriberDuration && <span className="error">{formErrors.subscriberDuration}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
