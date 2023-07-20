function renderAddNote() {
  $zone.innerHTML += `       <div id="note${n}" class="note">
  <textarea name="" id="textBox" cols="30" rows="10">

  </textarea>
 
  <button onclick="deleteNote()" id="delBtn${n}" class="delBtn" >delete</button>
</div>`;
}

function renderDelNote() {
  
   
  
}
