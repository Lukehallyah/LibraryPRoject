let myLibrary = [];
//IMPORTANT= using let instead of const
//      makes it possible for myLibrary to change instead of splice() etc


const div=document.querySelector('.bookList');
const button = document.getElementById('addButton');
const input = document.querySelector('input');

const titleInp= document.getElementById('title');
const authorInp= document.getElementById('author');
const pagesInp= document.getElementById('pages');
const characterInp= document.getElementById('character');


//Constructor
function Book(title, author, pages, character){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.character=character;

    this.id=self.crypto.randomUUID();
}


//this.id is moved into myLibrary[] because it's part of the book, despite
//not being added in the constructor directly.

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

//TEST

function displayBook(book){
    const card = document.createElement('div');
    card.dataset.id=book.id;
    const span = document.createElement('div');
    const span2= document.createElement('div');
    const span3 = document.createElement('div');
    const span4 = document.createElement('div');


    //TEST
    const span5= document.createElement('div');
    const but1 = document.createElement('button');

     but1.addEventListener('click',(e)=>{
        const cardDiv= e.target.closest('div[data-id]');  //the div 'card' that includes book.id, selects just the div
        const thisId= cardDiv.dataset.id;  // selects the actual id inside the div for comparison.
        myLibrary=myLibrary.filter(b=>b.id.toString()!==thisId);  //filters and returns everything but that card
        cardDiv.remove() // supposedly removes that card

    })

    span5.appendChild(but1);
    span5.style.display='flex';
    span5.style.justifyContent='center';
    but1.textContent='Rem';
    but1.style.marginTop='2px';
    but1.style.marginBottom='2px';
    
   




    const span6=document.createElement('div');
    const but2 =document.createElement('input');
    span6.appendChild(but2);
    but2.type='radio';
    but2.name='read-status';
    but2.id='read-status';
    but2.value='read-yes';
    
    
    



    //TEST



    

    span.style.width='35%';
    span2.style.width='20%';
    span3.style.width='10%';
    span4.style.width= '15%';
    span5.style.width='10%';
    span6.style.width='10%';
    
    
    if(card){
        card.style.width='100%';
        card.style.display='flex';
        //card.style.border='2px solid white';
        card.style.borderLeft='none';
        card.style.marginBottom='5px';
        card.style.backgroundColor='white';
        card.style.margin='0';
        card.style.padding='0';
        card.style.marginTop='1vh';
        

        card.appendChild(span);
        span.textContent=book.title;
        card.appendChild(span2);
        span2.textContent=book.author;
        card.appendChild(span3);
        span3.textContent=book.pages;
        card.appendChild(span4);
        span4.textContent=book.character;
        card.appendChild(span5);
        card.appendChild(span6);


    }

    div.appendChild(card);

}

myLibrary.forEach(book=>displayBook(book));



//TEST




//LOGIC FOR ADDING BOOKS//



//WHY AM I REDOING A FUNCTION??
//Just take these values and pass them into the custructor adding them to myLibrary[]
//then when they're added, refresh the array and voila there it is

button.addEventListener('click',(e)=>{
    e.preventDefault();

    const title= titleInp.value;
    const author= authorInp.value;
    const pages= pagesInp.value;
    const character= characterInp.value;


    let addBook= new Book(title, author, pages, character);
    myLibrary.push(addBook);

    //REMEMBER!! UI AND DATA ARRAYS ARE 2 DIFFERENT THINGS
    //you can add to an array and it will never show
    //remember to fix the data, and then the UI too.
    displayBook(addBook);

    titleInp.value='';
    authorInp.value='';
    pagesInp.value='';
    characterInp.value='';



});
// defined the inputs
//made the inputs for Book constructor(title, author, pages, character) as variables
//those variables get taken into addBook
//push this new book to the array
//also display in the UI
//cleared the inputs