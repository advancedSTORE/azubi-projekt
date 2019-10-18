const posts = []; // Post Array

module.exports = class Post {
  constructor(title, date, author, text) {
    // der contrsuctor speichern title, date, author, text. Siehe AddPost in controllers/post.js
    this.title = title;
    this.date = date;
    this.author = author;
    this.text = text;
  }

  save() {
    posts.push(this); // speichert das neue Class-Element im Array
  }

  static fetchAll() {
    return posts; // gibt das Array aus
  }
};
