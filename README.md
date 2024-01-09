#Habit Tracker App
The Habit Tracker App is a web application built using Express, EJS, Node.js, and MongoDB. It provides a user-friendly interface for tracking daily habits and visualizing progress over time.

Features
Add Habits: Easily add new habits to your tracker.
Update Status: Toggle the status of your habits between "Done," "Not done," and "None" on a daily basis.
View Weekly Progress: Visualize your habits and their statuses on a weekly calendar.
Delete Habits: Remove habits you no longer wish to track.
Technologies Used
Express: A web application framework for Node.js.
EJS (Embedded JavaScript): A templating engine for rendering dynamic content in HTML.
Node.js: A JavaScript runtime for server-side development.
MongoDB: A NoSQL database for storing habit data.

Setup Instructions

1> clone repository -
git clone https://github.com/your-username/habit-tracker.git

2> Install dependencies.

3> Set up MongoDB:

    Create a MongoDB database and obtain the connection URL.
    Update the MONGODB_URI variable in the .env file with your connection URL.

4> Folder Structure
inside src -
/public: Contains static assets like CSS files and images.
/views: Includes EJS templates for rendering dynamic content.
/routes: Defines Express routes for handling different app functionalities.
/controllers: Houses the logic for handling various routes.
/models: Defines MongoDB schema and models for habit data.

5> Dependencies
express: Web application framework.
ejs: Templating engine for dynamic content.
mongoose: MongoDB object modeling tool.
dotenv: Loads environment variables from a .env file.
