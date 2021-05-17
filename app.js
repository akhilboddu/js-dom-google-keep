class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

class App {
    constructor() {
        this.notes = [];

        this.$activeForm = document.querySelector(".active-form");
        this.$inactiveForm = document.querySelector(".inactive-form");

        this.addEventListeners();
    }

    addEventListeners() {
        document.body.addEventListener("click", (event) => {
            this.handleFormClick(event);
        })
    }

    handleFormClick(event) {
        const isActiveFormClickedOn = this.$activeForm.contains(event.target);
        const isInactiveFormClickedOn = this.$inactiveForm.contains(event.target);

        if(isInactiveFormClickedOn) {
            this.$inactiveForm.style.display = "none";
            this.$activeForm.style.display = "block";
        }
    }

    addNote(id, { title, text }) {
        const newNote = new Note(id, title, text);
        this.notes = [...this.notes, newNote];
    }

    editNote(id, { title, text }) {
        this.notes = this.notes.map((note) => {
            if (note.id == id) {
                note.title = title;
                note.text = text;
            }
            return note;
        });
    }

    deleteNote(id) {
        this.notes = this.notes.filter((note) => note.id != id);
    }

    displayNotes() {
        this.notes.map((note) =>
            console.log(`
        ID: ${note.id}
        Title: ${note.title}
        Text: ${note.text}
      `)
        );
    }
}

const app = new App();

