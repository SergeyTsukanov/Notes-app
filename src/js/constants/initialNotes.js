import { v4 as uuidv4 } from "uuid";
import categories from "./categories";
import { parseDates } from "../utils";
const initialNotes = [
  {
    id: uuidv4(),
    name: "Simple Idea",
    created: new Date().toDateString(),
    category: categories[0],
    content: "Go to the park at 11/07/2023 ",
    isArchive: false,
    dates: parseDates("Go to the park at 11/07/2023"),
  },
  {
    id: uuidv4(),
    name: "learn React",
    created: new Date().toDateString(),
    category: categories[1],
    content: "build task notes app",
    isArchive: false,
    dates: parseDates("build task notes app"),
  },
  {
    id: uuidv4(),
    name: "learn Contenx API",
    created: new Date().toDateString(),
    category: categories[2],
    content: "For better understanding react",
    isArchive: false,
    dates: parseDates("For better understanding react"),
  },
  {
    id: uuidv4(),
    name: "Firefox",
    created: new Date().toDateString(),
    category: categories[0],
    content: "Install new version of Firefox",
    isArchive: false,
    dates: parseDates("Install new version of Firefox"),
  },
  {
    id: uuidv4(),
    name: "Sopping list",
    created: new Date().toDateString(),
    category: categories[1],
    content: "tomato,bread",
    isArchive: false,
    dates: parseDates("tomato,bread"),
  },
  {
    id: uuidv4(),
    name: "Books",
    created: new Date().toDateString(),
    category: categories[2],
    content: "The Lean Startup",
    isArchive: false,
    dates: parseDates("The Lean Startup"),
  },
  {
    id: uuidv4(),
    name: "newFeature",
    created: new Date().toDateString(),
    category: categories[0],
    content:
      "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
    isArchive: false,
    dates: parseDates(
      "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021"
    ),
  },
];
export default initialNotes;
