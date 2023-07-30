import initialNotes from "../constants/initialNotes";
import { renderItem } from "../render";
import { addNoteItem } from "../state";

const prepopulate = () => {
  for (const note of initialNotes) {
    addNoteItem(note);
    renderItem(note);
  }
};

export default prepopulate
