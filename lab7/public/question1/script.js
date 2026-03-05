let editId = null;


function addNote(){

const title = document.getElementById("title").value;
const subject = document.getElementById("subject").value;
const desc = document.getElementById("desc").value;

if(title=="" || subject=="" || desc==""){
alert("Please fill all fields");
return;
}

const data={
title:title,
subject:subject,
description:desc
};


if(editId){

fetch("/notes/"+editId,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
})
.then(()=>{
editId=null;
clearInputs();
loadNotes();
});

}

else{

fetch("/notes",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
})
.then(()=>{
clearInputs();
loadNotes();
});

}

}


function deleteNote(id){

if(confirm("Delete this note?")){

fetch("/notes/"+id,{
method:"DELETE"
})
.then(()=>loadNotes());

}

}


function editNote(id,title,subject,description){

document.getElementById("title").value=title;
document.getElementById("subject").value=subject;
document.getElementById("desc").value=description;

editId=id;

}


function loadNotes(){

fetch("/notes")
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(note=>{

html+=`
<div class="note">

<h3>${note.title}</h3>

<b>Subject:</b> ${note.subject}

<p>${note.description}</p>

<button onclick="editNote('${note._id}','${note.title}','${note.subject}','${note.description}')">Edit</button>

<button onclick="deleteNote('${note._id}')">Delete</button>

</div>
`;

});

document.getElementById("notes").innerHTML=html;

});

}


function clearInputs(){

document.getElementById("title").value="";
document.getElementById("subject").value="";
document.getElementById("desc").value="";

}

loadNotes();