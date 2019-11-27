
//const listItemsShown;
const studentList = document.querySelector("UL");
const students = studentList.children;
const paginationList = document.createElement("UL");
const searchButton = document.querySelector("div.student-search button");

// only show the 10 first elements
for(let i = 10; i < students.length; i++){
   students[i].style.display = "none";
}

// Search Feature
searchButton.addEventListener("click", (e) => {
   let search = document.querySelector("div.student-search input");
   for (let i = 0; i < students.length; i++) {
      let studentName = students[i].querySelector("h3").textContent;
      if (studentName.includes(search.value)){
         students[i].style.display = "block";
         console.log(studentName)
      } else {
         students[i].style.display = "none";
      }
   }; 
   search.value = "";
});

// Create paginationList and append to the DOM
let createPagination = () => {
   paginationList.className = "pagination";
   studentList.parentNode.insertBefore(paginationList, studentList.nextSibling);

   // Then create 1 new li item for every 10 ListItems and append them to the paginationList
   for(let i = 0; i < students.length; i++) {
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


// Navigate through pagination
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
   for(let i = 0; i < students.length; i++){
      students[i].style.display = "none";
   }
   
   // Show the Students for clicked pagination - Every page should have maximum of 10 Students.
   for(let i = (targetIndex-1)*10; i < targetIndex*10 ; i++){
   students[i].style.display = "block";
   }
});

createPagination();
