import React, { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import Insights from '../../components/Insights/Insights';
import { getSubscriptionData, getInsights } from '../../api'; // Assuming you have API functions to fetch data

const Page2 = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [insights, setInsights] = useState({});
  const [totalSubscriptionIds, setTotalSubscriptionIds] = useState(0); // State to hold total number of Subscription IDs
  const [countryWithMostSubscribers, setCountryWithMostSubscribers] = useState(''); // State to hold country with most subscribers
  const [longestDurationSubscriber, setLongestDurationSubscriber] = useState(''); // State to hold subscriber with longest duration

  useEffect(() => {
    // Fetch subscription data and insights when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch subscription data
      const subscriptionData = await getSubscriptionData();
      console.log(subscriptionData);
      setSubscriptions(subscriptionData);

      // Calculate total number of Subscription IDs
      const totalIds = subscriptionData.length;
      setTotalSubscriptionIds(totalIds);

      // Find country with the most subscribers
      const countryCounts = {};
      subscriptionData.forEach(subscription => {
        const country = subscription.subscriberCountry;
        countryCounts[country] = (countryCounts[country] || 0) + 1;
      });
      const countryEntries = Object.entries(countryCounts);
      countryEntries.sort((a, b) => b[1] - a[1]); // Sort by count in descending order
      const mostSubscribedCountry = countryEntries.length > 0 ? countryEntries[0][0] : ''; // Get the country with the most subscribers
      setCountryWithMostSubscribers(mostSubscribedCountry);

      // Find subscriber with longest duration
      const longestDuration = subscriptionData.reduce((maxDuration, subscription) => {
        const duration = subscription.subscriberDuration;
        return duration > maxDuration ? duration : maxDuration;
      }, 0);
      const longestDurationSubscriber = subscriptionData.find(subscription => subscription.subscriberDuration === longestDuration)?.subscriberName || ''; // Get the name of subscriber with longest duration
      setLongestDurationSubscriber(longestDurationSubscriber);

      // Fetch insights
      const insightsData = await getInsights();
      setInsights(insightsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="page2-container">
      <h2>Subscription Data</h2>
      <DataTable subscriptions={subscriptions} />
      <Insights
        totalSubscriberCount={insights.totalSubscriberCount}
        longestDurationSubscriber={longestDurationSubscriber} // Pass subscriber with longest duration as a prop
        countryWithMostSubscribers={countryWithMostSubscribers} // Pass country with the most subscribers as a prop
        totalSubscriptionIds={totalSubscriptionIds}
      />
    </div>
  );
};

export default Page2;
