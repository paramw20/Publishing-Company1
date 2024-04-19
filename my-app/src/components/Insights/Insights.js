import React from 'react';

const Insights = ({ totalSubscriberCount, longestDurationSubscriber, countryWithMostSubscribers, totalSubscriptionIds }) => {
  return (
    <div className="insights-container">
      <h2>Insights</h2>
      {/* <p>Total Subscriber Count: {totalSubscriberCount}</p> */}
      <p>Subscriber with Longest Duration: {longestDurationSubscriber}</p>
      <p>Country with Most Subscribers: {countryWithMostSubscribers}</p>
      <p>Total Subscription Count: {totalSubscriptionIds}</p> {/* Display total Subscription IDs */}
    </div>
  );
};

export default Insights;
