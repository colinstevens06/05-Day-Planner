$(document).ready(function () {

   // the first thing I need to do is dynamically create all my rows. each row needs a 1-column field to hold the time of day. it needs to increase one hour each time - i'm going to try what i did w/ the last homework where there's a variable that increases at the end of the function... but maybe I need a for loop to create everything? I'm thinking I need a for loop to create everything. I can't do that with the iterator idea because that was dependent on the user clicking the correct answer for the onclick action to take. okay, so let's create the for loop to start

   var mainContainerDiv = $("#main-container")

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

   var btn1 = $("#8a-button")
   var btn2 = $("#9a-button")
   var btn3 = $("#10a-button")
   var btn4 = $("#11a-button")
   var btn5 = $("#12p-button")
   var btn6 = $("#1p-button")
   var btn7 = $("#2p-button")
   var btn8 = $("#3p-button")
   var btn9 = $("#4p-button")
   var btn10 = $("#5p-button")
   var btn11 = $("#6p-button")
   var btn12 = $("#7p-button")

   var textAreaOne = $("#8a-text")
   console.log(textAreaOne)
   var textAreaTwo = $("#9a-text")
   var textAreaThree = $("#10a-text")
   var textAreaFour = $("#11a-text")
   var textAreaFive = $("#12p-text")
   var textAreaSix = $("#1p-text")
   var textAreaSeven = $("#2p-text")
   var textAreaEight = $("#3p-text")
   var textAreaNine = $("#4p-text")
   var textAreaTen = $("#5p-text")
   var textAreaEleven = $("#6p-text")
   var textAreaTwelve = $("#7p-text")

   // localStorage.setItem('dailyNotesObject', JSON.stringify(dailyNotesObject));
   // var retrieveDailyNotes = JSON.parse(localStorage.getItem('dailyNotesObject'))
   // console.log(retrieveDailyNotes)

   dailyNotes();

   populateCalendar()

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

      textAreaOne.text(firstNotesObject);
      textAreaTwo.text(secondNotesObject)
      textAreaThree.text(thirdNotesObject)
      textAreaFour.text(fourthNotesObject)
      textAreaFive.text(fifthNotesObject)
      textAreaSix.text(sixthNotesObject)
      textAreaSeven.text(seventhNotesObject)
      textAreaEight.text(eighthNotesObject)
      textAreaNine.text(ninthNotesObject)
      textAreaTen.text(tenthNotesObject)
      textAreaEleven.text(eleventhNotesObject)
      textAreaTwelve.text(twelthNotesObject)

   }

   function storedDailyNotes() {
      // stringify and set 'firstNotesObject' key in localStare to array
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
console.group(btn1);
   btn1.on("click", function (event) {
      event.preventDefault();
      console.log("hello!")
      var notes = textAreaOne[0].value;
      console.log(textAreaOne[0].valuea)

      if (notes === "") {
         return;
      }

      firstNotesObject = [];
      firstNotesObject.push(notes)

      storedDailyNotes();
      dailyNotes();

   })

   // btn2.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       secondNotesObject = [];
   //       secondNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn3.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn4.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn5.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn6.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn7.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn8.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn9.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn10.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn11.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })

   // btn12.on("click", function (event) {
   //       event.preventDefault();
   //       var notes = textAreaOne[0].value;

   //       if (notes === "") {
   //          return;
   //       }

   //       firstNotesObject = [];
   //       firstNotesObject.push(notes)

   //       storedDailyNotes();
   //       dailyNotes();

   //    })






   // // initialize the 

   // // function to store data locally
   // function dailyNotesData() {
   //    var storedDailyNotesArray = JSON.parse(localStorage.getItem("dailyNotesObject"))

   //    // if notes were retrieved from local storage, update the array to it
   //    if (storedDailyNotesArray !== null) {
   //       dailyNotesObject = storedDailyNotesArray;
   //    }

   //    // populate the appropriate text object with the saved data
   //    for (var i = 0; i < dailyNotesObject.length; i++) {
   //       var textAreaID = "#" + timesArray[i] + "-text"
   //       $(textAreaID).text(dailyNotesObject[i])
   //       console.log(dailyNotesObject[i])
   //    }
   // }

   // dailyNotesData();

   // // this funtion sets the key for the dailyNotesObject and sets the object to add
   // function storedDailyNotes() {
   //    localStorage.setItem("dailyNotesObject", JSON.stringify(dailyNotesObject))
   // }

   // function saveNotesClick() {
   //    event.preventDefault()
   //    var notes = $(this).attr("data-notes")


   // }

   // $(".btn-save").on("click", saveNotesClick)


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
