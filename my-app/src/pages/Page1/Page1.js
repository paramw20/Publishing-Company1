import React, { useState } from 'react';
import { submitSubscription } from '../../api.js';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SubscriptionForm() {
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberCountry, setSubscriberCountry] = useState('');
  const [subscriberDuration, setSubscriberDuration] = useState('');
  const [jsonData, setJsonData] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const subData = {
      subscriberName,
      subscriberCountry,
      subscriberDuration
    }

    const res = submitSubscription(subData)
    console.log(res)

    // Reset the form
    setSubscriberName('');
    setSubscriberCountry('');
    setSubscriberDuration('');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('Please select a JSON file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);

      // Process JSON data
      console.log('JSON Data:', jsonData);
      setJsonData(jsonData);

      // Clear the file input
      event.target.value = '';
    };
    reader.readAsText(file);
  };

  const handleJsonSubmit = async (event) => {
    event.preventDefault();
    for (const subscriberData of jsonData) {
      await submitSubscription(subscriberData);
      console.log('Submitted:', subscriberData);
    }
  }

  return (
    <div>
      <h1>Subscription Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="subscriberName">Subscriber Name:</label><br />
        <input type="text" id="subscriberName" value={subscriberName} onChange={(e) => setSubscriberName(e.target.value)} /><br />

        <label htmlFor="subscriberCountry">Subscriber Country:</label><br />
        <input type="text" id="subscriberCountry" value={subscriberCountry} onChange={(e) => setSubscriberCountry(e.target.value)} /><br />

        <label htmlFor="subscriberDuration">Subscriber Duration:</label><br />
        <input type="text" id="subscriberDuration" value={subscriberDuration} onChange={(e) => setSubscriberDuration(e.target.value)} /><br />

        <input type="submit" value="Submit" />
      </form>

      <div>
        <label htmlFor="jsonFile">Upload JSON file:</label><br />
        <input type="file" id="jsonFile" accept=".json" onChange={(e) => handleFileUpload(e)} />
        <input type="submit" value="Submit" onClick={(e) => handleJsonSubmit(e)} />
      </div>

      {/* Button to navigate to page2 */}
      <Link to="/page2">
        <button>View Dashboard</button>
      </Link>
    </div>
  );
}

export default SubscriptionForm;
