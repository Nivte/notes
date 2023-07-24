function convert() {
  noteArr.length == 0 ? "" : (n = 0);

  for (i = 0; i < noteArr.length; i++) {
    $zone.innerHTML += `  

  
 
       <div id="note${n}" class="note">
 
       <p class="date">${noteArr[noteArr.length - 1].dateCreated.getDate()}/ ${
      noteArr[noteArr.length - 1].dateCreated.getMonth() + 1
    }
       ${noteArr[noteArr.length - 1].dateCreated.getFullYear()}</p>
     
   <textarea name="" id="textBox${n}" class="textBox" cols="30" rows="10">
${noteArr[n].userWrote}
   </textarea>
  
   <button onclick="deleteNote()" id="delBtn${n}" class="delBtn" >Delete</button>
   <button onclick="saveValue()" id="saveValueBtn${n}" class="saveValueBtn">Save Value
   </button>
   <div class="serial"> ${n} </div>
 </div>`;
    n++;
  }

  console.log($zone);
}

convert();
// localStorage.clear()

function renderAddNote() {


  $zone.innerHTML += `  

 

      <div id="note${n}" class="note">
    
      <p class="date">${noteArr[noteArr.length - 1].dateCreated.getDate()}/ ${
    noteArr[noteArr.length - 1].dateCreated.getMonth() + 1
  }
          ${noteArr[noteArr.length - 1].dateCreated.getFullYear()}</p>
    
  <textarea name="" id="textBox${n}" class="textBox" cols="30" rows="10">
  ${noteArr[n].userWrote}
  </textarea>
 
  <button onclick="deleteNote()" id="delBtn${n}" class="delBtn" >Delete</button>
  <button onclick="saveValue()" id="saveValueBtn${n}" class="saveValueBtn">Save Value</button>
  <div class="serial"> ${n} </div>
</div>`;

}

function renderDelNote() {
  let deletedR = event.target.closest("div");
  $zone.removeChild(deletedR);
  console.log(n);
  return deletedR;
}

// localStorage.clear()

// let html = localStorage.getItem("notesRender")
//   ? localStorage.getItem("notesRender")
//   : `<div id="zone" class="zone">`;

// function renderNoteZone() {
//   html += renderAddNote();
//   html + `</div>`;
//   // console.dir(html);
//   saveRender();
//   renderPage();
// }

// let deletedR = "";
// function renderDelNote() {
// deletedR = event.target.closest("div");
// deletedR = event.target.closest("div");
// html.remove(deletedR)
// // html.removeChild(deletedR);
// deletedR = "";
// let deleted = event.target.closest("div");
// console.log((deleted));
// html.replace(deleted, "");
// html.slice(deleted);
// console.log(html);
// }
// console.log(html);
function renderDelAll() {
  $zone.innerHTML = "";
}

// function saveRender() {
//   localStorage.setItem("notesRender", html);
// }

// console.log(localStorage.getItem("notesRender"));

// function saveRender() {
//   localStorage.setItem(
//     "notesRender",
//     `

//   <p class="date">${noteArr[noteArr.length - 1].dateCreated.getDate()}/ ${
//       noteArr[noteArr.length - 1].dateCreated.getMonth() + 1
//     }
//   ${noteArr[noteArr.length - 1].dateCreated.getFullYear()}</p>

//       <div id="note${n}" class="note">

//   <textarea name="" id="textBox" cols="30" rows="10">

//   </textarea>

//   <button onclick="deleteNote()" id="delBtn${n}" class="delBtn" >delete</button>
//   <div class="serial"> ${n} </div>
// </div>`

//   );

//   //   let html = "";
//   // html=JSON.stringify($zone)
//   //   console.log(html);
// }

// saveRender();

// deletedR = document.getElementById(`note${event.target.id[6]}`);

// $zone.removeChild(deletedR);

// deletedR = "";
//  deletedR = console.log(event.target.closest("div"));
//   $zone.removeChild(deletedR)

// let $body = document.getElementById("body");
// console.log($body);

//test

// let a = document.createElement("button");

// console.log(a);

// $body.appendChild(a);

// function test() {
// $body.removeChild("<button></button>")

// }

// localStorage.clear()

let field = document.getElementById("textBox1");

// function findValue() {
//   console.dir((field.value = "mmmm"));
// }
