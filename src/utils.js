export const findNote = (notes, title) => {
        const result = notes.find((note) => {
            let foundNote;
            if (note.article_title === title) {
                 foundNote = note;
            }
            return foundNote
        })
        return result ? result : {}
}

