const myLibrary = [];


function Book(title, author, pages, genre){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.genre=genre;
}

function addBookToLibrary(){

}

//the key is to make a function that creates the book, then adds it to the Library

let bible= new Book('The Holy Bible: KJV Version', 'Jesus Christ', 2000, 'religion');
console.log(bible);