// the first thing I need to do is dynamically create all my rows. each row needs a 1-column field to hold the time of day. it needs to increase one hour each time - i'm going to try what i did w/ the last homework where there's a variable that increases at the end of the function... but maybe I need a for loop to create everything? I'm thinking I need a for loop to create everything. I can't do that with the iterator idea because that was dependent on the user clicking the correct answer for the onclick action to take. okay, so let's create the for loop to start

var mainContainerDiv = $("#main-container")

var timesArray = ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm"]

function populateCalendar() {
   for (var i = 0; i < timesArray.length; i++) {
      // creating the elements for each row in the planner
      
      var rowDiv = $("<div>")
      var timeCol = $("<div>")
      var notesCol = $("<div>")
      var notesTextArea = $("<textarea>")
      var saveNotesCol = $("<div>")
      var saveIcon = $("<i>")

      // giving classes and content to the time column
      timeCol.attr("class", "col-md-1 time-of-day")
      timeCol.text(timesArray[i])

      // setting up the notes section
      notesCol.attr("class", "col-md-10 daily-notes form-group")
      
      // setting up text area with bootsrap form class, data-notes so that this will connect to the save button and the local storage, and an id because I know each one will need an individual id at some point
      notesTextArea.attr("class", "form-control")
      notesTextArea.attr("data-notes", timesArray[i])
      notesTextArea.attr("id", timesArray[i] + '-text')

      // adding the notes text area to the column
      notesCol.append(notesTextArea)

      // save column
      saveNotesCol.attr("class", "col-md-1 save-daily-notes")
      saveNotesCol.attr("id", "save-daily-notes")

      //adding save icon to div
      saveIcon.attr("class", "fa fa-save")
      saveNotesCol.append(saveIcon)

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

populateCalendar()
