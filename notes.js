// new variable that contains the stored data
let savedNotes = localStorage.getItem("notes");
// the array's data is the stored data + restoring new Date function that was 'broken', with its original data
let noteArr = savedNotes
  ? JSON.parse(savedNotes).map((item) => ({
      ...item,
      dateCreated: new Date(item.dateCreated),
    }))
  : [];
console.log(noteArr);

// function that saves the array's data for next time
function save() {
  localStorage.setItem("notes", JSON.stringify(noteArr));
}

// id save
let n = localStorage.getItem("currentId")
  ? Number(localStorage.getItem("currentId"))
  : 0;

function saveId() {
  localStorage.setItem("currentId", n);
}

function getNotes() {
  console.log(noteArr);
  save();
  saveId();
}

let $zone = document.getElementById("zone");

let $addNoteBtn = document.getElementById("addNoteBtn");

$addNoteBtn.addEventListener("click", addNote);

function addNote() {
  let singleNote = { Id: n, dateCreated: new Date(), userWrote: "" };
  noteArr.push(singleNote);
  renderAddNote();
  n++;
  getNotes();

  // renderNoteZone();
}

function deleteNote() {
  let deleted = event.target.id[7]
    ? String(event.target.id[6]) + String(event.target.id[7])
    : event.target.id[6];

  if (noteArr.find((x) => x.Id == deleted)) {
    noteArr.splice(
      noteArr.findIndex((x) => x.Id == deleted),
      1
    );
  }
  // console.log(noteArr.findIndex(x=>x.Id==event.target.id[6]))
  save();
  saveId();
  getNotes();
  renderDelNote();
}

function delAllNotes() {
  localStorage.removeItem("currentId");
  n = 0;
  localStorage.removeItem("notes");
  noteArr = [];
  save();
  saveId();
  renderDelAll();
}

// localStorage.clear();

function saveValue() {
  let written = document.getElementById(
    `textBox${
      event.target.id[13]
        ? event.target.id[12] + event.target.id[13]
        : event.target.id[12]
    }`
  );
  noteArr[
    event.target.id[13]
      ? event.target.id[12] + event.target.id[13]
      : event.target.id[12]
  ].userWrote = written.value;
  console.log(noteArr);
  save();
  saveId();
}



