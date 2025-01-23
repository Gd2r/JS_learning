function Book(title,author,pages,read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() { return `${this.title}, ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`}
}

const LOTR = new Book("The Lord of the Rings" , "J.R.R Tolkien" , 1178 , false);

console.log(LOTR.info());

// 5la9 5lh b3den