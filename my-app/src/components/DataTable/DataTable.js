import React from 'react';

const DataTable = ({ subscriptions }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Subscription ID</th>
            <th>Subscriber ID</th>
            <th>Subscriber Name</th>
            <th>Subscriber Country</th>
            <th>Subscription Date</th>
            <th>Duration (Days)</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map(subscription => (
            <tr key={subscription._id}>
              <td>{subscription._id}</td>
              <td>{subscription.subscriberId}</td>
              <td>{subscription.subscriberName}</td>
              <td>{subscription.subscriberCountry}</td>
              <td>{subscription.subscriptionDate}</td>
              <td>{subscription.subscriberDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
