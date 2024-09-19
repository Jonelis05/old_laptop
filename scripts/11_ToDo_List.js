

const todoList = [{
   name: 'make dinner',
   dueDate: '2022-12-22' 
},
   {
    name: 'wash dishes',
    dueDate: '2022-12-22'
   }
];

renderTodoList();

   function renderTodoList(){
      let todoListHTML = '';

      for(let i = 0; i < todoList.length; i++){
         const todoObj = todoList[i];
         const name = todoObj.name;
         const dueDate = todoObj.dueDate;
         const html = `

            <div>${name}</div>
            <div> ${dueDate} </div>
         <button onclick="
         todoList.splice(${i}, 1);
         renderTodoList();
         " class="delete-todo-button">Delete</button>

            `;
         todoListHTML += html;
      }
      console.log(todoListHTML);
      
      document.querySelector('.js-todo-list')
         .innerHTML = todoListHTML;
   }



function addTodo(){
   const inputElement = document.querySelector('.js-name-input'); // gaunam įvestą elementą arba kitaip TODO variantą
   const name = inputElement.value; // priskiriam gautam elelementui vardą
  
  
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

  
   todoList.push({
      /*
      name: name,
      dueDate: dueDate,
*/
      name,
      dueDate
}); 

// įkeliam elementą į sąrašą
   console.log(todoList);

   inputElement.value = '';

   renderTodoList();
}