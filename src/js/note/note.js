export default class Note {
  constructor(name, category, content) {
    this.name = name;
    this.category = category;
    this.content = content;
    this.dates = [];
  }
}
