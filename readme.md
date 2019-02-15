<h1>HVAC doctor</h1>

<H5>An unoffical project for ecobee by Jason Harder </h6> 

HVAC Doctor is a program that will take reports from your ecobee thermostat (downloaded through your account at ecobee.com) and assess what could be happening with it (as we would)

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
      <li> heat not stopping (possible fused w) </li> 
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


</ol>
