import React from 'react';

function About() {
  // If it's a real link with a URL, provide the valid URL here:
  const aboutLink = 'https://your-website.com/about'; // Replace with your actual URL

  return (
    <div>
      <center>
        <h1 style={{ fontSize: '3.5vw' }}>Weather Sense</h1>
      </center>

      {aboutLink && ( // Conditionally render link only if aboutLink is defined
        <a href={aboutLink} style={{ fontSize: '2vw' }}>
          <center>
            This is a full-stack project developed using MERN Stack (MongoDB, ExpressJS, React & Nodejs)
            <br />
            that fetches Weather API to display weather parameters like Humidity, UV index etc. at frontend.
            <br />
            <br />
            MongoDB database at the backend stores user details like Name, Email, Password & City to display user specific details.
            <br />
            <br />
            ExpressJS & NodeJS at the backend connects React framework with database and makes API requests for fetching data.
          </center>
        </a>
      )}

      {!aboutLink && ( // Render descriptive text if no link is provided
        <p style={{ fontSize: '2vw' }}>
          <center>
            This is a full-stack project developed using MERN Stack (MongoDB, ExpressJS, React & Nodejs). It fetches Weather API to display weather parameters and uses a MongoDB database to store user details.
          </center>
        </p>
      )}
    </div>
  );
}

export default About;
