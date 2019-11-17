$(document).ready(function () {
   
   // the first thing I need to do is dynamically create all my rows. each row needs a 1-column field to hold the time of day. it needs to increase one hour each time - i'm going to try what i did w/ the last homework where there's a variable that increases at the end of the function... but maybe I need a for loop to create everything? I'm thinking I need a for loop to create everything. I can't do that with the iterator idea because that was dependent on the user clicking the correct answer for the onclick action to take. okay, so let's create the for loop to start
   
   
   var mainContainerDiv = $("#main-container")
   var todaysDateDiv = $("#todays-date")
   var currentTimeDiv = $("#current-time")

   todaysDateDiv.text(moment().format('MMMM Do, YYYY'))
   currentTimeDiv


   var timesArray = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"]
   var timesArrayIDs = ["8a", "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p", "7p"]
   // var dailyNotesObject = { "8a": "xxx", "9a": "", "10a": "", "11a": "", "12p": "", "1p": "", "2p": "", "3p": "", "4p": "", "5p": "", "6p": "", "7p": "" }



   var firstNotesObject = [];
   var secondNotesObject = [];
   var thirdNotesObject = [];
   var fourthNotesObject = [];
   var fifthNotesObject = [];
   var sixthNotesObject = [];
   var seventhNotesObject = [];
   var eighthNotesObject = [];
   var ninthNotesObject = [];
   var tenthNotesObject = [];
   var eleventhNotesObject = [];
   var twelthNotesObject = [];

   function populateCalendar() {
      for (var i = 0; i < timesArray.length; i++) {
         // creating the elements for each row in the planner

         var rowDiv = $("<div>")
         var timeCol = $("<div>")
         var notesCol = $("<div>")
         var form = $("<form>")
         var notesTextArea = $("<textarea>")
         var saveNotesCol = $("<div>")
         var saveButton = $("<button>")
         var saveIcon = $("<i>")

         // giving classes and content to the time column
         timeCol.attr("class", "col-md-1 time-of-day")
         timeCol.text(timesArray[i])

         // setting up the notes section
         notesCol.attr("class", "col-md-10 daily-notes form-group")

         // setting up text area with bootsrap form class, data-notes so that this will connect to the save button and the local storage, and an id because I know each one will need an individual id at some point
         notesTextArea.attr("class", "form-control")
         // notesTextArea.attr("data-notes", timesArrayIDs[i])
         notesTextArea.attr("id", timesArrayIDs[i] + '-text')

         // adding the notes text area to the form and the form to the column
         form.append(notesTextArea)
         notesCol.append(form)

         // save column
         saveNotesCol.attr("class", "col-md-1 save-daily-notes")
         // saveNotesCol.attr("id", "save-daily-notes")

         //adding save icon to button
         saveIcon.attr("class", "fa fa-save")

         // button styling and attributes
         saveButton.attr("class", "btn btn-save")
         // saveButton.attr("data-notes", timesArrayIDs[i])
         saveButton.attr("id", timesArrayIDs[i] + '-button')

         // add icon to button
         saveButton.append(saveIcon)

         // adding button to div
         saveNotesCol.append(saveButton)

         // adding classes to the row
         rowDiv.attr("class", "row row-planner")

         // adding columns to the row
         rowDiv.append(timeCol)
         rowDiv.append(notesCol)
         rowDiv.append(saveNotesCol)

         // adding the row to the body
         mainContainerDiv.append(rowDiv)
      }
   }

   function dailyNotes() {
      // get stored notes from localStorage
      // parsing the JSON string to an object. the 'firstNotesObject' refers to the key for the object
      var firstNotes = JSON.parse(localStorage.getItem("firstNotesObject"));
      var secondNotes = JSON.parse(localStorage.getItem("secondNotesObject"));
      var thirdNotes = JSON.parse(localStorage.getItem("thirdNotesObject"));
      var fourthNotes = JSON.parse(localStorage.getItem("fourthNotesObject"));
      var fifthNotes = JSON.parse(localStorage.getItem("fifthNotesObject"));
      var sixthNotes = JSON.parse(localStorage.getItem("sixthNotesObject"));
      var seventhNotes = JSON.parse(localStorage.getItem("seventhNotesObject"));
      var eighthNotes = JSON.parse(localStorage.getItem("eighthNotesObject"));
      var ninthNotes = JSON.parse(localStorage.getItem("ninthNotesObject"));
      var tenthNotes = JSON.parse(localStorage.getItem("tenthNotesObject"));
      var eleventhNotes = JSON.parse(localStorage.getItem("eleventhNotesObject"));
      var twelthNotes = JSON.parse(localStorage.getItem("twelthNotesObject"));

      if (firstNotes !== null) {
         firstNotesObject = firstNotes;
      }

      if (secondNotes !== null) {
         secondNotesObject = secondNotes;
      }

      if (thirdNotes !== null) {
         thirdNotesObject = thirdNotes;
      }

      if (fourthNotes !== null) {
         fourthNotesObject = fourthNotes;
      }

      if (fifthNotes !== null) {
         fifthNotesObject = fifthNotes;
      }

      if (sixthNotes !== null) {
         sixthNotesObject = sixthNotes;
      }

      if (seventhNotes !== null) {
         seventhNotesObject = seventhNotes;
      }

      if (eighthNotes !== null) {
         eighthNotesObject = eighthNotes;
      }

      if (ninthNotes !== null) {
         ninthNotesObject = ninthNotes;
      }

      if (tenthNotes !== null) {
         tenthNotesObject = tenthNotes;
      }

      if (eleventhNotes !== null) {
         eleventhNotesObject = eleventhNotes;
      }

      if (twelthNotes !== null) {
         twelthNotesObject = twelthNotes;
      }

      // setting the text for each object to populate on page load if there is any text saved
      $("#8a-text").text(firstNotesObject);
      $("#9a-text").text(secondNotesObject)
      $("#10a-text").text(thirdNotesObject)
      $("#11a-text").text(fourthNotesObject)
      $("#12p-text").text(fifthNotesObject)
      $("#1p-text").text(sixthNotesObject)
      $("#2p-text").text(seventhNotesObject)
      $("#3p-text").text(eighthNotesObject)
      $("#4p-text").text(ninthNotesObject)
      $("#5p-text").text(tenthNotesObject)
      $("#6p-text").text(eleventhNotesObject)
      $("#7p-text").text(twelthNotesObject)

   }

   function storedDailyNotes() {
      // stringify and set 'each object' key in localStare to array
      localStorage.setItem("firstNotesObject", JSON.stringify(firstNotesObject));
      localStorage.setItem("secondNotesObject", JSON.stringify(secondNotesObject));
      localStorage.setItem("thirdNotesObject", JSON.stringify(thirdNotesObject));
      localStorage.setItem("fourthNotesObject", JSON.stringify(fourthNotesObject));
      localStorage.setItem("fifthNotesObject", JSON.stringify(fifthNotesObject));
      localStorage.setItem("sixthNotesObject", JSON.stringify(sixthNotesObject));
      localStorage.setItem("seventhNotesObject", JSON.stringify(seventhNotesObject));
      localStorage.setItem("eighthNotesObject", JSON.stringify(eighthNotesObject));
      localStorage.setItem("ninthNotesObject", JSON.stringify(ninthNotesObject));
      localStorage.setItem("tenthNotesObject", JSON.stringify(tenthNotesObject));
      localStorage.setItem("eleventhNotesObject", JSON.stringify(eleventhNotesObject));
      localStorage.setItem("twelthNotesObject", JSON.stringify(twelthNotesObject));

   }
      
   populateCalendar()
   
   dailyNotes();

   // I created an event listener for each individual button. I don't think this was the most efficient method, but it is the method I could use to get this work

   $("#8a-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#8a-text")[0].value;

      if (notes === "") {
         return;
      }

      firstNotesObject = [];
      firstNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })
   
   $("#9a-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#9a-text")[0].value;

      if (notes === "") {
         return;
      }

      secondNotesObject = [];
      secondNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   
   $("#10a-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#10a-text")[0].value;

      if (notes === "") {
         return;
      }

      thirdNotesObject = [];
      thirdNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   $("#11a-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#11a-text")[0].value;

      if (notes === "") {
         return;
      }

      fourthNotesObject = [];
      fourthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   
   $("#12p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#12p-text")[0].value;

      if (notes === "") {
         return;
      }

      fifthNotesObject = [];
      fifthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   $("#1p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#1p-text")[0].value;

      if (notes === "") {
         return;
      }

      sixthNotesObject = [];
      sixthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   
   $("#2p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#2p-text")[0].value;

      if (notes === "") {
         return;
      }

      seventhNotesObject = [];
      seventhNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   $("#3p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#3p-text")[0].value;

      if (notes === "") {
         return;
      }

      eighthNotesObject = [];
      eighthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   
   $("#4p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#4p-text")[0].value;

      if (notes === "") {
         return;
      }

      ninthNotesObject = [];
      ninthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   $("#5p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#5p-text")[0].value;

      if (notes === "") {
         return;
      }

      tenthNotesObject = [];
      tenthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   
   $("#6p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#6p-text")[0].value;

      if (notes === "") {
         return;
      }

      eleventhNotesObject = [];
      eleventhNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   $("#7p-button").on("click", function (event) {
      event.preventDefault();
      var notes = $("#7p-text")[0].value;

      if (notes === "") {
         return;
      }

      twelthNotesObject = [];
      twelthNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   
   /* FROM CHAT WITH DONALD
   
   1) add event listener to $(this), connect to data points
   2) at the top, you can create variables that hold the data for each object item in the local storage and populates them on load
   3) use a for loop to get the colors and change them. could use a data-hour "9", etc., to populate the number, then use comparisons to a local time number (math.floor or parseInt to take the time and make it a number for comparisons)
   4) get rid of those crazy IDs i created
   5) make it work first then worry about simplifying it
   6) gotta find
   
   // it's a form
   // when someone clicks the submit button on the form, i want that value to go to variable
   // i want the value of that variable added to the object
   // it needs to be added to the object at the spot of its ID...
   // and that value somehow needs to stay in the value when i load the page
   
   // so when i load the page, the value still needs to be there
   // so that means if a variable
   
   
   
   
   
   */

})
