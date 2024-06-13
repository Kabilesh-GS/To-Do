let todoArray = [];

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
}