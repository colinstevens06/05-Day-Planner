
// i'm using an emtpy object globally to take in the notes for this one object
var firstNotesObject = [];

var submitButton = $("#submit-button")
var textAreaOne = $("#text-area-one");+


dailyNotes();

function dailyNotes() {
   // get stored notes from localStorage
   // parsing the JSON string to an object. the 'firstNotesObject' refers to the key for the object
   var storedNotes = JSON.parse(localStorage.getItem("firstNotesObject"));

   if (storedNotes !== null) {
      firstNotesObject = storedNotes;
   }

   textAreaOne.text(firstNotesObject);

}

function storedDailyNotes() {
   // stringify and set 'firstNotesObject' key in localStare to array
   localStorage.setItem("firstNotesObject", JSON.stringify(firstNotesObject));


}

submitButton.on("click", function(event) {
   event.preventDefault();
   var notes = textAreaOne[0].value;

   if (notes === "") {
      return;
   }

   firstNotesObject = [];
   firstNotesObject.push(notes)

   storedDailyNotes();
   dailyNotes();

})