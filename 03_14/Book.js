class Book {
  constructor(title, author, pages, read, dateAcquired) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.dateAcquired = dateAcquired;
  }

  toggleRead(readStatus) {
    this.readStatus = readStatus;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages;
  }

  getBookAge() {
    let now = new Date().now();
    let acquired = new Date(this.dateAcquired).now();
    let elapsed = now - acquired;
    let hoursElapsed = Math.floor(elapsed / (1000 * 3600 * 24));
    return hoursElapsed + " hours";
  }
}

export default Book;
