export const findNote = (notes, title) => {
    console.log("utilities", notes);
        const result = notes.find((note) => {
            if (note.article_title === title) {
                 return note;
            }})
        return result ? result : {}
}

