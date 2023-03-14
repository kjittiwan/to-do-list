const list = document.querySelector('ul');
const item = document.querySelector('#item');
const form = document.querySelector('#taskForm');
const clrBtn = document.querySelector('#clear');

form.addEventListener('submit',function(e){
  e.preventDefault()
  if (item.value!=""){
    createListItem()
    item.value='';
    
  }
  
})
clrBtn.addEventListener('click',function(){
  list.textContent="";
})
function createListItem(){
  const listItem = document.createElement('li')
  listItem.textContent = item.value;
  list.appendChild(listItem); 
  const doneBtn = document.createElement('button');
  listItem.appendChild(doneBtn);
  doneBtn.textContent = 'Done'; 
  const xBtn = document.createElement('button');
  listItem.appendChild(xBtn);
  xBtn.textContent = 'x';
  doneBtn.addEventListener('click',function(){
    listItem.style.color = 'gray';
    listItem.style.textDecoration = 'line-through';
  })
  xBtn.addEventListener('click',function(){
    listItem.remove();
  })
}


