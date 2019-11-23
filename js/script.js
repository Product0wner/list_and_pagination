
//const listItemsShown;
const studentList = document.querySelector("UL");
const itemsOfStudenList = studentList.children;
const paginationList = document.createElement("UL");

// only show the 10 first elements
for(let i = 10; i < itemsOfStudenList.length; i++){
   itemsOfStudenList[i].style.display = "none";
}

// First step create paginationList and append to the DOM
let createPagination = () => {
   paginationList.className = "pagination";
   studentList.parentNode.insertBefore(paginationList, studentList.nextSibling);

   // Then create 1 new li item for every 10 ListItems and append them to the paginationList
   for(let i = 0; i < itemsOfStudenList.length; i++) {
      if(i % 10 == 0) {
         let newLi = document.createElement("li");
         let pageIndex = paginationList.childNodes.length + 1;

         // Make the first item by default a different class compared to following items
         if(pageIndex === 1) {
            newLi.innerHTML = "<a class='active' href=#>"+ pageIndex +"</a>";
            paginationList.appendChild(newLi);
         } else {
            newLi.innerHTML = "<a class='' href=#>"+ pageIndex +"</a>";
            paginationList.appendChild(newLi);
         } 
      }
   }
}


paginationList.addEventListener("click", (e) => {
   e.preventDefault();
   targetIndex = parseInt(e.target.textContent, 10);

   // Make all items not selected
   for(i=0; i < paginationList.children.length; i++){
      paginationList.childNodes[i].lastChild.className = '';
   }
   // Make the clicked item selected
   e.target.className ="active";

   // Hide all items of the student list
   for(let i = 0; i < itemsOfStudenList.length; i++){
      itemsOfStudenList[i].style.display = "none";
   }
   
   // Show the Students for clicked pagination - Every page should have maximum of 10 Students.
   for(let i = (targetIndex-1)*10; i < targetIndex*10 ; i++){
   itemsOfStudenList[i].style.display = "block";
   }
});



createPagination();

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


/*
if tragetIndex is 1 dann Starte Bei (TargetIndex-1*10) Ende bei TargetIndex*10
if tragetIndex is 2 dann zeige (TargetIndex-1*10) bis TargetIndex*10

*/

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







// Remember to delete the comments that came with this file, and replace them with your own code comments.