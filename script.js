const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contadorTareas = 0
let contadorTareasPorHacer = 0

itemCountSpan.innerHTML = contadorTareas
uncheckedCountSpan.innerHTML = contadorTareasPorHacer


function addTodo() {
  // alert('Boton Add TODO clickeado!')
  let todo = prompt('Porfavor, escriba una tarea')

  if (todo){
    itemCountSpan.innerHTML = ++contadorTareas
    uncheckedCountSpan.innerHTML = ++contadorTareasPorHacer
    const text = document.createTextNode(todo)

    const Tarea = document.createElement('label')
    Tarea.setAttribute('class', classNames.TODO_TEXT)
    Tarea.appendChild(text)

    const eliminar = document.createElement('button');
    eliminar.setAttribute('onclick', 'borrar()');
    eliminar.setAttribute('class', classNames.TODO_DELETE);
    eliminar.innerText = 'ELiminar tarea';

    const item = document.createElement('li')
    item.setAttribute('class', classNames.TODO_ITEM)
    item.appendChild(Tarea)
    item.appendChild(eliminar)


    list.appendChild(item)
    
  }
  function borrar() {
  alert('Tarea Eliminada')
 }
}