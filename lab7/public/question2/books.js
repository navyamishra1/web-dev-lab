function displayBooks(data){

let html="";

data.forEach(book=>{

html+=`
<div class="book">

<h3>${book.title}</h3>

<p>Author: ${book.author}</p>

<p>Category: ${book.category}</p>

<p>Price: ${book.price}</p>

<p>Rating: ${book.rating}</p>

</div>
`;

});

document.getElementById("books").innerHTML=html;

}



function searchBook(){

const title=document.getElementById("search").value;

fetch("/books/search?title="+title)
.then(res=>res.json())
.then(displayBooks);

}



function sortPrice(){

fetch("/books/sort/price")
.then(res=>res.json())
.then(displayBooks);

}



function sortRating(){

fetch("/books/sort/rating")
.then(res=>res.json())
.then(displayBooks);

}



function topBooks(){

fetch("/books/top")
.then(res=>res.json())
.then(displayBooks);

}