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

# Structure of the files
This project uses different libraries, therefore the structure is a bit complex.
<b>src > pages:</b> here there are all the pages. In each folder there is the index file (where the UI is rendered),
and the slice file, where the logic to store the data is.

<b>src > components:</b> here there are all the components shared between all the pages (e.g. the side bar)

<b>src > assets:</b>here there is the css file used in the project. There is just one since we have used styled components and the custom css needed wasn't much.

<b>src > index.js:</b>here is where we are importing the 
