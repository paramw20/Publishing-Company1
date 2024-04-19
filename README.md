# Publishing Company Subscription Management System

This is a basic web application designed to manage subscription details for a publishing company. It allows users to input subscription data via a form or batch upload JSON file, validates the data, stores it in a database, and provides insights on the data.

## Features

- **Subscription Form**: Users can fill in subscription details including Name, Country, and Duration. A random Subscription ID,Subscriber ID is generated automatically.
- **Batch Upload**: Users can upload a JSON file containing multiple subscription entries for bulk data entry.
- **Data Validation**: Input data is validated to ensure accuracy and completeness before insertion into the database.
- **Insights Display**: Provides insights such as Total Subscriber Count, Subscriber Longest Duration, and Country with Most Subscribers.
- **API Support**: APIs are available to handle JSON batch uploads and fetch insights from the database.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Additional Libraries**: Express Validator (for input validation), Mongoose (for MongoDB interaction)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/publishing-subscription-management`
2. Navigate to the project directory: `cd publishing-subscription-management`
3. Install dependencies: `npm install`
4. Configure database connection in `config.js` file.
5. Start the server: navigate to the server folder and run npm start.
6. Start the frontend: navigate to the my-app folder and run npm start

## Usage

1. Access the application in your web browser.
2. Fill in the subscription details in the form or upload a JSON file.
3. Submit the data and view any validation errors.
4. Navigate to the second page to view the tabular data and insights.

## API Endpoints

- **POST** `/api/subscription`: Accepts JSON objects to store in the database. Returns SUCCESS or FAILURE.
- **GET** `/api/subscriber-count`: Retrieves the total subscriber count from the database.
- **GET** `/api/longest-duration`: Retrieves the longest subscription duration from the database.
- **GET** `/api/most-subscribers-country`: Retrieves the country with the most subscribers from the database.


---

Feel free to customize and expand upon this template as needed! Let me know if you need any further assistance.

**Working Demo**

A working demo of the project can be found  https://drive.google.com/file/d/1o4_jEJcOItdIhDjaKavPliA8H9UasexY/view?usp=sharing

