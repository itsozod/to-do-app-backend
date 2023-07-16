// array of notes
let myNotes = JSON.parse(localStorage.getItem('note')) || [];

function Notes(description, noteName) {
  this.description = description;
  this.noteName = noteName;
}

// function for rendering notes
function renderNotes() {
  const notesContainer = document.querySelector(".notes-container");
  notesContainer.innerHTML = "";

  const mainEmptyNotes = document.querySelector('.main-empty-notes');
  let description = document.querySelector("#note");
  let noteName = document.querySelector("#noteName");

  myNotes.forEach(function (note) {
    let noteEl = document.createElement("div");
    noteEl.classList.add("notes");
    noteEl.innerHTML = `
        <div class="note-content">
          <div class="desc-container">
            <img src="./images/delete-button.png" alt="delete" class="delete-note">
          </div>
          <textarea class="description">${note.description}</textarea>
          <textarea class="note-name">${note.noteName}</textarea>
        </div>
      `;
    notesContainer.appendChild(noteEl);
    mainEmptyNotes.style.display = 'none';
    setTimeout(() => {
      description.value = "";
      noteName.value = "";
    }, 500);

    const descriptionTextarea = noteEl.querySelector('.description');
    const noteNameTextarea = noteEl.querySelector('.note-name');

    descriptionTextarea.addEventListener('input', () => {
      note.description = descriptionTextarea.value;
      saveNotes();
    });

    noteNameTextarea.addEventListener('input', () => {
      note.noteName = noteNameTextarea.value;
      saveNotes();
    });

    // delete notes button
    const deleteNote = noteEl.querySelector(".delete-note");

    deleteNote.addEventListener("click", () => {
      const index = myNotes.indexOf(note);
      myNotes.splice(index, 1);

      if (myNotes.length === 0) {
        mainEmptyNotes.style.display = "flex";
      }
      renderNotes();
      setTimeout(() => {
        alert("Your note has been deleted");
      }, 500);
      console.log("Your note has been deleted");
      saveNotes();
    });
  });
}

// function for displaying notes after rendering them
function addNotes() {
  let description = document.querySelector("#note").value;
  let noteName = document.querySelector("#noteName").value;

  if ((description, noteName)) {
    let newNote = new Notes(description, noteName);
    myNotes.push(newNote);
    renderNotes();
    setTimeout(() => {
      alert("Your note has been added");
    }, 500);
    console.log("Your note has been added");
    saveNotes();
  }
}

function saveNotes() {
  localStorage.setItem('note', JSON.stringify(myNotes));
}

export { myNotes, addNotes, renderNotes };