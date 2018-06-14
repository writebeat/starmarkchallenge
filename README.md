# PROJECT: STARMARK CHALLENGE
###### by Alex Alvarez

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For a comprehensive guide on how to use `create-react-app`, go  [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Requirements

The only requirement for this project is Node.js and NPM (Node Package Manager, comes bundled with Node.js).
To install Node.js, please download the latest version from [their website](http://nodejs.org/).

### Node

To check if Node.js and NPM are properly installed, simply open your command line and run the commands below.

    $ node --version
    v9.5.0

    $ npm --version
    1.3.21

On this project, the above versions were the ones used.

#### Node Installation on Mac OSX
You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

##### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

## Project Installation

In your terminal, navigate to the directory where you would like to install the project, and then type in the following commands:

    $ git clone https://github.com/writebeat/starmarkchallenge
    $ cd starmarkchallenge
    $ npm install

## Start and watch

Once the project is installed, all that's left to do is run it. The following command will start the server, and watch the files for any changes, which will trigger a restart of the server.

    $ npm start

## Build for production

If the project is ready to go, use the following command to build the project into a bundle you can upload to your server, or run locally.

    $ npm run build

## Component Information

The following list of components (found in the `src/components` folder), are all the components used in this application.

#### App.js
The main application that contains the routes that a user can go to.

#### Cities.js
Displays a dropdown list containing all the city names passed to it, and triggers a function call to 'changeCity' when the value is changed.

#### Employee.js
Renders employee data, including the avatar and employee information, with the avatar and name being clickable, leading to the Employee Details page. If the includeDetails flag is passed as true, then it also includes the Date of Birth and Tags fields, and removes the linking funcionality from the avatar and name.

#### EmployeeDetails.js
Fetches user data from the API, and renders it on the page. This is the component used for the detail page, when a user is clicked on.

#### EmployeeDirectory.js
The container of the list of employees. It contains  most of the logic for the application, including fetching the list of employees from the API, sorting them, and filtering out the duplicate cities. It then passes the data it processes to the simpler components, whose main job is just to display the content.

#### EmployeeList.js
Takes a list of employee objects, and displays them, and includes a "letter index" that effectively groups the users by the first letter of their last name.

#### Functions.js
Contains a few helper functions, for things such as formatting and sorting, to abstract it away from the actual components. The only purpose of this file is to keep the main components clean of any unnecessary code.
