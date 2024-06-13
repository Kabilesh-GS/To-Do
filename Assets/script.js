let todoArray = [];

displayTodos();

function displayTodos(){
  let displayString = '';
  for(let i =0;i<todoArray.length;i++){
    let todonames = todoArray[i].Name;
    let tododates = todoArray[i].Date;
    let html = `
      <div>
        <div>${todonames}</div>
        <div>${tododates}</div>
        <button onclick="
          todoArray.splice(${i},1);
        ">Remove</button>
      </div>  
    `;
    displayString +=html;
  }
  document.querySelector('.displayTodos').innerHTML = `${displayString}`;
}

function add(){
  let todoValue = document.querySelector('.todoTasks');
  let Name = todoValue.value;
  let todoDate = document.querySelector('.todoDate');
  let Date = todoDate.value;
  
  todoArray.push({
    Name: Name,
    Date: Date
  });
  console.log(todoArray);

  todoValue.value = '';
  todoDate.value = '';
  displayTodos();
}