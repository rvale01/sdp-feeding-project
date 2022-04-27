# How to run the program locally
<h3>Requirements</h3>
In order to run this project locally, make sure to have Node and npm installed locally

<h3>Steps to follow to run the project locally</h3>

First clone the project:
<code>git clone https://gitlab.uwe.ac.uk/am2-feetham/system-development-feeding-dashboard.git</code><br/>

Then install the dependecies:
<code>yarn install</code><br/>

Run the project with the following command:
<code>yarn run dev</code><br/>

Sometimes yarn does not install the dev dependecies automatically, therefore you need to install
them one by one if there is an error. In order to do so, you need to run these commands
<code>yarn add concurrently cross-env electron electron-is-dev wait-on</code>

# External libraries used
<ul>
    <li><b>Redux</b>: this was used for the state management in the app; </li>
    <li><b>React-router</b>: this library was used to manage the different paths of the app;  </li>
    <li><b>Ant-Design</b>: this library was used for styled components and assistance in creating graphs; </li>
    <li><b>Concurrently & Cross-env:</b> these two were used to run the application on several operating systems without the need to add more code. </li>
</ul>


# Structure of the files
This project uses different libraries, therefore the structure is a bit complex.
<b>src > pages:</b> here there are all the pages. In each folder there is the index file (where the UI is rendered),
and the slice file, where the logic to store the data is. The router switcher is in the App.js file present in this folder. This file imports all the pages and uses <code> react-router-dom </code> to switch to different pages.

<b>src > components:</b> here there are all the components shared between all the pages (e.g. the side bar)

<b>src > assets:</b>here there is the css file used in the project. There is just one since we have used styled components and the custom css needed wasn't much.

<b>src > index.js:</b>here is where we are importing the store and all the the App.js from the pages folder.

<b>public </b> This folder contains all the files we used to set up electron with React.js
