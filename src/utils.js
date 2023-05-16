export const findNote = (notes, title) => {
        let foundNote = {};
        notes.find((note) => {
            if (note.article_title === title) {
                 return foundNote = note;
            }
           
    })
    return foundNote;
}

