const posts = [];

module.exports = class Post {
  constructor(title, date, author, text) {
    this.title = title;
    this.date = date;
    this.author = author;
    this.text = text;
  }

  save() {
    posts.push(this);
  }

  static fetchAll() {
    return posts;
  }
};
