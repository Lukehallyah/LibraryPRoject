const myLibrary = [];
const div=document.querySelector('.bookList');
const button = document.getElementById('addButton');
const input = document.querySelector('input');


//Constructor
function Book(title, author, pages, character){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.character=character;

    this.id= self.crypto.randomUUID();
}


//Function to Add Books Manually
function addBookToLibrary(title, author, pages, character,){
    let newBook= new Book(title, author, pages, character);
    myLibrary.push(newBook);

}
//Manually adding each book to library
addBookToLibrary('Animorphs : The Invasion', 'K.A. Applegate', 184, 'Jake');
addBookToLibrary('Animorphs: The Visitor', 'K.A. Applegate', 175, 'Rachel')
addBookToLibrary('Animorphs: The Encounter', 'K.A. Applegate', 150, 'Tobias');
addBookToLibrary('Animorphs: The Message', 'K.A. Applegate', 151, 'Cassie');
addBookToLibrary('Animorphs: The Predator', 'K.A. Applegate', 152, 'Marco');





//PsuedoCode: 
//Need a card to be created in bookCard
//Each card is going to be a little box containing: title, author, pages, character





const titleInfo = document.getElementById('title');
const authorInfo = document.getElementById('author');
const pagesInfo = document.getElementById('pages');
const characterInfo = document.getElementById('character');


//LOGIC FOR ADDING BOOKS//

button.addEventListener('click',(e)=>{
    e.preventDefault();

    const card = document.createElement('div');
    const span = document.createElement('p');
    const span2= document.createElement('p');
    const span3 = document.createElement('p');
    const span4 = document.createElement('p');

    span.style.width='40%';
    span2.style.width='20%';
    span3.style.width='20%';
    span4.style.width= '20%';
    
    const title = titleInfo.value;
    const author = authorInfo.value;
    const pages = pagesInfo.value;
    const character= characterInfo.value;

    title.value= '';
    author.value= '';
    pages.value='';
    character.value='';
    
    
    if(card){
        card.style.width='100%';
        card.style.display='flex';
        card.style.border='2px solid white';
        card.style.borderLeft='none';
        card.style.marginBottom='5px';
        card.style.backgroundColor='white';

        card.appendChild(span);
        span.textContent=title;
        card.appendChild(span2);
        span2.textContent=author;
        card.appendChild(span3);
        span3.textContent=pages;
        card.appendChild(span4);
        span4.textContent=character;


    }

    
    div.appendChild(card);

    

});