<h1>HVAC doctor</h1>

<H5>An unoffical project for ecobee by Jason Harder with help from Bryan Bond & Advice from many!. </h6> 

HVAC Doctor is a program that will take reports from an ecobee thermostat (downloaded through your account at ecobee.com) and assess what could be happening with it (as we would)

Right now these docs are mainly a to do list - the functionality is very much in progress. (as of Feb 7 2019)

<ol>
  <h6>1. Function calculations (how do we determine what is what in reports?) </h6>
    <ol>
      <li>Overheating HVAC. </li>
        Create a restart count , blank spaces with a higher temp after a lower initial temperature are +1 to a count out of total restarts , used to indicate confidence in the answer barring customer observations (i.e confirming the ecobee actually turns off , it is not wifi etc) really all restarts can be counted then sorted based on circumstances.
      <li>Sensors not reporting temperature. </li>
Blank space where temperature reporting should be. 
      <li>Wall drafts </li> 
      Variances in humidity temperature or both that are not consistant.
      <li>Heat failing (HVAC equipment or ecobee being the cause is indeterminable based on the reports here.) </li>
Temperature does not go up during heat calls , small restarts might be an issue as well (check fan/heat stage runtimes and see if they're strange)
      <li>Code Blacks (probably cannot always be caught in reports) </li> 
Erratic thermostat temperatures (especially climbing temperatures) 
      <li>Heat not stopping/starting (possible fused w/ OR no output voltage OR equipment issue.) </li> 
Compare temperatures with heat calls if they climb with no calls possible fuse.
Compare heating calls with temp rise , if no climb something's wrong.       
<li>Cooling not stopping (possible fused y/ OR no output voltage OR hvac equipment ) </li> 
Compare temperatures with cooling calls if they climb with no calls possible fuse.
Compare cooling calls with temp rise , if no climb something's wrong.

</ol>
   <h6>2. Things you should confirm (based on results) </h6>
 <ol>
      <li>Overheating HVAC. </li>
      
<li>Sensors not reporting temperature. </li>

  <li>Wall drafts </li> 
        
  <li>Heat failing (HVAC equipment or ecobee being the cause is indeterminable based on the reports here.) </li>
       Dry contact reflects the same issue.
       Wiring is correct.
       Test Equipment assuming terminal failure on thermostat.
   <li>Overheating thermostats (probably cannot always be caught in reports) </li> 
       Smoke and/or burn marks around or on the thermostat
      
</ol>
   <h6>3. Spreadsheet formatting choices (based on what was encouraged in lunch and learns) </h6> 
   
   <h6>4. Running HVAC doctor locally </h6>
You can git clone on your terminal and then run NPM start in the project root folder.    
   
   <h6>5. Contributing </h6> 

My development process follows the Gitflow workflow outline(link with details here : https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) 

Any and all improvement to the program is encouraged - just submit a pull request with changes for review and I will assess if that is the best course of action. If you see a bug , please create an issue on Github with a test to show how it fails (or send the test with the fix) . I will fix it (to the best of my ability) or integrate your changes.
    
   <h6>6. Deployment Information </h6>  

   <h6>7. Notes on Dependancies </h6>

Javascript has been for awhile a complete ecosystem in itself. Some languages may be considered better for parsing data , but I liked the idea of having JS on both the front and back end for simplicities sake.

I settled on using Node.JS & express with pug. I have added some other notes for my more specfic needs. 

 "exceljs": "^1.7.0": Excel.js was chosen to convert the excel file based on the written functions. It was picked for the reporting as the documentation seemed quite complete and able to accomplish what I need. 

 "multer": "^1.4.1": Multer was chosen for its simple syntax and complete documentation as well as overwhelming popularity. 

 <h6>8. Project Updates (of course you can see the commit history as well) </h6>
0.1 Closed initial readfile feature branch -> Multer pulls file and adds it to an upload folder
0.2  
0.3

   <h6>8. Brainstorms </h6> 

In the longterm , this sort of program could be used to see problems that customers are having as they are having. It could be upgraded so the program can take known server outages into the mix and therefore ignore those when looking for restarts. 
</ol>

  <h6> Additional feedback from Brian </h6>
  
  <li>Another good way to detect a wall draft is if there is a significant jump in Relative Humidity once the fan runs. Recall that the fan runtime column reports a value from 0-300 (based on seconds), so you might see a value of say 60 or 45 and then a significant humidity jump in the next 5 minute interval</li>
  
 <li>Heat not stopping can, in some cases, be caused by a W wire in the O/B terminal and a misconfigured thermostat. A seemingly little known fact is that the ecobee CONTINUES to energize O/B even at the end of a compressor call, so if W is in O/B, the temperature will continue to increase</li>
 
 <li>Be sure to account for boiler anticipation if the ecobee is configured as a boiler (either mistakenly or correctly). We don't want to false flag the ecobee's boiler anticipator algorithm as a no heating issue. This might actually be something we want to check for, since configuring a heat-only furnace with no G wire requires manually selecting "G" (or else the ecobee automatically assumes "boiler") and impacts heating operation due to the aforementioned anticipator.</li>

 <li>On a related note, one of the questions we could/should ask for boiler/furnace detection are "Do you have a radiator?"</li>
 
 
