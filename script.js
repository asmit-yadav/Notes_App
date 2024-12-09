// Initialize an empty array or retrieve existing notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to render notes to the UI
function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; // Clear the container
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <p>${note}</p>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteElement);
    });
}

// Function to add a new note
function addNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() !== '') {
        notes.push(noteInput); // Add note to array
        localStorage.setItem('notes', JSON.stringify(notes)); // Save to localStorage
        document.getElementById('noteInput').value = ''; // Clear input field
        renderNotes(); // Update UI
    } else {
        alert('Note cannot be empty');
    }
}

// Function to edit an existing note
function editNote(index) {
    const updatedNote = prompt('Edit your note:', notes[index]);
    if (updatedNote !== null && updatedNote.trim() !== '') {
        notes[index] = updatedNote; // Update the note in the array
        localStorage.setItem('notes', JSON.stringify(notes)); // Update localStorage
        renderNotes(); // Update UI
    }
}

// Function to delete a note
function deleteNote(index) {
    notes.splice(index, 1); // Remove the note from the array
    localStorage.setItem('notes', JSON.stringify(notes)); // Update localStorage
    renderNotes(); // Update UI
}

// Initial render to load existing notes
renderNotes();
