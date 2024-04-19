import axios from 'axios';

// Base URL of the backend server
const baseURL = 'http://localhost:5000'; // Adjust this to your backend server URL

// API function to fetch subscription data
export async function submitSubscription(subscriberData) {
  try {
    const response = await axios.post(`${baseURL}/api/subscriptions`, subscriberData);
    // alert("Submission successfull")
    return response.data;
  } catch (error) {
    alert(`Error fetching subscription data: ${error}`);
    throw error;
  }
}

export const getSubscriptionData = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/subscriptions`);
    // alert("Submission successfull")
    return response.data;
  } catch (error) {
    alert(`Error fetching subscription data: ${error}`);
    throw error;
  }
};

// API function to fetch insights
export const getInsights = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/insights`);
    return response.data;
  } catch (error) {
    console.error('Error fetching insights:', error);
    throw error;
  }
};
