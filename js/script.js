/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

//const listItemsShown;
const allListItmesStudents = document.querySelectorAll("LI");
const studentList = document.querySelector("UL");


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

let hideElements = () => {
   allListItmesStudents[0].style.display = "none";
}
hideElements();

/*
take list of all students and loop through.
if (click on element 1) display list items with i smaller than 10
if (click in element 2) display list items with i <10 and smaller 20 smaller
if (click on elemt 3)



*/



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.

   interate trough the length of the student list
   after every 10th items in the list create a new page.

***/

let createPagination = () => {
   // paginationList is created an append to the dom
   const paginationList = document.createElement("ul");
   paginationList.className = "pagination"
   studentList.parentNode.insertBefore(paginationList, studentList.nextSibling);

   // Now create 1 new li item for every 10 ListItems and append them to the paginationList
   for(let i = 0; i < allListItmesStudents.length; i+=10) {
      if(i) {
         let newLi = document.createElement("li");
         paginationList.appendChild(newLi);
      }
   };

}

createPagination();





// Remember to delete the comments that came with this file, and replace them with your own code comments.