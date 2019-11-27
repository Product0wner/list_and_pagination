
const students = document.querySelectorAll("UL.student-list > li ");
const studentsPerPage = 10;
const pagination = document.createElement("UL");
const searchButton = document.querySelector("div.student-search button");

// Function to only show the stundents for selected pagination
let showStudents = (list, page) => {
   let startIndex = (page -1) * studentsPerPage;
   let stopIndex = (page * studentsPerPage)-1;
   for(let i = 0; i < list.length; i++){
      if(i < startIndex || i > stopIndex) {
         list[i].style.display = "none";
      } else {
         list[i].style.display = "block";
      }
   }
}


// Show the first 10 stundes when page is loaded
for(let i = studentsPerPage; i < students.length; i++){
   students[i].style.display = "none";
}

// Search for students by name
searchButton.addEventListener("click", (e) => {
   let search = document.querySelector("div.student-search input");
   for (let i = 0; i < students.length; i++) {
      let studentName = students[i].querySelector("h3").textContent;
      if (studentName.includes(search.value)){
         students[i].style.display = "block";
      } else {
         students[i].style.display = "none";
      }
   }; 
   search.value = "";
});



// Create pagination and append to the DOM
let createPaginationPages = () => {
   pagination.className = "pagination";
   let studentList = students[0].parentNode;
   studentList.parentNode.insertBefore(pagination, studentList.nextSibling);

   // Then create 1 new li item for every 10 ListItems and append them to the pagination
   for(let i = 0; i < students.length; i++) {
      if(i % studentsPerPage === 0) {
         let newLi = document.createElement("li");
         let pageIndex = pagination.childNodes.length + 1;

         // Make the first item by default a different class compared to following items
         if(pageIndex === 1) {
            newLi.innerHTML = "<a class='active' href=#>"+ pageIndex +"</a>";
            pagination.appendChild(newLi);
         } else {
            newLi.innerHTML = "<a class='' href=#>"+ pageIndex +"</a>";
            pagination.appendChild(newLi);
         } 
      }
   }
}
createPaginationPages();

// Update based on click on pagination
pagination.addEventListener("click", (e) => {
   e.preventDefault();

   // Make all items not selected again
   for(i=0; i < pagination.children.length; i++){
      pagination.childNodes[i].lastChild.className = '';
   }
   // Make the clicked item selected
   e.target.className ="active";
   let pageIndex = parseInt(e.target.textContent, 10);

   // show only the students for selected page.
   showStudents(students,pageIndex);
});



