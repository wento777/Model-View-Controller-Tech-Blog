# Model-View-Controller-Tech-Blog



 ## Description 

- This project was designed as a homework assignment for KU coding bootcamp in Module 14 Challenge, Model-View-Controller (MVC) Challenge: Tech Blog

-  Writing about tech can be just as important as making it.

- Because this Challenge will require the use of the Inquirer package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.

- Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.


- A major aspect of this challenge was the balance between figuring out which solution made sense and the solution that would be most efficient.

- Because this application won’t be deployed, i will also need to provide a link to a walkthrough video that demonstrates its functionality. 

- Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.

- A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!



 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
 
 
 
 ## Installation

  - There is no starter code for this assignment.

  - In order to install inquirer, i used npm i inquirer@8.2.4.

  - The application will be invoked by using the following command: 'node index.js'.


## Usage

  - This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

  - Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:node index.js

  - It is recommended that you start with a directory structure that looks like this:

.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           

  -  Revisit 2.2.4: Screencastify Tutorial in Module 2 of the prework as a refresher on how to record video from your computer.

  - Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.
  


## User Story




## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


 ## Contribute 

 -  Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

- This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

- Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:
node index.js

- Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

- Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

- Refer to the Video Submission Guide Links to an external site.on the Full-Stack Blog for additional guidance on creating a video.
  
## Tests

  none

 

  # This project has been deployed to GitHub, here is the link:

  * 



  # Team-Profile-Generator-OOP Screenshots

 


## Summary

Your challenge this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.




## Author
 * ANDREI FLOREA - Initial work - Git Hub Profile
 * Challenge 14 | Model-View-Controller (MVC) Challenge: Tech Blog
