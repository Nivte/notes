let noteArr = [];

let $zone = document.getElementById("zone");

let $addNoteBtn = document.getElementById("addNoteBtn");

$addNoteBtn.addEventListener("click", addNote);

function getNotes() {
  console.log(noteArr);
}
getNotes();

let n = 0;

function addNote() {
  let singleNote = { id: n };
  noteArr.push(singleNote);
  console.log(noteArr);

  renderAddNote();
  n++;
}

function deleteNote() {
  noteArr.splice(event.target.id[6], 1);
  console.log(noteArr);
}
