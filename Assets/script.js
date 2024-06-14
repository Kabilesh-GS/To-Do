let getitem = localStorage.getItem('todoarray');
let todoArray = getitem ? JSON.parse(getitem) : [];

displayTodos();

function displayTodos(){
  let displayString = '';
  for(let i =0;i<todoArray.length;i++){
    let todonames = todoArray[i].Name;
    let tododates = todoArray[i].Date;
    let html = `
      <div class="Generated">
        <div class="todo">
          <p>${todonames}</p>
        </div>
        <div class="date">
          <p>${tododates}</p>
        </div>
        <div class="deletebtn">
          <button class="delete" onclick="
            todoArray.splice(${i},1);
            displayTodos();
            localstorage();
          ">Remove</button>
        </div>
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
  if(Name == '' || Date == ''){
    document.querySelector('.error').innerHTML = 'Add some To-Dos with date';
    setTimeout(function(){
      document.querySelector('.error').innerHTML = '';
    },5000);
  }
  else{
    todoArray.push({
      Name: Name,
      Date: Date
    });
    todoValue.value = '';
    todoDate.value = '';
  console.log(todoArray);
  }
  displayTodos();
  localstorage();
}

function localstorage(){
  let jsonArray = JSON.stringify(todoArray);
  localStorage.setItem('todoarray',jsonArray);
}